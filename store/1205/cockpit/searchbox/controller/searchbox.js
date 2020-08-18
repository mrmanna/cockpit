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

function io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData$1fillInstOf });
    io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/searchbox/AutocompleteResultData$1';
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
vm.io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData$1 = io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData$1;


function io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData$Html4JavaType() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData || (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData = io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData(false))).constructor.$class, (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$AutocompleteResultDataModel || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$AutocompleteResultDataModel = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$AutocompleteResultDataModel(false))).constructor.$class, (28), 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemId", 0, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemUserId", 1, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemName", 2, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemType", 3, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"businessModelName", 4, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"collectionType", 5, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"mimetype", (6), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemTypeIconClass", (7), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemTypeIconColor", (8), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"extendedItemType", (9), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"sizeToDisplay", (10), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"extension", (11), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"createdBy", (12), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"modifiedTime", (13), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"version", (14), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"avatar", (15), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"createDateInMS", (16), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"actualModifieddDate", (17), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"isDynamicCollection", (18), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"hasMore", (19), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"nextPageNumber", (20), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"hasOwnerPermission", (21), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"hasAdminPermission", (22), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"hasWritePermission", (23), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"hasReadPermission", (24), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"hasSubjectPermission", (25), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"code", (26), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"message", (27), 0, 0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 128; break IF; }
  case 1:{ gt = 145; break IF; }
  case 2:{ gt = 162; break IF; }
  case 3:{ gt = 179; break IF; }
  case 4:{ gt = 196; break IF; }
  case 5:{ gt = 213; break IF; }
  case 6:{ gt = 230; break IF; }
  case 7:{ gt = 247; break IF; }
  case 8:{ gt = 264; break IF; }
  case 9:{ gt = 281; break IF; }
  case 10:{ gt = 298; break IF; }
  case 11:{ gt = 315; break IF; }
  case 12:{ gt = 332; break IF; }
  case 13:{ gt = 349; break IF; }
  case 14:{ gt = 366; break IF; }
  case 15:{ gt = 383; break IF; }
  case 16:{ gt = 400; break IF; }
  case 17:{ gt = 417; break IF; }
  case 18:{ gt = 434; break IF; }
  case 19:{ gt = 454; break IF; }
  case 20:{ gt = 474; break IF; }
  case 21:{ gt = 491; break IF; }
  case 22:{ gt = 511; break IF; }
  case 23:{ gt = 531; break IF; }
  case 24:{ gt = 551; break IF; }
  case 25:{ gt = 571; break IF; }
  case 26:{ gt = 591; break IF; }
  case 27:{ gt = 608; break IF; }
  default: { gt = 625; break IF; }
}
    }
    X_128: for (;;) { IF: if (gt <= 128) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData || (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData = io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData(false))).access$100__Lio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemId__VLjava_lang_String_2(stA1);
return;
    }
    X_145: for (;;) { IF: if (gt <= 145) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData || (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData = io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData(false))).access$100__Lio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemUserId__VLjava_lang_String_2(stA1);
return;
    }
    X_162: for (;;) { IF: if (gt <= 162) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData || (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData = io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData(false))).access$100__Lio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemName__VLjava_lang_String_2(stA1);
return;
    }
    X_179: for (;;) { IF: if (gt <= 179) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData || (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData = io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData(false))).access$100__Lio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemType__VLjava_lang_String_2(stA1);
return;
    }
    X_196: for (;;) { IF: if (gt <= 196) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData || (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData = io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData(false))).access$100__Lio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setBusinessModelName__VLjava_lang_String_2(stA1);
return;
    }
    X_213: for (;;) { IF: if (gt <= 213) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData || (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData = io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData(false))).access$100__Lio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setCollectionType__VLjava_lang_String_2(stA1);
return;
    }
    X_230: for (;;) { IF: if (gt <= 230) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData || (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData = io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData(false))).access$100__Lio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setMimetype__VLjava_lang_String_2(stA1);
return;
    }
    X_247: for (;;) { IF: if (gt <= 247) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData || (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData = io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData(false))).access$100__Lio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemTypeIconClass__VLjava_lang_String_2(stA1);
return;
    }
    X_264: for (;;) { IF: if (gt <= 264) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData || (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData = io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData(false))).access$100__Lio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemTypeIconColor__VLjava_lang_String_2(stA1);
return;
    }
    X_281: for (;;) { IF: if (gt <= 281) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData || (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData = io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData(false))).access$100__Lio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setExtendedItemType__VLjava_lang_String_2(stA1);
return;
    }
    X_298: for (;;) { IF: if (gt <= 298) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData || (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData = io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData(false))).access$100__Lio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setSizeToDisplay__VLjava_lang_String_2(stA1);
return;
    }
    X_315: for (;;) { IF: if (gt <= 315) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData || (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData = io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData(false))).access$100__Lio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setExtension__VLjava_lang_String_2(stA1);
return;
    }
    X_332: for (;;) { IF: if (gt <= 332) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData || (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData = io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData(false))).access$100__Lio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setCreatedBy__VLjava_lang_String_2(stA1);
return;
    }
    X_349: for (;;) { IF: if (gt <= 349) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData || (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData = io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData(false))).access$100__Lio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setModifiedTime__VLjava_lang_String_2(stA1);
return;
    }
    X_366: for (;;) { IF: if (gt <= 366) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData || (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData = io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData(false))).access$100__Lio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setVersion__VLjava_lang_String_2(stA1);
return;
    }
    X_383: for (;;) { IF: if (gt <= 383) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData || (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData = io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData(false))).access$100__Lio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setAvatar__VLjava_lang_String_2(stA1);
return;
    }
    X_400: for (;;) { IF: if (gt <= 400) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData || (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData = io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData(false))).access$100__Lio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setCreateDateInMS__VLjava_lang_String_2(stA1);
return;
    }
    X_417: for (;;) { IF: if (gt <= 417) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData || (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData = io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData(false))).access$100__Lio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setActualModifieddDate__VLjava_lang_String_2(stA1);
return;
    }
    X_434: for (;;) { IF: if (gt <= 434) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData || (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData = io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData(false))).access$100__Lio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setIsDynamicCollection__VZ(stI1);
return;
    }
    X_454: for (;;) { IF: if (gt <= 454) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData || (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData = io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData(false))).access$100__Lio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setHasMore__VZ(stI1);
return;
    }
    X_474: for (;;) { IF: if (gt <= 474) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData || (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData = io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData(false))).access$100__Lio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setNextPageNumber__VLjava_lang_String_2(stA1);
return;
    }
    X_491: for (;;) { IF: if (gt <= 491) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData || (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData = io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData(false))).access$100__Lio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setHasOwnerPermission__VZ(stI1);
return;
    }
    X_511: for (;;) { IF: if (gt <= 511) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData || (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData = io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData(false))).access$100__Lio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setHasAdminPermission__VZ(stI1);
return;
    }
    X_531: for (;;) { IF: if (gt <= 531) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData || (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData = io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData(false))).access$100__Lio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setHasWritePermission__VZ(stI1);
return;
    }
    X_551: for (;;) { IF: if (gt <= 551) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData || (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData = io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData(false))).access$100__Lio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setHasReadPermission__VZ(stI1);
return;
    }
    X_571: for (;;) { IF: if (gt <= 571) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData || (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData = io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData(false))).access$100__Lio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setHasSubjectPermission__VZ(stI1);
return;
    }
    X_591: for (;;) { IF: if (gt <= 591) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData || (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData = io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData(false))).access$100__Lio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setCode__VLjava_lang_String_2(stA1);
return;
    }
    X_608: for (;;) { IF: if (gt <= 608) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData || (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData = io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData(false))).access$100__Lio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setMessage__VLjava_lang_String_2(stA1);
return;
    }
    X_625: for (;;) { IF: if (gt <= 625) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_2I = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 128; break IF; }
  case 1:{ gt = 133; break IF; }
  case 2:{ gt = 138; break IF; }
  case 3:{ gt = 143; break IF; }
  case 4:{ gt = 148; break IF; }
  case 5:{ gt = 153; break IF; }
  case 6:{ gt = 158; break IF; }
  case 7:{ gt = 163; break IF; }
  case 8:{ gt = 168; break IF; }
  case 9:{ gt = 173; break IF; }
  case 10:{ gt = 178; break IF; }
  case 11:{ gt = 183; break IF; }
  case 12:{ gt = 188; break IF; }
  case 13:{ gt = 193; break IF; }
  case 14:{ gt = 198; break IF; }
  case 15:{ gt = 203; break IF; }
  case 16:{ gt = 208; break IF; }
  case 17:{ gt = 213; break IF; }
  case 18:{ gt = 218; break IF; }
  case 19:{ gt = 226; break IF; }
  case 20:{ gt = 234; break IF; }
  case 21:{ gt = 239; break IF; }
  case 22:{ gt = 247; break IF; }
  case 23:{ gt = 255; break IF; }
  case 24:{ gt = 263; break IF; }
  case 25:{ gt = 271; break IF; }
  case 26:{ gt = 279; break IF; }
  case 27:{ gt = 284; break IF; }
  default: { gt = 289; break IF; }
}
    }
    X_128: for (;;) { IF: if (gt <= 128) {

var stA0 = lcA1.getItemId__Ljava_lang_String_2();
return stA0;
    }
    X_133: for (;;) { IF: if (gt <= 133) {

var stA0 = lcA1.getItemUserId__Ljava_lang_String_2();
return stA0;
    }
    X_138: for (;;) { IF: if (gt <= 138) {

var stA0 = lcA1.getItemName__Ljava_lang_String_2();
return stA0;
    }
    X_143: for (;;) { IF: if (gt <= 143) {

var stA0 = lcA1.getItemType__Ljava_lang_String_2();
return stA0;
    }
    X_148: for (;;) { IF: if (gt <= 148) {

var stA0 = lcA1.getBusinessModelName__Ljava_lang_String_2();
return stA0;
    }
    X_153: for (;;) { IF: if (gt <= 153) {

var stA0 = lcA1.getCollectionType__Ljava_lang_String_2();
return stA0;
    }
    X_158: for (;;) { IF: if (gt <= 158) {

var stA0 = lcA1.getMimetype__Ljava_lang_String_2();
return stA0;
    }
    X_163: for (;;) { IF: if (gt <= 163) {

var stA0 = lcA1.getItemTypeIconClass__Ljava_lang_String_2();
return stA0;
    }
    X_168: for (;;) { IF: if (gt <= 168) {

var stA0 = lcA1.getItemTypeIconColor__Ljava_lang_String_2();
return stA0;
    }
    X_173: for (;;) { IF: if (gt <= 173) {

var stA0 = lcA1.getExtendedItemType__Ljava_lang_String_2();
return stA0;
    }
    X_178: for (;;) { IF: if (gt <= 178) {

var stA0 = lcA1.getSizeToDisplay__Ljava_lang_String_2();
return stA0;
    }
    X_183: for (;;) { IF: if (gt <= 183) {

var stA0 = lcA1.getExtension__Ljava_lang_String_2();
return stA0;
    }
    X_188: for (;;) { IF: if (gt <= 188) {

var stA0 = lcA1.getCreatedBy__Ljava_lang_String_2();
return stA0;
    }
    X_193: for (;;) { IF: if (gt <= 193) {

var stA0 = lcA1.getModifiedTime__Ljava_lang_String_2();
return stA0;
    }
    X_198: for (;;) { IF: if (gt <= 198) {

var stA0 = lcA1.getVersion__Ljava_lang_String_2();
return stA0;
    }
    X_203: for (;;) { IF: if (gt <= 203) {

var stA0 = lcA1.getAvatar__Ljava_lang_String_2();
return stA0;
    }
    X_208: for (;;) { IF: if (gt <= 208) {

var stA0 = lcA1.getCreateDateInMS__Ljava_lang_String_2();
return stA0;
    }
    X_213: for (;;) { IF: if (gt <= 213) {

var stA0 = lcA1.getActualModifieddDate__Ljava_lang_String_2();
return stA0;
    }
    X_218: for (;;) { IF: if (gt <= 218) {

var stI0 = lcA1.isIsDynamicCollection__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_226: for (;;) { IF: if (gt <= 226) {

var stI0 = lcA1.isHasMore__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_234: for (;;) { IF: if (gt <= 234) {

var stA0 = lcA1.getNextPageNumber__Ljava_lang_String_2();
return stA0;
    }
    X_239: for (;;) { IF: if (gt <= 239) {

var stI0 = lcA1.isHasOwnerPermission__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_247: for (;;) { IF: if (gt <= 247) {

var stI0 = lcA1.isHasAdminPermission__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_255: for (;;) { IF: if (gt <= 255) {

var stI0 = lcA1.isHasWritePermission__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_263: for (;;) { IF: if (gt <= 263) {

var stI0 = lcA1.isHasReadPermission__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_271: for (;;) { IF: if (gt <= 271) {

var stI0 = lcA1.isHasSubjectPermission__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_279: for (;;) { IF: if (gt <= 279) {

var stA0 = lcA1.getCode__Ljava_lang_String_2();
return stA0;
    }
    X_284: for (;;) { IF: if (gt <= 284) {

var stA0 = lcA1.getMessage__Ljava_lang_String_2();
return stA0;
    }
    X_289: for (;;) { IF: if (gt <= 289) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.call__VLio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.searchbox.AutocompleteResultData');
var stA0 = (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData || (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData = io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
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
    m = c.read__Lio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData;
(refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData || (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData = io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_2Lio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData || (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData = io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData(false))).access$400__Lio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_2Lio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.searchbox.AutocompleteResultData');
lcA0.onMessage__VLio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.searchbox.AutocompleteResultData');
lcA0.onChange__VLio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.searchbox.AutocompleteResultData');
var stA0 = lcA0.cloneTo__Lio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_2Lio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.searchbox.AutocompleteResultData');
lcA0.call__VLio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.searchbox.AutocompleteResultData');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.searchbox.AutocompleteResultData');
lcA0.setValue__VLio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData$Html4JavaTypefillInstOf });
    io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/searchbox/AutocompleteResultData$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData;
    var refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$AutocompleteResultDataModel;
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
vm.io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData$Html4JavaType = io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData$Html4JavaType;

vm.java_lang_StringBuilder = link('java/lang/StringBuilder', function(f) { vm.java_lang_StringBuilder =  f; });
vm.java_lang_UnsupportedOperationException = link('java/lang/UnsupportedOperationException', function(f) { vm.java_lang_UnsupportedOperationException =  f; });
vm.java_lang_Boolean = link('java/lang/Boolean', function(f) { vm.java_lang_Boolean =  f; });
vm.java_lang_String = link('java/lang/String', function(f) { vm.java_lang_String =  f; });
vm.org_netbeans_html_json_spi_Proto$Type = link('org/netbeans/html/json/spi/Proto$Type', function(f) { vm.org_netbeans_html_json_spi_Proto$Type =  f; });

function io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$AutocompleteResultDataModel() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$AutocompleteResultDataModel;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$AutocompleteResultDataModel_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$AutocompleteResultDataModel_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$AutocompleteResultDataModel_this$0'] = lcA1;
return;

};
CLS['cons__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$AutocompleteResultDataModelfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$AutocompleteResultDataModel', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$AutocompleteResultDataModelfillInstOf });
    io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$AutocompleteResultDataModelfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/searchbox/SearchBoxComponent$AutocompleteResultDataModel';
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
    this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$AutocompleteResultDataModel_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$AutocompleteResultDataModel = registerClass(exports,'io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$AutocompleteResultDataModel',io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$AutocompleteResultDataModel);


function io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto']; };
  m = c._prop_itemId = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemId'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemId']; };
  m = c._prop_itemUserId = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemUserId'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemUserId']; };
  m = c._prop_itemName = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemName'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemName']; };
  m = c._prop_itemType = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemType'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemType']; };
  m = c._prop_businessModelName = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_businessModelName'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_businessModelName']; };
  m = c._prop_collectionType = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_collectionType'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_collectionType']; };
  m = c._prop_mimetype = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_mimetype'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_mimetype']; };
  m = c._prop_itemTypeIconClass = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemTypeIconClass'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemTypeIconClass']; };
  m = c._prop_itemTypeIconColor = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemTypeIconColor'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemTypeIconColor']; };
  m = c._prop_extendedItemType = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_extendedItemType'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_extendedItemType']; };
  m = c._prop_sizeToDisplay = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_sizeToDisplay'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_sizeToDisplay']; };
  m = c._prop_extension = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_extension'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_extension']; };
  m = c._prop_createdBy = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_createdBy'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_createdBy']; };
  m = c._prop_modifiedTime = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_modifiedTime'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_modifiedTime']; };
  m = c._prop_version = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_version'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_version']; };
  m = c._prop_avatar = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_avatar'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_avatar']; };
  m = c._prop_createDateInMS = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_createDateInMS'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_createDateInMS']; };
  m = c._prop_actualModifieddDate = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_actualModifieddDate'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_actualModifieddDate']; };
  m = c._prop_isDynamicCollection = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_isDynamicCollection'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_isDynamicCollection']; };
  m = c._prop_hasMore = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasMore'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasMore']; };
  m = c._prop_nextPageNumber = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_nextPageNumber'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_nextPageNumber']; };
  m = c._prop_hasOwnerPermission = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasOwnerPermission'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasOwnerPermission']; };
  m = c._prop_hasAdminPermission = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasAdminPermission'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasAdminPermission']; };
  m = c._prop_hasWritePermission = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasWritePermission'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasWritePermission']; };
  m = c._prop_hasReadPermission = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasReadPermission'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasReadPermission']; };
  m = c._prop_hasSubjectPermission = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasSubjectPermission'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasSubjectPermission']; };
  m = c._prop_code = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_code'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_code']; };
  m = c._prop_message = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_message'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_message']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$AutocompleteResultDataModel || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$AutocompleteResultDataModel = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$AutocompleteResultDataModel(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.getItemId__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto'],"itemId");
return lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemId'];

};
c['getItemId__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemId__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemId'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemId'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto'],"itemId", lcA2, lcA1);
return;

    }
}}
};
c['setItemId__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getItemUserId__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto'],"itemUserId");
return lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemUserId'];

};
c['getItemUserId__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemUserId__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemUserId'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemUserId'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto'],"itemUserId", lcA2, lcA1);
return;

    }
}}
};
c['setItemUserId__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getItemName__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto'],"itemName");
return lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemName'];

};
c['getItemName__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemName__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemName'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemName'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto'],"itemName", lcA2, lcA1);
return;

    }
}}
};
c['setItemName__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getItemType__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto'],"itemType");
return lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemType'];

};
c['getItemType__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemType__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemType'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemType'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto'],"itemType", lcA2, lcA1);
return;

    }
}}
};
c['setItemType__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getBusinessModelName__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto'],"businessModelName");
return lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_businessModelName'];

};
c['getBusinessModelName__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setBusinessModelName__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_businessModelName'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_businessModelName'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto'],"businessModelName", lcA2, lcA1);
return;

    }
}}
};
c['setBusinessModelName__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getCollectionType__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto'],"collectionType");
return lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_collectionType'];

};
c['getCollectionType__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setCollectionType__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_collectionType'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_collectionType'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto'],"collectionType", lcA2, lcA1);
return;

    }
}}
};
c['setCollectionType__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getMimetype__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto'],"mimetype");
return lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_mimetype'];

};
c['getMimetype__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setMimetype__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_mimetype'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_mimetype'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto'],"mimetype", lcA2, lcA1);
return;

    }
}}
};
c['setMimetype__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getItemTypeIconClass__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto'],"itemTypeIconClass");
return lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemTypeIconClass'];

};
c['getItemTypeIconClass__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemTypeIconClass__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemTypeIconClass'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemTypeIconClass'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto'],"itemTypeIconClass", lcA2, lcA1);
return;

    }
}}
};
c['setItemTypeIconClass__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getItemTypeIconColor__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto'],"itemTypeIconColor");
return lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemTypeIconColor'];

};
c['getItemTypeIconColor__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemTypeIconColor__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemTypeIconColor'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemTypeIconColor'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto'],"itemTypeIconColor", lcA2, lcA1);
return;

    }
}}
};
c['setItemTypeIconColor__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getExtendedItemType__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto'],"extendedItemType");
return lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_extendedItemType'];

};
c['getExtendedItemType__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setExtendedItemType__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_extendedItemType'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_extendedItemType'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto'],"extendedItemType", lcA2, lcA1);
return;

    }
}}
};
c['setExtendedItemType__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getSizeToDisplay__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto'],"sizeToDisplay");
return lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_sizeToDisplay'];

};
c['getSizeToDisplay__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setSizeToDisplay__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_sizeToDisplay'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_sizeToDisplay'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto'],"sizeToDisplay", lcA2, lcA1);
return;

    }
}}
};
c['setSizeToDisplay__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getExtension__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto'],"extension");
return lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_extension'];

};
c['getExtension__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setExtension__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_extension'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_extension'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto'],"extension", lcA2, lcA1);
return;

    }
}}
};
c['setExtension__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getCreatedBy__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto'],"createdBy");
return lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_createdBy'];

};
c['getCreatedBy__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setCreatedBy__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_createdBy'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_createdBy'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto'],"createdBy", lcA2, lcA1);
return;

    }
}}
};
c['setCreatedBy__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getModifiedTime__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto'],"modifiedTime");
return lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_modifiedTime'];

};
c['getModifiedTime__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setModifiedTime__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_modifiedTime'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_modifiedTime'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto'],"modifiedTime", lcA2, lcA1);
return;

    }
}}
};
c['setModifiedTime__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getVersion__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto'],"version");
return lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_version'];

};
c['getVersion__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setVersion__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_version'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_version'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto'],"version", lcA2, lcA1);
return;

    }
}}
};
c['setVersion__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getAvatar__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto'],"avatar");
return lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_avatar'];

};
c['getAvatar__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setAvatar__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_avatar'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_avatar'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto'],"avatar", lcA2, lcA1);
return;

    }
}}
};
c['setAvatar__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getCreateDateInMS__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto'],"createDateInMS");
return lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_createDateInMS'];

};
c['getCreateDateInMS__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setCreateDateInMS__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_createDateInMS'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_createDateInMS'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto'],"createDateInMS", lcA2, lcA1);
return;

    }
}}
};
c['setCreateDateInMS__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getActualModifieddDate__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto'],"actualModifieddDate");
return lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_actualModifieddDate'];

};
c['getActualModifieddDate__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setActualModifieddDate__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_actualModifieddDate'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_actualModifieddDate'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto'],"actualModifieddDate", lcA2, lcA1);
return;

    }
}}
};
c['setActualModifieddDate__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isIsDynamicCollection__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto'],"isDynamicCollection");
return lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_isDynamicCollection'];

};
c['isIsDynamicCollection__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setIsDynamicCollection__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_isDynamicCollection']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_isDynamicCollection'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto'];var stA1 = "isDynamicCollection";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setIsDynamicCollection__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isHasMore__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto'],"hasMore");
return lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasMore'];

};
c['isHasMore__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setHasMore__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasMore']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasMore'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto'];var stA1 = "hasMore";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setHasMore__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getNextPageNumber__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto'],"nextPageNumber");
return lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_nextPageNumber'];

};
c['getNextPageNumber__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setNextPageNumber__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_nextPageNumber'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_nextPageNumber'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto'],"nextPageNumber", lcA2, lcA1);
return;

    }
}}
};
c['setNextPageNumber__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isHasOwnerPermission__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto'],"hasOwnerPermission");
return lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasOwnerPermission'];

};
c['isHasOwnerPermission__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setHasOwnerPermission__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasOwnerPermission']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasOwnerPermission'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto'];var stA1 = "hasOwnerPermission";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
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
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto'],"hasAdminPermission");
return lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasAdminPermission'];

};
c['isHasAdminPermission__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setHasAdminPermission__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasAdminPermission']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasAdminPermission'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto'];var stA1 = "hasAdminPermission";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
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
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto'],"hasWritePermission");
return lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasWritePermission'];

};
c['isHasWritePermission__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setHasWritePermission__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasWritePermission']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasWritePermission'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto'];var stA1 = "hasWritePermission";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
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
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto'],"hasReadPermission");
return lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasReadPermission'];

};
c['isHasReadPermission__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setHasReadPermission__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasReadPermission']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasReadPermission'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto'];var stA1 = "hasReadPermission";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
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
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto'],"hasSubjectPermission");
return lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasSubjectPermission'];

};
c['isHasSubjectPermission__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setHasSubjectPermission__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasSubjectPermission']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasSubjectPermission'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto'];var stA1 = "hasSubjectPermission";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setHasSubjectPermission__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getCode__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto'],"code");
return lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_code'];

};
c['getCode__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setCode__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_code'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_code'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto'],"code", lcA2, lcA1);
return;

    }
}}
};
c['setCode__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getMessage__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto'],"message");
return lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_message'];

};
c['getMessage__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setMessage__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_message'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_message'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto'],"message", lcA2, lcA1);
return;

    }
}}
};
c['setMessage__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2(c._TYPE(),lcA0, lcA1);
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto'] = stA1;
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
    m = CLS.cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2ZZLjava_lang_String_2ZZZZZLjava_lang_String_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3, lcA4, lcA5, lcA6, lcA7, lcA8, lcA9, lcA10, lcA11, lcA12, lcA13, lcA14, lcA15, lcA16, lcA17, lcA18, lcI19, lcI20, lcA21, lcI22, lcI23, lcI24, lcI25, lcI26, lcA27, lcA28) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemId'] = lcA1;
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemUserId'] = lcA2;
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemName'] = lcA3;
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemType'] = lcA4;
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_businessModelName'] = lcA5;
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_collectionType'] = lcA6;
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_mimetype'] = lcA7;
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemTypeIconClass'] = lcA8;
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemTypeIconColor'] = lcA9;
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_extendedItemType'] = lcA10;
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_sizeToDisplay'] = lcA11;
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_extension'] = lcA12;
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_createdBy'] = lcA13;
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_modifiedTime'] = lcA14;
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_version'] = lcA15;
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_avatar'] = lcA16;
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_createDateInMS'] = lcA17;
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_actualModifieddDate'] = lcA18;
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_isDynamicCollection'] = lcI19;
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasMore'] = lcI20;
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_nextPageNumber'] = lcA21;
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasOwnerPermission'] = lcI22;
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasAdminPermission'] = lcI23;
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasWritePermission'] = lcI24;
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasReadPermission'] = lcI25;
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasSubjectPermission'] = lcI26;
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_code'] = lcA27;
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_message'] = lcA28;
return;

};
CLS['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2ZZLjava_lang_String_2ZZZZZLjava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, (28));
var lcA3 = stA0;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, (28));
Array.at(stA2, 0, "itemId");
Array.at(stA2, 1, "itemUserId");
Array.at(stA2, 2, "itemName");
Array.at(stA2, 3, "itemType");
Array.at(stA2, 4, "businessModelName");
Array.at(stA2, 5, "collectionType");
Array.at(stA2, (6), "mimetype");
Array.at(stA2, (7), "itemTypeIconClass");
Array.at(stA2, (8), "itemTypeIconColor");
Array.at(stA2, (9), "extendedItemType");
Array.at(stA2, (10), "sizeToDisplay");
Array.at(stA2, (11), "extension");
Array.at(stA2, (12), "createdBy");
Array.at(stA2, (13), "modifiedTime");
Array.at(stA2, (14), "version");
Array.at(stA2, (15), "avatar");
Array.at(stA2, (16), "createDateInMS");
Array.at(stA2, (17), "actualModifieddDate");
Array.at(stA2, (18), "isDynamicCollection");
Array.at(stA2, (19), "hasMore");
Array.at(stA2, (20), "nextPageNumber");
Array.at(stA2, (21), "hasOwnerPermission");
Array.at(stA2, (22), "hasAdminPermission");
Array.at(stA2, (23), "hasWritePermission");
Array.at(stA2, (24), "hasReadPermission");
Array.at(stA2, (25), "hasSubjectPermission");
Array.at(stA2, (26), "code");
Array.at(stA2, (27), "message");
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
if ((lcA3[0] || Array.at(lcA3, 0)) !== null && !(lcA3[0] || Array.at(lcA3, 0))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[0] || Array.at(lcA3, 0)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemId'] = (lcA3[0] || Array.at(lcA3, 0));
if ((lcA3[1] || Array.at(lcA3, 1)) !== null && !(lcA3[1] || Array.at(lcA3, 1))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[1] || Array.at(lcA3, 1)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemUserId'] = (lcA3[1] || Array.at(lcA3, 1));
if ((lcA3[2] || Array.at(lcA3, 2)) !== null && !(lcA3[2] || Array.at(lcA3, 2))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[2] || Array.at(lcA3, 2)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemName'] = (lcA3[2] || Array.at(lcA3, 2));
if ((lcA3[3] || Array.at(lcA3, 3)) !== null && !(lcA3[3] || Array.at(lcA3, 3))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[3] || Array.at(lcA3, 3)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemType'] = (lcA3[3] || Array.at(lcA3, 3));
if ((lcA3[4] || Array.at(lcA3, 4)) !== null && !(lcA3[4] || Array.at(lcA3, 4))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[4] || Array.at(lcA3, 4)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_businessModelName'] = (lcA3[4] || Array.at(lcA3, 4));
if ((lcA3[5] || Array.at(lcA3, 5)) !== null && !(lcA3[5] || Array.at(lcA3, 5))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[5] || Array.at(lcA3, 5)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_collectionType'] = (lcA3[5] || Array.at(lcA3, 5));
if ((lcA3[(6)] || Array.at(lcA3, (6))) !== null && !(lcA3[(6)] || Array.at(lcA3, (6)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(6)] || Array.at(lcA3, (6))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_mimetype'] = (lcA3[(6)] || Array.at(lcA3, (6)));
if ((lcA3[(7)] || Array.at(lcA3, (7))) !== null && !(lcA3[(7)] || Array.at(lcA3, (7)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(7)] || Array.at(lcA3, (7))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemTypeIconClass'] = (lcA3[(7)] || Array.at(lcA3, (7)));
if ((lcA3[(8)] || Array.at(lcA3, (8))) !== null && !(lcA3[(8)] || Array.at(lcA3, (8)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(8)] || Array.at(lcA3, (8))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemTypeIconColor'] = (lcA3[(8)] || Array.at(lcA3, (8)));
if ((lcA3[(9)] || Array.at(lcA3, (9))) !== null && !(lcA3[(9)] || Array.at(lcA3, (9)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(9)] || Array.at(lcA3, (9))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_extendedItemType'] = (lcA3[(9)] || Array.at(lcA3, (9)));
if ((lcA3[(10)] || Array.at(lcA3, (10))) !== null && !(lcA3[(10)] || Array.at(lcA3, (10)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(10)] || Array.at(lcA3, (10))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_sizeToDisplay'] = (lcA3[(10)] || Array.at(lcA3, (10)));
if ((lcA3[(11)] || Array.at(lcA3, (11))) !== null && !(lcA3[(11)] || Array.at(lcA3, (11)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(11)] || Array.at(lcA3, (11))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_extension'] = (lcA3[(11)] || Array.at(lcA3, (11)));
if ((lcA3[(12)] || Array.at(lcA3, (12))) !== null && !(lcA3[(12)] || Array.at(lcA3, (12)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(12)] || Array.at(lcA3, (12))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_createdBy'] = (lcA3[(12)] || Array.at(lcA3, (12)));
if ((lcA3[(13)] || Array.at(lcA3, (13))) !== null && !(lcA3[(13)] || Array.at(lcA3, (13)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(13)] || Array.at(lcA3, (13))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_modifiedTime'] = (lcA3[(13)] || Array.at(lcA3, (13)));
if ((lcA3[(14)] || Array.at(lcA3, (14))) !== null && !(lcA3[(14)] || Array.at(lcA3, (14)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(14)] || Array.at(lcA3, (14))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_version'] = (lcA3[(14)] || Array.at(lcA3, (14)));
if ((lcA3[(15)] || Array.at(lcA3, (15))) !== null && !(lcA3[(15)] || Array.at(lcA3, (15)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(15)] || Array.at(lcA3, (15))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_avatar'] = (lcA3[(15)] || Array.at(lcA3, (15)));
if ((lcA3[(16)] || Array.at(lcA3, (16))) !== null && !(lcA3[(16)] || Array.at(lcA3, (16)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(16)] || Array.at(lcA3, (16))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_createDateInMS'] = (lcA3[(16)] || Array.at(lcA3, (16)));
if ((lcA3[(17)] || Array.at(lcA3, (17))) !== null && !(lcA3[(17)] || Array.at(lcA3, (17)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(17)] || Array.at(lcA3, (17))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_actualModifieddDate'] = (lcA3[(17)] || Array.at(lcA3, (17)));
var stA0 = lcA0;if (((lcA3[(18)] || Array.at(lcA3, (18)))) !== null) { gt = 391; break IF; }
var stI1 = 0;{ gt = 404; break IF; }
    }
    X_391: for (;;) { IF: if (gt <= 391) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(18)] || Array.at(lcA3, (18))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_404: for (;;) { IF: if (gt <= 404) {
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_isDynamicCollection'] = stI1;
var stA0 = lcA0;if (((lcA3[(19)] || Array.at(lcA3, (19)))) !== null) { gt = 419; break IF; }
var stI1 = 0;{ gt = 432; break IF; }
    }
    X_419: for (;;) { IF: if (gt <= 419) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(19)] || Array.at(lcA3, (19))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_432: for (;;) { IF: if (gt <= 432) {
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasMore'] = stI1;
if ((lcA3[(20)] || Array.at(lcA3, (20))) !== null && !(lcA3[(20)] || Array.at(lcA3, (20)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(20)] || Array.at(lcA3, (20))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_nextPageNumber'] = (lcA3[(20)] || Array.at(lcA3, (20)));
var stA0 = lcA0;if (((lcA3[(21)] || Array.at(lcA3, (21)))) !== null) { gt = 458; break IF; }
var stI1 = 0;{ gt = 471; break IF; }
    }
    X_458: for (;;) { IF: if (gt <= 458) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(21)] || Array.at(lcA3, (21))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_471: for (;;) { IF: if (gt <= 471) {
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasOwnerPermission'] = stI1;
var stA0 = lcA0;if (((lcA3[(22)] || Array.at(lcA3, (22)))) !== null) { gt = 486; break IF; }
var stI1 = 0;{ gt = 499; break IF; }
    }
    X_486: for (;;) { IF: if (gt <= 486) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(22)] || Array.at(lcA3, (22))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_499: for (;;) { IF: if (gt <= 499) {
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasAdminPermission'] = stI1;
var stA0 = lcA0;if (((lcA3[(23)] || Array.at(lcA3, (23)))) !== null) { gt = 514; break IF; }
var stI1 = 0;{ gt = 527; break IF; }
    }
    X_514: for (;;) { IF: if (gt <= 514) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(23)] || Array.at(lcA3, (23))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_527: for (;;) { IF: if (gt <= 527) {
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasWritePermission'] = stI1;
var stA0 = lcA0;if (((lcA3[(24)] || Array.at(lcA3, (24)))) !== null) { gt = 542; break IF; }
var stI1 = 0;{ gt = 555; break IF; }
    }
    X_542: for (;;) { IF: if (gt <= 542) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(24)] || Array.at(lcA3, (24))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_555: for (;;) { IF: if (gt <= 555) {
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasReadPermission'] = stI1;
var stA0 = lcA0;if (((lcA3[(25)] || Array.at(lcA3, (25)))) !== null) { gt = 570; break IF; }
var stI1 = 0;{ gt = 583; break IF; }
    }
    X_570: for (;;) { IF: if (gt <= 570) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(25)] || Array.at(lcA3, (25))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_583: for (;;) { IF: if (gt <= 583) {
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasSubjectPermission'] = stI1;
if ((lcA3[(26)] || Array.at(lcA3, (26))) !== null && !(lcA3[(26)] || Array.at(lcA3, (26)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(26)] || Array.at(lcA3, (26))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_code'] = (lcA3[(26)] || Array.at(lcA3, (26)));
if ((lcA3[(27)] || Array.at(lcA3, (27))) !== null && !(lcA3[(27)] || Array.at(lcA3, (27)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(27)] || Array.at(lcA3, (27))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_message'] = (lcA3[(27)] || Array.at(lcA3, (27)));
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"businessModelName");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getBusinessModelName__Ljava_lang_String_2();
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"mimetype");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getMimetype__Ljava_lang_String_2();
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"extendedItemType");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getExtendedItemType__Ljava_lang_String_2();
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"extension");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getExtension__Ljava_lang_String_2();
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"modifiedTime");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getModifiedTime__Ljava_lang_String_2();
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"avatar");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getAvatar__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"createDateInMS");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getCreateDateInMS__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"actualModifieddDate");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getActualModifieddDate__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"isDynamicCollection");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isIsDynamicCollection__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"nextPageNumber");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getNextPageNumber__Ljava_lang_String_2();
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"code");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getCode__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"message");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getMessage__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(125));
var stA0 = invoker.toString__Ljava_lang_String_2(lcA1);
return stA0;

};
c['toString__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto']);
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = lcA0.getItemId__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemId'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getItemUserId__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemUserId'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getItemName__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemName'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getItemType__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemType'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getBusinessModelName__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_businessModelName'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getCollectionType__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_collectionType'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getMimetype__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_mimetype'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getItemTypeIconClass__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemTypeIconClass'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getItemTypeIconColor__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemTypeIconColor'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getExtendedItemType__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_extendedItemType'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getSizeToDisplay__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_sizeToDisplay'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getExtension__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_extension'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getCreatedBy__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_createdBy'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getModifiedTime__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_modifiedTime'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getVersion__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_version'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getAvatar__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_avatar'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getCreateDateInMS__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_createDateInMS'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getActualModifieddDate__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_actualModifieddDate'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isIsDynamicCollection__Z();
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_isDynamicCollection'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isHasMore__Z();
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasMore'] = stI1;
var stA0 = lcA2;var stA1 = lcA0.getNextPageNumber__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_nextPageNumber'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isHasOwnerPermission__Z();
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasOwnerPermission'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isHasAdminPermission__Z();
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasAdminPermission'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isHasWritePermission__Z();
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasWritePermission'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isHasReadPermission__Z();
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasReadPermission'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isHasSubjectPermission__Z();
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasSubjectPermission'] = stI1;
var stA0 = lcA2;var stA1 = lcA0.getCode__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_code'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getMessage__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_message'] = stA1;
return lcA2;

};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_2 = function() {
  var  lcA0 = this;
invoker.applyBindings__V(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto']);
return lcA0;

};
c['applyBindings__Lio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_2'] = m;

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

var stI0 = lcA1 != null && lcA1['$instOf_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.searchbox.AutocompleteResultData');
var lcA2 = lcA1;
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemId'], lcA2['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemId']);
if ((stI0) != 0) { gt = 40; break IF; }
return 0;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemUserId'], lcA2['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemUserId']);
if ((stI0) != 0) { gt = 59; break IF; }
return 0;
    }
    X_59: for (;;) { IF: if (gt <= 59) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemName'], lcA2['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemName']);
if ((stI0) != 0) { gt = 78; break IF; }
return 0;
    }
    X_78: for (;;) { IF: if (gt <= 78) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemType'], lcA2['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemType']);
if ((stI0) != 0) { gt = 97; break IF; }
return 0;
    }
    X_97: for (;;) { IF: if (gt <= 97) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_businessModelName'], lcA2['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_businessModelName']);
if ((stI0) != 0) { gt = 116; break IF; }
return 0;
    }
    X_116: for (;;) { IF: if (gt <= 116) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_collectionType'], lcA2['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_collectionType']);
if ((stI0) != 0) { gt = 135; break IF; }
return 0;
    }
    X_135: for (;;) { IF: if (gt <= 135) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_mimetype'], lcA2['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_mimetype']);
if ((stI0) != 0) { gt = 154; break IF; }
return 0;
    }
    X_154: for (;;) { IF: if (gt <= 154) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemTypeIconClass'], lcA2['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemTypeIconClass']);
if ((stI0) != 0) { gt = 173; break IF; }
return 0;
    }
    X_173: for (;;) { IF: if (gt <= 173) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemTypeIconColor'], lcA2['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemTypeIconColor']);
if ((stI0) != 0) { gt = 192; break IF; }
return 0;
    }
    X_192: for (;;) { IF: if (gt <= 192) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_extendedItemType'], lcA2['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_extendedItemType']);
if ((stI0) != 0) { gt = 211; break IF; }
return 0;
    }
    X_211: for (;;) { IF: if (gt <= 211) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_sizeToDisplay'], lcA2['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_sizeToDisplay']);
if ((stI0) != 0) { gt = 230; break IF; }
return 0;
    }
    X_230: for (;;) { IF: if (gt <= 230) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_extension'], lcA2['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_extension']);
if ((stI0) != 0) { gt = 249; break IF; }
return 0;
    }
    X_249: for (;;) { IF: if (gt <= 249) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_createdBy'], lcA2['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_createdBy']);
if ((stI0) != 0) { gt = 268; break IF; }
return 0;
    }
    X_268: for (;;) { IF: if (gt <= 268) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_modifiedTime'], lcA2['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_modifiedTime']);
if ((stI0) != 0) { gt = 287; break IF; }
return 0;
    }
    X_287: for (;;) { IF: if (gt <= 287) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_version'], lcA2['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_version']);
if ((stI0) != 0) { gt = 306; break IF; }
return 0;
    }
    X_306: for (;;) { IF: if (gt <= 306) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_avatar'], lcA2['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_avatar']);
if ((stI0) != 0) { gt = 325; break IF; }
return 0;
    }
    X_325: for (;;) { IF: if (gt <= 325) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_createDateInMS'], lcA2['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_createDateInMS']);
if ((stI0) != 0) { gt = 344; break IF; }
return 0;
    }
    X_344: for (;;) { IF: if (gt <= 344) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_actualModifieddDate'], lcA2['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_actualModifieddDate']);
if ((stI0) != 0) { gt = 363; break IF; }
return 0;
    }
    X_363: for (;;) { IF: if (gt <= 363) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_isDynamicCollection']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_isDynamicCollection']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 388; break IF; }
return 0;
    }
    X_388: for (;;) { IF: if (gt <= 388) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasMore']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasMore']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 413; break IF; }
return 0;
    }
    X_413: for (;;) { IF: if (gt <= 413) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_nextPageNumber'], lcA2['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_nextPageNumber']);
if ((stI0) != 0) { gt = 432; break IF; }
return 0;
    }
    X_432: for (;;) { IF: if (gt <= 432) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasOwnerPermission']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasOwnerPermission']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 457; break IF; }
return 0;
    }
    X_457: for (;;) { IF: if (gt <= 457) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasAdminPermission']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasAdminPermission']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 482; break IF; }
return 0;
    }
    X_482: for (;;) { IF: if (gt <= 482) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasWritePermission']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasWritePermission']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 507; break IF; }
return 0;
    }
    X_507: for (;;) { IF: if (gt <= 507) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasReadPermission']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasReadPermission']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 532; break IF; }
return 0;
    }
    X_532: for (;;) { IF: if (gt <= 532) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasSubjectPermission']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasSubjectPermission']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 557; break IF; }
return 0;
    }
    X_557: for (;;) { IF: if (gt <= 557) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_code'], lcA2['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_code']);
if ((stI0) != 0) { gt = 576; break IF; }
return 0;
    }
    X_576: for (;;) { IF: if (gt <= 576) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_message'], lcA2['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_message']);
if ((stI0) != 0) { gt = 595; break IF; }
return 0;
    }
    X_595: for (;;) { IF: if (gt <= 595) {

return 1;

    }
}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
};
c['equals__ZLjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.hashCode__I = function() {
  var  lcA0 = this;
var stA0 = invoker.getName__Ljava_lang_String_2(c.constructor.$class);
var stI0 = invoker.hashCode__I(stA0);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemId'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemUserId'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemName'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemType'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_businessModelName'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_collectionType'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_mimetype'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemTypeIconClass'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemTypeIconColor'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_extendedItemType'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_sizeToDisplay'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_extension'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_createdBy'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_modifiedTime'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_version'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_avatar'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_createDateInMS'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_actualModifieddDate'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_isDynamicCollection']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasMore']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_nextPageNumber'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasOwnerPermission']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasAdminPermission']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasWritePermission']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasReadPermission']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasSubjectPermission']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_code'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_message'], lcI1);
var lcI1 = stI0;
return lcI1;

};
c['hashCode__I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Ljava_lang_Object_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0.clone__Lio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData$Html4JavaType_2 = function() {
return c._TYPE();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_2 = function(lcA0) {
return lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_2Lio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData$Html4JavaType;
(refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData$Html4JavaType || (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData$Html4JavaType = io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData$Html4JavaType(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultDatafillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultDatafillInstOf });
    io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultDatafillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/searchbox/AutocompleteResultData';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$AutocompleteResultDataModel;
    var refs_java_lang_Boolean;
    var refs_net_java_html_BrwsrCtx;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_proto'] = null;
    this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemId'] = null;
    this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemUserId'] = null;
    this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemName'] = null;
    this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemType'] = null;
    this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_businessModelName'] = null;
    this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_collectionType'] = null;
    this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_mimetype'] = null;
    this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemTypeIconClass'] = null;
    this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_itemTypeIconColor'] = null;
    this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_extendedItemType'] = null;
    this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_sizeToDisplay'] = null;
    this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_extension'] = null;
    this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_createdBy'] = null;
    this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_modifiedTime'] = null;
    this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_version'] = null;
    this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_avatar'] = null;
    this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_createDateInMS'] = null;
    this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_actualModifieddDate'] = null;
    this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_isDynamicCollection'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasMore'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_nextPageNumber'] = null;
    this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasOwnerPermission'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasAdminPermission'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasWritePermission'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasReadPermission'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_hasSubjectPermission'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_code'] = null;
    this['fld_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_prop_message'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData = registerClass(exports,'io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData',io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData);

vm.java_lang_Cloneable = link('java/lang/Cloneable', function(f) { vm.java_lang_Cloneable =  f; });
vm.net_java_html_BrwsrCtx = link('net/java/html/BrwsrCtx', function(f) { vm.net_java_html_BrwsrCtx =  f; });

function io_cloudoffice_platform_cockpit_searchbox_FilterType$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_searchbox_FilterType$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_searchbox_FilterType$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_searchbox_FilterType$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_searchbox_FilterType$1fillInstOf });
    io_cloudoffice_platform_cockpit_searchbox_FilterType$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/searchbox/FilterType$1';
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
vm.io_cloudoffice_platform_cockpit_searchbox_FilterType$1 = io_cloudoffice_platform_cockpit_searchbox_FilterType$1;


function io_cloudoffice_platform_cockpit_searchbox_FilterType$Html4JavaType() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_searchbox_FilterType$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_io_cloudoffice_platform_cockpit_searchbox_FilterType || (refs_io_cloudoffice_platform_cockpit_searchbox_FilterType = io_cloudoffice_platform_cockpit_searchbox_FilterType(false))).constructor.$class, (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$FilterTypeManager || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$FilterTypeManager = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$FilterTypeManager(false))).constructor.$class, 5, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemId", 0, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemType", 1, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemName", 2, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"filterType", 3, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"isSelected", 4, 0, 0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLio_cloudoffice_platform_cockpit_searchbox_FilterType_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
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

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_searchbox_FilterType || (refs_io_cloudoffice_platform_cockpit_searchbox_FilterType = io_cloudoffice_platform_cockpit_searchbox_FilterType(false))).access$100__Lio_cloudoffice_platform_cockpit_searchbox_FilterType$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemId__VLjava_lang_String_2(stA1);
return;
    }
    X_53: for (;;) { IF: if (gt <= 53) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_searchbox_FilterType || (refs_io_cloudoffice_platform_cockpit_searchbox_FilterType = io_cloudoffice_platform_cockpit_searchbox_FilterType(false))).access$100__Lio_cloudoffice_platform_cockpit_searchbox_FilterType$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemType__VLjava_lang_String_2(stA1);
return;
    }
    X_70: for (;;) { IF: if (gt <= 70) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_searchbox_FilterType || (refs_io_cloudoffice_platform_cockpit_searchbox_FilterType = io_cloudoffice_platform_cockpit_searchbox_FilterType(false))).access$100__Lio_cloudoffice_platform_cockpit_searchbox_FilterType$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemName__VLjava_lang_String_2(stA1);
return;
    }
    X_87: for (;;) { IF: if (gt <= 87) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_searchbox_FilterType || (refs_io_cloudoffice_platform_cockpit_searchbox_FilterType = io_cloudoffice_platform_cockpit_searchbox_FilterType(false))).access$100__Lio_cloudoffice_platform_cockpit_searchbox_FilterType$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setFilterType__VLjava_lang_String_2(stA1);
return;
    }
    X_104: for (;;) { IF: if (gt <= 104) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_searchbox_FilterType || (refs_io_cloudoffice_platform_cockpit_searchbox_FilterType = io_cloudoffice_platform_cockpit_searchbox_FilterType(false))).access$100__Lio_cloudoffice_platform_cockpit_searchbox_FilterType$Html4JavaType_2();
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
    m = c.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_searchbox_FilterType_2I = function(lcA1, lcI2) {
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
    m = c.call__VLio_cloudoffice_platform_cockpit_searchbox_FilterType_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_searchbox_FilterType']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.searchbox.FilterType');
var stA0 = (refs_io_cloudoffice_platform_cockpit_searchbox_FilterType || (refs_io_cloudoffice_platform_cockpit_searchbox_FilterType = io_cloudoffice_platform_cockpit_searchbox_FilterType(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_searchbox_FilterType_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLio_cloudoffice_platform_cockpit_searchbox_FilterType_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLio_cloudoffice_platform_cockpit_searchbox_FilterType_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
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
    m = c.read__Lio_cloudoffice_platform_cockpit_searchbox_FilterType_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_searchbox_FilterType;
(refs_io_cloudoffice_platform_cockpit_searchbox_FilterType || (refs_io_cloudoffice_platform_cockpit_searchbox_FilterType = io_cloudoffice_platform_cockpit_searchbox_FilterType(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_searchbox_FilterType$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lio_cloudoffice_platform_cockpit_searchbox_FilterType_2Lio_cloudoffice_platform_cockpit_searchbox_FilterType_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_searchbox_FilterType || (refs_io_cloudoffice_platform_cockpit_searchbox_FilterType = io_cloudoffice_platform_cockpit_searchbox_FilterType(false))).access$400__Lio_cloudoffice_platform_cockpit_searchbox_FilterType_2Lio_cloudoffice_platform_cockpit_searchbox_FilterType_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_searchbox_FilterType']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.searchbox.FilterType');
lcA0.onMessage__VLio_cloudoffice_platform_cockpit_searchbox_FilterType_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_searchbox_FilterType']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.searchbox.FilterType');
lcA0.onChange__VLio_cloudoffice_platform_cockpit_searchbox_FilterType_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lio_cloudoffice_platform_cockpit_searchbox_FilterType_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_searchbox_FilterType']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.searchbox.FilterType');
var stA0 = lcA0.cloneTo__Lio_cloudoffice_platform_cockpit_searchbox_FilterType_2Lio_cloudoffice_platform_cockpit_searchbox_FilterType_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_searchbox_FilterType']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.searchbox.FilterType');
lcA0.call__VLio_cloudoffice_platform_cockpit_searchbox_FilterType_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_searchbox_FilterType']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.searchbox.FilterType');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_searchbox_FilterType_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_searchbox_FilterType']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.searchbox.FilterType');
lcA0.setValue__VLio_cloudoffice_platform_cockpit_searchbox_FilterType_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_searchbox_FilterType$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_searchbox_FilterType$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_searchbox_FilterType$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_searchbox_FilterType$Html4JavaTypefillInstOf });
    io_cloudoffice_platform_cockpit_searchbox_FilterType$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/searchbox/FilterType$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_searchbox_FilterType;
    var refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$FilterTypeManager;
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
vm.io_cloudoffice_platform_cockpit_searchbox_FilterType$Html4JavaType = io_cloudoffice_platform_cockpit_searchbox_FilterType$Html4JavaType;


function io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$FilterTypeManager() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$FilterTypeManager;
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
    function io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$FilterTypeManagerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$FilterTypeManager', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$FilterTypeManagerfillInstOf });
    io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$FilterTypeManagerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/searchbox/SearchBoxComponent$FilterTypeManager';
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
vm.io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$FilterTypeManager = registerClass(exports,'io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$FilterTypeManager',io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$FilterTypeManager);


function io_cloudoffice_platform_cockpit_searchbox_FilterType() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_searchbox_FilterType;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_proto'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_proto']; };
  m = c._prop_itemId = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_prop_itemId'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_prop_itemId']; };
  m = c._prop_itemType = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_prop_itemType'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_prop_itemType']; };
  m = c._prop_itemName = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_prop_itemName'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_prop_itemName']; };
  m = c._prop_filterType = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_prop_filterType'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_prop_filterType']; };
  m = c._prop_isSelected = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_prop_isSelected'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_prop_isSelected']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$FilterTypeManager || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$FilterTypeManager = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$FilterTypeManager(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.getItemId__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_proto'],"itemId");
return lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_prop_itemId'];

};
c['getItemId__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemId__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_prop_itemId'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_prop_itemId'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_proto'],"itemId", lcA2, lcA1);
return;

    }
}}
};
c['setItemId__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getItemType__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_proto'],"itemType");
return lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_prop_itemType'];

};
c['getItemType__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemType__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_prop_itemType'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_prop_itemType'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_proto'],"itemType", lcA2, lcA1);
return;

    }
}}
};
c['setItemType__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getItemName__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_proto'],"itemName");
return lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_prop_itemName'];

};
c['getItemName__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemName__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_prop_itemName'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_prop_itemName'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_proto'],"itemName", lcA2, lcA1);
return;

    }
}}
};
c['setItemName__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getFilterType__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_proto'],"filterType");
return lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_prop_filterType'];

};
c['getFilterType__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setFilterType__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_prop_filterType'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_prop_filterType'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_proto'],"filterType", lcA2, lcA1);
return;

    }
}}
};
c['setFilterType__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isIsSelected__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_proto'],"isSelected");
return lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_prop_isSelected'];

};
c['isIsSelected__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setIsSelected__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_prop_isSelected']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_prop_isSelected'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_proto'];var stA1 = "isSelected";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
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
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_proto'] = stA1;
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
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_prop_itemId'] = lcA1;
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_prop_itemType'] = lcA2;
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_prop_itemName'] = lcA3;
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_prop_filterType'] = lcA4;
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_prop_isSelected'] = lcI5;
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
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 5);
Array.at(stA2, 0, "itemId");
Array.at(stA2, 1, "itemType");
Array.at(stA2, 2, "itemName");
Array.at(stA2, 3, "filterType");
Array.at(stA2, 4, "isSelected");
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
if ((lcA3[0] || Array.at(lcA3, 0)) !== null && !(lcA3[0] || Array.at(lcA3, 0))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[0] || Array.at(lcA3, 0)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_prop_itemId'] = (lcA3[0] || Array.at(lcA3, 0));
if ((lcA3[1] || Array.at(lcA3, 1)) !== null && !(lcA3[1] || Array.at(lcA3, 1))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[1] || Array.at(lcA3, 1)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_prop_itemType'] = (lcA3[1] || Array.at(lcA3, 1));
if ((lcA3[2] || Array.at(lcA3, 2)) !== null && !(lcA3[2] || Array.at(lcA3, 2))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[2] || Array.at(lcA3, 2)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_prop_itemName'] = (lcA3[2] || Array.at(lcA3, 2));
if ((lcA3[3] || Array.at(lcA3, 3)) !== null && !(lcA3[3] || Array.at(lcA3, 3))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[3] || Array.at(lcA3, 3)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_prop_filterType'] = (lcA3[3] || Array.at(lcA3, 3));
var stA0 = lcA0;if (((lcA3[4] || Array.at(lcA3, 4))) !== null) { gt = 99; break IF; }
var stI1 = 0;{ gt = 111; break IF; }
    }
    X_99: for (;;) { IF: if (gt <= 99) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[4] || Array.at(lcA3, 4)));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_111: for (;;) { IF: if (gt <= 111) {
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_prop_isSelected'] = stI1;
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
    m = c.clone__Lio_cloudoffice_platform_cockpit_searchbox_FilterType_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_proto']);
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_searchbox_FilterType_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lio_cloudoffice_platform_cockpit_searchbox_FilterType_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_searchbox_FilterType_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_searchbox_FilterType;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = lcA0.getItemId__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_prop_itemId'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getItemType__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_prop_itemType'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getItemName__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_prop_itemName'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getFilterType__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_prop_filterType'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isIsSelected__Z();
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_prop_isSelected'] = stI1;
return lcA2;

};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lio_cloudoffice_platform_cockpit_searchbox_FilterType_2 = function() {
  var  lcA0 = this;
invoker.applyBindings__V(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_proto']);
return lcA0;

};
c['applyBindings__Lio_cloudoffice_platform_cockpit_searchbox_FilterType_2'] = m;

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

var stI0 = lcA1 != null && lcA1['$instOf_io_cloudoffice_platform_cockpit_searchbox_FilterType'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_searchbox_FilterType']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.searchbox.FilterType');
var lcA2 = lcA1;
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_prop_itemId'], lcA2['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_prop_itemId']);
if ((stI0) != 0) { gt = 40; break IF; }
return 0;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_prop_itemType'], lcA2['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_prop_itemType']);
if ((stI0) != 0) { gt = 59; break IF; }
return 0;
    }
    X_59: for (;;) { IF: if (gt <= 59) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_prop_itemName'], lcA2['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_prop_itemName']);
if ((stI0) != 0) { gt = 78; break IF; }
return 0;
    }
    X_78: for (;;) { IF: if (gt <= 78) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_prop_filterType'], lcA2['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_prop_filterType']);
if ((stI0) != 0) { gt = 97; break IF; }
return 0;
    }
    X_97: for (;;) { IF: if (gt <= 97) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_prop_isSelected']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_prop_isSelected']);
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
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_prop_itemId'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_prop_itemType'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_prop_itemName'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_prop_filterType'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_prop_isSelected']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
return lcI1;

};
c['hashCode__I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Ljava_lang_Object_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0.clone__Lio_cloudoffice_platform_cockpit_searchbox_FilterType_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lio_cloudoffice_platform_cockpit_searchbox_FilterType$Html4JavaType_2 = function() {
return c._TYPE();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_searchbox_FilterType_2 = function(lcA0) {
return lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_searchbox_FilterType$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lio_cloudoffice_platform_cockpit_searchbox_FilterType_2Lio_cloudoffice_platform_cockpit_searchbox_FilterType_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_searchbox_FilterType_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_searchbox_FilterType$Html4JavaType;
(refs_io_cloudoffice_platform_cockpit_searchbox_FilterType$Html4JavaType || (refs_io_cloudoffice_platform_cockpit_searchbox_FilterType$Html4JavaType = io_cloudoffice_platform_cockpit_searchbox_FilterType$Html4JavaType(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_searchbox_FilterType$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_searchbox_FilterTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_searchbox_FilterType', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_searchbox_FilterTypefillInstOf });
    io_cloudoffice_platform_cockpit_searchbox_FilterTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/searchbox/FilterType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$FilterTypeManager;
    var refs_java_lang_Boolean;
    var refs_net_java_html_BrwsrCtx;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_searchbox_FilterType$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_proto'] = null;
    this['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_prop_itemId'] = null;
    this['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_prop_itemType'] = null;
    this['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_prop_itemName'] = null;
    this['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_prop_filterType'] = null;
    this['fld_io_cloudoffice_platform_cockpit_searchbox_FilterType_prop_isSelected'] = 0;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_searchbox_FilterType = registerClass(exports,'io_cloudoffice_platform_cockpit_searchbox_FilterType',io_cloudoffice_platform_cockpit_searchbox_FilterType);


function io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$1;
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
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.searchbox.SearchBoxView');
var lcA2 = stA0;
if ((null) === (lcA1)) { gt = 73; break IF; }
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Z'](lcA1, 1);
var stA0 = invoker.getArray__Ljava_util_List_2(stA0);
var lcA3 = stA0;
var stA0 = lcA2.getAutocompleteresults__Ljava_util_List_2();
invoker.clear__V(stA0);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA3);
var lcA4 = stA0;
    }
    X_42: for (;;) { IF: if (gt <= 42) {

var stI0 = invoker.hasNext__Z(lcA4);
if ((stI0) == 0) { gt = 73; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA4);
if (stA0 !== null && !stA0['$instOf_java_util_Map']) vm.java_lang_Class(false).castEx(stA0, 'java.util.Map');
var lcA5 = stA0;
(refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent(false))).addItemToAutocompleteResultList__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2Ljava_util_Map_2(lcA2, lcA5);
{ gt = 0; continue X_42; }
    }
    X_73: for (;;) { IF: if (gt <= 73) {

var stA0 = lcA2.getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
invoker.setActive__VZ(stA0,0);
return;

    }
}}}
};
c['process__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$1fillInstOf });
    io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/searchbox/SearchBoxComponent$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_ServerCallback;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$1 = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$1;


function io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_api_AbstractComponent(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = c.getInstance__Lio_cloudoffice_platform_cockpit_api_Component_2Ljava_lang_String_2 = function(lcA0) {
var stA0 = new io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent;
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
var stA0 = lcA0;var stA1 = "loginsuccess";var stA2 = new io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$LoginEventListener;
(refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$LoginEventListener || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$LoginEventListener = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$LoginEventListener(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent_2.call(stA2, lcA0);
invoker.attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2(stA0,stA1, stA2);
var stA0 = lcA0;var stA1 = "filterrequest";var stA2 = new io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$FilterListener;
(refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$FilterListener || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$FilterListener = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$FilterListener(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent_2.call(stA2, lcA0);
invoker.attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2(stA0,stA1, stA2);
var stA0 = lcA0;var stA1 = "newitemfilterrequest";var stA2 = new io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$NewItemFilterListener;
(refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$NewItemFilterListener || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$NewItemFilterListener = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$NewItemFilterListener(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent_2.call(stA2, lcA0);
invoker.attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2(stA0,stA1, stA2);
var stA0 = lcA0;var stA1 = "loadintialdata";var stA2 = new io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$LoadInitialDataListener;
(refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$LoadInitialDataListener || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$LoadInitialDataListener = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$LoadInitialDataListener(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent_2Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$1_2.call(stA2, lcA0, null);
invoker.attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2(stA0,stA1, stA2);
var stA0 = lcA0;var stA1 = "designermode";var stA2 = new io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$DesignModeListener;
(refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$DesignModeListener || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$DesignModeListener = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$DesignModeListener(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent_2Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$1_2.call(stA2, lcA0, null);
invoker.attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2(stA0,stA1, stA2);
var stA0 = lcA0;var stA1 = "invokefunction";var stA2 = new io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$FunctionInvokeListener;
(refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$FunctionInvokeListener || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$FunctionInvokeListener = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$FunctionInvokeListener(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent_2Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$1_2.call(stA2, lcA0, null);
invoker.attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2(stA0,stA1, stA2);
var stA0 = lcA0;var stA1 = "addfilter";var stA2 = new io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$AddFilterListener;
(refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$AddFilterListener || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$AddFilterListener = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$AddFilterListener(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent_2.call(stA2, lcA0);
invoker.attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2(stA0,stA1, stA2);
return;

};
c['bindEventListeners__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.removeFilters__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2Lio_cloudoffice_platform_cockpit_searchbox_FilterType_2 = function(lcA0, lcA1) {
var stA0 = lcA0.getFilters__Ljava_util_List_2();
invoker.clear__V(stA0);
(refs_io_cloudoffice_platform_cockpit_api_Session || (refs_io_cloudoffice_platform_cockpit_api_Session = vm.io_cloudoffice_platform_cockpit_api_Session(false)))['removeSelectedItem__V']();
c.backtoList__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2(lcA0);
c.loadList__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2Ljava_lang_String_2(lcA0, "");
c.closeAllActionMenu__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2(lcA0);
return;

};
c['removeFilters__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2Lio_cloudoffice_platform_cockpit_searchbox_FilterType_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.clearFilters__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2 = function(lcA0) {
var stA0 = lcA0.getFilters__Ljava_util_List_2();
invoker.clear__V(stA0);
return;

};
c['clearFilters__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.closeAllActionMenu__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2 = function(lcA0) {
var stA0 = lcA0.getActionMenuComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA0 = invoker.getComponent__Ljava_lang_String_2(stA0);
var lcA1 = stA0;
var stA0 = lcA0.getActionMenuComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA0 = invoker.getInstanceId__Ljava_lang_String_2(stA0);
var lcA2 = stA0;
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA0, "invokefunction", "invokefunction", "closeAllActionMenu");
var lcA3 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['get__Lio_cloudoffice_platform_cockpit_api_Component_2Ljava_lang_String_2Ljava_lang_String_2'](lcA1, lcA2);
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA3);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.backtoList__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2 = function(lcA0) {
var stA0 = lcA0.getDetailComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA0 = invoker.getComponent__Ljava_lang_String_2(stA0);
var lcA1 = stA0;
var stA0 = lcA0.getDetailComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA0 = invoker.getInstanceId__Ljava_lang_String_2(stA0);
var lcA2 = stA0;
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA0, "invokefunction", "invokefunction", "backToList");
var lcA3 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['get__Lio_cloudoffice_platform_cockpit_api_Component_2Ljava_lang_String_2Ljava_lang_String_2'](lcA1, lcA2);
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA3);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.enterKey__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = lcA0.isEnterPressed__Z();
if ((stI0) == 0) { gt = 33; break IF; }
c.addSearchFilter__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2(lcA0);
var stA0 = lcA0;var stA1 = lcA0.getAutocompletetext__Ljava_lang_String_2();
c.loadList__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2Ljava_lang_String_2(stA0, stA1);
lcA0.setFilterTypeAdded__VZ(0);
c.resetAutocompletePanel__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2(lcA0);
lcA0.setEnterPressed__VZ(0);
    }
    X_33: for (;;) { IF: if (gt <= 33) {
return;

    }
}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.loadList__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2Ljava_lang_String_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new vm.java_util_ArrayList;
(refs_java_util_ArrayList || (refs_java_util_ArrayList = vm.java_util_ArrayList(false))).constructor['cons__V'].call(stA0);
var lcA2 = stA0;
var stA0 = lcA0.getConfiguredFilters__Ljava_util_List_2();
var lcA3 = stA0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA3);
var lcA4 = stA0;
    }
    X_21: for (;;) { IF: if (gt <= 21) {

var stI0 = invoker.hasNext__Z(lcA4);
if ((stI0) == 0) { gt = 58; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA4);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_searchbox_FilterType']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.searchbox.FilterType');
var lcA5 = stA0;
var stA0 = lcA2;var stA1 = lcA5.getItemType__Ljava_lang_String_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
{ gt = 0; continue X_21; }
    }
    X_58: for (;;) { IF: if (gt <= 58) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['builder__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_util_List_2(stA0,"filters", lcA2);
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,"searchKey", lcA1);
var lcA4 = stA0;
var stA0 = lcA0.getListComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA0 = invoker.getComponent__Ljava_lang_String_2(stA0);
var lcA5 = stA0;
var stA0 = lcA0.getListComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA0 = invoker.getInstanceId__Ljava_lang_String_2(stA0);
var lcA6 = stA0;
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA0, "loadlist", "loadlist", lcA4);
var lcA7 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['get__Lio_cloudoffice_platform_cockpit_api_Component_2Ljava_lang_String_2Ljava_lang_String_2'](lcA5, lcA6);
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA7);
return;

    }
}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.addSearchFilter__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0.getFilters__Ljava_util_List_2();
invoker.clear__V(stA0);
var stA0 = new io_cloudoffice_platform_cockpit_searchbox_FilterType;
(refs_io_cloudoffice_platform_cockpit_searchbox_FilterType || (refs_io_cloudoffice_platform_cockpit_searchbox_FilterType = io_cloudoffice_platform_cockpit_searchbox_FilterType(false))).constructor.cons__V.call(stA0);
var lcA1 = stA0;
lcA1.setItemId__VLjava_lang_String_2("");
var stA0 = lcA1;var stA1 = lcA0.getConfiguredFilters__Ljava_util_List_2();
var stA1 = invoker.get__Ljava_lang_Object_2I(stA1,0);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_searchbox_FilterType']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.searchbox.FilterType');
var stA1 = stA1.getItemType__Ljava_lang_String_2();
stA0.setItemType__VLjava_lang_String_2(stA1);
var stA0 = lcA1;var stA1 = lcA0.getAutocompletetext__Ljava_lang_String_2();
var stI1 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isEmpty__ZLjava_lang_String_2'](stA1);
if ((stI1) == 0) { gt = 60; break IF; }
var stA1 = "All";{ gt = 64; break IF; }
    }
    X_60: for (;;) { IF: if (gt <= 60) {

var stA1 = lcA0.getAutocompletetext__Ljava_lang_String_2();
    }
    X_64: for (;;) { IF: if (gt <= 64) {
stA0.setItemName__VLjava_lang_String_2(stA1);
var stA0 = lcA0.getFilters__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA1);
return;

    }
}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.autocompleteSearch__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0.getAutocompletetext__Ljava_lang_String_2();
var lcA1 = stA0;
if ((null) === (lcA1)) { gt = 32; break IF; }
var stI0 = invoker.isEmpty__Z(lcA1);
if ((stI0) != 0) { gt = 32; break IF; }
var stA0 = lcA0.getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
invoker.setActive__VZ(stA0,1);
c.search__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2(lcA0);
{ gt = 53; break IF; }
    }
    X_32: for (;;) { IF: if (gt <= 32) {

var stA0 = lcA0.getAutocompleteresults__Ljava_util_List_2();
var stI0 = invoker.size__I(stA0);
if ((stI0) <= 0) { gt = 53; break IF; }
var stA0 = lcA0.getAutocompleteresults__Ljava_util_List_2();
invoker.clear__V(stA0);
    }
    X_53: for (;;) { IF: if (gt <= 53) {
return;

    }
}}}
};
c['autocompleteSearch__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.search__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2 = function(lcA0) {
var lcA1 = lcA0;
var stA0 = new io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$2;
(refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$2 || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$2 = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$2(false))).constructor.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2.call(stA0, "\"/VirtualItem-portlet.searchitem/autoCompleteSearch\"", lcA0, lcA1);
var stA1 = new io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$1;
(refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$1 || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$1 = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$1(false))).constructor.cons__V.call(stA1);
invoker.call__VLio_cloudoffice_platform_cockpit_api_ServerCallback_2(stA0,stA1);
return;

};
c['search__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.addItemToAutocompleteResultList__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2Ljava_util_Map_2 = function(lcA0, lcA1) {
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor;
(refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor || (refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor = vm.io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor(false))).constructor['cons__V'].call(stA0);
var stA1 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_util_Map_2'](lcA1);
var stA1 = invoker.toJSON__Ljava_lang_String_2(stA1);
var stA2 = new io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData;
(refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData || (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData = io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData(false))).constructor.cons__V.call(stA2);
var stA0 = invoker.getObject__Ljava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2(stA0,stA1, stA2);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.searchbox.AutocompleteResultData');
var lcA2 = stA0;
var stA0 = lcA2.getItemName__Ljava_lang_String_2();
var lcA3 = stA0;
var stA0 = lcA2;var stA1 = invoker.replaceAll__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2(lcA3,"\\<.*?\\>", "");
stA0.setItemName__VLjava_lang_String_2(stA1);
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"MIME: ");
var stA1 = lcA2.getMimetype__Ljava_lang_String_2();
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2'](stA0);
var stA0 = lcA2;var stA1 = lcA2.getItemType__Ljava_lang_String_2();
var stA2 = lcA2.getMimetype__Ljava_lang_String_2();
var stA1 = (refs_io_cloudoffice_platform_cockpit_api_IconModel || (refs_io_cloudoffice_platform_cockpit_api_IconModel = vm.io_cloudoffice_platform_cockpit_api_IconModel(false)))['getItemTypeIconClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'](stA1, stA2);
stA0.setItemTypeIconClass__VLjava_lang_String_2(stA1);
var stA0 = lcA2;var stA1 = lcA2.getItemType__Ljava_lang_String_2();
var stA2 = lcA2.getMimetype__Ljava_lang_String_2();
var stA1 = (refs_io_cloudoffice_platform_cockpit_api_IconModel || (refs_io_cloudoffice_platform_cockpit_api_IconModel = vm.io_cloudoffice_platform_cockpit_api_IconModel(false)))['getItemTypeIconColor__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'](stA1, stA2);
stA0.setItemTypeIconColor__VLjava_lang_String_2(stA1);
var stA0 = lcA0.getAutocompleteresults__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA2);
return;

};
c['addItemToAutocompleteResultList__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2Ljava_util_Map_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.resetAutocompletePanel__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2 = function(lcA0) {
var stA0 = lcA0.getAutocompleteresults__Ljava_util_List_2();
invoker.clear__V(stA0);
lcA0.setAutocompletetext__VLjava_lang_String_2("");
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.setFilterFromAutoComplete__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2Lio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_2 = function(lcA0, lcA1) {
var stA0 = lcA0;var stA1 = lcA1.toString__Ljava_lang_String_2();
c.invokeTypeFilterChange__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2Ljava_lang_String_2(stA0, stA1);
c.loadItemDetail__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2Lio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_2(lcA0, lcA1);
lcA0.setFilterTypeAdded__VZ(0);
c.resetAutocompletePanel__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2(lcA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.loadItemDetail__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2Lio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_2 = function(lcA0, lcA1) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['builder__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var stA1 = "itemId";var stA2 = lcA1.getItemId__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
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
    m = c.invokeTypeFilterChange__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2Ljava_lang_String_2 = function(lcA0, lcA1) {
c.addFilter__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2Ljava_lang_String_2(lcA0, lcA1);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.addFilter__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2Ljava_lang_String_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2'](lcA1);
var lcA2 = stA0;
var stA0 = lcA0.getFilters__Ljava_util_List_2();
invoker.clear__V(stA0);
var stA0 = new io_cloudoffice_platform_cockpit_searchbox_FilterType;
(refs_io_cloudoffice_platform_cockpit_searchbox_FilterType || (refs_io_cloudoffice_platform_cockpit_searchbox_FilterType = io_cloudoffice_platform_cockpit_searchbox_FilterType(false))).constructor.cons__V.call(stA0);
var lcA3 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"itemId");
var lcA4 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](lcA4);
if ((stI0) == 0) { gt = 91; break IF; }
var stA0 = lcA3;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"itemId");
stA0.setItemId__VLjava_lang_String_2(stA1);
var stA0 = lcA3;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"itemType");
stA0.setItemType__VLjava_lang_String_2(stA1);
var stA0 = lcA3;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"itemName");
var stA1 = invoker.replaceAll__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2(stA1,"\\<.*?\\>", "");
stA0.setItemName__VLjava_lang_String_2(stA1);
var stA0 = lcA0.getFilters__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA3);
    }
    X_91: for (;;) { IF: if (gt <= 91) {
return;

    }
}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.onError__VLio_cloudoffice_platform_cockpit_api_Error_2Lio_cloudoffice_platform_cockpit_api_Source_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
return;

};
c['onError__VLio_cloudoffice_platform_cockpit_api_Error_2Lio_cloudoffice_platform_cockpit_api_Source_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setComponentName__V = function() {
  var  lcA0 = this;
c['_componentName'].call(lcA0, "searchbox-component");
return;

};
c['setComponentName__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.bindViewNames__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getName__Ljava_lang_String_2((refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView = io_cloudoffice_platform_cockpit_searchbox_SearchBoxView(false))).constructor.$class);
invoker.setDefaultViewName__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA0;var stA1 = invoker.getName__Ljava_lang_String_2((refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration = io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration(false))).constructor.$class);
invoker.setDefaultConfigViewName__VLjava_lang_String_2(stA0,stA1);
return;

};
c['bindViewNames__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.invokeNewItemTypeFilterChange__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2Ljava_lang_String_2 = function(lcA0, lcA1) {
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA0, "newitemload", "newitemload", lcA1);
var lcA2 = stA0;
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2((refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['_CENTERCOLUMNLAYOUT'](),lcA2);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.openConfig__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2 = function(lcA0) {
lcA0.setDesignerMode__VZ(1);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.closeConfigurationPanel__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2 = function(lcA0) {
lcA0.setDesignerMode__VZ(0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.save__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2 = function(lcA0) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = "searchbox";var stA2 = lcA0.getInstance__Ljava_lang_String_2();
var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['configPostEndpoint__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'](stA1, stA2, "");
var stA2 = lcA0.toString__Ljava_lang_String_2();
var stA3 = new io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$3;
(refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$3 || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$3 = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$3(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2.call(stA3, lcA0);
invoker.post__VLjava_lang_String_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.resetConfiguration__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2 = function(lcA0) {
c.resetConfigurationModelFromJSON__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2(lcA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.resetConfigurationModelFromJSON__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2 = function(lcA0) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = "searchbox";var stA2 = lcA0.getInstance__Ljava_lang_String_2();
var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['configFetchEndpoint__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'](stA1, stA2);
var stA2 = null;var stA3 = new io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$4;
(refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$4 || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$4 = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$4(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2.call(stA3, lcA0);
invoker.fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponentfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponentfillInstOf });
    io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponentfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/searchbox/SearchBoxComponent';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_AbstractComponent;
    var refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$LoginEventListener;
    var refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$FilterListener;
    var refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$NewItemFilterListener;
    var refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$LoadInitialDataListener;
    var refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$DesignModeListener;
    var refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$FunctionInvokeListener;
    var refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$AddFilterListener;
    var refs_io_cloudoffice_platform_cockpit_api_Session;
    var refs_io_cloudoffice_platform_cockpit_api_Event;
    var refs_io_cloudoffice_platform_cockpit_api_Components;
    var refs_java_util_ArrayList;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_searchbox_FilterType;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$2;
    var refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$1;
    var refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor;
    var refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_api_Logger;
    var refs_io_cloudoffice_platform_cockpit_api_IconModel;
    var refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView;
    var refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration;
    var refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration;
    var refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$3;
    var refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$4;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent = registerClass(exports,'io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent',io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent);


function io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$4() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$4;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$view = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$4_val$view'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$4_val$view']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$4_val$view'] = lcA1;
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
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$4_val$view'].getConfiguration__Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_2();
var lcA3 = stA0;
var stA0 = invoker.getJsonObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA2,"configuration");
var lcA4 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_Object_2'](lcA4);
if ((stI0) == 0) { gt = 367; break IF; }
var stI0 = invoker.getBoolean__ZLjava_lang_String_2(lcA4,"hasItemFilter");
var lcI5 = stI0;
lcA3.setHasItemFilter__VZ(lcI5);
var stA0 = lcA3.getFilters__Ljava_util_List_2();
var stI0 = invoker.isEmpty__Z(stA0);
if ((stI0) != 0) { gt = 65; break IF; }
var stA0 = lcA3.getFilters__Ljava_util_List_2();
invoker.clear__V(stA0);
    }
    X_65: for (;;) { IF: if (gt <= 65) {

var stA0 = invoker.getJSONArray__Lorg_json_JSONArray_2Ljava_lang_String_2(lcA4,"filters");
var stA0 = invoker.toList__Ljava_util_List_2(stA0);
var lcA6 = stA0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA6);
var lcA7 = stA0;
    }
    X_86: for (;;) { IF: if (gt <= 86) {

var stI0 = invoker.hasNext__Z(lcA7);
if ((stI0) == 0) { gt = 199; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA7);
var lcA8 = stA0;
if (lcA8 !== null && !lcA8['$instOf_java_util_Map']) vm.java_lang_Class(false).castEx(lcA8, 'java.util.Map');
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_util_Map_2'](lcA8);
var lcA9 = stA0;
var stA0 = new io_cloudoffice_platform_cockpit_searchbox_FilterType;
(refs_io_cloudoffice_platform_cockpit_searchbox_FilterType || (refs_io_cloudoffice_platform_cockpit_searchbox_FilterType = io_cloudoffice_platform_cockpit_searchbox_FilterType(false))).constructor.cons__V.call(stA0);
var lcA10 = stA0;
var stA0 = lcA10;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA9,"itemId");
stA0.setItemId__VLjava_lang_String_2(stA1);
var stA0 = lcA10;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA9,"itemType");
stA0.setItemType__VLjava_lang_String_2(stA1);
var stA0 = lcA10;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA9,"itemName");
stA0.setItemName__VLjava_lang_String_2(stA1);
var stA0 = lcA10;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA9,"filterType");
stA0.setFilterType__VLjava_lang_String_2(stA1);
var stA0 = lcA10;var stI1 = invoker.getBoolean__ZLjava_lang_String_2(lcA9,"isSelected");
stA0.setIsSelected__VZ(stI1);
var stA0 = lcA3.getFilters__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA10);
{ gt = 0; continue X_86; }
    }
    X_199: for (;;) { IF: if (gt <= 199) {

var stA0 = invoker.getJSONObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA4,"listComponentDefinition");
var lcA7 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA7,"component");
var lcA8 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA7,"instanceId");
var lcA9 = stA0;
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_ComponentDef;
(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor['cons__V'].call(stA0);
var lcA10 = stA0;
invoker.setComponent__VLjava_lang_String_2(lcA10,lcA8);
invoker.setInstanceId__VLjava_lang_String_2(lcA10,lcA9);
lcA3.setListComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2(lcA10);
var stA0 = invoker.getJSONObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA4,"detailComponentDefinition");
var lcA11 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA11,"component");
var lcA12 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA11,"instanceId");
var lcA13 = stA0;
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_ComponentDef;
(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor['cons__V'].call(stA0);
var lcA10 = stA0;
invoker.setComponent__VLjava_lang_String_2(lcA10,lcA12);
invoker.setInstanceId__VLjava_lang_String_2(lcA10,lcA13);
lcA3.setDetailComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2(lcA10);
var stA0 = invoker.getJSONObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA4,"actionMenuComponentDefinition");
var lcA14 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA14,"component");
var lcA15 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA14,"instanceId");
var lcA16 = stA0;
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_ComponentDef;
(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor['cons__V'].call(stA0);
var lcA10 = stA0;
invoker.setComponent__VLjava_lang_String_2(lcA10,lcA15);
invoker.setInstanceId__VLjava_lang_String_2(lcA10,lcA16);
lcA3.setActionMenuComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2(lcA10);
    }
    X_367: for (;;) { IF: if (gt <= 367) {
return;

    }
}}}}}
};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$4fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$4', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$4fillInstOf });
    io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$4fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/searchbox/SearchBoxComponent$4';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_io_cloudoffice_platform_cockpit_searchbox_FilterType;
    var refs_io_cloudoffice_platform_cockpit_api_ComponentDef;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$4_val$view'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$4 = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$4;

vm.io_cloudoffice_platform_cockpit_api_CallBack = link('io/cloudoffice/platform/cockpit/api/CallBack', function(f) { vm.io_cloudoffice_platform_cockpit_api_CallBack =  f; });
vm.io_cloudoffice_platform_cockpit_api_ComponentDef = link('io/cloudoffice/platform/cockpit/api/ComponentDef', function(f) { vm.io_cloudoffice_platform_cockpit_api_ComponentDef =  f; });

function io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$3() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$3;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$view = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$3_val$view'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$3_val$view']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$3_val$view'] = lcA1;
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2']("Save Callback");
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$3_val$view'];var stA1 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$3_val$view'].getConfiguration__Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_2();
var stI1 = stA1.isHasItemFilter__Z();
stA0.setHasItemFilter__VZ(stI1);
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$3_val$view'].getConfiguredFilters__Ljava_util_List_2();
invoker.clear__V(stA0);
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$3_val$view'].getConfiguration__Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_2();
var stA0 = stA0.getFilters__Ljava_util_List_2();
var lcA2 = stA0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA2);
var lcA3 = stA0;
    }
    X_52: for (;;) { IF: if (gt <= 52) {

var stI0 = invoker.hasNext__Z(lcA3);
if ((stI0) == 0) { gt = 98; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA3);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_searchbox_FilterType']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.searchbox.FilterType');
var lcA4 = stA0;
var stI0 = lcA4.isIsSelected__Z();
if ((stI0) == 0) { gt = 95; break IF; }
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$3_val$view'].getConfiguredFilters__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA4);
    }
    X_95: for (;;) { IF: if (gt <= 95) {
{ gt = 0; continue X_52; }
    }
    X_98: for (;;) { IF: if (gt <= 98) {

(refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent(false))).closeConfigurationPanel__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$3_val$view']);
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$3_val$view'].setAutocompletePlaceholderText__VLjava_lang_String_2("Type here...");
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$3_val$view'].getConfiguredFilters__Ljava_util_List_2();
var stI0 = invoker.size__I(stA0);
if ((stI0) <= 0) { gt = 212; break IF; }
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$3_val$view'].getConfiguredFilters__Ljava_util_List_2();
var stA0 = invoker.get__Ljava_lang_Object_2I(stA0,0);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_searchbox_FilterType']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.searchbox.FilterType');
var stA0 = stA0.getItemType__Ljava_lang_String_2();
var lcA3 = stA0;
var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA3,"PERSON");
if ((stI0) == 0) { gt = 163; break IF; }
var stA0 = "CONTACT";{ gt = 164; break IF; }
    }
    X_163: for (;;) { IF: if (gt <= 163) {

var stA0 = lcA3;    }
    X_164: for (;;) { IF: if (gt <= 164) {
var lcA3 = stA0;
var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA3,"USER_DEFINE");
if ((stI0) == 0) { gt = 179; break IF; }
var stA0 = "ARTICLE";{ gt = 180; break IF; }
    }
    X_179: for (;;) { IF: if (gt <= 179) {

var stA0 = lcA3;    }
    X_180: for (;;) { IF: if (gt <= 180) {
var lcA3 = stA0;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$3_val$view'];var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"Type for ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA3);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," here...");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
stA0.setAutocompletePlaceholderText__VLjava_lang_String_2(stA1);
    }
    X_212: for (;;) { IF: if (gt <= 212) {
return;

    }
}}}}}}}}}
};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$3fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$3', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$3fillInstOf });
    io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$3fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/searchbox/SearchBoxComponent$3';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_Logger;
    var refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent;
    var refs_java_lang_StringBuilder;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$3_val$view'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$3 = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$3;

vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration = link('io/cloudoffice/platform/cockpit/api/ComponentConfiguration', function(f) { vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration =  f; });

function io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_proto'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_proto']; };
  m = c._prop_hasItemFilter = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_hasItemFilter'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_hasItemFilter']; };
  m = c._prop_configurationProgressLoader = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_configurationProgressLoader'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_configurationProgressLoader']; };
  m = c._prop_filters = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_filters'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_filters']; };
  m = c._prop_listComponentDefinition = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_listComponentDefinition'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_listComponentDefinition']; };
  m = c._prop_detailComponentDefinition = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_detailComponentDefinition'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_detailComponentDefinition']; };
  m = c._prop_actionMenuComponentDefinition = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_actionMenuComponentDefinition'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_actionMenuComponentDefinition']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$SearchBoxConfigurationModel || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$SearchBoxConfigurationModel = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$SearchBoxConfigurationModel(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.isHasItemFilter__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_proto'],"hasItemFilter");
return lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_hasItemFilter'];

};
c['isHasItemFilter__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setHasItemFilter__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_hasItemFilter']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_hasItemFilter'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_proto'];var stA1 = "hasItemFilter";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setHasItemFilter__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isConfigurationProgressLoader__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_proto'],"configurationProgressLoader");
return lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_configurationProgressLoader'];

};
c['isConfigurationProgressLoader__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setConfigurationProgressLoader__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_configurationProgressLoader']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_configurationProgressLoader'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_proto'];var stA1 = "configurationProgressLoader";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setConfigurationProgressLoader__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getFilters__Ljava_util_List_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_proto'],"filters");
return lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_filters'];

};
c['getFilters__Ljava_util_List_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getListComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_proto'],"listComponentDefinition");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_listComponentDefinition']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_ComponentDef;
(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_listComponentDefinition'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_listComponentDefinition'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_listComponentDefinition']['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_listComponentDefinition'], 'io.cloudoffice.platform.cockpit.api.ComponentDef');
return lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_listComponentDefinition'];

    }
}}
};
c['getListComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setListComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_listComponentDefinition'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_listComponentDefinition'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_proto'],"listComponentDefinition", lcA2, lcA1);
return;

    }
}}
};
c['setListComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getDetailComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_proto'],"detailComponentDefinition");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_detailComponentDefinition']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_ComponentDef;
(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_detailComponentDefinition'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_detailComponentDefinition'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_detailComponentDefinition']['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_detailComponentDefinition'], 'io.cloudoffice.platform.cockpit.api.ComponentDef');
return lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_detailComponentDefinition'];

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

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_detailComponentDefinition'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_detailComponentDefinition'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_proto'],"detailComponentDefinition", lcA2, lcA1);
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

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_proto'],"actionMenuComponentDefinition");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_actionMenuComponentDefinition']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_ComponentDef;
(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_actionMenuComponentDefinition'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_actionMenuComponentDefinition'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_actionMenuComponentDefinition']['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_actionMenuComponentDefinition'], 'io.cloudoffice.platform.cockpit.api.ComponentDef');
return lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_actionMenuComponentDefinition'];

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

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_actionMenuComponentDefinition'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_actionMenuComponentDefinition'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_proto'],"actionMenuComponentDefinition", lcA2, lcA1);
return;

    }
}}
};
c['setActionMenuComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2(c._TYPE(),lcA0, lcA1);
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_proto'] = stA1;
var stA0 = lcA0;var stA1 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_proto'];var stA2 = "filters";var stI3 = -1;var stA4 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 0);
var stA1 = invoker.createList__Ljava_util_List_2Ljava_lang_String_2I_3Ljava_lang_String_2(stA1,stA2, stI3, stA4);
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_filters'] = stA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_listComponentDefinition'] = c._TYPE();
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_detailComponentDefinition'] = c._TYPE();
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_actionMenuComponentDefinition'] = c._TYPE();
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VZZLio_cloudoffice_platform_cockpit_api_ComponentDef_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2_3Lio_cloudoffice_platform_cockpit_searchbox_FilterType_2 = function(lcI1, lcI2, lcA3, lcA4, lcA5, lcA6) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_hasItemFilter'] = lcI1;
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_configurationProgressLoader'] = lcI2;
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_listComponentDefinition'] = lcA3;
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_detailComponentDefinition'] = lcA4;
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_actionMenuComponentDefinition'] = lcA5;
invoker.initTo__VLjava_util_Collection_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_proto'],lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_filters'], lcA6);
return;

};
CLS['cons__VZZLio_cloudoffice_platform_cockpit_api_ComponentDef_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2_3Lio_cloudoffice_platform_cockpit_searchbox_FilterType_2'] = m;

    m.access = 129;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, (6));
var lcA3 = stA0;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, (6));
Array.at(stA2, 0, "hasItemFilter");
Array.at(stA2, 1, "configurationProgressLoader");
Array.at(stA2, 2, "filters");
Array.at(stA2, 3, "listComponentDefinition");
Array.at(stA2, 4, "detailComponentDefinition");
Array.at(stA2, 5, "actionMenuComponentDefinition");
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
var stA0 = lcA0;if (((lcA3[0] || Array.at(lcA3, 0))) !== null) { gt = 66; break IF; }
var stI1 = 0;{ gt = 78; break IF; }
    }
    X_66: for (;;) { IF: if (gt <= 66) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[0] || Array.at(lcA3, 0)));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_78: for (;;) { IF: if (gt <= 78) {
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_hasItemFilter'] = stI1;
var stA0 = lcA0;if (((lcA3[1] || Array.at(lcA3, 1))) !== null) { gt = 92; break IF; }
var stI1 = 0;{ gt = 104; break IF; }
    }
    X_92: for (;;) { IF: if (gt <= 92) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[1] || Array.at(lcA3, 1)));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_104: for (;;) { IF: if (gt <= 104) {
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_configurationProgressLoader'] = stI1;
var stA0 = c.useAsArray___3Ljava_lang_Object_2Ljava_lang_Object_2((lcA3[2] || Array.at(lcA3, 2)));
var lcA4 = stA0;
var lcI5 = (lcA4).length;
var lcI6 = 0;
    }
    X_123: for (;;) { IF: if (gt <= 123) {

if ((lcI6) >= (lcI5)) { gt = 164; break IF; }
var lcA7 = (lcA4[lcI6] || Array.at(lcA4, lcI6));
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_filters'];var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_proto'],(refs_io_cloudoffice_platform_cockpit_searchbox_FilterType || (refs_io_cloudoffice_platform_cockpit_searchbox_FilterType = io_cloudoffice_platform_cockpit_searchbox_FilterType(false))).constructor.$class, lcA7);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
lcI6++;
{ gt = 0; continue X_123; }
    }
    X_164: for (;;) { IF: if (gt <= 164) {

var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_proto'],(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, (lcA3[3] || Array.at(lcA3, 3)));
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_listComponentDefinition'] = stA1;
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_proto'],(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, (lcA3[4] || Array.at(lcA3, 4)));
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_detailComponentDefinition'] = stA1;
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_proto'],(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, (lcA3[5] || Array.at(lcA3, 5)));
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_actionMenuComponentDefinition'] = stA1;
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"hasItemFilter");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isHasItemFilter__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"filters");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_filters']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"listComponentDefinition");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_listComponentDefinition']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"detailComponentDefinition");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_detailComponentDefinition']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"actionMenuComponentDefinition");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_actionMenuComponentDefinition']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(125));
var stA0 = invoker.toString__Ljava_lang_String_2(lcA1);
return stA0;

};
c['toString__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_proto']);
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
var stA0 = lcA2;var stI1 = lcA0.isHasItemFilter__Z();
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_hasItemFilter'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isConfigurationProgressLoader__Z();
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_configurationProgressLoader'] = stI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_proto'];var stA1 = lcA2.getFilters__Ljava_util_List_2();
invoker.cloneList__VLjava_util_Collection_2Lnet_java_html_BrwsrCtx_2Ljava_util_Collection_2(stA0,stA1, lcA1, lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_filters']);
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_listComponentDefinition']) !== null) { gt = 53; break IF; }
var stA1 = null;{ gt = 77; break IF; }
    }
    X_53: for (;;) { IF: if (gt <= 53) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_listComponentDefinition']) !== (c._TYPE())) { gt = 69; break IF; }
var stA1 = c._TYPE();{ gt = 77; break IF; }
    }
    X_69: for (;;) { IF: if (gt <= 69) {

var stA1 = lcA0.getListComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_77: for (;;) { IF: if (gt <= 77) {
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_listComponentDefinition'] = stA1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_detailComponentDefinition']) !== null) { gt = 92; break IF; }
var stA1 = null;{ gt = 116; break IF; }
    }
    X_92: for (;;) { IF: if (gt <= 92) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_detailComponentDefinition']) !== (c._TYPE())) { gt = 108; break IF; }
var stA1 = c._TYPE();{ gt = 116; break IF; }
    }
    X_108: for (;;) { IF: if (gt <= 108) {

var stA1 = lcA0.getDetailComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_116: for (;;) { IF: if (gt <= 116) {
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_detailComponentDefinition'] = stA1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_actionMenuComponentDefinition']) !== null) { gt = 131; break IF; }
var stA1 = null;{ gt = 155; break IF; }
    }
    X_131: for (;;) { IF: if (gt <= 131) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_actionMenuComponentDefinition']) !== (c._TYPE())) { gt = 147; break IF; }
var stA1 = c._TYPE();{ gt = 155; break IF; }
    }
    X_147: for (;;) { IF: if (gt <= 147) {

var stA1 = lcA0.getActionMenuComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_155: for (;;) { IF: if (gt <= 155) {
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_actionMenuComponentDefinition'] = stA1;
return lcA2;

    }
}}}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_2 = function() {
  var  lcA0 = this;
invoker.applyBindings__V(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_proto']);
return lcA0;

};
c['applyBindings__Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_2'] = m;

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

var stI0 = lcA1 != null && lcA1['$instOf_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.searchbox.SearchBoxConfiguration');
var lcA2 = lcA1;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_hasItemFilter']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_hasItemFilter']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 46; break IF; }
return 0;
    }
    X_46: for (;;) { IF: if (gt <= 46) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_configurationProgressLoader']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_configurationProgressLoader']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 71; break IF; }
return 0;
    }
    X_71: for (;;) { IF: if (gt <= 71) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_filters']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_filters']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 98; break IF; }
return 0;
    }
    X_98: for (;;) { IF: if (gt <= 98) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_listComponentDefinition']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_listComponentDefinition']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 125; break IF; }
return 0;
    }
    X_125: for (;;) { IF: if (gt <= 125) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_detailComponentDefinition']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_detailComponentDefinition']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 152; break IF; }
return 0;
    }
    X_152: for (;;) { IF: if (gt <= 152) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_actionMenuComponentDefinition']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_actionMenuComponentDefinition']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 179; break IF; }
return 0;
    }
    X_179: for (;;) { IF: if (gt <= 179) {

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
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_hasItemFilter']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_configurationProgressLoader']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_filters']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_listComponentDefinition']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_detailComponentDefinition']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_actionMenuComponentDefinition']);
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
var stA0 = lcA0.clone__Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration$Html4JavaType_2 = function() {
return c._TYPE();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_2 = function(lcA0) {
return lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_2Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration$Html4JavaType;
(refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration$Html4JavaType || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration$Html4JavaType = io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration$Html4JavaType(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfigurationfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfigurationfillInstOf });
    io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfigurationfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/searchbox/SearchBoxConfiguration';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$SearchBoxConfigurationModel;
    var refs_java_lang_Boolean;
    var refs_io_cloudoffice_platform_cockpit_api_ComponentDef;
    var refs_net_java_html_json_Models;
    var refs_net_java_html_BrwsrCtx;
    var refs_io_cloudoffice_platform_cockpit_searchbox_FilterType;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_proto'] = null;
    this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_hasItemFilter'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_configurationProgressLoader'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_filters'] = null;
    this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_listComponentDefinition'] = null;
    this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_detailComponentDefinition'] = null;
    this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_prop_actionMenuComponentDefinition'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration = registerClass(exports,'io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration',io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration);


function io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration$Html4JavaType() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration = io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration(false))).constructor.$class, (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$SearchBoxConfigurationModel || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$SearchBoxConfigurationModel = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$SearchBoxConfigurationModel(false))).constructor.$class, (6), 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"hasItemFilter", 0, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"configurationProgressLoader", 1, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"filters", 2, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"listComponentDefinition", 3, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"detailComponentDefinition", 4, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"actionMenuComponentDefinition", 5, 0, 0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 40; break IF; }
  case 1:{ gt = 60; break IF; }
  case 2:{ gt = 80; break IF; }
  case 3:{ gt = 94; break IF; }
  case 4:{ gt = 111; break IF; }
  case 5:{ gt = 128; break IF; }
  default: { gt = 145; break IF; }
}
    }
    X_40: for (;;) { IF: if (gt <= 40) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration = io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration(false))).access$100__Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setHasItemFilter__VZ(stI1);
return;
    }
    X_60: for (;;) { IF: if (gt <= 60) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration = io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration(false))).access$100__Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setConfigurationProgressLoader__VZ(stI1);
return;
    }
    X_80: for (;;) { IF: if (gt <= 80) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration = io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration(false))).access$100__Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration$Html4JavaType_2();
var stA1 = lcA1.getFilters__Ljava_util_List_2();
invoker.replaceValue__VLjava_util_Collection_2Ljava_lang_Class_2Ljava_lang_Object_2(stA0,stA1, (refs_io_cloudoffice_platform_cockpit_searchbox_FilterType || (refs_io_cloudoffice_platform_cockpit_searchbox_FilterType = io_cloudoffice_platform_cockpit_searchbox_FilterType(false))).constructor.$class, lcA3);
return;
    }
    X_94: for (;;) { IF: if (gt <= 94) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration = io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration(false))).access$100__Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.api.ComponentDef');
stA0.setListComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2(stA1);
return;
    }
    X_111: for (;;) { IF: if (gt <= 111) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration = io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration(false))).access$100__Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.api.ComponentDef');
stA0.setDetailComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2(stA1);
return;
    }
    X_128: for (;;) { IF: if (gt <= 128) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration = io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration(false))).access$100__Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.api.ComponentDef');
stA0.setActionMenuComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2(stA1);
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
    m = c.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_2I = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 40; break IF; }
  case 1:{ gt = 48; break IF; }
  case 2:{ gt = 56; break IF; }
  case 3:{ gt = 61; break IF; }
  case 4:{ gt = 66; break IF; }
  case 5:{ gt = 71; break IF; }
  default: { gt = 76; break IF; }
}
    }
    X_40: for (;;) { IF: if (gt <= 40) {

var stI0 = lcA1.isHasItemFilter__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_48: for (;;) { IF: if (gt <= 48) {

var stI0 = lcA1.isConfigurationProgressLoader__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_56: for (;;) { IF: if (gt <= 56) {

var stA0 = lcA1.getFilters__Ljava_util_List_2();
return stA0;
    }
    X_61: for (;;) { IF: if (gt <= 61) {

var stA0 = lcA1.getListComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
return stA0;
    }
    X_66: for (;;) { IF: if (gt <= 66) {

var stA0 = lcA1.getDetailComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
return stA0;
    }
    X_71: for (;;) { IF: if (gt <= 71) {

var stA0 = lcA1.getActionMenuComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
return stA0;
    }
    X_76: for (;;) { IF: if (gt <= 76) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.call__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.searchbox.SearchBoxConfiguration');
var stA0 = (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration = io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
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
    m = c.read__Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration;
(refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration = io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_2Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration = io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration(false))).access$400__Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_2Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.searchbox.SearchBoxConfiguration');
lcA0.onMessage__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.searchbox.SearchBoxConfiguration');
lcA0.onChange__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.searchbox.SearchBoxConfiguration');
var stA0 = lcA0.cloneTo__Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_2Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.searchbox.SearchBoxConfiguration');
lcA0.call__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.searchbox.SearchBoxConfiguration');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.searchbox.SearchBoxConfiguration');
lcA0.setValue__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration$Html4JavaTypefillInstOf });
    io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/searchbox/SearchBoxConfiguration$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration;
    var refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$SearchBoxConfigurationModel;
    var refs_org_netbeans_html_json_spi_Proto$Type;
    var refs_java_lang_Boolean;
    var refs_io_cloudoffice_platform_cockpit_searchbox_FilterType;
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
vm.io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration$Html4JavaType = io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration$Html4JavaType;

vm.net_java_html_json_Models = link('net/java/html/json/Models', function(f) { vm.net_java_html_json_Models =  f; });

function io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$SearchBoxConfigurationModel() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$SearchBoxConfigurationModel;
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
    function io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$SearchBoxConfigurationModelfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$SearchBoxConfigurationModel', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$SearchBoxConfigurationModelfillInstOf });
    io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$SearchBoxConfigurationModelfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/searchbox/SearchBoxComponent$SearchBoxConfigurationModel';
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
vm.io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$SearchBoxConfigurationModel = registerClass(exports,'io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$SearchBoxConfigurationModel',io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$SearchBoxConfigurationModel);


function io_cloudoffice_platform_cockpit_searchbox_SearchBoxView() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_searchbox_SearchBoxView;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto']; };
  m = c._prop_instance = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_instance'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_instance']; };
  m = c._prop_overlayautocompleteplaceholder = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_overlayautocompleteplaceholder'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_overlayautocompleteplaceholder']; };
  m = c._prop_autocompletetext = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_autocompletetext'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_autocompletetext']; };
  m = c._prop_autocompleteresults = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_autocompleteresults'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_autocompleteresults']; };
  m = c._prop_autocompletePlaceholderText = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_autocompletePlaceholderText'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_autocompletePlaceholderText']; };
  m = c._prop_hasItemFilter = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_hasItemFilter'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_hasItemFilter']; };
  m = c._prop_configuredFilters = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_configuredFilters'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_configuredFilters']; };
  m = c._prop_filters = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_filters'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_filters']; };
  m = c._prop_loader = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_loader'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_loader']; };
  m = c._prop_filterOff = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_filterOff'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_filterOff']; };
  m = c._prop_filterTypeAdded = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_filterTypeAdded'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_filterTypeAdded']; };
  m = c._prop_relatedFilter = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_relatedFilter'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_relatedFilter']; };
  m = c._prop_designerMode = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_designerMode'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_designerMode']; };
  m = c._prop_configuration = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_configuration'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_configuration']; };
  m = c._prop_enterPressed = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_enterPressed'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_enterPressed']; };
  m = c._prop_listComponentDefinition = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_listComponentDefinition'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_listComponentDefinition']; };
  m = c._prop_detailComponentDefinition = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_detailComponentDefinition'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_detailComponentDefinition']; };
  m = c._prop_actionMenuComponentDefinition = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_actionMenuComponentDefinition'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_actionMenuComponentDefinition']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.getInstance__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto'],"instance");
return lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_instance'];

};
c['getInstance__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setInstance__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_instance'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_instance'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto'],"instance", lcA2, lcA1);
return;

    }
}}
};
c['setInstance__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getOverlayautocompleteplaceholder__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto'],"overlayautocompleteplaceholder");
return lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_overlayautocompleteplaceholder'];

};
c['getOverlayautocompleteplaceholder__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setOverlayautocompleteplaceholder__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_overlayautocompleteplaceholder'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_overlayautocompleteplaceholder'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto'],"overlayautocompleteplaceholder", lcA2, lcA1);
return;

    }
}}
};
c['setOverlayautocompleteplaceholder__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getAutocompletetext__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto'],"autocompletetext");
return lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_autocompletetext'];

};
c['getAutocompletetext__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setAutocompletetext__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_autocompletetext'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_autocompletetext'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto'],"autocompletetext", lcA2, lcA1);
var lcA3 = lcA0;
(refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent(false))).autocompleteSearch__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2(lcA3);
return;

    }
}}
};
c['setAutocompletetext__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getAutocompleteresults__Ljava_util_List_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto'],"autocompleteresults");
return lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_autocompleteresults'];

};
c['getAutocompleteresults__Ljava_util_List_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getAutocompletePlaceholderText__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto'],"autocompletePlaceholderText");
return lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_autocompletePlaceholderText'];

};
c['getAutocompletePlaceholderText__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setAutocompletePlaceholderText__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_autocompletePlaceholderText'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_autocompletePlaceholderText'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto'],"autocompletePlaceholderText", lcA2, lcA1);
return;

    }
}}
};
c['setAutocompletePlaceholderText__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isHasItemFilter__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto'],"hasItemFilter");
return lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_hasItemFilter'];

};
c['isHasItemFilter__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setHasItemFilter__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_hasItemFilter']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_hasItemFilter'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto'];var stA1 = "hasItemFilter";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setHasItemFilter__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getConfiguredFilters__Ljava_util_List_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto'],"configuredFilters");
return lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_configuredFilters'];

};
c['getConfiguredFilters__Ljava_util_List_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getFilters__Ljava_util_List_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto'],"filters");
return lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_filters'];

};
c['getFilters__Ljava_util_List_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto'],"loader");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_loader']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_HelperItemView;
(refs_io_cloudoffice_platform_cockpit_api_HelperItemView || (refs_io_cloudoffice_platform_cockpit_api_HelperItemView = vm.io_cloudoffice_platform_cockpit_api_HelperItemView(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_loader'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_loader'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_loader']['$instOf_io_cloudoffice_platform_cockpit_api_HelperItemView']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_loader'], 'io.cloudoffice.platform.cockpit.api.HelperItemView');
return lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_loader'];

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

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_loader'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_loader'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto'],"loader", lcA2, lcA1);
return;

    }
}}
};
c['setLoader__VLio_cloudoffice_platform_cockpit_api_HelperItemView_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isFilterOff__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto'],"filterOff");
return lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_filterOff'];

};
c['isFilterOff__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setFilterOff__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_filterOff']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_filterOff'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto'];var stA1 = "filterOff";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setFilterOff__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isFilterTypeAdded__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto'],"filterTypeAdded");
return lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_filterTypeAdded'];

};
c['isFilterTypeAdded__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setFilterTypeAdded__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_filterTypeAdded']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_filterTypeAdded'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto'];var stA1 = "filterTypeAdded";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setFilterTypeAdded__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isRelatedFilter__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto'],"relatedFilter");
return lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_relatedFilter'];

};
c['isRelatedFilter__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setRelatedFilter__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_relatedFilter']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_relatedFilter'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto'];var stA1 = "relatedFilter";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setRelatedFilter__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isDesignerMode__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto'],"designerMode");
return lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_designerMode'];

};
c['isDesignerMode__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setDesignerMode__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_designerMode']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_designerMode'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto'];var stA1 = "designerMode";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setDesignerMode__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getConfiguration__Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto'],"configuration");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_configuration']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration;
(refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration = io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration(false))).constructor.cons__V.call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_configuration'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_configuration'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_configuration']['$instOf_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_configuration'], 'io.cloudoffice.platform.cockpit.searchbox.SearchBoxConfiguration');
return lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_configuration'];

    }
}}
};
c['getConfiguration__Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setConfiguration__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_configuration'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_configuration'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto'],"configuration", lcA2, lcA1);
return;

    }
}}
};
c['setConfiguration__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isEnterPressed__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto'],"enterPressed");
return lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_enterPressed'];

};
c['isEnterPressed__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setEnterPressed__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_enterPressed']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_enterPressed'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto'];var stA1 = "enterPressed";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
var lcA3 = lcA0;
(refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent(false))).enterKey__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2(lcA3);
return;

    }
}}
};
c['setEnterPressed__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getListComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto'],"listComponentDefinition");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_listComponentDefinition']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_ComponentDef;
(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_listComponentDefinition'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_listComponentDefinition'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_listComponentDefinition']['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_listComponentDefinition'], 'io.cloudoffice.platform.cockpit.api.ComponentDef');
return lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_listComponentDefinition'];

    }
}}
};
c['getListComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setListComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_listComponentDefinition'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_listComponentDefinition'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto'],"listComponentDefinition", lcA2, lcA1);
return;

    }
}}
};
c['setListComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getDetailComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto'],"detailComponentDefinition");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_detailComponentDefinition']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_ComponentDef;
(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_detailComponentDefinition'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_detailComponentDefinition'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_detailComponentDefinition']['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_detailComponentDefinition'], 'io.cloudoffice.platform.cockpit.api.ComponentDef');
return lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_detailComponentDefinition'];

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

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_detailComponentDefinition'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_detailComponentDefinition'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto'],"detailComponentDefinition", lcA2, lcA1);
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

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto'],"actionMenuComponentDefinition");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_actionMenuComponentDefinition']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_ComponentDef;
(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_actionMenuComponentDefinition'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_actionMenuComponentDefinition'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_actionMenuComponentDefinition']['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_actionMenuComponentDefinition'], 'io.cloudoffice.platform.cockpit.api.ComponentDef');
return lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_actionMenuComponentDefinition'];

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

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_actionMenuComponentDefinition'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_actionMenuComponentDefinition'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto'],"actionMenuComponentDefinition", lcA2, lcA1);
return;

    }
}}
};
c['setActionMenuComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.addItemToAutocompleteResultList__VLjava_util_Map_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto'];var stI1 = (15);var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 1);
Array.at(stA2, 0, lcA1);
invoker.runInBrowser__VI_3Ljava_lang_Object_2(stA0,stI1, stA2);
return;

};
c['addItemToAutocompleteResultList__VLjava_util_Map_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2(c._TYPE(),lcA0, lcA1);
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto'] = stA1;
var stA0 = lcA0;var stA1 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto'];var stA2 = "autocompleteresults";var stI3 = -1;var stA4 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 0);
var stA1 = invoker.createList__Ljava_util_List_2Ljava_lang_String_2I_3Ljava_lang_String_2(stA1,stA2, stI3, stA4);
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_autocompleteresults'] = stA1;
var stA0 = lcA0;var stA1 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto'];var stA2 = "configuredFilters";var stI3 = -1;var stA4 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 0);
var stA1 = invoker.createList__Ljava_util_List_2Ljava_lang_String_2I_3Ljava_lang_String_2(stA1,stA2, stI3, stA4);
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_configuredFilters'] = stA1;
var stA0 = lcA0;var stA1 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto'];var stA2 = "filters";var stI3 = -1;var stA4 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 0);
var stA1 = invoker.createList__Ljava_util_List_2Ljava_lang_String_2I_3Ljava_lang_String_2(stA1,stA2, stI3, stA4);
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_filters'] = stA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_loader'] = c._TYPE();
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_configuration'] = c._TYPE();
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_listComponentDefinition'] = c._TYPE();
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_detailComponentDefinition'] = c._TYPE();
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_actionMenuComponentDefinition'] = c._TYPE();
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2ZLio_cloudoffice_platform_cockpit_api_HelperItemView_2ZZZZLio_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_2ZLio_cloudoffice_platform_cockpit_api_ComponentDef_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2_3Lio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_2 = function(lcA1, lcA2, lcA3, lcA4, lcI5, lcA6, lcI7, lcI8, lcI9, lcI10, lcA11, lcI12, lcA13, lcA14, lcA15, lcA16) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_instance'] = lcA1;
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_overlayautocompleteplaceholder'] = lcA2;
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_autocompletetext'] = lcA3;
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_autocompletePlaceholderText'] = lcA4;
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_hasItemFilter'] = lcI5;
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_loader'] = lcA6;
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_filterOff'] = lcI7;
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_filterTypeAdded'] = lcI8;
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_relatedFilter'] = lcI9;
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_designerMode'] = lcI10;
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_configuration'] = lcA11;
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_enterPressed'] = lcI12;
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_listComponentDefinition'] = lcA13;
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_detailComponentDefinition'] = lcA14;
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_actionMenuComponentDefinition'] = lcA15;
invoker.initTo__VLjava_util_Collection_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto'],lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_autocompleteresults'], lcA16);
return;

};
CLS['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2ZLio_cloudoffice_platform_cockpit_api_HelperItemView_2ZZZZLio_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_2ZLio_cloudoffice_platform_cockpit_api_ComponentDef_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2_3Lio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_2'] = m;

    m.access = 129;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, (18));
var lcA3 = stA0;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, (18));
Array.at(stA2, 0, "instance");
Array.at(stA2, 1, "overlayautocompleteplaceholder");
Array.at(stA2, 2, "autocompletetext");
Array.at(stA2, 3, "autocompleteresults");
Array.at(stA2, 4, "autocompletePlaceholderText");
Array.at(stA2, 5, "hasItemFilter");
Array.at(stA2, (6), "configuredFilters");
Array.at(stA2, (7), "filters");
Array.at(stA2, (8), "loader");
Array.at(stA2, (9), "filterOff");
Array.at(stA2, (10), "filterTypeAdded");
Array.at(stA2, (11), "relatedFilter");
Array.at(stA2, (12), "designerMode");
Array.at(stA2, (13), "configuration");
Array.at(stA2, (14), "enterPressed");
Array.at(stA2, (15), "listComponentDefinition");
Array.at(stA2, (16), "detailComponentDefinition");
Array.at(stA2, (17), "actionMenuComponentDefinition");
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
if ((lcA3[0] || Array.at(lcA3, 0)) !== null && !(lcA3[0] || Array.at(lcA3, 0))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[0] || Array.at(lcA3, 0)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_instance'] = (lcA3[0] || Array.at(lcA3, 0));
if ((lcA3[1] || Array.at(lcA3, 1)) !== null && !(lcA3[1] || Array.at(lcA3, 1))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[1] || Array.at(lcA3, 1)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_overlayautocompleteplaceholder'] = (lcA3[1] || Array.at(lcA3, 1));
if ((lcA3[2] || Array.at(lcA3, 2)) !== null && !(lcA3[2] || Array.at(lcA3, 2))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[2] || Array.at(lcA3, 2)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_autocompletetext'] = (lcA3[2] || Array.at(lcA3, 2));
var stA0 = c.useAsArray___3Ljava_lang_Object_2Ljava_lang_Object_2((lcA3[3] || Array.at(lcA3, 3)));
var lcA4 = stA0;
var lcI5 = (lcA4).length;
var lcI6 = 0;
    }
    X_173: for (;;) { IF: if (gt <= 173) {

if ((lcI6) >= (lcI5)) { gt = 215; break IF; }
var lcA7 = (lcA4[lcI6] || Array.at(lcA4, lcI6));
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_autocompleteresults'];var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto'],(refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData || (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData = io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData(false))).constructor.$class, lcA7);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
lcI6++;
{ gt = 0; continue X_173; }
    }
    X_215: for (;;) { IF: if (gt <= 215) {

if ((lcA3[4] || Array.at(lcA3, 4)) !== null && !(lcA3[4] || Array.at(lcA3, 4))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[4] || Array.at(lcA3, 4)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_autocompletePlaceholderText'] = (lcA3[4] || Array.at(lcA3, 4));
var stA0 = lcA0;if (((lcA3[5] || Array.at(lcA3, 5))) !== null) { gt = 236; break IF; }
var stI1 = 0;{ gt = 248; break IF; }
    }
    X_236: for (;;) { IF: if (gt <= 236) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[5] || Array.at(lcA3, 5)));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_248: for (;;) { IF: if (gt <= 248) {
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_hasItemFilter'] = stI1;
var stA0 = c.useAsArray___3Ljava_lang_Object_2Ljava_lang_Object_2((lcA3[(6)] || Array.at(lcA3, (6))));
var lcA4 = stA0;
var lcI5 = (lcA4).length;
var lcI6 = 0;
    }
    X_268: for (;;) { IF: if (gt <= 268) {

if ((lcI6) >= (lcI5)) { gt = 310; break IF; }
var lcA7 = (lcA4[lcI6] || Array.at(lcA4, lcI6));
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_configuredFilters'];var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto'],(refs_io_cloudoffice_platform_cockpit_searchbox_FilterType || (refs_io_cloudoffice_platform_cockpit_searchbox_FilterType = io_cloudoffice_platform_cockpit_searchbox_FilterType(false))).constructor.$class, lcA7);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
lcI6++;
{ gt = 0; continue X_268; }
    }
    X_310: for (;;) { IF: if (gt <= 310) {

var stA0 = c.useAsArray___3Ljava_lang_Object_2Ljava_lang_Object_2((lcA3[(7)] || Array.at(lcA3, (7))));
var lcA4 = stA0;
var lcI5 = (lcA4).length;
var lcI6 = 0;
    }
    X_327: for (;;) { IF: if (gt <= 327) {

if ((lcI6) >= (lcI5)) { gt = 369; break IF; }
var lcA7 = (lcA4[lcI6] || Array.at(lcA4, lcI6));
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_filters'];var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto'],(refs_io_cloudoffice_platform_cockpit_searchbox_FilterType || (refs_io_cloudoffice_platform_cockpit_searchbox_FilterType = io_cloudoffice_platform_cockpit_searchbox_FilterType(false))).constructor.$class, lcA7);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
lcI6++;
{ gt = 0; continue X_327; }
    }
    X_369: for (;;) { IF: if (gt <= 369) {

var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto'],(refs_io_cloudoffice_platform_cockpit_api_HelperItemView || (refs_io_cloudoffice_platform_cockpit_api_HelperItemView = vm.io_cloudoffice_platform_cockpit_api_HelperItemView(false))).constructor.$class, (lcA3[(8)] || Array.at(lcA3, (8))));
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_loader'] = stA1;
var stA0 = lcA0;if (((lcA3[(9)] || Array.at(lcA3, (9)))) !== null) { gt = 398; break IF; }
var stI1 = 0;{ gt = 411; break IF; }
    }
    X_398: for (;;) { IF: if (gt <= 398) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(9)] || Array.at(lcA3, (9))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_411: for (;;) { IF: if (gt <= 411) {
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_filterOff'] = stI1;
var stA0 = lcA0;if (((lcA3[(10)] || Array.at(lcA3, (10)))) !== null) { gt = 426; break IF; }
var stI1 = 0;{ gt = 439; break IF; }
    }
    X_426: for (;;) { IF: if (gt <= 426) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(10)] || Array.at(lcA3, (10))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_439: for (;;) { IF: if (gt <= 439) {
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_filterTypeAdded'] = stI1;
var stA0 = lcA0;if (((lcA3[(11)] || Array.at(lcA3, (11)))) !== null) { gt = 454; break IF; }
var stI1 = 0;{ gt = 467; break IF; }
    }
    X_454: for (;;) { IF: if (gt <= 454) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(11)] || Array.at(lcA3, (11))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_467: for (;;) { IF: if (gt <= 467) {
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_relatedFilter'] = stI1;
var stA0 = lcA0;if (((lcA3[(12)] || Array.at(lcA3, (12)))) !== null) { gt = 482; break IF; }
var stI1 = 0;{ gt = 495; break IF; }
    }
    X_482: for (;;) { IF: if (gt <= 482) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(12)] || Array.at(lcA3, (12))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_495: for (;;) { IF: if (gt <= 495) {
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_designerMode'] = stI1;
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto'],(refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration = io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration(false))).constructor.$class, (lcA3[(13)] || Array.at(lcA3, (13))));
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_configuration'] = stA1;
var stA0 = lcA0;if (((lcA3[(14)] || Array.at(lcA3, (14)))) !== null) { gt = 527; break IF; }
var stI1 = 0;{ gt = 540; break IF; }
    }
    X_527: for (;;) { IF: if (gt <= 527) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(14)] || Array.at(lcA3, (14))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_540: for (;;) { IF: if (gt <= 540) {
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_enterPressed'] = stI1;
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto'],(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, (lcA3[(15)] || Array.at(lcA3, (15))));
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_listComponentDefinition'] = stA1;
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto'],(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, (lcA3[(16)] || Array.at(lcA3, (16))));
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_detailComponentDefinition'] = stA1;
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto'],(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, (lcA3[(17)] || Array.at(lcA3, (17))));
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_actionMenuComponentDefinition'] = stA1;
return;

    }
}}}}}}}}}}}}}}}}}}}
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"overlayautocompleteplaceholder");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getOverlayautocompleteplaceholder__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"autocompletetext");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getAutocompletetext__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"autocompleteresults");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_autocompleteresults']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"autocompletePlaceholderText");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getAutocompletePlaceholderText__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"hasItemFilter");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isHasItemFilter__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"configuredFilters");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_configuredFilters']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"filters");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_filters']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"loader");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_loader']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"filterOff");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isFilterOff__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"filterTypeAdded");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isFilterTypeAdded__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"relatedFilter");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isRelatedFilter__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
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
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_configuration']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"enterPressed");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isEnterPressed__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"listComponentDefinition");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_listComponentDefinition']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"detailComponentDefinition");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_detailComponentDefinition']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"actionMenuComponentDefinition");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_actionMenuComponentDefinition']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(125));
var stA0 = invoker.toString__Ljava_lang_String_2(lcA1);
return stA0;

};
c['toString__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto']);
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new io_cloudoffice_platform_cockpit_searchbox_SearchBoxView;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = lcA0.getInstance__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_instance'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getOverlayautocompleteplaceholder__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_overlayautocompleteplaceholder'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getAutocompletetext__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_autocompletetext'] = stA1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto'];var stA1 = lcA2.getAutocompleteresults__Ljava_util_List_2();
invoker.cloneList__VLjava_util_Collection_2Lnet_java_html_BrwsrCtx_2Ljava_util_Collection_2(stA0,stA1, lcA1, lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_autocompleteresults']);
var stA0 = lcA2;var stA1 = lcA0.getAutocompletePlaceholderText__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_autocompletePlaceholderText'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isHasItemFilter__Z();
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_hasItemFilter'] = stI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto'];var stA1 = lcA2.getConfiguredFilters__Ljava_util_List_2();
invoker.cloneList__VLjava_util_Collection_2Lnet_java_html_BrwsrCtx_2Ljava_util_Collection_2(stA0,stA1, lcA1, lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_configuredFilters']);
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto'];var stA1 = lcA2.getFilters__Ljava_util_List_2();
invoker.cloneList__VLjava_util_Collection_2Lnet_java_html_BrwsrCtx_2Ljava_util_Collection_2(stA0,stA1, lcA1, lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_filters']);
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_loader']) !== null) { gt = 109; break IF; }
var stA1 = null;{ gt = 133; break IF; }
    }
    X_109: for (;;) { IF: if (gt <= 109) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_loader']) !== (c._TYPE())) { gt = 125; break IF; }
var stA1 = c._TYPE();{ gt = 133; break IF; }
    }
    X_125: for (;;) { IF: if (gt <= 125) {

var stA1 = lcA0.getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_133: for (;;) { IF: if (gt <= 133) {
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_loader'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isFilterOff__Z();
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_filterOff'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isFilterTypeAdded__Z();
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_filterTypeAdded'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isRelatedFilter__Z();
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_relatedFilter'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isDesignerMode__Z();
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_designerMode'] = stI1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_configuration']) !== null) { gt = 180; break IF; }
var stA1 = null;{ gt = 204; break IF; }
    }
    X_180: for (;;) { IF: if (gt <= 180) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_configuration']) !== (c._TYPE())) { gt = 196; break IF; }
var stA1 = c._TYPE();{ gt = 204; break IF; }
    }
    X_196: for (;;) { IF: if (gt <= 196) {

var stA1 = lcA0.getConfiguration__Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_204: for (;;) { IF: if (gt <= 204) {
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_configuration'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isEnterPressed__Z();
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_enterPressed'] = stI1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_listComponentDefinition']) !== null) { gt = 227; break IF; }
var stA1 = null;{ gt = 251; break IF; }
    }
    X_227: for (;;) { IF: if (gt <= 227) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_listComponentDefinition']) !== (c._TYPE())) { gt = 243; break IF; }
var stA1 = c._TYPE();{ gt = 251; break IF; }
    }
    X_243: for (;;) { IF: if (gt <= 243) {

var stA1 = lcA0.getListComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_251: for (;;) { IF: if (gt <= 251) {
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_listComponentDefinition'] = stA1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_detailComponentDefinition']) !== null) { gt = 266; break IF; }
var stA1 = null;{ gt = 290; break IF; }
    }
    X_266: for (;;) { IF: if (gt <= 266) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_detailComponentDefinition']) !== (c._TYPE())) { gt = 282; break IF; }
var stA1 = c._TYPE();{ gt = 290; break IF; }
    }
    X_282: for (;;) { IF: if (gt <= 282) {

var stA1 = lcA0.getDetailComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_290: for (;;) { IF: if (gt <= 290) {
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_detailComponentDefinition'] = stA1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_actionMenuComponentDefinition']) !== null) { gt = 305; break IF; }
var stA1 = null;{ gt = 329; break IF; }
    }
    X_305: for (;;) { IF: if (gt <= 305) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_actionMenuComponentDefinition']) !== (c._TYPE())) { gt = 321; break IF; }
var stA1 = c._TYPE();{ gt = 329; break IF; }
    }
    X_321: for (;;) { IF: if (gt <= 321) {

var stA1 = lcA0.getActionMenuComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_329: for (;;) { IF: if (gt <= 329) {
stA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_actionMenuComponentDefinition'] = stA1;
return lcA2;

    }
}}}}}}}}}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2 = function() {
  var  lcA0 = this;
invoker.applyBindings__V(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto']);
return lcA0;

};
c['applyBindings__Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2'] = m;

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

var stI0 = lcA1 != null && lcA1['$instOf_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.searchbox.SearchBoxView');
var lcA2 = lcA1;
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_instance'], lcA2['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_instance']);
if ((stI0) != 0) { gt = 40; break IF; }
return 0;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_overlayautocompleteplaceholder'], lcA2['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_overlayautocompleteplaceholder']);
if ((stI0) != 0) { gt = 59; break IF; }
return 0;
    }
    X_59: for (;;) { IF: if (gt <= 59) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_autocompletetext'], lcA2['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_autocompletetext']);
if ((stI0) != 0) { gt = 78; break IF; }
return 0;
    }
    X_78: for (;;) { IF: if (gt <= 78) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_autocompleteresults']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_autocompleteresults']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 105; break IF; }
return 0;
    }
    X_105: for (;;) { IF: if (gt <= 105) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_autocompletePlaceholderText'], lcA2['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_autocompletePlaceholderText']);
if ((stI0) != 0) { gt = 124; break IF; }
return 0;
    }
    X_124: for (;;) { IF: if (gt <= 124) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_hasItemFilter']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_hasItemFilter']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 149; break IF; }
return 0;
    }
    X_149: for (;;) { IF: if (gt <= 149) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_configuredFilters']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_configuredFilters']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 176; break IF; }
return 0;
    }
    X_176: for (;;) { IF: if (gt <= 176) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_filters']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_filters']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 203; break IF; }
return 0;
    }
    X_203: for (;;) { IF: if (gt <= 203) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_loader']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_loader']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 230; break IF; }
return 0;
    }
    X_230: for (;;) { IF: if (gt <= 230) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_filterOff']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_filterOff']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 255; break IF; }
return 0;
    }
    X_255: for (;;) { IF: if (gt <= 255) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_filterTypeAdded']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_filterTypeAdded']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 280; break IF; }
return 0;
    }
    X_280: for (;;) { IF: if (gt <= 280) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_relatedFilter']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_relatedFilter']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 305; break IF; }
return 0;
    }
    X_305: for (;;) { IF: if (gt <= 305) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_designerMode']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_designerMode']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 330; break IF; }
return 0;
    }
    X_330: for (;;) { IF: if (gt <= 330) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_configuration']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_configuration']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 357; break IF; }
return 0;
    }
    X_357: for (;;) { IF: if (gt <= 357) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_enterPressed']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_enterPressed']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 382; break IF; }
return 0;
    }
    X_382: for (;;) { IF: if (gt <= 382) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_listComponentDefinition']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_listComponentDefinition']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 409; break IF; }
return 0;
    }
    X_409: for (;;) { IF: if (gt <= 409) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_detailComponentDefinition']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_detailComponentDefinition']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 436; break IF; }
return 0;
    }
    X_436: for (;;) { IF: if (gt <= 436) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_actionMenuComponentDefinition']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_actionMenuComponentDefinition']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 463; break IF; }
return 0;
    }
    X_463: for (;;) { IF: if (gt <= 463) {

return 1;

    }
}}}}}}}}}}}}}}}}}}}}}
};
c['equals__ZLjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.hashCode__I = function() {
  var  lcA0 = this;
var stA0 = invoker.getName__Ljava_lang_String_2(c.constructor.$class);
var stI0 = invoker.hashCode__I(stA0);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_instance'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_overlayautocompleteplaceholder'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_autocompletetext'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_autocompleteresults']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_autocompletePlaceholderText'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_hasItemFilter']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_configuredFilters']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_filters']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_loader']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_filterOff']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_filterTypeAdded']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_relatedFilter']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_designerMode']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_configuration']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_enterPressed']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_listComponentDefinition']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_detailComponentDefinition']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_actionMenuComponentDefinition']);
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
var stA0 = lcA0.clone__Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxView$Html4JavaType_2 = function() {
return c._TYPE();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2 = function(lcA0) {
return lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxView$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_searchbox_SearchBoxView$Html4JavaType;
(refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView$Html4JavaType || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView$Html4JavaType = io_cloudoffice_platform_cockpit_searchbox_SearchBoxView$Html4JavaType(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_searchbox_SearchBoxViewfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_searchbox_SearchBoxViewfillInstOf });
    io_cloudoffice_platform_cockpit_searchbox_SearchBoxViewfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/searchbox/SearchBoxView';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent;
    var refs_java_lang_Boolean;
    var refs_io_cloudoffice_platform_cockpit_api_HelperItemView;
    var refs_net_java_html_json_Models;
    var refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration;
    var refs_io_cloudoffice_platform_cockpit_api_ComponentDef;
    var refs_net_java_html_BrwsrCtx;
    var refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData;
    var refs_io_cloudoffice_platform_cockpit_searchbox_FilterType;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_proto'] = null;
    this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_instance'] = null;
    this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_overlayautocompleteplaceholder'] = null;
    this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_autocompletetext'] = null;
    this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_autocompleteresults'] = null;
    this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_autocompletePlaceholderText'] = null;
    this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_hasItemFilter'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_configuredFilters'] = null;
    this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_filters'] = null;
    this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_loader'] = null;
    this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_filterOff'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_filterTypeAdded'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_relatedFilter'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_designerMode'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_configuration'] = null;
    this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_enterPressed'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_listComponentDefinition'] = null;
    this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_detailComponentDefinition'] = null;
    this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView_prop_actionMenuComponentDefinition'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_searchbox_SearchBoxView = registerClass(exports,'io_cloudoffice_platform_cockpit_searchbox_SearchBoxView',io_cloudoffice_platform_cockpit_searchbox_SearchBoxView);


function io_cloudoffice_platform_cockpit_searchbox_SearchBoxView$Html4JavaType() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_searchbox_SearchBoxView$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView = io_cloudoffice_platform_cockpit_searchbox_SearchBoxView(false))).constructor.$class, (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent(false))).constructor.$class, (18), (15));
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"instance", 0, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"overlayautocompleteplaceholder", 1, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"autocompletetext", 2, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"autocompleteresults", 3, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"autocompletePlaceholderText", 4, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"hasItemFilter", 5, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"configuredFilters", (6), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"filters", (7), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"loader", (8), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"filterOff", (9), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"filterTypeAdded", (10), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"relatedFilter", (11), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"designerMode", (12), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"configuration", (13), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"enterPressed", (14), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"listComponentDefinition", (15), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"detailComponentDefinition", (16), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"actionMenuComponentDefinition", (17), 0, 0);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"removeFilters", 0);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"clearFilters", 1);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"closeAllActionMenu", 2);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"backtoList", 3);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"search", 4);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"resetAutocompletePanel", 5);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"setFilterFromAutoComplete", (6));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"loadItemDetail", (7));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"invokeTypeFilterChange", (8));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"addFilter", (9));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"invokeNewItemTypeFilterChange", (10));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"openConfig", (11));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"closeConfigurationPanel", (12));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"save", (13));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"resetConfiguration", (14));
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 88; break IF; }
  case 1:{ gt = 105; break IF; }
  case 2:{ gt = 122; break IF; }
  case 3:{ gt = 139; break IF; }
  case 4:{ gt = 153; break IF; }
  case 5:{ gt = 170; break IF; }
  case 6:{ gt = 190; break IF; }
  case 7:{ gt = 204; break IF; }
  case 8:{ gt = 218; break IF; }
  case 9:{ gt = 235; break IF; }
  case 10:{ gt = 255; break IF; }
  case 11:{ gt = 275; break IF; }
  case 12:{ gt = 295; break IF; }
  case 13:{ gt = 315; break IF; }
  case 14:{ gt = 332; break IF; }
  case 15:{ gt = 352; break IF; }
  case 16:{ gt = 369; break IF; }
  case 17:{ gt = 386; break IF; }
  default: { gt = 403; break IF; }
}
    }
    X_88: for (;;) { IF: if (gt <= 88) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView = io_cloudoffice_platform_cockpit_searchbox_SearchBoxView(false))).access$100__Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setInstance__VLjava_lang_String_2(stA1);
return;
    }
    X_105: for (;;) { IF: if (gt <= 105) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView = io_cloudoffice_platform_cockpit_searchbox_SearchBoxView(false))).access$100__Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setOverlayautocompleteplaceholder__VLjava_lang_String_2(stA1);
return;
    }
    X_122: for (;;) { IF: if (gt <= 122) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView = io_cloudoffice_platform_cockpit_searchbox_SearchBoxView(false))).access$100__Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setAutocompletetext__VLjava_lang_String_2(stA1);
return;
    }
    X_139: for (;;) { IF: if (gt <= 139) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView = io_cloudoffice_platform_cockpit_searchbox_SearchBoxView(false))).access$100__Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxView$Html4JavaType_2();
var stA1 = lcA1.getAutocompleteresults__Ljava_util_List_2();
invoker.replaceValue__VLjava_util_Collection_2Ljava_lang_Class_2Ljava_lang_Object_2(stA0,stA1, (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData || (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData = io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData(false))).constructor.$class, lcA3);
return;
    }
    X_153: for (;;) { IF: if (gt <= 153) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView = io_cloudoffice_platform_cockpit_searchbox_SearchBoxView(false))).access$100__Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setAutocompletePlaceholderText__VLjava_lang_String_2(stA1);
return;
    }
    X_170: for (;;) { IF: if (gt <= 170) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView = io_cloudoffice_platform_cockpit_searchbox_SearchBoxView(false))).access$100__Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setHasItemFilter__VZ(stI1);
return;
    }
    X_190: for (;;) { IF: if (gt <= 190) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView = io_cloudoffice_platform_cockpit_searchbox_SearchBoxView(false))).access$100__Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxView$Html4JavaType_2();
var stA1 = lcA1.getConfiguredFilters__Ljava_util_List_2();
invoker.replaceValue__VLjava_util_Collection_2Ljava_lang_Class_2Ljava_lang_Object_2(stA0,stA1, (refs_io_cloudoffice_platform_cockpit_searchbox_FilterType || (refs_io_cloudoffice_platform_cockpit_searchbox_FilterType = io_cloudoffice_platform_cockpit_searchbox_FilterType(false))).constructor.$class, lcA3);
return;
    }
    X_204: for (;;) { IF: if (gt <= 204) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView = io_cloudoffice_platform_cockpit_searchbox_SearchBoxView(false))).access$100__Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxView$Html4JavaType_2();
var stA1 = lcA1.getFilters__Ljava_util_List_2();
invoker.replaceValue__VLjava_util_Collection_2Ljava_lang_Class_2Ljava_lang_Object_2(stA0,stA1, (refs_io_cloudoffice_platform_cockpit_searchbox_FilterType || (refs_io_cloudoffice_platform_cockpit_searchbox_FilterType = io_cloudoffice_platform_cockpit_searchbox_FilterType(false))).constructor.$class, lcA3);
return;
    }
    X_218: for (;;) { IF: if (gt <= 218) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView = io_cloudoffice_platform_cockpit_searchbox_SearchBoxView(false))).access$100__Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_api_HelperItemView || (refs_io_cloudoffice_platform_cockpit_api_HelperItemView = vm.io_cloudoffice_platform_cockpit_api_HelperItemView(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_api_HelperItemView']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.api.HelperItemView');
stA0.setLoader__VLio_cloudoffice_platform_cockpit_api_HelperItemView_2(stA1);
return;
    }
    X_235: for (;;) { IF: if (gt <= 235) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView = io_cloudoffice_platform_cockpit_searchbox_SearchBoxView(false))).access$100__Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setFilterOff__VZ(stI1);
return;
    }
    X_255: for (;;) { IF: if (gt <= 255) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView = io_cloudoffice_platform_cockpit_searchbox_SearchBoxView(false))).access$100__Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setFilterTypeAdded__VZ(stI1);
return;
    }
    X_275: for (;;) { IF: if (gt <= 275) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView = io_cloudoffice_platform_cockpit_searchbox_SearchBoxView(false))).access$100__Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setRelatedFilter__VZ(stI1);
return;
    }
    X_295: for (;;) { IF: if (gt <= 295) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView = io_cloudoffice_platform_cockpit_searchbox_SearchBoxView(false))).access$100__Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setDesignerMode__VZ(stI1);
return;
    }
    X_315: for (;;) { IF: if (gt <= 315) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView = io_cloudoffice_platform_cockpit_searchbox_SearchBoxView(false))).access$100__Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration = io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.searchbox.SearchBoxConfiguration');
stA0.setConfiguration__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_2(stA1);
return;
    }
    X_332: for (;;) { IF: if (gt <= 332) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView = io_cloudoffice_platform_cockpit_searchbox_SearchBoxView(false))).access$100__Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setEnterPressed__VZ(stI1);
return;
    }
    X_352: for (;;) { IF: if (gt <= 352) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView = io_cloudoffice_platform_cockpit_searchbox_SearchBoxView(false))).access$100__Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.api.ComponentDef');
stA0.setListComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2(stA1);
return;
    }
    X_369: for (;;) { IF: if (gt <= 369) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView = io_cloudoffice_platform_cockpit_searchbox_SearchBoxView(false))).access$100__Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.api.ComponentDef');
stA0.setDetailComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2(stA1);
return;
    }
    X_386: for (;;) { IF: if (gt <= 386) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView = io_cloudoffice_platform_cockpit_searchbox_SearchBoxView(false))).access$100__Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.api.ComponentDef');
stA0.setActionMenuComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2(stA1);
return;
    }
    X_403: for (;;) { IF: if (gt <= 403) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}}}}}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2I = function(lcA1, lcI2) {
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
  case 6:{ gt = 121; break IF; }
  case 7:{ gt = 126; break IF; }
  case 8:{ gt = 131; break IF; }
  case 9:{ gt = 136; break IF; }
  case 10:{ gt = 144; break IF; }
  case 11:{ gt = 152; break IF; }
  case 12:{ gt = 160; break IF; }
  case 13:{ gt = 168; break IF; }
  case 14:{ gt = 173; break IF; }
  case 15:{ gt = 181; break IF; }
  case 16:{ gt = 186; break IF; }
  case 17:{ gt = 191; break IF; }
  default: { gt = 196; break IF; }
}
    }
    X_88: for (;;) { IF: if (gt <= 88) {

var stA0 = lcA1.getInstance__Ljava_lang_String_2();
return stA0;
    }
    X_93: for (;;) { IF: if (gt <= 93) {

var stA0 = lcA1.getOverlayautocompleteplaceholder__Ljava_lang_String_2();
return stA0;
    }
    X_98: for (;;) { IF: if (gt <= 98) {

var stA0 = lcA1.getAutocompletetext__Ljava_lang_String_2();
return stA0;
    }
    X_103: for (;;) { IF: if (gt <= 103) {

var stA0 = lcA1.getAutocompleteresults__Ljava_util_List_2();
return stA0;
    }
    X_108: for (;;) { IF: if (gt <= 108) {

var stA0 = lcA1.getAutocompletePlaceholderText__Ljava_lang_String_2();
return stA0;
    }
    X_113: for (;;) { IF: if (gt <= 113) {

var stI0 = lcA1.isHasItemFilter__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_121: for (;;) { IF: if (gt <= 121) {

var stA0 = lcA1.getConfiguredFilters__Ljava_util_List_2();
return stA0;
    }
    X_126: for (;;) { IF: if (gt <= 126) {

var stA0 = lcA1.getFilters__Ljava_util_List_2();
return stA0;
    }
    X_131: for (;;) { IF: if (gt <= 131) {

var stA0 = lcA1.getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
return stA0;
    }
    X_136: for (;;) { IF: if (gt <= 136) {

var stI0 = lcA1.isFilterOff__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_144: for (;;) { IF: if (gt <= 144) {

var stI0 = lcA1.isFilterTypeAdded__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_152: for (;;) { IF: if (gt <= 152) {

var stI0 = lcA1.isRelatedFilter__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_160: for (;;) { IF: if (gt <= 160) {

var stI0 = lcA1.isDesignerMode__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_168: for (;;) { IF: if (gt <= 168) {

var stA0 = lcA1.getConfiguration__Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_2();
return stA0;
    }
    X_173: for (;;) { IF: if (gt <= 173) {

var stI0 = lcA1.isEnterPressed__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_181: for (;;) { IF: if (gt <= 181) {

var stA0 = lcA1.getListComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
return stA0;
    }
    X_186: for (;;) { IF: if (gt <= 186) {

var stA0 = lcA1.getDetailComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
return stA0;
    }
    X_191: for (;;) { IF: if (gt <= 191) {

var stA0 = lcA1.getActionMenuComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
return stA0;
    }
    X_196: for (;;) { IF: if (gt <= 196) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}}}}}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.call__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 80; break IF; }
  case 1:{ gt = 98; break IF; }
  case 2:{ gt = 103; break IF; }
  case 3:{ gt = 108; break IF; }
  case 4:{ gt = 113; break IF; }
  case 5:{ gt = 130; break IF; }
  case 6:{ gt = 135; break IF; }
  case 7:{ gt = 153; break IF; }
  case 8:{ gt = 171; break IF; }
  case 9:{ gt = 185; break IF; }
  case 10:{ gt = 199; break IF; }
  case 11:{ gt = 213; break IF; }
  case 12:{ gt = 218; break IF; }
  case 13:{ gt = 223; break IF; }
  case 14:{ gt = 228; break IF; }
  case 15:{ gt = 233; break IF; }
  default: { gt = 254; break IF; }
}
    }
    X_80: for (;;) { IF: if (gt <= 80) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView = io_cloudoffice_platform_cockpit_searchbox_SearchBoxView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2(lcA1);
var stA1 = invoker.toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_searchbox_FilterType || (refs_io_cloudoffice_platform_cockpit_searchbox_FilterType = io_cloudoffice_platform_cockpit_searchbox_FilterType(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_searchbox_FilterType']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.searchbox.FilterType');
(refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent(false))).removeFilters__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2Lio_cloudoffice_platform_cockpit_searchbox_FilterType_2(stA0, stA1);
return;
    }
    X_98: for (;;) { IF: if (gt <= 98) {

(refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent(false))).clearFilters__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2(lcA1);
return;
    }
    X_103: for (;;) { IF: if (gt <= 103) {

(refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent(false))).closeAllActionMenu__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2(lcA1);
return;
    }
    X_108: for (;;) { IF: if (gt <= 108) {

(refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent(false))).backtoList__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2(lcA1);
return;
    }
    X_113: for (;;) { IF: if (gt <= 113) {

var stA0 = (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView = io_cloudoffice_platform_cockpit_searchbox_SearchBoxView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2(lcA1);
var stA0 = invoker.toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA0,(refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView = io_cloudoffice_platform_cockpit_searchbox_SearchBoxView(false))).constructor.$class, lcA3);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.searchbox.SearchBoxView');
(refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent(false))).search__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2(stA0);
return;
    }
    X_130: for (;;) { IF: if (gt <= 130) {

(refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent(false))).resetAutocompletePanel__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2(lcA1);
return;
    }
    X_135: for (;;) { IF: if (gt <= 135) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView = io_cloudoffice_platform_cockpit_searchbox_SearchBoxView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2(lcA1);
var stA1 = invoker.toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData || (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData = io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.searchbox.AutocompleteResultData');
(refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent(false))).setFilterFromAutoComplete__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2Lio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_2(stA0, stA1);
return;
    }
    X_153: for (;;) { IF: if (gt <= 153) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView = io_cloudoffice_platform_cockpit_searchbox_SearchBoxView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2(lcA1);
var stA1 = invoker.toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData || (refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData = io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.searchbox.AutocompleteResultData');
(refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent(false))).loadItemDetail__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2Lio_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData_2(stA0, stA1);
return;
    }
    X_171: for (;;) { IF: if (gt <= 171) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView = io_cloudoffice_platform_cockpit_searchbox_SearchBoxView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2(lcA1);
var stA1 = invoker.toString__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_String_2(stA1,lcA3, null);
(refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent(false))).invokeTypeFilterChange__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2Ljava_lang_String_2(stA0, stA1);
return;
    }
    X_185: for (;;) { IF: if (gt <= 185) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView = io_cloudoffice_platform_cockpit_searchbox_SearchBoxView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2(lcA1);
var stA1 = invoker.toString__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_String_2(stA1,lcA3, null);
(refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent(false))).addFilter__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2Ljava_lang_String_2(stA0, stA1);
return;
    }
    X_199: for (;;) { IF: if (gt <= 199) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView = io_cloudoffice_platform_cockpit_searchbox_SearchBoxView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2(lcA1);
var stA1 = invoker.toString__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_String_2(stA1,lcA3, null);
(refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent(false))).invokeNewItemTypeFilterChange__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2Ljava_lang_String_2(stA0, stA1);
return;
    }
    X_213: for (;;) { IF: if (gt <= 213) {

(refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent(false))).openConfig__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2(lcA1);
return;
    }
    X_218: for (;;) { IF: if (gt <= 218) {

(refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent(false))).closeConfigurationPanel__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2(lcA1);
return;
    }
    X_223: for (;;) { IF: if (gt <= 223) {

(refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent(false))).save__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2(lcA1);
return;
    }
    X_228: for (;;) { IF: if (gt <= 228) {

(refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent(false))).resetConfiguration__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2(lcA1);
return;
    }
    X_233: for (;;) { IF: if (gt <= 233) {

if (lcA3 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA3, 1, vm.java_lang_Object)) vm.java_lang_Class(false).castEx(lcA3, '');
if (lcA3 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA3, 1, vm.java_lang_Object)) vm.java_lang_Class(false).castEx(lcA3, '');
var lcA5 = lcA3;
if ((lcA5[0] || Array.at(lcA5, 0)) !== null && !(lcA5[0] || Array.at(lcA5, 0))['$instOf_java_util_Map']) vm.java_lang_Class(false).castEx((lcA5[0] || Array.at(lcA5, 0)), 'java.util.Map');
(refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent(false))).addItemToAutocompleteResultList__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2Ljava_util_Map_2(lcA1, (lcA5[0] || Array.at(lcA5, 0)));
return;
    }
    X_254: for (;;) { IF: if (gt <= 254) {
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
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.searchbox.SearchBoxView');
var stA0 = (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView = io_cloudoffice_platform_cockpit_searchbox_SearchBoxView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2I = function(lcA1, lcI2) {
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

(refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent(false))).enterKey__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2(lcA1);
return;
    }
    X_33: for (;;) { IF: if (gt <= 33) {

(refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent(false))).autocompleteSearch__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2(lcA1);
return;
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
    m = c.onMessage__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
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
    m = c.read__Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_searchbox_SearchBoxView;
(refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView = io_cloudoffice_platform_cockpit_searchbox_SearchBoxView(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxView$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView = io_cloudoffice_platform_cockpit_searchbox_SearchBoxView(false))).access$400__Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.searchbox.SearchBoxView');
lcA0.onMessage__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.searchbox.SearchBoxView');
lcA0.onChange__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.searchbox.SearchBoxView');
var stA0 = lcA0.cloneTo__Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.searchbox.SearchBoxView');
lcA0.call__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.searchbox.SearchBoxView');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.searchbox.SearchBoxView');
lcA0.setValue__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_searchbox_SearchBoxView$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_searchbox_SearchBoxView$Html4JavaTypefillInstOf });
    io_cloudoffice_platform_cockpit_searchbox_SearchBoxView$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/searchbox/SearchBoxView$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView;
    var refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent;
    var refs_org_netbeans_html_json_spi_Proto$Type;
    var refs_java_lang_String;
    var refs_io_cloudoffice_platform_cockpit_searchbox_AutocompleteResultData;
    var refs_java_lang_Boolean;
    var refs_io_cloudoffice_platform_cockpit_searchbox_FilterType;
    var refs_io_cloudoffice_platform_cockpit_api_HelperItemView;
    var refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration;
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
vm.io_cloudoffice_platform_cockpit_searchbox_SearchBoxView$Html4JavaType = io_cloudoffice_platform_cockpit_searchbox_SearchBoxView$Html4JavaType;

vm.io_cloudoffice_platform_cockpit_api_HelperItemView = link('io/cloudoffice/platform/cockpit/api/HelperItemView', function(f) { vm.io_cloudoffice_platform_cockpit_api_HelperItemView =  f; });
vm.io_cloudoffice_platform_cockpit_api_IconModel = link('io/cloudoffice/platform/cockpit/api/IconModel', function(f) { vm.io_cloudoffice_platform_cockpit_api_IconModel =  f; });
vm.io_cloudoffice_platform_cockpit_api_Logger = link('io/cloudoffice/platform/cockpit/api/Logger', function(f) { vm.io_cloudoffice_platform_cockpit_api_Logger =  f; });
vm.io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor = link('io/cloudoffice/platform/cockpit/api/JSON2ObjectConvertor', function(f) { vm.io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor =  f; });

function io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$2() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$2;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_api_AsyncRequest(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$view = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$2_val$view'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$2_val$view']; };
    m = CLS.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$2_val$view'] = lcA3;
(refs_io_cloudoffice_platform_cockpit_api_AsyncRequest || (refs_io_cloudoffice_platform_cockpit_api_AsyncRequest = vm.io_cloudoffice_platform_cockpit_api_AsyncRequest(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_Object_2'].call(lcA0, lcA1, lcA2);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.preparePostData__V = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Session || (refs_io_cloudoffice_platform_cockpit_api_Session = vm.io_cloudoffice_platform_cockpit_api_Session(false)))['getCompany__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var lcA1 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"itemId");
var lcA2 = stA0;
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Query;
(refs_io_cloudoffice_platform_cockpit_api_Query || (refs_io_cloudoffice_platform_cockpit_api_Query = vm.io_cloudoffice_platform_cockpit_api_Query(false))).constructor['cons__V'].call(stA0);
var lcA3 = stA0;
var stI0 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$2_val$view'].isHasItemFilter__Z();
var lcI4 = stI0;
if ((lcI4) == 0) { gt = 94; break IF; }
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$2_val$view'].getConfiguredFilters__Ljava_util_List_2();
var lcA5 = stA0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA5);
var lcA6 = stA0;
    }
    X_51: for (;;) { IF: if (gt <= 51) {

var stI0 = invoker.hasNext__Z(lcA6);
if ((stI0) == 0) { gt = 91; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA6);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_searchbox_FilterType']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.searchbox.FilterType');
var lcA7 = stA0;
var stA0 = invoker.getFromClause__Ljava_util_List_2(lcA3);
var stA1 = lcA7.getItemType__Ljava_lang_String_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
{ gt = 0; continue X_51; }
    }
    X_91: for (;;) { IF: if (gt <= 91) {
{ gt = 107; break IF; }
    }
    X_94: for (;;) { IF: if (gt <= 94) {

var stA0 = invoker.getFromClause__Ljava_util_List_2(lcA3);
var stI0 = invoker.addAll__ZLjava_util_Collection_2(stA0,(refs_io_cloudoffice_platform_cockpit_api_QueryMetaModel || (refs_io_cloudoffice_platform_cockpit_api_QueryMetaModel = vm.io_cloudoffice_platform_cockpit_api_QueryMetaModel(false)))['_VIRTUAL_ITEM_TYPES']());
    }
    X_107: for (;;) { IF: if (gt <= 107) {

invoker.setQuery__VLio_cloudoffice_platform_cockpit_api_Query_2(lcA0,lcA3);
var stA0 = new vm.java_util_ArrayList;
(refs_java_util_ArrayList || (refs_java_util_ArrayList = vm.java_util_ArrayList(false))).constructor['cons__V'].call(stA0);
var lcA5 = stA0;
var stA0 = new vm.java_util_HashMap;
(refs_java_util_HashMap || (refs_java_util_HashMap = vm.java_util_HashMap(false))).constructor['cons__V'].call(stA0);
var lcA6 = stA0;
var stA0 = new vm.java_util_HashMap;
(refs_java_util_HashMap || (refs_java_util_HashMap = vm.java_util_HashMap(false))).constructor['cons__V'].call(stA0);
var lcA7 = stA0;
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA6,"scopeGroup", lcA2);
var stA0 = invoker.getQuery__Lio_cloudoffice_platform_cockpit_api_Query_2(lcA0);
var stA0 = invoker.getFromClause__Ljava_util_List_2(stA0);
var stA0 = invoker.get__Ljava_lang_Object_2I(stA0,0);
if (stA0 !== null && !stA0['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA0, 'java.lang.String');
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(stA0,"USER_DEFINE");
if ((stI0) == 0) { gt = 186; break IF; }
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA6,"businessModelName", "UDI_ARTICLE");
    }
    X_186: for (;;) { IF: if (gt <= 186) {

var stA0 = lcA7;var stA1 = "searchKey";var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"'");
var stA3 = invoker.getView__Ljava_lang_Object_2(lcA0);
if (stA3 !== null && !stA3['$instOf_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView']) vm.java_lang_Class(false).castEx(stA3, 'io.cloudoffice.platform.cockpit.searchbox.SearchBoxView');
var stA3 = stA3.getAutocompletetext__Ljava_lang_String_2();
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,stA3);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"'");
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA7;var stA1 = "fromClause";var stA2 = invoker.getQuery__Lio_cloudoffice_platform_cockpit_api_Query_2(lcA0);
var stA2 = invoker.getFromClause__Ljava_util_List_2(stA2);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA7,"attributes", lcA6);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA7,"existingItems", lcA5);
var stA0 = lcA0;var stA1 = invoker.getEndpoint__Ljava_lang_String_2(lcA0);
invoker.put__VLjava_lang_String_2Ljava_lang_Object_2(stA0,stA1, lcA7);
return;

    }
}}}}}}
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
    function io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$2fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$2', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$2fillInstOf });
    io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$2fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/searchbox/SearchBoxComponent$2';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_AsyncRequest;
    var refs_io_cloudoffice_platform_cockpit_api_Session;
    var refs_io_cloudoffice_platform_cockpit_api_Query;
    var refs_io_cloudoffice_platform_cockpit_api_QueryMetaModel;
    var refs_java_util_ArrayList;
    var refs_java_util_HashMap;
    var refs_java_lang_StringBuilder;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$2_val$view'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$2 = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$2;

vm.java_util_HashMap = link('java/util/HashMap', function(f) { vm.java_util_HashMap =  f; });
vm.io_cloudoffice_platform_cockpit_api_QueryMetaModel = link('io/cloudoffice/platform/cockpit/api/QueryMetaModel', function(f) { vm.io_cloudoffice_platform_cockpit_api_QueryMetaModel =  f; });
vm.io_cloudoffice_platform_cockpit_api_Query = link('io/cloudoffice/platform/cockpit/api/Query', function(f) { vm.io_cloudoffice_platform_cockpit_api_Query =  f; });
vm.io_cloudoffice_platform_cockpit_api_AsyncRequest = link('io/cloudoffice/platform/cockpit/api/AsyncRequest', function(f) { vm.io_cloudoffice_platform_cockpit_api_AsyncRequest =  f; });
vm.io_cloudoffice_platform_cockpit_api_UtilValidate = link('io/cloudoffice/platform/cockpit/api/UtilValidate', function(f) { vm.io_cloudoffice_platform_cockpit_api_UtilValidate =  f; });
vm.java_util_ArrayList = link('java/util/ArrayList', function(f) { vm.java_util_ArrayList =  f; });
vm.io_cloudoffice_platform_cockpit_api_Components = link('io/cloudoffice/platform/cockpit/api/Components', function(f) { vm.io_cloudoffice_platform_cockpit_api_Components =  f; });
vm.io_cloudoffice_platform_cockpit_api_Event = link('io/cloudoffice/platform/cockpit/api/Event', function(f) { vm.io_cloudoffice_platform_cockpit_api_Event =  f; });
vm.io_cloudoffice_platform_cockpit_api_Session = link('io/cloudoffice/platform/cockpit/api/Session', function(f) { vm.io_cloudoffice_platform_cockpit_api_Session =  f; });

function io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$AddFilterListener() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$AddFilterListener;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$AddFilterListener_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$AddFilterListener_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$AddFilterListener_this$0'] = lcA1;
return;

};
CLS['cons__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onReceive__VLio_cloudoffice_platform_cockpit_api_Signal_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getPackets__Ljava_util_List_2(lcA1);
var stA0 = invoker.get__Ljava_lang_Object_2I(stA0,0);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_api_MapBuilder']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.api.MapBuilder');
var lcA2 = stA0;
if ((null) === (lcA2)) { gt = 34; break IF; }
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$AddFilterListener_this$0'];var stA1 = "addFilter";var stA2 = invoker.toJSON__Ljava_lang_String_2(lcA2);
invoker.invoke__VLjava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
    }
    X_34: for (;;) { IF: if (gt <= 34) {
return;

    }
}}
};
c['onReceive__VLio_cloudoffice_platform_cockpit_api_Signal_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$AddFilterListenerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$AddFilterListener', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$AddFilterListenerfillInstOf });
    io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$AddFilterListenerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/searchbox/SearchBoxComponent$AddFilterListener';
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
    this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$AddFilterListener_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$AddFilterListener = registerClass(exports,'io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$AddFilterListener',io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$AddFilterListener);

vm.io_cloudoffice_platform_cockpit_api_EventListener = link('io/cloudoffice/platform/cockpit/api/EventListener', function(f) { vm.io_cloudoffice_platform_cockpit_api_EventListener =  f; });

function io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$FunctionInvokeListener() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$FunctionInvokeListener;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$FunctionInvokeListener_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$FunctionInvokeListener_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$FunctionInvokeListener_this$0'] = lcA1;
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
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$FunctionInvokeListener_this$0'];var stA1 = (refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false)))['valueOf__Ljava_lang_String_2Ljava_lang_Object_2'](lcA2);
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
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent_2Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$1_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
c.constructor.cons__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent_2.call(lcA0, lcA1);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$FunctionInvokeListenerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$FunctionInvokeListener', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$FunctionInvokeListenerfillInstOf });
    io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$FunctionInvokeListenerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/searchbox/SearchBoxComponent$FunctionInvokeListener';
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
    this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$FunctionInvokeListener_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$FunctionInvokeListener = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$FunctionInvokeListener;


function io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$DesignModeListener() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$DesignModeListener;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$DesignModeListener_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$DesignModeListener_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$DesignModeListener_this$0'] = lcA1;
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
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$DesignModeListener_this$0'];var stA1 = (refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false)))['valueOf__Ljava_lang_String_2Ljava_lang_Object_2'](lcA2);
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
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent_2Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$1_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
c.constructor.cons__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent_2.call(lcA0, lcA1);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$DesignModeListenerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$DesignModeListener', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$DesignModeListenerfillInstOf });
    io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$DesignModeListenerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/searchbox/SearchBoxComponent$DesignModeListener';
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
    this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$DesignModeListener_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$DesignModeListener = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$DesignModeListener;


function io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$LoadInitialDataListener() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$LoadInitialDataListener;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$LoadInitialDataListener_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$LoadInitialDataListener_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$LoadInitialDataListener_this$0'] = lcA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.onReceive__VLio_cloudoffice_platform_cockpit_api_Signal_2 = function(lcA1) {
  var  lcA0 = this;
return;

};
c['onReceive__VLio_cloudoffice_platform_cockpit_api_Signal_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent_2Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$1_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
c.constructor.cons__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent_2.call(lcA0, lcA1);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$LoadInitialDataListenerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$LoadInitialDataListener', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$LoadInitialDataListenerfillInstOf });
    io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$LoadInitialDataListenerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/searchbox/SearchBoxComponent$LoadInitialDataListener';
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
    this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$LoadInitialDataListener_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$LoadInitialDataListener = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$LoadInitialDataListener;


function io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$NewItemFilterListener() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$NewItemFilterListener;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$NewItemFilterListener_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$NewItemFilterListener_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$NewItemFilterListener_this$0'] = lcA1;
return;

};
CLS['cons__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onReceive__VLio_cloudoffice_platform_cockpit_api_Signal_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcA2 = null;
var stA0 = invoker.getPackets__Ljava_util_List_2(lcA1);
var stI0 = invoker.isEmpty__Z(stA0);
if ((stI0) != 0) { gt = 32; break IF; }
var stA0 = invoker.getPackets__Ljava_util_List_2(lcA1);
var stA0 = invoker.get__Ljava_lang_Object_2I(stA0,0);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_api_MapBuilder']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.api.MapBuilder');
var lcA2 = stA0;
    }
    X_32: for (;;) { IF: if (gt <= 32) {

if ((null) === (lcA2)) { gt = 50; break IF; }
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$NewItemFilterListener_this$0'];var stA1 = "invokeNewItemTypeFilterChange";var stA2 = invoker.toJSON__Ljava_lang_String_2(lcA2);
invoker.invoke__VLjava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
    }
    X_50: for (;;) { IF: if (gt <= 50) {
return;

    }
}}}
};
c['onReceive__VLio_cloudoffice_platform_cockpit_api_Signal_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$NewItemFilterListenerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$NewItemFilterListener', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$NewItemFilterListenerfillInstOf });
    io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$NewItemFilterListenerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/searchbox/SearchBoxComponent$NewItemFilterListener';
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
    this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$NewItemFilterListener_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$NewItemFilterListener = registerClass(exports,'io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$NewItemFilterListener',io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$NewItemFilterListener);


function io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$FilterListener() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$FilterListener;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$FilterListener_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$FilterListener_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$FilterListener_this$0'] = lcA1;
return;

};
CLS['cons__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onReceive__VLio_cloudoffice_platform_cockpit_api_Signal_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcA2 = null;
var stA0 = invoker.getPackets__Ljava_util_List_2(lcA1);
var stI0 = invoker.isEmpty__Z(stA0);
if ((stI0) != 0) { gt = 32; break IF; }
var stA0 = invoker.getPackets__Ljava_util_List_2(lcA1);
var stA0 = invoker.get__Ljava_lang_Object_2I(stA0,0);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_api_MapBuilder']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.api.MapBuilder');
var lcA2 = stA0;
    }
    X_32: for (;;) { IF: if (gt <= 32) {

var stA0 = invoker.getAction__Ljava_lang_String_2(lcA1);
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(stA0,"filterdefault");
if ((stI0) == 0) { gt = 64; break IF; }
if ((null) === (lcA2)) { gt = 64; break IF; }
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$FilterListener_this$0'];var stA1 = "invokeTypeFilterChange";var stA2 = invoker.toJSON__Ljava_lang_String_2(lcA2);
invoker.invoke__VLjava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
    }
    X_64: for (;;) { IF: if (gt <= 64) {

var stA0 = invoker.getAction__Ljava_lang_String_2(lcA1);
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(stA0,"filterfromsession");
if ((stI0) == 0) { gt = 122; break IF; }
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Session || (refs_io_cloudoffice_platform_cockpit_api_Session = vm.io_cloudoffice_platform_cockpit_api_Session(false)))['getSelectedItem__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var lcA3 = stA0;
if ((null) === (lcA3)) { gt = 122; break IF; }
var stA0 = null;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA3,"itemId");
if ((stA0) === (stA1)) { gt = 122; break IF; }
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA3,"itemId");
var stI0 = invoker.isEmpty__Z(stA0);
if ((stI0) != 0) { gt = 122; break IF; }
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$FilterListener_this$0'];var stA1 = "invokeTypeFilterChange";var stA2 = invoker.toJSON__Ljava_lang_String_2(lcA3);
invoker.invoke__VLjava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
    }
    X_122: for (;;) { IF: if (gt <= 122) {

var stA0 = invoker.getAction__Ljava_lang_String_2(lcA1);
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(stA0,"filterclean");
if ((stI0) == 0) { gt = 166; break IF; }
if ((null) === (lcA2)) { gt = 157; break IF; }
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$FilterListener_this$0'];var stA1 = "removeFilters";var stA2 = invoker.toJSON__Ljava_lang_String_2(lcA2);
invoker.invoke__VLjava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
{ gt = 166; break IF; }
    }
    X_157: for (;;) { IF: if (gt <= 157) {

invoker.invoke__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$FilterListener_this$0'],"removeFilters");
    }
    X_166: for (;;) { IF: if (gt <= 166) {
return;

    }
}}}}}}
};
c['onReceive__VLio_cloudoffice_platform_cockpit_api_Signal_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$FilterListenerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$FilterListener', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$FilterListenerfillInstOf });
    io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$FilterListenerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/searchbox/SearchBoxComponent$FilterListener';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_EventListener(false).constructor.$class
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_Session;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$FilterListener_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$FilterListener = registerClass(exports,'io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$FilterListener',io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$FilterListener);


function io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$LoginEventListener() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$LoginEventListener;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$LoginEventListener_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$LoginEventListener_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$LoginEventListener_this$0'] = lcA1;
return;

};
CLS['cons__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent_2'] = m;

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
Array.at(stA0, 0, "searchbox");
(refs_io_cloudoffice_platform_cockpit_js_VIEW || (refs_io_cloudoffice_platform_cockpit_js_VIEW = vm.io_cloudoffice_platform_cockpit_js_VIEW(false)))['render__V_3Ljava_lang_String_2'](stA0);
var stA0 = invoker.getInstanceId__Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$LoginEventListener_this$0']);
var lcA2 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['configFetchEndpoint__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2']("searchbox", lcA2);
var stA2 = null;var stA3 = new io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$LoginEventListener$1;
(refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$LoginEventListener$1 || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$LoginEventListener$1 = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$LoginEventListener$1(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$LoginEventListener_2.call(stA3, lcA0);
invoker.fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

};
    m.access = 0;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$LoginEventListenerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$LoginEventListener', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$LoginEventListenerfillInstOf });
    io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$LoginEventListenerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/searchbox/SearchBoxComponent$LoginEventListener';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_EventListener(false).constructor.$class
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_js_VIEW;
    var refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration;
    var refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$LoginEventListener$1;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$LoginEventListener_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$LoginEventListener = registerClass(exports,'io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$LoginEventListener',io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$LoginEventListener);


function io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$LoginEventListener$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$LoginEventListener$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$1 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$LoginEventListener$1_this$1'] = v; return this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$LoginEventListener$1_this$1']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$LoginEventListener_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$LoginEventListener$1_this$1'] = lcA1;
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2'](lcA1);
var lcA2 = stA0;
var stA0 = new io_cloudoffice_platform_cockpit_searchbox_SearchBoxView;
(refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView || (refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView = io_cloudoffice_platform_cockpit_searchbox_SearchBoxView(false))).constructor.cons__V.call(stA0);
var lcA3 = stA0;
var stA0 = lcA3;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"instance");
stA0.setInstance__VLjava_lang_String_2(stA1);
c.prepareConfigurationModelFromJSON__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2.call(lcA0, lcA3, lcA2);
invoker.setView__VLjava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$LoginEventListener$1_this$1']['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$LoginEventListener_this$0'],lcA3);
var stA0 = invoker.getDefaultViewName__Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$LoginEventListener$1_this$1']['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$LoginEventListener_this$0']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['toRaw__Ljava_lang_Object_2Ljava_lang_Object_2'](lcA3);
(refs_io_cloudoffice_platform_cockpit_js_VIEW || (refs_io_cloudoffice_platform_cockpit_js_VIEW = vm.io_cloudoffice_platform_cockpit_js_VIEW(false)))['bind__VLjava_lang_String_2Ljava_lang_Object_2'](stA0, stA1);
return;

};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.prepareConfigurationModelFromJSON__VLio_cloudoffice_platform_cockpit_searchbox_SearchBoxView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA1.getConfiguration__Lio_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration_2();
var lcA3 = stA0;
var stA0 = invoker.getJsonObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA2,"configuration");
var lcA4 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_Object_2'](lcA4);
if ((stI0) == 0) { gt = 530; break IF; }
var stI0 = invoker.getBoolean__ZLjava_lang_String_2(lcA4,"hasItemFilter");
var lcI5 = stI0;
lcA1.setHasItemFilter__VZ(lcI5);
lcA3.setHasItemFilter__VZ(lcI5);
var stA0 = lcA1.getConfiguredFilters__Ljava_util_List_2();
var stI0 = invoker.isEmpty__Z(stA0);
if ((stI0) != 0) { gt = 63; break IF; }
var stA0 = lcA1.getConfiguredFilters__Ljava_util_List_2();
invoker.clear__V(stA0);
    }
    X_63: for (;;) { IF: if (gt <= 63) {

var stA0 = lcA3.getFilters__Ljava_util_List_2();
var stI0 = invoker.isEmpty__Z(stA0);
if ((stI0) != 0) { gt = 84; break IF; }
var stA0 = lcA3.getFilters__Ljava_util_List_2();
invoker.clear__V(stA0);
    }
    X_84: for (;;) { IF: if (gt <= 84) {

var stA0 = invoker.getJSONArray__Lorg_json_JSONArray_2Ljava_lang_String_2(lcA4,"filters");
var stA0 = invoker.toList__Ljava_util_List_2(stA0);
var lcA6 = stA0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA6);
var lcA7 = stA0;
    }
    X_105: for (;;) { IF: if (gt <= 105) {

var stI0 = invoker.hasNext__Z(lcA7);
if ((stI0) == 0) { gt = 239; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA7);
var lcA8 = stA0;
if (lcA8 !== null && !lcA8['$instOf_java_util_Map']) vm.java_lang_Class(false).castEx(lcA8, 'java.util.Map');
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_util_Map_2'](lcA8);
var lcA9 = stA0;
var stA0 = new io_cloudoffice_platform_cockpit_searchbox_FilterType;
(refs_io_cloudoffice_platform_cockpit_searchbox_FilterType || (refs_io_cloudoffice_platform_cockpit_searchbox_FilterType = io_cloudoffice_platform_cockpit_searchbox_FilterType(false))).constructor.cons__V.call(stA0);
var lcA10 = stA0;
var stA0 = lcA10;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA9,"itemId");
stA0.setItemId__VLjava_lang_String_2(stA1);
var stA0 = lcA10;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA9,"itemType");
stA0.setItemType__VLjava_lang_String_2(stA1);
var stA0 = lcA10;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA9,"itemName");
stA0.setItemName__VLjava_lang_String_2(stA1);
var stA0 = lcA10;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA9,"filterType");
stA0.setFilterType__VLjava_lang_String_2(stA1);
var stI0 = invoker.getBoolean__ZLjava_lang_String_2(lcA9,"isSelected");
var lcI11 = stI0;
lcA10.setIsSelected__VZ(lcI11);
if ((lcI11) == 0) { gt = 224; break IF; }
var stA0 = lcA1.getConfiguredFilters__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA10);
    }
    X_224: for (;;) { IF: if (gt <= 224) {

var stA0 = lcA3.getFilters__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA10);
{ gt = 0; continue X_105; }
    }
    X_239: for (;;) { IF: if (gt <= 239) {

lcA1.setAutocompletePlaceholderText__VLjava_lang_String_2("Type here...");
var stA0 = lcA1.getConfiguredFilters__Ljava_util_List_2();
var stI0 = invoker.size__I(stA0);
if ((stI0) <= 0) { gt = 342; break IF; }
var stA0 = lcA1.getConfiguredFilters__Ljava_util_List_2();
var stA0 = invoker.get__Ljava_lang_Object_2I(stA0,0);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_searchbox_FilterType']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.searchbox.FilterType');
var stA0 = stA0.getItemType__Ljava_lang_String_2();
var lcA7 = stA0;
var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"PERSON");
if ((stI0) == 0) { gt = 290; break IF; }
var stA0 = "CONTACT";{ gt = 292; break IF; }
    }
    X_290: for (;;) { IF: if (gt <= 290) {

var stA0 = lcA7;    }
    X_292: for (;;) { IF: if (gt <= 292) {
var lcA7 = stA0;
var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,"USER_DEFINE");
if ((stI0) == 0) { gt = 309; break IF; }
var stA0 = "ARTICLE";{ gt = 311; break IF; }
    }
    X_309: for (;;) { IF: if (gt <= 309) {

var stA0 = lcA7;    }
    X_311: for (;;) { IF: if (gt <= 311) {
var lcA7 = stA0;
var stA0 = lcA1;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"Type for ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA7);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," here...");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
stA0.setAutocompletePlaceholderText__VLjava_lang_String_2(stA1);
    }
    X_342: for (;;) { IF: if (gt <= 342) {

var stA0 = invoker.getJSONObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA4,"listComponentDefinition");
var lcA7 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA7,"component");
var lcA8 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA7,"instanceId");
var lcA9 = stA0;
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_ComponentDef;
(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor['cons__V'].call(stA0);
var lcA10 = stA0;
invoker.setComponent__VLjava_lang_String_2(lcA10,lcA8);
invoker.setInstanceId__VLjava_lang_String_2(lcA10,lcA9);
lcA1.setListComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2(lcA10);
lcA3.setListComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2(lcA10);
var stA0 = invoker.getJSONObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA4,"detailComponentDefinition");
var lcA11 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA11,"component");
var lcA12 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA11,"instanceId");
var lcA13 = stA0;
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_ComponentDef;
(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor['cons__V'].call(stA0);
var lcA10 = stA0;
invoker.setComponent__VLjava_lang_String_2(lcA10,lcA12);
invoker.setInstanceId__VLjava_lang_String_2(lcA10,lcA13);
lcA1.setDetailComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2(lcA10);
lcA3.setDetailComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2(lcA10);
var stA0 = invoker.getJSONObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA4,"actionMenuComponentDefinition");
var lcA14 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA14,"component");
var lcA15 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA14,"instanceId");
var lcA16 = stA0;
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_ComponentDef;
(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor['cons__V'].call(stA0);
var lcA10 = stA0;
invoker.setComponent__VLjava_lang_String_2(lcA10,lcA15);
invoker.setInstanceId__VLjava_lang_String_2(lcA10,lcA16);
lcA1.setActionMenuComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2(lcA10);
lcA3.setActionMenuComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2(lcA10);
    }
    X_530: for (;;) { IF: if (gt <= 530) {
return;

    }
}}}}}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$LoginEventListener$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$LoginEventListener$1', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$LoginEventListener$1fillInstOf });
    io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$LoginEventListener$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/searchbox/SearchBoxComponent$LoginEventListener$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65568;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView;
    var refs_net_java_html_json_Models;
    var refs_io_cloudoffice_platform_cockpit_js_VIEW;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_io_cloudoffice_platform_cockpit_searchbox_FilterType;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_api_ComponentDef;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$LoginEventListener$1_this$1'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$LoginEventListener$1 = io_cloudoffice_platform_cockpit_searchbox_SearchBoxComponent$LoginEventListener$1;

vm.io_cloudoffice_platform_cockpit_js_VIEW = link('io/cloudoffice/platform/cockpit/js/VIEW', function(f) { vm.io_cloudoffice_platform_cockpit_js_VIEW =  f; });
vm.io_cloudoffice_platform_cockpit_api_AbstractComponent = link('io/cloudoffice/platform/cockpit/api/AbstractComponent', function(f) { vm.io_cloudoffice_platform_cockpit_api_AbstractComponent =  f; });
vm.io_cloudoffice_platform_cockpit_api_MapBuilder = link('io/cloudoffice/platform/cockpit/api/MapBuilder', function(f) { vm.io_cloudoffice_platform_cockpit_api_MapBuilder =  f; });
vm.io_cloudoffice_platform_cockpit_api_ServerCallback = link('io/cloudoffice/platform/cockpit/api/ServerCallback', function(f) { vm.io_cloudoffice_platform_cockpit_api_ServerCallback =  f; });

function io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration$1fillInstOf });
    io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/searchbox/SearchBoxConfiguration$1';
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
vm.io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration$1 = io_cloudoffice_platform_cockpit_searchbox_SearchBoxConfiguration$1;


function io_cloudoffice_platform_cockpit_searchbox_SearchBoxView$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_searchbox_SearchBoxView$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_searchbox_SearchBoxView$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_searchbox_SearchBoxView$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_searchbox_SearchBoxView$1fillInstOf });
    io_cloudoffice_platform_cockpit_searchbox_SearchBoxView$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/searchbox/SearchBoxView$1';
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
vm.io_cloudoffice_platform_cockpit_searchbox_SearchBoxView$1 = io_cloudoffice_platform_cockpit_searchbox_SearchBoxView$1;

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
  invoker.getRequest__Lio_cloudoffice_platform_cockpit_api_AsyncRequest_2 = function(target) {
    return target['getRequest__Lio_cloudoffice_platform_cockpit_api_AsyncRequest_2']();
  };
  invoker.getView__Ljava_lang_Object_2 = function(target) {
    return target['getView__Ljava_lang_Object_2']();
  };
  invoker.getArray__Ljava_util_List_2 = function(target) {
    return target['getArray__Ljava_util_List_2']();
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
  invoker.setActive__VZ = function(target, p1) {
    return target['setActive__VZ'](p1);
  };
  invoker.attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2 = function(target, p1, p2) {
    return target['attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2'](p1,p2);
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
  invoker.add__ZLjava_lang_Object_2 = function(target, p1) {
    return target['add__ZLjava_lang_Object_2'](p1);
  };
  invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_util_List_2 = function(target, p1, p2) {
    return target['addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_util_List_2'](p1,p2);
  };
  invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2 = function(target, p1, p2) {
    return target['addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2'](p1,p2);
  };
  invoker.get__Ljava_lang_Object_2I = function(target, p1) {
    return target['get__Ljava_lang_Object_2I'](p1);
  };
  invoker.isEmpty__Z = function(target) {
    return target['isEmpty__Z']();
  };
  invoker.size__I = function(target) {
    return target['size__I']();
  };
  invoker.call__VLio_cloudoffice_platform_cockpit_api_ServerCallback_2 = function(target, p1) {
    return target['call__VLio_cloudoffice_platform_cockpit_api_ServerCallback_2'](p1);
  };
  invoker.toJSON__Ljava_lang_String_2 = function(target) {
    return target['toJSON__Ljava_lang_String_2']();
  };
  invoker.getObject__Ljava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2 = function(target, p1, p2) {
    return target['getObject__Ljava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2'](p1,p2);
  };
  invoker.replaceAll__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2 = function(target, p1, p2) {
    return target['replaceAll__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'](p1,p2);
  };
  invoker.getString__Ljava_lang_String_2Ljava_lang_String_2 = function(target, p1) {
    return target['getString__Ljava_lang_String_2Ljava_lang_String_2'](p1);
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
  invoker.getJsonObject__Lorg_json_JSONObject_2Ljava_lang_String_2 = function(target, p1) {
    return target['getJsonObject__Lorg_json_JSONObject_2Ljava_lang_String_2'](p1);
  };
  invoker.getBoolean__ZLjava_lang_String_2 = function(target, p1) {
    return target['getBoolean__ZLjava_lang_String_2'](p1);
  };
  invoker.getJSONArray__Lorg_json_JSONArray_2Ljava_lang_String_2 = function(target, p1) {
    return target['getJSONArray__Lorg_json_JSONArray_2Ljava_lang_String_2'](p1);
  };
  invoker.toList__Ljava_util_List_2 = function(target) {
    return target['toList__Ljava_util_List_2']();
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
  invoker.equals__ZLjava_lang_Object_2 = function(target, p1) {
    return target['equals__ZLjava_lang_Object_2'](p1);
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
  invoker.runInBrowser__VI_3Ljava_lang_Object_2 = function(target, p1, p2) {
    return target['runInBrowser__VI_3Ljava_lang_Object_2'](p1,p2);
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
  invoker.getFromClause__Ljava_util_List_2 = function(target) {
    return target['getFromClause__Ljava_util_List_2']();
  };
  invoker.addAll__ZLjava_util_Collection_2 = function(target, p1) {
    return target['addAll__ZLjava_util_Collection_2'](p1);
  };
  invoker.setQuery__VLio_cloudoffice_platform_cockpit_api_Query_2 = function(target, p1) {
    return target['setQuery__VLio_cloudoffice_platform_cockpit_api_Query_2'](p1);
  };
  invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(target, p1, p2) {
    return target['put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2'](p1,p2);
  };
  invoker.getQuery__Lio_cloudoffice_platform_cockpit_api_Query_2 = function(target) {
    return target['getQuery__Lio_cloudoffice_platform_cockpit_api_Query_2']();
  };
  invoker.equalsIgnoreCase__ZLjava_lang_String_2 = function(target, p1) {
    return target['equalsIgnoreCase__ZLjava_lang_String_2'](p1);
  };
  invoker.getEndpoint__Ljava_lang_String_2 = function(target) {
    return target['getEndpoint__Ljava_lang_String_2']();
  };
  invoker.put__VLjava_lang_String_2Ljava_lang_Object_2 = function(target, p1, p2) {
    return target['put__VLjava_lang_String_2Ljava_lang_Object_2'](p1,p2);
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
  invoker.getAction__Ljava_lang_String_2 = function(target) {
    return target['getAction__Ljava_lang_String_2']();
  };
  invoker.setView__VLjava_lang_Object_2 = function(target, p1) {
    return target['setView__VLjava_lang_Object_2'](p1);
  };
  invoker.getDefaultViewName__Ljava_lang_String_2 = function(target) {
    return target['getDefaultViewName__Ljava_lang_String_2']();
  };
  exports['registerResource']('META-INF/MANIFEST.MF', 'TWFuaWZlc3QtVmVyc2lvbjogMS4wDQpCbmQtTGFzdE1vZGlmaWVkOiAxNTk3NzY0MDM2MzA0DQpCdWlsZC1KZGs6IDEuOC4wXzEzMQ0KQnVpbHQtQnk6IGV1c2lhDQpCdW5kbGUtTWFuaWZlc3RWZXJzaW9uOiAyDQpCdW5kbGUtTmFtZTogR2FkZ2V0IFNlYXJjaGJveA0KQnVuZGxlLVN5bWJvbGljTmFtZTogaW8uY2xvdWRvZmZpY2UucGxhdGZvcm0uY29ja3BpdC5zZWFyY2hib3gNCkJ1bmRsZS1WZXJzaW9uOiAxLjEuMA0KQ3JlYXRlZC1CeTogQXBhY2hlIE1hdmVuIEJ1bmRsZSBQbHVnaW4NCkV4cG9ydC1QYWNrYWdlOiBpby5jbG91ZG9mZmljZS5wbGF0Zm9ybS5jb2NrcGl0LnNlYXJjaGJveDt1c2VzOj0iaW8uY2xvdQ0KIGRvZmZpY2UucGxhdGZvcm0uY29ja3BpdC5hcGkiO3ZlcnNpb249IjEuMS4wIg0KSW1wb3J0LVBhY2thZ2U6IGlvLmNsb3Vkb2ZmaWNlLnBsYXRmb3JtLmNvY2twaXQuYXBpO3ZlcnNpb249IlsxLjEsMikiLGlvDQogLmNsb3Vkb2ZmaWNlLnBsYXRmb3JtLmNvY2twaXQuanM7dmVyc2lvbj0iWzEuMSwyKSIsbmV0LmphdmEuaHRtbDt2ZXJzaW8NCiBuPSJbMS42LDIpIixuZXQuamF2YS5odG1sLmpzb247dmVyc2lvbj0iWzEuNiwyKSIsb3JnLmpzb247dmVyc2lvbj0iWzIwMQ0KIDgwODEzLjAsMjAxODA4MTQpIixvcmcubmV0YmVhbnMuaHRtbC5qc29uLnNwaTt2ZXJzaW9uPSJbMS42LDIpIg0KVG9vbDogQm5kLTIuMS4wLjIwMTMwNDI2LTEyMjIxMw0K');
});