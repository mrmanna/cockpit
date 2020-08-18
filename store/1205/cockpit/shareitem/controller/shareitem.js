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

function io_cloudoffice_platform_cockpit_shareitem_ListItemView$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_shareitem_ListItemView$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_shareitem_ListItemView$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_shareitem_ListItemView$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_shareitem_ListItemView$1fillInstOf });
    io_cloudoffice_platform_cockpit_shareitem_ListItemView$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/shareitem/ListItemView$1';
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
vm.io_cloudoffice_platform_cockpit_shareitem_ListItemView$1 = io_cloudoffice_platform_cockpit_shareitem_ListItemView$1;


function io_cloudoffice_platform_cockpit_shareitem_ListItemView$Html4JavaType() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_shareitem_ListItemView$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView || (refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView = io_cloudoffice_platform_cockpit_shareitem_ListItemView(false))).constructor.$class, (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ListItemViewModel || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ListItemViewModel = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ListItemViewModel(false))).constructor.$class, (11), 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemId", 0, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemName", 1, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemType", 2, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"hasOwnerPermission", 3, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"hasAdminPermission", 4, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"hasWritePermission", 5, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"hasReadPermission", (6), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"selectedPermission", (7), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"selectedPermissionColor", (8), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"isRemovable", (9), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"showPermissionMenu", (10), 0, 0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLio_cloudoffice_platform_cockpit_shareitem_ListItemView_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 60; break IF; }
  case 1:{ gt = 77; break IF; }
  case 2:{ gt = 94; break IF; }
  case 3:{ gt = 111; break IF; }
  case 4:{ gt = 131; break IF; }
  case 5:{ gt = 151; break IF; }
  case 6:{ gt = 171; break IF; }
  case 7:{ gt = 191; break IF; }
  case 8:{ gt = 208; break IF; }
  case 9:{ gt = 225; break IF; }
  case 10:{ gt = 245; break IF; }
  default: { gt = 265; break IF; }
}
    }
    X_60: for (;;) { IF: if (gt <= 60) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView || (refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView = io_cloudoffice_platform_cockpit_shareitem_ListItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_shareitem_ListItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemId__VLjava_lang_String_2(stA1);
return;
    }
    X_77: for (;;) { IF: if (gt <= 77) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView || (refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView = io_cloudoffice_platform_cockpit_shareitem_ListItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_shareitem_ListItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemName__VLjava_lang_String_2(stA1);
return;
    }
    X_94: for (;;) { IF: if (gt <= 94) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView || (refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView = io_cloudoffice_platform_cockpit_shareitem_ListItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_shareitem_ListItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemType__VLjava_lang_String_2(stA1);
return;
    }
    X_111: for (;;) { IF: if (gt <= 111) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView || (refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView = io_cloudoffice_platform_cockpit_shareitem_ListItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_shareitem_ListItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setHasOwnerPermission__VZ(stI1);
return;
    }
    X_131: for (;;) { IF: if (gt <= 131) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView || (refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView = io_cloudoffice_platform_cockpit_shareitem_ListItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_shareitem_ListItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setHasAdminPermission__VZ(stI1);
return;
    }
    X_151: for (;;) { IF: if (gt <= 151) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView || (refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView = io_cloudoffice_platform_cockpit_shareitem_ListItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_shareitem_ListItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setHasWritePermission__VZ(stI1);
return;
    }
    X_171: for (;;) { IF: if (gt <= 171) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView || (refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView = io_cloudoffice_platform_cockpit_shareitem_ListItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_shareitem_ListItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setHasReadPermission__VZ(stI1);
return;
    }
    X_191: for (;;) { IF: if (gt <= 191) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView || (refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView = io_cloudoffice_platform_cockpit_shareitem_ListItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_shareitem_ListItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setSelectedPermission__VLjava_lang_String_2(stA1);
return;
    }
    X_208: for (;;) { IF: if (gt <= 208) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView || (refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView = io_cloudoffice_platform_cockpit_shareitem_ListItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_shareitem_ListItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setSelectedPermissionColor__VLjava_lang_String_2(stA1);
return;
    }
    X_225: for (;;) { IF: if (gt <= 225) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView || (refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView = io_cloudoffice_platform_cockpit_shareitem_ListItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_shareitem_ListItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setIsRemovable__VZ(stI1);
return;
    }
    X_245: for (;;) { IF: if (gt <= 245) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView || (refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView = io_cloudoffice_platform_cockpit_shareitem_ListItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_shareitem_ListItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setShowPermissionMenu__VZ(stI1);
return;
    }
    X_265: for (;;) { IF: if (gt <= 265) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2I = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 60; break IF; }
  case 1:{ gt = 65; break IF; }
  case 2:{ gt = 70; break IF; }
  case 3:{ gt = 75; break IF; }
  case 4:{ gt = 83; break IF; }
  case 5:{ gt = 91; break IF; }
  case 6:{ gt = 99; break IF; }
  case 7:{ gt = 107; break IF; }
  case 8:{ gt = 112; break IF; }
  case 9:{ gt = 117; break IF; }
  case 10:{ gt = 125; break IF; }
  default: { gt = 133; break IF; }
}
    }
    X_60: for (;;) { IF: if (gt <= 60) {

var stA0 = lcA1.getItemId__Ljava_lang_String_2();
return stA0;
    }
    X_65: for (;;) { IF: if (gt <= 65) {

var stA0 = lcA1.getItemName__Ljava_lang_String_2();
return stA0;
    }
    X_70: for (;;) { IF: if (gt <= 70) {

var stA0 = lcA1.getItemType__Ljava_lang_String_2();
return stA0;
    }
    X_75: for (;;) { IF: if (gt <= 75) {

var stI0 = lcA1.isHasOwnerPermission__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_83: for (;;) { IF: if (gt <= 83) {

var stI0 = lcA1.isHasAdminPermission__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_91: for (;;) { IF: if (gt <= 91) {

var stI0 = lcA1.isHasWritePermission__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_99: for (;;) { IF: if (gt <= 99) {

var stI0 = lcA1.isHasReadPermission__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_107: for (;;) { IF: if (gt <= 107) {

var stA0 = lcA1.getSelectedPermission__Ljava_lang_String_2();
return stA0;
    }
    X_112: for (;;) { IF: if (gt <= 112) {

var stA0 = lcA1.getSelectedPermissionColor__Ljava_lang_String_2();
return stA0;
    }
    X_117: for (;;) { IF: if (gt <= 117) {

var stI0 = lcA1.isIsRemovable__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_125: for (;;) { IF: if (gt <= 125) {

var stI0 = lcA1.isShowPermissionMenu__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_133: for (;;) { IF: if (gt <= 133) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.call__VLio_cloudoffice_platform_cockpit_shareitem_ListItemView_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_shareitem_ListItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.shareitem.ListItemView');
var stA0 = (refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView || (refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView = io_cloudoffice_platform_cockpit_shareitem_ListItemView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLio_cloudoffice_platform_cockpit_shareitem_ListItemView_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLio_cloudoffice_platform_cockpit_shareitem_ListItemView_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
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
    m = c.read__Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_shareitem_ListItemView;
(refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView || (refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView = io_cloudoffice_platform_cockpit_shareitem_ListItemView(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_shareitem_ListItemView$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView || (refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView = io_cloudoffice_platform_cockpit_shareitem_ListItemView(false))).access$400__Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_shareitem_ListItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.shareitem.ListItemView');
lcA0.onMessage__VLio_cloudoffice_platform_cockpit_shareitem_ListItemView_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_shareitem_ListItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.shareitem.ListItemView');
lcA0.onChange__VLio_cloudoffice_platform_cockpit_shareitem_ListItemView_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_shareitem_ListItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.shareitem.ListItemView');
var stA0 = lcA0.cloneTo__Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_shareitem_ListItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.shareitem.ListItemView');
lcA0.call__VLio_cloudoffice_platform_cockpit_shareitem_ListItemView_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_shareitem_ListItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.shareitem.ListItemView');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_shareitem_ListItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.shareitem.ListItemView');
lcA0.setValue__VLio_cloudoffice_platform_cockpit_shareitem_ListItemView_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_shareitem_ListItemView$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_shareitem_ListItemView$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_shareitem_ListItemView$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_shareitem_ListItemView$Html4JavaTypefillInstOf });
    io_cloudoffice_platform_cockpit_shareitem_ListItemView$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/shareitem/ListItemView$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView;
    var refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ListItemViewModel;
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
vm.io_cloudoffice_platform_cockpit_shareitem_ListItemView$Html4JavaType = io_cloudoffice_platform_cockpit_shareitem_ListItemView$Html4JavaType;

vm.java_lang_StringBuilder = link('java/lang/StringBuilder', function(f) { vm.java_lang_StringBuilder =  f; });
vm.java_lang_UnsupportedOperationException = link('java/lang/UnsupportedOperationException', function(f) { vm.java_lang_UnsupportedOperationException =  f; });
vm.java_lang_Boolean = link('java/lang/Boolean', function(f) { vm.java_lang_Boolean =  f; });
vm.java_lang_String = link('java/lang/String', function(f) { vm.java_lang_String =  f; });
vm.org_netbeans_html_json_spi_Proto$Type = link('org/netbeans/html/json/spi/Proto$Type', function(f) { vm.org_netbeans_html_json_spi_Proto$Type =  f; });

function io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ListItemViewModel() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ListItemViewModel;
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
    m = c.getMaximumPermission__Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = lcA0.isHasOwnerPermission__Z();
if ((stI0) == 0) { gt = 10; break IF; }
return "Owner";
    }
    X_10: for (;;) { IF: if (gt <= 10) {

var stI0 = lcA0.isHasAdminPermission__Z();
if ((stI0) == 0) { gt = 20; break IF; }
return "Admin";
    }
    X_20: for (;;) { IF: if (gt <= 20) {

var stI0 = lcA0.isHasWritePermission__Z();
if ((stI0) == 0) { gt = 30; break IF; }
return "Write";
    }
    X_30: for (;;) { IF: if (gt <= 30) {

var stI0 = lcA0.isHasReadPermission__Z();
if ((stI0) == 0) { gt = 40; break IF; }
return "Read";
    }
    X_40: for (;;) { IF: if (gt <= 40) {

return "None";

    }
}}}}}
};
c['getMaximumPermission__Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getMaximumPermissionColor__Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = lcA0.isHasOwnerPermission__Z();
if ((stI0) == 0) { gt = 10; break IF; }
return "#8A0868";
    }
    X_10: for (;;) { IF: if (gt <= 10) {

var stI0 = lcA0.isHasAdminPermission__Z();
if ((stI0) == 0) { gt = 20; break IF; }
return "#FF5733";
    }
    X_20: for (;;) { IF: if (gt <= 20) {

var stI0 = lcA0.isHasWritePermission__Z();
if ((stI0) == 0) { gt = 30; break IF; }
return "#00aacd";
    }
    X_30: for (;;) { IF: if (gt <= 30) {

var stI0 = lcA0.isHasReadPermission__Z();
if ((stI0) == 0) { gt = 40; break IF; }
return "#04980F";
    }
    X_40: for (;;) { IF: if (gt <= 40) {

return "#58595b";

    }
}}}}}
};
c['getMaximumPermissionColor__Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ListItemViewModelfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ListItemViewModel', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ListItemViewModelfillInstOf });
    io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ListItemViewModelfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/shareitem/ShareItemComponent$ListItemViewModel';
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
vm.io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ListItemViewModel = registerClass(exports,'io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ListItemViewModel',io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ListItemViewModel);


function io_cloudoffice_platform_cockpit_shareitem_ListItemView() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_shareitem_ListItemView;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_proto'] = v; return this['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_proto']; };
  m = c._prop_itemId = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_itemId'] = v; return this['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_itemId']; };
  m = c._prop_itemName = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_itemName'] = v; return this['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_itemName']; };
  m = c._prop_itemType = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_itemType'] = v; return this['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_itemType']; };
  m = c._prop_hasOwnerPermission = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_hasOwnerPermission'] = v; return this['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_hasOwnerPermission']; };
  m = c._prop_hasAdminPermission = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_hasAdminPermission'] = v; return this['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_hasAdminPermission']; };
  m = c._prop_hasWritePermission = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_hasWritePermission'] = v; return this['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_hasWritePermission']; };
  m = c._prop_hasReadPermission = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_hasReadPermission'] = v; return this['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_hasReadPermission']; };
  m = c._prop_selectedPermission = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_selectedPermission'] = v; return this['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_selectedPermission']; };
  m = c._prop_selectedPermissionColor = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_selectedPermissionColor'] = v; return this['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_selectedPermissionColor']; };
  m = c._prop_isRemovable = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_isRemovable'] = v; return this['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_isRemovable']; };
  m = c._prop_showPermissionMenu = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_showPermissionMenu'] = v; return this['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_showPermissionMenu']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ListItemViewModel || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ListItemViewModel = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ListItemViewModel(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.getItemId__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_proto'],"itemId");
return lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_itemId'];

};
c['getItemId__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemId__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_itemId'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_itemId'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_proto'],"itemId", lcA2, lcA1);
return;

    }
}}
};
c['setItemId__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getItemName__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_proto'],"itemName");
return lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_itemName'];

};
c['getItemName__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemName__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_itemName'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_itemName'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_proto'],"itemName", lcA2, lcA1);
return;

    }
}}
};
c['setItemName__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getItemType__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_proto'],"itemType");
return lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_itemType'];

};
c['getItemType__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemType__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_itemType'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_itemType'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_proto'],"itemType", lcA2, lcA1);
return;

    }
}}
};
c['setItemType__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isHasOwnerPermission__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_proto'],"hasOwnerPermission");
return lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_hasOwnerPermission'];

};
c['isHasOwnerPermission__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setHasOwnerPermission__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_hasOwnerPermission']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_hasOwnerPermission'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_proto'];var stA1 = "hasOwnerPermission";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
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
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_proto'],"hasAdminPermission");
return lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_hasAdminPermission'];

};
c['isHasAdminPermission__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setHasAdminPermission__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_hasAdminPermission']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_hasAdminPermission'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_proto'];var stA1 = "hasAdminPermission";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
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
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_proto'],"hasWritePermission");
return lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_hasWritePermission'];

};
c['isHasWritePermission__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setHasWritePermission__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_hasWritePermission']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_hasWritePermission'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_proto'];var stA1 = "hasWritePermission";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
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
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_proto'],"hasReadPermission");
return lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_hasReadPermission'];

};
c['isHasReadPermission__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setHasReadPermission__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_hasReadPermission']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_hasReadPermission'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_proto'];var stA1 = "hasReadPermission";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setHasReadPermission__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getSelectedPermission__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_proto'],"selectedPermission");
return lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_selectedPermission'];

};
c['getSelectedPermission__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setSelectedPermission__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_selectedPermission'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_selectedPermission'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_proto'],"selectedPermission", lcA2, lcA1);
return;

    }
}}
};
c['setSelectedPermission__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getSelectedPermissionColor__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_proto'],"selectedPermissionColor");
return lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_selectedPermissionColor'];

};
c['getSelectedPermissionColor__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setSelectedPermissionColor__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_selectedPermissionColor'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_selectedPermissionColor'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_proto'],"selectedPermissionColor", lcA2, lcA1);
return;

    }
}}
};
c['setSelectedPermissionColor__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isIsRemovable__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_proto'],"isRemovable");
return lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_isRemovable'];

};
c['isIsRemovable__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setIsRemovable__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_isRemovable']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_isRemovable'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_proto'];var stA1 = "isRemovable";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setIsRemovable__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isShowPermissionMenu__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_proto'],"showPermissionMenu");
return lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_showPermissionMenu'];

};
c['isShowPermissionMenu__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setShowPermissionMenu__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_showPermissionMenu']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_showPermissionMenu'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_proto'];var stA1 = "showPermissionMenu";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setShowPermissionMenu__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2(c._TYPE(),lcA0, lcA1);
stA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_proto'] = stA1;
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
    m = CLS.cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2ZZZZLjava_lang_String_2Ljava_lang_String_2ZZ = function(lcA1, lcA2, lcA3, lcI4, lcI5, lcI6, lcI7, lcA8, lcA9, lcI10, lcI11) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_itemId'] = lcA1;
lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_itemName'] = lcA2;
lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_itemType'] = lcA3;
lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_hasOwnerPermission'] = lcI4;
lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_hasAdminPermission'] = lcI5;
lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_hasWritePermission'] = lcI6;
lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_hasReadPermission'] = lcI7;
lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_selectedPermission'] = lcA8;
lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_selectedPermissionColor'] = lcA9;
lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_isRemovable'] = lcI10;
lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_showPermissionMenu'] = lcI11;
return;

};
CLS['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2ZZZZLjava_lang_String_2Ljava_lang_String_2ZZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, (11));
var lcA3 = stA0;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, (11));
Array.at(stA2, 0, "itemId");
Array.at(stA2, 1, "itemName");
Array.at(stA2, 2, "itemType");
Array.at(stA2, 3, "hasOwnerPermission");
Array.at(stA2, 4, "hasAdminPermission");
Array.at(stA2, 5, "hasWritePermission");
Array.at(stA2, (6), "hasReadPermission");
Array.at(stA2, (7), "selectedPermission");
Array.at(stA2, (8), "selectedPermissionColor");
Array.at(stA2, (9), "isRemovable");
Array.at(stA2, (10), "showPermissionMenu");
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
if ((lcA3[0] || Array.at(lcA3, 0)) !== null && !(lcA3[0] || Array.at(lcA3, 0))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[0] || Array.at(lcA3, 0)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_itemId'] = (lcA3[0] || Array.at(lcA3, 0));
if ((lcA3[1] || Array.at(lcA3, 1)) !== null && !(lcA3[1] || Array.at(lcA3, 1))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[1] || Array.at(lcA3, 1)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_itemName'] = (lcA3[1] || Array.at(lcA3, 1));
if ((lcA3[2] || Array.at(lcA3, 2)) !== null && !(lcA3[2] || Array.at(lcA3, 2))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[2] || Array.at(lcA3, 2)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_itemType'] = (lcA3[2] || Array.at(lcA3, 2));
var stA0 = lcA0;if (((lcA3[3] || Array.at(lcA3, 3))) !== null) { gt = 126; break IF; }
var stI1 = 0;{ gt = 138; break IF; }
    }
    X_126: for (;;) { IF: if (gt <= 126) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[3] || Array.at(lcA3, 3)));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_138: for (;;) { IF: if (gt <= 138) {
stA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_hasOwnerPermission'] = stI1;
var stA0 = lcA0;if (((lcA3[4] || Array.at(lcA3, 4))) !== null) { gt = 152; break IF; }
var stI1 = 0;{ gt = 164; break IF; }
    }
    X_152: for (;;) { IF: if (gt <= 152) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[4] || Array.at(lcA3, 4)));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_164: for (;;) { IF: if (gt <= 164) {
stA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_hasAdminPermission'] = stI1;
var stA0 = lcA0;if (((lcA3[5] || Array.at(lcA3, 5))) !== null) { gt = 178; break IF; }
var stI1 = 0;{ gt = 190; break IF; }
    }
    X_178: for (;;) { IF: if (gt <= 178) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[5] || Array.at(lcA3, 5)));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_190: for (;;) { IF: if (gt <= 190) {
stA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_hasWritePermission'] = stI1;
var stA0 = lcA0;if (((lcA3[(6)] || Array.at(lcA3, (6)))) !== null) { gt = 205; break IF; }
var stI1 = 0;{ gt = 218; break IF; }
    }
    X_205: for (;;) { IF: if (gt <= 205) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(6)] || Array.at(lcA3, (6))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_218: for (;;) { IF: if (gt <= 218) {
stA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_hasReadPermission'] = stI1;
if ((lcA3[(7)] || Array.at(lcA3, (7))) !== null && !(lcA3[(7)] || Array.at(lcA3, (7)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(7)] || Array.at(lcA3, (7))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_selectedPermission'] = (lcA3[(7)] || Array.at(lcA3, (7)));
if ((lcA3[(8)] || Array.at(lcA3, (8))) !== null && !(lcA3[(8)] || Array.at(lcA3, (8)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(8)] || Array.at(lcA3, (8))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_selectedPermissionColor'] = (lcA3[(8)] || Array.at(lcA3, (8)));
var stA0 = lcA0;if (((lcA3[(9)] || Array.at(lcA3, (9)))) !== null) { gt = 255; break IF; }
var stI1 = 0;{ gt = 268; break IF; }
    }
    X_255: for (;;) { IF: if (gt <= 255) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(9)] || Array.at(lcA3, (9))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_268: for (;;) { IF: if (gt <= 268) {
stA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_isRemovable'] = stI1;
var stA0 = lcA0;if (((lcA3[(10)] || Array.at(lcA3, (10)))) !== null) { gt = 283; break IF; }
var stI1 = 0;{ gt = 296; break IF; }
    }
    X_283: for (;;) { IF: if (gt <= 283) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(10)] || Array.at(lcA3, (10))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_296: for (;;) { IF: if (gt <= 296) {
stA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_showPermissionMenu'] = stI1;
return;

    }
}}}}}}}}}}}}}
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"selectedPermission");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getSelectedPermission__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"selectedPermissionColor");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getSelectedPermissionColor__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"isRemovable");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isIsRemovable__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"showPermissionMenu");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isShowPermissionMenu__Z();
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
    m = c.clone__Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_proto']);
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_shareitem_ListItemView;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = lcA0.getItemId__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_itemId'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getItemName__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_itemName'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getItemType__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_itemType'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isHasOwnerPermission__Z();
stA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_hasOwnerPermission'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isHasAdminPermission__Z();
stA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_hasAdminPermission'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isHasWritePermission__Z();
stA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_hasWritePermission'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isHasReadPermission__Z();
stA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_hasReadPermission'] = stI1;
var stA0 = lcA2;var stA1 = lcA0.getSelectedPermission__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_selectedPermission'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getSelectedPermissionColor__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_selectedPermissionColor'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isIsRemovable__Z();
stA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_isRemovable'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isShowPermissionMenu__Z();
stA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_showPermissionMenu'] = stI1;
return lcA2;

};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2 = function() {
  var  lcA0 = this;
invoker.applyBindings__V(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_proto']);
return lcA0;

};
c['applyBindings__Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2'] = m;

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

var stI0 = lcA1 != null && lcA1['$instOf_io_cloudoffice_platform_cockpit_shareitem_ListItemView'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_shareitem_ListItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.shareitem.ListItemView');
var lcA2 = lcA1;
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_itemId'], lcA2['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_itemId']);
if ((stI0) != 0) { gt = 40; break IF; }
return 0;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_itemName'], lcA2['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_itemName']);
if ((stI0) != 0) { gt = 59; break IF; }
return 0;
    }
    X_59: for (;;) { IF: if (gt <= 59) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_itemType'], lcA2['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_itemType']);
if ((stI0) != 0) { gt = 78; break IF; }
return 0;
    }
    X_78: for (;;) { IF: if (gt <= 78) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_hasOwnerPermission']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_hasOwnerPermission']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 103; break IF; }
return 0;
    }
    X_103: for (;;) { IF: if (gt <= 103) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_hasAdminPermission']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_hasAdminPermission']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 128; break IF; }
return 0;
    }
    X_128: for (;;) { IF: if (gt <= 128) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_hasWritePermission']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_hasWritePermission']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 153; break IF; }
return 0;
    }
    X_153: for (;;) { IF: if (gt <= 153) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_hasReadPermission']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_hasReadPermission']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 178; break IF; }
return 0;
    }
    X_178: for (;;) { IF: if (gt <= 178) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_selectedPermission'], lcA2['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_selectedPermission']);
if ((stI0) != 0) { gt = 197; break IF; }
return 0;
    }
    X_197: for (;;) { IF: if (gt <= 197) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_selectedPermissionColor'], lcA2['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_selectedPermissionColor']);
if ((stI0) != 0) { gt = 216; break IF; }
return 0;
    }
    X_216: for (;;) { IF: if (gt <= 216) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_isRemovable']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_isRemovable']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 241; break IF; }
return 0;
    }
    X_241: for (;;) { IF: if (gt <= 241) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_showPermissionMenu']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_showPermissionMenu']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 266; break IF; }
return 0;
    }
    X_266: for (;;) { IF: if (gt <= 266) {

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
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_itemId'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_itemName'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_itemType'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_hasOwnerPermission']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_hasAdminPermission']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_hasWritePermission']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_hasReadPermission']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_selectedPermission'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_selectedPermissionColor'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_isRemovable']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_showPermissionMenu']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
return lcI1;

};
c['hashCode__I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Ljava_lang_Object_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0.clone__Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lio_cloudoffice_platform_cockpit_shareitem_ListItemView$Html4JavaType_2 = function() {
return c._TYPE();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2 = function(lcA0) {
return lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_shareitem_ListItemView$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_shareitem_ListItemView$Html4JavaType;
(refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView$Html4JavaType || (refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView$Html4JavaType = io_cloudoffice_platform_cockpit_shareitem_ListItemView$Html4JavaType(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_shareitem_ListItemView$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_shareitem_ListItemViewfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_shareitem_ListItemView', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_shareitem_ListItemViewfillInstOf });
    io_cloudoffice_platform_cockpit_shareitem_ListItemViewfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/shareitem/ListItemView';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ListItemViewModel;
    var refs_java_lang_Boolean;
    var refs_net_java_html_BrwsrCtx;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_proto'] = null;
    this['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_itemId'] = null;
    this['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_itemName'] = null;
    this['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_itemType'] = null;
    this['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_hasOwnerPermission'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_hasAdminPermission'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_hasWritePermission'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_hasReadPermission'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_selectedPermission'] = null;
    this['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_selectedPermissionColor'] = null;
    this['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_isRemovable'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_shareitem_ListItemView_prop_showPermissionMenu'] = 0;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_shareitem_ListItemView = registerClass(exports,'io_cloudoffice_platform_cockpit_shareitem_ListItemView',io_cloudoffice_platform_cockpit_shareitem_ListItemView);

vm.java_lang_Cloneable = link('java/lang/Cloneable', function(f) { vm.java_lang_Cloneable =  f; });
vm.net_java_html_BrwsrCtx = link('net/java/html/BrwsrCtx', function(f) { vm.net_java_html_BrwsrCtx =  f; });

function io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$view = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$1_val$view'] = v; return this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$1_val$view']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$1_val$view'] = lcA1;
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2']("Save Callback");
(refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent(false))).resetConfiguration__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$1_val$view']);
(refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent(false))).closeConfigurationPanel__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$1_val$view']);
return;

};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$1', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$1fillInstOf });
    io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/shareitem/ShareItemComponent$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_Logger;
    var refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$1_val$view'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$1 = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$1;

vm.io_cloudoffice_platform_cockpit_api_CallBack = link('io/cloudoffice/platform/cockpit/api/CallBack', function(f) { vm.io_cloudoffice_platform_cockpit_api_CallBack =  f; });

function io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_api_AbstractComponent(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = c.getInstance__Lio_cloudoffice_platform_cockpit_api_Component_2Ljava_lang_String_2 = function(lcA0) {
var stA0 = new io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent;
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
c['_componentName'].call(lcA0, "shareitem-component");
return;

};
c['setComponentName__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.bindViewNames__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getName__Ljava_lang_String_2((refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView = io_cloudoffice_platform_cockpit_shareitem_ShareItemView(false))).constructor.$class);
invoker.setDefaultViewName__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA0;var stA1 = invoker.getName__Ljava_lang_String_2((refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView = io_cloudoffice_platform_cockpit_shareitem_ShareItemView(false))).constructor.$class);
invoker.setDefaultConfigViewName__VLjava_lang_String_2(stA0,stA1);
return;

};
c['bindViewNames__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.bindEventListeners__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = "loginsuccess";var stA2 = new io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$LoginEventListener;
(refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$LoginEventListener || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$LoginEventListener = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$LoginEventListener(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemComponent_2.call(stA2, lcA0);
invoker.attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2(stA0,stA1, stA2);
var stA0 = lcA0;var stA1 = "designermode";var stA2 = new io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$DesignModeListener;
(refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$DesignModeListener || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$DesignModeListener = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$DesignModeListener(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemComponent_2.call(stA2, lcA0);
invoker.attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2(stA0,stA1, stA2);
var stA0 = lcA0;var stA1 = "toogleitemaction";var stA2 = new io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ToogleShareItemListener;
(refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ToogleShareItemListener || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ToogleShareItemListener = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ToogleShareItemListener(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemComponent_2.call(stA2, lcA0);
invoker.attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2(stA0,stA1, stA2);
var stA0 = lcA0;var stA1 = "invokefunction";var stA2 = new io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$FunctionInvokeListener;
(refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$FunctionInvokeListener || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$FunctionInvokeListener = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$FunctionInvokeListener(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemComponent_2Lio_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$1_2.call(stA2, lcA0, null);
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
    m = c.openConfig__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2 = function(lcA0) {
lcA0.setDesignerMode__VZ(1);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.closeConfigurationPanel__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2 = function(lcA0) {
lcA0.setDesignerMode__VZ(0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.save__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2 = function(lcA0) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = "shareitem";var stA2 = lcA0.getInstance__Ljava_lang_String_2();
var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['configPostEndpoint__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'](stA1, stA2, "");
var stA2 = lcA0.toString__Ljava_lang_String_2();
var stA3 = new io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$1;
(refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$1 || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$1 = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$1(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2.call(stA3, lcA0);
invoker.post__VLjava_lang_String_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.resetConfiguration__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2 = function(lcA0) {
c.resetConfigurationModelFromJSON__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2(lcA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.resetConfigurationModelFromJSON__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2 = function(lcA0) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = "shareitem";var stA2 = lcA0.getInstance__Ljava_lang_String_2();
var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['configFetchEndpoint__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'](stA1, stA2);
var stA2 = null;var stA3 = new io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$2;
(refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$2 || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$2 = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$2(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2.call(stA3, lcA0);
invoker.fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.prepareConfigurationModelFromJSON__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA1.getConfiguration__Lio_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_2();
var lcA3 = stA0;
var stA0 = invoker.getJsonObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA2,"configuration");
var lcA4 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_Object_2'](lcA4);
if ((stI0) == 0) { gt = 26; break IF; }
c.setComponentDefinition__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2(lcA1, lcA2);
    }
    X_26: for (;;) { IF: if (gt <= 26) {
return;

    }
}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.setComponentDefinition__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2 = function(lcA0, lcA1) {
var stA0 = lcA0.getConfiguration__Lio_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_2();
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
    m = c.clearFilter__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2 = function(lcA0) {
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
    m = c.toogleShareItem__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

c.defaultInitialData__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2(lcA0);
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
c['toogleShareItem__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.closeShareItem__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2 = function(lcA0) {
lcA0.setVisible__VZ(0);
return;

};
c['closeShareItem__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.processShareItem__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2Ljava_lang_String_2 = function(lcA0, lcA1) {
var stA0 = lcA0.getShareItemList__Ljava_util_List_2();
invoker.clear__V(stA0);
c.toogleShareItem__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2(lcA0);
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
var stA0 = lcA0;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"maximumPermission");
stA0.setMaximumPermission__VLjava_lang_String_2(stA1);
c.processShareItemList__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2(lcA0);
return;

};
c['processShareItem__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.processShareItemList__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2 = function(lcA0) {
var stA0 = lcA0.getSelectedItemId__Ljava_lang_String_2();
var lcA1 = stA0;
var stA0 = lcA0.getSelectedItemType__Ljava_lang_String_2();
var lcA2 = stA0;
var stA0 = new io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$4;
(refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$4 || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$4 = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$4(false))).constructor.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2Ljava_lang_String_2Ljava_lang_String_2.call(stA0, "\"/VirtualItem-portlet.searchitem/getShareList\"", lcA0, lcA1, lcA2);
var stA1 = new io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$3;
(refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$3 || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$3 = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$3(false))).constructor.cons__V.call(stA1);
invoker.call__VLio_cloudoffice_platform_cockpit_api_ServerCallback_2(stA0,stA1);
return;

};
c['processShareItemList__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.itemSearchAutocomplete__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0.getInputBoxText__Ljava_lang_String_2();
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA0);
if ((stI0) == 0) { gt = 30; break IF; }
var stA0 = lcA0.getItemListLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
invoker.setActive__VZ(stA0,1);
lcA0.setShowItemList__VZ(1);
c.getItemList__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2(lcA0);
{ gt = 44; break IF; }
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0.setShowItemList__VZ(0);
var stA0 = lcA0.getItemList__Ljava_util_List_2();
invoker.clear__V(stA0);
    }
    X_44: for (;;) { IF: if (gt <= 44) {
return;

    }
}}}
};
c['itemSearchAutocomplete__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getItemList__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2 = function(lcA0) {
var stA0 = lcA0.getInputBoxText__Ljava_lang_String_2();
var lcA1 = stA0;
var stA0 = lcA0.getShareItemList__Ljava_util_List_2();
var lcA2 = stA0;
var stA0 = new io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$6;
(refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$6 || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$6 = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$6(false))).constructor.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2Ljava_util_List_2Ljava_lang_String_2.call(stA0, "\"/VirtualItem-portlet.searchitem/autoCompleteSearch\"", lcA0, lcA2, lcA1);
var stA1 = new io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$5;
(refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$5 || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$5 = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$5(false))).constructor.cons__V.call(stA1);
invoker.call__VLio_cloudoffice_platform_cockpit_api_ServerCallback_2(stA0,stA1);
return;

};
c['getItemList__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.selectItem__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2 = function(lcA0, lcA1) {
lcA0.setInputBoxText__VLjava_lang_String_2("");
var stA0 = lcA0.getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
invoker.setActive__VZ(stA0,1);
lcA1.setHasReadPermission__VZ(1);
lcA1.setHasWritePermission__VZ(0);
lcA1.setHasAdminPermission__VZ(0);
lcA1.setHasOwnerPermission__VZ(0);
c.shareSingleItem__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2(lcA0, lcA1);
return;

};
c['selectItem__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.shareSingleItem__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2 = function(lcA0, lcA1) {
var stA0 = lcA0.getSelectedItemId__Ljava_lang_String_2();
var lcA2 = stA0;
var stA0 = lcA0.getSelectedItemType__Ljava_lang_String_2();
var lcA3 = stA0;
var lcA4 = lcA1;
var stA0 = new io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$8;
(refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$8 || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$8 = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$8(false))).constructor.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2Ljava_lang_String_2Ljava_lang_String_2.call(stA0, "\"/VirtualItem-portlet.searchitem/singleShareItem\"", lcA0, lcA4, lcA1, lcA2, lcA3);
var stA1 = new io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$7;
(refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$7 || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$7 = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$7(false))).constructor.cons__V.call(stA1);
invoker.call__VLio_cloudoffice_platform_cockpit_api_ServerCallback_2(stA0,stA1);
return;

};
c['shareSingleItem__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.removeShareItemFromList__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2 = function(lcA0, lcA1) {
var stA0 = lcA0.getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
invoker.setActive__VZ(stA0,1);
c.removeShareItem__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2(lcA0, lcA1);
return;

};
c['removeShareItemFromList__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.removeShareItem__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2 = function(lcA0, lcA1) {
var stA0 = lcA0.getSelectedItemId__Ljava_lang_String_2();
var lcA2 = stA0;
var stA0 = lcA0.getSelectedItemType__Ljava_lang_String_2();
var lcA3 = stA0;
var lcA4 = lcA1;
var stA0 = new io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$10;
(refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$10 || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$10 = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$10(false))).constructor.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2Ljava_lang_String_2Ljava_lang_String_2.call(stA0, "\"/VirtualItem-portlet.searchitem/removeShareItem\"", lcA0, lcA4, lcA2, lcA3);
var stA1 = new io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$9;
(refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$9 || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$9 = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$9(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_shareitem_ListItemView_2.call(stA1, lcA4);
invoker.call__VLio_cloudoffice_platform_cockpit_api_ServerCallback_2(stA0,stA1);
return;

};
c['removeShareItem__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.showPermissionMenu__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2 = function(lcA0, lcA1) {
lcA1.setShowPermissionMenu__VZ(1);
lcA0.setTempItemToShare__VLio_cloudoffice_platform_cockpit_shareitem_ListItemView_2(lcA1);
return;

};
c['showPermissionMenu__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.closePermissionMenu__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2 = function(lcA0, lcA1) {
lcA1.setShowPermissionMenu__VZ(0);
return;

};
c['closePermissionMenu__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.changePermission__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2Ljava_lang_String_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

lcA0.setInputBoxText__VLjava_lang_String_2("");
var stA0 = lcA0.getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
invoker.setActive__VZ(stA0,1);
var stA0 = lcA0.getTempItemToShare__Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2();
stA0.setHasReadPermission__VZ(1);
var stA0 = lcA0.getTempItemToShare__Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2();
stA0.setHasOwnerPermission__VZ(0);
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA1,"Read");
if ((stI0) == 0) { gt = 59; break IF; }
var stA0 = lcA0.getTempItemToShare__Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2();
stA0.setHasWritePermission__VZ(0);
var stA0 = lcA0.getTempItemToShare__Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2();
stA0.setHasAdminPermission__VZ(0);
{ gt = 114; break IF; }
    }
    X_59: for (;;) { IF: if (gt <= 59) {

var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA1,"Write");
if ((stI0) == 0) { gt = 88; break IF; }
var stA0 = lcA0.getTempItemToShare__Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2();
stA0.setHasWritePermission__VZ(1);
var stA0 = lcA0.getTempItemToShare__Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2();
stA0.setHasAdminPermission__VZ(0);
{ gt = 114; break IF; }
    }
    X_88: for (;;) { IF: if (gt <= 88) {

var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA1,"Admin");
if ((stI0) == 0) { gt = 114; break IF; }
var stA0 = lcA0.getTempItemToShare__Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2();
stA0.setHasWritePermission__VZ(1);
var stA0 = lcA0.getTempItemToShare__Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2();
stA0.setHasAdminPermission__VZ(1);
    }
    X_114: for (;;) { IF: if (gt <= 114) {

var stA0 = lcA0;var stA1 = lcA0.getTempItemToShare__Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2();
c.shareSingleItem__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2(stA0, stA1);
return;

    }
}}}}
};
c['changePermission__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.defaultInitialData__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2 = function(lcA0) {
var stA0 = lcA0.getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
invoker.setActive__VZ(stA0,0);
lcA0.setShowItemList__VZ(0);
var stA0 = lcA0.getItemListLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
invoker.setActive__VZ(stA0,0);
var stA0 = lcA0.getItemList__Ljava_util_List_2();
invoker.clear__V(stA0);
var stA0 = lcA0.getShareItemList__Ljava_util_List_2();
invoker.clear__V(stA0);
lcA0.setInputBoxText__VLjava_lang_String_2("");
return;

};
c['defaultInitialData__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.access$100__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2 = function(lcA0, lcA1) {
c.setComponentDefinition__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2(lcA0, lcA1);
return;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemComponent_2Lio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2 = function(lcA0, lcA1, lcA2) {
c.prepareConfigurationModelFromJSON__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4104;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_shareitem_ShareItemComponentfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_shareitem_ShareItemComponentfillInstOf });
    io_cloudoffice_platform_cockpit_shareitem_ShareItemComponentfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/shareitem/ShareItemComponent';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_AbstractComponent;
    var refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView;
    var refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$LoginEventListener;
    var refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$DesignModeListener;
    var refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ToogleShareItemListener;
    var refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$FunctionInvokeListener;
    var refs_java_lang_UnsupportedOperationException;
    var refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration;
    var refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$1;
    var refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$2;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_io_cloudoffice_platform_cockpit_api_Event;
    var refs_io_cloudoffice_platform_cockpit_api_Components;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$4;
    var refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$3;
    var refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$6;
    var refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$5;
    var refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$8;
    var refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$7;
    var refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$10;
    var refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$9;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent = registerClass(exports,'io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent',io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent);


function io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$9() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$9;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_api_ServerCallback(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$itemToRemove = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$9_val$itemToRemove'] = v; return this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$9_val$itemToRemove']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_shareitem_ListItemView_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$9_val$itemToRemove'] = lcA1;
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
if ((stI0) == 0) { gt = 52; break IF; }
var stA0 = invoker.getRequest__Lio_cloudoffice_platform_cockpit_api_AsyncRequest_2(lcA0);
var stA0 = invoker.getView__Ljava_lang_Object_2(stA0);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_shareitem_ShareItemView']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.shareitem.ShareItemView');
var lcA2 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2'](lcA1);
var lcA3 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_Object_2'](lcA3);
if ((stI0) == 0) { gt = 52; break IF; }
var stA0 = lcA2.getShareItemList__Ljava_util_List_2();
var stI0 = invoker.remove__ZLjava_lang_Object_2(stA0,lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$9_val$itemToRemove']);
var stA0 = lcA2.getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
invoker.setActive__VZ(stA0,0);
    }
    X_52: for (;;) { IF: if (gt <= 52) {
return;

    }
}}
};
c['process__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$9fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$9', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$9fillInstOf });
    io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$9fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/shareitem/ShareItemComponent$9';
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
    this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$9_val$itemToRemove'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$9 = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$9;

vm.io_cloudoffice_platform_cockpit_api_ServerCallback = link('io/cloudoffice/platform/cockpit/api/ServerCallback', function(f) { vm.io_cloudoffice_platform_cockpit_api_ServerCallback =  f; });

function io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$10() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$10;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_api_AsyncRequest(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$itemToRemove = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$10_val$itemToRemove'] = v; return this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$10_val$itemToRemove']; };
  m = c._val$selectedItemId = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$10_val$selectedItemId'] = v; return this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$10_val$selectedItemId']; };
  m = c._val$selectedItemType = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$10_val$selectedItemType'] = v; return this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$10_val$selectedItemType']; };
    m = CLS.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2Ljava_lang_String_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3, lcA4, lcA5) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$10_val$itemToRemove'] = lcA3;
lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$10_val$selectedItemId'] = lcA4;
lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$10_val$selectedItemType'] = lcA5;
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
var stA0 = lcA2;var stA1 = "id";var stA2 = lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$10_val$itemToRemove'].getItemId__Ljava_lang_String_2();
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA2;var stA1 = "name";var stA2 = lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$10_val$itemToRemove'].getItemName__Ljava_lang_String_2();
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA2;var stA1 = "type";var stA2 = lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$10_val$itemToRemove'].getItemType__Ljava_lang_String_2();
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA2;var stA1 = "hasReadPermission";var stI2 = lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$10_val$itemToRemove'].isHasReadPermission__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA2;var stA1 = "hasWritePermission";var stI2 = lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$10_val$itemToRemove'].isHasWritePermission__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA2;var stA1 = "hasAdminPermission";var stI2 = lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$10_val$itemToRemove'].isHasAdminPermission__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA2;var stA1 = "hasOwnerPermission";var stI2 = lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$10_val$itemToRemove'].isHasOwnerPermission__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA2;var stA1 = "removeAble";var stI2 = lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$10_val$itemToRemove'].isIsRemovable__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA1,"selectedItemId", lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$10_val$selectedItemId']);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA1,"selectedItemType", lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$10_val$selectedItemType']);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA1,"shareItem", lcA2);
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
    function io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$10fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$10', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$10fillInstOf });
    io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$10fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/shareitem/ShareItemComponent$10';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_AsyncRequest;
    var refs_java_util_HashMap;
    var refs_java_lang_Boolean;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$10_val$itemToRemove'] = null;
    this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$10_val$selectedItemId'] = null;
    this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$10_val$selectedItemType'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$10 = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$10;

vm.java_util_HashMap = link('java/util/HashMap', function(f) { vm.java_util_HashMap =  f; });
vm.io_cloudoffice_platform_cockpit_api_AsyncRequest = link('io/cloudoffice/platform/cockpit/api/AsyncRequest', function(f) { vm.io_cloudoffice_platform_cockpit_api_AsyncRequest =  f; });

function io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$7() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$7;
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
if ((stI0) == 0) { gt = 194; break IF; }
var stA0 = invoker.getRequest__Lio_cloudoffice_platform_cockpit_api_AsyncRequest_2(lcA0);
var stA0 = invoker.getView__Ljava_lang_Object_2(stA0);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_shareitem_ShareItemView']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.shareitem.ShareItemView');
var lcA2 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2'](lcA1);
var lcA3 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_Object_2'](lcA3);
if ((stI0) == 0) { gt = 194; break IF; }
var stA0 = lcA2.getTempItemToShare__Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2();
var stA0 = stA0.getItemId__Ljava_lang_String_2();
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA0);
if ((stI0) == 0) { gt = 57; break IF; }
var stA0 = lcA2.getShareItemList__Ljava_util_List_2();
var stA1 = lcA2.getTempItemToShare__Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2();
var stI0 = invoker.remove__ZLjava_lang_Object_2(stA0,stA1);
    }
    X_57: for (;;) { IF: if (gt <= 57) {
var stA0 = new io_cloudoffice_platform_cockpit_shareitem_ListItemView;
(refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView || (refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView = io_cloudoffice_platform_cockpit_shareitem_ListItemView(false))).constructor.cons__V.call(stA0);
var lcA4 = stA0;
var stA0 = lcA4;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA3,"id");
stA0.setItemId__VLjava_lang_String_2(stA1);
var stA0 = lcA4;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA3,"name");
stA0.setItemName__VLjava_lang_String_2(stA1);
var stA0 = lcA4;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA3,"type");
stA0.setItemType__VLjava_lang_String_2(stA1);
var stA0 = lcA4;var stI1 = invoker.getBoolean__ZLjava_lang_String_2(lcA3,"hasReadPermission");
stA0.setHasReadPermission__VZ(stI1);
var stA0 = lcA4;var stI1 = invoker.getBoolean__ZLjava_lang_String_2(lcA3,"hasWritePermission");
stA0.setHasWritePermission__VZ(stI1);
var stA0 = lcA4;var stI1 = invoker.getBoolean__ZLjava_lang_String_2(lcA3,"hasAdminPermission");
stA0.setHasAdminPermission__VZ(stI1);
var stA0 = lcA4;var stI1 = invoker.getBoolean__ZLjava_lang_String_2(lcA3,"hasOwnerPermission");
stA0.setHasOwnerPermission__VZ(stI1);
var stA0 = lcA4;var stI1 = invoker.getBoolean__ZLjava_lang_String_2(lcA3,"removeAble");
stA0.setIsRemovable__VZ(stI1);
var stA0 = lcA4;var stA1 = (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ListItemViewModel || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ListItemViewModel = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ListItemViewModel(false))).getMaximumPermission__Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2(lcA4);
stA0.setSelectedPermission__VLjava_lang_String_2(stA1);
var stA0 = lcA4;var stA1 = (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ListItemViewModel || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ListItemViewModel = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ListItemViewModel(false))).getMaximumPermissionColor__Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2(lcA4);
stA0.setSelectedPermissionColor__VLjava_lang_String_2(stA1);
var stA0 = lcA2.getShareItemList__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA4);
var stA0 = lcA2.getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
invoker.setActive__VZ(stA0,0);
    }
    X_194: for (;;) { IF: if (gt <= 194) {
return;

    }
}}}
};
c['process__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$7fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$7', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$7fillInstOf });
    io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$7fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/shareitem/ShareItemComponent$7';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_ServerCallback;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView;
    var refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ListItemViewModel;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$7 = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$7;


function io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$8() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$8;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_api_AsyncRequest(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$itemToShare = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$8_val$itemToShare'] = v; return this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$8_val$itemToShare']; };
  m = c._val$data = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$8_val$data'] = v; return this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$8_val$data']; };
  m = c._val$selectedItemId = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$8_val$selectedItemId'] = v; return this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$8_val$selectedItemId']; };
  m = c._val$selectedItemType = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$8_val$selectedItemType'] = v; return this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$8_val$selectedItemType']; };
    m = CLS.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2Ljava_lang_String_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3, lcA4, lcA5, lcA6) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$8_val$itemToShare'] = lcA3;
lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$8_val$data'] = lcA4;
lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$8_val$selectedItemId'] = lcA5;
lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$8_val$selectedItemType'] = lcA6;
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
var stA0 = lcA2;var stA1 = "id";var stA2 = lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$8_val$itemToShare'].getItemId__Ljava_lang_String_2();
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA2;var stA1 = "name";var stA2 = lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$8_val$itemToShare'].getItemName__Ljava_lang_String_2();
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA2;var stA1 = "type";var stA2 = lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$8_val$itemToShare'].getItemType__Ljava_lang_String_2();
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA2;var stA1 = "hasReadPermission";var stI2 = lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$8_val$data'].isHasReadPermission__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA2;var stA1 = "hasWritePermission";var stI2 = lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$8_val$data'].isHasWritePermission__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA2;var stA1 = "hasAdminPermission";var stI2 = lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$8_val$data'].isHasAdminPermission__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA2;var stA1 = "hasOwnerPermission";var stI2 = lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$8_val$data'].isHasOwnerPermission__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA2;var stA1 = "removeAble";var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](1);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA1,"selectedItemId", lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$8_val$selectedItemId']);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA1,"selectedItemType", lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$8_val$selectedItemType']);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA1,"shareItem", lcA2);
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
    function io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$8fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$8', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$8fillInstOf });
    io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$8fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/shareitem/ShareItemComponent$8';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_AsyncRequest;
    var refs_java_util_HashMap;
    var refs_java_lang_Boolean;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$8_val$itemToShare'] = null;
    this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$8_val$data'] = null;
    this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$8_val$selectedItemId'] = null;
    this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$8_val$selectedItemType'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$8 = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$8;


function io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$5() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$5;
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
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_shareitem_ShareItemView']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.shareitem.ShareItemView');
var lcA2 = stA0;
var stA0 = lcA2.getItemList__Ljava_util_List_2();
invoker.clear__V(stA0);
var stA0 = lcA2.getItemListLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
invoker.setActive__VZ(stA0,0);
if ((null) === (lcA1)) { gt = 227; break IF; }
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Z'](lcA1, 1);
var stA0 = invoker.getArray__Ljava_util_List_2(stA0);
var lcA3 = stA0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA3);
var lcA4 = stA0;
    }
    X_50: for (;;) { IF: if (gt <= 50) {

var stI0 = invoker.hasNext__Z(lcA4);
if ((stI0) == 0) { gt = 227; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA4);
if (stA0 !== null && !stA0['$instOf_java_util_Map']) vm.java_lang_Class(false).castEx(stA0, 'java.util.Map');
var lcA5 = stA0;
var stA0 = new io_cloudoffice_platform_cockpit_shareitem_ListItemView;
(refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView || (refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView = io_cloudoffice_platform_cockpit_shareitem_ListItemView(false))).constructor.cons__V.call(stA0);
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
var stA0 = lcA6;var stA1 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA5,"hasReadPermission");
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setHasReadPermission__VZ(stI1);
var stA0 = lcA6;var stA1 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA5,"hasWritePermission");
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setHasWritePermission__VZ(stI1);
var stA0 = lcA6;var stA1 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA5,"hasAdminPermission");
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setHasAdminPermission__VZ(stI1);
var stA0 = lcA6;var stA1 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA5,"hasOwnerPermission");
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setHasOwnerPermission__VZ(stI1);
var stA0 = lcA2.getItemList__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA6);
{ gt = 0; continue X_50; }
    }
    X_227: for (;;) { IF: if (gt <= 227) {
return;

    }
}}}
};
c['process__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$5fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$5', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$5fillInstOf });
    io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$5fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/shareitem/ShareItemComponent$5';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_ServerCallback;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$5 = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$5;


function io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$6() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$6;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_api_AsyncRequest(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$shareItems = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$6_val$shareItems'] = v; return this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$6_val$shareItems']; };
  m = c._val$searchKey = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$6_val$searchKey'] = v; return this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$6_val$searchKey']; };
    m = CLS.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2Ljava_util_List_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3, lcA4) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$6_val$shareItems'] = lcA3;
lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$6_val$searchKey'] = lcA4;
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
var stA0 = new vm.java_util_HashMap;
(refs_java_util_HashMap || (refs_java_util_HashMap = vm.java_util_HashMap(false))).constructor['cons__V'].call(stA0);
var lcA3 = stA0;
var stA0 = new vm.java_util_ArrayList;
(refs_java_util_ArrayList || (refs_java_util_ArrayList = vm.java_util_ArrayList(false))).constructor['cons__V'].call(stA0);
var lcA4 = stA0;
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA4,"PERSON");
var stA0 = lcA3;var stA1 = "scopeGroup";var stA2 = (refs_io_cloudoffice_platform_cockpit_api_Session || (refs_io_cloudoffice_platform_cockpit_api_Session = vm.io_cloudoffice_platform_cockpit_api_Session(false)))['getCompany__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(stA2,"itemId");
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA3,"onlyUser", "onlyUser");
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$6_val$shareItems']);
var lcA5 = stA0;
    }
    X_82: for (;;) { IF: if (gt <= 82) {

var stI0 = invoker.hasNext__Z(lcA5);
if ((stI0) == 0) { gt = 152; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA5);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_shareitem_ListItemView']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.shareitem.ListItemView');
var lcA6 = stA0;
var stA0 = new vm.java_util_HashMap;
(refs_java_util_HashMap || (refs_java_util_HashMap = vm.java_util_HashMap(false))).constructor['cons__V'].call(stA0);
var lcA7 = stA0;
var stA0 = lcA7;var stA1 = "itemId";var stA2 = lcA6.getItemId__Ljava_lang_String_2();
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA7,"itemType", "PERSON");
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA2,lcA7);
{ gt = 0; continue X_82; }
    }
    X_152: for (;;) { IF: if (gt <= 152) {

var stA0 = lcA1;var stA1 = "searchKey";var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"'");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$6_val$searchKey']);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"'");
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA1,"fromClause", lcA4);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA1,"attributes", lcA3);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA1,"existingItems", lcA2);
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
    function io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$6fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$6', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$6fillInstOf });
    io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$6fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/shareitem/ShareItemComponent$6';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_AsyncRequest;
    var refs_java_util_HashMap;
    var refs_java_util_ArrayList;
    var refs_io_cloudoffice_platform_cockpit_api_Session;
    var refs_java_lang_StringBuilder;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$6_val$shareItems'] = null;
    this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$6_val$searchKey'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$6 = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$6;

vm.io_cloudoffice_platform_cockpit_api_Session = link('io/cloudoffice/platform/cockpit/api/Session', function(f) { vm.io_cloudoffice_platform_cockpit_api_Session =  f; });
vm.java_util_ArrayList = link('java/util/ArrayList', function(f) { vm.java_util_ArrayList =  f; });

function io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$3() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$3;
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

if ((null) === (lcA1)) { gt = 315; break IF; }
var stA0 = invoker.getRequest__Lio_cloudoffice_platform_cockpit_api_AsyncRequest_2(lcA0);
var stA0 = invoker.getView__Ljava_lang_Object_2(stA0);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_shareitem_ShareItemView']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.shareitem.ShareItemView');
var lcA2 = stA0;
var stA0 = lcA2.getShareItemList__Ljava_util_List_2();
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
if ((stI0) == 0) { gt = 315; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA4);
if (stA0 !== null && !stA0['$instOf_java_util_Map']) vm.java_lang_Class(false).castEx(stA0, 'java.util.Map');
var lcA5 = stA0;
var stA0 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA5,"id");
if (stA0 !== null && !stA0['$instOf_java_lang_Integer']) vm.java_lang_Class(false).castEx(stA0, 'java.lang.Integer');
var stI0 = invoker.intValue__I(stA0);
var lcI6 = stI0;
if ((lcI6) == (-1)) { gt = 312; break IF; }
var stA0 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA5,"type");
if (stA0 !== null && !stA0['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA0, 'java.lang.String');
var lcA7 = stA0;
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA7,"PERSON");
if ((stI0) != 0) { gt = 129; break IF; }
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA7,"OWNER");
if ((stI0) == 0) { gt = 312; break IF; }
    }
    X_129: for (;;) { IF: if (gt <= 129) {
var stA0 = new io_cloudoffice_platform_cockpit_shareitem_ListItemView;
(refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView || (refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView = io_cloudoffice_platform_cockpit_shareitem_ListItemView(false))).constructor.cons__V.call(stA0);
var lcA8 = stA0;
var stA0 = lcA8;var stA1 = (refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false)))['valueOf__Ljava_lang_String_2I'](lcI6);
stA0.setItemId__VLjava_lang_String_2(stA1);
var stA0 = lcA8;var stA1 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA5,"name");
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemName__VLjava_lang_String_2(stA1);
lcA8.setItemType__VLjava_lang_String_2(lcA7);
lcA8.setIsRemovable__VZ(1);
var stA0 = lcA8;var stA1 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA5,"hasReadPermission");
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setHasReadPermission__VZ(stI1);
var stA0 = lcA8;var stA1 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA5,"hasWritePermission");
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setHasWritePermission__VZ(stI1);
var stA0 = lcA8;var stA1 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA5,"hasAdminPermission");
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setHasAdminPermission__VZ(stI1);
var stA0 = lcA8;var stA1 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA5,"hasOwnerPermission");
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setHasOwnerPermission__VZ(stI1);
var stA0 = lcA8;var stA1 = (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ListItemViewModel || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ListItemViewModel = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ListItemViewModel(false))).getMaximumPermission__Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2(lcA8);
stA0.setSelectedPermission__VLjava_lang_String_2(stA1);
var stA0 = lcA8;var stA1 = (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ListItemViewModel || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ListItemViewModel = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ListItemViewModel(false))).getMaximumPermissionColor__Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2(lcA8);
stA0.setSelectedPermissionColor__VLjava_lang_String_2(stA1);
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA7,"OWNER");
if ((stI0) == 0) { gt = 294; break IF; }
lcA8.setIsRemovable__VZ(0);
    }
    X_294: for (;;) { IF: if (gt <= 294) {

lcA8.setShowPermissionMenu__VZ(0);
var stA0 = lcA2.getShareItemList__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA8);
    }
    X_312: for (;;) { IF: if (gt <= 312) {
{ gt = 0; continue X_50; }
    }
    X_315: for (;;) { IF: if (gt <= 315) {
return;

    }
}}}}}}
};
c['process__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$3fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$3', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$3fillInstOf });
    io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$3fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/shareitem/ShareItemComponent$3';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_ServerCallback;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView;
    var refs_java_lang_String;
    var refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ListItemViewModel;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$3 = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$3;


function io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$4() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$4;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_api_AsyncRequest(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$itemId = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$4_val$itemId'] = v; return this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$4_val$itemId']; };
  m = c._val$itemType = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$4_val$itemType'] = v; return this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$4_val$itemType']; };
    m = CLS.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2Ljava_lang_String_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3, lcA4) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$4_val$itemId'] = lcA3;
lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$4_val$itemType'] = lcA4;
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
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA1,"selectedItemId", lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$4_val$itemId']);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA1,"selectedItemType", lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$4_val$itemType']);
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
    function io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$4fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$4', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$4fillInstOf });
    io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$4fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/shareitem/ShareItemComponent$4';
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
    this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$4_val$itemId'] = null;
    this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$4_val$itemType'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$4 = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$4;

vm.io_cloudoffice_platform_cockpit_api_MapBuilder = link('io/cloudoffice/platform/cockpit/api/MapBuilder', function(f) { vm.io_cloudoffice_platform_cockpit_api_MapBuilder =  f; });
vm.io_cloudoffice_platform_cockpit_api_Components = link('io/cloudoffice/platform/cockpit/api/Components', function(f) { vm.io_cloudoffice_platform_cockpit_api_Components =  f; });
vm.io_cloudoffice_platform_cockpit_api_Event = link('io/cloudoffice/platform/cockpit/api/Event', function(f) { vm.io_cloudoffice_platform_cockpit_api_Event =  f; });
vm.io_cloudoffice_platform_cockpit_api_UtilValidate = link('io/cloudoffice/platform/cockpit/api/UtilValidate', function(f) { vm.io_cloudoffice_platform_cockpit_api_UtilValidate =  f; });

function io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$2() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$2;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$view = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$2_val$view'] = v; return this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$2_val$view']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$2_val$view'] = lcA1;
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
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$2_val$view'].getConfiguration__Lio_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_2();
var lcA3 = stA0;
var stA0 = invoker.getJsonObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA2,"configuration");
var lcA4 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_Object_2'](lcA4);
if ((stI0) == 0) { gt = 37; break IF; }
(refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent(false))).access$100__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$2_val$view'], lcA2);
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
    function io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$2fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$2', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$2fillInstOf });
    io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$2fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/shareitem/ShareItemComponent$2';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$2_val$view'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$2 = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$2;

vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration = link('io/cloudoffice/platform/cockpit/api/ComponentConfiguration', function(f) { vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration =  f; });

function io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$FunctionInvokeListener() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$FunctionInvokeListener;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$FunctionInvokeListener_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$FunctionInvokeListener_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$FunctionInvokeListener_this$0'] = lcA1;
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
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$FunctionInvokeListener_this$0'];var stA1 = (refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false)))['valueOf__Ljava_lang_String_2Ljava_lang_Object_2'](lcA2);
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
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemComponent_2Lio_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$1_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
c.constructor.cons__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemComponent_2.call(lcA0, lcA1);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$FunctionInvokeListenerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$FunctionInvokeListener', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$FunctionInvokeListenerfillInstOf });
    io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$FunctionInvokeListenerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/shareitem/ShareItemComponent$FunctionInvokeListener';
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
    this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$FunctionInvokeListener_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$FunctionInvokeListener = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$FunctionInvokeListener;

vm.io_cloudoffice_platform_cockpit_api_EventListener = link('io/cloudoffice/platform/cockpit/api/EventListener', function(f) { vm.io_cloudoffice_platform_cockpit_api_EventListener =  f; });

function io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ToogleShareItemListener() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ToogleShareItemListener;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ToogleShareItemListener_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ToogleShareItemListener_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ToogleShareItemListener_this$0'] = lcA1;
return;

};
CLS['cons__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemComponent_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onReceive__VLio_cloudoffice_platform_cockpit_api_Signal_2 = function(lcA1) {
  var  lcA0 = this;
lcA0.toogleShareItem__VLio_cloudoffice_platform_cockpit_api_Signal_2(lcA1);
return;

};
c['onReceive__VLio_cloudoffice_platform_cockpit_api_Signal_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.toogleShareItem__VLio_cloudoffice_platform_cockpit_api_Signal_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getPackets__Ljava_util_List_2(lcA1);
var stA0 = invoker.get__Ljava_lang_Object_2I(stA0,0);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_api_MapBuilder']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.api.MapBuilder');
var lcA2 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_Object_2'](lcA2);
if ((stI0) == 0) { gt = 33; break IF; }
invoker.invoke__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ToogleShareItemListener_this$0'],"processShareItem", lcA2);
    }
    X_33: for (;;) { IF: if (gt <= 33) {
return;

    }
}}
};
    m.access = 0;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ToogleShareItemListenerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ToogleShareItemListener', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ToogleShareItemListenerfillInstOf });
    io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ToogleShareItemListenerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/shareitem/ShareItemComponent$ToogleShareItemListener';
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
    this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ToogleShareItemListener_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ToogleShareItemListener = registerClass(exports,'io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ToogleShareItemListener',io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ToogleShareItemListener);


function io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$DesignModeListener() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$DesignModeListener;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$DesignModeListener_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$DesignModeListener_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$DesignModeListener_this$0'] = lcA1;
return;

};
CLS['cons__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemComponent_2'] = m;

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
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$DesignModeListener_this$0'];var stA1 = (refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false)))['valueOf__Ljava_lang_String_2Ljava_lang_Object_2'](lcA2);
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
    function io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$DesignModeListenerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$DesignModeListener', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$DesignModeListenerfillInstOf });
    io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$DesignModeListenerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/shareitem/ShareItemComponent$DesignModeListener';
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
    this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$DesignModeListener_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$DesignModeListener = registerClass(exports,'io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$DesignModeListener',io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$DesignModeListener);


function io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$LoginEventListener() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$LoginEventListener;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$LoginEventListener_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$LoginEventListener_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$LoginEventListener_this$0'] = lcA1;
return;

};
CLS['cons__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemComponent_2'] = m;

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
Array.at(stA0, 0, "shareitem");
(refs_io_cloudoffice_platform_cockpit_js_VIEW || (refs_io_cloudoffice_platform_cockpit_js_VIEW = vm.io_cloudoffice_platform_cockpit_js_VIEW(false)))['render__V_3Ljava_lang_String_2'](stA0);
var stA0 = invoker.getInstanceId__Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$LoginEventListener_this$0']);
var lcA2 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['configFetchEndpoint__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2']("shareitem", lcA2);
var stA2 = null;var stA3 = new io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$LoginEventListener$1;
(refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$LoginEventListener$1 || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$LoginEventListener$1 = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$LoginEventListener$1(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$LoginEventListener_2.call(stA3, lcA0);
invoker.fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

};
    m.access = 0;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$LoginEventListenerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$LoginEventListener', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$LoginEventListenerfillInstOf });
    io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$LoginEventListenerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/shareitem/ShareItemComponent$LoginEventListener';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_EventListener(false).constructor.$class
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_js_VIEW;
    var refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration;
    var refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$LoginEventListener$1;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$LoginEventListener_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$LoginEventListener = registerClass(exports,'io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$LoginEventListener',io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$LoginEventListener);


function io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$LoginEventListener$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$LoginEventListener$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$1 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$LoginEventListener$1_this$1'] = v; return this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$LoginEventListener$1_this$1']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$LoginEventListener_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$LoginEventListener$1_this$1'] = lcA1;
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2'](lcA1);
var lcA2 = stA0;
var stA0 = new io_cloudoffice_platform_cockpit_shareitem_ShareItemView;
(refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView = io_cloudoffice_platform_cockpit_shareitem_ShareItemView(false))).constructor.cons__V.call(stA0);
var lcA3 = stA0;
var stA0 = lcA3;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"instance");
stA0.setInstance__VLjava_lang_String_2(stA1);
(refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent(false))).access$200__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemComponent_2Lio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$LoginEventListener$1_this$1']['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$LoginEventListener_this$0'], lcA3, lcA2);
(refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent(false))).defaultInitialData__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2(lcA3);
invoker.setView__VLjava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$LoginEventListener$1_this$1']['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$LoginEventListener_this$0'],lcA3);
var stA0 = invoker.getDefaultViewName__Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$LoginEventListener$1_this$1']['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$LoginEventListener_this$0']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['toRaw__Ljava_lang_Object_2Ljava_lang_Object_2'](lcA3);
(refs_io_cloudoffice_platform_cockpit_js_VIEW || (refs_io_cloudoffice_platform_cockpit_js_VIEW = vm.io_cloudoffice_platform_cockpit_js_VIEW(false)))['bind__VLjava_lang_String_2Ljava_lang_Object_2'](stA0, stA1);
return;

};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$LoginEventListener$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$LoginEventListener$1', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$LoginEventListener$1fillInstOf });
    io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$LoginEventListener$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/shareitem/ShareItemComponent$LoginEventListener$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65568;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView;
    var refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent;
    var refs_net_java_html_json_Models;
    var refs_io_cloudoffice_platform_cockpit_js_VIEW;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$LoginEventListener$1_this$1'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$LoginEventListener$1 = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$LoginEventListener$1;

vm.net_java_html_json_Models = link('net/java/html/json/Models', function(f) { vm.net_java_html_json_Models =  f; });
vm.io_cloudoffice_platform_cockpit_js_VIEW = link('io/cloudoffice/platform/cockpit/js/VIEW', function(f) { vm.io_cloudoffice_platform_cockpit_js_VIEW =  f; });

function io_cloudoffice_platform_cockpit_shareitem_ShareItemView() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_shareitem_ShareItemView;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto'] = v; return this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto']; };
  m = c._prop_instance = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_instance'] = v; return this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_instance']; };
  m = c._prop_designerMode = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_designerMode'] = v; return this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_designerMode']; };
  m = c._prop_configuration = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_configuration'] = v; return this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_configuration']; };
  m = c._prop_searchBoxComponentDefinition = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_searchBoxComponentDefinition'] = v; return this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_searchBoxComponentDefinition']; };
  m = c._prop_selectedItemId = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_selectedItemId'] = v; return this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_selectedItemId']; };
  m = c._prop_selectedItemName = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_selectedItemName'] = v; return this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_selectedItemName']; };
  m = c._prop_selectedItemType = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_selectedItemType'] = v; return this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_selectedItemType']; };
  m = c._prop_visible = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_visible'] = v; return this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_visible']; };
  m = c._prop_shareItemList = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_shareItemList'] = v; return this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_shareItemList']; };
  m = c._prop_loader = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_loader'] = v; return this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_loader']; };
  m = c._prop_inputBoxText = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_inputBoxText'] = v; return this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_inputBoxText']; };
  m = c._prop_showItemList = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_showItemList'] = v; return this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_showItemList']; };
  m = c._prop_itemList = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_itemList'] = v; return this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_itemList']; };
  m = c._prop_itemListLoader = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_itemListLoader'] = v; return this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_itemListLoader']; };
  m = c._prop_maximumPermission = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_maximumPermission'] = v; return this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_maximumPermission']; };
  m = c._prop_tempItemToShare = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_tempItemToShare'] = v; return this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_tempItemToShare']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.getInstance__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto'],"instance");
return lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_instance'];

};
c['getInstance__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setInstance__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_instance'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_instance'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto'],"instance", lcA2, lcA1);
return;

    }
}}
};
c['setInstance__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isDesignerMode__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto'],"designerMode");
return lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_designerMode'];

};
c['isDesignerMode__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setDesignerMode__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_designerMode']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_designerMode'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto'];var stA1 = "designerMode";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setDesignerMode__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getConfiguration__Lio_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto'],"configuration");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_configuration']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration;
(refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration = io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration(false))).constructor.cons__V.call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_configuration'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_configuration'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_configuration']['$instOf_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_configuration'], 'io.cloudoffice.platform.cockpit.shareitem.ShareItemConfiguration');
return lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_configuration'];

    }
}}
};
c['getConfiguration__Lio_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setConfiguration__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_configuration'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_configuration'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto'],"configuration", lcA2, lcA1);
return;

    }
}}
};
c['setConfiguration__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto'],"searchBoxComponentDefinition");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_searchBoxComponentDefinition']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_ComponentDef;
(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_searchBoxComponentDefinition'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_searchBoxComponentDefinition'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_searchBoxComponentDefinition']['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_searchBoxComponentDefinition'], 'io.cloudoffice.platform.cockpit.api.ComponentDef');
return lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_searchBoxComponentDefinition'];

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

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_searchBoxComponentDefinition'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_searchBoxComponentDefinition'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto'],"searchBoxComponentDefinition", lcA2, lcA1);
return;

    }
}}
};
c['setSearchBoxComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getSelectedItemId__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto'],"selectedItemId");
return lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_selectedItemId'];

};
c['getSelectedItemId__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setSelectedItemId__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_selectedItemId'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_selectedItemId'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto'],"selectedItemId", lcA2, lcA1);
return;

    }
}}
};
c['setSelectedItemId__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getSelectedItemName__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto'],"selectedItemName");
return lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_selectedItemName'];

};
c['getSelectedItemName__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setSelectedItemName__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_selectedItemName'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_selectedItemName'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto'],"selectedItemName", lcA2, lcA1);
return;

    }
}}
};
c['setSelectedItemName__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getSelectedItemType__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto'],"selectedItemType");
return lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_selectedItemType'];

};
c['getSelectedItemType__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setSelectedItemType__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_selectedItemType'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_selectedItemType'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto'],"selectedItemType", lcA2, lcA1);
return;

    }
}}
};
c['setSelectedItemType__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isVisible__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto'],"visible");
return lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_visible'];

};
c['isVisible__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setVisible__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_visible']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_visible'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto'];var stA1 = "visible";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setVisible__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getShareItemList__Ljava_util_List_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto'],"shareItemList");
return lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_shareItemList'];

};
c['getShareItemList__Ljava_util_List_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto'],"loader");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_loader']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_HelperItemView;
(refs_io_cloudoffice_platform_cockpit_api_HelperItemView || (refs_io_cloudoffice_platform_cockpit_api_HelperItemView = vm.io_cloudoffice_platform_cockpit_api_HelperItemView(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_loader'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_loader'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_loader']['$instOf_io_cloudoffice_platform_cockpit_api_HelperItemView']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_loader'], 'io.cloudoffice.platform.cockpit.api.HelperItemView');
return lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_loader'];

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

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_loader'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_loader'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto'],"loader", lcA2, lcA1);
return;

    }
}}
};
c['setLoader__VLio_cloudoffice_platform_cockpit_api_HelperItemView_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getInputBoxText__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto'],"inputBoxText");
return lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_inputBoxText'];

};
c['getInputBoxText__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setInputBoxText__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_inputBoxText'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_inputBoxText'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto'],"inputBoxText", lcA2, lcA1);
var lcA3 = lcA0;
(refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent(false))).itemSearchAutocomplete__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2(lcA3);
return;

    }
}}
};
c['setInputBoxText__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isShowItemList__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto'],"showItemList");
return lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_showItemList'];

};
c['isShowItemList__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setShowItemList__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_showItemList']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_showItemList'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto'];var stA1 = "showItemList";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
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
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto'],"itemList");
return lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_itemList'];

};
c['getItemList__Ljava_util_List_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getItemListLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto'],"itemListLoader");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_itemListLoader']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_HelperItemView;
(refs_io_cloudoffice_platform_cockpit_api_HelperItemView || (refs_io_cloudoffice_platform_cockpit_api_HelperItemView = vm.io_cloudoffice_platform_cockpit_api_HelperItemView(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_itemListLoader'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_itemListLoader'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_itemListLoader']['$instOf_io_cloudoffice_platform_cockpit_api_HelperItemView']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_itemListLoader'], 'io.cloudoffice.platform.cockpit.api.HelperItemView');
return lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_itemListLoader'];

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

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_itemListLoader'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_itemListLoader'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto'],"itemListLoader", lcA2, lcA1);
return;

    }
}}
};
c['setItemListLoader__VLio_cloudoffice_platform_cockpit_api_HelperItemView_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getMaximumPermission__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto'],"maximumPermission");
return lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_maximumPermission'];

};
c['getMaximumPermission__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setMaximumPermission__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_maximumPermission'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_maximumPermission'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto'],"maximumPermission", lcA2, lcA1);
return;

    }
}}
};
c['setMaximumPermission__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getTempItemToShare__Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto'],"tempItemToShare");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_tempItemToShare']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new io_cloudoffice_platform_cockpit_shareitem_ListItemView;
(refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView || (refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView = io_cloudoffice_platform_cockpit_shareitem_ListItemView(false))).constructor.cons__V.call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_tempItemToShare'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_tempItemToShare'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_tempItemToShare']['$instOf_io_cloudoffice_platform_cockpit_shareitem_ListItemView']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_tempItemToShare'], 'io.cloudoffice.platform.cockpit.shareitem.ListItemView');
return lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_tempItemToShare'];

    }
}}
};
c['getTempItemToShare__Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setTempItemToShare__VLio_cloudoffice_platform_cockpit_shareitem_ListItemView_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_tempItemToShare'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_tempItemToShare'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto'],"tempItemToShare", lcA2, lcA1);
return;

    }
}}
};
c['setTempItemToShare__VLio_cloudoffice_platform_cockpit_shareitem_ListItemView_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2(c._TYPE(),lcA0, lcA1);
stA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto'] = stA1;
var stA0 = lcA0;var stA1 = lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto'];var stA2 = "shareItemList";var stI3 = -1;var stA4 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 0);
var stA1 = invoker.createList__Ljava_util_List_2Ljava_lang_String_2I_3Ljava_lang_String_2(stA1,stA2, stI3, stA4);
stA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_shareItemList'] = stA1;
var stA0 = lcA0;var stA1 = lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto'];var stA2 = "itemList";var stI3 = -1;var stA4 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 0);
var stA1 = invoker.createList__Ljava_util_List_2Ljava_lang_String_2I_3Ljava_lang_String_2(stA1,stA2, stI3, stA4);
stA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_itemList'] = stA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_configuration'] = c._TYPE();
lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_searchBoxComponentDefinition'] = c._TYPE();
lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_loader'] = c._TYPE();
lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_itemListLoader'] = c._TYPE();
lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_tempItemToShare'] = c._TYPE();
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLjava_lang_String_2ZLio_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2ZLio_cloudoffice_platform_cockpit_api_HelperItemView_2Ljava_lang_String_2ZLio_cloudoffice_platform_cockpit_api_HelperItemView_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2_3Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2 = function(lcA1, lcI2, lcA3, lcA4, lcA5, lcA6, lcA7, lcI8, lcA9, lcA10, lcI11, lcA12, lcA13, lcA14, lcA15) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_instance'] = lcA1;
lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_designerMode'] = lcI2;
lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_configuration'] = lcA3;
lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_searchBoxComponentDefinition'] = lcA4;
lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_selectedItemId'] = lcA5;
lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_selectedItemName'] = lcA6;
lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_selectedItemType'] = lcA7;
lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_visible'] = lcI8;
lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_loader'] = lcA9;
lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_inputBoxText'] = lcA10;
lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_showItemList'] = lcI11;
lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_itemListLoader'] = lcA12;
lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_maximumPermission'] = lcA13;
lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_tempItemToShare'] = lcA14;
invoker.initTo__VLjava_util_Collection_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto'],lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_shareItemList'], lcA15);
return;

};
CLS['cons__VLjava_lang_String_2ZLio_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2ZLio_cloudoffice_platform_cockpit_api_HelperItemView_2Ljava_lang_String_2ZLio_cloudoffice_platform_cockpit_api_HelperItemView_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2_3Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2'] = m;

    m.access = 129;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, (16));
var lcA3 = stA0;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, (16));
Array.at(stA2, 0, "instance");
Array.at(stA2, 1, "designerMode");
Array.at(stA2, 2, "configuration");
Array.at(stA2, 3, "searchBoxComponentDefinition");
Array.at(stA2, 4, "selectedItemId");
Array.at(stA2, 5, "selectedItemName");
Array.at(stA2, (6), "selectedItemType");
Array.at(stA2, (7), "visible");
Array.at(stA2, (8), "shareItemList");
Array.at(stA2, (9), "loader");
Array.at(stA2, (10), "inputBoxText");
Array.at(stA2, (11), "showItemList");
Array.at(stA2, (12), "itemList");
Array.at(stA2, (13), "itemListLoader");
Array.at(stA2, (14), "maximumPermission");
Array.at(stA2, (15), "tempItemToShare");
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
if ((lcA3[0] || Array.at(lcA3, 0)) !== null && !(lcA3[0] || Array.at(lcA3, 0))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[0] || Array.at(lcA3, 0)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_instance'] = (lcA3[0] || Array.at(lcA3, 0));
var stA0 = lcA0;if (((lcA3[1] || Array.at(lcA3, 1))) !== null) { gt = 136; break IF; }
var stI1 = 0;{ gt = 148; break IF; }
    }
    X_136: for (;;) { IF: if (gt <= 136) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[1] || Array.at(lcA3, 1)));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_148: for (;;) { IF: if (gt <= 148) {
stA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_designerMode'] = stI1;
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto'],(refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration = io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration(false))).constructor.$class, (lcA3[2] || Array.at(lcA3, 2)));
stA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_configuration'] = stA1;
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto'],(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, (lcA3[3] || Array.at(lcA3, 3)));
stA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_searchBoxComponentDefinition'] = stA1;
if ((lcA3[4] || Array.at(lcA3, 4)) !== null && !(lcA3[4] || Array.at(lcA3, 4))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[4] || Array.at(lcA3, 4)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_selectedItemId'] = (lcA3[4] || Array.at(lcA3, 4));
if ((lcA3[5] || Array.at(lcA3, 5)) !== null && !(lcA3[5] || Array.at(lcA3, 5))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[5] || Array.at(lcA3, 5)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_selectedItemName'] = (lcA3[5] || Array.at(lcA3, 5));
if ((lcA3[(6)] || Array.at(lcA3, (6))) !== null && !(lcA3[(6)] || Array.at(lcA3, (6)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(6)] || Array.at(lcA3, (6))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_selectedItemType'] = (lcA3[(6)] || Array.at(lcA3, (6)));
var stA0 = lcA0;if (((lcA3[(7)] || Array.at(lcA3, (7)))) !== null) { gt = 226; break IF; }
var stI1 = 0;{ gt = 239; break IF; }
    }
    X_226: for (;;) { IF: if (gt <= 226) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(7)] || Array.at(lcA3, (7))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_239: for (;;) { IF: if (gt <= 239) {
stA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_visible'] = stI1;
var stA0 = c.useAsArray___3Ljava_lang_Object_2Ljava_lang_Object_2((lcA3[(8)] || Array.at(lcA3, (8))));
var lcA4 = stA0;
var lcI5 = (lcA4).length;
var lcI6 = 0;
    }
    X_259: for (;;) { IF: if (gt <= 259) {

if ((lcI6) >= (lcI5)) { gt = 300; break IF; }
var lcA7 = (lcA4[lcI6] || Array.at(lcA4, lcI6));
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_shareItemList'];var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto'],(refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView || (refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView = io_cloudoffice_platform_cockpit_shareitem_ListItemView(false))).constructor.$class, lcA7);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
lcI6++;
{ gt = 0; continue X_259; }
    }
    X_300: for (;;) { IF: if (gt <= 300) {

var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto'],(refs_io_cloudoffice_platform_cockpit_api_HelperItemView || (refs_io_cloudoffice_platform_cockpit_api_HelperItemView = vm.io_cloudoffice_platform_cockpit_api_HelperItemView(false))).constructor.$class, (lcA3[(9)] || Array.at(lcA3, (9))));
stA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_loader'] = stA1;
if ((lcA3[(10)] || Array.at(lcA3, (10))) !== null && !(lcA3[(10)] || Array.at(lcA3, (10)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(10)] || Array.at(lcA3, (10))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_inputBoxText'] = (lcA3[(10)] || Array.at(lcA3, (10)));
var stA0 = lcA0;if (((lcA3[(11)] || Array.at(lcA3, (11)))) !== null) { gt = 340; break IF; }
var stI1 = 0;{ gt = 353; break IF; }
    }
    X_340: for (;;) { IF: if (gt <= 340) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(11)] || Array.at(lcA3, (11))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_353: for (;;) { IF: if (gt <= 353) {
stA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_showItemList'] = stI1;
var stA0 = c.useAsArray___3Ljava_lang_Object_2Ljava_lang_Object_2((lcA3[(12)] || Array.at(lcA3, (12))));
var lcA4 = stA0;
var lcI5 = (lcA4).length;
var lcI6 = 0;
    }
    X_373: for (;;) { IF: if (gt <= 373) {

if ((lcI6) >= (lcI5)) { gt = 414; break IF; }
var lcA7 = (lcA4[lcI6] || Array.at(lcA4, lcI6));
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_itemList'];var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto'],(refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView || (refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView = io_cloudoffice_platform_cockpit_shareitem_ListItemView(false))).constructor.$class, lcA7);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
lcI6++;
{ gt = 0; continue X_373; }
    }
    X_414: for (;;) { IF: if (gt <= 414) {

var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto'],(refs_io_cloudoffice_platform_cockpit_api_HelperItemView || (refs_io_cloudoffice_platform_cockpit_api_HelperItemView = vm.io_cloudoffice_platform_cockpit_api_HelperItemView(false))).constructor.$class, (lcA3[(13)] || Array.at(lcA3, (13))));
stA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_itemListLoader'] = stA1;
if ((lcA3[(14)] || Array.at(lcA3, (14))) !== null && !(lcA3[(14)] || Array.at(lcA3, (14)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(14)] || Array.at(lcA3, (14))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_maximumPermission'] = (lcA3[(14)] || Array.at(lcA3, (14)));
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto'],(refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView || (refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView = io_cloudoffice_platform_cockpit_shareitem_ListItemView(false))).constructor.$class, (lcA3[(15)] || Array.at(lcA3, (15))));
stA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_tempItemToShare'] = stA1;
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
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_configuration']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"searchBoxComponentDefinition");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_searchBoxComponentDefinition']);
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"shareItemList");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_shareItemList']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"loader");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_loader']);
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
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_itemList']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"itemListLoader");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_itemListLoader']);
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"tempItemToShare");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_tempItemToShare']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(125));
var stA0 = invoker.toString__Ljava_lang_String_2(lcA1);
return stA0;

};
c['toString__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto']);
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new io_cloudoffice_platform_cockpit_shareitem_ShareItemView;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = lcA0.getInstance__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_instance'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isDesignerMode__Z();
stA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_designerMode'] = stI1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_configuration']) !== null) { gt = 37; break IF; }
var stA1 = null;{ gt = 61; break IF; }
    }
    X_37: for (;;) { IF: if (gt <= 37) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_configuration']) !== (c._TYPE())) { gt = 53; break IF; }
var stA1 = c._TYPE();{ gt = 61; break IF; }
    }
    X_53: for (;;) { IF: if (gt <= 53) {

var stA1 = lcA0.getConfiguration__Lio_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_61: for (;;) { IF: if (gt <= 61) {
stA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_configuration'] = stA1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_searchBoxComponentDefinition']) !== null) { gt = 76; break IF; }
var stA1 = null;{ gt = 100; break IF; }
    }
    X_76: for (;;) { IF: if (gt <= 76) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_searchBoxComponentDefinition']) !== (c._TYPE())) { gt = 92; break IF; }
var stA1 = c._TYPE();{ gt = 100; break IF; }
    }
    X_92: for (;;) { IF: if (gt <= 92) {

var stA1 = lcA0.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_100: for (;;) { IF: if (gt <= 100) {
stA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_searchBoxComponentDefinition'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getSelectedItemId__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_selectedItemId'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getSelectedItemName__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_selectedItemName'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getSelectedItemType__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_selectedItemType'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isVisible__Z();
stA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_visible'] = stI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto'];var stA1 = lcA2.getShareItemList__Ljava_util_List_2();
invoker.cloneList__VLjava_util_Collection_2Lnet_java_html_BrwsrCtx_2Ljava_util_Collection_2(stA0,stA1, lcA1, lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_shareItemList']);
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_loader']) !== null) { gt = 163; break IF; }
var stA1 = null;{ gt = 187; break IF; }
    }
    X_163: for (;;) { IF: if (gt <= 163) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_loader']) !== (c._TYPE())) { gt = 179; break IF; }
var stA1 = c._TYPE();{ gt = 187; break IF; }
    }
    X_179: for (;;) { IF: if (gt <= 179) {

var stA1 = lcA0.getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_187: for (;;) { IF: if (gt <= 187) {
stA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_loader'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getInputBoxText__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_inputBoxText'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isShowItemList__Z();
stA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_showItemList'] = stI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto'];var stA1 = lcA2.getItemList__Ljava_util_List_2();
invoker.cloneList__VLjava_util_Collection_2Lnet_java_html_BrwsrCtx_2Ljava_util_Collection_2(stA0,stA1, lcA1, lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_itemList']);
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_itemListLoader']) !== null) { gt = 234; break IF; }
var stA1 = null;{ gt = 258; break IF; }
    }
    X_234: for (;;) { IF: if (gt <= 234) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_itemListLoader']) !== (c._TYPE())) { gt = 250; break IF; }
var stA1 = c._TYPE();{ gt = 258; break IF; }
    }
    X_250: for (;;) { IF: if (gt <= 250) {

var stA1 = lcA0.getItemListLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_258: for (;;) { IF: if (gt <= 258) {
stA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_itemListLoader'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getMaximumPermission__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_maximumPermission'] = stA1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_tempItemToShare']) !== null) { gt = 281; break IF; }
var stA1 = null;{ gt = 305; break IF; }
    }
    X_281: for (;;) { IF: if (gt <= 281) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_tempItemToShare']) !== (c._TYPE())) { gt = 297; break IF; }
var stA1 = c._TYPE();{ gt = 305; break IF; }
    }
    X_297: for (;;) { IF: if (gt <= 297) {

var stA1 = lcA0.getTempItemToShare__Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_305: for (;;) { IF: if (gt <= 305) {
stA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_tempItemToShare'] = stA1;
return lcA2;

    }
}}}}}}}}}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2 = function() {
  var  lcA0 = this;
invoker.applyBindings__V(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto']);
return lcA0;

};
c['applyBindings__Lio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2'] = m;

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

var stI0 = lcA1 != null && lcA1['$instOf_io_cloudoffice_platform_cockpit_shareitem_ShareItemView'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_shareitem_ShareItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.shareitem.ShareItemView');
var lcA2 = lcA1;
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_instance'], lcA2['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_instance']);
if ((stI0) != 0) { gt = 40; break IF; }
return 0;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_designerMode']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_designerMode']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 65; break IF; }
return 0;
    }
    X_65: for (;;) { IF: if (gt <= 65) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_configuration']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_configuration']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 92; break IF; }
return 0;
    }
    X_92: for (;;) { IF: if (gt <= 92) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_searchBoxComponentDefinition']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_searchBoxComponentDefinition']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 119; break IF; }
return 0;
    }
    X_119: for (;;) { IF: if (gt <= 119) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_selectedItemId'], lcA2['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_selectedItemId']);
if ((stI0) != 0) { gt = 138; break IF; }
return 0;
    }
    X_138: for (;;) { IF: if (gt <= 138) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_selectedItemName'], lcA2['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_selectedItemName']);
if ((stI0) != 0) { gt = 157; break IF; }
return 0;
    }
    X_157: for (;;) { IF: if (gt <= 157) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_selectedItemType'], lcA2['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_selectedItemType']);
if ((stI0) != 0) { gt = 176; break IF; }
return 0;
    }
    X_176: for (;;) { IF: if (gt <= 176) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_visible']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_visible']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 201; break IF; }
return 0;
    }
    X_201: for (;;) { IF: if (gt <= 201) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_shareItemList']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_shareItemList']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 228; break IF; }
return 0;
    }
    X_228: for (;;) { IF: if (gt <= 228) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_loader']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_loader']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 255; break IF; }
return 0;
    }
    X_255: for (;;) { IF: if (gt <= 255) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_inputBoxText'], lcA2['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_inputBoxText']);
if ((stI0) != 0) { gt = 274; break IF; }
return 0;
    }
    X_274: for (;;) { IF: if (gt <= 274) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_showItemList']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_showItemList']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 299; break IF; }
return 0;
    }
    X_299: for (;;) { IF: if (gt <= 299) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_itemList']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_itemList']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 326; break IF; }
return 0;
    }
    X_326: for (;;) { IF: if (gt <= 326) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_itemListLoader']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_itemListLoader']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 353; break IF; }
return 0;
    }
    X_353: for (;;) { IF: if (gt <= 353) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_maximumPermission'], lcA2['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_maximumPermission']);
if ((stI0) != 0) { gt = 372; break IF; }
return 0;
    }
    X_372: for (;;) { IF: if (gt <= 372) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_tempItemToShare']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_tempItemToShare']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 399; break IF; }
return 0;
    }
    X_399: for (;;) { IF: if (gt <= 399) {

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
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_instance'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_designerMode']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_configuration']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_searchBoxComponentDefinition']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_selectedItemId'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_selectedItemName'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_selectedItemType'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_visible']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_shareItemList']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_loader']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_inputBoxText'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_showItemList']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_itemList']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_itemListLoader']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_maximumPermission'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_tempItemToShare']);
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
var stA0 = lcA0.clone__Lio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lio_cloudoffice_platform_cockpit_shareitem_ShareItemView$Html4JavaType_2 = function() {
return c._TYPE();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2 = function(lcA0) {
return lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_shareitem_ShareItemView$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2Lio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_shareitem_ShareItemView$Html4JavaType;
(refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView$Html4JavaType || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView$Html4JavaType = io_cloudoffice_platform_cockpit_shareitem_ShareItemView$Html4JavaType(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_shareitem_ShareItemViewfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_shareitem_ShareItemView', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_shareitem_ShareItemViewfillInstOf });
    io_cloudoffice_platform_cockpit_shareitem_ShareItemViewfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/shareitem/ShareItemView';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent;
    var refs_java_lang_Boolean;
    var refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration;
    var refs_net_java_html_json_Models;
    var refs_io_cloudoffice_platform_cockpit_api_ComponentDef;
    var refs_io_cloudoffice_platform_cockpit_api_HelperItemView;
    var refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView;
    var refs_net_java_html_BrwsrCtx;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_proto'] = null;
    this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_instance'] = null;
    this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_designerMode'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_configuration'] = null;
    this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_searchBoxComponentDefinition'] = null;
    this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_selectedItemId'] = null;
    this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_selectedItemName'] = null;
    this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_selectedItemType'] = null;
    this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_visible'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_shareItemList'] = null;
    this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_loader'] = null;
    this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_inputBoxText'] = null;
    this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_showItemList'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_itemList'] = null;
    this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_itemListLoader'] = null;
    this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_maximumPermission'] = null;
    this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemView_prop_tempItemToShare'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_shareitem_ShareItemView = registerClass(exports,'io_cloudoffice_platform_cockpit_shareitem_ShareItemView',io_cloudoffice_platform_cockpit_shareitem_ShareItemView);


function io_cloudoffice_platform_cockpit_shareitem_ShareItemView$Html4JavaType() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_shareitem_ShareItemView$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView = io_cloudoffice_platform_cockpit_shareitem_ShareItemView(false))).constructor.$class, (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent(false))).constructor.$class, (16), (18));
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"instance", 0, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"designerMode", 1, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"configuration", 2, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"searchBoxComponentDefinition", 3, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"selectedItemId", 4, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"selectedItemName", 5, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"selectedItemType", (6), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"visible", (7), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"shareItemList", (8), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"loader", (9), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"inputBoxText", (10), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"showItemList", (11), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemList", (12), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemListLoader", (13), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"maximumPermission", (14), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"tempItemToShare", (15), 0, 0);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"openConfig", 0);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"closeConfigurationPanel", 1);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"save", 2);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"resetConfiguration", 3);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"clearFilter", 4);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"toogleShareItem", 5);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"closeShareItem", (6));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"processShareItem", (7));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"processShareItemList", (8));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"getItemList", (9));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"selectItem", (10));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"shareSingleItem", (11));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"removeShareItemFromList", (12));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"removeShareItem", (13));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"showPermissionMenu", (14));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"closePermissionMenu", (15));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"changePermission", (16));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"defaultInitialData", (17));
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
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
  case 8:{ gt = 222; break IF; }
  case 9:{ gt = 236; break IF; }
  case 10:{ gt = 253; break IF; }
  case 11:{ gt = 270; break IF; }
  case 12:{ gt = 290; break IF; }
  case 13:{ gt = 304; break IF; }
  case 14:{ gt = 321; break IF; }
  case 15:{ gt = 338; break IF; }
  default: { gt = 355; break IF; }
}
    }
    X_80: for (;;) { IF: if (gt <= 80) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView = io_cloudoffice_platform_cockpit_shareitem_ShareItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_shareitem_ShareItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setInstance__VLjava_lang_String_2(stA1);
return;
    }
    X_97: for (;;) { IF: if (gt <= 97) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView = io_cloudoffice_platform_cockpit_shareitem_ShareItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_shareitem_ShareItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setDesignerMode__VZ(stI1);
return;
    }
    X_117: for (;;) { IF: if (gt <= 117) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView = io_cloudoffice_platform_cockpit_shareitem_ShareItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_shareitem_ShareItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration = io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.shareitem.ShareItemConfiguration');
stA0.setConfiguration__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_2(stA1);
return;
    }
    X_134: for (;;) { IF: if (gt <= 134) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView = io_cloudoffice_platform_cockpit_shareitem_ShareItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_shareitem_ShareItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.api.ComponentDef');
stA0.setSearchBoxComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2(stA1);
return;
    }
    X_151: for (;;) { IF: if (gt <= 151) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView = io_cloudoffice_platform_cockpit_shareitem_ShareItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_shareitem_ShareItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setSelectedItemId__VLjava_lang_String_2(stA1);
return;
    }
    X_168: for (;;) { IF: if (gt <= 168) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView = io_cloudoffice_platform_cockpit_shareitem_ShareItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_shareitem_ShareItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setSelectedItemName__VLjava_lang_String_2(stA1);
return;
    }
    X_185: for (;;) { IF: if (gt <= 185) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView = io_cloudoffice_platform_cockpit_shareitem_ShareItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_shareitem_ShareItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setSelectedItemType__VLjava_lang_String_2(stA1);
return;
    }
    X_202: for (;;) { IF: if (gt <= 202) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView = io_cloudoffice_platform_cockpit_shareitem_ShareItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_shareitem_ShareItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setVisible__VZ(stI1);
return;
    }
    X_222: for (;;) { IF: if (gt <= 222) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView = io_cloudoffice_platform_cockpit_shareitem_ShareItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_shareitem_ShareItemView$Html4JavaType_2();
var stA1 = lcA1.getShareItemList__Ljava_util_List_2();
invoker.replaceValue__VLjava_util_Collection_2Ljava_lang_Class_2Ljava_lang_Object_2(stA0,stA1, (refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView || (refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView = io_cloudoffice_platform_cockpit_shareitem_ListItemView(false))).constructor.$class, lcA3);
return;
    }
    X_236: for (;;) { IF: if (gt <= 236) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView = io_cloudoffice_platform_cockpit_shareitem_ShareItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_shareitem_ShareItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_api_HelperItemView || (refs_io_cloudoffice_platform_cockpit_api_HelperItemView = vm.io_cloudoffice_platform_cockpit_api_HelperItemView(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_api_HelperItemView']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.api.HelperItemView');
stA0.setLoader__VLio_cloudoffice_platform_cockpit_api_HelperItemView_2(stA1);
return;
    }
    X_253: for (;;) { IF: if (gt <= 253) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView = io_cloudoffice_platform_cockpit_shareitem_ShareItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_shareitem_ShareItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setInputBoxText__VLjava_lang_String_2(stA1);
return;
    }
    X_270: for (;;) { IF: if (gt <= 270) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView = io_cloudoffice_platform_cockpit_shareitem_ShareItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_shareitem_ShareItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setShowItemList__VZ(stI1);
return;
    }
    X_290: for (;;) { IF: if (gt <= 290) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView = io_cloudoffice_platform_cockpit_shareitem_ShareItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_shareitem_ShareItemView$Html4JavaType_2();
var stA1 = lcA1.getItemList__Ljava_util_List_2();
invoker.replaceValue__VLjava_util_Collection_2Ljava_lang_Class_2Ljava_lang_Object_2(stA0,stA1, (refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView || (refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView = io_cloudoffice_platform_cockpit_shareitem_ListItemView(false))).constructor.$class, lcA3);
return;
    }
    X_304: for (;;) { IF: if (gt <= 304) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView = io_cloudoffice_platform_cockpit_shareitem_ShareItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_shareitem_ShareItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_api_HelperItemView || (refs_io_cloudoffice_platform_cockpit_api_HelperItemView = vm.io_cloudoffice_platform_cockpit_api_HelperItemView(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_api_HelperItemView']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.api.HelperItemView');
stA0.setItemListLoader__VLio_cloudoffice_platform_cockpit_api_HelperItemView_2(stA1);
return;
    }
    X_321: for (;;) { IF: if (gt <= 321) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView = io_cloudoffice_platform_cockpit_shareitem_ShareItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_shareitem_ShareItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setMaximumPermission__VLjava_lang_String_2(stA1);
return;
    }
    X_338: for (;;) { IF: if (gt <= 338) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView = io_cloudoffice_platform_cockpit_shareitem_ShareItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_shareitem_ShareItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView || (refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView = io_cloudoffice_platform_cockpit_shareitem_ListItemView(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_shareitem_ListItemView']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.shareitem.ListItemView');
stA0.setTempItemToShare__VLio_cloudoffice_platform_cockpit_shareitem_ListItemView_2(stA1);
return;
    }
    X_355: for (;;) { IF: if (gt <= 355) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}}}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2I = function(lcA1, lcI2) {
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
  case 8:{ gt = 126; break IF; }
  case 9:{ gt = 131; break IF; }
  case 10:{ gt = 136; break IF; }
  case 11:{ gt = 141; break IF; }
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

var stA0 = lcA1.getConfiguration__Lio_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_2();
return stA0;
    }
    X_98: for (;;) { IF: if (gt <= 98) {

var stA0 = lcA1.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
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

var stI0 = lcA1.isVisible__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_126: for (;;) { IF: if (gt <= 126) {

var stA0 = lcA1.getShareItemList__Ljava_util_List_2();
return stA0;
    }
    X_131: for (;;) { IF: if (gt <= 131) {

var stA0 = lcA1.getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
return stA0;
    }
    X_136: for (;;) { IF: if (gt <= 136) {

var stA0 = lcA1.getInputBoxText__Ljava_lang_String_2();
return stA0;
    }
    X_141: for (;;) { IF: if (gt <= 141) {

var stI0 = lcA1.isShowItemList__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_149: for (;;) { IF: if (gt <= 149) {

var stA0 = lcA1.getItemList__Ljava_util_List_2();
return stA0;
    }
    X_154: for (;;) { IF: if (gt <= 154) {

var stA0 = lcA1.getItemListLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
return stA0;
    }
    X_159: for (;;) { IF: if (gt <= 159) {

var stA0 = lcA1.getMaximumPermission__Ljava_lang_String_2();
return stA0;
    }
    X_164: for (;;) { IF: if (gt <= 164) {

var stA0 = lcA1.getTempItemToShare__Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2();
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
    m = c.call__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 88; break IF; }
  case 1:{ gt = 93; break IF; }
  case 2:{ gt = 98; break IF; }
  case 3:{ gt = 103; break IF; }
  case 4:{ gt = 108; break IF; }
  case 5:{ gt = 113; break IF; }
  case 6:{ gt = 118; break IF; }
  case 7:{ gt = 123; break IF; }
  case 8:{ gt = 137; break IF; }
  case 9:{ gt = 142; break IF; }
  case 10:{ gt = 147; break IF; }
  case 11:{ gt = 165; break IF; }
  case 12:{ gt = 183; break IF; }
  case 13:{ gt = 201; break IF; }
  case 14:{ gt = 219; break IF; }
  case 15:{ gt = 237; break IF; }
  case 16:{ gt = 255; break IF; }
  case 17:{ gt = 269; break IF; }
  default: { gt = 274; break IF; }
}
    }
    X_88: for (;;) { IF: if (gt <= 88) {

(refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent(false))).openConfig__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2(lcA1);
return;
    }
    X_93: for (;;) { IF: if (gt <= 93) {

(refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent(false))).closeConfigurationPanel__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2(lcA1);
return;
    }
    X_98: for (;;) { IF: if (gt <= 98) {

(refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent(false))).save__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2(lcA1);
return;
    }
    X_103: for (;;) { IF: if (gt <= 103) {

(refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent(false))).resetConfiguration__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2(lcA1);
return;
    }
    X_108: for (;;) { IF: if (gt <= 108) {

(refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent(false))).clearFilter__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2(lcA1);
return;
    }
    X_113: for (;;) { IF: if (gt <= 113) {

(refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent(false))).toogleShareItem__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2(lcA1);
return;
    }
    X_118: for (;;) { IF: if (gt <= 118) {

(refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent(false))).closeShareItem__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2(lcA1);
return;
    }
    X_123: for (;;) { IF: if (gt <= 123) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView = io_cloudoffice_platform_cockpit_shareitem_ShareItemView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2(lcA1);
var stA1 = invoker.toString__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_String_2(stA1,lcA3, null);
(refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent(false))).processShareItem__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2Ljava_lang_String_2(stA0, stA1);
return;
    }
    X_137: for (;;) { IF: if (gt <= 137) {

(refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent(false))).processShareItemList__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2(lcA1);
return;
    }
    X_142: for (;;) { IF: if (gt <= 142) {

(refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent(false))).getItemList__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2(lcA1);
return;
    }
    X_147: for (;;) { IF: if (gt <= 147) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView = io_cloudoffice_platform_cockpit_shareitem_ShareItemView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2(lcA1);
var stA1 = invoker.toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView || (refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView = io_cloudoffice_platform_cockpit_shareitem_ListItemView(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_shareitem_ListItemView']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.shareitem.ListItemView');
(refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent(false))).selectItem__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2(stA0, stA1);
return;
    }
    X_165: for (;;) { IF: if (gt <= 165) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView = io_cloudoffice_platform_cockpit_shareitem_ShareItemView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2(lcA1);
var stA1 = invoker.toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView || (refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView = io_cloudoffice_platform_cockpit_shareitem_ListItemView(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_shareitem_ListItemView']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.shareitem.ListItemView');
(refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent(false))).shareSingleItem__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2(stA0, stA1);
return;
    }
    X_183: for (;;) { IF: if (gt <= 183) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView = io_cloudoffice_platform_cockpit_shareitem_ShareItemView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2(lcA1);
var stA1 = invoker.toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView || (refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView = io_cloudoffice_platform_cockpit_shareitem_ListItemView(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_shareitem_ListItemView']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.shareitem.ListItemView');
(refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent(false))).removeShareItemFromList__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2(stA0, stA1);
return;
    }
    X_201: for (;;) { IF: if (gt <= 201) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView = io_cloudoffice_platform_cockpit_shareitem_ShareItemView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2(lcA1);
var stA1 = invoker.toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView || (refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView = io_cloudoffice_platform_cockpit_shareitem_ListItemView(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_shareitem_ListItemView']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.shareitem.ListItemView');
(refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent(false))).removeShareItem__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2(stA0, stA1);
return;
    }
    X_219: for (;;) { IF: if (gt <= 219) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView = io_cloudoffice_platform_cockpit_shareitem_ShareItemView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2(lcA1);
var stA1 = invoker.toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView || (refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView = io_cloudoffice_platform_cockpit_shareitem_ListItemView(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_shareitem_ListItemView']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.shareitem.ListItemView');
(refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent(false))).showPermissionMenu__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2(stA0, stA1);
return;
    }
    X_237: for (;;) { IF: if (gt <= 237) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView = io_cloudoffice_platform_cockpit_shareitem_ShareItemView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2(lcA1);
var stA1 = invoker.toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView || (refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView = io_cloudoffice_platform_cockpit_shareitem_ListItemView(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_shareitem_ListItemView']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.shareitem.ListItemView');
(refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent(false))).closePermissionMenu__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2Lio_cloudoffice_platform_cockpit_shareitem_ListItemView_2(stA0, stA1);
return;
    }
    X_255: for (;;) { IF: if (gt <= 255) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView = io_cloudoffice_platform_cockpit_shareitem_ShareItemView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2(lcA1);
var stA1 = invoker.toString__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_String_2(stA1,lcA3, null);
(refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent(false))).changePermission__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2Ljava_lang_String_2(stA0, stA1);
return;
    }
    X_269: for (;;) { IF: if (gt <= 269) {

(refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent(false))).defaultInitialData__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2(lcA1);
return;
    }
    X_274: for (;;) { IF: if (gt <= 274) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}}}}}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_shareitem_ShareItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.shareitem.ShareItemView');
var stA0 = (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView = io_cloudoffice_platform_cockpit_shareitem_ShareItemView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2I = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0: { gt = 20; break IF; }
  default: { gt = 25; break IF; }
}
    }
    X_20: for (;;) { IF: if (gt <= 20) {

(refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent(false))).itemSearchAutocomplete__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2(lcA1);
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
    m = c.onMessage__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
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
    m = c.read__Lio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_shareitem_ShareItemView;
(refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView = io_cloudoffice_platform_cockpit_shareitem_ShareItemView(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_shareitem_ShareItemView$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2Lio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView = io_cloudoffice_platform_cockpit_shareitem_ShareItemView(false))).access$400__Lio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2Lio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_shareitem_ShareItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.shareitem.ShareItemView');
lcA0.onMessage__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_shareitem_ShareItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.shareitem.ShareItemView');
lcA0.onChange__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_shareitem_ShareItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.shareitem.ShareItemView');
var stA0 = lcA0.cloneTo__Lio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2Lio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_shareitem_ShareItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.shareitem.ShareItemView');
lcA0.call__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_shareitem_ShareItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.shareitem.ShareItemView');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_shareitem_ShareItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.shareitem.ShareItemView');
lcA0.setValue__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemView$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_shareitem_ShareItemView$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_shareitem_ShareItemView$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_shareitem_ShareItemView$Html4JavaTypefillInstOf });
    io_cloudoffice_platform_cockpit_shareitem_ShareItemView$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/shareitem/ShareItemView$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemView;
    var refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent;
    var refs_org_netbeans_html_json_spi_Proto$Type;
    var refs_java_lang_String;
    var refs_java_lang_Boolean;
    var refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration;
    var refs_io_cloudoffice_platform_cockpit_api_ComponentDef;
    var refs_io_cloudoffice_platform_cockpit_shareitem_ListItemView;
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
vm.io_cloudoffice_platform_cockpit_shareitem_ShareItemView$Html4JavaType = io_cloudoffice_platform_cockpit_shareitem_ShareItemView$Html4JavaType;

vm.io_cloudoffice_platform_cockpit_api_HelperItemView = link('io/cloudoffice/platform/cockpit/api/HelperItemView', function(f) { vm.io_cloudoffice_platform_cockpit_api_HelperItemView =  f; });
vm.io_cloudoffice_platform_cockpit_api_ComponentDef = link('io/cloudoffice/platform/cockpit/api/ComponentDef', function(f) { vm.io_cloudoffice_platform_cockpit_api_ComponentDef =  f; });

function io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_proto'] = v; return this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_proto']; };
  m = c._prop_searchBoxComponentDefinition = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_prop_searchBoxComponentDefinition'] = v; return this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_prop_searchBoxComponentDefinition']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ShareItemManager || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ShareItemManager = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ShareItemManager(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_proto'],"searchBoxComponentDefinition");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_prop_searchBoxComponentDefinition']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_ComponentDef;
(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_prop_searchBoxComponentDefinition'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_prop_searchBoxComponentDefinition'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_prop_searchBoxComponentDefinition']['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_prop_searchBoxComponentDefinition'], 'io.cloudoffice.platform.cockpit.api.ComponentDef');
return lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_prop_searchBoxComponentDefinition'];

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

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_prop_searchBoxComponentDefinition'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_prop_searchBoxComponentDefinition'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_proto'],"searchBoxComponentDefinition", lcA2, lcA1);
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
stA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_proto'] = stA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_prop_searchBoxComponentDefinition'] = c._TYPE();
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_prop_searchBoxComponentDefinition'] = lcA1;
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
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 1);
Array.at(stA2, 0, "searchBoxComponentDefinition");
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_proto'],(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, (lcA3[0] || Array.at(lcA3, 0)));
stA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_prop_searchBoxComponentDefinition'] = stA1;
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
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_prop_searchBoxComponentDefinition']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(125));
var stA0 = invoker.toString__Ljava_lang_String_2(lcA1);
return stA0;

};
c['toString__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_proto']);
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lio_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_prop_searchBoxComponentDefinition']) !== null) { gt = 21; break IF; }
var stA1 = null;{ gt = 45; break IF; }
    }
    X_21: for (;;) { IF: if (gt <= 21) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_prop_searchBoxComponentDefinition']) !== (c._TYPE())) { gt = 37; break IF; }
var stA1 = c._TYPE();{ gt = 45; break IF; }
    }
    X_37: for (;;) { IF: if (gt <= 37) {

var stA1 = lcA0.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_45: for (;;) { IF: if (gt <= 45) {
stA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_prop_searchBoxComponentDefinition'] = stA1;
return lcA2;

    }
}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lio_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_2 = function() {
  var  lcA0 = this;
invoker.applyBindings__V(lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_proto']);
return lcA0;

};
c['applyBindings__Lio_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_2'] = m;

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

var stI0 = lcA1 != null && lcA1['$instOf_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.shareitem.ShareItemConfiguration');
var lcA2 = lcA1;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_prop_searchBoxComponentDefinition']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_prop_searchBoxComponentDefinition']);
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
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_prop_searchBoxComponentDefinition']);
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
var stA0 = lcA0.clone__Lio_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lio_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration$Html4JavaType_2 = function() {
return c._TYPE();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_2 = function(lcA0) {
return lcA0['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lio_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_2Lio_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration$Html4JavaType;
(refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration$Html4JavaType || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration$Html4JavaType = io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration$Html4JavaType(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_shareitem_ShareItemConfigurationfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_shareitem_ShareItemConfigurationfillInstOf });
    io_cloudoffice_platform_cockpit_shareitem_ShareItemConfigurationfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/shareitem/ShareItemConfiguration';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ShareItemManager;
    var refs_io_cloudoffice_platform_cockpit_api_ComponentDef;
    var refs_net_java_html_json_Models;
    var refs_net_java_html_BrwsrCtx;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_proto'] = null;
    this['fld_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_prop_searchBoxComponentDefinition'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration = registerClass(exports,'io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration',io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration);


function io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration$Html4JavaType() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration = io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration(false))).constructor.$class, (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ShareItemManager || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ShareItemManager = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ShareItemManager(false))).constructor.$class, 1, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"searchBoxComponentDefinition", 0, 0, 0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0: { gt = 20; break IF; }
  default: { gt = 37; break IF; }
}
    }
    X_20: for (;;) { IF: if (gt <= 20) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration = io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration(false))).access$100__Lio_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration$Html4JavaType_2();
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
    m = c.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_2I = function(lcA1, lcI2) {
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
    m = c.call__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.shareitem.ShareItemConfiguration');
var stA0 = (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration = io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
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
    m = c.read__Lio_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration;
(refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration = io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lio_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_2Lio_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration || (refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration = io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration(false))).access$400__Lio_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_2Lio_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.shareitem.ShareItemConfiguration');
lcA0.onMessage__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.shareitem.ShareItemConfiguration');
lcA0.onChange__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lio_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.shareitem.ShareItemConfiguration');
var stA0 = lcA0.cloneTo__Lio_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_2Lio_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.shareitem.ShareItemConfiguration');
lcA0.call__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.shareitem.ShareItemConfiguration');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.shareitem.ShareItemConfiguration');
lcA0.setValue__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration$Html4JavaTypefillInstOf });
    io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/shareitem/ShareItemConfiguration$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration;
    var refs_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ShareItemManager;
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
vm.io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration$Html4JavaType = io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration$Html4JavaType;


function io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ShareItemManager() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ShareItemManager;
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
    function io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ShareItemManagerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ShareItemManager', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ShareItemManagerfillInstOf });
    io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ShareItemManagerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/shareitem/ShareItemComponent$ShareItemManager';
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
vm.io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ShareItemManager = registerClass(exports,'io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ShareItemManager',io_cloudoffice_platform_cockpit_shareitem_ShareItemComponent$ShareItemManager);

vm.io_cloudoffice_platform_cockpit_api_AbstractComponent = link('io/cloudoffice/platform/cockpit/api/AbstractComponent', function(f) { vm.io_cloudoffice_platform_cockpit_api_AbstractComponent =  f; });
vm.io_cloudoffice_platform_cockpit_api_Logger = link('io/cloudoffice/platform/cockpit/api/Logger', function(f) { vm.io_cloudoffice_platform_cockpit_api_Logger =  f; });

function io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration$1fillInstOf });
    io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/shareitem/ShareItemConfiguration$1';
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
vm.io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration$1 = io_cloudoffice_platform_cockpit_shareitem_ShareItemConfiguration$1;


function io_cloudoffice_platform_cockpit_shareitem_ShareItemView$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_shareitem_ShareItemView$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_shareitem_ShareItemView$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_shareitem_ShareItemView$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_shareitem_ShareItemView$1fillInstOf });
    io_cloudoffice_platform_cockpit_shareitem_ShareItemView$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/shareitem/ShareItemView$1';
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
vm.io_cloudoffice_platform_cockpit_shareitem_ShareItemView$1 = io_cloudoffice_platform_cockpit_shareitem_ShareItemView$1;

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
  invoker.equalsIgnoreCase__ZLjava_lang_String_2 = function(target, p1) {
    return target['equalsIgnoreCase__ZLjava_lang_String_2'](p1);
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
  invoker.getBoolean__ZLjava_lang_String_2 = function(target, p1) {
    return target['getBoolean__ZLjava_lang_String_2'](p1);
  };
  invoker.add__ZLjava_lang_Object_2 = function(target, p1) {
    return target['add__ZLjava_lang_Object_2'](p1);
  };
  invoker.getArray__Ljava_util_List_2 = function(target) {
    return target['getArray__Ljava_util_List_2']();
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
  invoker.intValue__I = function(target) {
    return target['intValue__I']();
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
  exports['registerResource']('META-INF/MANIFEST.MF', 'TWFuaWZlc3QtVmVyc2lvbjogMS4wDQpCbmQtTGFzdE1vZGlmaWVkOiAxNTk3NzY0MTAwNTAxDQpCdWlsZC1KZGs6IDEuOC4wXzEzMQ0KQnVpbHQtQnk6IGV1c2lhDQpCdW5kbGUtTWFuaWZlc3RWZXJzaW9uOiAyDQpCdW5kbGUtTmFtZTogR2FkZ2V0IFNoYXJlDQpCdW5kbGUtU3ltYm9saWNOYW1lOiBpby5jbG91ZG9mZmljZS5wbGF0Zm9ybS5jb2NrcGl0LnNoYXJlaXRlbQ0KQnVuZGxlLVZlcnNpb246IDEuMS4wDQpDcmVhdGVkLUJ5OiBBcGFjaGUgTWF2ZW4gQnVuZGxlIFBsdWdpbg0KRXhwb3J0LVBhY2thZ2U6IGlvLmNsb3Vkb2ZmaWNlLnBsYXRmb3JtLmNvY2twaXQuc2hhcmVpdGVtO3VzZXM6PSJpby5jbG91DQogZG9mZmljZS5wbGF0Zm9ybS5jb2NrcGl0LmFwaSI7dmVyc2lvbj0iMS4xLjAiDQpJbXBvcnQtUGFja2FnZTogaW8uY2xvdWRvZmZpY2UucGxhdGZvcm0uY29ja3BpdC5hcGk7dmVyc2lvbj0iWzEuMSwyKSIsaW8NCiAuY2xvdWRvZmZpY2UucGxhdGZvcm0uY29ja3BpdC5qczt2ZXJzaW9uPSJbMS4xLDIpIixuZXQuamF2YS5odG1sO3ZlcnNpbw0KIG49IlsxLjYsMikiLG5ldC5qYXZhLmh0bWwuanNvbjt2ZXJzaW9uPSJbMS42LDIpIixvcmcuanNvbjt2ZXJzaW9uPSJbMjAxDQogODA4MTMuMCwyMDE4MDgxNCkiLG9yZy5uZXRiZWFucy5odG1sLmpzb24uc3BpO3ZlcnNpb249IlsxLjYsMikiDQpUb29sOiBCbmQtMi4xLjAuMjAxMzA0MjYtMTIyMjEzDQo=');
});