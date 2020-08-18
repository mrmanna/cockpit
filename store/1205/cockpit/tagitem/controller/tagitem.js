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

function io_cloudoffice_platform_cockpit_tagitem_ListItemView$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_tagitem_ListItemView$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_tagitem_ListItemView$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_tagitem_ListItemView$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_tagitem_ListItemView$1fillInstOf });
    io_cloudoffice_platform_cockpit_tagitem_ListItemView$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/tagitem/ListItemView$1';
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
vm.io_cloudoffice_platform_cockpit_tagitem_ListItemView$1 = io_cloudoffice_platform_cockpit_tagitem_ListItemView$1;


function io_cloudoffice_platform_cockpit_tagitem_ListItemView$Html4JavaType() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_tagitem_ListItemView$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_io_cloudoffice_platform_cockpit_tagitem_ListItemView || (refs_io_cloudoffice_platform_cockpit_tagitem_ListItemView = io_cloudoffice_platform_cockpit_tagitem_ListItemView(false))).constructor.$class, (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$ListItemViewModel || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$ListItemViewModel = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$ListItemViewModel(false))).constructor.$class, (7), 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemId", 0, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemName", 1, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemType", 2, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"hasOwnerPermission", 3, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"hasAdminPermission", 4, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"hasWritePermission", 5, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"hasReadPermission", (6), 0, 0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLio_cloudoffice_platform_cockpit_tagitem_ListItemView_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 44; break IF; }
  case 1:{ gt = 61; break IF; }
  case 2:{ gt = 78; break IF; }
  case 3:{ gt = 95; break IF; }
  case 4:{ gt = 115; break IF; }
  case 5:{ gt = 135; break IF; }
  case 6:{ gt = 155; break IF; }
  default: { gt = 175; break IF; }
}
    }
    X_44: for (;;) { IF: if (gt <= 44) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_tagitem_ListItemView || (refs_io_cloudoffice_platform_cockpit_tagitem_ListItemView = io_cloudoffice_platform_cockpit_tagitem_ListItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_tagitem_ListItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemId__VLjava_lang_String_2(stA1);
return;
    }
    X_61: for (;;) { IF: if (gt <= 61) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_tagitem_ListItemView || (refs_io_cloudoffice_platform_cockpit_tagitem_ListItemView = io_cloudoffice_platform_cockpit_tagitem_ListItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_tagitem_ListItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemName__VLjava_lang_String_2(stA1);
return;
    }
    X_78: for (;;) { IF: if (gt <= 78) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_tagitem_ListItemView || (refs_io_cloudoffice_platform_cockpit_tagitem_ListItemView = io_cloudoffice_platform_cockpit_tagitem_ListItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_tagitem_ListItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemType__VLjava_lang_String_2(stA1);
return;
    }
    X_95: for (;;) { IF: if (gt <= 95) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_tagitem_ListItemView || (refs_io_cloudoffice_platform_cockpit_tagitem_ListItemView = io_cloudoffice_platform_cockpit_tagitem_ListItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_tagitem_ListItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setHasOwnerPermission__VZ(stI1);
return;
    }
    X_115: for (;;) { IF: if (gt <= 115) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_tagitem_ListItemView || (refs_io_cloudoffice_platform_cockpit_tagitem_ListItemView = io_cloudoffice_platform_cockpit_tagitem_ListItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_tagitem_ListItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setHasAdminPermission__VZ(stI1);
return;
    }
    X_135: for (;;) { IF: if (gt <= 135) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_tagitem_ListItemView || (refs_io_cloudoffice_platform_cockpit_tagitem_ListItemView = io_cloudoffice_platform_cockpit_tagitem_ListItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_tagitem_ListItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setHasWritePermission__VZ(stI1);
return;
    }
    X_155: for (;;) { IF: if (gt <= 155) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_tagitem_ListItemView || (refs_io_cloudoffice_platform_cockpit_tagitem_ListItemView = io_cloudoffice_platform_cockpit_tagitem_ListItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_tagitem_ListItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setHasReadPermission__VZ(stI1);
return;
    }
    X_175: for (;;) { IF: if (gt <= 175) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_tagitem_ListItemView_2I = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 44; break IF; }
  case 1:{ gt = 49; break IF; }
  case 2:{ gt = 54; break IF; }
  case 3:{ gt = 59; break IF; }
  case 4:{ gt = 67; break IF; }
  case 5:{ gt = 75; break IF; }
  case 6:{ gt = 83; break IF; }
  default: { gt = 91; break IF; }
}
    }
    X_44: for (;;) { IF: if (gt <= 44) {

var stA0 = lcA1.getItemId__Ljava_lang_String_2();
return stA0;
    }
    X_49: for (;;) { IF: if (gt <= 49) {

var stA0 = lcA1.getItemName__Ljava_lang_String_2();
return stA0;
    }
    X_54: for (;;) { IF: if (gt <= 54) {

var stA0 = lcA1.getItemType__Ljava_lang_String_2();
return stA0;
    }
    X_59: for (;;) { IF: if (gt <= 59) {

var stI0 = lcA1.isHasOwnerPermission__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_67: for (;;) { IF: if (gt <= 67) {

var stI0 = lcA1.isHasAdminPermission__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_75: for (;;) { IF: if (gt <= 75) {

var stI0 = lcA1.isHasWritePermission__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_83: for (;;) { IF: if (gt <= 83) {

var stI0 = lcA1.isHasReadPermission__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_91: for (;;) { IF: if (gt <= 91) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.call__VLio_cloudoffice_platform_cockpit_tagitem_ListItemView_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_tagitem_ListItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.tagitem.ListItemView');
var stA0 = (refs_io_cloudoffice_platform_cockpit_tagitem_ListItemView || (refs_io_cloudoffice_platform_cockpit_tagitem_ListItemView = io_cloudoffice_platform_cockpit_tagitem_ListItemView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_tagitem_ListItemView_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLio_cloudoffice_platform_cockpit_tagitem_ListItemView_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLio_cloudoffice_platform_cockpit_tagitem_ListItemView_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
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
    m = c.read__Lio_cloudoffice_platform_cockpit_tagitem_ListItemView_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_tagitem_ListItemView;
(refs_io_cloudoffice_platform_cockpit_tagitem_ListItemView || (refs_io_cloudoffice_platform_cockpit_tagitem_ListItemView = io_cloudoffice_platform_cockpit_tagitem_ListItemView(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_tagitem_ListItemView$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lio_cloudoffice_platform_cockpit_tagitem_ListItemView_2Lio_cloudoffice_platform_cockpit_tagitem_ListItemView_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_tagitem_ListItemView || (refs_io_cloudoffice_platform_cockpit_tagitem_ListItemView = io_cloudoffice_platform_cockpit_tagitem_ListItemView(false))).access$400__Lio_cloudoffice_platform_cockpit_tagitem_ListItemView_2Lio_cloudoffice_platform_cockpit_tagitem_ListItemView_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_tagitem_ListItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.tagitem.ListItemView');
lcA0.onMessage__VLio_cloudoffice_platform_cockpit_tagitem_ListItemView_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_tagitem_ListItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.tagitem.ListItemView');
lcA0.onChange__VLio_cloudoffice_platform_cockpit_tagitem_ListItemView_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lio_cloudoffice_platform_cockpit_tagitem_ListItemView_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_tagitem_ListItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.tagitem.ListItemView');
var stA0 = lcA0.cloneTo__Lio_cloudoffice_platform_cockpit_tagitem_ListItemView_2Lio_cloudoffice_platform_cockpit_tagitem_ListItemView_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_tagitem_ListItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.tagitem.ListItemView');
lcA0.call__VLio_cloudoffice_platform_cockpit_tagitem_ListItemView_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_tagitem_ListItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.tagitem.ListItemView');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_tagitem_ListItemView_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_tagitem_ListItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.tagitem.ListItemView');
lcA0.setValue__VLio_cloudoffice_platform_cockpit_tagitem_ListItemView_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_tagitem_ListItemView$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_tagitem_ListItemView$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_tagitem_ListItemView$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_tagitem_ListItemView$Html4JavaTypefillInstOf });
    io_cloudoffice_platform_cockpit_tagitem_ListItemView$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/tagitem/ListItemView$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_tagitem_ListItemView;
    var refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$ListItemViewModel;
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
vm.io_cloudoffice_platform_cockpit_tagitem_ListItemView$Html4JavaType = io_cloudoffice_platform_cockpit_tagitem_ListItemView$Html4JavaType;

vm.java_lang_StringBuilder = link('java/lang/StringBuilder', function(f) { vm.java_lang_StringBuilder =  f; });
vm.java_lang_UnsupportedOperationException = link('java/lang/UnsupportedOperationException', function(f) { vm.java_lang_UnsupportedOperationException =  f; });
vm.java_lang_Boolean = link('java/lang/Boolean', function(f) { vm.java_lang_Boolean =  f; });
vm.java_lang_String = link('java/lang/String', function(f) { vm.java_lang_String =  f; });
vm.org_netbeans_html_json_spi_Proto$Type = link('org/netbeans/html/json/spi/Proto$Type', function(f) { vm.org_netbeans_html_json_spi_Proto$Type =  f; });

function io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$ListItemViewModel() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$ListItemViewModel;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$ListItemViewModel_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$ListItemViewModel_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_tagitem_TagItemComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$ListItemViewModel_this$0'] = lcA1;
return;

};
CLS['cons__VLio_cloudoffice_platform_cockpit_tagitem_TagItemComponent_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$ListItemViewModelfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$ListItemViewModel', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$ListItemViewModelfillInstOf });
    io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$ListItemViewModelfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/tagitem/TagItemComponent$ListItemViewModel';
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
    this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$ListItemViewModel_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$ListItemViewModel = registerClass(exports,'io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$ListItemViewModel',io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$ListItemViewModel);


function io_cloudoffice_platform_cockpit_tagitem_ListItemView() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_tagitem_ListItemView;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_proto'] = v; return this['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_proto']; };
  m = c._prop_itemId = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_itemId'] = v; return this['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_itemId']; };
  m = c._prop_itemName = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_itemName'] = v; return this['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_itemName']; };
  m = c._prop_itemType = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_itemType'] = v; return this['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_itemType']; };
  m = c._prop_hasOwnerPermission = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_hasOwnerPermission'] = v; return this['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_hasOwnerPermission']; };
  m = c._prop_hasAdminPermission = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_hasAdminPermission'] = v; return this['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_hasAdminPermission']; };
  m = c._prop_hasWritePermission = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_hasWritePermission'] = v; return this['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_hasWritePermission']; };
  m = c._prop_hasReadPermission = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_hasReadPermission'] = v; return this['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_hasReadPermission']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$ListItemViewModel || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$ListItemViewModel = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$ListItemViewModel(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.getItemId__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_proto'],"itemId");
return lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_itemId'];

};
c['getItemId__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemId__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_itemId'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_itemId'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_proto'],"itemId", lcA2, lcA1);
return;

    }
}}
};
c['setItemId__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getItemName__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_proto'],"itemName");
return lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_itemName'];

};
c['getItemName__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemName__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_itemName'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_itemName'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_proto'],"itemName", lcA2, lcA1);
return;

    }
}}
};
c['setItemName__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getItemType__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_proto'],"itemType");
return lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_itemType'];

};
c['getItemType__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemType__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_itemType'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_itemType'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_proto'],"itemType", lcA2, lcA1);
return;

    }
}}
};
c['setItemType__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isHasOwnerPermission__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_proto'],"hasOwnerPermission");
return lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_hasOwnerPermission'];

};
c['isHasOwnerPermission__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setHasOwnerPermission__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_hasOwnerPermission']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_hasOwnerPermission'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_proto'];var stA1 = "hasOwnerPermission";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
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
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_proto'],"hasAdminPermission");
return lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_hasAdminPermission'];

};
c['isHasAdminPermission__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setHasAdminPermission__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_hasAdminPermission']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_hasAdminPermission'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_proto'];var stA1 = "hasAdminPermission";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
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
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_proto'],"hasWritePermission");
return lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_hasWritePermission'];

};
c['isHasWritePermission__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setHasWritePermission__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_hasWritePermission']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_hasWritePermission'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_proto'];var stA1 = "hasWritePermission";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
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
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_proto'],"hasReadPermission");
return lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_hasReadPermission'];

};
c['isHasReadPermission__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setHasReadPermission__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_hasReadPermission']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_hasReadPermission'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_proto'];var stA1 = "hasReadPermission";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
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
stA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_proto'] = stA1;
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
    m = CLS.cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2ZZZZ = function(lcA1, lcA2, lcA3, lcI4, lcI5, lcI6, lcI7) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_itemId'] = lcA1;
lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_itemName'] = lcA2;
lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_itemType'] = lcA3;
lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_hasOwnerPermission'] = lcI4;
lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_hasAdminPermission'] = lcI5;
lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_hasWritePermission'] = lcI6;
lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_hasReadPermission'] = lcI7;
return;

};
CLS['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2ZZZZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, (7));
var lcA3 = stA0;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, (7));
Array.at(stA2, 0, "itemId");
Array.at(stA2, 1, "itemName");
Array.at(stA2, 2, "itemType");
Array.at(stA2, 3, "hasOwnerPermission");
Array.at(stA2, 4, "hasAdminPermission");
Array.at(stA2, 5, "hasWritePermission");
Array.at(stA2, (6), "hasReadPermission");
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
if ((lcA3[0] || Array.at(lcA3, 0)) !== null && !(lcA3[0] || Array.at(lcA3, 0))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[0] || Array.at(lcA3, 0)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_itemId'] = (lcA3[0] || Array.at(lcA3, 0));
if ((lcA3[1] || Array.at(lcA3, 1)) !== null && !(lcA3[1] || Array.at(lcA3, 1))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[1] || Array.at(lcA3, 1)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_itemName'] = (lcA3[1] || Array.at(lcA3, 1));
if ((lcA3[2] || Array.at(lcA3, 2)) !== null && !(lcA3[2] || Array.at(lcA3, 2))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[2] || Array.at(lcA3, 2)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_itemType'] = (lcA3[2] || Array.at(lcA3, 2));
var stA0 = lcA0;if (((lcA3[3] || Array.at(lcA3, 3))) !== null) { gt = 102; break IF; }
var stI1 = 0;{ gt = 114; break IF; }
    }
    X_102: for (;;) { IF: if (gt <= 102) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[3] || Array.at(lcA3, 3)));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_114: for (;;) { IF: if (gt <= 114) {
stA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_hasOwnerPermission'] = stI1;
var stA0 = lcA0;if (((lcA3[4] || Array.at(lcA3, 4))) !== null) { gt = 128; break IF; }
var stI1 = 0;{ gt = 140; break IF; }
    }
    X_128: for (;;) { IF: if (gt <= 128) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[4] || Array.at(lcA3, 4)));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_140: for (;;) { IF: if (gt <= 140) {
stA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_hasAdminPermission'] = stI1;
var stA0 = lcA0;if (((lcA3[5] || Array.at(lcA3, 5))) !== null) { gt = 154; break IF; }
var stI1 = 0;{ gt = 166; break IF; }
    }
    X_154: for (;;) { IF: if (gt <= 154) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[5] || Array.at(lcA3, 5)));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_166: for (;;) { IF: if (gt <= 166) {
stA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_hasWritePermission'] = stI1;
var stA0 = lcA0;if (((lcA3[(6)] || Array.at(lcA3, (6)))) !== null) { gt = 181; break IF; }
var stI1 = 0;{ gt = 194; break IF; }
    }
    X_181: for (;;) { IF: if (gt <= 181) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(6)] || Array.at(lcA3, (6))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_194: for (;;) { IF: if (gt <= 194) {
stA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_hasReadPermission'] = stI1;
return;

    }
}}}}}}}}}
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
    m = c.clone__Lio_cloudoffice_platform_cockpit_tagitem_ListItemView_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_proto']);
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_tagitem_ListItemView_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lio_cloudoffice_platform_cockpit_tagitem_ListItemView_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_tagitem_ListItemView_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_tagitem_ListItemView;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = lcA0.getItemId__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_itemId'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getItemName__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_itemName'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getItemType__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_itemType'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isHasOwnerPermission__Z();
stA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_hasOwnerPermission'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isHasAdminPermission__Z();
stA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_hasAdminPermission'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isHasWritePermission__Z();
stA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_hasWritePermission'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isHasReadPermission__Z();
stA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_hasReadPermission'] = stI1;
return lcA2;

};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lio_cloudoffice_platform_cockpit_tagitem_ListItemView_2 = function() {
  var  lcA0 = this;
invoker.applyBindings__V(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_proto']);
return lcA0;

};
c['applyBindings__Lio_cloudoffice_platform_cockpit_tagitem_ListItemView_2'] = m;

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

var stI0 = lcA1 != null && lcA1['$instOf_io_cloudoffice_platform_cockpit_tagitem_ListItemView'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_tagitem_ListItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.tagitem.ListItemView');
var lcA2 = lcA1;
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_itemId'], lcA2['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_itemId']);
if ((stI0) != 0) { gt = 40; break IF; }
return 0;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_itemName'], lcA2['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_itemName']);
if ((stI0) != 0) { gt = 59; break IF; }
return 0;
    }
    X_59: for (;;) { IF: if (gt <= 59) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_itemType'], lcA2['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_itemType']);
if ((stI0) != 0) { gt = 78; break IF; }
return 0;
    }
    X_78: for (;;) { IF: if (gt <= 78) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_hasOwnerPermission']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_hasOwnerPermission']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 103; break IF; }
return 0;
    }
    X_103: for (;;) { IF: if (gt <= 103) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_hasAdminPermission']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_hasAdminPermission']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 128; break IF; }
return 0;
    }
    X_128: for (;;) { IF: if (gt <= 128) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_hasWritePermission']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_hasWritePermission']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 153; break IF; }
return 0;
    }
    X_153: for (;;) { IF: if (gt <= 153) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_hasReadPermission']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_hasReadPermission']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 178; break IF; }
return 0;
    }
    X_178: for (;;) { IF: if (gt <= 178) {

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
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_itemId'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_itemName'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_itemType'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_hasOwnerPermission']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_hasAdminPermission']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_hasWritePermission']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_hasReadPermission']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
return lcI1;

};
c['hashCode__I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Ljava_lang_Object_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0.clone__Lio_cloudoffice_platform_cockpit_tagitem_ListItemView_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lio_cloudoffice_platform_cockpit_tagitem_ListItemView$Html4JavaType_2 = function() {
return c._TYPE();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_tagitem_ListItemView_2 = function(lcA0) {
return lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_tagitem_ListItemView$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lio_cloudoffice_platform_cockpit_tagitem_ListItemView_2Lio_cloudoffice_platform_cockpit_tagitem_ListItemView_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_tagitem_ListItemView_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_tagitem_ListItemView$Html4JavaType;
(refs_io_cloudoffice_platform_cockpit_tagitem_ListItemView$Html4JavaType || (refs_io_cloudoffice_platform_cockpit_tagitem_ListItemView$Html4JavaType = io_cloudoffice_platform_cockpit_tagitem_ListItemView$Html4JavaType(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_tagitem_ListItemView$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_tagitem_ListItemViewfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_tagitem_ListItemView', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_tagitem_ListItemViewfillInstOf });
    io_cloudoffice_platform_cockpit_tagitem_ListItemViewfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/tagitem/ListItemView';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$ListItemViewModel;
    var refs_java_lang_Boolean;
    var refs_net_java_html_BrwsrCtx;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_tagitem_ListItemView$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_proto'] = null;
    this['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_itemId'] = null;
    this['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_itemName'] = null;
    this['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_itemType'] = null;
    this['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_hasOwnerPermission'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_hasAdminPermission'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_hasWritePermission'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_tagitem_ListItemView_prop_hasReadPermission'] = 0;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_tagitem_ListItemView = registerClass(exports,'io_cloudoffice_platform_cockpit_tagitem_ListItemView',io_cloudoffice_platform_cockpit_tagitem_ListItemView);

vm.java_lang_Cloneable = link('java/lang/Cloneable', function(f) { vm.java_lang_Cloneable =  f; });
vm.net_java_html_BrwsrCtx = link('net/java/html/BrwsrCtx', function(f) { vm.net_java_html_BrwsrCtx =  f; });

function io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$view = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$1_val$view'] = v; return this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$1_val$view']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$1_val$view'] = lcA1;
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2']("Save Callback");
(refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent(false))).resetConfiguration__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$1_val$view']);
(refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent(false))).closeConfigurationPanel__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$1_val$view']);
return;

};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$1', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$1fillInstOf });
    io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/tagitem/TagItemComponent$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_Logger;
    var refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$1_val$view'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$1 = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$1;

vm.io_cloudoffice_platform_cockpit_api_CallBack = link('io/cloudoffice/platform/cockpit/api/CallBack', function(f) { vm.io_cloudoffice_platform_cockpit_api_CallBack =  f; });

function io_cloudoffice_platform_cockpit_tagitem_TagItemComponent() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_api_AbstractComponent(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = c.getInstance__Lio_cloudoffice_platform_cockpit_api_Component_2Ljava_lang_String_2 = function(lcA0) {
var stA0 = new io_cloudoffice_platform_cockpit_tagitem_TagItemComponent;
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
c['_componentName'].call(lcA0, "tagitem-component");
return;

};
c['setComponentName__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.bindViewNames__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getName__Ljava_lang_String_2((refs_io_cloudoffice_platform_cockpit_tagitem_TagItemView || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemView = io_cloudoffice_platform_cockpit_tagitem_TagItemView(false))).constructor.$class);
invoker.setDefaultViewName__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA0;var stA1 = invoker.getName__Ljava_lang_String_2((refs_io_cloudoffice_platform_cockpit_tagitem_TagItemView || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemView = io_cloudoffice_platform_cockpit_tagitem_TagItemView(false))).constructor.$class);
invoker.setDefaultConfigViewName__VLjava_lang_String_2(stA0,stA1);
return;

};
c['bindViewNames__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.bindEventListeners__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = "loginsuccess";var stA2 = new io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$LoginEventListener;
(refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$LoginEventListener || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$LoginEventListener = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$LoginEventListener(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_tagitem_TagItemComponent_2.call(stA2, lcA0);
invoker.attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2(stA0,stA1, stA2);
var stA0 = lcA0;var stA1 = "designermode";var stA2 = new io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$DesignModeListener;
(refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$DesignModeListener || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$DesignModeListener = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$DesignModeListener(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_tagitem_TagItemComponent_2.call(stA2, lcA0);
invoker.attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2(stA0,stA1, stA2);
var stA0 = lcA0;var stA1 = "toogleitemaction";var stA2 = new io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$ToogleTagItemListener;
(refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$ToogleTagItemListener || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$ToogleTagItemListener = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$ToogleTagItemListener(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_tagitem_TagItemComponent_2.call(stA2, lcA0);
invoker.attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2(stA0,stA1, stA2);
var stA0 = lcA0;var stA1 = "invokefunction";var stA2 = new io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$FunctionInvokeListener;
(refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$FunctionInvokeListener || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$FunctionInvokeListener = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$FunctionInvokeListener(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_tagitem_TagItemComponent_2Lio_cloudoffice_platform_cockpit_tagitem_TagItemComponent$1_2.call(stA2, lcA0, null);
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
    m = c.openConfig__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2 = function(lcA0) {
lcA0.setDesignerMode__VZ(1);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.closeConfigurationPanel__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2 = function(lcA0) {
lcA0.setDesignerMode__VZ(0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.save__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2 = function(lcA0) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = "tagitem";var stA2 = lcA0.getInstance__Ljava_lang_String_2();
var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['configPostEndpoint__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'](stA1, stA2, "");
var stA2 = lcA0.toString__Ljava_lang_String_2();
var stA3 = new io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$1;
(refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$1 || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$1 = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$1(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2.call(stA3, lcA0);
invoker.post__VLjava_lang_String_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.resetConfiguration__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2 = function(lcA0) {
c.resetConfigurationModelFromJSON__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2(lcA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.resetConfigurationModelFromJSON__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2 = function(lcA0) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = "tagitem";var stA2 = lcA0.getInstance__Ljava_lang_String_2();
var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['configFetchEndpoint__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'](stA1, stA2);
var stA2 = null;var stA3 = new io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$2;
(refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$2 || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$2 = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$2(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2.call(stA3, lcA0);
invoker.fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.prepareConfigurationModelFromJSON__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA1.getConfiguration__Lio_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_2();
var lcA3 = stA0;
var stA0 = invoker.getJsonObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA2,"configuration");
var lcA4 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_Object_2'](lcA4);
if ((stI0) == 0) { gt = 26; break IF; }
c.setComponentDefinition__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2(lcA1, lcA2);
    }
    X_26: for (;;) { IF: if (gt <= 26) {
return;

    }
}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.setComponentDefinition__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2 = function(lcA0, lcA1) {
var stA0 = lcA0.getConfiguration__Lio_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_2();
var lcA2 = stA0;
var stA0 = invoker.getJsonObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA1,"configuration");
var lcA3 = stA0;
var stA0 = invoker.getJSONObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA3,"searchBoxComponentDefinition");
var lcA4 = stA0;
var stA0 = lcA2.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA4,"component");
invoker.setComponent__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA2.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA4,"instanceId");
invoker.setInstanceId__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA0.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA4,"component");
invoker.setComponent__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA0.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA4,"instanceId");
invoker.setInstanceId__VLjava_lang_String_2(stA0,stA1);
return;

};
    m.access = 10;
    m.cls = CLS;
    m = c.clearFilter__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2 = function(lcA0) {
var stA0 = lcA0.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA0 = invoker.getComponent__Ljava_lang_String_2(stA0);
var lcA1 = stA0;
var stA0 = lcA0.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
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
    m = c.toogleTagItem__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

c.defaultInitialData__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2(lcA0);
var stI0 = lcA0.isVisible__Z();
if ((stI0) == 0) { gt = 19; break IF; }
lcA0.setVisible__VZ(0);
{ gt = 24; break IF; }
    }
    X_19: for (;;) { IF: if (gt <= 19) {

lcA0.setVisible__VZ(1);
    }
    X_24: for (;;) { IF: if (gt <= 24) {
return;

    }
}}}
};
c['toogleTagItem__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.closeTagItem__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2 = function(lcA0) {
lcA0.setVisible__VZ(0);
return;

};
c['closeTagItem__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.processTagItem__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2Ljava_lang_String_2 = function(lcA0, lcA1) {
var stA0 = lcA0.getTagItemList__Ljava_util_List_2();
invoker.clear__V(stA0);
c.toogleTagItem__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2(lcA0);
var stA0 = lcA0.getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
invoker.setActive__VZ(stA0,1);
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2'](lcA1);
var lcA2 = stA0;
var stA0 = lcA0;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"itemId");
stA0.setSelectedItemId__VLjava_lang_String_2(stA1);
var stA0 = lcA0;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"itemName");
stA0.setSelectedItemName__VLjava_lang_String_2(stA1);
var stA0 = lcA0;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"itemType");
stA0.setSelectedItemType__VLjava_lang_String_2(stA1);
c.processTagItemList__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2(lcA0);
return;

};
c['processTagItem__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.processTagItemList__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2 = function(lcA0) {
var stA0 = lcA0.getSelectedItemId__Ljava_lang_String_2();
var lcA1 = stA0;
var stA0 = lcA0.getSelectedItemType__Ljava_lang_String_2();
var lcA2 = stA0;
var stA0 = new io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$4;
(refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$4 || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$4 = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$4(false))).constructor.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_tagitem_TagItemView_2Ljava_lang_String_2Ljava_lang_String_2.call(stA0, "\"/VirtualItem-portlet.searchitem/search\"", lcA0, lcA1, lcA2);
var stA1 = new io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$3;
(refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$3 || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$3 = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$3(false))).constructor.cons__V.call(stA1);
invoker.call__VLio_cloudoffice_platform_cockpit_api_ServerCallback_2(stA0,stA1);
return;

};
c['processTagItemList__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.itemSearchAutocomplete__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0.getInputBoxText__Ljava_lang_String_2();
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA0);
if ((stI0) == 0) { gt = 63; break IF; }
var stA0 = lcA0;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"Create '");
var stA2 = lcA0.getInputBoxText__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"'");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
stA0.setNewTagDisplayName__VLjava_lang_String_2(stA1);
var stA0 = lcA0.getItemListLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
invoker.setActive__VZ(stA0,1);
lcA0.setShowItemList__VZ(1);
c.getItemList__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2(lcA0);
{ gt = 77; break IF; }
    }
    X_63: for (;;) { IF: if (gt <= 63) {

lcA0.setShowItemList__VZ(0);
var stA0 = lcA0.getItemList__Ljava_util_List_2();
invoker.clear__V(stA0);
    }
    X_77: for (;;) { IF: if (gt <= 77) {
return;

    }
}}}
};
c['itemSearchAutocomplete__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getItemList__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2 = function(lcA0) {
var stA0 = lcA0.getInputBoxText__Ljava_lang_String_2();
var lcA1 = stA0;
var stA0 = lcA0.getTagItemList__Ljava_util_List_2();
var lcA2 = stA0;
var stA0 = new io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$6;
(refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$6 || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$6 = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$6(false))).constructor.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_tagitem_TagItemView_2Ljava_util_List_2Ljava_lang_String_2.call(stA0, "\"/VirtualItem-portlet.searchitem/searchTagByKeywordAndType\"", lcA0, lcA2, lcA1);
var stA1 = new io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$5;
(refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$5 || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$5 = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$5(false))).constructor.cons__V.call(stA1);
invoker.call__VLio_cloudoffice_platform_cockpit_api_ServerCallback_2(stA0,stA1);
return;

};
c['getItemList__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.createNewTag__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2 = function(lcA0) {
var stA0 = new io_cloudoffice_platform_cockpit_tagitem_ListItemView;
(refs_io_cloudoffice_platform_cockpit_tagitem_ListItemView || (refs_io_cloudoffice_platform_cockpit_tagitem_ListItemView = io_cloudoffice_platform_cockpit_tagitem_ListItemView(false))).constructor.cons__V.call(stA0);
var lcA1 = stA0;
var stA0 = lcA1;var stA1 = lcA0.getInputBoxText__Ljava_lang_String_2();
stA0.setItemName__VLjava_lang_String_2(stA1);
lcA0.setInputBoxText__VLjava_lang_String_2("");
var stA0 = lcA0.getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
invoker.setActive__VZ(stA0,1);
c.addTagItem__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2Lio_cloudoffice_platform_cockpit_tagitem_ListItemView_2(lcA0, lcA1);
return;

};
c['createNewTag__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.selectItem__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2Lio_cloudoffice_platform_cockpit_tagitem_ListItemView_2 = function(lcA0, lcA1) {
lcA0.setInputBoxText__VLjava_lang_String_2("");
var stA0 = lcA0.getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
invoker.setActive__VZ(stA0,1);
c.addTagItem__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2Lio_cloudoffice_platform_cockpit_tagitem_ListItemView_2(lcA0, lcA1);
return;

};
c['selectItem__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2Lio_cloudoffice_platform_cockpit_tagitem_ListItemView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.addTagItem__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2Lio_cloudoffice_platform_cockpit_tagitem_ListItemView_2 = function(lcA0, lcA1) {
var stA0 = lcA0.getSelectedItemId__Ljava_lang_String_2();
var lcA2 = stA0;
var stA0 = lcA0.getSelectedItemType__Ljava_lang_String_2();
var lcA3 = stA0;
var stA0 = lcA0.getTagItemList__Ljava_util_List_2();
var lcA4 = stA0;
var lcA5 = lcA1;
var stA0 = new io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$8;
(refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$8 || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$8 = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$8(false))).constructor.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_tagitem_TagItemView_2Ljava_util_List_2Lio_cloudoffice_platform_cockpit_tagitem_ListItemView_2Ljava_lang_String_2Ljava_lang_String_2.call(stA0, "\"/VirtualItem-portlet.searchitem/editItemTag\"", lcA0, lcA4, lcA5, lcA2, lcA3);
var stA1 = new io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$7;
(refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$7 || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$7 = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$7(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_tagitem_ListItemView_2.call(stA1, lcA5);
invoker.call__VLio_cloudoffice_platform_cockpit_api_ServerCallback_2(stA0,stA1);
return;

};
c['addTagItem__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2Lio_cloudoffice_platform_cockpit_tagitem_ListItemView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.deleteTagItemFromList__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2Lio_cloudoffice_platform_cockpit_tagitem_ListItemView_2 = function(lcA0, lcA1) {
var stA0 = lcA0.getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
invoker.setActive__VZ(stA0,1);
c.deleteTagItem__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2Lio_cloudoffice_platform_cockpit_tagitem_ListItemView_2(lcA0, lcA1);
return;

};
c['deleteTagItemFromList__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2Lio_cloudoffice_platform_cockpit_tagitem_ListItemView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.deleteTagItem__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2Lio_cloudoffice_platform_cockpit_tagitem_ListItemView_2 = function(lcA0, lcA1) {
var stA0 = lcA0.getSelectedItemId__Ljava_lang_String_2();
var lcA2 = stA0;
var stA0 = lcA0.getSelectedItemType__Ljava_lang_String_2();
var lcA3 = stA0;
var lcA4 = lcA1;
var stA0 = new io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$10;
(refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$10 || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$10 = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$10(false))).constructor.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_tagitem_TagItemView_2Ljava_lang_String_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_tagitem_ListItemView_2.call(stA0, "\"/VirtualItem-portlet.searchitem/deleteItemTag\"", lcA0, lcA2, lcA3, lcA4);
var stA1 = new io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$9;
(refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$9 || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$9 = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$9(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_tagitem_ListItemView_2.call(stA1, lcA4);
invoker.call__VLio_cloudoffice_platform_cockpit_api_ServerCallback_2(stA0,stA1);
return;

};
c['deleteTagItem__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2Lio_cloudoffice_platform_cockpit_tagitem_ListItemView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.defaultInitialData__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2 = function(lcA0) {
var stA0 = lcA0.getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
invoker.setActive__VZ(stA0,0);
lcA0.setShowItemList__VZ(0);
var stA0 = lcA0.getItemListLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
invoker.setActive__VZ(stA0,0);
var stA0 = lcA0.getItemList__Ljava_util_List_2();
invoker.clear__V(stA0);
var stA0 = lcA0.getTagItemList__Ljava_util_List_2();
invoker.clear__V(stA0);
lcA0.setInputBoxText__VLjava_lang_String_2("");
return;

};
c['defaultInitialData__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.access$100__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2 = function(lcA0, lcA1) {
c.setComponentDefinition__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2(lcA0, lcA1);
return;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__VLio_cloudoffice_platform_cockpit_tagitem_TagItemComponent_2Lio_cloudoffice_platform_cockpit_tagitem_TagItemView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2 = function(lcA0, lcA1, lcA2) {
c.prepareConfigurationModelFromJSON__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4104;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_tagitem_TagItemComponentfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_tagitem_TagItemComponentfillInstOf });
    io_cloudoffice_platform_cockpit_tagitem_TagItemComponentfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/tagitem/TagItemComponent';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_AbstractComponent;
    var refs_io_cloudoffice_platform_cockpit_tagitem_TagItemView;
    var refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$LoginEventListener;
    var refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$DesignModeListener;
    var refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$ToogleTagItemListener;
    var refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$FunctionInvokeListener;
    var refs_java_lang_UnsupportedOperationException;
    var refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration;
    var refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$1;
    var refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$2;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_io_cloudoffice_platform_cockpit_api_Event;
    var refs_io_cloudoffice_platform_cockpit_api_Components;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$4;
    var refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$3;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$6;
    var refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$5;
    var refs_io_cloudoffice_platform_cockpit_tagitem_ListItemView;
    var refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$8;
    var refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$7;
    var refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$10;
    var refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$9;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_tagitem_TagItemComponent = registerClass(exports,'io_cloudoffice_platform_cockpit_tagitem_TagItemComponent',io_cloudoffice_platform_cockpit_tagitem_TagItemComponent);


function io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$9() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$9;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_api_ServerCallback(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$tagToRemove = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$9_val$tagToRemove'] = v; return this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$9_val$tagToRemove']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_tagitem_ListItemView_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$9_val$tagToRemove'] = lcA1;
(refs_io_cloudoffice_platform_cockpit_api_ServerCallback || (refs_io_cloudoffice_platform_cockpit_api_ServerCallback = vm.io_cloudoffice_platform_cockpit_api_ServerCallback(false))).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.process__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](lcA1);
if ((stI0) == 0) { gt = 53; break IF; }
var stA0 = invoker.getRequest__Lio_cloudoffice_platform_cockpit_api_AsyncRequest_2(lcA0);
var stA0 = invoker.getView__Ljava_lang_Object_2(stA0);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_tagitem_TagItemView']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.tagitem.TagItemView');
var lcA2 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Z'](lcA1, 1);
var lcA3 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_Object_2'](lcA3);
if ((stI0) == 0) { gt = 53; break IF; }
var stA0 = lcA2.getTagItemList__Ljava_util_List_2();
var stI0 = invoker.remove__ZLjava_lang_Object_2(stA0,lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$9_val$tagToRemove']);
var stA0 = lcA2.getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
invoker.setActive__VZ(stA0,0);
    }
    X_53: for (;;) { IF: if (gt <= 53) {
return;

    }
}}
};
c['process__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$9fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$9', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$9fillInstOf });
    io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$9fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/tagitem/TagItemComponent$9';
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
    this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$9_val$tagToRemove'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$9 = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$9;

vm.io_cloudoffice_platform_cockpit_api_ServerCallback = link('io/cloudoffice/platform/cockpit/api/ServerCallback', function(f) { vm.io_cloudoffice_platform_cockpit_api_ServerCallback =  f; });

function io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$10() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$10;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_api_AsyncRequest(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$selectedItemId = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$10_val$selectedItemId'] = v; return this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$10_val$selectedItemId']; };
  m = c._val$selectedItemType = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$10_val$selectedItemType'] = v; return this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$10_val$selectedItemType']; };
  m = c._val$tagToRemove = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$10_val$tagToRemove'] = v; return this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$10_val$tagToRemove']; };
    m = CLS.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_tagitem_TagItemView_2Ljava_lang_String_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_tagitem_ListItemView_2 = function(lcA1, lcA2, lcA3, lcA4, lcA5) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$10_val$selectedItemId'] = lcA3;
lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$10_val$selectedItemType'] = lcA4;
lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$10_val$tagToRemove'] = lcA5;
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
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA1,"itemId", lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$10_val$selectedItemId']);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA1,"itemType", lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$10_val$selectedItemType']);
var stA0 = lcA1;var stA1 = "removeTag";var stA2 = lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$10_val$tagToRemove'].getItemName__Ljava_lang_String_2();
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
    function io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$10fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$10', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$10fillInstOf });
    io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$10fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/tagitem/TagItemComponent$10';
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
    this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$10_val$selectedItemId'] = null;
    this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$10_val$selectedItemType'] = null;
    this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$10_val$tagToRemove'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$10 = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$10;

vm.java_util_HashMap = link('java/util/HashMap', function(f) { vm.java_util_HashMap =  f; });
vm.io_cloudoffice_platform_cockpit_api_AsyncRequest = link('io/cloudoffice/platform/cockpit/api/AsyncRequest', function(f) { vm.io_cloudoffice_platform_cockpit_api_AsyncRequest =  f; });

function io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$7() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$7;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_api_ServerCallback(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$tagItem = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$7_val$tagItem'] = v; return this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$7_val$tagItem']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_tagitem_ListItemView_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$7_val$tagItem'] = lcA1;
(refs_io_cloudoffice_platform_cockpit_api_ServerCallback || (refs_io_cloudoffice_platform_cockpit_api_ServerCallback = vm.io_cloudoffice_platform_cockpit_api_ServerCallback(false))).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.process__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](lcA1);
if ((stI0) == 0) { gt = 53; break IF; }
var stA0 = invoker.getRequest__Lio_cloudoffice_platform_cockpit_api_AsyncRequest_2(lcA0);
var stA0 = invoker.getView__Ljava_lang_Object_2(stA0);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_tagitem_TagItemView']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.tagitem.TagItemView');
var lcA2 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Z'](lcA1, 1);
var lcA3 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_Object_2'](lcA3);
if ((stI0) == 0) { gt = 53; break IF; }
var stA0 = lcA2.getTagItemList__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$7_val$tagItem']);
var stA0 = lcA2.getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
invoker.setActive__VZ(stA0,0);
    }
    X_53: for (;;) { IF: if (gt <= 53) {
return;

    }
}}
};
c['process__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$7fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$7', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$7fillInstOf });
    io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$7fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/tagitem/TagItemComponent$7';
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
    this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$7_val$tagItem'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$7 = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$7;


function io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$8() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$8;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_api_AsyncRequest(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$tagList = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$8_val$tagList'] = v; return this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$8_val$tagList']; };
  m = c._val$tagItem = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$8_val$tagItem'] = v; return this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$8_val$tagItem']; };
  m = c._val$selectedItemId = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$8_val$selectedItemId'] = v; return this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$8_val$selectedItemId']; };
  m = c._val$selectedItemType = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$8_val$selectedItemType'] = v; return this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$8_val$selectedItemType']; };
    m = CLS.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_tagitem_TagItemView_2Ljava_util_List_2Lio_cloudoffice_platform_cockpit_tagitem_ListItemView_2Ljava_lang_String_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3, lcA4, lcA5, lcA6) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$8_val$tagList'] = lcA3;
lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$8_val$tagItem'] = lcA4;
lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$8_val$selectedItemId'] = lcA5;
lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$8_val$selectedItemType'] = lcA6;
(refs_io_cloudoffice_platform_cockpit_api_AsyncRequest || (refs_io_cloudoffice_platform_cockpit_api_AsyncRequest = vm.io_cloudoffice_platform_cockpit_api_AsyncRequest(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_Object_2'].call(lcA0, lcA1, lcA2);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.preparePostData__V = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new vm.java_util_HashMap;
(refs_java_util_HashMap || (refs_java_util_HashMap = vm.java_util_HashMap(false))).constructor['cons__V'].call(stA0);
var lcA1 = stA0;
var stA0 = new vm.java_util_ArrayList;
(refs_java_util_ArrayList || (refs_java_util_ArrayList = vm.java_util_ArrayList(false))).constructor['cons__V'].call(stA0);
var lcA2 = stA0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$8_val$tagList']);
var lcA3 = stA0;
    }
    X_26: for (;;) { IF: if (gt <= 26) {

var stI0 = invoker.hasNext__Z(lcA3);
if ((stI0) == 0) { gt = 113; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA3);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_tagitem_ListItemView']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.tagitem.ListItemView');
var lcA4 = stA0;
var stA0 = new vm.java_util_HashMap;
(refs_java_util_HashMap || (refs_java_util_HashMap = vm.java_util_HashMap(false))).constructor['cons__V'].call(stA0);
var lcA5 = stA0;
var stA0 = lcA5;var stA1 = "id";var stA2 = lcA4.getItemId__Ljava_lang_String_2();
var stI2 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA2);
if ((stI2) == 0) { gt = 78; break IF; }
var stA2 = lcA4.getItemId__Ljava_lang_String_2();
{ gt = 80; break IF; }
    }
    X_78: for (;;) { IF: if (gt <= 78) {

var stA2 = "''";    }
    X_80: for (;;) { IF: if (gt <= 80) {
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA5;var stA1 = "name";var stA2 = lcA4.getItemName__Ljava_lang_String_2();
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA2,lcA5);
{ gt = 0; continue X_26; }
    }
    X_113: for (;;) { IF: if (gt <= 113) {
var stA0 = new vm.java_util_HashMap;
(refs_java_util_HashMap || (refs_java_util_HashMap = vm.java_util_HashMap(false))).constructor['cons__V'].call(stA0);
var lcA3 = stA0;
var stA0 = lcA3;var stA1 = "id";var stA2 = lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$8_val$tagItem'].getItemId__Ljava_lang_String_2();
var stI2 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA2);
if ((stI2) == 0) { gt = 147; break IF; }
var stA2 = lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$8_val$tagItem'].getItemId__Ljava_lang_String_2();
{ gt = 149; break IF; }
    }
    X_147: for (;;) { IF: if (gt <= 147) {

var stA2 = "''";    }
    X_149: for (;;) { IF: if (gt <= 149) {
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA3;var stA1 = "name";var stA2 = lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$8_val$tagItem'].getItemName__Ljava_lang_String_2();
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA2,lcA3);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA1,"itemId", lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$8_val$selectedItemId']);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA1,"itemType", lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$8_val$selectedItemType']);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA1,"editedTagList", lcA2);
var stA0 = lcA0;var stA1 = invoker.getEndpoint__Ljava_lang_String_2(lcA0);
invoker.put__VLjava_lang_String_2Ljava_lang_Object_2(stA0,stA1, lcA1);
return;

    }
}}}}}}}
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
    function io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$8fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$8', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$8fillInstOf });
    io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$8fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/tagitem/TagItemComponent$8';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_AsyncRequest;
    var refs_java_util_HashMap;
    var refs_java_util_ArrayList;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$8_val$tagList'] = null;
    this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$8_val$tagItem'] = null;
    this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$8_val$selectedItemId'] = null;
    this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$8_val$selectedItemType'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$8 = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$8;

vm.java_util_ArrayList = link('java/util/ArrayList', function(f) { vm.java_util_ArrayList =  f; });

function io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$5() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$5;
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
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_tagitem_TagItemView']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.tagitem.TagItemView');
var lcA2 = stA0;
var stA0 = lcA2.getItemList__Ljava_util_List_2();
invoker.clear__V(stA0);
var stA0 = lcA2.getItemListLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
invoker.setActive__VZ(stA0,0);
if ((null) === (lcA1)) { gt = 147; break IF; }
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Z'](lcA1, 1);
var stA0 = invoker.getArray__Ljava_util_List_2(stA0);
var lcA3 = stA0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA3);
var lcA4 = stA0;
    }
    X_50: for (;;) { IF: if (gt <= 50) {

var stI0 = invoker.hasNext__Z(lcA4);
if ((stI0) == 0) { gt = 147; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA4);
if (stA0 !== null && !stA0['$instOf_java_util_Map']) vm.java_lang_Class(false).castEx(stA0, 'java.util.Map');
var lcA5 = stA0;
var stA0 = new io_cloudoffice_platform_cockpit_tagitem_ListItemView;
(refs_io_cloudoffice_platform_cockpit_tagitem_ListItemView || (refs_io_cloudoffice_platform_cockpit_tagitem_ListItemView = io_cloudoffice_platform_cockpit_tagitem_ListItemView(false))).constructor.cons__V.call(stA0);
var lcA6 = stA0;
var stA0 = lcA6;var stA1 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA5,"itemId");
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemId__VLjava_lang_String_2(stA1);
var stA0 = lcA6;var stA1 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA5,"itemName");
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemName__VLjava_lang_String_2(stA1);
var stA0 = lcA6;var stA1 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA5,"itemType");
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemType__VLjava_lang_String_2(stA1);
var stA0 = lcA2.getItemList__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA6);
{ gt = 0; continue X_50; }
    }
    X_147: for (;;) { IF: if (gt <= 147) {
return;

    }
}}}
};
c['process__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$5fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$5', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$5fillInstOf });
    io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$5fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/tagitem/TagItemComponent$5';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_ServerCallback;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_tagitem_ListItemView;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$5 = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$5;


function io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$6() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$6;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_api_AsyncRequest(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$tagItems = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$6_val$tagItems'] = v; return this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$6_val$tagItems']; };
  m = c._val$searchKey = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$6_val$searchKey'] = v; return this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$6_val$searchKey']; };
    m = CLS.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_tagitem_TagItemView_2Ljava_util_List_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3, lcA4) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$6_val$tagItems'] = lcA3;
lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$6_val$searchKey'] = lcA4;
(refs_io_cloudoffice_platform_cockpit_api_AsyncRequest || (refs_io_cloudoffice_platform_cockpit_api_AsyncRequest = vm.io_cloudoffice_platform_cockpit_api_AsyncRequest(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_Object_2'].call(lcA0, lcA1, lcA2);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.preparePostData__V = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new vm.java_util_HashMap;
(refs_java_util_HashMap || (refs_java_util_HashMap = vm.java_util_HashMap(false))).constructor['cons__V'].call(stA0);
var lcA1 = stA0;
var stA0 = new vm.java_util_ArrayList;
(refs_java_util_ArrayList || (refs_java_util_ArrayList = vm.java_util_ArrayList(false))).constructor['cons__V'].call(stA0);
var lcA2 = stA0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$6_val$tagItems']);
var lcA3 = stA0;
    }
    X_26: for (;;) { IF: if (gt <= 26) {

var stI0 = invoker.hasNext__Z(lcA3);
if ((stI0) == 0) { gt = 82; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA3);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_tagitem_ListItemView']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.tagitem.ListItemView');
var lcA4 = stA0;
var stA0 = new vm.java_util_HashMap;
(refs_java_util_HashMap || (refs_java_util_HashMap = vm.java_util_HashMap(false))).constructor['cons__V'].call(stA0);
var lcA5 = stA0;
var stA0 = lcA5;var stA1 = "itemName";var stA2 = lcA4.getItemName__Ljava_lang_String_2();
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA2,lcA5);
{ gt = 0; continue X_26; }
    }
    X_82: for (;;) { IF: if (gt <= 82) {

var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA1,"assetType", "1");
var stA0 = lcA1;var stA1 = "searchKey";var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"'");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$6_val$searchKey']);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"'");
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA1,"existingTags", lcA2);
var stA0 = lcA0;var stA1 = invoker.getEndpoint__Ljava_lang_String_2(lcA0);
invoker.put__VLjava_lang_String_2Ljava_lang_Object_2(stA0,stA1, lcA1);
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
    function io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$6fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$6', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$6fillInstOf });
    io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$6fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/tagitem/TagItemComponent$6';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_AsyncRequest;
    var refs_java_util_HashMap;
    var refs_java_util_ArrayList;
    var refs_java_lang_StringBuilder;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$6_val$tagItems'] = null;
    this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$6_val$searchKey'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$6 = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$6;


function io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$3() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$3;
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

if ((null) === (lcA1)) { gt = 264; break IF; }
var stA0 = invoker.getRequest__Lio_cloudoffice_platform_cockpit_api_AsyncRequest_2(lcA0);
var stA0 = invoker.getView__Ljava_lang_Object_2(stA0);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_tagitem_TagItemView']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.tagitem.TagItemView');
var lcA2 = stA0;
var stA0 = lcA2.getTagItemList__Ljava_util_List_2();
invoker.clear__V(stA0);
var stA0 = lcA2.getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
invoker.setActive__VZ(stA0,0);
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Z'](lcA1, 1);
var stA0 = invoker.getArray__Ljava_util_List_2(stA0);
var lcA3 = stA0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA3);
var lcA4 = stA0;
    }
    X_50: for (;;) { IF: if (gt <= 50) {

var stI0 = invoker.hasNext__Z(lcA4);
if ((stI0) == 0) { gt = 264; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA4);
if (stA0 !== null && !stA0['$instOf_java_util_Map']) vm.java_lang_Class(false).castEx(stA0, 'java.util.Map');
var lcA5 = stA0;
var stA0 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA5,"itemId");
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_Object_2'](stA0);
if ((stI0) == 0) { gt = 99; break IF; }
var stA0 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA5,"itemId");
{ gt = 101; break IF; }
    }
    X_99: for (;;) { IF: if (gt <= 99) {

var stA0 = "";    }
    X_101: for (;;) { IF: if (gt <= 101) {
if (stA0 !== null && !stA0['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA0, 'java.lang.String');
if (stA0 !== null && !stA0['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA0, 'java.lang.String');
var lcA6 = stA0;
var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA6,"-10");
if ((stI0) != 0) { gt = 261; break IF; }
var stA0 = new io_cloudoffice_platform_cockpit_tagitem_ListItemView;
(refs_io_cloudoffice_platform_cockpit_tagitem_ListItemView || (refs_io_cloudoffice_platform_cockpit_tagitem_ListItemView = io_cloudoffice_platform_cockpit_tagitem_ListItemView(false))).constructor.cons__V.call(stA0);
var lcA7 = stA0;
lcA7.setItemId__VLjava_lang_String_2(lcA6);
var stA0 = lcA7;var stA1 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA5,"itemName");
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemName__VLjava_lang_String_2(stA1);
var stA0 = lcA7;var stA1 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA5,"itemType");
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemType__VLjava_lang_String_2(stA1);
var stA0 = lcA7;var stA1 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA5,"hasReadPermission");
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setHasReadPermission__VZ(stI1);
var stA0 = lcA7;var stA1 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA5,"hasWritePermission");
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setHasWritePermission__VZ(stI1);
var stA0 = lcA7;var stA1 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA5,"hasAdminPermission");
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setHasAdminPermission__VZ(stI1);
var stA0 = lcA7;var stA1 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA5,"hasOwnerPermission");
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setHasOwnerPermission__VZ(stI1);
var stA0 = lcA2.getTagItemList__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA7);
    }
    X_261: for (;;) { IF: if (gt <= 261) {
{ gt = 0; continue X_50; }
    }
    X_264: for (;;) { IF: if (gt <= 264) {
return;

    }
}}}}}}
};
c['process__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$3fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$3', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$3fillInstOf });
    io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$3fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/tagitem/TagItemComponent$3';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_ServerCallback;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_io_cloudoffice_platform_cockpit_tagitem_ListItemView;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$3 = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$3;


function io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$4() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$4;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_api_AsyncRequest(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$itemId = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$4_val$itemId'] = v; return this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$4_val$itemId']; };
  m = c._val$itemType = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$4_val$itemType'] = v; return this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$4_val$itemType']; };
    m = CLS.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_tagitem_TagItemView_2Ljava_lang_String_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3, lcA4) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$4_val$itemId'] = lcA3;
lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$4_val$itemType'] = lcA4;
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
var stA0 = new vm.java_util_HashMap;
(refs_java_util_HashMap || (refs_java_util_HashMap = vm.java_util_HashMap(false))).constructor['cons__V'].call(stA0);
var lcA2 = stA0;
var stA0 = new vm.java_util_ArrayList;
(refs_java_util_ArrayList || (refs_java_util_ArrayList = vm.java_util_ArrayList(false))).constructor['cons__V'].call(stA0);
var lcA3 = stA0;
var stA0 = new vm.java_util_HashMap;
(refs_java_util_HashMap || (refs_java_util_HashMap = vm.java_util_HashMap(false))).constructor['cons__V'].call(stA0);
var lcA4 = stA0;
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA4,"key", "[\"classPK\"]");
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA4,"value", lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$4_val$itemId']);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA4,"itemType", lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$4_val$itemType']);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA4,"type", "VIRTUAL");
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA4,"occur", "MUST");
var stA0 = lcA4;var stA1 = "like";var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](0);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA3,lcA4);
var stA0 = new vm.java_util_ArrayList;
(refs_java_util_ArrayList || (refs_java_util_ArrayList = vm.java_util_ArrayList(false))).constructor['cons__V'].call(stA0);
var lcA5 = stA0;
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA5,"TAG");
var stA0 = lcA2;var stA1 = "pageNumber";var stA2 = (refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false)))['valueOf__Ljava_lang_Integer_2I'](0);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA2,"fromClause", lcA5);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA2,"whereClause", lcA3);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA1,"query", lcA2);
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
    function io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$4fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$4', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$4fillInstOf });
    io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$4fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/tagitem/TagItemComponent$4';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_AsyncRequest;
    var refs_java_util_HashMap;
    var refs_java_util_ArrayList;
    var refs_java_lang_Boolean;
    var refs_java_lang_Integer;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$4_val$itemId'] = null;
    this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$4_val$itemType'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$4 = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$4;

vm.java_lang_Integer = link('java/lang/Integer', function(f) { vm.java_lang_Integer =  f; });
vm.io_cloudoffice_platform_cockpit_api_MapBuilder = link('io/cloudoffice/platform/cockpit/api/MapBuilder', function(f) { vm.io_cloudoffice_platform_cockpit_api_MapBuilder =  f; });
vm.io_cloudoffice_platform_cockpit_api_Components = link('io/cloudoffice/platform/cockpit/api/Components', function(f) { vm.io_cloudoffice_platform_cockpit_api_Components =  f; });
vm.io_cloudoffice_platform_cockpit_api_Event = link('io/cloudoffice/platform/cockpit/api/Event', function(f) { vm.io_cloudoffice_platform_cockpit_api_Event =  f; });
vm.io_cloudoffice_platform_cockpit_api_UtilValidate = link('io/cloudoffice/platform/cockpit/api/UtilValidate', function(f) { vm.io_cloudoffice_platform_cockpit_api_UtilValidate =  f; });

function io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$2() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$2;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$view = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$2_val$view'] = v; return this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$2_val$view']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$2_val$view'] = lcA1;
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
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$2_val$view'].getConfiguration__Lio_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_2();
var lcA3 = stA0;
var stA0 = invoker.getJsonObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA2,"configuration");
var lcA4 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_Object_2'](lcA4);
if ((stI0) == 0) { gt = 37; break IF; }
(refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent(false))).access$100__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$2_val$view'], lcA2);
    }
    X_37: for (;;) { IF: if (gt <= 37) {
return;

    }
}}
};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$2fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$2', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$2fillInstOf });
    io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$2fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/tagitem/TagItemComponent$2';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$2_val$view'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$2 = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$2;

vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration = link('io/cloudoffice/platform/cockpit/api/ComponentConfiguration', function(f) { vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration =  f; });

function io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$FunctionInvokeListener() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$FunctionInvokeListener;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$FunctionInvokeListener_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$FunctionInvokeListener_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_tagitem_TagItemComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$FunctionInvokeListener_this$0'] = lcA1;
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
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$FunctionInvokeListener_this$0'];var stA1 = (refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false)))['valueOf__Ljava_lang_String_2Ljava_lang_Object_2'](lcA2);
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
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_tagitem_TagItemComponent_2Lio_cloudoffice_platform_cockpit_tagitem_TagItemComponent$1_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
c.constructor.cons__VLio_cloudoffice_platform_cockpit_tagitem_TagItemComponent_2.call(lcA0, lcA1);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$FunctionInvokeListenerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$FunctionInvokeListener', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$FunctionInvokeListenerfillInstOf });
    io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$FunctionInvokeListenerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/tagitem/TagItemComponent$FunctionInvokeListener';
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
    this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$FunctionInvokeListener_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$FunctionInvokeListener = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$FunctionInvokeListener;

vm.io_cloudoffice_platform_cockpit_api_EventListener = link('io/cloudoffice/platform/cockpit/api/EventListener', function(f) { vm.io_cloudoffice_platform_cockpit_api_EventListener =  f; });

function io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$ToogleTagItemListener() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$ToogleTagItemListener;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$ToogleTagItemListener_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$ToogleTagItemListener_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_tagitem_TagItemComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$ToogleTagItemListener_this$0'] = lcA1;
return;

};
CLS['cons__VLio_cloudoffice_platform_cockpit_tagitem_TagItemComponent_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onReceive__VLio_cloudoffice_platform_cockpit_api_Signal_2 = function(lcA1) {
  var  lcA0 = this;
lcA0.toogleTagItem__VLio_cloudoffice_platform_cockpit_api_Signal_2(lcA1);
return;

};
c['onReceive__VLio_cloudoffice_platform_cockpit_api_Signal_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.toogleTagItem__VLio_cloudoffice_platform_cockpit_api_Signal_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getPackets__Ljava_util_List_2(lcA1);
var stA0 = invoker.get__Ljava_lang_Object_2I(stA0,0);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_api_MapBuilder']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.api.MapBuilder');
var lcA2 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_Object_2'](lcA2);
if ((stI0) == 0) { gt = 33; break IF; }
invoker.invoke__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$ToogleTagItemListener_this$0'],"processTagItem", lcA2);
    }
    X_33: for (;;) { IF: if (gt <= 33) {
return;

    }
}}
};
    m.access = 0;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$ToogleTagItemListenerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$ToogleTagItemListener', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$ToogleTagItemListenerfillInstOf });
    io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$ToogleTagItemListenerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/tagitem/TagItemComponent$ToogleTagItemListener';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_EventListener(false).constructor.$class
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$ToogleTagItemListener_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$ToogleTagItemListener = registerClass(exports,'io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$ToogleTagItemListener',io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$ToogleTagItemListener);


function io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$DesignModeListener() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$DesignModeListener;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$DesignModeListener_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$DesignModeListener_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_tagitem_TagItemComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$DesignModeListener_this$0'] = lcA1;
return;

};
CLS['cons__VLio_cloudoffice_platform_cockpit_tagitem_TagItemComponent_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onReceive__VLio_cloudoffice_platform_cockpit_api_Signal_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getPackets__Ljava_util_List_2(lcA1);
var stA0 = invoker.get__Ljava_lang_Object_2I(stA0,0);
var lcA2 = stA0;
if ((null) === (lcA2)) { gt = 29; break IF; }
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$DesignModeListener_this$0'];var stA1 = (refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false)))['valueOf__Ljava_lang_String_2Ljava_lang_Object_2'](lcA2);
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
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$DesignModeListenerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$DesignModeListener', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$DesignModeListenerfillInstOf });
    io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$DesignModeListenerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/tagitem/TagItemComponent$DesignModeListener';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_EventListener(false).constructor.$class
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_String;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$DesignModeListener_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$DesignModeListener = registerClass(exports,'io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$DesignModeListener',io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$DesignModeListener);


function io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$LoginEventListener() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$LoginEventListener;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$LoginEventListener_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$LoginEventListener_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_tagitem_TagItemComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$LoginEventListener_this$0'] = lcA1;
return;

};
CLS['cons__VLio_cloudoffice_platform_cockpit_tagitem_TagItemComponent_2'] = m;

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
Array.at(stA0, 0, "tagitem");
(refs_io_cloudoffice_platform_cockpit_js_VIEW || (refs_io_cloudoffice_platform_cockpit_js_VIEW = vm.io_cloudoffice_platform_cockpit_js_VIEW(false)))['render__V_3Ljava_lang_String_2'](stA0);
var stA0 = invoker.getInstanceId__Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$LoginEventListener_this$0']);
var lcA2 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['configFetchEndpoint__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2']("tagitem", lcA2);
var stA2 = null;var stA3 = new io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$LoginEventListener$1;
(refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$LoginEventListener$1 || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$LoginEventListener$1 = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$LoginEventListener$1(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_tagitem_TagItemComponent$LoginEventListener_2.call(stA3, lcA0);
invoker.fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

};
    m.access = 0;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$LoginEventListenerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$LoginEventListener', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$LoginEventListenerfillInstOf });
    io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$LoginEventListenerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/tagitem/TagItemComponent$LoginEventListener';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_EventListener(false).constructor.$class
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_js_VIEW;
    var refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration;
    var refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$LoginEventListener$1;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$LoginEventListener_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$LoginEventListener = registerClass(exports,'io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$LoginEventListener',io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$LoginEventListener);


function io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$LoginEventListener$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$LoginEventListener$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$1 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$LoginEventListener$1_this$1'] = v; return this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$LoginEventListener$1_this$1']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_tagitem_TagItemComponent$LoginEventListener_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$LoginEventListener$1_this$1'] = lcA1;
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2'](lcA1);
var lcA2 = stA0;
var stA0 = new io_cloudoffice_platform_cockpit_tagitem_TagItemView;
(refs_io_cloudoffice_platform_cockpit_tagitem_TagItemView || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemView = io_cloudoffice_platform_cockpit_tagitem_TagItemView(false))).constructor.cons__V.call(stA0);
var lcA3 = stA0;
var stA0 = lcA3;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"instance");
stA0.setInstance__VLjava_lang_String_2(stA1);
(refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent(false))).access$200__VLio_cloudoffice_platform_cockpit_tagitem_TagItemComponent_2Lio_cloudoffice_platform_cockpit_tagitem_TagItemView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$LoginEventListener$1_this$1']['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$LoginEventListener_this$0'], lcA3, lcA2);
(refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent(false))).defaultInitialData__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2(lcA3);
invoker.setView__VLjava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$LoginEventListener$1_this$1']['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$LoginEventListener_this$0'],lcA3);
var stA0 = invoker.getDefaultViewName__Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$LoginEventListener$1_this$1']['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$LoginEventListener_this$0']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['toRaw__Ljava_lang_Object_2Ljava_lang_Object_2'](lcA3);
(refs_io_cloudoffice_platform_cockpit_js_VIEW || (refs_io_cloudoffice_platform_cockpit_js_VIEW = vm.io_cloudoffice_platform_cockpit_js_VIEW(false)))['bind__VLjava_lang_String_2Ljava_lang_Object_2'](stA0, stA1);
return;

};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$LoginEventListener$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$LoginEventListener$1', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$LoginEventListener$1fillInstOf });
    io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$LoginEventListener$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/tagitem/TagItemComponent$LoginEventListener$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65568;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_tagitem_TagItemView;
    var refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent;
    var refs_net_java_html_json_Models;
    var refs_io_cloudoffice_platform_cockpit_js_VIEW;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$LoginEventListener$1_this$1'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$LoginEventListener$1 = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$LoginEventListener$1;

vm.net_java_html_json_Models = link('net/java/html/json/Models', function(f) { vm.net_java_html_json_Models =  f; });
vm.io_cloudoffice_platform_cockpit_js_VIEW = link('io/cloudoffice/platform/cockpit/js/VIEW', function(f) { vm.io_cloudoffice_platform_cockpit_js_VIEW =  f; });

function io_cloudoffice_platform_cockpit_tagitem_TagItemView() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_tagitem_TagItemView;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto'] = v; return this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto']; };
  m = c._prop_instance = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_instance'] = v; return this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_instance']; };
  m = c._prop_designerMode = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_designerMode'] = v; return this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_designerMode']; };
  m = c._prop_configuration = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_configuration'] = v; return this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_configuration']; };
  m = c._prop_searchBoxComponentDefinition = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_searchBoxComponentDefinition'] = v; return this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_searchBoxComponentDefinition']; };
  m = c._prop_selectedItemId = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_selectedItemId'] = v; return this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_selectedItemId']; };
  m = c._prop_selectedItemName = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_selectedItemName'] = v; return this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_selectedItemName']; };
  m = c._prop_selectedItemType = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_selectedItemType'] = v; return this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_selectedItemType']; };
  m = c._prop_visible = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_visible'] = v; return this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_visible']; };
  m = c._prop_tagItemList = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_tagItemList'] = v; return this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_tagItemList']; };
  m = c._prop_loader = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_loader'] = v; return this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_loader']; };
  m = c._prop_newTagDisplayName = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_newTagDisplayName'] = v; return this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_newTagDisplayName']; };
  m = c._prop_inputBoxText = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_inputBoxText'] = v; return this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_inputBoxText']; };
  m = c._prop_showItemList = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_showItemList'] = v; return this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_showItemList']; };
  m = c._prop_itemList = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_itemList'] = v; return this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_itemList']; };
  m = c._prop_itemListLoader = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_itemListLoader'] = v; return this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_itemListLoader']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.getInstance__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto'],"instance");
return lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_instance'];

};
c['getInstance__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setInstance__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_instance'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_instance'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto'],"instance", lcA2, lcA1);
return;

    }
}}
};
c['setInstance__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isDesignerMode__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto'],"designerMode");
return lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_designerMode'];

};
c['isDesignerMode__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setDesignerMode__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_designerMode']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_designerMode'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto'];var stA1 = "designerMode";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setDesignerMode__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getConfiguration__Lio_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto'],"configuration");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_configuration']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration;
(refs_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration = io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration(false))).constructor.cons__V.call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_configuration'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_configuration'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_configuration']['$instOf_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_configuration'], 'io.cloudoffice.platform.cockpit.tagitem.TagItemConfiguration');
return lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_configuration'];

    }
}}
};
c['getConfiguration__Lio_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setConfiguration__VLio_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_configuration'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_configuration'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto'],"configuration", lcA2, lcA1);
return;

    }
}}
};
c['setConfiguration__VLio_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto'],"searchBoxComponentDefinition");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_searchBoxComponentDefinition']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_ComponentDef;
(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_searchBoxComponentDefinition'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_searchBoxComponentDefinition'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_searchBoxComponentDefinition']['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_searchBoxComponentDefinition'], 'io.cloudoffice.platform.cockpit.api.ComponentDef');
return lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_searchBoxComponentDefinition'];

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

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_searchBoxComponentDefinition'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_searchBoxComponentDefinition'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto'],"searchBoxComponentDefinition", lcA2, lcA1);
return;

    }
}}
};
c['setSearchBoxComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getSelectedItemId__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto'],"selectedItemId");
return lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_selectedItemId'];

};
c['getSelectedItemId__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setSelectedItemId__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_selectedItemId'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_selectedItemId'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto'],"selectedItemId", lcA2, lcA1);
return;

    }
}}
};
c['setSelectedItemId__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getSelectedItemName__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto'],"selectedItemName");
return lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_selectedItemName'];

};
c['getSelectedItemName__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setSelectedItemName__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_selectedItemName'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_selectedItemName'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto'],"selectedItemName", lcA2, lcA1);
return;

    }
}}
};
c['setSelectedItemName__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getSelectedItemType__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto'],"selectedItemType");
return lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_selectedItemType'];

};
c['getSelectedItemType__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setSelectedItemType__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_selectedItemType'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_selectedItemType'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto'],"selectedItemType", lcA2, lcA1);
return;

    }
}}
};
c['setSelectedItemType__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isVisible__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto'],"visible");
return lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_visible'];

};
c['isVisible__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setVisible__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_visible']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_visible'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto'];var stA1 = "visible";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setVisible__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getTagItemList__Ljava_util_List_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto'],"tagItemList");
return lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_tagItemList'];

};
c['getTagItemList__Ljava_util_List_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto'],"loader");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_loader']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_HelperItemView;
(refs_io_cloudoffice_platform_cockpit_api_HelperItemView || (refs_io_cloudoffice_platform_cockpit_api_HelperItemView = vm.io_cloudoffice_platform_cockpit_api_HelperItemView(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_loader'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_loader'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_loader']['$instOf_io_cloudoffice_platform_cockpit_api_HelperItemView']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_loader'], 'io.cloudoffice.platform.cockpit.api.HelperItemView');
return lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_loader'];

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

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_loader'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_loader'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto'],"loader", lcA2, lcA1);
return;

    }
}}
};
c['setLoader__VLio_cloudoffice_platform_cockpit_api_HelperItemView_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getNewTagDisplayName__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto'],"newTagDisplayName");
return lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_newTagDisplayName'];

};
c['getNewTagDisplayName__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setNewTagDisplayName__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_newTagDisplayName'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_newTagDisplayName'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto'],"newTagDisplayName", lcA2, lcA1);
return;

    }
}}
};
c['setNewTagDisplayName__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getInputBoxText__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto'],"inputBoxText");
return lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_inputBoxText'];

};
c['getInputBoxText__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setInputBoxText__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_inputBoxText'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_inputBoxText'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto'],"inputBoxText", lcA2, lcA1);
var lcA3 = lcA0;
(refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent(false))).itemSearchAutocomplete__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2(lcA3);
return;

    }
}}
};
c['setInputBoxText__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isShowItemList__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto'],"showItemList");
return lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_showItemList'];

};
c['isShowItemList__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setShowItemList__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_showItemList']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_showItemList'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto'];var stA1 = "showItemList";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setShowItemList__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getItemList__Ljava_util_List_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto'],"itemList");
return lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_itemList'];

};
c['getItemList__Ljava_util_List_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getItemListLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto'],"itemListLoader");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_itemListLoader']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_HelperItemView;
(refs_io_cloudoffice_platform_cockpit_api_HelperItemView || (refs_io_cloudoffice_platform_cockpit_api_HelperItemView = vm.io_cloudoffice_platform_cockpit_api_HelperItemView(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_itemListLoader'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_itemListLoader'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_itemListLoader']['$instOf_io_cloudoffice_platform_cockpit_api_HelperItemView']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_itemListLoader'], 'io.cloudoffice.platform.cockpit.api.HelperItemView');
return lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_itemListLoader'];

    }
}}
};
c['getItemListLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemListLoader__VLio_cloudoffice_platform_cockpit_api_HelperItemView_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_itemListLoader'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_itemListLoader'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto'],"itemListLoader", lcA2, lcA1);
return;

    }
}}
};
c['setItemListLoader__VLio_cloudoffice_platform_cockpit_api_HelperItemView_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2(c._TYPE(),lcA0, lcA1);
stA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto'] = stA1;
var stA0 = lcA0;var stA1 = lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto'];var stA2 = "tagItemList";var stI3 = -1;var stA4 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 0);
var stA1 = invoker.createList__Ljava_util_List_2Ljava_lang_String_2I_3Ljava_lang_String_2(stA1,stA2, stI3, stA4);
stA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_tagItemList'] = stA1;
var stA0 = lcA0;var stA1 = lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto'];var stA2 = "itemList";var stI3 = -1;var stA4 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 0);
var stA1 = invoker.createList__Ljava_util_List_2Ljava_lang_String_2I_3Ljava_lang_String_2(stA1,stA2, stI3, stA4);
stA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_itemList'] = stA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_configuration'] = c._TYPE();
lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_searchBoxComponentDefinition'] = c._TYPE();
lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_loader'] = c._TYPE();
lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_itemListLoader'] = c._TYPE();
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLjava_lang_String_2ZLio_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2ZLio_cloudoffice_platform_cockpit_api_HelperItemView_2Ljava_lang_String_2Ljava_lang_String_2ZLio_cloudoffice_platform_cockpit_api_HelperItemView_2_3Lio_cloudoffice_platform_cockpit_tagitem_ListItemView_2 = function(lcA1, lcI2, lcA3, lcA4, lcA5, lcA6, lcA7, lcI8, lcA9, lcA10, lcA11, lcI12, lcA13, lcA14) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_instance'] = lcA1;
lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_designerMode'] = lcI2;
lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_configuration'] = lcA3;
lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_searchBoxComponentDefinition'] = lcA4;
lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_selectedItemId'] = lcA5;
lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_selectedItemName'] = lcA6;
lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_selectedItemType'] = lcA7;
lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_visible'] = lcI8;
lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_loader'] = lcA9;
lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_newTagDisplayName'] = lcA10;
lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_inputBoxText'] = lcA11;
lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_showItemList'] = lcI12;
lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_itemListLoader'] = lcA13;
invoker.initTo__VLjava_util_Collection_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto'],lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_tagItemList'], lcA14);
return;

};
CLS['cons__VLjava_lang_String_2ZLio_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2ZLio_cloudoffice_platform_cockpit_api_HelperItemView_2Ljava_lang_String_2Ljava_lang_String_2ZLio_cloudoffice_platform_cockpit_api_HelperItemView_2_3Lio_cloudoffice_platform_cockpit_tagitem_ListItemView_2'] = m;

    m.access = 129;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, (15));
var lcA3 = stA0;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, (15));
Array.at(stA2, 0, "instance");
Array.at(stA2, 1, "designerMode");
Array.at(stA2, 2, "configuration");
Array.at(stA2, 3, "searchBoxComponentDefinition");
Array.at(stA2, 4, "selectedItemId");
Array.at(stA2, 5, "selectedItemName");
Array.at(stA2, (6), "selectedItemType");
Array.at(stA2, (7), "visible");
Array.at(stA2, (8), "tagItemList");
Array.at(stA2, (9), "loader");
Array.at(stA2, (10), "newTagDisplayName");
Array.at(stA2, (11), "inputBoxText");
Array.at(stA2, (12), "showItemList");
Array.at(stA2, (13), "itemList");
Array.at(stA2, (14), "itemListLoader");
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
if ((lcA3[0] || Array.at(lcA3, 0)) !== null && !(lcA3[0] || Array.at(lcA3, 0))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[0] || Array.at(lcA3, 0)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_instance'] = (lcA3[0] || Array.at(lcA3, 0));
var stA0 = lcA0;if (((lcA3[1] || Array.at(lcA3, 1))) !== null) { gt = 130; break IF; }
var stI1 = 0;{ gt = 142; break IF; }
    }
    X_130: for (;;) { IF: if (gt <= 130) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[1] || Array.at(lcA3, 1)));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_142: for (;;) { IF: if (gt <= 142) {
stA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_designerMode'] = stI1;
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto'],(refs_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration = io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration(false))).constructor.$class, (lcA3[2] || Array.at(lcA3, 2)));
stA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_configuration'] = stA1;
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto'],(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, (lcA3[3] || Array.at(lcA3, 3)));
stA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_searchBoxComponentDefinition'] = stA1;
if ((lcA3[4] || Array.at(lcA3, 4)) !== null && !(lcA3[4] || Array.at(lcA3, 4))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[4] || Array.at(lcA3, 4)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_selectedItemId'] = (lcA3[4] || Array.at(lcA3, 4));
if ((lcA3[5] || Array.at(lcA3, 5)) !== null && !(lcA3[5] || Array.at(lcA3, 5))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[5] || Array.at(lcA3, 5)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_selectedItemName'] = (lcA3[5] || Array.at(lcA3, 5));
if ((lcA3[(6)] || Array.at(lcA3, (6))) !== null && !(lcA3[(6)] || Array.at(lcA3, (6)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(6)] || Array.at(lcA3, (6))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_selectedItemType'] = (lcA3[(6)] || Array.at(lcA3, (6)));
var stA0 = lcA0;if (((lcA3[(7)] || Array.at(lcA3, (7)))) !== null) { gt = 220; break IF; }
var stI1 = 0;{ gt = 233; break IF; }
    }
    X_220: for (;;) { IF: if (gt <= 220) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(7)] || Array.at(lcA3, (7))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_233: for (;;) { IF: if (gt <= 233) {
stA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_visible'] = stI1;
var stA0 = c.useAsArray___3Ljava_lang_Object_2Ljava_lang_Object_2((lcA3[(8)] || Array.at(lcA3, (8))));
var lcA4 = stA0;
var lcI5 = (lcA4).length;
var lcI6 = 0;
    }
    X_253: for (;;) { IF: if (gt <= 253) {

if ((lcI6) >= (lcI5)) { gt = 295; break IF; }
var lcA7 = (lcA4[lcI6] || Array.at(lcA4, lcI6));
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_tagItemList'];var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto'],(refs_io_cloudoffice_platform_cockpit_tagitem_ListItemView || (refs_io_cloudoffice_platform_cockpit_tagitem_ListItemView = io_cloudoffice_platform_cockpit_tagitem_ListItemView(false))).constructor.$class, lcA7);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
lcI6++;
{ gt = 0; continue X_253; }
    }
    X_295: for (;;) { IF: if (gt <= 295) {

var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto'],(refs_io_cloudoffice_platform_cockpit_api_HelperItemView || (refs_io_cloudoffice_platform_cockpit_api_HelperItemView = vm.io_cloudoffice_platform_cockpit_api_HelperItemView(false))).constructor.$class, (lcA3[(9)] || Array.at(lcA3, (9))));
stA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_loader'] = stA1;
if ((lcA3[(10)] || Array.at(lcA3, (10))) !== null && !(lcA3[(10)] || Array.at(lcA3, (10)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(10)] || Array.at(lcA3, (10))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_newTagDisplayName'] = (lcA3[(10)] || Array.at(lcA3, (10)));
if ((lcA3[(11)] || Array.at(lcA3, (11))) !== null && !(lcA3[(11)] || Array.at(lcA3, (11)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(11)] || Array.at(lcA3, (11))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_inputBoxText'] = (lcA3[(11)] || Array.at(lcA3, (11)));
var stA0 = lcA0;if (((lcA3[(12)] || Array.at(lcA3, (12)))) !== null) { gt = 346; break IF; }
var stI1 = 0;{ gt = 359; break IF; }
    }
    X_346: for (;;) { IF: if (gt <= 346) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(12)] || Array.at(lcA3, (12))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_359: for (;;) { IF: if (gt <= 359) {
stA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_showItemList'] = stI1;
var stA0 = c.useAsArray___3Ljava_lang_Object_2Ljava_lang_Object_2((lcA3[(13)] || Array.at(lcA3, (13))));
var lcA4 = stA0;
var lcI5 = (lcA4).length;
var lcI6 = 0;
    }
    X_379: for (;;) { IF: if (gt <= 379) {

if ((lcI6) >= (lcI5)) { gt = 421; break IF; }
var lcA7 = (lcA4[lcI6] || Array.at(lcA4, lcI6));
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_itemList'];var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto'],(refs_io_cloudoffice_platform_cockpit_tagitem_ListItemView || (refs_io_cloudoffice_platform_cockpit_tagitem_ListItemView = io_cloudoffice_platform_cockpit_tagitem_ListItemView(false))).constructor.$class, lcA7);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
lcI6++;
{ gt = 0; continue X_379; }
    }
    X_421: for (;;) { IF: if (gt <= 421) {

var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto'],(refs_io_cloudoffice_platform_cockpit_api_HelperItemView || (refs_io_cloudoffice_platform_cockpit_api_HelperItemView = vm.io_cloudoffice_platform_cockpit_api_HelperItemView(false))).constructor.$class, (lcA3[(14)] || Array.at(lcA3, (14))));
stA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_itemListLoader'] = stA1;
return;

    }
}}}}}}}}}}}
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
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_configuration']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"searchBoxComponentDefinition");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_searchBoxComponentDefinition']);
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"visible");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isVisible__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"tagItemList");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_tagItemList']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"loader");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_loader']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"newTagDisplayName");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getNewTagDisplayName__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"inputBoxText");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getInputBoxText__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"showItemList");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isShowItemList__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"itemList");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_itemList']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"itemListLoader");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_itemListLoader']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(125));
var stA0 = invoker.toString__Ljava_lang_String_2(lcA1);
return stA0;

};
c['toString__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_tagitem_TagItemView_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto']);
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_tagitem_TagItemView_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lio_cloudoffice_platform_cockpit_tagitem_TagItemView_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_tagitem_TagItemView_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new io_cloudoffice_platform_cockpit_tagitem_TagItemView;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = lcA0.getInstance__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_instance'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isDesignerMode__Z();
stA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_designerMode'] = stI1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_configuration']) !== null) { gt = 37; break IF; }
var stA1 = null;{ gt = 61; break IF; }
    }
    X_37: for (;;) { IF: if (gt <= 37) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_configuration']) !== (c._TYPE())) { gt = 53; break IF; }
var stA1 = c._TYPE();{ gt = 61; break IF; }
    }
    X_53: for (;;) { IF: if (gt <= 53) {

var stA1 = lcA0.getConfiguration__Lio_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_61: for (;;) { IF: if (gt <= 61) {
stA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_configuration'] = stA1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_searchBoxComponentDefinition']) !== null) { gt = 76; break IF; }
var stA1 = null;{ gt = 100; break IF; }
    }
    X_76: for (;;) { IF: if (gt <= 76) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_searchBoxComponentDefinition']) !== (c._TYPE())) { gt = 92; break IF; }
var stA1 = c._TYPE();{ gt = 100; break IF; }
    }
    X_92: for (;;) { IF: if (gt <= 92) {

var stA1 = lcA0.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_100: for (;;) { IF: if (gt <= 100) {
stA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_searchBoxComponentDefinition'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getSelectedItemId__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_selectedItemId'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getSelectedItemName__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_selectedItemName'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getSelectedItemType__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_selectedItemType'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isVisible__Z();
stA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_visible'] = stI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto'];var stA1 = lcA2.getTagItemList__Ljava_util_List_2();
invoker.cloneList__VLjava_util_Collection_2Lnet_java_html_BrwsrCtx_2Ljava_util_Collection_2(stA0,stA1, lcA1, lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_tagItemList']);
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_loader']) !== null) { gt = 163; break IF; }
var stA1 = null;{ gt = 187; break IF; }
    }
    X_163: for (;;) { IF: if (gt <= 163) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_loader']) !== (c._TYPE())) { gt = 179; break IF; }
var stA1 = c._TYPE();{ gt = 187; break IF; }
    }
    X_179: for (;;) { IF: if (gt <= 179) {

var stA1 = lcA0.getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_187: for (;;) { IF: if (gt <= 187) {
stA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_loader'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getNewTagDisplayName__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_newTagDisplayName'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getInputBoxText__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_inputBoxText'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isShowItemList__Z();
stA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_showItemList'] = stI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto'];var stA1 = lcA2.getItemList__Ljava_util_List_2();
invoker.cloneList__VLjava_util_Collection_2Lnet_java_html_BrwsrCtx_2Ljava_util_Collection_2(stA0,stA1, lcA1, lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_itemList']);
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_itemListLoader']) !== null) { gt = 242; break IF; }
var stA1 = null;{ gt = 266; break IF; }
    }
    X_242: for (;;) { IF: if (gt <= 242) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_itemListLoader']) !== (c._TYPE())) { gt = 258; break IF; }
var stA1 = c._TYPE();{ gt = 266; break IF; }
    }
    X_258: for (;;) { IF: if (gt <= 258) {

var stA1 = lcA0.getItemListLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_266: for (;;) { IF: if (gt <= 266) {
stA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_itemListLoader'] = stA1;
return lcA2;

    }
}}}}}}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lio_cloudoffice_platform_cockpit_tagitem_TagItemView_2 = function() {
  var  lcA0 = this;
invoker.applyBindings__V(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto']);
return lcA0;

};
c['applyBindings__Lio_cloudoffice_platform_cockpit_tagitem_TagItemView_2'] = m;

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

var stI0 = lcA1 != null && lcA1['$instOf_io_cloudoffice_platform_cockpit_tagitem_TagItemView'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_tagitem_TagItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.tagitem.TagItemView');
var lcA2 = lcA1;
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_instance'], lcA2['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_instance']);
if ((stI0) != 0) { gt = 40; break IF; }
return 0;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_designerMode']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_designerMode']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 65; break IF; }
return 0;
    }
    X_65: for (;;) { IF: if (gt <= 65) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_configuration']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_configuration']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 92; break IF; }
return 0;
    }
    X_92: for (;;) { IF: if (gt <= 92) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_searchBoxComponentDefinition']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_searchBoxComponentDefinition']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 119; break IF; }
return 0;
    }
    X_119: for (;;) { IF: if (gt <= 119) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_selectedItemId'], lcA2['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_selectedItemId']);
if ((stI0) != 0) { gt = 138; break IF; }
return 0;
    }
    X_138: for (;;) { IF: if (gt <= 138) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_selectedItemName'], lcA2['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_selectedItemName']);
if ((stI0) != 0) { gt = 157; break IF; }
return 0;
    }
    X_157: for (;;) { IF: if (gt <= 157) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_selectedItemType'], lcA2['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_selectedItemType']);
if ((stI0) != 0) { gt = 176; break IF; }
return 0;
    }
    X_176: for (;;) { IF: if (gt <= 176) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_visible']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_visible']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 201; break IF; }
return 0;
    }
    X_201: for (;;) { IF: if (gt <= 201) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_tagItemList']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_tagItemList']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 228; break IF; }
return 0;
    }
    X_228: for (;;) { IF: if (gt <= 228) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_loader']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_loader']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 255; break IF; }
return 0;
    }
    X_255: for (;;) { IF: if (gt <= 255) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_newTagDisplayName'], lcA2['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_newTagDisplayName']);
if ((stI0) != 0) { gt = 274; break IF; }
return 0;
    }
    X_274: for (;;) { IF: if (gt <= 274) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_inputBoxText'], lcA2['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_inputBoxText']);
if ((stI0) != 0) { gt = 293; break IF; }
return 0;
    }
    X_293: for (;;) { IF: if (gt <= 293) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_showItemList']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_showItemList']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 318; break IF; }
return 0;
    }
    X_318: for (;;) { IF: if (gt <= 318) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_itemList']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_itemList']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 345; break IF; }
return 0;
    }
    X_345: for (;;) { IF: if (gt <= 345) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_itemListLoader']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_itemListLoader']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 372; break IF; }
return 0;
    }
    X_372: for (;;) { IF: if (gt <= 372) {

return 1;

    }
}}}}}}}}}}}}}}}}}}
};
c['equals__ZLjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.hashCode__I = function() {
  var  lcA0 = this;
var stA0 = invoker.getName__Ljava_lang_String_2(c.constructor.$class);
var stI0 = invoker.hashCode__I(stA0);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_instance'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_designerMode']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_configuration']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_searchBoxComponentDefinition']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_selectedItemId'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_selectedItemName'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_selectedItemType'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_visible']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_tagItemList']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_loader']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_newTagDisplayName'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_inputBoxText'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_showItemList']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_itemList']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_itemListLoader']);
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
var stA0 = lcA0.clone__Lio_cloudoffice_platform_cockpit_tagitem_TagItemView_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lio_cloudoffice_platform_cockpit_tagitem_TagItemView$Html4JavaType_2 = function() {
return c._TYPE();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_tagitem_TagItemView_2 = function(lcA0) {
return lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_tagitem_TagItemView$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lio_cloudoffice_platform_cockpit_tagitem_TagItemView_2Lio_cloudoffice_platform_cockpit_tagitem_TagItemView_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_tagitem_TagItemView_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_tagitem_TagItemView$Html4JavaType;
(refs_io_cloudoffice_platform_cockpit_tagitem_TagItemView$Html4JavaType || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemView$Html4JavaType = io_cloudoffice_platform_cockpit_tagitem_TagItemView$Html4JavaType(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_tagitem_TagItemViewfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_tagitem_TagItemView', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_tagitem_TagItemViewfillInstOf });
    io_cloudoffice_platform_cockpit_tagitem_TagItemViewfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/tagitem/TagItemView';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent;
    var refs_java_lang_Boolean;
    var refs_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration;
    var refs_net_java_html_json_Models;
    var refs_io_cloudoffice_platform_cockpit_api_ComponentDef;
    var refs_io_cloudoffice_platform_cockpit_api_HelperItemView;
    var refs_net_java_html_BrwsrCtx;
    var refs_io_cloudoffice_platform_cockpit_tagitem_ListItemView;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_tagitem_TagItemView$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_proto'] = null;
    this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_instance'] = null;
    this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_designerMode'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_configuration'] = null;
    this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_searchBoxComponentDefinition'] = null;
    this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_selectedItemId'] = null;
    this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_selectedItemName'] = null;
    this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_selectedItemType'] = null;
    this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_visible'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_tagItemList'] = null;
    this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_loader'] = null;
    this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_newTagDisplayName'] = null;
    this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_inputBoxText'] = null;
    this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_showItemList'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_itemList'] = null;
    this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemView_prop_itemListLoader'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_tagitem_TagItemView = registerClass(exports,'io_cloudoffice_platform_cockpit_tagitem_TagItemView',io_cloudoffice_platform_cockpit_tagitem_TagItemView);


function io_cloudoffice_platform_cockpit_tagitem_TagItemView$Html4JavaType() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_tagitem_TagItemView$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemView || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemView = io_cloudoffice_platform_cockpit_tagitem_TagItemView(false))).constructor.$class, (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent(false))).constructor.$class, (15), (16));
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"instance", 0, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"designerMode", 1, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"configuration", 2, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"searchBoxComponentDefinition", 3, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"selectedItemId", 4, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"selectedItemName", 5, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"selectedItemType", (6), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"visible", (7), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"tagItemList", (8), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"loader", (9), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"newTagDisplayName", (10), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"inputBoxText", (11), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"showItemList", (12), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemList", (13), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemListLoader", (14), 0, 0);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"openConfig", 0);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"closeConfigurationPanel", 1);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"save", 2);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"resetConfiguration", 3);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"clearFilter", 4);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"toogleTagItem", 5);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"closeTagItem", (6));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"processTagItem", (7));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"processTagItemList", (8));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"getItemList", (9));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"createNewTag", (10));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"selectItem", (11));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"addTagItem", (12));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"deleteTagItemFromList", (13));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"deleteTagItem", (14));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"defaultInitialData", (15));
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 76; break IF; }
  case 1:{ gt = 93; break IF; }
  case 2:{ gt = 113; break IF; }
  case 3:{ gt = 130; break IF; }
  case 4:{ gt = 147; break IF; }
  case 5:{ gt = 164; break IF; }
  case 6:{ gt = 181; break IF; }
  case 7:{ gt = 198; break IF; }
  case 8:{ gt = 218; break IF; }
  case 9:{ gt = 232; break IF; }
  case 10:{ gt = 249; break IF; }
  case 11:{ gt = 266; break IF; }
  case 12:{ gt = 283; break IF; }
  case 13:{ gt = 303; break IF; }
  case 14:{ gt = 317; break IF; }
  default: { gt = 334; break IF; }
}
    }
    X_76: for (;;) { IF: if (gt <= 76) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemView || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemView = io_cloudoffice_platform_cockpit_tagitem_TagItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_tagitem_TagItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setInstance__VLjava_lang_String_2(stA1);
return;
    }
    X_93: for (;;) { IF: if (gt <= 93) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemView || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemView = io_cloudoffice_platform_cockpit_tagitem_TagItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_tagitem_TagItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setDesignerMode__VZ(stI1);
return;
    }
    X_113: for (;;) { IF: if (gt <= 113) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemView || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemView = io_cloudoffice_platform_cockpit_tagitem_TagItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_tagitem_TagItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration = io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.tagitem.TagItemConfiguration');
stA0.setConfiguration__VLio_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_2(stA1);
return;
    }
    X_130: for (;;) { IF: if (gt <= 130) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemView || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemView = io_cloudoffice_platform_cockpit_tagitem_TagItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_tagitem_TagItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.api.ComponentDef');
stA0.setSearchBoxComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2(stA1);
return;
    }
    X_147: for (;;) { IF: if (gt <= 147) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemView || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemView = io_cloudoffice_platform_cockpit_tagitem_TagItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_tagitem_TagItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setSelectedItemId__VLjava_lang_String_2(stA1);
return;
    }
    X_164: for (;;) { IF: if (gt <= 164) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemView || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemView = io_cloudoffice_platform_cockpit_tagitem_TagItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_tagitem_TagItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setSelectedItemName__VLjava_lang_String_2(stA1);
return;
    }
    X_181: for (;;) { IF: if (gt <= 181) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemView || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemView = io_cloudoffice_platform_cockpit_tagitem_TagItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_tagitem_TagItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setSelectedItemType__VLjava_lang_String_2(stA1);
return;
    }
    X_198: for (;;) { IF: if (gt <= 198) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemView || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemView = io_cloudoffice_platform_cockpit_tagitem_TagItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_tagitem_TagItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setVisible__VZ(stI1);
return;
    }
    X_218: for (;;) { IF: if (gt <= 218) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemView || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemView = io_cloudoffice_platform_cockpit_tagitem_TagItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_tagitem_TagItemView$Html4JavaType_2();
var stA1 = lcA1.getTagItemList__Ljava_util_List_2();
invoker.replaceValue__VLjava_util_Collection_2Ljava_lang_Class_2Ljava_lang_Object_2(stA0,stA1, (refs_io_cloudoffice_platform_cockpit_tagitem_ListItemView || (refs_io_cloudoffice_platform_cockpit_tagitem_ListItemView = io_cloudoffice_platform_cockpit_tagitem_ListItemView(false))).constructor.$class, lcA3);
return;
    }
    X_232: for (;;) { IF: if (gt <= 232) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemView || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemView = io_cloudoffice_platform_cockpit_tagitem_TagItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_tagitem_TagItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_api_HelperItemView || (refs_io_cloudoffice_platform_cockpit_api_HelperItemView = vm.io_cloudoffice_platform_cockpit_api_HelperItemView(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_api_HelperItemView']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.api.HelperItemView');
stA0.setLoader__VLio_cloudoffice_platform_cockpit_api_HelperItemView_2(stA1);
return;
    }
    X_249: for (;;) { IF: if (gt <= 249) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemView || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemView = io_cloudoffice_platform_cockpit_tagitem_TagItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_tagitem_TagItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setNewTagDisplayName__VLjava_lang_String_2(stA1);
return;
    }
    X_266: for (;;) { IF: if (gt <= 266) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemView || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemView = io_cloudoffice_platform_cockpit_tagitem_TagItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_tagitem_TagItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setInputBoxText__VLjava_lang_String_2(stA1);
return;
    }
    X_283: for (;;) { IF: if (gt <= 283) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemView || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemView = io_cloudoffice_platform_cockpit_tagitem_TagItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_tagitem_TagItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setShowItemList__VZ(stI1);
return;
    }
    X_303: for (;;) { IF: if (gt <= 303) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemView || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemView = io_cloudoffice_platform_cockpit_tagitem_TagItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_tagitem_TagItemView$Html4JavaType_2();
var stA1 = lcA1.getItemList__Ljava_util_List_2();
invoker.replaceValue__VLjava_util_Collection_2Ljava_lang_Class_2Ljava_lang_Object_2(stA0,stA1, (refs_io_cloudoffice_platform_cockpit_tagitem_ListItemView || (refs_io_cloudoffice_platform_cockpit_tagitem_ListItemView = io_cloudoffice_platform_cockpit_tagitem_ListItemView(false))).constructor.$class, lcA3);
return;
    }
    X_317: for (;;) { IF: if (gt <= 317) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemView || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemView = io_cloudoffice_platform_cockpit_tagitem_TagItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_tagitem_TagItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_api_HelperItemView || (refs_io_cloudoffice_platform_cockpit_api_HelperItemView = vm.io_cloudoffice_platform_cockpit_api_HelperItemView(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_api_HelperItemView']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.api.HelperItemView');
stA0.setItemListLoader__VLio_cloudoffice_platform_cockpit_api_HelperItemView_2(stA1);
return;
    }
    X_334: for (;;) { IF: if (gt <= 334) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_tagitem_TagItemView_2I = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 76; break IF; }
  case 1:{ gt = 81; break IF; }
  case 2:{ gt = 89; break IF; }
  case 3:{ gt = 94; break IF; }
  case 4:{ gt = 99; break IF; }
  case 5:{ gt = 104; break IF; }
  case 6:{ gt = 109; break IF; }
  case 7:{ gt = 114; break IF; }
  case 8:{ gt = 122; break IF; }
  case 9:{ gt = 127; break IF; }
  case 10:{ gt = 132; break IF; }
  case 11:{ gt = 137; break IF; }
  case 12:{ gt = 142; break IF; }
  case 13:{ gt = 150; break IF; }
  case 14:{ gt = 155; break IF; }
  default: { gt = 160; break IF; }
}
    }
    X_76: for (;;) { IF: if (gt <= 76) {

var stA0 = lcA1.getInstance__Ljava_lang_String_2();
return stA0;
    }
    X_81: for (;;) { IF: if (gt <= 81) {

var stI0 = lcA1.isDesignerMode__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_89: for (;;) { IF: if (gt <= 89) {

var stA0 = lcA1.getConfiguration__Lio_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_2();
return stA0;
    }
    X_94: for (;;) { IF: if (gt <= 94) {

var stA0 = lcA1.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
return stA0;
    }
    X_99: for (;;) { IF: if (gt <= 99) {

var stA0 = lcA1.getSelectedItemId__Ljava_lang_String_2();
return stA0;
    }
    X_104: for (;;) { IF: if (gt <= 104) {

var stA0 = lcA1.getSelectedItemName__Ljava_lang_String_2();
return stA0;
    }
    X_109: for (;;) { IF: if (gt <= 109) {

var stA0 = lcA1.getSelectedItemType__Ljava_lang_String_2();
return stA0;
    }
    X_114: for (;;) { IF: if (gt <= 114) {

var stI0 = lcA1.isVisible__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_122: for (;;) { IF: if (gt <= 122) {

var stA0 = lcA1.getTagItemList__Ljava_util_List_2();
return stA0;
    }
    X_127: for (;;) { IF: if (gt <= 127) {

var stA0 = lcA1.getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
return stA0;
    }
    X_132: for (;;) { IF: if (gt <= 132) {

var stA0 = lcA1.getNewTagDisplayName__Ljava_lang_String_2();
return stA0;
    }
    X_137: for (;;) { IF: if (gt <= 137) {

var stA0 = lcA1.getInputBoxText__Ljava_lang_String_2();
return stA0;
    }
    X_142: for (;;) { IF: if (gt <= 142) {

var stI0 = lcA1.isShowItemList__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_150: for (;;) { IF: if (gt <= 150) {

var stA0 = lcA1.getItemList__Ljava_util_List_2();
return stA0;
    }
    X_155: for (;;) { IF: if (gt <= 155) {

var stA0 = lcA1.getItemListLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
return stA0;
    }
    X_160: for (;;) { IF: if (gt <= 160) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.call__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
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
  case 8:{ gt = 129; break IF; }
  case 9:{ gt = 134; break IF; }
  case 10:{ gt = 139; break IF; }
  case 11:{ gt = 144; break IF; }
  case 12:{ gt = 162; break IF; }
  case 13:{ gt = 180; break IF; }
  case 14:{ gt = 198; break IF; }
  case 15:{ gt = 216; break IF; }
  default: { gt = 221; break IF; }
}
    }
    X_80: for (;;) { IF: if (gt <= 80) {

(refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent(false))).openConfig__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2(lcA1);
return;
    }
    X_85: for (;;) { IF: if (gt <= 85) {

(refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent(false))).closeConfigurationPanel__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2(lcA1);
return;
    }
    X_90: for (;;) { IF: if (gt <= 90) {

(refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent(false))).save__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2(lcA1);
return;
    }
    X_95: for (;;) { IF: if (gt <= 95) {

(refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent(false))).resetConfiguration__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2(lcA1);
return;
    }
    X_100: for (;;) { IF: if (gt <= 100) {

(refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent(false))).clearFilter__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2(lcA1);
return;
    }
    X_105: for (;;) { IF: if (gt <= 105) {

(refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent(false))).toogleTagItem__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2(lcA1);
return;
    }
    X_110: for (;;) { IF: if (gt <= 110) {

(refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent(false))).closeTagItem__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2(lcA1);
return;
    }
    X_115: for (;;) { IF: if (gt <= 115) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemView || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemView = io_cloudoffice_platform_cockpit_tagitem_TagItemView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_tagitem_TagItemView_2(lcA1);
var stA1 = invoker.toString__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_String_2(stA1,lcA3, null);
(refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent(false))).processTagItem__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2Ljava_lang_String_2(stA0, stA1);
return;
    }
    X_129: for (;;) { IF: if (gt <= 129) {

(refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent(false))).processTagItemList__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2(lcA1);
return;
    }
    X_134: for (;;) { IF: if (gt <= 134) {

(refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent(false))).getItemList__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2(lcA1);
return;
    }
    X_139: for (;;) { IF: if (gt <= 139) {

(refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent(false))).createNewTag__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2(lcA1);
return;
    }
    X_144: for (;;) { IF: if (gt <= 144) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemView || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemView = io_cloudoffice_platform_cockpit_tagitem_TagItemView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_tagitem_TagItemView_2(lcA1);
var stA1 = invoker.toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_tagitem_ListItemView || (refs_io_cloudoffice_platform_cockpit_tagitem_ListItemView = io_cloudoffice_platform_cockpit_tagitem_ListItemView(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_tagitem_ListItemView']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.tagitem.ListItemView');
(refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent(false))).selectItem__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2Lio_cloudoffice_platform_cockpit_tagitem_ListItemView_2(stA0, stA1);
return;
    }
    X_162: for (;;) { IF: if (gt <= 162) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemView || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemView = io_cloudoffice_platform_cockpit_tagitem_TagItemView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_tagitem_TagItemView_2(lcA1);
var stA1 = invoker.toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_tagitem_ListItemView || (refs_io_cloudoffice_platform_cockpit_tagitem_ListItemView = io_cloudoffice_platform_cockpit_tagitem_ListItemView(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_tagitem_ListItemView']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.tagitem.ListItemView');
(refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent(false))).addTagItem__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2Lio_cloudoffice_platform_cockpit_tagitem_ListItemView_2(stA0, stA1);
return;
    }
    X_180: for (;;) { IF: if (gt <= 180) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemView || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemView = io_cloudoffice_platform_cockpit_tagitem_TagItemView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_tagitem_TagItemView_2(lcA1);
var stA1 = invoker.toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_tagitem_ListItemView || (refs_io_cloudoffice_platform_cockpit_tagitem_ListItemView = io_cloudoffice_platform_cockpit_tagitem_ListItemView(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_tagitem_ListItemView']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.tagitem.ListItemView');
(refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent(false))).deleteTagItemFromList__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2Lio_cloudoffice_platform_cockpit_tagitem_ListItemView_2(stA0, stA1);
return;
    }
    X_198: for (;;) { IF: if (gt <= 198) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemView || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemView = io_cloudoffice_platform_cockpit_tagitem_TagItemView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_tagitem_TagItemView_2(lcA1);
var stA1 = invoker.toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_tagitem_ListItemView || (refs_io_cloudoffice_platform_cockpit_tagitem_ListItemView = io_cloudoffice_platform_cockpit_tagitem_ListItemView(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_tagitem_ListItemView']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.tagitem.ListItemView');
(refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent(false))).deleteTagItem__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2Lio_cloudoffice_platform_cockpit_tagitem_ListItemView_2(stA0, stA1);
return;
    }
    X_216: for (;;) { IF: if (gt <= 216) {

(refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent(false))).defaultInitialData__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2(lcA1);
return;
    }
    X_221: for (;;) { IF: if (gt <= 221) {
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
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_tagitem_TagItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.tagitem.TagItemView');
var stA0 = (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemView || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemView = io_cloudoffice_platform_cockpit_tagitem_TagItemView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_tagitem_TagItemView_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2I = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0: { gt = 20; break IF; }
  default: { gt = 25; break IF; }
}
    }
    X_20: for (;;) { IF: if (gt <= 20) {

(refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent(false))).itemSearchAutocomplete__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2(lcA1);
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
    m = c.onMessage__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
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
    m = c.read__Lio_cloudoffice_platform_cockpit_tagitem_TagItemView_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_tagitem_TagItemView;
(refs_io_cloudoffice_platform_cockpit_tagitem_TagItemView || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemView = io_cloudoffice_platform_cockpit_tagitem_TagItemView(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_tagitem_TagItemView$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lio_cloudoffice_platform_cockpit_tagitem_TagItemView_2Lio_cloudoffice_platform_cockpit_tagitem_TagItemView_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemView || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemView = io_cloudoffice_platform_cockpit_tagitem_TagItemView(false))).access$400__Lio_cloudoffice_platform_cockpit_tagitem_TagItemView_2Lio_cloudoffice_platform_cockpit_tagitem_TagItemView_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_tagitem_TagItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.tagitem.TagItemView');
lcA0.onMessage__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_tagitem_TagItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.tagitem.TagItemView');
lcA0.onChange__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lio_cloudoffice_platform_cockpit_tagitem_TagItemView_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_tagitem_TagItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.tagitem.TagItemView');
var stA0 = lcA0.cloneTo__Lio_cloudoffice_platform_cockpit_tagitem_TagItemView_2Lio_cloudoffice_platform_cockpit_tagitem_TagItemView_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_tagitem_TagItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.tagitem.TagItemView');
lcA0.call__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_tagitem_TagItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.tagitem.TagItemView');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_tagitem_TagItemView_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_tagitem_TagItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.tagitem.TagItemView');
lcA0.setValue__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_tagitem_TagItemView$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_tagitem_TagItemView$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_tagitem_TagItemView$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_tagitem_TagItemView$Html4JavaTypefillInstOf });
    io_cloudoffice_platform_cockpit_tagitem_TagItemView$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/tagitem/TagItemView$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_tagitem_TagItemView;
    var refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent;
    var refs_org_netbeans_html_json_spi_Proto$Type;
    var refs_java_lang_String;
    var refs_java_lang_Boolean;
    var refs_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration;
    var refs_io_cloudoffice_platform_cockpit_api_ComponentDef;
    var refs_io_cloudoffice_platform_cockpit_tagitem_ListItemView;
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
vm.io_cloudoffice_platform_cockpit_tagitem_TagItemView$Html4JavaType = io_cloudoffice_platform_cockpit_tagitem_TagItemView$Html4JavaType;

vm.io_cloudoffice_platform_cockpit_api_HelperItemView = link('io/cloudoffice/platform/cockpit/api/HelperItemView', function(f) { vm.io_cloudoffice_platform_cockpit_api_HelperItemView =  f; });
vm.io_cloudoffice_platform_cockpit_api_ComponentDef = link('io/cloudoffice/platform/cockpit/api/ComponentDef', function(f) { vm.io_cloudoffice_platform_cockpit_api_ComponentDef =  f; });

function io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_proto'] = v; return this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_proto']; };
  m = c._prop_searchBoxComponentDefinition = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_prop_searchBoxComponentDefinition'] = v; return this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_prop_searchBoxComponentDefinition']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$TagItemManager || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$TagItemManager = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$TagItemManager(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_proto'],"searchBoxComponentDefinition");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_prop_searchBoxComponentDefinition']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_ComponentDef;
(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_prop_searchBoxComponentDefinition'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_prop_searchBoxComponentDefinition'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_prop_searchBoxComponentDefinition']['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_prop_searchBoxComponentDefinition'], 'io.cloudoffice.platform.cockpit.api.ComponentDef');
return lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_prop_searchBoxComponentDefinition'];

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

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_prop_searchBoxComponentDefinition'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_prop_searchBoxComponentDefinition'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_proto'],"searchBoxComponentDefinition", lcA2, lcA1);
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
stA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_proto'] = stA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_prop_searchBoxComponentDefinition'] = c._TYPE();
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_prop_searchBoxComponentDefinition'] = lcA1;
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
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 1);
Array.at(stA2, 0, "searchBoxComponentDefinition");
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_proto'],(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, (lcA3[0] || Array.at(lcA3, 0)));
stA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_prop_searchBoxComponentDefinition'] = stA1;
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"searchBoxComponentDefinition");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_prop_searchBoxComponentDefinition']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(125));
var stA0 = invoker.toString__Ljava_lang_String_2(lcA1);
return stA0;

};
c['toString__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_proto']);
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lio_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_prop_searchBoxComponentDefinition']) !== null) { gt = 21; break IF; }
var stA1 = null;{ gt = 45; break IF; }
    }
    X_21: for (;;) { IF: if (gt <= 21) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_prop_searchBoxComponentDefinition']) !== (c._TYPE())) { gt = 37; break IF; }
var stA1 = c._TYPE();{ gt = 45; break IF; }
    }
    X_37: for (;;) { IF: if (gt <= 37) {

var stA1 = lcA0.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_45: for (;;) { IF: if (gt <= 45) {
stA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_prop_searchBoxComponentDefinition'] = stA1;
return lcA2;

    }
}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lio_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_2 = function() {
  var  lcA0 = this;
invoker.applyBindings__V(lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_proto']);
return lcA0;

};
c['applyBindings__Lio_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_2'] = m;

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

var stI0 = lcA1 != null && lcA1['$instOf_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.tagitem.TagItemConfiguration');
var lcA2 = lcA1;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_prop_searchBoxComponentDefinition']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_prop_searchBoxComponentDefinition']);
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
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_prop_searchBoxComponentDefinition']);
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
var stA0 = lcA0.clone__Lio_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lio_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration$Html4JavaType_2 = function() {
return c._TYPE();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_2 = function(lcA0) {
return lcA0['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lio_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_2Lio_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration$Html4JavaType;
(refs_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration$Html4JavaType || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration$Html4JavaType = io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration$Html4JavaType(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_tagitem_TagItemConfigurationfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_tagitem_TagItemConfigurationfillInstOf });
    io_cloudoffice_platform_cockpit_tagitem_TagItemConfigurationfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/tagitem/TagItemConfiguration';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$TagItemManager;
    var refs_io_cloudoffice_platform_cockpit_api_ComponentDef;
    var refs_net_java_html_json_Models;
    var refs_net_java_html_BrwsrCtx;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_proto'] = null;
    this['fld_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_prop_searchBoxComponentDefinition'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration = registerClass(exports,'io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration',io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration);


function io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration$Html4JavaType() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration = io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration(false))).constructor.$class, (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$TagItemManager || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$TagItemManager = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$TagItemManager(false))).constructor.$class, 1, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"searchBoxComponentDefinition", 0, 0, 0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLio_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0: { gt = 20; break IF; }
  default: { gt = 37; break IF; }
}
    }
    X_20: for (;;) { IF: if (gt <= 20) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration = io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration(false))).access$100__Lio_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.api.ComponentDef');
stA0.setSearchBoxComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2(stA1);
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
    m = c.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_2I = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0: { gt = 20; break IF; }
  default: { gt = 25; break IF; }
}
    }
    X_20: for (;;) { IF: if (gt <= 20) {

var stA0 = lcA1.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
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
    m = c.call__VLio_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.tagitem.TagItemConfiguration');
var stA0 = (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration = io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLio_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLio_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
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
    m = c.read__Lio_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration;
(refs_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration = io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lio_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_2Lio_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration || (refs_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration = io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration(false))).access$400__Lio_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_2Lio_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.tagitem.TagItemConfiguration');
lcA0.onMessage__VLio_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.tagitem.TagItemConfiguration');
lcA0.onChange__VLio_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lio_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.tagitem.TagItemConfiguration');
var stA0 = lcA0.cloneTo__Lio_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_2Lio_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.tagitem.TagItemConfiguration');
lcA0.call__VLio_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.tagitem.TagItemConfiguration');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.tagitem.TagItemConfiguration');
lcA0.setValue__VLio_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration$Html4JavaTypefillInstOf });
    io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/tagitem/TagItemConfiguration$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration;
    var refs_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$TagItemManager;
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
vm.io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration$Html4JavaType = io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration$Html4JavaType;


function io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$TagItemManager() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$TagItemManager;
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
    function io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$TagItemManagerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$TagItemManager', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$TagItemManagerfillInstOf });
    io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$TagItemManagerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/tagitem/TagItemComponent$TagItemManager';
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
vm.io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$TagItemManager = registerClass(exports,'io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$TagItemManager',io_cloudoffice_platform_cockpit_tagitem_TagItemComponent$TagItemManager);

vm.io_cloudoffice_platform_cockpit_api_AbstractComponent = link('io/cloudoffice/platform/cockpit/api/AbstractComponent', function(f) { vm.io_cloudoffice_platform_cockpit_api_AbstractComponent =  f; });
vm.io_cloudoffice_platform_cockpit_api_Logger = link('io/cloudoffice/platform/cockpit/api/Logger', function(f) { vm.io_cloudoffice_platform_cockpit_api_Logger =  f; });

function io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration$1fillInstOf });
    io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/tagitem/TagItemConfiguration$1';
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
vm.io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration$1 = io_cloudoffice_platform_cockpit_tagitem_TagItemConfiguration$1;


function io_cloudoffice_platform_cockpit_tagitem_TagItemView$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_tagitem_TagItemView$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_tagitem_TagItemView$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_tagitem_TagItemView$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_tagitem_TagItemView$1fillInstOf });
    io_cloudoffice_platform_cockpit_tagitem_TagItemView$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/tagitem/TagItemView$1';
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
vm.io_cloudoffice_platform_cockpit_tagitem_TagItemView$1 = io_cloudoffice_platform_cockpit_tagitem_TagItemView$1;

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
  invoker.getJSONObject__Lorg_json_JSONObject_2Ljava_lang_String_2 = function(target, p1) {
    return target['getJSONObject__Lorg_json_JSONObject_2Ljava_lang_String_2'](p1);
  };
  invoker.getString__Ljava_lang_String_2Ljava_lang_String_2 = function(target, p1) {
    return target['getString__Ljava_lang_String_2Ljava_lang_String_2'](p1);
  };
  invoker.setComponent__VLjava_lang_String_2 = function(target, p1) {
    return target['setComponent__VLjava_lang_String_2'](p1);
  };
  invoker.setInstanceId__VLjava_lang_String_2 = function(target, p1) {
    return target['setInstanceId__VLjava_lang_String_2'](p1);
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
  invoker.clear__V = function(target) {
    return target['clear__V']();
  };
  invoker.setActive__VZ = function(target, p1) {
    return target['setActive__VZ'](p1);
  };
  invoker.call__VLio_cloudoffice_platform_cockpit_api_ServerCallback_2 = function(target, p1) {
    return target['call__VLio_cloudoffice_platform_cockpit_api_ServerCallback_2'](p1);
  };
  invoker.getRequest__Lio_cloudoffice_platform_cockpit_api_AsyncRequest_2 = function(target) {
    return target['getRequest__Lio_cloudoffice_platform_cockpit_api_AsyncRequest_2']();
  };
  invoker.getView__Ljava_lang_Object_2 = function(target) {
    return target['getView__Ljava_lang_Object_2']();
  };
  invoker.remove__ZLjava_lang_Object_2 = function(target, p1) {
    return target['remove__ZLjava_lang_Object_2'](p1);
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
  invoker.add__ZLjava_lang_Object_2 = function(target, p1) {
    return target['add__ZLjava_lang_Object_2'](p1);
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
  invoker.getArray__Ljava_util_List_2 = function(target) {
    return target['getArray__Ljava_util_List_2']();
  };
  invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2 = function(target, p1) {
    return target['get__Ljava_lang_Object_2Ljava_lang_Object_2'](p1);
  };
  invoker.equals__ZLjava_lang_Object_2 = function(target, p1) {
    return target['equals__ZLjava_lang_Object_2'](p1);
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
  invoker.invoke__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2 = function(target, p1, p2) {
    return target['invoke__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2'](p1,p2);
  };
  invoker.setView__VLjava_lang_Object_2 = function(target, p1) {
    return target['setView__VLjava_lang_Object_2'](p1);
  };
  invoker.getDefaultViewName__Ljava_lang_String_2 = function(target) {
    return target['getDefaultViewName__Ljava_lang_String_2']();
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
  exports['registerResource']('META-INF/MANIFEST.MF', 'TWFuaWZlc3QtVmVyc2lvbjogMS4wDQpCbmQtTGFzdE1vZGlmaWVkOiAxNTk3NzY0MTA1Njc2DQpCdWlsZC1KZGs6IDEuOC4wXzEzMQ0KQnVpbHQtQnk6IGV1c2lhDQpCdW5kbGUtTWFuaWZlc3RWZXJzaW9uOiAyDQpCdW5kbGUtTmFtZTogR2FkZ2V0cyBUYWdnZXINCkJ1bmRsZS1TeW1ib2xpY05hbWU6IGlvLmNsb3Vkb2ZmaWNlLnBsYXRmb3JtLmNvY2twaXQudGFnaXRlbQ0KQnVuZGxlLVZlcnNpb246IDEuMS4wDQpDcmVhdGVkLUJ5OiBBcGFjaGUgTWF2ZW4gQnVuZGxlIFBsdWdpbg0KRXhwb3J0LVBhY2thZ2U6IGlvLmNsb3Vkb2ZmaWNlLnBsYXRmb3JtLmNvY2twaXQudGFnaXRlbTt1c2VzOj0iaW8uY2xvdWRvDQogZmZpY2UucGxhdGZvcm0uY29ja3BpdC5hcGkiO3ZlcnNpb249IjEuMS4wIg0KSW1wb3J0LVBhY2thZ2U6IGlvLmNsb3Vkb2ZmaWNlLnBsYXRmb3JtLmNvY2twaXQuYXBpO3ZlcnNpb249IlsxLjEsMikiLGlvDQogLmNsb3Vkb2ZmaWNlLnBsYXRmb3JtLmNvY2twaXQuanM7dmVyc2lvbj0iWzEuMSwyKSIsbmV0LmphdmEuaHRtbDt2ZXJzaW8NCiBuPSJbMS42LDIpIixuZXQuamF2YS5odG1sLmpzb247dmVyc2lvbj0iWzEuNiwyKSIsb3JnLmpzb247dmVyc2lvbj0iWzIwMQ0KIDgwODEzLjAsMjAxODA4MTQpIixvcmcubmV0YmVhbnMuaHRtbC5qc29uLnNwaTt2ZXJzaW9uPSJbMS42LDIpIg0KVG9vbDogQm5kLTIuMS4wLjIwMTMwNDI2LTEyMjIxMw0K');
});