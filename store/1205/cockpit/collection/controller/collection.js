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

function io_cloudoffice_platform_cockpit_collection_CollectionComponent$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_collection_CollectionComponent$1;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_api_ServerCallback(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$collectionName = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$1_val$collectionName'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$1_val$collectionName']; };
    m = CLS.cons__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$1_val$collectionName'] = lcA1;
(refs_io_cloudoffice_platform_cockpit_api_ServerCallback || (refs_io_cloudoffice_platform_cockpit_api_ServerCallback = vm.io_cloudoffice_platform_cockpit_api_ServerCallback(false))).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.process__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getRequest__Lio_cloudoffice_platform_cockpit_api_AsyncRequest_2(lcA0);
var stA0 = invoker.getView__Ljava_lang_Object_2(stA0);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_collection_CollectionView']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.collection.CollectionView');
var lcA2 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](lcA1);
if ((stI0) == 0) { gt = 33; break IF; }
c.updateView__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2.call(lcA0, lcA2);
c.updateConfiguration__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2Ljava_lang_String_2.call(lcA0, lcA2, lcA1);
(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent = io_cloudoffice_platform_cockpit_collection_CollectionComponent(false))).save__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2(lcA2);
    }
    X_33: for (;;) { IF: if (gt <= 33) {
return;

    }
}}
};
c['process__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.updateView__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2 = function(lcA1) {
  var  lcA0 = this;
lcA1.setNewCollectionName__VLjava_lang_String_2("");
lcA1.setCollectionhoveraction__VZ(0);
var stA0 = lcA1.getCollectionListItemView__Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2();
var stA0 = stA0.getExistingItemList__Ljava_util_List_2();
invoker.clear__V(stA0);
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2']("########## View updated.");
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.updateConfiguration__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2Ljava_lang_String_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2'](lcA2);
var lcA3 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA3,"virtualCollectionItemId");
var lcA4 = stA0;
var stA0 = new io_cloudoffice_platform_cockpit_collection_ListItemView;
(refs_io_cloudoffice_platform_cockpit_collection_ListItemView || (refs_io_cloudoffice_platform_cockpit_collection_ListItemView = io_cloudoffice_platform_cockpit_collection_ListItemView(false))).constructor.cons__V.call(stA0);
var lcA5 = stA0;
lcA5.setItemId__VLjava_lang_String_2(lcA4);
lcA5.setItemName__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$1_val$collectionName']);
lcA5.setItemType__VLjava_lang_String_2("COLLECTION");
var stA0 = lcA5;var stA1 = (refs_io_cloudoffice_platform_cockpit_api_QueryMetaModel || (refs_io_cloudoffice_platform_cockpit_api_QueryMetaModel = vm.io_cloudoffice_platform_cockpit_api_QueryMetaModel(false)))['getItemTypeIconCss__Ljava_lang_String_2Ljava_lang_String_2']("COLLECTION");
stA0.setItemTypeIconCss__VLjava_lang_String_2(stA1);
var stA0 = lcA5;var stA1 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$ListItemViewModel || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$ListItemViewModel = io_cloudoffice_platform_cockpit_collection_CollectionComponent$ListItemViewModel(false))).shortCollectionName__Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_collection_ListItemView_2(lcA5);
stA0.setItemShortName__VLjava_lang_String_2(stA1);
var stA0 = lcA1.getConfiguration__Lio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2();
var stA0 = stA0.getCollectionItemList__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA5);
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2']("########## Configuration updated.");
return;

};
    m.access = 2;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_collection_CollectionComponent$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_collection_CollectionComponent$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_collection_CollectionComponent$1fillInstOf });
    io_cloudoffice_platform_cockpit_collection_CollectionComponent$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/collection/CollectionComponent$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_ServerCallback;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent;
    var refs_io_cloudoffice_platform_cockpit_api_Logger;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_collection_ListItemView;
    var refs_io_cloudoffice_platform_cockpit_api_QueryMetaModel;
    var refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$ListItemViewModel;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$1_val$collectionName'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_collection_CollectionComponent$1 = io_cloudoffice_platform_cockpit_collection_CollectionComponent$1;


function io_cloudoffice_platform_cockpit_collection_CollectionComponent$ListItemViewModel() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_collection_CollectionComponent$ListItemViewModel;
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
    m = c.shortCollectionName__Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_collection_ListItemView_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcA1 = "";
var stA0 = lcA0.getItemName__Ljava_lang_String_2();
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isEmpty__ZLjava_lang_String_2'](stA0);
if ((stI0) == 0) { gt = 16; break IF; }
return "";
    }
    X_16: for (;;) { IF: if (gt <= 16) {

var stA0 = lcA0.getItemName__Ljava_lang_String_2();
var stA0 = invoker.split___3Ljava_lang_String_2Ljava_lang_String_2(stA0," ");
var lcA2 = stA0;
var lcI3 = 0;
    }
    X_28: for (;;) { IF: if (gt <= 28) {

if ((lcI3) >= ((lcA2).length)) { gt = 68; break IF; }
var stA0 = lcA1;var stI1 = invoker.length__I((lcA2[lcI3] || Array.at(lcA2, lcI3)));
if ((stI1) <= 0) { gt = 55; break IF; }
var stA1 = invoker.substring__Ljava_lang_String_2II((lcA2[lcI3] || Array.at(lcA2, lcI3)),0, 1);
{ gt = 58; break IF; }
    }
    X_55: for (;;) { IF: if (gt <= 55) {

var stA1 = (lcA2[lcI3] || Array.at(lcA2, lcI3));    }
    X_58: for (;;) { IF: if (gt <= 58) {
var stA0 = invoker.concat__Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1);
var lcA1 = stA0;
lcI3++;
{ gt = 0; continue X_28; }
    }
    X_68: for (;;) { IF: if (gt <= 68) {

var stI0 = invoker.length__I(lcA1);
if ((stI0) <= (2)) { gt = 83; break IF; }
var stA0 = invoker.substring__Ljava_lang_String_2II(lcA1,0, 2);
var lcA1 = stA0;
    }
    X_83: for (;;) { IF: if (gt <= 83) {

var stA0 = invoker.toUpperCase__Ljava_lang_String_2(lcA1);
return stA0;

    }
}}}}}}}
};
c['shortCollectionName__Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_collection_ListItemView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_collection_CollectionComponent$ListItemViewModelfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_collection_CollectionComponent$ListItemViewModel', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_collection_CollectionComponent$ListItemViewModelfillInstOf });
    io_cloudoffice_platform_cockpit_collection_CollectionComponent$ListItemViewModelfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/collection/CollectionComponent$ListItemViewModel';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
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
vm.io_cloudoffice_platform_cockpit_collection_CollectionComponent$ListItemViewModel = registerClass(exports,'io_cloudoffice_platform_cockpit_collection_CollectionComponent$ListItemViewModel',io_cloudoffice_platform_cockpit_collection_CollectionComponent$ListItemViewModel);

vm.io_cloudoffice_platform_cockpit_api_QueryMetaModel = link('io/cloudoffice/platform/cockpit/api/QueryMetaModel', function(f) { vm.io_cloudoffice_platform_cockpit_api_QueryMetaModel =  f; });

function io_cloudoffice_platform_cockpit_collection_ListItemView() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_collection_ListItemView;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_proto'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_proto']; };
  m = c._prop_itemId = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_itemId'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_itemId']; };
  m = c._prop_itemName = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_itemName'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_itemName']; };
  m = c._prop_itemType = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_itemType'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_itemType']; };
  m = c._prop_itemShortName = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_itemShortName'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_itemShortName']; };
  m = c._prop_itemTypeIconCss = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_itemTypeIconCss'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_itemTypeIconCss']; };
  m = c._prop_openCollectionBox = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_openCollectionBox'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_openCollectionBox']; };
  m = c._prop_isActive = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_isActive'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_isActive']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$ListItemViewModel || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$ListItemViewModel = io_cloudoffice_platform_cockpit_collection_CollectionComponent$ListItemViewModel(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.getItemId__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_proto'],"itemId");
return lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_itemId'];

};
c['getItemId__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemId__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_itemId'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_itemId'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_proto'],"itemId", lcA2, lcA1);
return;

    }
}}
};
c['setItemId__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getItemName__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_proto'],"itemName");
return lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_itemName'];

};
c['getItemName__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemName__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_itemName'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_itemName'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_proto'],"itemName", lcA2, lcA1);
return;

    }
}}
};
c['setItemName__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getItemType__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_proto'],"itemType");
return lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_itemType'];

};
c['getItemType__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemType__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_itemType'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_itemType'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_proto'],"itemType", lcA2, lcA1);
return;

    }
}}
};
c['setItemType__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getItemShortName__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_proto'],"itemShortName");
return lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_itemShortName'];

};
c['getItemShortName__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemShortName__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_itemShortName'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_itemShortName'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_proto'],"itemShortName", lcA2, lcA1);
return;

    }
}}
};
c['setItemShortName__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getItemTypeIconCss__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_proto'],"itemTypeIconCss");
return lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_itemTypeIconCss'];

};
c['getItemTypeIconCss__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemTypeIconCss__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_itemTypeIconCss'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_itemTypeIconCss'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_proto'],"itemTypeIconCss", lcA2, lcA1);
return;

    }
}}
};
c['setItemTypeIconCss__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isOpenCollectionBox__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_proto'],"openCollectionBox");
return lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_openCollectionBox'];

};
c['isOpenCollectionBox__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setOpenCollectionBox__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_openCollectionBox']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_openCollectionBox'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_proto'];var stA1 = "openCollectionBox";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setOpenCollectionBox__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isIsActive__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_proto'],"isActive");
return lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_isActive'];

};
c['isIsActive__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setIsActive__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_isActive']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_isActive'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_proto'];var stA1 = "isActive";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setIsActive__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2(c._TYPE(),lcA0, lcA1);
stA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_proto'] = stA1;
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
    m = CLS.cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2ZZ = function(lcA1, lcA2, lcA3, lcA4, lcA5, lcI6, lcI7) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_itemId'] = lcA1;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_itemName'] = lcA2;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_itemType'] = lcA3;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_itemShortName'] = lcA4;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_itemTypeIconCss'] = lcA5;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_openCollectionBox'] = lcI6;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_isActive'] = lcI7;
return;

};
CLS['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2ZZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, (7));
var lcA3 = stA0;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, (7));
Array.at(stA2, 0, "itemId");
Array.at(stA2, 1, "itemName");
Array.at(stA2, 2, "itemType");
Array.at(stA2, 3, "itemShortName");
Array.at(stA2, 4, "itemTypeIconCss");
Array.at(stA2, 5, "openCollectionBox");
Array.at(stA2, (6), "isActive");
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
if ((lcA3[0] || Array.at(lcA3, 0)) !== null && !(lcA3[0] || Array.at(lcA3, 0))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[0] || Array.at(lcA3, 0)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_itemId'] = (lcA3[0] || Array.at(lcA3, 0));
if ((lcA3[1] || Array.at(lcA3, 1)) !== null && !(lcA3[1] || Array.at(lcA3, 1))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[1] || Array.at(lcA3, 1)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_itemName'] = (lcA3[1] || Array.at(lcA3, 1));
if ((lcA3[2] || Array.at(lcA3, 2)) !== null && !(lcA3[2] || Array.at(lcA3, 2))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[2] || Array.at(lcA3, 2)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_itemType'] = (lcA3[2] || Array.at(lcA3, 2));
if ((lcA3[3] || Array.at(lcA3, 3)) !== null && !(lcA3[3] || Array.at(lcA3, 3))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[3] || Array.at(lcA3, 3)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_itemShortName'] = (lcA3[3] || Array.at(lcA3, 3));
if ((lcA3[4] || Array.at(lcA3, 4)) !== null && !(lcA3[4] || Array.at(lcA3, 4))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[4] || Array.at(lcA3, 4)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_itemTypeIconCss'] = (lcA3[4] || Array.at(lcA3, 4));
var stA0 = lcA0;if (((lcA3[5] || Array.at(lcA3, 5))) !== null) { gt = 122; break IF; }
var stI1 = 0;{ gt = 134; break IF; }
    }
    X_122: for (;;) { IF: if (gt <= 122) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[5] || Array.at(lcA3, 5)));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_134: for (;;) { IF: if (gt <= 134) {
stA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_openCollectionBox'] = stI1;
var stA0 = lcA0;if (((lcA3[(6)] || Array.at(lcA3, (6)))) !== null) { gt = 149; break IF; }
var stI1 = 0;{ gt = 162; break IF; }
    }
    X_149: for (;;) { IF: if (gt <= 149) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(6)] || Array.at(lcA3, (6))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_162: for (;;) { IF: if (gt <= 162) {
stA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_isActive'] = stI1;
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"itemShortName");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getItemShortName__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"itemTypeIconCss");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getItemTypeIconCss__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"openCollectionBox");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isOpenCollectionBox__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"isActive");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isIsActive__Z();
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
    m = c.clone__Lio_cloudoffice_platform_cockpit_collection_ListItemView_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_proto']);
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_collection_ListItemView_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lio_cloudoffice_platform_cockpit_collection_ListItemView_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_collection_ListItemView_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_collection_ListItemView;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = lcA0.getItemId__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_itemId'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getItemName__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_itemName'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getItemType__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_itemType'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getItemShortName__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_itemShortName'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getItemTypeIconCss__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_itemTypeIconCss'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isOpenCollectionBox__Z();
stA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_openCollectionBox'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isIsActive__Z();
stA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_isActive'] = stI1;
return lcA2;

};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lio_cloudoffice_platform_cockpit_collection_ListItemView_2 = function() {
  var  lcA0 = this;
invoker.applyBindings__V(lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_proto']);
return lcA0;

};
c['applyBindings__Lio_cloudoffice_platform_cockpit_collection_ListItemView_2'] = m;

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

var stI0 = lcA1 != null && lcA1['$instOf_io_cloudoffice_platform_cockpit_collection_ListItemView'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_collection_ListItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.collection.ListItemView');
var lcA2 = lcA1;
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_itemId'], lcA2['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_itemId']);
if ((stI0) != 0) { gt = 40; break IF; }
return 0;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_itemName'], lcA2['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_itemName']);
if ((stI0) != 0) { gt = 59; break IF; }
return 0;
    }
    X_59: for (;;) { IF: if (gt <= 59) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_itemType'], lcA2['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_itemType']);
if ((stI0) != 0) { gt = 78; break IF; }
return 0;
    }
    X_78: for (;;) { IF: if (gt <= 78) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_itemShortName'], lcA2['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_itemShortName']);
if ((stI0) != 0) { gt = 97; break IF; }
return 0;
    }
    X_97: for (;;) { IF: if (gt <= 97) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_itemTypeIconCss'], lcA2['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_itemTypeIconCss']);
if ((stI0) != 0) { gt = 116; break IF; }
return 0;
    }
    X_116: for (;;) { IF: if (gt <= 116) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_openCollectionBox']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_openCollectionBox']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 141; break IF; }
return 0;
    }
    X_141: for (;;) { IF: if (gt <= 141) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_isActive']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_isActive']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 166; break IF; }
return 0;
    }
    X_166: for (;;) { IF: if (gt <= 166) {

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
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_itemId'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_itemName'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_itemType'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_itemShortName'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_itemTypeIconCss'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_openCollectionBox']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_isActive']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
return lcI1;

};
c['hashCode__I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Ljava_lang_Object_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0.clone__Lio_cloudoffice_platform_cockpit_collection_ListItemView_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lio_cloudoffice_platform_cockpit_collection_ListItemView$Html4JavaType_2 = function() {
return c._TYPE();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_collection_ListItemView_2 = function(lcA0) {
return lcA0['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_collection_ListItemView$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lio_cloudoffice_platform_cockpit_collection_ListItemView_2Lio_cloudoffice_platform_cockpit_collection_ListItemView_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_collection_ListItemView_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_collection_ListItemView$Html4JavaType;
(refs_io_cloudoffice_platform_cockpit_collection_ListItemView$Html4JavaType || (refs_io_cloudoffice_platform_cockpit_collection_ListItemView$Html4JavaType = io_cloudoffice_platform_cockpit_collection_ListItemView$Html4JavaType(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_collection_ListItemView$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_collection_ListItemViewfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_collection_ListItemView', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_collection_ListItemViewfillInstOf });
    io_cloudoffice_platform_cockpit_collection_ListItemViewfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/collection/ListItemView';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$ListItemViewModel;
    var refs_java_lang_Boolean;
    var refs_net_java_html_BrwsrCtx;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_collection_ListItemView$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_proto'] = null;
    this['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_itemId'] = null;
    this['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_itemName'] = null;
    this['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_itemType'] = null;
    this['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_itemShortName'] = null;
    this['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_itemTypeIconCss'] = null;
    this['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_openCollectionBox'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_collection_ListItemView_prop_isActive'] = 0;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_collection_ListItemView = registerClass(exports,'io_cloudoffice_platform_cockpit_collection_ListItemView',io_cloudoffice_platform_cockpit_collection_ListItemView);

vm.java_lang_Cloneable = link('java/lang/Cloneable', function(f) { vm.java_lang_Cloneable =  f; });

function io_cloudoffice_platform_cockpit_collection_ListItemView$Html4JavaType() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_collection_ListItemView$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_io_cloudoffice_platform_cockpit_collection_ListItemView || (refs_io_cloudoffice_platform_cockpit_collection_ListItemView = io_cloudoffice_platform_cockpit_collection_ListItemView(false))).constructor.$class, (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$ListItemViewModel || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$ListItemViewModel = io_cloudoffice_platform_cockpit_collection_CollectionComponent$ListItemViewModel(false))).constructor.$class, (7), 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemId", 0, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemName", 1, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemType", 2, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemShortName", 3, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemTypeIconCss", 4, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"openCollectionBox", 5, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"isActive", (6), 0, 0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLio_cloudoffice_platform_cockpit_collection_ListItemView_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 44; break IF; }
  case 1:{ gt = 61; break IF; }
  case 2:{ gt = 78; break IF; }
  case 3:{ gt = 95; break IF; }
  case 4:{ gt = 112; break IF; }
  case 5:{ gt = 129; break IF; }
  case 6:{ gt = 149; break IF; }
  default: { gt = 169; break IF; }
}
    }
    X_44: for (;;) { IF: if (gt <= 44) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_collection_ListItemView || (refs_io_cloudoffice_platform_cockpit_collection_ListItemView = io_cloudoffice_platform_cockpit_collection_ListItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_collection_ListItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemId__VLjava_lang_String_2(stA1);
return;
    }
    X_61: for (;;) { IF: if (gt <= 61) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_collection_ListItemView || (refs_io_cloudoffice_platform_cockpit_collection_ListItemView = io_cloudoffice_platform_cockpit_collection_ListItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_collection_ListItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemName__VLjava_lang_String_2(stA1);
return;
    }
    X_78: for (;;) { IF: if (gt <= 78) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_collection_ListItemView || (refs_io_cloudoffice_platform_cockpit_collection_ListItemView = io_cloudoffice_platform_cockpit_collection_ListItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_collection_ListItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemType__VLjava_lang_String_2(stA1);
return;
    }
    X_95: for (;;) { IF: if (gt <= 95) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_collection_ListItemView || (refs_io_cloudoffice_platform_cockpit_collection_ListItemView = io_cloudoffice_platform_cockpit_collection_ListItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_collection_ListItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemShortName__VLjava_lang_String_2(stA1);
return;
    }
    X_112: for (;;) { IF: if (gt <= 112) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_collection_ListItemView || (refs_io_cloudoffice_platform_cockpit_collection_ListItemView = io_cloudoffice_platform_cockpit_collection_ListItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_collection_ListItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemTypeIconCss__VLjava_lang_String_2(stA1);
return;
    }
    X_129: for (;;) { IF: if (gt <= 129) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_collection_ListItemView || (refs_io_cloudoffice_platform_cockpit_collection_ListItemView = io_cloudoffice_platform_cockpit_collection_ListItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_collection_ListItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setOpenCollectionBox__VZ(stI1);
return;
    }
    X_149: for (;;) { IF: if (gt <= 149) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_collection_ListItemView || (refs_io_cloudoffice_platform_cockpit_collection_ListItemView = io_cloudoffice_platform_cockpit_collection_ListItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_collection_ListItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setIsActive__VZ(stI1);
return;
    }
    X_169: for (;;) { IF: if (gt <= 169) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_collection_ListItemView_2I = function(lcA1, lcI2) {
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
  case 6:{ gt = 77; break IF; }
  default: { gt = 85; break IF; }
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

var stA0 = lcA1.getItemShortName__Ljava_lang_String_2();
return stA0;
    }
    X_64: for (;;) { IF: if (gt <= 64) {

var stA0 = lcA1.getItemTypeIconCss__Ljava_lang_String_2();
return stA0;
    }
    X_69: for (;;) { IF: if (gt <= 69) {

var stI0 = lcA1.isOpenCollectionBox__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_77: for (;;) { IF: if (gt <= 77) {

var stI0 = lcA1.isIsActive__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
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
    m = c.call__VLio_cloudoffice_platform_cockpit_collection_ListItemView_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_collection_ListItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.collection.ListItemView');
var stA0 = (refs_io_cloudoffice_platform_cockpit_collection_ListItemView || (refs_io_cloudoffice_platform_cockpit_collection_ListItemView = io_cloudoffice_platform_cockpit_collection_ListItemView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_collection_ListItemView_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLio_cloudoffice_platform_cockpit_collection_ListItemView_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLio_cloudoffice_platform_cockpit_collection_ListItemView_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
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
    m = c.read__Lio_cloudoffice_platform_cockpit_collection_ListItemView_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_collection_ListItemView;
(refs_io_cloudoffice_platform_cockpit_collection_ListItemView || (refs_io_cloudoffice_platform_cockpit_collection_ListItemView = io_cloudoffice_platform_cockpit_collection_ListItemView(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_collection_ListItemView$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lio_cloudoffice_platform_cockpit_collection_ListItemView_2Lio_cloudoffice_platform_cockpit_collection_ListItemView_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_collection_ListItemView || (refs_io_cloudoffice_platform_cockpit_collection_ListItemView = io_cloudoffice_platform_cockpit_collection_ListItemView(false))).access$400__Lio_cloudoffice_platform_cockpit_collection_ListItemView_2Lio_cloudoffice_platform_cockpit_collection_ListItemView_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_collection_ListItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.collection.ListItemView');
lcA0.onMessage__VLio_cloudoffice_platform_cockpit_collection_ListItemView_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_collection_ListItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.collection.ListItemView');
lcA0.onChange__VLio_cloudoffice_platform_cockpit_collection_ListItemView_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lio_cloudoffice_platform_cockpit_collection_ListItemView_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_collection_ListItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.collection.ListItemView');
var stA0 = lcA0.cloneTo__Lio_cloudoffice_platform_cockpit_collection_ListItemView_2Lio_cloudoffice_platform_cockpit_collection_ListItemView_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_collection_ListItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.collection.ListItemView');
lcA0.call__VLio_cloudoffice_platform_cockpit_collection_ListItemView_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_collection_ListItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.collection.ListItemView');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_collection_ListItemView_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_collection_ListItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.collection.ListItemView');
lcA0.setValue__VLio_cloudoffice_platform_cockpit_collection_ListItemView_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_collection_ListItemView$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_collection_ListItemView$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_collection_ListItemView$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_collection_ListItemView$Html4JavaTypefillInstOf });
    io_cloudoffice_platform_cockpit_collection_ListItemView$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/collection/ListItemView$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_collection_ListItemView;
    var refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$ListItemViewModel;
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
vm.io_cloudoffice_platform_cockpit_collection_ListItemView$Html4JavaType = io_cloudoffice_platform_cockpit_collection_ListItemView$Html4JavaType;

vm.java_lang_UnsupportedOperationException = link('java/lang/UnsupportedOperationException', function(f) { vm.java_lang_UnsupportedOperationException =  f; });
vm.java_lang_String = link('java/lang/String', function(f) { vm.java_lang_String =  f; });
vm.org_netbeans_html_json_spi_Proto$Type = link('org/netbeans/html/json/spi/Proto$Type', function(f) { vm.org_netbeans_html_json_spi_Proto$Type =  f; });
vm.java_lang_StringBuilder = link('java/lang/StringBuilder', function(f) { vm.java_lang_StringBuilder =  f; });
vm.net_java_html_BrwsrCtx = link('net/java/html/BrwsrCtx', function(f) { vm.net_java_html_BrwsrCtx =  f; });
vm.java_lang_Boolean = link('java/lang/Boolean', function(f) { vm.java_lang_Boolean =  f; });
vm.io_cloudoffice_platform_cockpit_api_MapBuilder = link('io/cloudoffice/platform/cockpit/api/MapBuilder', function(f) { vm.io_cloudoffice_platform_cockpit_api_MapBuilder =  f; });
vm.io_cloudoffice_platform_cockpit_api_Logger = link('io/cloudoffice/platform/cockpit/api/Logger', function(f) { vm.io_cloudoffice_platform_cockpit_api_Logger =  f; });

function io_cloudoffice_platform_cockpit_collection_CollectionComponent() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_collection_CollectionComponent;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_api_AbstractComponent(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = c.getInstance__Lio_cloudoffice_platform_cockpit_api_Component_2Ljava_lang_String_2 = function(lcA0) {
var stA0 = new io_cloudoffice_platform_cockpit_collection_CollectionComponent;
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
var stA0 = lcA0;var stA1 = "loginsuccess";var stA2 = new io_cloudoffice_platform_cockpit_collection_CollectionComponent$LoginEventListener;
(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$LoginEventListener || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$LoginEventListener = io_cloudoffice_platform_cockpit_collection_CollectionComponent$LoginEventListener(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_collection_CollectionComponent_2.call(stA2, lcA0);
invoker.attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2(stA0,stA1, stA2);
var stA0 = lcA0;var stA1 = "designermode";var stA2 = new io_cloudoffice_platform_cockpit_collection_CollectionComponent$DesignModeListener;
(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$DesignModeListener || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$DesignModeListener = io_cloudoffice_platform_cockpit_collection_CollectionComponent$DesignModeListener(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_collection_CollectionComponent_2.call(stA2, lcA0);
invoker.attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2(stA0,stA1, stA2);
var stA0 = lcA0;var stA1 = "invokefunction";var stA2 = new io_cloudoffice_platform_cockpit_collection_CollectionComponent$FunctionInvokeListener;
(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$FunctionInvokeListener || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$FunctionInvokeListener = io_cloudoffice_platform_cockpit_collection_CollectionComponent$FunctionInvokeListener(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_collection_CollectionComponent_2.call(stA2, lcA0);
invoker.attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2(stA0,stA1, stA2);
var stA0 = lcA0;var stA1 = "hover";var stA2 = new io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionHoverListener;
(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionHoverListener || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionHoverListener = io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionHoverListener(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_collection_CollectionComponent_2.call(stA2, lcA0);
invoker.attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2(stA0,stA1, stA2);
var stA0 = lcA0;var stA1 = "toggle";var stA2 = new io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionToggleListener;
(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionToggleListener || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionToggleListener = io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionToggleListener(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_collection_CollectionComponent_2.call(stA2, lcA0);
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
var stA0 = lcA0;var stA1 = invoker.getName__Ljava_lang_String_2((refs_io_cloudoffice_platform_cockpit_collection_CollectionView || (refs_io_cloudoffice_platform_cockpit_collection_CollectionView = io_cloudoffice_platform_cockpit_collection_CollectionView(false))).constructor.$class);
invoker.setDefaultViewName__VLjava_lang_String_2(stA0,stA1);
return;

};
c['bindViewNames__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setComponentName__V = function() {
  var  lcA0 = this;
c['_componentName'].call(lcA0, "collection-component");
return;

};
c['setComponentName__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.createNewItem__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2 = function(lcA0) {
var stA0 = lcA0.getNewItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA0 = invoker.getComponent__Ljava_lang_String_2(stA0);
var lcA1 = stA0;
var stA0 = lcA0.getNewItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
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
    m = c.onChangehoverMode__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2 = function(lcA0) {
lcA0.setNewCollectionName__VLjava_lang_String_2("");
lcA0.setCollectionInputBoxText__VLjava_lang_String_2("");
var stA0 = lcA0.getCollectionList__Ljava_util_List_2();
invoker.clear__V(stA0);
return;

};
c['onChangehoverMode__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.createNewCollection__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0.getNewCollectionName__Ljava_lang_String_2();
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isEmpty__ZLjava_lang_String_2'](stA0);
if ((stI0) == 0) { gt = 18; break IF; }
(refs_io_cloudoffice_platform_cockpit_js_JSUIUtils || (refs_io_cloudoffice_platform_cockpit_js_JSUIUtils = vm.io_cloudoffice_platform_cockpit_js_JSUIUtils(false)))['alert__VLjava_lang_String_2']("Enter Collection name");
{ gt = 22; break IF; }
    }
    X_18: for (;;) { IF: if (gt <= 18) {

c.createCollection__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2(lcA0);
    }
    X_22: for (;;) { IF: if (gt <= 22) {
return;

    }
}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.createCollection__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2 = function(lcA0) {
var stA0 = lcA0.getNewCollectionName__Ljava_lang_String_2();
var lcA1 = stA0;
var stA0 = new io_cloudoffice_platform_cockpit_collection_CollectionComponent$2;
(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$2 || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$2 = io_cloudoffice_platform_cockpit_collection_CollectionComponent$2(false))).constructor.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_collection_CollectionView_2Ljava_lang_String_2.call(stA0, "\"/VirtualItem-portlet.virtualcollectionitem/createGroupRelatedCollection\"", lcA0, lcA1);
var stA1 = new io_cloudoffice_platform_cockpit_collection_CollectionComponent$1;
(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$1 || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$1 = io_cloudoffice_platform_cockpit_collection_CollectionComponent$1(false))).constructor.cons__VLjava_lang_String_2.call(stA1, lcA1);
invoker.call__VLio_cloudoffice_platform_cockpit_api_ServerCallback_2(stA0,stA1);
return;

};
c['createCollection__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.createCollectionWithSubCollection__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2 = function(lcA0) {
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2']("view.getListComponentDefinition()>>");
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"view.getListComponentDefinition()>>");
var stA1 = lcA0.getListComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2'](stA0);
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA0, "invokefunction", "invokefunction", "getSelectedListItems");
var lcA1 = stA0;
var stA0 = lcA0.getListComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA0 = invoker.getComponent__Ljava_lang_String_2(stA0);
var stA1 = lcA0.getListComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = invoker.getInstanceId__Ljava_lang_String_2(stA1);
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['get__Lio_cloudoffice_platform_cockpit_api_Component_2Ljava_lang_String_2Ljava_lang_String_2'](stA0, stA1);
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA1);
return;

};
c['createCollectionWithSubCollection__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.createCollectionWithSelectedItems__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2Ljava_lang_String_2 = function(lcA0, lcA1) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2'](lcA1);
var lcA2 = stA0;
var stA0 = invoker.getList__Ljava_util_List_2Ljava_lang_String_2(lcA2,"selecteditems");
var lcA3 = stA0;
var stA0 = lcA0.getNewCollectionName__Ljava_lang_String_2();
var lcA4 = stA0;
var stA0 = new io_cloudoffice_platform_cockpit_collection_CollectionComponent$4;
(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$4 || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$4 = io_cloudoffice_platform_cockpit_collection_CollectionComponent$4(false))).constructor.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_collection_CollectionView_2Ljava_lang_String_2Ljava_util_List_2.call(stA0, "\"/VirtualItem-portlet.virtualcollectionitem/createGroupRelatedCollection\"", lcA0, lcA4, lcA3);
var stA1 = new io_cloudoffice_platform_cockpit_collection_CollectionComponent$3;
(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$3 || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$3 = io_cloudoffice_platform_cockpit_collection_CollectionComponent$3(false))).constructor.cons__VLjava_lang_String_2.call(stA1, lcA4);
invoker.call__VLio_cloudoffice_platform_cockpit_api_ServerCallback_2(stA0,stA1);
return;

};
c['createCollectionWithSelectedItems__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.itemSearchAutocomplete__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0.getCollectionInputBoxText__Ljava_lang_String_2();
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA0);
if ((stI0) == 0) { gt = 25; break IF; }
var stA0 = lcA0.getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
invoker.setActive__VZ(stA0,1);
c.getItemList__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2(lcA0);
{ gt = 42; break IF; }
    }
    X_25: for (;;) { IF: if (gt <= 25) {

var stA0 = lcA0.getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
invoker.setActive__VZ(stA0,0);
var stA0 = lcA0.getCollectionList__Ljava_util_List_2();
invoker.clear__V(stA0);
    }
    X_42: for (;;) { IF: if (gt <= 42) {
return;

    }
}}}
};
c['itemSearchAutocomplete__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getItemList__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2 = function(lcA0) {
var stA0 = lcA0.getCollectionInputBoxText__Ljava_lang_String_2();
var lcA1 = stA0;
var stA0 = new io_cloudoffice_platform_cockpit_collection_CollectionComponent$6;
(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$6 || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$6 = io_cloudoffice_platform_cockpit_collection_CollectionComponent$6(false))).constructor.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_collection_CollectionView_2Ljava_lang_String_2.call(stA0, "\"/VirtualItem-portlet.searchitem/autoCompleteSearch\"", lcA0, lcA1);
var stA1 = new io_cloudoffice_platform_cockpit_collection_CollectionComponent$5;
(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$5 || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$5 = io_cloudoffice_platform_cockpit_collection_CollectionComponent$5(false))).constructor.cons__V.call(stA1);
invoker.call__VLio_cloudoffice_platform_cockpit_api_ServerCallback_2(stA0,stA1);
return;

};
c['getItemList__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.expandCollectionBar__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = lcA0.isMenuOnExpandedMode__Z();
if ((stI0) != 0) { gt = 14; break IF; }
lcA0.setCollectionClass__VLjava_lang_String_2("collection-full");
    }
    X_14: for (;;) { IF: if (gt <= 14) {
return;

    }
}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.shrinkCollectionBar__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = lcA0.isMenuOnExpandedMode__Z();
if ((stI0) != 0) { gt = 14; break IF; }
lcA0.setCollectionClass__VLjava_lang_String_2("collection");
    }
    X_14: for (;;) { IF: if (gt <= 14) {
return;

    }
}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.performToogle__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2Ljava_lang_String_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2'](lcA1);
var lcA2 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"minwidth");
var lcA3 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"maxwidth");
var lcA4 = stA0;
var stA0 = lcA0.getLayoutRowId__Ljava_lang_String_2();
var lcA5 = stA0;
var stA0 = lcA0.getCollectionClass__Ljava_lang_String_2();
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isEmpty__ZLjava_lang_String_2'](stA0);
if ((stI0) != 0) { gt = 51; break IF; }
var stA0 = lcA0.getCollectionClass__Ljava_lang_String_2();
var stI0 = invoker.equals__ZLjava_lang_Object_2(stA0,"collection-full");
if ((stI0) == 0) { gt = 106; break IF; }
    }
    X_51: for (;;) { IF: if (gt <= 51) {
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"LayoutManager.togglecollection(\"");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA5);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"\",\"");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA3);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"\");");
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
(refs_io_cloudoffice_platform_cockpit_js_VIEW || (refs_io_cloudoffice_platform_cockpit_js_VIEW = vm.io_cloudoffice_platform_cockpit_js_VIEW(false)))['invokeJSFunction__VLjava_lang_String_2'](stA0);
lcA0.setMenuOnExpandedMode__VZ(0);
lcA0.setCollectionClass__VLjava_lang_String_2("collection");
{ gt = 172; break IF; }
    }
    X_106: for (;;) { IF: if (gt <= 106) {

var stA0 = lcA0.getCollectionClass__Ljava_lang_String_2();
var stI0 = invoker.equals__ZLjava_lang_Object_2(stA0,"collection");
if ((stI0) == 0) { gt = 172; break IF; }
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"LayoutManager.togglecollection(\"");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA5);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"\",\"");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA4);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"\");");
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
(refs_io_cloudoffice_platform_cockpit_js_VIEW || (refs_io_cloudoffice_platform_cockpit_js_VIEW = vm.io_cloudoffice_platform_cockpit_js_VIEW(false)))['invokeJSFunction__VLjava_lang_String_2'](stA0);
lcA0.setMenuOnExpandedMode__VZ(1);
lcA0.setCollectionClass__VLjava_lang_String_2("collection-full");
    }
    X_172: for (;;) { IF: if (gt <= 172) {
return;

    }
}}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.toogleCollectionBox__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2Lio_cloudoffice_platform_cockpit_collection_ListItemView_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0.getCollectionListItemView__Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2();
var stA1 = lcA0.getCollectionListType__Ljava_lang_String_2();
stA0.setCollectionListType__VLjava_lang_String_2(stA1);
var stA0 = lcA0.getCollectionListItemView__Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2();
var stA0 = stA0.getExistingItemList__Ljava_util_List_2();
invoker.clear__V(stA0);
var stI0 = lcA1.isOpenCollectionBox__Z();
if ((stI0) == 0) { gt = 58; break IF; }
lcA1.setOpenCollectionBox__VZ(0);
lcA1.setIsActive__VZ(0);
var stA0 = lcA0.getCollectionListItemView__Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2();
stA0.setSelectedCollectionId__VLjava_lang_String_2("");
lcA0.setCollectionInputBoxText__VLjava_lang_String_2("");
{ gt = 90; break IF; }
    }
    X_58: for (;;) { IF: if (gt <= 58) {

c.collapseAllAndActiveSelected__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2Lio_cloudoffice_platform_cockpit_collection_ListItemView_2(lcA0, lcA1);
var stA0 = lcA0.getCollectionListItemView__Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2();
var stA1 = lcA1.getItemId__Ljava_lang_String_2();
stA0.setSelectedCollectionId__VLjava_lang_String_2(stA1);
var stA0 = lcA0.getCollectionListItemView__Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2();
var stA0 = stA0.getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
invoker.setActive__VZ(stA0,1);
c.getRelatedItems__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2Lio_cloudoffice_platform_cockpit_collection_ListItemView_2(lcA0, lcA1);
    }
    X_90: for (;;) { IF: if (gt <= 90) {
return;

    }
}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.collapseAllCollections__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

c.deselectAllSubCollections__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2(lcA0);
var stA0 = lcA0.getCollectionItemList__Ljava_util_List_2();
var lcA1 = stA0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA1);
var lcA2 = stA0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

var stI0 = invoker.hasNext__Z(lcA2);
if ((stI0) == 0) { gt = 48; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA2);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_collection_ListItemView']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.collection.ListItemView');
var lcA3 = stA0;
lcA3.setOpenCollectionBox__VZ(0);
lcA3.setIsActive__VZ(0);
{ gt = 0; continue X_16; }
    }
    X_48: for (;;) { IF: if (gt <= 48) {
return;

    }
}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.collapseAllAndActiveSelected__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2Lio_cloudoffice_platform_cockpit_collection_ListItemView_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

c.deselectAllSubCollections__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2(lcA0);
var stA0 = lcA0.getCollectionItemList__Ljava_util_List_2();
var lcA2 = stA0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA2);
var lcA3 = stA0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

var stI0 = invoker.hasNext__Z(lcA3);
if ((stI0) == 0) { gt = 105; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA3);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_collection_ListItemView']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.collection.ListItemView');
var lcA4 = stA0;
var stA0 = lcA1.getItemId__Ljava_lang_String_2();
var lcA5 = stA0;
var stA0 = lcA4.getItemId__Ljava_lang_String_2();
var lcA6 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](lcA5);
if ((stI0) == 0) { gt = 90; break IF; }
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](lcA6);
if ((stI0) == 0) { gt = 90; break IF; }
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA5,lcA6);
if ((stI0) == 0) { gt = 90; break IF; }
lcA4.setOpenCollectionBox__VZ(1);
lcA4.setIsActive__VZ(1);
{ gt = 102; break IF; }
    }
    X_90: for (;;) { IF: if (gt <= 90) {

lcA4.setOpenCollectionBox__VZ(0);
lcA4.setIsActive__VZ(0);
    }
    X_102: for (;;) { IF: if (gt <= 102) {
{ gt = 0; continue X_16; }
    }
    X_105: for (;;) { IF: if (gt <= 105) {
return;

    }
}}}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.deselectAllSubCollections__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0.getCollectionListItemView__Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2();
var stA0 = stA0.getExistingItemList__Ljava_util_List_2();
var lcA1 = stA0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA1);
var lcA2 = stA0;
    }
    X_15: for (;;) { IF: if (gt <= 15) {

var stI0 = invoker.hasNext__Z(lcA2);
if ((stI0) == 0) { gt = 42; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA2);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_collection_ListItemView']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.collection.ListItemView');
var lcA3 = stA0;
lcA3.setIsActive__VZ(0);
{ gt = 0; continue X_15; }
    }
    X_42: for (;;) { IF: if (gt <= 42) {
return;

    }
}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.getRelatedItems__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2Lio_cloudoffice_platform_cockpit_collection_ListItemView_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['builder__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = "itemId";var stA2 = lcA1.getItemId__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA0 = lcA2;var stA1 = "itemType";var stA2 = lcA1.getItemType__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA0 = new vm.java_util_ArrayList;
(refs_java_util_ArrayList || (refs_java_util_ArrayList = vm.java_util_ArrayList(false))).constructor['cons__V'].call(stA0);
var lcA3 = stA0;
var stA0 = lcA0.getCollectionListType__Ljava_lang_String_2();
var lcA4 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](lcA4);
if ((stI0) == 0) { gt = 131; break IF; }
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA4,"COLLECTION");
if ((stI0) == 0) { gt = 73; break IF; }
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA3,lcA4);
{ gt = 94; break IF; }
    }
    X_73: for (;;) { IF: if (gt <= 73) {

var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA4,"ALL");
if ((stI0) == 0) { gt = 94; break IF; }
var stI0 = invoker.addAll__ZLjava_util_Collection_2(lcA3,(refs_io_cloudoffice_platform_cockpit_api_QueryMetaModel || (refs_io_cloudoffice_platform_cockpit_api_QueryMetaModel = vm.io_cloudoffice_platform_cockpit_api_QueryMetaModel(false)))['_COLLECTION_SEARCH_ITEM_TYPES']());
    }
    X_94: for (;;) { IF: if (gt <= 94) {

var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_util_List_2(lcA2,"relatedItemTypes", lcA3);
var stA0 = new io_cloudoffice_platform_cockpit_collection_CollectionComponent$GetRelatedItemsAsyncRequest;
var stA1 = stA0;var stA2 = "\"/VirtualItem-portlet.searchitem/search\"";var stA3 = new io_cloudoffice_platform_cockpit_collection_CollectionComponent$GetRelatedItemsAsyncRequestCallback;
(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$GetRelatedItemsAsyncRequestCallback || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$GetRelatedItemsAsyncRequestCallback = io_cloudoffice_platform_cockpit_collection_CollectionComponent$GetRelatedItemsAsyncRequestCallback(false))).constructor.cons__V.call(stA3);
var stA4 = lcA0;var stA5 = invoker.toJSON__Ljava_lang_String_2(lcA2);
(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$GetRelatedItemsAsyncRequest || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$GetRelatedItemsAsyncRequest = io_cloudoffice_platform_cockpit_collection_CollectionComponent$GetRelatedItemsAsyncRequest(false))).constructor.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_ServerCallback_2Lio_cloudoffice_platform_cockpit_collection_CollectionView_2Ljava_lang_String_2.call(stA1, stA2, stA3, stA4, stA5);
var lcA5 = stA0;
invoker.call__V(lcA5);
    }
    X_131: for (;;) { IF: if (gt <= 131) {
return;

    }
}}}}
};
c['getRelatedItems__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2Lio_cloudoffice_platform_cockpit_collection_ListItemView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.save__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2 = function(lcA0) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = "collection";var stA2 = lcA0.getInstance__Ljava_lang_String_2();
var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['configPostEndpoint__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'](stA1, stA2, "");
var stA2 = lcA0.toString__Ljava_lang_String_2();
var stA3 = new io_cloudoffice_platform_cockpit_collection_CollectionComponent$7;
(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$7 || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$7 = io_cloudoffice_platform_cockpit_collection_CollectionComponent$7(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2.call(stA3, lcA0);
invoker.post__VLjava_lang_String_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.openConfig__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2 = function(lcA0) {
lcA0.setDesignerMode__VZ(1);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.closeConfigurationPanel__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2 = function(lcA0) {
var stA0 = lcA0.getConfiguration__Lio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2();
stA0.setInputBoxText__VLjava_lang_String_2("");
lcA0.setDesignerMode__VZ(0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.resetConfiguration__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2 = function(lcA0) {
c.resetConfigurationModelFromJSON__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2(lcA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.resetConfigurationModelFromJSON__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2 = function(lcA0) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = "collection";var stA2 = lcA0.getInstance__Ljava_lang_String_2();
var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['configFetchEndpoint__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'](stA1, stA2);
var stA2 = null;var stA3 = new io_cloudoffice_platform_cockpit_collection_CollectionComponent$8;
(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$8 || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$8 = io_cloudoffice_platform_cockpit_collection_CollectionComponent$8(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2.call(stA3, lcA0);
invoker.fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.toggleHoverAction__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0;var stI1 = lcA0.isCollectionhoveraction__Z();
if ((stI1) != 0) { gt = 12; break IF; }
var stI1 = 1;{ gt = 13; break IF; }
    }
    X_12: for (;;) { IF: if (gt <= 12) {

var stI1 = 0;    }
    X_13: for (;;) { IF: if (gt <= 13) {
stA0.setCollectionhoveraction__VZ(stI1);
return;

    }
}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.openActionHover__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2 = function(lcA0) {
lcA0.setCollectionhoveraction__VZ(1);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.openActionHoverWithCollectionCreateMode__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2 = function(lcA0) {
lcA0.setHoverModeCollectionCreate__VZ(1);
lcA0.setCollectionhoveraction__VZ(1);
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2']("createnewcollectionaction");
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.openActionHoverWithCollectionItemAddMode__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2 = function(lcA0) {
lcA0.setHoverModeCollectionCreate__VZ(0);
lcA0.setCollectioncreatemode__VZ(0);
lcA0.setCollectionhoveraction__VZ(1);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.closeActionHover__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2 = function(lcA0) {
lcA0.setCollectionhoveraction__VZ(0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.addItemsToCollection__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2Lio_cloudoffice_platform_cockpit_collection_ListItemView_2 = function(lcA0, lcA1) {
lcA0.setTempSelectedCollection__VLio_cloudoffice_platform_cockpit_collection_ListItemView_2(lcA1);
var stA0 = lcA0.getCollectionList__Ljava_util_List_2();
invoker.clear__V(stA0);
lcA0.setCollectionInputBoxText__VLjava_lang_String_2("");
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA0, "invokefunction", "invokefunction", "getSelectedListItemsToCollection");
var lcA2 = stA0;
var stA0 = lcA0.getListComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA0 = invoker.getComponent__Ljava_lang_String_2(stA0);
var stA1 = lcA0.getListComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = invoker.getInstanceId__Ljava_lang_String_2(stA1);
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['get__Lio_cloudoffice_platform_cockpit_api_Component_2Ljava_lang_String_2Ljava_lang_String_2'](stA0, stA1);
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA2);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.makeRelationshipWithCollection__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2Ljava_lang_String_2 = function(lcA0, lcA1) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2'](lcA1);
var lcA2 = stA0;
var stA0 = invoker.getList__Ljava_util_List_2Ljava_lang_String_2(lcA2,"selecteditems");
var lcA3 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['builder__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var lcA4 = stA0;
var stA0 = invoker.addFieldMapList__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_util_List_2(lcA4,"items", lcA3);
var stA0 = lcA4;var stA1 = "relatedItemId";var stA2 = lcA0.getTempSelectedCollection__Lio_cloudoffice_platform_cockpit_collection_ListItemView_2();
var stA2 = stA2.getItemId__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA0 = lcA4;var stA1 = "relatedItemType";var stA2 = lcA0.getTempSelectedCollection__Lio_cloudoffice_platform_cockpit_collection_ListItemView_2();
var stA2 = stA2.getItemType__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA0 = new io_cloudoffice_platform_cockpit_collection_CollectionComponent$BuildupBatchRelationshipAsyncRequest;
var stA1 = stA0;var stA2 = "\"/VirtualItem-portlet.searchitem/batchSaveRelatedItems\"";var stA3 = new io_cloudoffice_platform_cockpit_collection_CollectionComponent$BuildupBatchRelationshipAsyncRequestCallback;
(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$BuildupBatchRelationshipAsyncRequestCallback || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$BuildupBatchRelationshipAsyncRequestCallback = io_cloudoffice_platform_cockpit_collection_CollectionComponent$BuildupBatchRelationshipAsyncRequestCallback(false))).constructor.cons__V.call(stA3);
var stA4 = lcA0;var stA5 = invoker.toJSON__Ljava_lang_String_2(lcA4);
(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$BuildupBatchRelationshipAsyncRequest || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$BuildupBatchRelationshipAsyncRequest = io_cloudoffice_platform_cockpit_collection_CollectionComponent$BuildupBatchRelationshipAsyncRequest(false))).constructor.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_ServerCallback_2Lio_cloudoffice_platform_cockpit_collection_CollectionView_2Ljava_lang_String_2.call(stA1, stA2, stA3, stA4, stA5);
var lcA5 = stA0;
invoker.call__V(lcA5);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.loadParentCollectionItemsToList__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2Lio_cloudoffice_platform_cockpit_collection_ListItemView_2 = function(lcA0, lcA1) {
var stA0 = lcA0.getCollectionListItemView__Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2();
var stA1 = lcA0.getCollectionListType__Ljava_lang_String_2();
stA0.setCollectionListType__VLjava_lang_String_2(stA1);
var stA0 = lcA0.getCollectionListItemView__Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2();
var stA0 = stA0.getExistingItemList__Ljava_util_List_2();
invoker.clear__V(stA0);
var stA0 = lcA0.getCollectionListItemView__Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2();
var stA1 = lcA1.getItemId__Ljava_lang_String_2();
stA0.setSelectedCollectionId__VLjava_lang_String_2(stA1);
var stA0 = lcA0.getCollectionListItemView__Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2();
var stA0 = stA0.getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
invoker.setActive__VZ(stA0,1);
c.collapseAllAndActiveSelected__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2Lio_cloudoffice_platform_cockpit_collection_ListItemView_2(lcA0, lcA1);
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
var stA1 = stA0;var stA2 = "updateheaderaction";var stA3 = "viewchange";var stA4 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['builder__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var stA5 = "title";var stA6 = lcA1.getItemName__Ljava_lang_String_2();
var stA4 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA4,stA5, stA6);
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA1, stA2, stA3, stA4);
var lcA2 = stA0;
var stA0 = lcA0.getListComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA0 = invoker.getComponent__Ljava_lang_String_2(stA0);
var stA1 = lcA0.getListComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = invoker.getInstanceId__Ljava_lang_String_2(stA1);
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['get__Lio_cloudoffice_platform_cockpit_api_Component_2Ljava_lang_String_2Ljava_lang_String_2'](stA0, stA1);
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA2);
var stA0 = lcA0.getTempSelectedCollectionList__Ljava_util_List_2();
invoker.clear__V(stA0);
var stA0 = lcA0.getTempSelectedCollectionList__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA1);
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['builder__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var lcA3 = stA0;
var stA0 = lcA3;var stA1 = "itemId";var stA2 = lcA1.getItemId__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA0 = lcA3;var stA1 = "itemType";var stA2 = lcA1.getItemType__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var lcA4 = "COLLECTION";
var stA0 = new vm.java_util_ArrayList;
(refs_java_util_ArrayList || (refs_java_util_ArrayList = vm.java_util_ArrayList(false))).constructor['cons__V'].call(stA0);
var lcA5 = stA0;
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA5,lcA4);
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_util_List_2(lcA3,"relatedItemTypes", lcA5);
var stA0 = new io_cloudoffice_platform_cockpit_collection_CollectionComponent$GetRelatedItemsAsyncRequest;
var stA1 = stA0;var stA2 = "\"/VirtualItem-portlet.searchitem/search\"";var stA3 = new io_cloudoffice_platform_cockpit_collection_CollectionComponent$GetRelatedSubCollectionsCallback;
(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$GetRelatedSubCollectionsCallback || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$GetRelatedSubCollectionsCallback = io_cloudoffice_platform_cockpit_collection_CollectionComponent$GetRelatedSubCollectionsCallback(false))).constructor.cons__V.call(stA3);
var stA4 = lcA0;var stA5 = invoker.toJSON__Ljava_lang_String_2(lcA3);
(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$GetRelatedItemsAsyncRequest || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$GetRelatedItemsAsyncRequest = io_cloudoffice_platform_cockpit_collection_CollectionComponent$GetRelatedItemsAsyncRequest(false))).constructor.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_ServerCallback_2Lio_cloudoffice_platform_cockpit_collection_CollectionView_2Ljava_lang_String_2.call(stA1, stA2, stA3, stA4, stA5);
var lcA6 = stA0;
invoker.call__V(lcA6);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_collection_CollectionComponentfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_collection_CollectionComponent', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_collection_CollectionComponentfillInstOf });
    io_cloudoffice_platform_cockpit_collection_CollectionComponentfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/collection/CollectionComponent';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_AbstractComponent;
    var refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$LoginEventListener;
    var refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$DesignModeListener;
    var refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$FunctionInvokeListener;
    var refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionHoverListener;
    var refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionToggleListener;
    var refs_java_lang_UnsupportedOperationException;
    var refs_io_cloudoffice_platform_cockpit_collection_CollectionView;
    var refs_io_cloudoffice_platform_cockpit_api_Event;
    var refs_io_cloudoffice_platform_cockpit_api_Components;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_io_cloudoffice_platform_cockpit_js_JSUIUtils;
    var refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$2;
    var refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$1;
    var refs_io_cloudoffice_platform_cockpit_api_Logger;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$4;
    var refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$3;
    var refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$6;
    var refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$5;
    var refs_io_cloudoffice_platform_cockpit_js_VIEW;
    var refs_java_util_ArrayList;
    var refs_io_cloudoffice_platform_cockpit_api_QueryMetaModel;
    var refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$GetRelatedItemsAsyncRequestCallback;
    var refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$GetRelatedItemsAsyncRequest;
    var refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration;
    var refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$7;
    var refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$8;
    var refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$BuildupBatchRelationshipAsyncRequestCallback;
    var refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$BuildupBatchRelationshipAsyncRequest;
    var refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$GetRelatedSubCollectionsCallback;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_collection_CollectionComponent = registerClass(exports,'io_cloudoffice_platform_cockpit_collection_CollectionComponent',io_cloudoffice_platform_cockpit_collection_CollectionComponent);


function io_cloudoffice_platform_cockpit_collection_CollectionComponent$GetRelatedSubCollectionsCallback() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_collection_CollectionComponent$GetRelatedSubCollectionsCallback;
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
c.processCallbackData__VLjava_lang_String_2.call(lcA0, lcA1);
return;

};
c['process__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.processCallbackData__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getRequest__Lio_cloudoffice_platform_cockpit_api_AsyncRequest_2(lcA0);
var stA0 = invoker.getView__Ljava_lang_Object_2(stA0);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_collection_CollectionView']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.collection.CollectionView');
var lcA2 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](lcA1);
if ((stI0) == 0) { gt = 184; break IF; }
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Z'](lcA1, 1);
var stA0 = invoker.getArray__Ljava_util_List_2(stA0);
var lcA3 = stA0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA3);
var lcA4 = stA0;
    }
    X_35: for (;;) { IF: if (gt <= 35) {

var stI0 = invoker.hasNext__Z(lcA4);
if ((stI0) == 0) { gt = 184; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA4);
if (stA0 !== null && !stA0['$instOf_java_util_Map']) vm.java_lang_Class(false).castEx(stA0, 'java.util.Map');
var lcA5 = stA0;
var stA0 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA5,"itemId");
var stI0 = invoker.equals__ZLjava_lang_Object_2(stA0,"-10");
if ((stI0) != 0) { gt = 181; break IF; }
var stA0 = new io_cloudoffice_platform_cockpit_collection_ListItemView;
(refs_io_cloudoffice_platform_cockpit_collection_ListItemView || (refs_io_cloudoffice_platform_cockpit_collection_ListItemView = io_cloudoffice_platform_cockpit_collection_ListItemView(false))).constructor.cons__V.call(stA0);
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
var stA0 = lcA6;var stA1 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA5,"itemType");
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
var stA1 = (refs_io_cloudoffice_platform_cockpit_api_QueryMetaModel || (refs_io_cloudoffice_platform_cockpit_api_QueryMetaModel = vm.io_cloudoffice_platform_cockpit_api_QueryMetaModel(false)))['getItemTypeIconCss__Ljava_lang_String_2Ljava_lang_String_2'](stA1);
stA0.setItemTypeIconCss__VLjava_lang_String_2(stA1);
var stA0 = lcA2.getCollectionListItemView__Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2();
var stA0 = stA0.getExistingItemList__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA6);
var stA0 = lcA2.getTempSelectedCollectionList__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA6);
    }
    X_181: for (;;) { IF: if (gt <= 181) {
{ gt = 0; continue X_35; }
    }
    X_184: for (;;) { IF: if (gt <= 184) {

var stA0 = lcA2.getCollectionListItemView__Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2();
var stA0 = stA0.getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
invoker.setActive__VZ(stA0,0);
var stA0 = c.getTempSelectedCollectionList__Ljava_util_List_2Lio_cloudoffice_platform_cockpit_collection_CollectionView_2.call(lcA0, lcA2);
var lcA3 = stA0;
var stI0 = invoker.isEmpty__Z(lcA3);
if ((stI0) != 0) { gt = 263; break IF; }
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['builder__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var lcA4 = stA0;
var stA0 = invoker.addFieldMapList__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_util_List_2(lcA4,"relatedItems", lcA3);
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA0, "clearbeforeloadlist", "loadlist", lcA4);
var lcA5 = stA0;
var stA0 = lcA2.getListComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA0 = invoker.getComponent__Ljava_lang_String_2(stA0);
var stA1 = lcA2.getListComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = invoker.getInstanceId__Ljava_lang_String_2(stA1);
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['get__Lio_cloudoffice_platform_cockpit_api_Component_2Ljava_lang_String_2Ljava_lang_String_2'](stA0, stA1);
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA5);
    }
    X_263: for (;;) { IF: if (gt <= 263) {
return;

    }
}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.getTempSelectedCollectionList__Ljava_util_List_2Lio_cloudoffice_platform_cockpit_collection_CollectionView_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new vm.java_util_ArrayList;
(refs_java_util_ArrayList || (refs_java_util_ArrayList = vm.java_util_ArrayList(false))).constructor['cons__V'].call(stA0);
var lcA2 = stA0;
var stA0 = lcA1.getTempSelectedCollectionList__Ljava_util_List_2();
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA3 = stA0;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

var stI0 = invoker.hasNext__Z(lcA3);
if ((stI0) == 0) { gt = 89; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA3);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_collection_ListItemView']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.collection.ListItemView');
var lcA4 = stA0;
var stA0 = new vm.java_util_HashMap;
(refs_java_util_HashMap || (refs_java_util_HashMap = vm.java_util_HashMap(false))).constructor['cons__V'].call(stA0);
var lcA5 = stA0;
var stA0 = lcA5;var stA1 = "itemId";var stA2 = lcA4.getItemId__Ljava_lang_String_2();
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA5;var stA1 = "itemType";var stA2 = lcA4.getItemType__Ljava_lang_String_2();
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA2,lcA5);
{ gt = 0; continue X_18; }
    }
    X_89: for (;;) { IF: if (gt <= 89) {

return lcA2;

    }
}}}
};
    m.access = 2;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_collection_CollectionComponent$GetRelatedSubCollectionsCallbackfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_collection_CollectionComponent$GetRelatedSubCollectionsCallback', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_collection_CollectionComponent$GetRelatedSubCollectionsCallbackfillInstOf });
    io_cloudoffice_platform_cockpit_collection_CollectionComponent$GetRelatedSubCollectionsCallbackfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/collection/CollectionComponent$GetRelatedSubCollectionsCallback';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_ServerCallback;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_collection_ListItemView;
    var refs_io_cloudoffice_platform_cockpit_api_QueryMetaModel;
    var refs_io_cloudoffice_platform_cockpit_api_Event;
    var refs_io_cloudoffice_platform_cockpit_api_Components;
    var refs_java_util_ArrayList;
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
vm.io_cloudoffice_platform_cockpit_collection_CollectionComponent$GetRelatedSubCollectionsCallback = registerClass(exports,'io_cloudoffice_platform_cockpit_collection_CollectionComponent$GetRelatedSubCollectionsCallback',io_cloudoffice_platform_cockpit_collection_CollectionComponent$GetRelatedSubCollectionsCallback);

vm.java_util_HashMap = link('java/util/HashMap', function(f) { vm.java_util_HashMap =  f; });

function io_cloudoffice_platform_cockpit_collection_CollectionComponent$BuildupBatchRelationshipAsyncRequestCallback() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_collection_CollectionComponent$BuildupBatchRelationshipAsyncRequestCallback;
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
c.processCallbackData__VLjava_lang_String_2.call(lcA0, lcA1);
return;

};
c['process__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.processCallbackData__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getRequest__Lio_cloudoffice_platform_cockpit_api_AsyncRequest_2(lcA0);
var stA0 = invoker.getView__Ljava_lang_Object_2(stA0);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_collection_CollectionView']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.collection.CollectionView');
var lcA2 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](lcA1);
if ((stI0) == 0) { gt = 75; break IF; }
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2'](lcA1);
var lcA3 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA3,"code");
var lcA4 = stA0;
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA4,"200");
if ((stI0) == 0) { gt = 75; break IF; }
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_Object_2'](lcA2);
if ((stI0) == 0) { gt = 75; break IF; }
lcA2.setCollectionhoveraction__VZ(0);
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"Successfully make relation >>");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA1);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2'](stA0);
    }
    X_75: for (;;) { IF: if (gt <= 75) {
return;

    }
}}
};
    m.access = 2;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_collection_CollectionComponent$BuildupBatchRelationshipAsyncRequestCallbackfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_collection_CollectionComponent$BuildupBatchRelationshipAsyncRequestCallback', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_collection_CollectionComponent$BuildupBatchRelationshipAsyncRequestCallbackfillInstOf });
    io_cloudoffice_platform_cockpit_collection_CollectionComponent$BuildupBatchRelationshipAsyncRequestCallbackfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/collection/CollectionComponent$BuildupBatchRelationshipAsyncRequestCallback';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_ServerCallback;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_java_lang_StringBuilder;
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
vm.io_cloudoffice_platform_cockpit_collection_CollectionComponent$BuildupBatchRelationshipAsyncRequestCallback = registerClass(exports,'io_cloudoffice_platform_cockpit_collection_CollectionComponent$BuildupBatchRelationshipAsyncRequestCallback',io_cloudoffice_platform_cockpit_collection_CollectionComponent$BuildupBatchRelationshipAsyncRequestCallback);


function io_cloudoffice_platform_cockpit_collection_CollectionComponent$BuildupBatchRelationshipAsyncRequest() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_collection_CollectionComponent$BuildupBatchRelationshipAsyncRequest;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_api_AsyncRequest(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._requestparameters = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$BuildupBatchRelationshipAsyncRequest_requestparameters'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$BuildupBatchRelationshipAsyncRequest_requestparameters']; };
    m = CLS.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_ServerCallback_2Lio_cloudoffice_platform_cockpit_collection_CollectionView_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3, lcA4) {
  var  lcA0 = this;
(refs_io_cloudoffice_platform_cockpit_api_AsyncRequest || (refs_io_cloudoffice_platform_cockpit_api_AsyncRequest = vm.io_cloudoffice_platform_cockpit_api_AsyncRequest(false))).constructor['cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_ServerCallback_2Ljava_lang_Object_2'].call(lcA0, lcA1, lcA2, lcA3);
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$BuildupBatchRelationshipAsyncRequest_requestparameters'] = lcA4;
return;

};
CLS['cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_ServerCallback_2Lio_cloudoffice_platform_cockpit_collection_CollectionView_2Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.preparePostData__V = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getRequestparameters__Ljava_lang_String_2(lcA0);
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA0);
if ((stI0) == 0) { gt = 666; break IF; }
var stA0 = invoker.getRequestparameters__Ljava_lang_String_2(lcA0);
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2'](stA0);
var lcA1 = stA0;
var stA0 = new vm.java_util_ArrayList;
(refs_java_util_ArrayList || (refs_java_util_ArrayList = vm.java_util_ArrayList(false))).constructor['cons__V'].call(stA0);
var lcA2 = stA0;
var stA0 = invoker.getList__Ljava_util_List_2Ljava_lang_String_2(lcA1,"items");
var lcA3 = stA0;
var stA0 = new vm.java_util_HashMap;
(refs_java_util_HashMap || (refs_java_util_HashMap = vm.java_util_HashMap(false))).constructor['cons__V'].call(stA0);
var lcA4 = stA0;
var stA0 = lcA4;var stA1 = "itemId";var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"itemId");
var stI2 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA2);
if ((stI2) == 0) { gt = 67; break IF; }
var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"itemId");
{ gt = 69; break IF; }
    }
    X_67: for (;;) { IF: if (gt <= 67) {

var stA2 = "''";    }
    X_69: for (;;) { IF: if (gt <= 69) {
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA4;var stA1 = "itemType";var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"itemType");
var stI2 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA2);
if ((stI2) == 0) { gt = 100; break IF; }
var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"itemType");
{ gt = 102; break IF; }
    }
    X_100: for (;;) { IF: if (gt <= 100) {

var stA2 = "''";    }
    X_102: for (;;) { IF: if (gt <= 102) {
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA4;var stA1 = "itemName";var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"itemName");
var stI2 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA2);
if ((stI2) == 0) { gt = 133; break IF; }
var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"itemName");
{ gt = 135; break IF; }
    }
    X_133: for (;;) { IF: if (gt <= 133) {

var stA2 = "''";    }
    X_135: for (;;) { IF: if (gt <= 135) {
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA4;var stA1 = "relatedItemId";var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"relatedItemId");
var stI2 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA2);
if ((stI2) == 0) { gt = 166; break IF; }
var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"relatedItemId");
{ gt = 168; break IF; }
    }
    X_166: for (;;) { IF: if (gt <= 166) {

var stA2 = "''";    }
    X_168: for (;;) { IF: if (gt <= 168) {
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA4;var stA1 = "relatedItemType";var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"relatedItemType");
var stI2 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA2);
if ((stI2) == 0) { gt = 199; break IF; }
var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"relatedItemType");
{ gt = 201; break IF; }
    }
    X_199: for (;;) { IF: if (gt <= 199) {

var stA2 = "''";    }
    X_201: for (;;) { IF: if (gt <= 201) {
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA4,"searchKey", "''");
var stA0 = lcA4;var stA1 = "description";var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"description");
var stI2 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA2);
if ((stI2) == 0) { gt = 244; break IF; }
var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"description");
{ gt = 246; break IF; }
    }
    X_244: for (;;) { IF: if (gt <= 244) {

var stA2 = "''";    }
    X_246: for (;;) { IF: if (gt <= 246) {
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA4;var stA1 = "companyRelationTypeA";var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"companyRelationTypeA");
var stI2 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA2);
if ((stI2) == 0) { gt = 277; break IF; }
var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"companyRelationTypeA");
{ gt = 279; break IF; }
    }
    X_277: for (;;) { IF: if (gt <= 277) {

var stA2 = "''";    }
    X_279: for (;;) { IF: if (gt <= 279) {
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA4;var stA1 = "companyRelationTypeB";var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"companyRelationTypeB");
var stI2 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA2);
if ((stI2) == 0) { gt = 310; break IF; }
var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"companyRelationTypeB");
{ gt = 312; break IF; }
    }
    X_310: for (;;) { IF: if (gt <= 310) {

var stA2 = "''";    }
    X_312: for (;;) { IF: if (gt <= 312) {
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA4;var stA1 = "personCompanyRelation";var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"personCompanyRelation");
var stI2 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA2);
if ((stI2) == 0) { gt = 343; break IF; }
var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"personCompanyRelation");
{ gt = 345; break IF; }
    }
    X_343: for (;;) { IF: if (gt <= 343) {

var stA2 = "''";    }
    X_345: for (;;) { IF: if (gt <= 345) {
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA4;var stA1 = "personCompanyPhone";var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"personCompanyPhone");
var stI2 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA2);
if ((stI2) == 0) { gt = 376; break IF; }
var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"personCompanyPhone");
{ gt = 378; break IF; }
    }
    X_376: for (;;) { IF: if (gt <= 376) {

var stA2 = "''";    }
    X_378: for (;;) { IF: if (gt <= 378) {
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA4;var stA1 = "personCompanyMobile";var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"personCompanyMobile");
var stI2 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA2);
if ((stI2) == 0) { gt = 409; break IF; }
var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"personCompanyMobile");
{ gt = 411; break IF; }
    }
    X_409: for (;;) { IF: if (gt <= 409) {

var stA2 = "''";    }
    X_411: for (;;) { IF: if (gt <= 411) {
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA4;var stA1 = "personCompanyEmail";var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"personCompanyEmail");
var stI2 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA2);
if ((stI2) == 0) { gt = 442; break IF; }
var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"personCompanyEmail");
{ gt = 444; break IF; }
    }
    X_442: for (;;) { IF: if (gt <= 442) {

var stA2 = "''";    }
    X_444: for (;;) { IF: if (gt <= 444) {
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA4;var stA1 = "function";var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"function");
var stI2 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA2);
if ((stI2) == 0) { gt = 475; break IF; }
var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"function");
{ gt = 477; break IF; }
    }
    X_475: for (;;) { IF: if (gt <= 475) {

var stA2 = "''";    }
    X_477: for (;;) { IF: if (gt <= 477) {
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA4;var stA1 = "personCompanyDepartment";var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"personCompanyDepartment");
var stI2 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA2);
if ((stI2) == 0) { gt = 508; break IF; }
var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"personCompanyDepartment");
{ gt = 510; break IF; }
    }
    X_508: for (;;) { IF: if (gt <= 508) {

var stA2 = "''";    }
    X_510: for (;;) { IF: if (gt <= 510) {
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA4;var stA1 = "engagementEndDate";var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"engagementEndDate");
var stI2 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA2);
if ((stI2) == 0) { gt = 541; break IF; }
var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"engagementEndDate");
{ gt = 543; break IF; }
    }
    X_541: for (;;) { IF: if (gt <= 541) {

var stA2 = "''";    }
    X_543: for (;;) { IF: if (gt <= 543) {
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA4;var stA1 = "projectRelationType";var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"projectRelationType");
var stI2 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA2);
if ((stI2) == 0) { gt = 574; break IF; }
var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"projectRelationType");
{ gt = 576; break IF; }
    }
    X_574: for (;;) { IF: if (gt <= 574) {

var stA2 = "''";    }
    X_576: for (;;) { IF: if (gt <= 576) {
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA4;var stA1 = "isEmployee";var stI2 = invoker.getBoolean__ZLjava_lang_String_2(lcA1,"isEmployee");
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA4;var stA1 = "businessModelName";var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"businessModelName");
var stI2 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA2);
if ((stI2) == 0) { gt = 626; break IF; }
var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"businessModelName");
{ gt = 628; break IF; }
    }
    X_626: for (;;) { IF: if (gt <= 626) {

var stA2 = "''";    }
    X_628: for (;;) { IF: if (gt <= 628) {
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA4,"selectedCampaignTypeList", lcA2);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA4,"items", lcA3);
var stA0 = lcA0;var stA1 = invoker.getEndpoint__Ljava_lang_String_2(lcA0);
invoker.put__VLjava_lang_String_2Ljava_lang_Object_2(stA0,stA1, lcA4);
    }
    X_666: for (;;) { IF: if (gt <= 666) {
return;

    }
}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
};
c['preparePostData__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.doValidate__Z = function() {
  var  lcA0 = this;
var stA0 = invoker.getRequestparameters__Ljava_lang_String_2(lcA0);
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA0);
return stI0;

};
c['doValidate__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getRequestparameters__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
return lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$BuildupBatchRelationshipAsyncRequest_requestparameters'];

};
c['getRequestparameters__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setRequestparameters__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$BuildupBatchRelationshipAsyncRequest_requestparameters'] = lcA1;
return;

};
c['setRequestparameters__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_collection_CollectionComponent$BuildupBatchRelationshipAsyncRequestfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_collection_CollectionComponent$BuildupBatchRelationshipAsyncRequest', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_collection_CollectionComponent$BuildupBatchRelationshipAsyncRequestfillInstOf });
    io_cloudoffice_platform_cockpit_collection_CollectionComponent$BuildupBatchRelationshipAsyncRequestfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/collection/CollectionComponent$BuildupBatchRelationshipAsyncRequest';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_AsyncRequest;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_java_util_ArrayList;
    var refs_java_util_HashMap;
    var refs_java_lang_Boolean;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$BuildupBatchRelationshipAsyncRequest_requestparameters'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_collection_CollectionComponent$BuildupBatchRelationshipAsyncRequest = registerClass(exports,'io_cloudoffice_platform_cockpit_collection_CollectionComponent$BuildupBatchRelationshipAsyncRequest',io_cloudoffice_platform_cockpit_collection_CollectionComponent$BuildupBatchRelationshipAsyncRequest);

vm.io_cloudoffice_platform_cockpit_api_AsyncRequest = link('io/cloudoffice/platform/cockpit/api/AsyncRequest', function(f) { vm.io_cloudoffice_platform_cockpit_api_AsyncRequest =  f; });

function io_cloudoffice_platform_cockpit_collection_CollectionComponent$8() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_collection_CollectionComponent$8;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$view = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$8_val$view'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$8_val$view']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$8_val$view'] = lcA1;
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
var stA0 = invoker.getJsonObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA2,"configuration");
var lcA3 = stA0;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$8_val$view'].getConfiguration__Lio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2();
var lcA4 = stA0;
var stA0 = lcA4;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA3,"collectionListType");
stA0.setCollectionListType__VLjava_lang_String_2(stA1);
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA3,"layoutRowId");
var lcA5 = stA0;
lcA4.setLayoutRowId__VLjava_lang_String_2(lcA5);
var stA0 = lcA0;var stA1 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$8_val$view'].getConfiguration__Lio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2();
var stA1 = stA1.getListComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA2 = invoker.getJSONObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA3,"listComponentDefinition");
c.prepareTalkToComponent__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2Lorg_json_JSONObject_2.call(stA0, stA1, stA2);
var stA0 = lcA0;var stA1 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$8_val$view'].getConfiguration__Lio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2();
var stA1 = stA1.getRelatedItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA2 = invoker.getJSONObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA3,"relatedItemComponentDefinition");
c.prepareTalkToComponent__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2Lorg_json_JSONObject_2.call(stA0, stA1, stA2);
var stA0 = lcA0;var stA1 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$8_val$view'].getConfiguration__Lio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2();
var stA1 = stA1.getNewItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA2 = invoker.getJSONObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA3,"newItemComponentDefinition");
c.prepareTalkToComponent__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2Lorg_json_JSONObject_2.call(stA0, stA1, stA2);
var stA0 = invoker.getJSONArray__Lorg_json_JSONArray_2Ljava_lang_String_2(lcA3,"collectionItemList");
var stA0 = invoker.toList__Ljava_util_List_2(stA0);
var lcA6 = stA0;
var stA0 = lcA4.getCollectionItemList__Ljava_util_List_2();
invoker.clear__V(stA0);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA6);
var lcA7 = stA0;
    }
    X_137: for (;;) { IF: if (gt <= 137) {

var stI0 = invoker.hasNext__Z(lcA7);
if ((stI0) == 0) { gt = 237; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA7);
var lcA8 = stA0;
if (lcA8 !== null && !lcA8['$instOf_java_util_Map']) vm.java_lang_Class(false).castEx(lcA8, 'java.util.Map');
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_util_Map_2'](lcA8);
var lcA9 = stA0;
var stA0 = new io_cloudoffice_platform_cockpit_collection_ListItemView;
(refs_io_cloudoffice_platform_cockpit_collection_ListItemView || (refs_io_cloudoffice_platform_cockpit_collection_ListItemView = io_cloudoffice_platform_cockpit_collection_ListItemView(false))).constructor.cons__V.call(stA0);
var lcA10 = stA0;
var stA0 = lcA10;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA9,"itemId");
stA0.setItemId__VLjava_lang_String_2(stA1);
var stA0 = lcA10;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA9,"itemName");
stA0.setItemName__VLjava_lang_String_2(stA1);
var stA0 = lcA10;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA9,"itemType");
stA0.setItemType__VLjava_lang_String_2(stA1);
var stA0 = lcA10;var stA1 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$ListItemViewModel || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$ListItemViewModel = io_cloudoffice_platform_cockpit_collection_CollectionComponent$ListItemViewModel(false))).shortCollectionName__Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_collection_ListItemView_2(lcA10);
stA0.setItemShortName__VLjava_lang_String_2(stA1);
var stA0 = lcA4.getCollectionItemList__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA10);
{ gt = 0; continue X_137; }
    }
    X_237: for (;;) { IF: if (gt <= 237) {
return;

    }
}}}
};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.prepareTalkToComponent__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2Lorg_json_JSONObject_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA1;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"instanceId");
invoker.setInstanceId__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA1;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"component");
invoker.setComponent__VLjava_lang_String_2(stA0,stA1);
return;

};
    m.access = 2;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_collection_CollectionComponent$8fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_collection_CollectionComponent$8', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_collection_CollectionComponent$8fillInstOf });
    io_cloudoffice_platform_cockpit_collection_CollectionComponent$8fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/collection/CollectionComponent$8';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_collection_ListItemView;
    var refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$ListItemViewModel;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$8_val$view'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_collection_CollectionComponent$8 = io_cloudoffice_platform_cockpit_collection_CollectionComponent$8;

vm.io_cloudoffice_platform_cockpit_api_CallBack = link('io/cloudoffice/platform/cockpit/api/CallBack', function(f) { vm.io_cloudoffice_platform_cockpit_api_CallBack =  f; });

function io_cloudoffice_platform_cockpit_collection_CollectionComponent$7() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_collection_CollectionComponent$7;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$view = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$7_val$view'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$7_val$view']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$7_val$view'] = lcA1;
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2']("Save Callback");
c.runtimeViewAdjustmentByConfiguration__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$7_val$view']);
(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent = io_cloudoffice_platform_cockpit_collection_CollectionComponent(false))).closeConfigurationPanel__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$7_val$view']);
return;

};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.runtimeViewAdjustmentByConfiguration__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA1.getCollectionItemList__Ljava_util_List_2();
invoker.clear__V(stA0);
var stA0 = lcA1.getCollectionItemList__Ljava_util_List_2();
var stA1 = lcA1.getConfiguration__Lio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2();
var stA1 = stA1.getCollectionItemList__Ljava_util_List_2();
var stI0 = invoker.addAll__ZLjava_util_Collection_2(stA0,stA1);
var stA0 = lcA1;var stA1 = lcA1.getConfiguration__Lio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2();
var stA1 = stA1.getLayoutRowId__Ljava_lang_String_2();
stA0.setLayoutRowId__VLjava_lang_String_2(stA1);
var stA0 = lcA1;var stA1 = lcA1.getConfiguration__Lio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2();
var stA1 = stA1.getCollectionListType__Ljava_lang_String_2();
stA0.setCollectionListType__VLjava_lang_String_2(stA1);
(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent = io_cloudoffice_platform_cockpit_collection_CollectionComponent(false))).collapseAllCollections__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2(lcA1);
var stA0 = lcA0;var stA1 = lcA1.getListComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA2 = lcA1.getConfiguration__Lio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2();
var stA2 = stA2.getListComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
c.resetDef__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2.call(stA0, stA1, stA2);
var stA0 = lcA0;var stA1 = lcA1.getRelatedItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA2 = lcA1.getConfiguration__Lio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2();
var stA2 = stA2.getRelatedItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
c.resetDef__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2.call(stA0, stA1, stA2);
var stA0 = lcA0;var stA1 = lcA1.getCollectionListItemView__Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2();
var stA1 = stA1.getRelatedItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA2 = lcA1.getConfiguration__Lio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2();
var stA2 = stA2.getRelatedItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
c.resetDef__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2.call(stA0, stA1, stA2);
var stA0 = lcA0;var stA1 = lcA1.getNewItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA2 = lcA1.getConfiguration__Lio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2();
var stA2 = stA2.getNewItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
c.resetDef__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2.call(stA0, stA1, stA2);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.resetDef__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA1;var stA1 = invoker.getInstanceId__Ljava_lang_String_2(lcA2);
invoker.setInstanceId__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA1;var stA1 = invoker.getComponent__Ljava_lang_String_2(lcA2);
invoker.setComponent__VLjava_lang_String_2(stA0,stA1);
return;

};
    m.access = 2;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_collection_CollectionComponent$7fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_collection_CollectionComponent$7', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_collection_CollectionComponent$7fillInstOf });
    io_cloudoffice_platform_cockpit_collection_CollectionComponent$7fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/collection/CollectionComponent$7';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_Logger;
    var refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$7_val$view'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_collection_CollectionComponent$7 = io_cloudoffice_platform_cockpit_collection_CollectionComponent$7;

vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration = link('io/cloudoffice/platform/cockpit/api/ComponentConfiguration', function(f) { vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration =  f; });

function io_cloudoffice_platform_cockpit_collection_CollectionComponent$GetRelatedItemsAsyncRequestCallback() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_collection_CollectionComponent$GetRelatedItemsAsyncRequestCallback;
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
c.processCallbackData__VLjava_lang_String_2.call(lcA0, lcA1);
return;

};
c['process__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.processCallbackData__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getRequest__Lio_cloudoffice_platform_cockpit_api_AsyncRequest_2(lcA0);
var stA0 = invoker.getView__Ljava_lang_Object_2(stA0);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_collection_CollectionView']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.collection.CollectionView');
var lcA2 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](lcA1);
if ((stI0) == 0) { gt = 172; break IF; }
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Z'](lcA1, 1);
var stA0 = invoker.getArray__Ljava_util_List_2(stA0);
var lcA3 = stA0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA3);
var lcA4 = stA0;
    }
    X_35: for (;;) { IF: if (gt <= 35) {

var stI0 = invoker.hasNext__Z(lcA4);
if ((stI0) == 0) { gt = 172; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA4);
if (stA0 !== null && !stA0['$instOf_java_util_Map']) vm.java_lang_Class(false).castEx(stA0, 'java.util.Map');
var lcA5 = stA0;
var stA0 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA5,"itemId");
var stI0 = invoker.equals__ZLjava_lang_Object_2(stA0,"-10");
if ((stI0) != 0) { gt = 169; break IF; }
var stA0 = new io_cloudoffice_platform_cockpit_collection_ListItemView;
(refs_io_cloudoffice_platform_cockpit_collection_ListItemView || (refs_io_cloudoffice_platform_cockpit_collection_ListItemView = io_cloudoffice_platform_cockpit_collection_ListItemView(false))).constructor.cons__V.call(stA0);
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
var stA0 = lcA6;var stA1 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA5,"itemType");
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
var stA1 = (refs_io_cloudoffice_platform_cockpit_api_QueryMetaModel || (refs_io_cloudoffice_platform_cockpit_api_QueryMetaModel = vm.io_cloudoffice_platform_cockpit_api_QueryMetaModel(false)))['getItemTypeIconCss__Ljava_lang_String_2Ljava_lang_String_2'](stA1);
stA0.setItemTypeIconCss__VLjava_lang_String_2(stA1);
var stA0 = lcA2.getCollectionListItemView__Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2();
var stA0 = stA0.getExistingItemList__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA6);
    }
    X_169: for (;;) { IF: if (gt <= 169) {
{ gt = 0; continue X_35; }
    }
    X_172: for (;;) { IF: if (gt <= 172) {

var stA0 = lcA2.getCollectionListItemView__Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2();
var stA0 = stA0.getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
invoker.setActive__VZ(stA0,0);
return;

    }
}}}}
};
    m.access = 2;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_collection_CollectionComponent$GetRelatedItemsAsyncRequestCallbackfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_collection_CollectionComponent$GetRelatedItemsAsyncRequestCallback', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_collection_CollectionComponent$GetRelatedItemsAsyncRequestCallbackfillInstOf });
    io_cloudoffice_platform_cockpit_collection_CollectionComponent$GetRelatedItemsAsyncRequestCallbackfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/collection/CollectionComponent$GetRelatedItemsAsyncRequestCallback';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_ServerCallback;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_collection_ListItemView;
    var refs_io_cloudoffice_platform_cockpit_api_QueryMetaModel;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_collection_CollectionComponent$GetRelatedItemsAsyncRequestCallback = registerClass(exports,'io_cloudoffice_platform_cockpit_collection_CollectionComponent$GetRelatedItemsAsyncRequestCallback',io_cloudoffice_platform_cockpit_collection_CollectionComponent$GetRelatedItemsAsyncRequestCallback);


function io_cloudoffice_platform_cockpit_collection_CollectionComponent$GetRelatedItemsAsyncRequest() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_collection_CollectionComponent$GetRelatedItemsAsyncRequest;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_api_AsyncRequest(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._requestparameters = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$GetRelatedItemsAsyncRequest_requestparameters'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$GetRelatedItemsAsyncRequest_requestparameters']; };
    m = CLS.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_ServerCallback_2Lio_cloudoffice_platform_cockpit_collection_CollectionView_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3, lcA4) {
  var  lcA0 = this;
(refs_io_cloudoffice_platform_cockpit_api_AsyncRequest || (refs_io_cloudoffice_platform_cockpit_api_AsyncRequest = vm.io_cloudoffice_platform_cockpit_api_AsyncRequest(false))).constructor['cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_ServerCallback_2Ljava_lang_Object_2'].call(lcA0, lcA1, lcA2, lcA3);
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$GetRelatedItemsAsyncRequest_requestparameters'] = lcA4;
return;

};
CLS['cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_ServerCallback_2Lio_cloudoffice_platform_cockpit_collection_CollectionView_2Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.preparePostData__V = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getRequestparameters__Ljava_lang_String_2(lcA0);
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA0);
if ((stI0) == 0) { gt = 263; break IF; }
var stA0 = invoker.getRequestparameters__Ljava_lang_String_2(lcA0);
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2'](stA0);
var lcA1 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"itemId");
var lcA2 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"itemType");
var lcA3 = stA0;
var stA0 = invoker.getList__Ljava_util_List_2Ljava_lang_String_2(lcA1,"relatedItemTypes");
var lcA4 = stA0;
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Query;
(refs_io_cloudoffice_platform_cockpit_api_Query || (refs_io_cloudoffice_platform_cockpit_api_Query = vm.io_cloudoffice_platform_cockpit_api_Query(false))).constructor['cons__V'].call(stA0);
var lcA5 = stA0;
invoker.setPageNumber__VI(lcA5,-1);
var stA0 = invoker.getFromClause__Ljava_util_List_2(lcA5);
var stI0 = invoker.addAll__ZLjava_util_Collection_2(stA0,lcA4);
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_ClauseGroup;
(refs_io_cloudoffice_platform_cockpit_api_ClauseGroup || (refs_io_cloudoffice_platform_cockpit_api_ClauseGroup = vm.io_cloudoffice_platform_cockpit_api_ClauseGroup(false))).constructor['cons__V'].call(stA0);
var lcA6 = stA0;
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Clause;
(refs_io_cloudoffice_platform_cockpit_api_Clause || (refs_io_cloudoffice_platform_cockpit_api_Clause = vm.io_cloudoffice_platform_cockpit_api_Clause(false))).constructor['cons__V'].call(stA0);
var lcA7 = stA0;
var stA0 = invoker.getKey__Ljava_util_List_2(lcA7);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,"relatedItemId");
invoker.setValue__VLjava_lang_String_2(lcA7,lcA2);
invoker.setLike__VZ(lcA7,0);
invoker.setItemType__VLjava_lang_String_2(lcA7,lcA3);
invoker.setType__VLjava_lang_String_2(lcA7,"VIRTUAL_RELATED");
var stA0 = lcA7;var stA1 = invoker.name__Ljava_lang_String_2((refs_io_cloudoffice_platform_cockpit_api_ClauseModel$Occur || (refs_io_cloudoffice_platform_cockpit_api_ClauseModel$Occur = vm.io_cloudoffice_platform_cockpit_api_ClauseModel$Occur(false)))['_MUST']());
invoker.setOccur__VLjava_lang_String_2(stA0,stA1);
var stA0 = invoker.getClauses__Ljava_util_List_2(lcA6);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA7);
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Clause;
(refs_io_cloudoffice_platform_cockpit_api_Clause || (refs_io_cloudoffice_platform_cockpit_api_Clause = vm.io_cloudoffice_platform_cockpit_api_Clause(false))).constructor['cons__V'].call(stA0);
var lcA7 = stA0;
var stA0 = invoker.getKey__Ljava_util_List_2(lcA7);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,"relatedItemType");
invoker.setValue__VLjava_lang_String_2(lcA7,lcA3);
invoker.setItemType__VLjava_lang_String_2(lcA7,lcA3);
invoker.setType__VLjava_lang_String_2(lcA7,"RELATED");
invoker.setLike__VZ(lcA7,0);
var stA0 = lcA7;var stA1 = invoker.name__Ljava_lang_String_2((refs_io_cloudoffice_platform_cockpit_api_ClauseModel$Occur || (refs_io_cloudoffice_platform_cockpit_api_ClauseModel$Occur = vm.io_cloudoffice_platform_cockpit_api_ClauseModel$Occur(false)))['_MUST']());
invoker.setOccur__VLjava_lang_String_2(stA0,stA1);
var stA0 = invoker.getClauses__Ljava_util_List_2(lcA6);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA7);
var stA0 = invoker.getOrClauseGroups__Ljava_util_List_2(lcA5);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA6);
var stA0 = new vm.java_util_HashMap;
(refs_java_util_HashMap || (refs_java_util_HashMap = vm.java_util_HashMap(false))).constructor['cons__V'].call(stA0);
var lcA8 = stA0;
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA8,"query", lcA5);
var stA0 = lcA0;var stA1 = invoker.getEndpoint__Ljava_lang_String_2(lcA0);
invoker.put__VLjava_lang_String_2Ljava_lang_Object_2(stA0,stA1, lcA8);
    }
    X_263: for (;;) { IF: if (gt <= 263) {
return;

    }
}}
};
c['preparePostData__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.doValidate__Z = function() {
  var  lcA0 = this;
var stA0 = invoker.getRequestparameters__Ljava_lang_String_2(lcA0);
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA0);
return stI0;

};
c['doValidate__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getRequestparameters__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
return lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$GetRelatedItemsAsyncRequest_requestparameters'];

};
c['getRequestparameters__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setRequestparameters__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$GetRelatedItemsAsyncRequest_requestparameters'] = lcA1;
return;

};
c['setRequestparameters__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_collection_CollectionComponent$GetRelatedItemsAsyncRequestfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_collection_CollectionComponent$GetRelatedItemsAsyncRequest', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_collection_CollectionComponent$GetRelatedItemsAsyncRequestfillInstOf });
    io_cloudoffice_platform_cockpit_collection_CollectionComponent$GetRelatedItemsAsyncRequestfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/collection/CollectionComponent$GetRelatedItemsAsyncRequest';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_AsyncRequest;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_api_Query;
    var refs_io_cloudoffice_platform_cockpit_api_ClauseGroup;
    var refs_io_cloudoffice_platform_cockpit_api_Clause;
    var refs_io_cloudoffice_platform_cockpit_api_ClauseModel$Occur;
    var refs_java_util_HashMap;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$GetRelatedItemsAsyncRequest_requestparameters'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_collection_CollectionComponent$GetRelatedItemsAsyncRequest = registerClass(exports,'io_cloudoffice_platform_cockpit_collection_CollectionComponent$GetRelatedItemsAsyncRequest',io_cloudoffice_platform_cockpit_collection_CollectionComponent$GetRelatedItemsAsyncRequest);

vm.io_cloudoffice_platform_cockpit_api_ClauseModel$Occur = link('io/cloudoffice/platform/cockpit/api/ClauseModel$Occur', function(f) { vm.io_cloudoffice_platform_cockpit_api_ClauseModel$Occur =  f; });
vm.io_cloudoffice_platform_cockpit_api_Clause = link('io/cloudoffice/platform/cockpit/api/Clause', function(f) { vm.io_cloudoffice_platform_cockpit_api_Clause =  f; });
vm.io_cloudoffice_platform_cockpit_api_ClauseGroup = link('io/cloudoffice/platform/cockpit/api/ClauseGroup', function(f) { vm.io_cloudoffice_platform_cockpit_api_ClauseGroup =  f; });
vm.io_cloudoffice_platform_cockpit_api_Query = link('io/cloudoffice/platform/cockpit/api/Query', function(f) { vm.io_cloudoffice_platform_cockpit_api_Query =  f; });
vm.java_util_ArrayList = link('java/util/ArrayList', function(f) { vm.java_util_ArrayList =  f; });
vm.io_cloudoffice_platform_cockpit_js_VIEW = link('io/cloudoffice/platform/cockpit/js/VIEW', function(f) { vm.io_cloudoffice_platform_cockpit_js_VIEW =  f; });

function io_cloudoffice_platform_cockpit_collection_CollectionComponent$5() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_collection_CollectionComponent$5;
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
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_collection_CollectionView']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.collection.CollectionView');
var lcA2 = stA0;
var stA0 = lcA2.getCollectionList__Ljava_util_List_2();
invoker.clear__V(stA0);
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](lcA1);
if ((stI0) == 0) { gt = 161; break IF; }
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Z'](lcA1, 1);
var stA0 = invoker.getArray__Ljava_util_List_2(stA0);
var lcA3 = stA0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA3);
var lcA4 = stA0;
    }
    X_44: for (;;) { IF: if (gt <= 44) {

var stI0 = invoker.hasNext__Z(lcA4);
if ((stI0) == 0) { gt = 161; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA4);
if (stA0 !== null && !stA0['$instOf_java_util_Map']) vm.java_lang_Class(false).castEx(stA0, 'java.util.Map');
var lcA5 = stA0;
var stA0 = new io_cloudoffice_platform_cockpit_collection_ListItemView;
(refs_io_cloudoffice_platform_cockpit_collection_ListItemView || (refs_io_cloudoffice_platform_cockpit_collection_ListItemView = io_cloudoffice_platform_cockpit_collection_ListItemView(false))).constructor.cons__V.call(stA0);
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
var stA0 = lcA6;var stA1 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA5,"itemType");
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
var stA1 = (refs_io_cloudoffice_platform_cockpit_api_QueryMetaModel || (refs_io_cloudoffice_platform_cockpit_api_QueryMetaModel = vm.io_cloudoffice_platform_cockpit_api_QueryMetaModel(false)))['getItemTypeIconCss__Ljava_lang_String_2Ljava_lang_String_2'](stA1);
stA0.setItemTypeIconCss__VLjava_lang_String_2(stA1);
var stA0 = lcA2.getCollectionList__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA6);
{ gt = 0; continue X_44; }
    }
    X_161: for (;;) { IF: if (gt <= 161) {

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
    function io_cloudoffice_platform_cockpit_collection_CollectionComponent$5fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_collection_CollectionComponent$5', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_collection_CollectionComponent$5fillInstOf });
    io_cloudoffice_platform_cockpit_collection_CollectionComponent$5fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/collection/CollectionComponent$5';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_ServerCallback;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_collection_ListItemView;
    var refs_io_cloudoffice_platform_cockpit_api_QueryMetaModel;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_collection_CollectionComponent$5 = io_cloudoffice_platform_cockpit_collection_CollectionComponent$5;


function io_cloudoffice_platform_cockpit_collection_CollectionComponent$6() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_collection_CollectionComponent$6;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_api_AsyncRequest(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$searchKey = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$6_val$searchKey'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$6_val$searchKey']; };
    m = CLS.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_collection_CollectionView_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$6_val$searchKey'] = lcA3;
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
var stA0 = new vm.java_util_ArrayList;
(refs_java_util_ArrayList || (refs_java_util_ArrayList = vm.java_util_ArrayList(false))).constructor['cons__V'].call(stA0);
var lcA2 = stA0;
var stA0 = new vm.java_util_ArrayList;
(refs_java_util_ArrayList || (refs_java_util_ArrayList = vm.java_util_ArrayList(false))).constructor['cons__V'].call(stA0);
var lcA3 = stA0;
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA3,"COLLECTION");
var stA0 = new vm.java_util_HashMap;
(refs_java_util_HashMap || (refs_java_util_HashMap = vm.java_util_HashMap(false))).constructor['cons__V'].call(stA0);
var lcA4 = stA0;
var stA0 = lcA4;var stA1 = "scopeGroup";var stA2 = (refs_io_cloudoffice_platform_cockpit_api_Session || (refs_io_cloudoffice_platform_cockpit_api_Session = vm.io_cloudoffice_platform_cockpit_api_Session(false)))['getCompany__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(stA2,"itemId");
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA4,"collectionType", "generic");
var stA0 = lcA1;var stA1 = "searchKey";var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"'");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$6_val$searchKey']);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"'");
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA1,"fromClause", lcA3);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA1,"attributes", lcA4);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA1,"existingItems", lcA2);
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
    function io_cloudoffice_platform_cockpit_collection_CollectionComponent$6fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_collection_CollectionComponent$6', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_collection_CollectionComponent$6fillInstOf });
    io_cloudoffice_platform_cockpit_collection_CollectionComponent$6fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/collection/CollectionComponent$6';
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
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$6_val$searchKey'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_collection_CollectionComponent$6 = io_cloudoffice_platform_cockpit_collection_CollectionComponent$6;

vm.io_cloudoffice_platform_cockpit_api_Session = link('io/cloudoffice/platform/cockpit/api/Session', function(f) { vm.io_cloudoffice_platform_cockpit_api_Session =  f; });

function io_cloudoffice_platform_cockpit_collection_CollectionComponent$3() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_collection_CollectionComponent$3;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_api_ServerCallback(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$collectionName = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$3_val$collectionName'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$3_val$collectionName']; };
    m = CLS.cons__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$3_val$collectionName'] = lcA1;
(refs_io_cloudoffice_platform_cockpit_api_ServerCallback || (refs_io_cloudoffice_platform_cockpit_api_ServerCallback = vm.io_cloudoffice_platform_cockpit_api_ServerCallback(false))).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.process__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getRequest__Lio_cloudoffice_platform_cockpit_api_AsyncRequest_2(lcA0);
var stA0 = invoker.getView__Ljava_lang_Object_2(stA0);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_collection_CollectionView']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.collection.CollectionView');
var lcA2 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](lcA1);
if ((stI0) == 0) { gt = 33; break IF; }
c.updateView__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2.call(lcA0, lcA2);
c.updateConfiguration__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2Ljava_lang_String_2.call(lcA0, lcA2, lcA1);
(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent = io_cloudoffice_platform_cockpit_collection_CollectionComponent(false))).save__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2(lcA2);
    }
    X_33: for (;;) { IF: if (gt <= 33) {
return;

    }
}}
};
c['process__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.updateView__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2 = function(lcA1) {
  var  lcA0 = this;
lcA1.setNewCollectionName__VLjava_lang_String_2("");
lcA1.setCollectionhoveraction__VZ(0);
var stA0 = lcA1.getCollectionListItemView__Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2();
var stA0 = stA0.getExistingItemList__Ljava_util_List_2();
invoker.clear__V(stA0);
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2']("########## View updated.");
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.updateConfiguration__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2Ljava_lang_String_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2'](lcA2);
var lcA3 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA3,"virtualCollectionItemId");
var lcA4 = stA0;
var stA0 = new io_cloudoffice_platform_cockpit_collection_ListItemView;
(refs_io_cloudoffice_platform_cockpit_collection_ListItemView || (refs_io_cloudoffice_platform_cockpit_collection_ListItemView = io_cloudoffice_platform_cockpit_collection_ListItemView(false))).constructor.cons__V.call(stA0);
var lcA5 = stA0;
lcA5.setItemId__VLjava_lang_String_2(lcA4);
lcA5.setItemName__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$3_val$collectionName']);
lcA5.setItemType__VLjava_lang_String_2("COLLECTION");
var stA0 = lcA5;var stA1 = (refs_io_cloudoffice_platform_cockpit_api_QueryMetaModel || (refs_io_cloudoffice_platform_cockpit_api_QueryMetaModel = vm.io_cloudoffice_platform_cockpit_api_QueryMetaModel(false)))['getItemTypeIconCss__Ljava_lang_String_2Ljava_lang_String_2']("COLLECTION");
stA0.setItemTypeIconCss__VLjava_lang_String_2(stA1);
var stA0 = lcA5;var stA1 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$ListItemViewModel || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$ListItemViewModel = io_cloudoffice_platform_cockpit_collection_CollectionComponent$ListItemViewModel(false))).shortCollectionName__Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_collection_ListItemView_2(lcA5);
stA0.setItemShortName__VLjava_lang_String_2(stA1);
var stA0 = lcA1.getConfiguration__Lio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2();
var stA0 = stA0.getCollectionItemList__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA5);
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2']("########## Configuration updated.");
return;

};
    m.access = 2;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_collection_CollectionComponent$3fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_collection_CollectionComponent$3', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_collection_CollectionComponent$3fillInstOf });
    io_cloudoffice_platform_cockpit_collection_CollectionComponent$3fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/collection/CollectionComponent$3';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_ServerCallback;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent;
    var refs_io_cloudoffice_platform_cockpit_api_Logger;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_collection_ListItemView;
    var refs_io_cloudoffice_platform_cockpit_api_QueryMetaModel;
    var refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$ListItemViewModel;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$3_val$collectionName'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_collection_CollectionComponent$3 = io_cloudoffice_platform_cockpit_collection_CollectionComponent$3;


function io_cloudoffice_platform_cockpit_collection_CollectionComponent$4() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_collection_CollectionComponent$4;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_api_AsyncRequest(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$collectionName = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$4_val$collectionName'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$4_val$collectionName']; };
  m = c._val$selecteditems = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$4_val$selecteditems'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$4_val$selecteditems']; };
    m = CLS.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_collection_CollectionView_2Ljava_lang_String_2Ljava_util_List_2 = function(lcA1, lcA2, lcA3, lcA4) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$4_val$collectionName'] = lcA3;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$4_val$selecteditems'] = lcA4;
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
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA1,"collectionName", lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$4_val$collectionName']);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA1,"collectionType", "generic");
var stA0 = lcA1;var stA1 = "scopeGroupId";var stA2 = (refs_io_cloudoffice_platform_cockpit_api_Session || (refs_io_cloudoffice_platform_cockpit_api_Session = vm.io_cloudoffice_platform_cockpit_api_Session(false)))['getCompany__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(stA2,"itemId");
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA1,"childrens", lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$4_val$selecteditems']);
var stA0 = lcA0;var stA1 = invoker.getEndpoint__Ljava_lang_String_2(lcA0);
invoker.put__VLjava_lang_String_2Ljava_lang_Object_2(stA0,stA1, lcA1);
return;

};
c['preparePostData__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.doValidate__Z = function() {
  var  lcA0 = this;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$4_val$collectionName']);
return stI0;

};
c['doValidate__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_collection_CollectionComponent$4fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_collection_CollectionComponent$4', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_collection_CollectionComponent$4fillInstOf });
    io_cloudoffice_platform_cockpit_collection_CollectionComponent$4fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/collection/CollectionComponent$4';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_AsyncRequest;
    var refs_java_util_HashMap;
    var refs_io_cloudoffice_platform_cockpit_api_Session;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$4_val$collectionName'] = null;
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$4_val$selecteditems'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_collection_CollectionComponent$4 = io_cloudoffice_platform_cockpit_collection_CollectionComponent$4;


function io_cloudoffice_platform_cockpit_collection_CollectionComponent$2() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_collection_CollectionComponent$2;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_api_AsyncRequest(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$collectionName = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$2_val$collectionName'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$2_val$collectionName']; };
    m = CLS.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_collection_CollectionView_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$2_val$collectionName'] = lcA3;
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
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA1,"collectionName", lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$2_val$collectionName']);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA1,"collectionType", "generic");
var stA0 = lcA1;var stA1 = "scopeGroupId";var stA2 = (refs_io_cloudoffice_platform_cockpit_api_Session || (refs_io_cloudoffice_platform_cockpit_api_Session = vm.io_cloudoffice_platform_cockpit_api_Session(false)))['getCompany__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(stA2,"itemId");
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
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$2_val$collectionName']);
return stI0;

};
c['doValidate__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_collection_CollectionComponent$2fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_collection_CollectionComponent$2', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_collection_CollectionComponent$2fillInstOf });
    io_cloudoffice_platform_cockpit_collection_CollectionComponent$2fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/collection/CollectionComponent$2';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_AsyncRequest;
    var refs_java_util_HashMap;
    var refs_io_cloudoffice_platform_cockpit_api_Session;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$2_val$collectionName'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_collection_CollectionComponent$2 = io_cloudoffice_platform_cockpit_collection_CollectionComponent$2;

vm.io_cloudoffice_platform_cockpit_js_JSUIUtils = link('io/cloudoffice/platform/cockpit/js/JSUIUtils', function(f) { vm.io_cloudoffice_platform_cockpit_js_JSUIUtils =  f; });
vm.io_cloudoffice_platform_cockpit_api_Components = link('io/cloudoffice/platform/cockpit/api/Components', function(f) { vm.io_cloudoffice_platform_cockpit_api_Components =  f; });
vm.io_cloudoffice_platform_cockpit_api_Event = link('io/cloudoffice/platform/cockpit/api/Event', function(f) { vm.io_cloudoffice_platform_cockpit_api_Event =  f; });

function io_cloudoffice_platform_cockpit_collection_CollectionView() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_collection_CollectionView;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto']; };
  m = c._prop_instance = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_instance'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_instance']; };
  m = c._prop_designerMode = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_designerMode'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_designerMode']; };
  m = c._prop_configuration = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_configuration'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_configuration']; };
  m = c._prop_layoutRowId = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_layoutRowId'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_layoutRowId']; };
  m = c._prop_listComponentDefinition = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_listComponentDefinition'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_listComponentDefinition']; };
  m = c._prop_relatedItemComponentDefinition = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_relatedItemComponentDefinition'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_relatedItemComponentDefinition']; };
  m = c._prop_newItemComponentDefinition = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_newItemComponentDefinition'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_newItemComponentDefinition']; };
  m = c._prop_menuOnExpandedMode = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_menuOnExpandedMode'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_menuOnExpandedMode']; };
  m = c._prop_collectionClass = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionClass'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionClass']; };
  m = c._prop_newCollectionName = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_newCollectionName'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_newCollectionName']; };
  m = c._prop_collectionItemList = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionItemList'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionItemList']; };
  m = c._prop_collectionListItemView = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionListItemView'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionListItemView']; };
  m = c._prop_collectionhoveraction = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionhoveraction'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionhoveraction']; };
  m = c._prop_hoverModeCollectionCreate = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_hoverModeCollectionCreate'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_hoverModeCollectionCreate']; };
  m = c._prop_collectioncreatemode = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectioncreatemode'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectioncreatemode']; };
  m = c._prop_collectionInputBoxText = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionInputBoxText'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionInputBoxText']; };
  m = c._prop_collectionList = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionList'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionList']; };
  m = c._prop_collectionListType = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionListType'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionListType']; };
  m = c._prop_tempSelectedCollection = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_tempSelectedCollection'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_tempSelectedCollection']; };
  m = c._prop_tempSelectedCollectionList = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_tempSelectedCollectionList'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_tempSelectedCollectionList']; };
  m = c._prop_loader = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_loader'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_loader']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent = io_cloudoffice_platform_cockpit_collection_CollectionComponent(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.getInstance__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto'],"instance");
return lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_instance'];

};
c['getInstance__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setInstance__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_instance'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_instance'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto'],"instance", lcA2, lcA1);
return;

    }
}}
};
c['setInstance__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isDesignerMode__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto'],"designerMode");
return lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_designerMode'];

};
c['isDesignerMode__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setDesignerMode__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_designerMode']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_designerMode'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto'];var stA1 = "designerMode";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setDesignerMode__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getConfiguration__Lio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto'],"configuration");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_configuration']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new io_cloudoffice_platform_cockpit_collection_CollectionConfiguration;
(refs_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration || (refs_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration = io_cloudoffice_platform_cockpit_collection_CollectionConfiguration(false))).constructor.cons__V.call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_configuration'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_configuration'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_configuration']['$instOf_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_configuration'], 'io.cloudoffice.platform.cockpit.collection.CollectionConfiguration');
return lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_configuration'];

    }
}}
};
c['getConfiguration__Lio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setConfiguration__VLio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_configuration'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_configuration'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto'],"configuration", lcA2, lcA1);
return;

    }
}}
};
c['setConfiguration__VLio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getLayoutRowId__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto'],"layoutRowId");
return lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_layoutRowId'];

};
c['getLayoutRowId__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setLayoutRowId__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_layoutRowId'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_layoutRowId'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto'],"layoutRowId", lcA2, lcA1);
return;

    }
}}
};
c['setLayoutRowId__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getListComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto'],"listComponentDefinition");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_listComponentDefinition']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_ComponentDef;
(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_listComponentDefinition'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_listComponentDefinition'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_listComponentDefinition']['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_listComponentDefinition'], 'io.cloudoffice.platform.cockpit.api.ComponentDef');
return lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_listComponentDefinition'];

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

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_listComponentDefinition'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_listComponentDefinition'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto'],"listComponentDefinition", lcA2, lcA1);
return;

    }
}}
};
c['setListComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getRelatedItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto'],"relatedItemComponentDefinition");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_relatedItemComponentDefinition']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_ComponentDef;
(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_relatedItemComponentDefinition'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_relatedItemComponentDefinition'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_relatedItemComponentDefinition']['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_relatedItemComponentDefinition'], 'io.cloudoffice.platform.cockpit.api.ComponentDef');
return lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_relatedItemComponentDefinition'];

    }
}}
};
c['getRelatedItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setRelatedItemComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_relatedItemComponentDefinition'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_relatedItemComponentDefinition'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto'],"relatedItemComponentDefinition", lcA2, lcA1);
return;

    }
}}
};
c['setRelatedItemComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getNewItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto'],"newItemComponentDefinition");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_newItemComponentDefinition']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_ComponentDef;
(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_newItemComponentDefinition'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_newItemComponentDefinition'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_newItemComponentDefinition']['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_newItemComponentDefinition'], 'io.cloudoffice.platform.cockpit.api.ComponentDef');
return lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_newItemComponentDefinition'];

    }
}}
};
c['getNewItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setNewItemComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_newItemComponentDefinition'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_newItemComponentDefinition'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto'],"newItemComponentDefinition", lcA2, lcA1);
return;

    }
}}
};
c['setNewItemComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isMenuOnExpandedMode__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto'],"menuOnExpandedMode");
return lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_menuOnExpandedMode'];

};
c['isMenuOnExpandedMode__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setMenuOnExpandedMode__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_menuOnExpandedMode']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_menuOnExpandedMode'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto'];var stA1 = "menuOnExpandedMode";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setMenuOnExpandedMode__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getCollectionClass__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto'],"collectionClass");
return lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionClass'];

};
c['getCollectionClass__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setCollectionClass__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionClass'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionClass'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto'],"collectionClass", lcA2, lcA1);
return;

    }
}}
};
c['setCollectionClass__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getNewCollectionName__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto'],"newCollectionName");
return lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_newCollectionName'];

};
c['getNewCollectionName__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setNewCollectionName__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_newCollectionName'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_newCollectionName'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto'],"newCollectionName", lcA2, lcA1);
return;

    }
}}
};
c['setNewCollectionName__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getCollectionItemList__Ljava_util_List_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto'],"collectionItemList");
return lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionItemList'];

};
c['getCollectionItemList__Ljava_util_List_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getCollectionListItemView__Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto'],"collectionListItemView");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionListItemView']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new io_cloudoffice_platform_cockpit_collection_CollectionListItemView;
(refs_io_cloudoffice_platform_cockpit_collection_CollectionListItemView || (refs_io_cloudoffice_platform_cockpit_collection_CollectionListItemView = io_cloudoffice_platform_cockpit_collection_CollectionListItemView(false))).constructor.cons__V.call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionListItemView'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionListItemView'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionListItemView']['$instOf_io_cloudoffice_platform_cockpit_collection_CollectionListItemView']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionListItemView'], 'io.cloudoffice.platform.cockpit.collection.CollectionListItemView');
return lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionListItemView'];

    }
}}
};
c['getCollectionListItemView__Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setCollectionListItemView__VLio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionListItemView'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionListItemView'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto'],"collectionListItemView", lcA2, lcA1);
return;

    }
}}
};
c['setCollectionListItemView__VLio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isCollectionhoveraction__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto'],"collectionhoveraction");
return lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionhoveraction'];

};
c['isCollectionhoveraction__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setCollectionhoveraction__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionhoveraction']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionhoveraction'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto'];var stA1 = "collectionhoveraction";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setCollectionhoveraction__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isHoverModeCollectionCreate__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto'],"hoverModeCollectionCreate");
return lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_hoverModeCollectionCreate'];

};
c['isHoverModeCollectionCreate__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setHoverModeCollectionCreate__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_hoverModeCollectionCreate']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_hoverModeCollectionCreate'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto'];var stA1 = "hoverModeCollectionCreate";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
var lcA3 = lcA0;
(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent = io_cloudoffice_platform_cockpit_collection_CollectionComponent(false))).onChangehoverMode__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2(lcA3);
return;

    }
}}
};
c['setHoverModeCollectionCreate__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isCollectioncreatemode__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto'],"collectioncreatemode");
return lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectioncreatemode'];

};
c['isCollectioncreatemode__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setCollectioncreatemode__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectioncreatemode']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectioncreatemode'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto'];var stA1 = "collectioncreatemode";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setCollectioncreatemode__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getCollectionInputBoxText__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto'],"collectionInputBoxText");
return lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionInputBoxText'];

};
c['getCollectionInputBoxText__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setCollectionInputBoxText__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionInputBoxText'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionInputBoxText'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto'],"collectionInputBoxText", lcA2, lcA1);
var lcA3 = lcA0;
(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent = io_cloudoffice_platform_cockpit_collection_CollectionComponent(false))).itemSearchAutocomplete__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2(lcA3);
return;

    }
}}
};
c['setCollectionInputBoxText__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getCollectionList__Ljava_util_List_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto'],"collectionList");
return lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionList'];

};
c['getCollectionList__Ljava_util_List_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getCollectionListType__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto'],"collectionListType");
return lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionListType'];

};
c['getCollectionListType__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setCollectionListType__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionListType'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionListType'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto'],"collectionListType", lcA2, lcA1);
return;

    }
}}
};
c['setCollectionListType__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getTempSelectedCollection__Lio_cloudoffice_platform_cockpit_collection_ListItemView_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto'],"tempSelectedCollection");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_tempSelectedCollection']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new io_cloudoffice_platform_cockpit_collection_ListItemView;
(refs_io_cloudoffice_platform_cockpit_collection_ListItemView || (refs_io_cloudoffice_platform_cockpit_collection_ListItemView = io_cloudoffice_platform_cockpit_collection_ListItemView(false))).constructor.cons__V.call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_tempSelectedCollection'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_tempSelectedCollection'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_tempSelectedCollection']['$instOf_io_cloudoffice_platform_cockpit_collection_ListItemView']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_tempSelectedCollection'], 'io.cloudoffice.platform.cockpit.collection.ListItemView');
return lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_tempSelectedCollection'];

    }
}}
};
c['getTempSelectedCollection__Lio_cloudoffice_platform_cockpit_collection_ListItemView_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setTempSelectedCollection__VLio_cloudoffice_platform_cockpit_collection_ListItemView_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_tempSelectedCollection'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_tempSelectedCollection'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto'],"tempSelectedCollection", lcA2, lcA1);
return;

    }
}}
};
c['setTempSelectedCollection__VLio_cloudoffice_platform_cockpit_collection_ListItemView_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getTempSelectedCollectionList__Ljava_util_List_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto'],"tempSelectedCollectionList");
return lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_tempSelectedCollectionList'];

};
c['getTempSelectedCollectionList__Ljava_util_List_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto'],"loader");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_loader']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_HelperItemView;
(refs_io_cloudoffice_platform_cockpit_api_HelperItemView || (refs_io_cloudoffice_platform_cockpit_api_HelperItemView = vm.io_cloudoffice_platform_cockpit_api_HelperItemView(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_loader'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_loader'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_loader']['$instOf_io_cloudoffice_platform_cockpit_api_HelperItemView']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_loader'], 'io.cloudoffice.platform.cockpit.api.HelperItemView');
return lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_loader'];

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

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_loader'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_loader'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto'],"loader", lcA2, lcA1);
return;

    }
}}
};
c['setLoader__VLio_cloudoffice_platform_cockpit_api_HelperItemView_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2(c._TYPE(),lcA0, lcA1);
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto'] = stA1;
var stA0 = lcA0;var stA1 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto'];var stA2 = "collectionItemList";var stI3 = -1;var stA4 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 0);
var stA1 = invoker.createList__Ljava_util_List_2Ljava_lang_String_2I_3Ljava_lang_String_2(stA1,stA2, stI3, stA4);
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionItemList'] = stA1;
var stA0 = lcA0;var stA1 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto'];var stA2 = "collectionList";var stI3 = -1;var stA4 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 0);
var stA1 = invoker.createList__Ljava_util_List_2Ljava_lang_String_2I_3Ljava_lang_String_2(stA1,stA2, stI3, stA4);
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionList'] = stA1;
var stA0 = lcA0;var stA1 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto'];var stA2 = "tempSelectedCollectionList";var stI3 = -1;var stA4 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 0);
var stA1 = invoker.createList__Ljava_util_List_2Ljava_lang_String_2I_3Ljava_lang_String_2(stA1,stA2, stI3, stA4);
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_tempSelectedCollectionList'] = stA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_configuration'] = c._TYPE();
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_listComponentDefinition'] = c._TYPE();
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_relatedItemComponentDefinition'] = c._TYPE();
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_newItemComponentDefinition'] = c._TYPE();
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionListItemView'] = c._TYPE();
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_tempSelectedCollection'] = c._TYPE();
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_loader'] = c._TYPE();
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLjava_lang_String_2ZLio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2ZLjava_lang_String_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2ZZZLjava_lang_String_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_collection_ListItemView_2Lio_cloudoffice_platform_cockpit_api_HelperItemView_2_3Lio_cloudoffice_platform_cockpit_collection_ListItemView_2 = function(lcA1, lcI2, lcA3, lcA4, lcA5, lcA6, lcA7, lcI8, lcA9, lcA10, lcA11, lcI12, lcI13, lcI14, lcA15, lcA16, lcA17, lcA18, lcA19) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_instance'] = lcA1;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_designerMode'] = lcI2;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_configuration'] = lcA3;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_layoutRowId'] = lcA4;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_listComponentDefinition'] = lcA5;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_relatedItemComponentDefinition'] = lcA6;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_newItemComponentDefinition'] = lcA7;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_menuOnExpandedMode'] = lcI8;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionClass'] = lcA9;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_newCollectionName'] = lcA10;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionListItemView'] = lcA11;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionhoveraction'] = lcI12;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_hoverModeCollectionCreate'] = lcI13;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectioncreatemode'] = lcI14;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionInputBoxText'] = lcA15;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionListType'] = lcA16;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_tempSelectedCollection'] = lcA17;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_loader'] = lcA18;
invoker.initTo__VLjava_util_Collection_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto'],lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionItemList'], lcA19);
return;

};
CLS['cons__VLjava_lang_String_2ZLio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2ZLjava_lang_String_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2ZZZLjava_lang_String_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_collection_ListItemView_2Lio_cloudoffice_platform_cockpit_api_HelperItemView_2_3Lio_cloudoffice_platform_cockpit_collection_ListItemView_2'] = m;

    m.access = 129;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, (21));
var lcA3 = stA0;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, (21));
Array.at(stA2, 0, "instance");
Array.at(stA2, 1, "designerMode");
Array.at(stA2, 2, "configuration");
Array.at(stA2, 3, "layoutRowId");
Array.at(stA2, 4, "listComponentDefinition");
Array.at(stA2, 5, "relatedItemComponentDefinition");
Array.at(stA2, (6), "newItemComponentDefinition");
Array.at(stA2, (7), "menuOnExpandedMode");
Array.at(stA2, (8), "collectionClass");
Array.at(stA2, (9), "newCollectionName");
Array.at(stA2, (10), "collectionItemList");
Array.at(stA2, (11), "collectionListItemView");
Array.at(stA2, (12), "collectionhoveraction");
Array.at(stA2, (13), "hoverModeCollectionCreate");
Array.at(stA2, (14), "collectioncreatemode");
Array.at(stA2, (15), "collectionInputBoxText");
Array.at(stA2, (16), "collectionList");
Array.at(stA2, (17), "collectionListType");
Array.at(stA2, (18), "tempSelectedCollection");
Array.at(stA2, (19), "tempSelectedCollectionList");
Array.at(stA2, (20), "loader");
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
if ((lcA3[0] || Array.at(lcA3, 0)) !== null && !(lcA3[0] || Array.at(lcA3, 0))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[0] || Array.at(lcA3, 0)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_instance'] = (lcA3[0] || Array.at(lcA3, 0));
var stA0 = lcA0;if (((lcA3[1] || Array.at(lcA3, 1))) !== null) { gt = 166; break IF; }
var stI1 = 0;{ gt = 178; break IF; }
    }
    X_166: for (;;) { IF: if (gt <= 166) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[1] || Array.at(lcA3, 1)));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_178: for (;;) { IF: if (gt <= 178) {
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_designerMode'] = stI1;
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto'],(refs_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration || (refs_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration = io_cloudoffice_platform_cockpit_collection_CollectionConfiguration(false))).constructor.$class, (lcA3[2] || Array.at(lcA3, 2)));
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_configuration'] = stA1;
if ((lcA3[3] || Array.at(lcA3, 3)) !== null && !(lcA3[3] || Array.at(lcA3, 3))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[3] || Array.at(lcA3, 3)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_layoutRowId'] = (lcA3[3] || Array.at(lcA3, 3));
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto'],(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, (lcA3[4] || Array.at(lcA3, 4)));
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_listComponentDefinition'] = stA1;
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto'],(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, (lcA3[5] || Array.at(lcA3, 5)));
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_relatedItemComponentDefinition'] = stA1;
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto'],(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, (lcA3[(6)] || Array.at(lcA3, (6))));
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_newItemComponentDefinition'] = stA1;
var stA0 = lcA0;if (((lcA3[(7)] || Array.at(lcA3, (7)))) !== null) { gt = 268; break IF; }
var stI1 = 0;{ gt = 281; break IF; }
    }
    X_268: for (;;) { IF: if (gt <= 268) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(7)] || Array.at(lcA3, (7))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_281: for (;;) { IF: if (gt <= 281) {
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_menuOnExpandedMode'] = stI1;
if ((lcA3[(8)] || Array.at(lcA3, (8))) !== null && !(lcA3[(8)] || Array.at(lcA3, (8)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(8)] || Array.at(lcA3, (8))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionClass'] = (lcA3[(8)] || Array.at(lcA3, (8)));
if ((lcA3[(9)] || Array.at(lcA3, (9))) !== null && !(lcA3[(9)] || Array.at(lcA3, (9)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(9)] || Array.at(lcA3, (9))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_newCollectionName'] = (lcA3[(9)] || Array.at(lcA3, (9)));
var stA0 = c.useAsArray___3Ljava_lang_Object_2Ljava_lang_Object_2((lcA3[(10)] || Array.at(lcA3, (10))));
var lcA4 = stA0;
var lcI5 = (lcA4).length;
var lcI6 = 0;
    }
    X_323: for (;;) { IF: if (gt <= 323) {

if ((lcI6) >= (lcI5)) { gt = 364; break IF; }
var lcA7 = (lcA4[lcI6] || Array.at(lcA4, lcI6));
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionItemList'];var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto'],(refs_io_cloudoffice_platform_cockpit_collection_ListItemView || (refs_io_cloudoffice_platform_cockpit_collection_ListItemView = io_cloudoffice_platform_cockpit_collection_ListItemView(false))).constructor.$class, lcA7);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
lcI6++;
{ gt = 0; continue X_323; }
    }
    X_364: for (;;) { IF: if (gt <= 364) {

var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto'],(refs_io_cloudoffice_platform_cockpit_collection_CollectionListItemView || (refs_io_cloudoffice_platform_cockpit_collection_CollectionListItemView = io_cloudoffice_platform_cockpit_collection_CollectionListItemView(false))).constructor.$class, (lcA3[(11)] || Array.at(lcA3, (11))));
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionListItemView'] = stA1;
var stA0 = lcA0;if (((lcA3[(12)] || Array.at(lcA3, (12)))) !== null) { gt = 393; break IF; }
var stI1 = 0;{ gt = 406; break IF; }
    }
    X_393: for (;;) { IF: if (gt <= 393) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(12)] || Array.at(lcA3, (12))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_406: for (;;) { IF: if (gt <= 406) {
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionhoveraction'] = stI1;
var stA0 = lcA0;if (((lcA3[(13)] || Array.at(lcA3, (13)))) !== null) { gt = 421; break IF; }
var stI1 = 0;{ gt = 434; break IF; }
    }
    X_421: for (;;) { IF: if (gt <= 421) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(13)] || Array.at(lcA3, (13))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_434: for (;;) { IF: if (gt <= 434) {
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_hoverModeCollectionCreate'] = stI1;
var stA0 = lcA0;if (((lcA3[(14)] || Array.at(lcA3, (14)))) !== null) { gt = 449; break IF; }
var stI1 = 0;{ gt = 462; break IF; }
    }
    X_449: for (;;) { IF: if (gt <= 449) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(14)] || Array.at(lcA3, (14))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_462: for (;;) { IF: if (gt <= 462) {
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectioncreatemode'] = stI1;
if ((lcA3[(15)] || Array.at(lcA3, (15))) !== null && !(lcA3[(15)] || Array.at(lcA3, (15)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(15)] || Array.at(lcA3, (15))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionInputBoxText'] = (lcA3[(15)] || Array.at(lcA3, (15)));
var stA0 = c.useAsArray___3Ljava_lang_Object_2Ljava_lang_Object_2((lcA3[(16)] || Array.at(lcA3, (16))));
var lcA4 = stA0;
var lcI5 = (lcA4).length;
var lcI6 = 0;
    }
    X_493: for (;;) { IF: if (gt <= 493) {

if ((lcI6) >= (lcI5)) { gt = 534; break IF; }
var lcA7 = (lcA4[lcI6] || Array.at(lcA4, lcI6));
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionList'];var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto'],(refs_io_cloudoffice_platform_cockpit_collection_ListItemView || (refs_io_cloudoffice_platform_cockpit_collection_ListItemView = io_cloudoffice_platform_cockpit_collection_ListItemView(false))).constructor.$class, lcA7);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
lcI6++;
{ gt = 0; continue X_493; }
    }
    X_534: for (;;) { IF: if (gt <= 534) {

if ((lcA3[(17)] || Array.at(lcA3, (17))) !== null && !(lcA3[(17)] || Array.at(lcA3, (17)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(17)] || Array.at(lcA3, (17))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionListType'] = (lcA3[(17)] || Array.at(lcA3, (17)));
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto'],(refs_io_cloudoffice_platform_cockpit_collection_ListItemView || (refs_io_cloudoffice_platform_cockpit_collection_ListItemView = io_cloudoffice_platform_cockpit_collection_ListItemView(false))).constructor.$class, (lcA3[(18)] || Array.at(lcA3, (18))));
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_tempSelectedCollection'] = stA1;
var stA0 = c.useAsArray___3Ljava_lang_Object_2Ljava_lang_Object_2((lcA3[(19)] || Array.at(lcA3, (19))));
var lcA4 = stA0;
var lcI5 = (lcA4).length;
var lcI6 = 0;
    }
    X_579: for (;;) { IF: if (gt <= 579) {

if ((lcI6) >= (lcI5)) { gt = 620; break IF; }
var lcA7 = (lcA4[lcI6] || Array.at(lcA4, lcI6));
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_tempSelectedCollectionList'];var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto'],(refs_io_cloudoffice_platform_cockpit_collection_ListItemView || (refs_io_cloudoffice_platform_cockpit_collection_ListItemView = io_cloudoffice_platform_cockpit_collection_ListItemView(false))).constructor.$class, lcA7);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
lcI6++;
{ gt = 0; continue X_579; }
    }
    X_620: for (;;) { IF: if (gt <= 620) {

var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto'],(refs_io_cloudoffice_platform_cockpit_api_HelperItemView || (refs_io_cloudoffice_platform_cockpit_api_HelperItemView = vm.io_cloudoffice_platform_cockpit_api_HelperItemView(false))).constructor.$class, (lcA3[(20)] || Array.at(lcA3, (20))));
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_loader'] = stA1;
return;

    }
}}}}}}}}}}}}}}}}}
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
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_configuration']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"layoutRowId");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getLayoutRowId__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"listComponentDefinition");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_listComponentDefinition']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"relatedItemComponentDefinition");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_relatedItemComponentDefinition']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"newItemComponentDefinition");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_newItemComponentDefinition']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"menuOnExpandedMode");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isMenuOnExpandedMode__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"collectionClass");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getCollectionClass__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"newCollectionName");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getNewCollectionName__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"collectionItemList");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionItemList']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"collectionListItemView");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionListItemView']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"collectionhoveraction");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isCollectionhoveraction__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"hoverModeCollectionCreate");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isHoverModeCollectionCreate__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"collectioncreatemode");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isCollectioncreatemode__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"collectionInputBoxText");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getCollectionInputBoxText__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"collectionList");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionList']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"collectionListType");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getCollectionListType__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"tempSelectedCollection");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_tempSelectedCollection']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"tempSelectedCollectionList");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_tempSelectedCollectionList']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"loader");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_loader']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(125));
var stA0 = invoker.toString__Ljava_lang_String_2(lcA1);
return stA0;

};
c['toString__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_collection_CollectionView_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto']);
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_collection_CollectionView_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lio_cloudoffice_platform_cockpit_collection_CollectionView_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_collection_CollectionView_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new io_cloudoffice_platform_cockpit_collection_CollectionView;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = lcA0.getInstance__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_instance'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isDesignerMode__Z();
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_designerMode'] = stI1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_configuration']) !== null) { gt = 37; break IF; }
var stA1 = null;{ gt = 61; break IF; }
    }
    X_37: for (;;) { IF: if (gt <= 37) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_configuration']) !== (c._TYPE())) { gt = 53; break IF; }
var stA1 = c._TYPE();{ gt = 61; break IF; }
    }
    X_53: for (;;) { IF: if (gt <= 53) {

var stA1 = lcA0.getConfiguration__Lio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_61: for (;;) { IF: if (gt <= 61) {
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_configuration'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getLayoutRowId__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_layoutRowId'] = stA1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_listComponentDefinition']) !== null) { gt = 84; break IF; }
var stA1 = null;{ gt = 108; break IF; }
    }
    X_84: for (;;) { IF: if (gt <= 84) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_listComponentDefinition']) !== (c._TYPE())) { gt = 100; break IF; }
var stA1 = c._TYPE();{ gt = 108; break IF; }
    }
    X_100: for (;;) { IF: if (gt <= 100) {

var stA1 = lcA0.getListComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_108: for (;;) { IF: if (gt <= 108) {
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_listComponentDefinition'] = stA1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_relatedItemComponentDefinition']) !== null) { gt = 123; break IF; }
var stA1 = null;{ gt = 147; break IF; }
    }
    X_123: for (;;) { IF: if (gt <= 123) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_relatedItemComponentDefinition']) !== (c._TYPE())) { gt = 139; break IF; }
var stA1 = c._TYPE();{ gt = 147; break IF; }
    }
    X_139: for (;;) { IF: if (gt <= 139) {

var stA1 = lcA0.getRelatedItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_147: for (;;) { IF: if (gt <= 147) {
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_relatedItemComponentDefinition'] = stA1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_newItemComponentDefinition']) !== null) { gt = 162; break IF; }
var stA1 = null;{ gt = 186; break IF; }
    }
    X_162: for (;;) { IF: if (gt <= 162) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_newItemComponentDefinition']) !== (c._TYPE())) { gt = 178; break IF; }
var stA1 = c._TYPE();{ gt = 186; break IF; }
    }
    X_178: for (;;) { IF: if (gt <= 178) {

var stA1 = lcA0.getNewItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_186: for (;;) { IF: if (gt <= 186) {
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_newItemComponentDefinition'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isMenuOnExpandedMode__Z();
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_menuOnExpandedMode'] = stI1;
var stA0 = lcA2;var stA1 = lcA0.getCollectionClass__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionClass'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getNewCollectionName__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_newCollectionName'] = stA1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto'];var stA1 = lcA2.getCollectionItemList__Ljava_util_List_2();
invoker.cloneList__VLjava_util_Collection_2Lnet_java_html_BrwsrCtx_2Ljava_util_Collection_2(stA0,stA1, lcA1, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionItemList']);
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionListItemView']) !== null) { gt = 241; break IF; }
var stA1 = null;{ gt = 265; break IF; }
    }
    X_241: for (;;) { IF: if (gt <= 241) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionListItemView']) !== (c._TYPE())) { gt = 257; break IF; }
var stA1 = c._TYPE();{ gt = 265; break IF; }
    }
    X_257: for (;;) { IF: if (gt <= 257) {

var stA1 = lcA0.getCollectionListItemView__Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_265: for (;;) { IF: if (gt <= 265) {
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionListItemView'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isCollectionhoveraction__Z();
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionhoveraction'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isHoverModeCollectionCreate__Z();
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_hoverModeCollectionCreate'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isCollectioncreatemode__Z();
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectioncreatemode'] = stI1;
var stA0 = lcA2;var stA1 = lcA0.getCollectionInputBoxText__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionInputBoxText'] = stA1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto'];var stA1 = lcA2.getCollectionList__Ljava_util_List_2();
invoker.cloneList__VLjava_util_Collection_2Lnet_java_html_BrwsrCtx_2Ljava_util_Collection_2(stA0,stA1, lcA1, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionList']);
var stA0 = lcA2;var stA1 = lcA0.getCollectionListType__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionListType'] = stA1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_tempSelectedCollection']) !== null) { gt = 336; break IF; }
var stA1 = null;{ gt = 360; break IF; }
    }
    X_336: for (;;) { IF: if (gt <= 336) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_tempSelectedCollection']) !== (c._TYPE())) { gt = 352; break IF; }
var stA1 = c._TYPE();{ gt = 360; break IF; }
    }
    X_352: for (;;) { IF: if (gt <= 352) {

var stA1 = lcA0.getTempSelectedCollection__Lio_cloudoffice_platform_cockpit_collection_ListItemView_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_360: for (;;) { IF: if (gt <= 360) {
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_tempSelectedCollection'] = stA1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto'];var stA1 = lcA2.getTempSelectedCollectionList__Ljava_util_List_2();
invoker.cloneList__VLjava_util_Collection_2Lnet_java_html_BrwsrCtx_2Ljava_util_Collection_2(stA0,stA1, lcA1, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_tempSelectedCollectionList']);
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_loader']) !== null) { gt = 391; break IF; }
var stA1 = null;{ gt = 415; break IF; }
    }
    X_391: for (;;) { IF: if (gt <= 391) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_loader']) !== (c._TYPE())) { gt = 407; break IF; }
var stA1 = c._TYPE();{ gt = 415; break IF; }
    }
    X_407: for (;;) { IF: if (gt <= 407) {

var stA1 = lcA0.getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_415: for (;;) { IF: if (gt <= 415) {
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_loader'] = stA1;
return lcA2;

    }
}}}}}}}}}}}}}}}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lio_cloudoffice_platform_cockpit_collection_CollectionView_2 = function() {
  var  lcA0 = this;
invoker.applyBindings__V(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto']);
return lcA0;

};
c['applyBindings__Lio_cloudoffice_platform_cockpit_collection_CollectionView_2'] = m;

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

var stI0 = lcA1 != null && lcA1['$instOf_io_cloudoffice_platform_cockpit_collection_CollectionView'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_collection_CollectionView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.collection.CollectionView');
var lcA2 = lcA1;
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_instance'], lcA2['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_instance']);
if ((stI0) != 0) { gt = 40; break IF; }
return 0;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_designerMode']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_designerMode']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 65; break IF; }
return 0;
    }
    X_65: for (;;) { IF: if (gt <= 65) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_configuration']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_configuration']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 92; break IF; }
return 0;
    }
    X_92: for (;;) { IF: if (gt <= 92) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_layoutRowId'], lcA2['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_layoutRowId']);
if ((stI0) != 0) { gt = 111; break IF; }
return 0;
    }
    X_111: for (;;) { IF: if (gt <= 111) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_listComponentDefinition']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_listComponentDefinition']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 138; break IF; }
return 0;
    }
    X_138: for (;;) { IF: if (gt <= 138) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_relatedItemComponentDefinition']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_relatedItemComponentDefinition']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 165; break IF; }
return 0;
    }
    X_165: for (;;) { IF: if (gt <= 165) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_newItemComponentDefinition']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_newItemComponentDefinition']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 192; break IF; }
return 0;
    }
    X_192: for (;;) { IF: if (gt <= 192) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_menuOnExpandedMode']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_menuOnExpandedMode']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 217; break IF; }
return 0;
    }
    X_217: for (;;) { IF: if (gt <= 217) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionClass'], lcA2['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionClass']);
if ((stI0) != 0) { gt = 236; break IF; }
return 0;
    }
    X_236: for (;;) { IF: if (gt <= 236) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_newCollectionName'], lcA2['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_newCollectionName']);
if ((stI0) != 0) { gt = 255; break IF; }
return 0;
    }
    X_255: for (;;) { IF: if (gt <= 255) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionItemList']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionItemList']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 282; break IF; }
return 0;
    }
    X_282: for (;;) { IF: if (gt <= 282) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionListItemView']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionListItemView']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 309; break IF; }
return 0;
    }
    X_309: for (;;) { IF: if (gt <= 309) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionhoveraction']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionhoveraction']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 334; break IF; }
return 0;
    }
    X_334: for (;;) { IF: if (gt <= 334) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_hoverModeCollectionCreate']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_hoverModeCollectionCreate']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 359; break IF; }
return 0;
    }
    X_359: for (;;) { IF: if (gt <= 359) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectioncreatemode']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectioncreatemode']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 384; break IF; }
return 0;
    }
    X_384: for (;;) { IF: if (gt <= 384) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionInputBoxText'], lcA2['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionInputBoxText']);
if ((stI0) != 0) { gt = 403; break IF; }
return 0;
    }
    X_403: for (;;) { IF: if (gt <= 403) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionList']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionList']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 430; break IF; }
return 0;
    }
    X_430: for (;;) { IF: if (gt <= 430) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionListType'], lcA2['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionListType']);
if ((stI0) != 0) { gt = 449; break IF; }
return 0;
    }
    X_449: for (;;) { IF: if (gt <= 449) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_tempSelectedCollection']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_tempSelectedCollection']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 476; break IF; }
return 0;
    }
    X_476: for (;;) { IF: if (gt <= 476) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_tempSelectedCollectionList']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_tempSelectedCollectionList']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 503; break IF; }
return 0;
    }
    X_503: for (;;) { IF: if (gt <= 503) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_loader']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_loader']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 530; break IF; }
return 0;
    }
    X_530: for (;;) { IF: if (gt <= 530) {

return 1;

    }
}}}}}}}}}}}}}}}}}}}}}}}}
};
c['equals__ZLjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.hashCode__I = function() {
  var  lcA0 = this;
var stA0 = invoker.getName__Ljava_lang_String_2(c.constructor.$class);
var stI0 = invoker.hashCode__I(stA0);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_instance'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_designerMode']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_configuration']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_layoutRowId'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_listComponentDefinition']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_relatedItemComponentDefinition']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_newItemComponentDefinition']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_menuOnExpandedMode']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionClass'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_newCollectionName'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionItemList']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionListItemView']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionhoveraction']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_hoverModeCollectionCreate']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectioncreatemode']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionInputBoxText'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionList']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionListType'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_tempSelectedCollection']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_tempSelectedCollectionList']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_loader']);
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
var stA0 = lcA0.clone__Lio_cloudoffice_platform_cockpit_collection_CollectionView_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lio_cloudoffice_platform_cockpit_collection_CollectionView$Html4JavaType_2 = function() {
return c._TYPE();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_collection_CollectionView_2 = function(lcA0) {
return lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_collection_CollectionView$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lio_cloudoffice_platform_cockpit_collection_CollectionView_2Lio_cloudoffice_platform_cockpit_collection_CollectionView_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_collection_CollectionView_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_collection_CollectionView$Html4JavaType;
(refs_io_cloudoffice_platform_cockpit_collection_CollectionView$Html4JavaType || (refs_io_cloudoffice_platform_cockpit_collection_CollectionView$Html4JavaType = io_cloudoffice_platform_cockpit_collection_CollectionView$Html4JavaType(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_collection_CollectionView$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_collection_CollectionViewfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_collection_CollectionView', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_collection_CollectionViewfillInstOf });
    io_cloudoffice_platform_cockpit_collection_CollectionViewfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/collection/CollectionView';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent;
    var refs_java_lang_Boolean;
    var refs_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration;
    var refs_net_java_html_json_Models;
    var refs_io_cloudoffice_platform_cockpit_api_ComponentDef;
    var refs_io_cloudoffice_platform_cockpit_collection_CollectionListItemView;
    var refs_io_cloudoffice_platform_cockpit_collection_ListItemView;
    var refs_io_cloudoffice_platform_cockpit_api_HelperItemView;
    var refs_net_java_html_BrwsrCtx;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_collection_CollectionView$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_proto'] = null;
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_instance'] = null;
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_designerMode'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_configuration'] = null;
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_layoutRowId'] = null;
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_listComponentDefinition'] = null;
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_relatedItemComponentDefinition'] = null;
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_newItemComponentDefinition'] = null;
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_menuOnExpandedMode'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionClass'] = null;
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_newCollectionName'] = null;
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionItemList'] = null;
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionListItemView'] = null;
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionhoveraction'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_hoverModeCollectionCreate'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectioncreatemode'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionInputBoxText'] = null;
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionList'] = null;
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_collectionListType'] = null;
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_tempSelectedCollection'] = null;
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_tempSelectedCollectionList'] = null;
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionView_prop_loader'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_collection_CollectionView = registerClass(exports,'io_cloudoffice_platform_cockpit_collection_CollectionView',io_cloudoffice_platform_cockpit_collection_CollectionView);


function io_cloudoffice_platform_cockpit_collection_CollectionView$Html4JavaType() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_collection_CollectionView$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_io_cloudoffice_platform_cockpit_collection_CollectionView || (refs_io_cloudoffice_platform_cockpit_collection_CollectionView = io_cloudoffice_platform_cockpit_collection_CollectionView(false))).constructor.$class, (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent = io_cloudoffice_platform_cockpit_collection_CollectionComponent(false))).constructor.$class, (21), (26));
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"instance", 0, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"designerMode", 1, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"configuration", 2, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"layoutRowId", 3, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"listComponentDefinition", 4, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"relatedItemComponentDefinition", 5, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"newItemComponentDefinition", (6), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"menuOnExpandedMode", (7), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"collectionClass", (8), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"newCollectionName", (9), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"collectionItemList", (10), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"collectionListItemView", (11), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"collectionhoveraction", (12), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"hoverModeCollectionCreate", (13), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"collectioncreatemode", (14), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"collectionInputBoxText", (15), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"collectionList", (16), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"collectionListType", (17), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"tempSelectedCollection", (18), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"tempSelectedCollectionList", (19), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"loader", (20), 0, 0);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"createNewItem", 0);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"createNewCollection", 1);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"createCollection", 2);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"createCollectionWithSubCollection", 3);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"createCollectionWithSelectedItems", 4);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"getItemList", 5);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"expandCollectionBar", (6));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"shrinkCollectionBar", (7));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"performToogle", (8));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"toogleCollectionBox", (9));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"collapseAllCollections", (10));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"collapseAllAndActiveSelected", (11));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"deselectAllSubCollections", (12));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"getRelatedItems", (13));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"save", (14));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"openConfig", (15));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"closeConfigurationPanel", (16));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"resetConfiguration", (17));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"toggleHoverAction", (18));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"openActionHover", (19));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"openActionHoverWithCollectionCreateMode", (20));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"openActionHoverWithCollectionItemAddMode", (21));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"closeActionHover", (22));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"addItemsToCollection", (23));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"makeRelationshipWithCollection", (24));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"loadParentCollectionItemsToList", (25));
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 100; break IF; }
  case 1:{ gt = 117; break IF; }
  case 2:{ gt = 137; break IF; }
  case 3:{ gt = 154; break IF; }
  case 4:{ gt = 171; break IF; }
  case 5:{ gt = 188; break IF; }
  case 6:{ gt = 205; break IF; }
  case 7:{ gt = 222; break IF; }
  case 8:{ gt = 242; break IF; }
  case 9:{ gt = 259; break IF; }
  case 10:{ gt = 276; break IF; }
  case 11:{ gt = 290; break IF; }
  case 12:{ gt = 307; break IF; }
  case 13:{ gt = 327; break IF; }
  case 14:{ gt = 347; break IF; }
  case 15:{ gt = 367; break IF; }
  case 16:{ gt = 384; break IF; }
  case 17:{ gt = 398; break IF; }
  case 18:{ gt = 415; break IF; }
  case 19:{ gt = 432; break IF; }
  case 20:{ gt = 446; break IF; }
  default: { gt = 463; break IF; }
}
    }
    X_100: for (;;) { IF: if (gt <= 100) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionView || (refs_io_cloudoffice_platform_cockpit_collection_CollectionView = io_cloudoffice_platform_cockpit_collection_CollectionView(false))).access$100__Lio_cloudoffice_platform_cockpit_collection_CollectionView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setInstance__VLjava_lang_String_2(stA1);
return;
    }
    X_117: for (;;) { IF: if (gt <= 117) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionView || (refs_io_cloudoffice_platform_cockpit_collection_CollectionView = io_cloudoffice_platform_cockpit_collection_CollectionView(false))).access$100__Lio_cloudoffice_platform_cockpit_collection_CollectionView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setDesignerMode__VZ(stI1);
return;
    }
    X_137: for (;;) { IF: if (gt <= 137) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionView || (refs_io_cloudoffice_platform_cockpit_collection_CollectionView = io_cloudoffice_platform_cockpit_collection_CollectionView(false))).access$100__Lio_cloudoffice_platform_cockpit_collection_CollectionView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration || (refs_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration = io_cloudoffice_platform_cockpit_collection_CollectionConfiguration(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.collection.CollectionConfiguration');
stA0.setConfiguration__VLio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2(stA1);
return;
    }
    X_154: for (;;) { IF: if (gt <= 154) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionView || (refs_io_cloudoffice_platform_cockpit_collection_CollectionView = io_cloudoffice_platform_cockpit_collection_CollectionView(false))).access$100__Lio_cloudoffice_platform_cockpit_collection_CollectionView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setLayoutRowId__VLjava_lang_String_2(stA1);
return;
    }
    X_171: for (;;) { IF: if (gt <= 171) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionView || (refs_io_cloudoffice_platform_cockpit_collection_CollectionView = io_cloudoffice_platform_cockpit_collection_CollectionView(false))).access$100__Lio_cloudoffice_platform_cockpit_collection_CollectionView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.api.ComponentDef');
stA0.setListComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2(stA1);
return;
    }
    X_188: for (;;) { IF: if (gt <= 188) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionView || (refs_io_cloudoffice_platform_cockpit_collection_CollectionView = io_cloudoffice_platform_cockpit_collection_CollectionView(false))).access$100__Lio_cloudoffice_platform_cockpit_collection_CollectionView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.api.ComponentDef');
stA0.setRelatedItemComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2(stA1);
return;
    }
    X_205: for (;;) { IF: if (gt <= 205) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionView || (refs_io_cloudoffice_platform_cockpit_collection_CollectionView = io_cloudoffice_platform_cockpit_collection_CollectionView(false))).access$100__Lio_cloudoffice_platform_cockpit_collection_CollectionView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.api.ComponentDef');
stA0.setNewItemComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2(stA1);
return;
    }
    X_222: for (;;) { IF: if (gt <= 222) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionView || (refs_io_cloudoffice_platform_cockpit_collection_CollectionView = io_cloudoffice_platform_cockpit_collection_CollectionView(false))).access$100__Lio_cloudoffice_platform_cockpit_collection_CollectionView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setMenuOnExpandedMode__VZ(stI1);
return;
    }
    X_242: for (;;) { IF: if (gt <= 242) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionView || (refs_io_cloudoffice_platform_cockpit_collection_CollectionView = io_cloudoffice_platform_cockpit_collection_CollectionView(false))).access$100__Lio_cloudoffice_platform_cockpit_collection_CollectionView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setCollectionClass__VLjava_lang_String_2(stA1);
return;
    }
    X_259: for (;;) { IF: if (gt <= 259) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionView || (refs_io_cloudoffice_platform_cockpit_collection_CollectionView = io_cloudoffice_platform_cockpit_collection_CollectionView(false))).access$100__Lio_cloudoffice_platform_cockpit_collection_CollectionView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setNewCollectionName__VLjava_lang_String_2(stA1);
return;
    }
    X_276: for (;;) { IF: if (gt <= 276) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionView || (refs_io_cloudoffice_platform_cockpit_collection_CollectionView = io_cloudoffice_platform_cockpit_collection_CollectionView(false))).access$100__Lio_cloudoffice_platform_cockpit_collection_CollectionView$Html4JavaType_2();
var stA1 = lcA1.getCollectionItemList__Ljava_util_List_2();
invoker.replaceValue__VLjava_util_Collection_2Ljava_lang_Class_2Ljava_lang_Object_2(stA0,stA1, (refs_io_cloudoffice_platform_cockpit_collection_ListItemView || (refs_io_cloudoffice_platform_cockpit_collection_ListItemView = io_cloudoffice_platform_cockpit_collection_ListItemView(false))).constructor.$class, lcA3);
return;
    }
    X_290: for (;;) { IF: if (gt <= 290) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionView || (refs_io_cloudoffice_platform_cockpit_collection_CollectionView = io_cloudoffice_platform_cockpit_collection_CollectionView(false))).access$100__Lio_cloudoffice_platform_cockpit_collection_CollectionView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_collection_CollectionListItemView || (refs_io_cloudoffice_platform_cockpit_collection_CollectionListItemView = io_cloudoffice_platform_cockpit_collection_CollectionListItemView(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_collection_CollectionListItemView']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.collection.CollectionListItemView');
stA0.setCollectionListItemView__VLio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2(stA1);
return;
    }
    X_307: for (;;) { IF: if (gt <= 307) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionView || (refs_io_cloudoffice_platform_cockpit_collection_CollectionView = io_cloudoffice_platform_cockpit_collection_CollectionView(false))).access$100__Lio_cloudoffice_platform_cockpit_collection_CollectionView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setCollectionhoveraction__VZ(stI1);
return;
    }
    X_327: for (;;) { IF: if (gt <= 327) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionView || (refs_io_cloudoffice_platform_cockpit_collection_CollectionView = io_cloudoffice_platform_cockpit_collection_CollectionView(false))).access$100__Lio_cloudoffice_platform_cockpit_collection_CollectionView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setHoverModeCollectionCreate__VZ(stI1);
return;
    }
    X_347: for (;;) { IF: if (gt <= 347) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionView || (refs_io_cloudoffice_platform_cockpit_collection_CollectionView = io_cloudoffice_platform_cockpit_collection_CollectionView(false))).access$100__Lio_cloudoffice_platform_cockpit_collection_CollectionView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setCollectioncreatemode__VZ(stI1);
return;
    }
    X_367: for (;;) { IF: if (gt <= 367) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionView || (refs_io_cloudoffice_platform_cockpit_collection_CollectionView = io_cloudoffice_platform_cockpit_collection_CollectionView(false))).access$100__Lio_cloudoffice_platform_cockpit_collection_CollectionView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setCollectionInputBoxText__VLjava_lang_String_2(stA1);
return;
    }
    X_384: for (;;) { IF: if (gt <= 384) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionView || (refs_io_cloudoffice_platform_cockpit_collection_CollectionView = io_cloudoffice_platform_cockpit_collection_CollectionView(false))).access$100__Lio_cloudoffice_platform_cockpit_collection_CollectionView$Html4JavaType_2();
var stA1 = lcA1.getCollectionList__Ljava_util_List_2();
invoker.replaceValue__VLjava_util_Collection_2Ljava_lang_Class_2Ljava_lang_Object_2(stA0,stA1, (refs_io_cloudoffice_platform_cockpit_collection_ListItemView || (refs_io_cloudoffice_platform_cockpit_collection_ListItemView = io_cloudoffice_platform_cockpit_collection_ListItemView(false))).constructor.$class, lcA3);
return;
    }
    X_398: for (;;) { IF: if (gt <= 398) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionView || (refs_io_cloudoffice_platform_cockpit_collection_CollectionView = io_cloudoffice_platform_cockpit_collection_CollectionView(false))).access$100__Lio_cloudoffice_platform_cockpit_collection_CollectionView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setCollectionListType__VLjava_lang_String_2(stA1);
return;
    }
    X_415: for (;;) { IF: if (gt <= 415) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionView || (refs_io_cloudoffice_platform_cockpit_collection_CollectionView = io_cloudoffice_platform_cockpit_collection_CollectionView(false))).access$100__Lio_cloudoffice_platform_cockpit_collection_CollectionView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_collection_ListItemView || (refs_io_cloudoffice_platform_cockpit_collection_ListItemView = io_cloudoffice_platform_cockpit_collection_ListItemView(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_collection_ListItemView']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.collection.ListItemView');
stA0.setTempSelectedCollection__VLio_cloudoffice_platform_cockpit_collection_ListItemView_2(stA1);
return;
    }
    X_432: for (;;) { IF: if (gt <= 432) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionView || (refs_io_cloudoffice_platform_cockpit_collection_CollectionView = io_cloudoffice_platform_cockpit_collection_CollectionView(false))).access$100__Lio_cloudoffice_platform_cockpit_collection_CollectionView$Html4JavaType_2();
var stA1 = lcA1.getTempSelectedCollectionList__Ljava_util_List_2();
invoker.replaceValue__VLjava_util_Collection_2Ljava_lang_Class_2Ljava_lang_Object_2(stA0,stA1, (refs_io_cloudoffice_platform_cockpit_collection_ListItemView || (refs_io_cloudoffice_platform_cockpit_collection_ListItemView = io_cloudoffice_platform_cockpit_collection_ListItemView(false))).constructor.$class, lcA3);
return;
    }
    X_446: for (;;) { IF: if (gt <= 446) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionView || (refs_io_cloudoffice_platform_cockpit_collection_CollectionView = io_cloudoffice_platform_cockpit_collection_CollectionView(false))).access$100__Lio_cloudoffice_platform_cockpit_collection_CollectionView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_api_HelperItemView || (refs_io_cloudoffice_platform_cockpit_api_HelperItemView = vm.io_cloudoffice_platform_cockpit_api_HelperItemView(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_api_HelperItemView']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.api.HelperItemView');
stA0.setLoader__VLio_cloudoffice_platform_cockpit_api_HelperItemView_2(stA1);
return;
    }
    X_463: for (;;) { IF: if (gt <= 463) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}}}}}}}}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_collection_CollectionView_2I = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 100; break IF; }
  case 1:{ gt = 105; break IF; }
  case 2:{ gt = 113; break IF; }
  case 3:{ gt = 118; break IF; }
  case 4:{ gt = 123; break IF; }
  case 5:{ gt = 128; break IF; }
  case 6:{ gt = 133; break IF; }
  case 7:{ gt = 138; break IF; }
  case 8:{ gt = 146; break IF; }
  case 9:{ gt = 151; break IF; }
  case 10:{ gt = 156; break IF; }
  case 11:{ gt = 161; break IF; }
  case 12:{ gt = 166; break IF; }
  case 13:{ gt = 174; break IF; }
  case 14:{ gt = 182; break IF; }
  case 15:{ gt = 190; break IF; }
  case 16:{ gt = 195; break IF; }
  case 17:{ gt = 200; break IF; }
  case 18:{ gt = 205; break IF; }
  case 19:{ gt = 210; break IF; }
  case 20:{ gt = 215; break IF; }
  default: { gt = 220; break IF; }
}
    }
    X_100: for (;;) { IF: if (gt <= 100) {

var stA0 = lcA1.getInstance__Ljava_lang_String_2();
return stA0;
    }
    X_105: for (;;) { IF: if (gt <= 105) {

var stI0 = lcA1.isDesignerMode__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_113: for (;;) { IF: if (gt <= 113) {

var stA0 = lcA1.getConfiguration__Lio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2();
return stA0;
    }
    X_118: for (;;) { IF: if (gt <= 118) {

var stA0 = lcA1.getLayoutRowId__Ljava_lang_String_2();
return stA0;
    }
    X_123: for (;;) { IF: if (gt <= 123) {

var stA0 = lcA1.getListComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
return stA0;
    }
    X_128: for (;;) { IF: if (gt <= 128) {

var stA0 = lcA1.getRelatedItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
return stA0;
    }
    X_133: for (;;) { IF: if (gt <= 133) {

var stA0 = lcA1.getNewItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
return stA0;
    }
    X_138: for (;;) { IF: if (gt <= 138) {

var stI0 = lcA1.isMenuOnExpandedMode__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_146: for (;;) { IF: if (gt <= 146) {

var stA0 = lcA1.getCollectionClass__Ljava_lang_String_2();
return stA0;
    }
    X_151: for (;;) { IF: if (gt <= 151) {

var stA0 = lcA1.getNewCollectionName__Ljava_lang_String_2();
return stA0;
    }
    X_156: for (;;) { IF: if (gt <= 156) {

var stA0 = lcA1.getCollectionItemList__Ljava_util_List_2();
return stA0;
    }
    X_161: for (;;) { IF: if (gt <= 161) {

var stA0 = lcA1.getCollectionListItemView__Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2();
return stA0;
    }
    X_166: for (;;) { IF: if (gt <= 166) {

var stI0 = lcA1.isCollectionhoveraction__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_174: for (;;) { IF: if (gt <= 174) {

var stI0 = lcA1.isHoverModeCollectionCreate__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_182: for (;;) { IF: if (gt <= 182) {

var stI0 = lcA1.isCollectioncreatemode__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_190: for (;;) { IF: if (gt <= 190) {

var stA0 = lcA1.getCollectionInputBoxText__Ljava_lang_String_2();
return stA0;
    }
    X_195: for (;;) { IF: if (gt <= 195) {

var stA0 = lcA1.getCollectionList__Ljava_util_List_2();
return stA0;
    }
    X_200: for (;;) { IF: if (gt <= 200) {

var stA0 = lcA1.getCollectionListType__Ljava_lang_String_2();
return stA0;
    }
    X_205: for (;;) { IF: if (gt <= 205) {

var stA0 = lcA1.getTempSelectedCollection__Lio_cloudoffice_platform_cockpit_collection_ListItemView_2();
return stA0;
    }
    X_210: for (;;) { IF: if (gt <= 210) {

var stA0 = lcA1.getTempSelectedCollectionList__Ljava_util_List_2();
return stA0;
    }
    X_215: for (;;) { IF: if (gt <= 215) {

var stA0 = lcA1.getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
return stA0;
    }
    X_220: for (;;) { IF: if (gt <= 220) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}}}}}}}}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.call__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 120; break IF; }
  case 1:{ gt = 125; break IF; }
  case 2:{ gt = 130; break IF; }
  case 3:{ gt = 135; break IF; }
  case 4:{ gt = 140; break IF; }
  case 5:{ gt = 154; break IF; }
  case 6:{ gt = 159; break IF; }
  case 7:{ gt = 164; break IF; }
  case 8:{ gt = 169; break IF; }
  case 9:{ gt = 183; break IF; }
  case 10:{ gt = 201; break IF; }
  case 11:{ gt = 206; break IF; }
  case 12:{ gt = 224; break IF; }
  case 13:{ gt = 229; break IF; }
  case 14:{ gt = 247; break IF; }
  case 15:{ gt = 252; break IF; }
  case 16:{ gt = 257; break IF; }
  case 17:{ gt = 262; break IF; }
  case 18:{ gt = 267; break IF; }
  case 19:{ gt = 272; break IF; }
  case 20:{ gt = 277; break IF; }
  case 21:{ gt = 282; break IF; }
  case 22:{ gt = 287; break IF; }
  case 23:{ gt = 292; break IF; }
  case 24:{ gt = 310; break IF; }
  case 25:{ gt = 324; break IF; }
  default: { gt = 342; break IF; }
}
    }
    X_120: for (;;) { IF: if (gt <= 120) {

(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent = io_cloudoffice_platform_cockpit_collection_CollectionComponent(false))).createNewItem__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2(lcA1);
return;
    }
    X_125: for (;;) { IF: if (gt <= 125) {

(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent = io_cloudoffice_platform_cockpit_collection_CollectionComponent(false))).createNewCollection__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2(lcA1);
return;
    }
    X_130: for (;;) { IF: if (gt <= 130) {

(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent = io_cloudoffice_platform_cockpit_collection_CollectionComponent(false))).createCollection__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2(lcA1);
return;
    }
    X_135: for (;;) { IF: if (gt <= 135) {

(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent = io_cloudoffice_platform_cockpit_collection_CollectionComponent(false))).createCollectionWithSubCollection__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2(lcA1);
return;
    }
    X_140: for (;;) { IF: if (gt <= 140) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionView || (refs_io_cloudoffice_platform_cockpit_collection_CollectionView = io_cloudoffice_platform_cockpit_collection_CollectionView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_collection_CollectionView_2(lcA1);
var stA1 = invoker.toString__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_String_2(stA1,lcA3, null);
(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent = io_cloudoffice_platform_cockpit_collection_CollectionComponent(false))).createCollectionWithSelectedItems__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2Ljava_lang_String_2(stA0, stA1);
return;
    }
    X_154: for (;;) { IF: if (gt <= 154) {

(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent = io_cloudoffice_platform_cockpit_collection_CollectionComponent(false))).getItemList__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2(lcA1);
return;
    }
    X_159: for (;;) { IF: if (gt <= 159) {

(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent = io_cloudoffice_platform_cockpit_collection_CollectionComponent(false))).expandCollectionBar__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2(lcA1);
return;
    }
    X_164: for (;;) { IF: if (gt <= 164) {

(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent = io_cloudoffice_platform_cockpit_collection_CollectionComponent(false))).shrinkCollectionBar__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2(lcA1);
return;
    }
    X_169: for (;;) { IF: if (gt <= 169) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionView || (refs_io_cloudoffice_platform_cockpit_collection_CollectionView = io_cloudoffice_platform_cockpit_collection_CollectionView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_collection_CollectionView_2(lcA1);
var stA1 = invoker.toString__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_String_2(stA1,lcA3, null);
(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent = io_cloudoffice_platform_cockpit_collection_CollectionComponent(false))).performToogle__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2Ljava_lang_String_2(stA0, stA1);
return;
    }
    X_183: for (;;) { IF: if (gt <= 183) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionView || (refs_io_cloudoffice_platform_cockpit_collection_CollectionView = io_cloudoffice_platform_cockpit_collection_CollectionView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_collection_CollectionView_2(lcA1);
var stA1 = invoker.toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_collection_ListItemView || (refs_io_cloudoffice_platform_cockpit_collection_ListItemView = io_cloudoffice_platform_cockpit_collection_ListItemView(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_collection_ListItemView']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.collection.ListItemView');
(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent = io_cloudoffice_platform_cockpit_collection_CollectionComponent(false))).toogleCollectionBox__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2Lio_cloudoffice_platform_cockpit_collection_ListItemView_2(stA0, stA1);
return;
    }
    X_201: for (;;) { IF: if (gt <= 201) {

(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent = io_cloudoffice_platform_cockpit_collection_CollectionComponent(false))).collapseAllCollections__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2(lcA1);
return;
    }
    X_206: for (;;) { IF: if (gt <= 206) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionView || (refs_io_cloudoffice_platform_cockpit_collection_CollectionView = io_cloudoffice_platform_cockpit_collection_CollectionView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_collection_CollectionView_2(lcA1);
var stA1 = invoker.toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_collection_ListItemView || (refs_io_cloudoffice_platform_cockpit_collection_ListItemView = io_cloudoffice_platform_cockpit_collection_ListItemView(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_collection_ListItemView']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.collection.ListItemView');
(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent = io_cloudoffice_platform_cockpit_collection_CollectionComponent(false))).collapseAllAndActiveSelected__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2Lio_cloudoffice_platform_cockpit_collection_ListItemView_2(stA0, stA1);
return;
    }
    X_224: for (;;) { IF: if (gt <= 224) {

(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent = io_cloudoffice_platform_cockpit_collection_CollectionComponent(false))).deselectAllSubCollections__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2(lcA1);
return;
    }
    X_229: for (;;) { IF: if (gt <= 229) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionView || (refs_io_cloudoffice_platform_cockpit_collection_CollectionView = io_cloudoffice_platform_cockpit_collection_CollectionView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_collection_CollectionView_2(lcA1);
var stA1 = invoker.toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_collection_ListItemView || (refs_io_cloudoffice_platform_cockpit_collection_ListItemView = io_cloudoffice_platform_cockpit_collection_ListItemView(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_collection_ListItemView']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.collection.ListItemView');
(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent = io_cloudoffice_platform_cockpit_collection_CollectionComponent(false))).getRelatedItems__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2Lio_cloudoffice_platform_cockpit_collection_ListItemView_2(stA0, stA1);
return;
    }
    X_247: for (;;) { IF: if (gt <= 247) {

(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent = io_cloudoffice_platform_cockpit_collection_CollectionComponent(false))).save__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2(lcA1);
return;
    }
    X_252: for (;;) { IF: if (gt <= 252) {

(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent = io_cloudoffice_platform_cockpit_collection_CollectionComponent(false))).openConfig__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2(lcA1);
return;
    }
    X_257: for (;;) { IF: if (gt <= 257) {

(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent = io_cloudoffice_platform_cockpit_collection_CollectionComponent(false))).closeConfigurationPanel__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2(lcA1);
return;
    }
    X_262: for (;;) { IF: if (gt <= 262) {

(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent = io_cloudoffice_platform_cockpit_collection_CollectionComponent(false))).resetConfiguration__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2(lcA1);
return;
    }
    X_267: for (;;) { IF: if (gt <= 267) {

(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent = io_cloudoffice_platform_cockpit_collection_CollectionComponent(false))).toggleHoverAction__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2(lcA1);
return;
    }
    X_272: for (;;) { IF: if (gt <= 272) {

(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent = io_cloudoffice_platform_cockpit_collection_CollectionComponent(false))).openActionHover__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2(lcA1);
return;
    }
    X_277: for (;;) { IF: if (gt <= 277) {

(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent = io_cloudoffice_platform_cockpit_collection_CollectionComponent(false))).openActionHoverWithCollectionCreateMode__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2(lcA1);
return;
    }
    X_282: for (;;) { IF: if (gt <= 282) {

(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent = io_cloudoffice_platform_cockpit_collection_CollectionComponent(false))).openActionHoverWithCollectionItemAddMode__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2(lcA1);
return;
    }
    X_287: for (;;) { IF: if (gt <= 287) {

(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent = io_cloudoffice_platform_cockpit_collection_CollectionComponent(false))).closeActionHover__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2(lcA1);
return;
    }
    X_292: for (;;) { IF: if (gt <= 292) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionView || (refs_io_cloudoffice_platform_cockpit_collection_CollectionView = io_cloudoffice_platform_cockpit_collection_CollectionView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_collection_CollectionView_2(lcA1);
var stA1 = invoker.toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_collection_ListItemView || (refs_io_cloudoffice_platform_cockpit_collection_ListItemView = io_cloudoffice_platform_cockpit_collection_ListItemView(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_collection_ListItemView']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.collection.ListItemView');
(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent = io_cloudoffice_platform_cockpit_collection_CollectionComponent(false))).addItemsToCollection__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2Lio_cloudoffice_platform_cockpit_collection_ListItemView_2(stA0, stA1);
return;
    }
    X_310: for (;;) { IF: if (gt <= 310) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionView || (refs_io_cloudoffice_platform_cockpit_collection_CollectionView = io_cloudoffice_platform_cockpit_collection_CollectionView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_collection_CollectionView_2(lcA1);
var stA1 = invoker.toString__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_String_2(stA1,lcA3, null);
(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent = io_cloudoffice_platform_cockpit_collection_CollectionComponent(false))).makeRelationshipWithCollection__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2Ljava_lang_String_2(stA0, stA1);
return;
    }
    X_324: for (;;) { IF: if (gt <= 324) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionView || (refs_io_cloudoffice_platform_cockpit_collection_CollectionView = io_cloudoffice_platform_cockpit_collection_CollectionView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_collection_CollectionView_2(lcA1);
var stA1 = invoker.toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_collection_ListItemView || (refs_io_cloudoffice_platform_cockpit_collection_ListItemView = io_cloudoffice_platform_cockpit_collection_ListItemView(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_collection_ListItemView']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.collection.ListItemView');
(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent = io_cloudoffice_platform_cockpit_collection_CollectionComponent(false))).loadParentCollectionItemsToList__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2Lio_cloudoffice_platform_cockpit_collection_ListItemView_2(stA0, stA1);
return;
    }
    X_342: for (;;) { IF: if (gt <= 342) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}}}}}}}}}}}}}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_collection_CollectionView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.collection.CollectionView');
var stA0 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionView || (refs_io_cloudoffice_platform_cockpit_collection_CollectionView = io_cloudoffice_platform_cockpit_collection_CollectionView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_collection_CollectionView_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2I = function(lcA1, lcI2) {
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

(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent = io_cloudoffice_platform_cockpit_collection_CollectionComponent(false))).onChangehoverMode__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2(lcA1);
return;
    }
    X_33: for (;;) { IF: if (gt <= 33) {

(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent = io_cloudoffice_platform_cockpit_collection_CollectionComponent(false))).itemSearchAutocomplete__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2(lcA1);
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
    m = c.onMessage__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
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
    m = c.read__Lio_cloudoffice_platform_cockpit_collection_CollectionView_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_collection_CollectionView;
(refs_io_cloudoffice_platform_cockpit_collection_CollectionView || (refs_io_cloudoffice_platform_cockpit_collection_CollectionView = io_cloudoffice_platform_cockpit_collection_CollectionView(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_collection_CollectionView$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lio_cloudoffice_platform_cockpit_collection_CollectionView_2Lio_cloudoffice_platform_cockpit_collection_CollectionView_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionView || (refs_io_cloudoffice_platform_cockpit_collection_CollectionView = io_cloudoffice_platform_cockpit_collection_CollectionView(false))).access$400__Lio_cloudoffice_platform_cockpit_collection_CollectionView_2Lio_cloudoffice_platform_cockpit_collection_CollectionView_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_collection_CollectionView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.collection.CollectionView');
lcA0.onMessage__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_collection_CollectionView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.collection.CollectionView');
lcA0.onChange__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lio_cloudoffice_platform_cockpit_collection_CollectionView_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_collection_CollectionView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.collection.CollectionView');
var stA0 = lcA0.cloneTo__Lio_cloudoffice_platform_cockpit_collection_CollectionView_2Lio_cloudoffice_platform_cockpit_collection_CollectionView_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_collection_CollectionView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.collection.CollectionView');
lcA0.call__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_collection_CollectionView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.collection.CollectionView');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_collection_CollectionView_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_collection_CollectionView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.collection.CollectionView');
lcA0.setValue__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_collection_CollectionView$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_collection_CollectionView$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_collection_CollectionView$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_collection_CollectionView$Html4JavaTypefillInstOf });
    io_cloudoffice_platform_cockpit_collection_CollectionView$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/collection/CollectionView$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_collection_CollectionView;
    var refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent;
    var refs_org_netbeans_html_json_spi_Proto$Type;
    var refs_java_lang_String;
    var refs_java_lang_Boolean;
    var refs_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration;
    var refs_io_cloudoffice_platform_cockpit_api_ComponentDef;
    var refs_io_cloudoffice_platform_cockpit_collection_ListItemView;
    var refs_io_cloudoffice_platform_cockpit_collection_CollectionListItemView;
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
vm.io_cloudoffice_platform_cockpit_collection_CollectionView$Html4JavaType = io_cloudoffice_platform_cockpit_collection_CollectionView$Html4JavaType;

vm.io_cloudoffice_platform_cockpit_api_HelperItemView = link('io/cloudoffice/platform/cockpit/api/HelperItemView', function(f) { vm.io_cloudoffice_platform_cockpit_api_HelperItemView =  f; });

function io_cloudoffice_platform_cockpit_collection_CollectionListItemView() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_collection_CollectionListItemView;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_proto'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_proto']; };
  m = c._prop_instance = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_instance'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_instance']; };
  m = c._prop_selectedCollectionId = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_selectedCollectionId'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_selectedCollectionId']; };
  m = c._prop_collectionInputBoxText = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_collectionInputBoxText'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_collectionInputBoxText']; };
  m = c._prop_showCollectionList = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_showCollectionList'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_showCollectionList']; };
  m = c._prop_itemList = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_itemList'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_itemList']; };
  m = c._prop_tempSelectionForRelation = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_tempSelectionForRelation'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_tempSelectionForRelation']; };
  m = c._prop_existingItemList = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_existingItemList'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_existingItemList']; };
  m = c._prop_collectionListType = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_collectionListType'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_collectionListType']; };
  m = c._prop_loader = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_loader'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_loader']; };
  m = c._prop_listComponentDefinition = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_listComponentDefinition'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_listComponentDefinition']; };
  m = c._prop_relatedItemComponentDefinition = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_relatedItemComponentDefinition'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_relatedItemComponentDefinition']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel = io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.getInstance__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_proto'],"instance");
return lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_instance'];

};
c['getInstance__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setInstance__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_instance'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_instance'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_proto'],"instance", lcA2, lcA1);
return;

    }
}}
};
c['setInstance__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getSelectedCollectionId__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_proto'],"selectedCollectionId");
return lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_selectedCollectionId'];

};
c['getSelectedCollectionId__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setSelectedCollectionId__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_selectedCollectionId'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_selectedCollectionId'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_proto'],"selectedCollectionId", lcA2, lcA1);
return;

    }
}}
};
c['setSelectedCollectionId__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getCollectionInputBoxText__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_proto'],"collectionInputBoxText");
return lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_collectionInputBoxText'];

};
c['getCollectionInputBoxText__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setCollectionInputBoxText__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_collectionInputBoxText'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_collectionInputBoxText'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_proto'],"collectionInputBoxText", lcA2, lcA1);
var lcA3 = lcA0;
(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel = io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel(false))).itemSearchAutocomplete__VLio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2(lcA3);
return;

    }
}}
};
c['setCollectionInputBoxText__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isShowCollectionList__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_proto'],"showCollectionList");
return lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_showCollectionList'];

};
c['isShowCollectionList__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setShowCollectionList__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_showCollectionList']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_showCollectionList'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_proto'];var stA1 = "showCollectionList";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setShowCollectionList__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getItemList__Ljava_util_List_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_proto'],"itemList");
return lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_itemList'];

};
c['getItemList__Ljava_util_List_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getTempSelectionForRelation__Lio_cloudoffice_platform_cockpit_collection_ListItemView_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_proto'],"tempSelectionForRelation");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_tempSelectionForRelation']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new io_cloudoffice_platform_cockpit_collection_ListItemView;
(refs_io_cloudoffice_platform_cockpit_collection_ListItemView || (refs_io_cloudoffice_platform_cockpit_collection_ListItemView = io_cloudoffice_platform_cockpit_collection_ListItemView(false))).constructor.cons__V.call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_tempSelectionForRelation'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_tempSelectionForRelation'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_tempSelectionForRelation']['$instOf_io_cloudoffice_platform_cockpit_collection_ListItemView']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_tempSelectionForRelation'], 'io.cloudoffice.platform.cockpit.collection.ListItemView');
return lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_tempSelectionForRelation'];

    }
}}
};
c['getTempSelectionForRelation__Lio_cloudoffice_platform_cockpit_collection_ListItemView_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setTempSelectionForRelation__VLio_cloudoffice_platform_cockpit_collection_ListItemView_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_tempSelectionForRelation'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_tempSelectionForRelation'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_proto'],"tempSelectionForRelation", lcA2, lcA1);
return;

    }
}}
};
c['setTempSelectionForRelation__VLio_cloudoffice_platform_cockpit_collection_ListItemView_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getExistingItemList__Ljava_util_List_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_proto'],"existingItemList");
return lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_existingItemList'];

};
c['getExistingItemList__Ljava_util_List_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getCollectionListType__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_proto'],"collectionListType");
return lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_collectionListType'];

};
c['getCollectionListType__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setCollectionListType__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_collectionListType'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_collectionListType'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_proto'],"collectionListType", lcA2, lcA1);
return;

    }
}}
};
c['setCollectionListType__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_proto'],"loader");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_loader']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_HelperItemView;
(refs_io_cloudoffice_platform_cockpit_api_HelperItemView || (refs_io_cloudoffice_platform_cockpit_api_HelperItemView = vm.io_cloudoffice_platform_cockpit_api_HelperItemView(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_loader'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_loader'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_loader']['$instOf_io_cloudoffice_platform_cockpit_api_HelperItemView']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_loader'], 'io.cloudoffice.platform.cockpit.api.HelperItemView');
return lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_loader'];

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

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_loader'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_loader'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_proto'],"loader", lcA2, lcA1);
return;

    }
}}
};
c['setLoader__VLio_cloudoffice_platform_cockpit_api_HelperItemView_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getListComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_proto'],"listComponentDefinition");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_listComponentDefinition']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_ComponentDef;
(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_listComponentDefinition'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_listComponentDefinition'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_listComponentDefinition']['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_listComponentDefinition'], 'io.cloudoffice.platform.cockpit.api.ComponentDef');
return lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_listComponentDefinition'];

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

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_listComponentDefinition'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_listComponentDefinition'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_proto'],"listComponentDefinition", lcA2, lcA1);
return;

    }
}}
};
c['setListComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getRelatedItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_proto'],"relatedItemComponentDefinition");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_relatedItemComponentDefinition']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_ComponentDef;
(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_relatedItemComponentDefinition'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_relatedItemComponentDefinition'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_relatedItemComponentDefinition']['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_relatedItemComponentDefinition'], 'io.cloudoffice.platform.cockpit.api.ComponentDef');
return lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_relatedItemComponentDefinition'];

    }
}}
};
c['getRelatedItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setRelatedItemComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_relatedItemComponentDefinition'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_relatedItemComponentDefinition'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_proto'],"relatedItemComponentDefinition", lcA2, lcA1);
return;

    }
}}
};
c['setRelatedItemComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2(c._TYPE(),lcA0, lcA1);
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_proto'] = stA1;
var stA0 = lcA0;var stA1 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_proto'];var stA2 = "itemList";var stI3 = -1;var stA4 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 0);
var stA1 = invoker.createList__Ljava_util_List_2Ljava_lang_String_2I_3Ljava_lang_String_2(stA1,stA2, stI3, stA4);
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_itemList'] = stA1;
var stA0 = lcA0;var stA1 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_proto'];var stA2 = "existingItemList";var stI3 = -1;var stA4 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 0);
var stA1 = invoker.createList__Ljava_util_List_2Ljava_lang_String_2I_3Ljava_lang_String_2(stA1,stA2, stI3, stA4);
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_existingItemList'] = stA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_tempSelectionForRelation'] = c._TYPE();
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_loader'] = c._TYPE();
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_listComponentDefinition'] = c._TYPE();
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_relatedItemComponentDefinition'] = c._TYPE();
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2ZLio_cloudoffice_platform_cockpit_collection_ListItemView_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_api_HelperItemView_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2_3Lio_cloudoffice_platform_cockpit_collection_ListItemView_2 = function(lcA1, lcA2, lcA3, lcI4, lcA5, lcA6, lcA7, lcA8, lcA9, lcA10) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_instance'] = lcA1;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_selectedCollectionId'] = lcA2;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_collectionInputBoxText'] = lcA3;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_showCollectionList'] = lcI4;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_tempSelectionForRelation'] = lcA5;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_collectionListType'] = lcA6;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_loader'] = lcA7;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_listComponentDefinition'] = lcA8;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_relatedItemComponentDefinition'] = lcA9;
invoker.initTo__VLjava_util_Collection_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_proto'],lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_itemList'], lcA10);
return;

};
CLS['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2ZLio_cloudoffice_platform_cockpit_collection_ListItemView_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_api_HelperItemView_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2_3Lio_cloudoffice_platform_cockpit_collection_ListItemView_2'] = m;

    m.access = 129;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, (11));
var lcA3 = stA0;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, (11));
Array.at(stA2, 0, "instance");
Array.at(stA2, 1, "selectedCollectionId");
Array.at(stA2, 2, "collectionInputBoxText");
Array.at(stA2, 3, "showCollectionList");
Array.at(stA2, 4, "itemList");
Array.at(stA2, 5, "tempSelectionForRelation");
Array.at(stA2, (6), "existingItemList");
Array.at(stA2, (7), "collectionListType");
Array.at(stA2, (8), "loader");
Array.at(stA2, (9), "listComponentDefinition");
Array.at(stA2, (10), "relatedItemComponentDefinition");
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
if ((lcA3[0] || Array.at(lcA3, 0)) !== null && !(lcA3[0] || Array.at(lcA3, 0))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[0] || Array.at(lcA3, 0)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_instance'] = (lcA3[0] || Array.at(lcA3, 0));
if ((lcA3[1] || Array.at(lcA3, 1)) !== null && !(lcA3[1] || Array.at(lcA3, 1))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[1] || Array.at(lcA3, 1)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_selectedCollectionId'] = (lcA3[1] || Array.at(lcA3, 1));
if ((lcA3[2] || Array.at(lcA3, 2)) !== null && !(lcA3[2] || Array.at(lcA3, 2))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[2] || Array.at(lcA3, 2)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_collectionInputBoxText'] = (lcA3[2] || Array.at(lcA3, 2));
var stA0 = lcA0;if (((lcA3[3] || Array.at(lcA3, 3))) !== null) { gt = 126; break IF; }
var stI1 = 0;{ gt = 138; break IF; }
    }
    X_126: for (;;) { IF: if (gt <= 126) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[3] || Array.at(lcA3, 3)));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_138: for (;;) { IF: if (gt <= 138) {
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_showCollectionList'] = stI1;
var stA0 = c.useAsArray___3Ljava_lang_Object_2Ljava_lang_Object_2((lcA3[4] || Array.at(lcA3, 4)));
var lcA4 = stA0;
var lcI5 = (lcA4).length;
var lcI6 = 0;
    }
    X_157: for (;;) { IF: if (gt <= 157) {

if ((lcI6) >= (lcI5)) { gt = 198; break IF; }
var lcA7 = (lcA4[lcI6] || Array.at(lcA4, lcI6));
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_itemList'];var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_proto'],(refs_io_cloudoffice_platform_cockpit_collection_ListItemView || (refs_io_cloudoffice_platform_cockpit_collection_ListItemView = io_cloudoffice_platform_cockpit_collection_ListItemView(false))).constructor.$class, lcA7);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
lcI6++;
{ gt = 0; continue X_157; }
    }
    X_198: for (;;) { IF: if (gt <= 198) {

var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_proto'],(refs_io_cloudoffice_platform_cockpit_collection_ListItemView || (refs_io_cloudoffice_platform_cockpit_collection_ListItemView = io_cloudoffice_platform_cockpit_collection_ListItemView(false))).constructor.$class, (lcA3[5] || Array.at(lcA3, 5)));
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_tempSelectionForRelation'] = stA1;
var stA0 = c.useAsArray___3Ljava_lang_Object_2Ljava_lang_Object_2((lcA3[(6)] || Array.at(lcA3, (6))));
var lcA4 = stA0;
var lcI5 = (lcA4).length;
var lcI6 = 0;
    }
    X_231: for (;;) { IF: if (gt <= 231) {

if ((lcI6) >= (lcI5)) { gt = 272; break IF; }
var lcA7 = (lcA4[lcI6] || Array.at(lcA4, lcI6));
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_existingItemList'];var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_proto'],(refs_io_cloudoffice_platform_cockpit_collection_ListItemView || (refs_io_cloudoffice_platform_cockpit_collection_ListItemView = io_cloudoffice_platform_cockpit_collection_ListItemView(false))).constructor.$class, lcA7);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
lcI6++;
{ gt = 0; continue X_231; }
    }
    X_272: for (;;) { IF: if (gt <= 272) {

if ((lcA3[(7)] || Array.at(lcA3, (7))) !== null && !(lcA3[(7)] || Array.at(lcA3, (7)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(7)] || Array.at(lcA3, (7))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_collectionListType'] = (lcA3[(7)] || Array.at(lcA3, (7)));
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_proto'],(refs_io_cloudoffice_platform_cockpit_api_HelperItemView || (refs_io_cloudoffice_platform_cockpit_api_HelperItemView = vm.io_cloudoffice_platform_cockpit_api_HelperItemView(false))).constructor.$class, (lcA3[(8)] || Array.at(lcA3, (8))));
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_loader'] = stA1;
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_proto'],(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, (lcA3[(9)] || Array.at(lcA3, (9))));
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_listComponentDefinition'] = stA1;
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_proto'],(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, (lcA3[(10)] || Array.at(lcA3, (10))));
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_relatedItemComponentDefinition'] = stA1;
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"selectedCollectionId");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getSelectedCollectionId__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"collectionInputBoxText");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getCollectionInputBoxText__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"showCollectionList");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isShowCollectionList__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"itemList");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_itemList']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"tempSelectionForRelation");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_tempSelectionForRelation']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"existingItemList");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_existingItemList']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"collectionListType");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getCollectionListType__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"loader");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_loader']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"listComponentDefinition");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_listComponentDefinition']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"relatedItemComponentDefinition");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_relatedItemComponentDefinition']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(125));
var stA0 = invoker.toString__Ljava_lang_String_2(lcA1);
return stA0;

};
c['toString__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_proto']);
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new io_cloudoffice_platform_cockpit_collection_CollectionListItemView;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = lcA0.getInstance__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_instance'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getSelectedCollectionId__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_selectedCollectionId'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getCollectionInputBoxText__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_collectionInputBoxText'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isShowCollectionList__Z();
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_showCollectionList'] = stI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_proto'];var stA1 = lcA2.getItemList__Ljava_util_List_2();
invoker.cloneList__VLjava_util_Collection_2Lnet_java_html_BrwsrCtx_2Ljava_util_Collection_2(stA0,stA1, lcA1, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_itemList']);
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_tempSelectionForRelation']) !== null) { gt = 69; break IF; }
var stA1 = null;{ gt = 93; break IF; }
    }
    X_69: for (;;) { IF: if (gt <= 69) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_tempSelectionForRelation']) !== (c._TYPE())) { gt = 85; break IF; }
var stA1 = c._TYPE();{ gt = 93; break IF; }
    }
    X_85: for (;;) { IF: if (gt <= 85) {

var stA1 = lcA0.getTempSelectionForRelation__Lio_cloudoffice_platform_cockpit_collection_ListItemView_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_93: for (;;) { IF: if (gt <= 93) {
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_tempSelectionForRelation'] = stA1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_proto'];var stA1 = lcA2.getExistingItemList__Ljava_util_List_2();
invoker.cloneList__VLjava_util_Collection_2Lnet_java_html_BrwsrCtx_2Ljava_util_Collection_2(stA0,stA1, lcA1, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_existingItemList']);
var stA0 = lcA2;var stA1 = lcA0.getCollectionListType__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_collectionListType'] = stA1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_loader']) !== null) { gt = 132; break IF; }
var stA1 = null;{ gt = 156; break IF; }
    }
    X_132: for (;;) { IF: if (gt <= 132) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_loader']) !== (c._TYPE())) { gt = 148; break IF; }
var stA1 = c._TYPE();{ gt = 156; break IF; }
    }
    X_148: for (;;) { IF: if (gt <= 148) {

var stA1 = lcA0.getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_156: for (;;) { IF: if (gt <= 156) {
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_loader'] = stA1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_listComponentDefinition']) !== null) { gt = 171; break IF; }
var stA1 = null;{ gt = 195; break IF; }
    }
    X_171: for (;;) { IF: if (gt <= 171) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_listComponentDefinition']) !== (c._TYPE())) { gt = 187; break IF; }
var stA1 = c._TYPE();{ gt = 195; break IF; }
    }
    X_187: for (;;) { IF: if (gt <= 187) {

var stA1 = lcA0.getListComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_195: for (;;) { IF: if (gt <= 195) {
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_listComponentDefinition'] = stA1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_relatedItemComponentDefinition']) !== null) { gt = 210; break IF; }
var stA1 = null;{ gt = 234; break IF; }
    }
    X_210: for (;;) { IF: if (gt <= 210) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_relatedItemComponentDefinition']) !== (c._TYPE())) { gt = 226; break IF; }
var stA1 = c._TYPE();{ gt = 234; break IF; }
    }
    X_226: for (;;) { IF: if (gt <= 226) {

var stA1 = lcA0.getRelatedItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_234: for (;;) { IF: if (gt <= 234) {
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_relatedItemComponentDefinition'] = stA1;
return lcA2;

    }
}}}}}}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2 = function() {
  var  lcA0 = this;
invoker.applyBindings__V(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_proto']);
return lcA0;

};
c['applyBindings__Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2'] = m;

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

var stI0 = lcA1 != null && lcA1['$instOf_io_cloudoffice_platform_cockpit_collection_CollectionListItemView'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_collection_CollectionListItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.collection.CollectionListItemView');
var lcA2 = lcA1;
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_instance'], lcA2['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_instance']);
if ((stI0) != 0) { gt = 40; break IF; }
return 0;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_selectedCollectionId'], lcA2['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_selectedCollectionId']);
if ((stI0) != 0) { gt = 59; break IF; }
return 0;
    }
    X_59: for (;;) { IF: if (gt <= 59) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_collectionInputBoxText'], lcA2['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_collectionInputBoxText']);
if ((stI0) != 0) { gt = 78; break IF; }
return 0;
    }
    X_78: for (;;) { IF: if (gt <= 78) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_showCollectionList']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_showCollectionList']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 103; break IF; }
return 0;
    }
    X_103: for (;;) { IF: if (gt <= 103) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_itemList']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_itemList']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 130; break IF; }
return 0;
    }
    X_130: for (;;) { IF: if (gt <= 130) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_tempSelectionForRelation']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_tempSelectionForRelation']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 157; break IF; }
return 0;
    }
    X_157: for (;;) { IF: if (gt <= 157) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_existingItemList']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_existingItemList']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 184; break IF; }
return 0;
    }
    X_184: for (;;) { IF: if (gt <= 184) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_collectionListType'], lcA2['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_collectionListType']);
if ((stI0) != 0) { gt = 203; break IF; }
return 0;
    }
    X_203: for (;;) { IF: if (gt <= 203) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_loader']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_loader']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 230; break IF; }
return 0;
    }
    X_230: for (;;) { IF: if (gt <= 230) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_listComponentDefinition']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_listComponentDefinition']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 257; break IF; }
return 0;
    }
    X_257: for (;;) { IF: if (gt <= 257) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_relatedItemComponentDefinition']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_relatedItemComponentDefinition']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 284; break IF; }
return 0;
    }
    X_284: for (;;) { IF: if (gt <= 284) {

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
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_instance'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_selectedCollectionId'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_collectionInputBoxText'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_showCollectionList']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_itemList']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_tempSelectionForRelation']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_existingItemList']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_collectionListType'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_loader']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_listComponentDefinition']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_relatedItemComponentDefinition']);
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
var stA0 = lcA0.clone__Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView$Html4JavaType_2 = function() {
return c._TYPE();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2 = function(lcA0) {
return lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_collection_CollectionListItemView$Html4JavaType;
(refs_io_cloudoffice_platform_cockpit_collection_CollectionListItemView$Html4JavaType || (refs_io_cloudoffice_platform_cockpit_collection_CollectionListItemView$Html4JavaType = io_cloudoffice_platform_cockpit_collection_CollectionListItemView$Html4JavaType(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_collection_CollectionListItemView$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_collection_CollectionListItemViewfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_collection_CollectionListItemView', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_collection_CollectionListItemViewfillInstOf });
    io_cloudoffice_platform_cockpit_collection_CollectionListItemViewfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/collection/CollectionListItemView';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel;
    var refs_java_lang_Boolean;
    var refs_io_cloudoffice_platform_cockpit_collection_ListItemView;
    var refs_net_java_html_json_Models;
    var refs_io_cloudoffice_platform_cockpit_api_HelperItemView;
    var refs_io_cloudoffice_platform_cockpit_api_ComponentDef;
    var refs_net_java_html_BrwsrCtx;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_collection_CollectionListItemView$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_proto'] = null;
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_instance'] = null;
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_selectedCollectionId'] = null;
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_collectionInputBoxText'] = null;
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_showCollectionList'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_itemList'] = null;
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_tempSelectionForRelation'] = null;
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_existingItemList'] = null;
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_collectionListType'] = null;
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_loader'] = null;
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_listComponentDefinition'] = null;
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionListItemView_prop_relatedItemComponentDefinition'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_collection_CollectionListItemView = registerClass(exports,'io_cloudoffice_platform_cockpit_collection_CollectionListItemView',io_cloudoffice_platform_cockpit_collection_CollectionListItemView);


function io_cloudoffice_platform_cockpit_collection_CollectionListItemView$Html4JavaType() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_collection_CollectionListItemView$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_io_cloudoffice_platform_cockpit_collection_CollectionListItemView || (refs_io_cloudoffice_platform_cockpit_collection_CollectionListItemView = io_cloudoffice_platform_cockpit_collection_CollectionListItemView(false))).constructor.$class, (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel = io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel(false))).constructor.$class, (11), (6));
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"instance", 0, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"selectedCollectionId", 1, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"collectionInputBoxText", 2, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"showCollectionList", 3, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemList", 4, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"tempSelectionForRelation", 5, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"existingItemList", (6), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"collectionListType", (7), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"loader", (8), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"listComponentDefinition", (9), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"relatedItemComponentDefinition", (10), 0, 0);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"loadItemsToList", 0);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"deselectAllAndActiveSelectedSubCollection", 1);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"getItemList", 2);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"removeCollectionItem", 3);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"relateWithParentCollection", 4);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"breakupRelationWithParentCollection", 5);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 60; break IF; }
  case 1:{ gt = 77; break IF; }
  case 2:{ gt = 94; break IF; }
  case 3:{ gt = 111; break IF; }
  case 4:{ gt = 131; break IF; }
  case 5:{ gt = 145; break IF; }
  case 6:{ gt = 162; break IF; }
  case 7:{ gt = 176; break IF; }
  case 8:{ gt = 193; break IF; }
  case 9:{ gt = 210; break IF; }
  case 10:{ gt = 227; break IF; }
  default: { gt = 244; break IF; }
}
    }
    X_60: for (;;) { IF: if (gt <= 60) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionListItemView || (refs_io_cloudoffice_platform_cockpit_collection_CollectionListItemView = io_cloudoffice_platform_cockpit_collection_CollectionListItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setInstance__VLjava_lang_String_2(stA1);
return;
    }
    X_77: for (;;) { IF: if (gt <= 77) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionListItemView || (refs_io_cloudoffice_platform_cockpit_collection_CollectionListItemView = io_cloudoffice_platform_cockpit_collection_CollectionListItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setSelectedCollectionId__VLjava_lang_String_2(stA1);
return;
    }
    X_94: for (;;) { IF: if (gt <= 94) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionListItemView || (refs_io_cloudoffice_platform_cockpit_collection_CollectionListItemView = io_cloudoffice_platform_cockpit_collection_CollectionListItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setCollectionInputBoxText__VLjava_lang_String_2(stA1);
return;
    }
    X_111: for (;;) { IF: if (gt <= 111) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionListItemView || (refs_io_cloudoffice_platform_cockpit_collection_CollectionListItemView = io_cloudoffice_platform_cockpit_collection_CollectionListItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setShowCollectionList__VZ(stI1);
return;
    }
    X_131: for (;;) { IF: if (gt <= 131) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionListItemView || (refs_io_cloudoffice_platform_cockpit_collection_CollectionListItemView = io_cloudoffice_platform_cockpit_collection_CollectionListItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView$Html4JavaType_2();
var stA1 = lcA1.getItemList__Ljava_util_List_2();
invoker.replaceValue__VLjava_util_Collection_2Ljava_lang_Class_2Ljava_lang_Object_2(stA0,stA1, (refs_io_cloudoffice_platform_cockpit_collection_ListItemView || (refs_io_cloudoffice_platform_cockpit_collection_ListItemView = io_cloudoffice_platform_cockpit_collection_ListItemView(false))).constructor.$class, lcA3);
return;
    }
    X_145: for (;;) { IF: if (gt <= 145) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionListItemView || (refs_io_cloudoffice_platform_cockpit_collection_CollectionListItemView = io_cloudoffice_platform_cockpit_collection_CollectionListItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_collection_ListItemView || (refs_io_cloudoffice_platform_cockpit_collection_ListItemView = io_cloudoffice_platform_cockpit_collection_ListItemView(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_collection_ListItemView']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.collection.ListItemView');
stA0.setTempSelectionForRelation__VLio_cloudoffice_platform_cockpit_collection_ListItemView_2(stA1);
return;
    }
    X_162: for (;;) { IF: if (gt <= 162) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionListItemView || (refs_io_cloudoffice_platform_cockpit_collection_CollectionListItemView = io_cloudoffice_platform_cockpit_collection_CollectionListItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView$Html4JavaType_2();
var stA1 = lcA1.getExistingItemList__Ljava_util_List_2();
invoker.replaceValue__VLjava_util_Collection_2Ljava_lang_Class_2Ljava_lang_Object_2(stA0,stA1, (refs_io_cloudoffice_platform_cockpit_collection_ListItemView || (refs_io_cloudoffice_platform_cockpit_collection_ListItemView = io_cloudoffice_platform_cockpit_collection_ListItemView(false))).constructor.$class, lcA3);
return;
    }
    X_176: for (;;) { IF: if (gt <= 176) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionListItemView || (refs_io_cloudoffice_platform_cockpit_collection_CollectionListItemView = io_cloudoffice_platform_cockpit_collection_CollectionListItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setCollectionListType__VLjava_lang_String_2(stA1);
return;
    }
    X_193: for (;;) { IF: if (gt <= 193) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionListItemView || (refs_io_cloudoffice_platform_cockpit_collection_CollectionListItemView = io_cloudoffice_platform_cockpit_collection_CollectionListItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_api_HelperItemView || (refs_io_cloudoffice_platform_cockpit_api_HelperItemView = vm.io_cloudoffice_platform_cockpit_api_HelperItemView(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_api_HelperItemView']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.api.HelperItemView');
stA0.setLoader__VLio_cloudoffice_platform_cockpit_api_HelperItemView_2(stA1);
return;
    }
    X_210: for (;;) { IF: if (gt <= 210) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionListItemView || (refs_io_cloudoffice_platform_cockpit_collection_CollectionListItemView = io_cloudoffice_platform_cockpit_collection_CollectionListItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.api.ComponentDef');
stA0.setListComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2(stA1);
return;
    }
    X_227: for (;;) { IF: if (gt <= 227) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionListItemView || (refs_io_cloudoffice_platform_cockpit_collection_CollectionListItemView = io_cloudoffice_platform_cockpit_collection_CollectionListItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.api.ComponentDef');
stA0.setRelatedItemComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2(stA1);
return;
    }
    X_244: for (;;) { IF: if (gt <= 244) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2I = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 60; break IF; }
  case 1:{ gt = 65; break IF; }
  case 2:{ gt = 70; break IF; }
  case 3:{ gt = 75; break IF; }
  case 4:{ gt = 83; break IF; }
  case 5:{ gt = 88; break IF; }
  case 6:{ gt = 93; break IF; }
  case 7:{ gt = 98; break IF; }
  case 8:{ gt = 103; break IF; }
  case 9:{ gt = 108; break IF; }
  case 10:{ gt = 113; break IF; }
  default: { gt = 118; break IF; }
}
    }
    X_60: for (;;) { IF: if (gt <= 60) {

var stA0 = lcA1.getInstance__Ljava_lang_String_2();
return stA0;
    }
    X_65: for (;;) { IF: if (gt <= 65) {

var stA0 = lcA1.getSelectedCollectionId__Ljava_lang_String_2();
return stA0;
    }
    X_70: for (;;) { IF: if (gt <= 70) {

var stA0 = lcA1.getCollectionInputBoxText__Ljava_lang_String_2();
return stA0;
    }
    X_75: for (;;) { IF: if (gt <= 75) {

var stI0 = lcA1.isShowCollectionList__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_83: for (;;) { IF: if (gt <= 83) {

var stA0 = lcA1.getItemList__Ljava_util_List_2();
return stA0;
    }
    X_88: for (;;) { IF: if (gt <= 88) {

var stA0 = lcA1.getTempSelectionForRelation__Lio_cloudoffice_platform_cockpit_collection_ListItemView_2();
return stA0;
    }
    X_93: for (;;) { IF: if (gt <= 93) {

var stA0 = lcA1.getExistingItemList__Ljava_util_List_2();
return stA0;
    }
    X_98: for (;;) { IF: if (gt <= 98) {

var stA0 = lcA1.getCollectionListType__Ljava_lang_String_2();
return stA0;
    }
    X_103: for (;;) { IF: if (gt <= 103) {

var stA0 = lcA1.getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
return stA0;
    }
    X_108: for (;;) { IF: if (gt <= 108) {

var stA0 = lcA1.getListComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
return stA0;
    }
    X_113: for (;;) { IF: if (gt <= 113) {

var stA0 = lcA1.getRelatedItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
return stA0;
    }
    X_118: for (;;) { IF: if (gt <= 118) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.call__VLio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 40; break IF; }
  case 1:{ gt = 58; break IF; }
  case 2:{ gt = 76; break IF; }
  case 3:{ gt = 81; break IF; }
  case 4:{ gt = 99; break IF; }
  case 5:{ gt = 117; break IF; }
  default: { gt = 135; break IF; }
}
    }
    X_40: for (;;) { IF: if (gt <= 40) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionListItemView || (refs_io_cloudoffice_platform_cockpit_collection_CollectionListItemView = io_cloudoffice_platform_cockpit_collection_CollectionListItemView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2(lcA1);
var stA1 = invoker.toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_collection_ListItemView || (refs_io_cloudoffice_platform_cockpit_collection_ListItemView = io_cloudoffice_platform_cockpit_collection_ListItemView(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_collection_ListItemView']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.collection.ListItemView');
(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel = io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel(false))).loadItemsToList__VLio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2Lio_cloudoffice_platform_cockpit_collection_ListItemView_2(stA0, stA1);
return;
    }
    X_58: for (;;) { IF: if (gt <= 58) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionListItemView || (refs_io_cloudoffice_platform_cockpit_collection_CollectionListItemView = io_cloudoffice_platform_cockpit_collection_CollectionListItemView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2(lcA1);
var stA1 = invoker.toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_collection_ListItemView || (refs_io_cloudoffice_platform_cockpit_collection_ListItemView = io_cloudoffice_platform_cockpit_collection_ListItemView(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_collection_ListItemView']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.collection.ListItemView');
(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel = io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel(false))).deselectAllAndActiveSelectedSubCollection__VLio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2Lio_cloudoffice_platform_cockpit_collection_ListItemView_2(stA0, stA1);
return;
    }
    X_76: for (;;) { IF: if (gt <= 76) {

(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel = io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel(false))).getItemList__VLio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2(lcA1);
return;
    }
    X_81: for (;;) { IF: if (gt <= 81) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionListItemView || (refs_io_cloudoffice_platform_cockpit_collection_CollectionListItemView = io_cloudoffice_platform_cockpit_collection_CollectionListItemView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2(lcA1);
var stA1 = invoker.toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_collection_ListItemView || (refs_io_cloudoffice_platform_cockpit_collection_ListItemView = io_cloudoffice_platform_cockpit_collection_ListItemView(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_collection_ListItemView']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.collection.ListItemView');
(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel = io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel(false))).removeCollectionItem__VLio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2Lio_cloudoffice_platform_cockpit_collection_ListItemView_2(stA0, stA1);
return;
    }
    X_99: for (;;) { IF: if (gt <= 99) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionListItemView || (refs_io_cloudoffice_platform_cockpit_collection_CollectionListItemView = io_cloudoffice_platform_cockpit_collection_CollectionListItemView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2(lcA1);
var stA1 = invoker.toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_collection_ListItemView || (refs_io_cloudoffice_platform_cockpit_collection_ListItemView = io_cloudoffice_platform_cockpit_collection_ListItemView(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_collection_ListItemView']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.collection.ListItemView');
(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel = io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel(false))).relateWithParentCollection__VLio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2Lio_cloudoffice_platform_cockpit_collection_ListItemView_2(stA0, stA1);
return;
    }
    X_117: for (;;) { IF: if (gt <= 117) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionListItemView || (refs_io_cloudoffice_platform_cockpit_collection_CollectionListItemView = io_cloudoffice_platform_cockpit_collection_CollectionListItemView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2(lcA1);
var stA1 = invoker.toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_collection_ListItemView || (refs_io_cloudoffice_platform_cockpit_collection_ListItemView = io_cloudoffice_platform_cockpit_collection_ListItemView(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_collection_ListItemView']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.collection.ListItemView');
(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel = io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel(false))).breakupRelationWithParentCollection__VLio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2Lio_cloudoffice_platform_cockpit_collection_ListItemView_2(stA0, stA1);
return;
    }
    X_135: for (;;) { IF: if (gt <= 135) {
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
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_collection_CollectionListItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.collection.CollectionListItemView');
var stA0 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionListItemView || (refs_io_cloudoffice_platform_cockpit_collection_CollectionListItemView = io_cloudoffice_platform_cockpit_collection_CollectionListItemView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2I = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0: { gt = 20; break IF; }
  default: { gt = 25; break IF; }
}
    }
    X_20: for (;;) { IF: if (gt <= 20) {

(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel = io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel(false))).itemSearchAutocomplete__VLio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2(lcA1);
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
    m = c.onMessage__VLio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
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
    m = c.read__Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_collection_CollectionListItemView;
(refs_io_cloudoffice_platform_cockpit_collection_CollectionListItemView || (refs_io_cloudoffice_platform_cockpit_collection_CollectionListItemView = io_cloudoffice_platform_cockpit_collection_CollectionListItemView(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionListItemView || (refs_io_cloudoffice_platform_cockpit_collection_CollectionListItemView = io_cloudoffice_platform_cockpit_collection_CollectionListItemView(false))).access$400__Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_collection_CollectionListItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.collection.CollectionListItemView');
lcA0.onMessage__VLio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_collection_CollectionListItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.collection.CollectionListItemView');
lcA0.onChange__VLio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_collection_CollectionListItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.collection.CollectionListItemView');
var stA0 = lcA0.cloneTo__Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_collection_CollectionListItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.collection.CollectionListItemView');
lcA0.call__VLio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_collection_CollectionListItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.collection.CollectionListItemView');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_collection_CollectionListItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.collection.CollectionListItemView');
lcA0.setValue__VLio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_collection_CollectionListItemView$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_collection_CollectionListItemView$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_collection_CollectionListItemView$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_collection_CollectionListItemView$Html4JavaTypefillInstOf });
    io_cloudoffice_platform_cockpit_collection_CollectionListItemView$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/collection/CollectionListItemView$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_collection_CollectionListItemView;
    var refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel;
    var refs_org_netbeans_html_json_spi_Proto$Type;
    var refs_java_lang_String;
    var refs_java_lang_Boolean;
    var refs_io_cloudoffice_platform_cockpit_collection_ListItemView;
    var refs_io_cloudoffice_platform_cockpit_api_HelperItemView;
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
vm.io_cloudoffice_platform_cockpit_collection_CollectionListItemView$Html4JavaType = io_cloudoffice_platform_cockpit_collection_CollectionListItemView$Html4JavaType;


function io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel;
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
    m = c.itemSearchAutocomplete__VLio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0.getCollectionInputBoxText__Ljava_lang_String_2();
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA0);
if ((stI0) == 0) { gt = 22; break IF; }
lcA0.setShowCollectionList__VZ(1);
c.getItemList__VLio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2(lcA0);
{ gt = 36; break IF; }
    }
    X_22: for (;;) { IF: if (gt <= 22) {

lcA0.setShowCollectionList__VZ(0);
var stA0 = lcA0.getItemList__Ljava_util_List_2();
invoker.clear__V(stA0);
    }
    X_36: for (;;) { IF: if (gt <= 36) {
return;

    }
}}}
};
c['itemSearchAutocomplete__VLio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.loadItemsToList__VLio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2Lio_cloudoffice_platform_cockpit_collection_ListItemView_2 = function(lcA0, lcA1) {
c.deselectAllAndActiveSelectedSubCollection__VLio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2Lio_cloudoffice_platform_cockpit_collection_ListItemView_2(lcA0, lcA1);
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
var stA1 = stA0;var stA2 = "updateheaderaction";var stA3 = "viewchange";var stA4 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['builder__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var stA5 = "title";var stA6 = lcA1.getItemName__Ljava_lang_String_2();
var stA4 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA4,stA5, stA6);
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA1, stA2, stA3, stA4);
var lcA2 = stA0;
var stA0 = lcA0.getListComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA0 = invoker.getComponent__Ljava_lang_String_2(stA0);
var stA1 = lcA0.getListComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = invoker.getInstanceId__Ljava_lang_String_2(stA1);
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['get__Lio_cloudoffice_platform_cockpit_api_Component_2Ljava_lang_String_2Ljava_lang_String_2'](stA0, stA1);
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA2);
var stA0 = new vm.java_util_HashMap;
(refs_java_util_HashMap || (refs_java_util_HashMap = vm.java_util_HashMap(false))).constructor['cons__V'].call(stA0);
var lcA3 = stA0;
var stA0 = lcA3;var stA1 = "itemId";var stA2 = lcA1.getItemId__Ljava_lang_String_2();
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA3;var stA1 = "itemType";var stA2 = lcA1.getItemType__Ljava_lang_String_2();
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = new vm.java_util_ArrayList;
(refs_java_util_ArrayList || (refs_java_util_ArrayList = vm.java_util_ArrayList(false))).constructor['cons__V'].call(stA0);
var lcA4 = stA0;
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA4,lcA3);
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['builder__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var lcA5 = stA0;
var stA0 = invoker.addFieldMapList__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_util_List_2(lcA5,"relatedItems", lcA4);
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA0, "clearbeforeloadlist", "loadlist", lcA5);
var lcA2 = stA0;
var stA0 = lcA0.getListComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA0 = invoker.getComponent__Ljava_lang_String_2(stA0);
var stA1 = lcA0.getListComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = invoker.getInstanceId__Ljava_lang_String_2(stA1);
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['get__Lio_cloudoffice_platform_cockpit_api_Component_2Ljava_lang_String_2Ljava_lang_String_2'](stA0, stA1);
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA2);
return;

};
c['loadItemsToList__VLio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2Lio_cloudoffice_platform_cockpit_collection_ListItemView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.deselectAllAndActiveSelectedSubCollection__VLio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2Lio_cloudoffice_platform_cockpit_collection_ListItemView_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0.getExistingItemList__Ljava_util_List_2();
var lcA2 = stA0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA2);
var lcA3 = stA0;
    }
    X_12: for (;;) { IF: if (gt <= 12) {

var stI0 = invoker.hasNext__Z(lcA3);
if ((stI0) == 0) { gt = 89; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA3);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_collection_ListItemView']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.collection.ListItemView');
var lcA4 = stA0;
var stA0 = lcA1.getItemId__Ljava_lang_String_2();
var lcA5 = stA0;
var stA0 = lcA4.getItemId__Ljava_lang_String_2();
var lcA6 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](lcA5);
if ((stI0) == 0) { gt = 80; break IF; }
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](lcA6);
if ((stI0) == 0) { gt = 80; break IF; }
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA5,lcA6);
if ((stI0) == 0) { gt = 80; break IF; }
lcA4.setIsActive__VZ(1);
{ gt = 86; break IF; }
    }
    X_80: for (;;) { IF: if (gt <= 80) {

lcA4.setIsActive__VZ(0);
    }
    X_86: for (;;) { IF: if (gt <= 86) {
{ gt = 0; continue X_12; }
    }
    X_89: for (;;) { IF: if (gt <= 89) {
return;

    }
}}}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.getItemList__VLio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2 = function(lcA0) {
var stA0 = lcA0.getCollectionInputBoxText__Ljava_lang_String_2();
var lcA1 = stA0;
var stA0 = lcA0.getExistingItemList__Ljava_util_List_2();
var lcA2 = stA0;
var stA0 = lcA0.getCollectionListType__Ljava_lang_String_2();
var lcA3 = stA0;
var stA0 = new io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$2;
(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$2 || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$2 = io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$2(false))).constructor.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2Ljava_lang_String_2Ljava_util_List_2Ljava_lang_String_2.call(stA0, "\"/VirtualItem-portlet.searchitem/autoCompleteSearch\"", lcA0, lcA3, lcA2, lcA1);
var stA1 = new io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$1;
(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$1 || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$1 = io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$1(false))).constructor.cons__V.call(stA1);
invoker.call__VLio_cloudoffice_platform_cockpit_api_ServerCallback_2(stA0,stA1);
return;

};
c['getItemList__VLio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.removeCollectionItem__VLio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2Lio_cloudoffice_platform_cockpit_collection_ListItemView_2 = function(lcA0, lcA1) {
var stA0 = lcA0.getSelectedCollectionId__Ljava_lang_String_2();
var lcA2 = stA0;
var stA0 = lcA1.getItemId__Ljava_lang_String_2();
var lcA3 = stA0;
var stA0 = lcA1.getItemType__Ljava_lang_String_2();
var lcA4 = stA0;
var lcA5 = lcA1;
var stA0 = new io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$4;
(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$4 || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$4 = io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$4(false))).constructor.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2.call(stA0, "\"/VirtualItem-portlet.virtualcollectionitem/removeParentCollectionItems\"", lcA0, lcA3, lcA4, lcA2);
var stA1 = new io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$3;
(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$3 || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$3 = io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$3(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_collection_ListItemView_2.call(stA1, lcA5);
invoker.call__VLio_cloudoffice_platform_cockpit_api_ServerCallback_2(stA0,stA1);
return;

};
c['removeCollectionItem__VLio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2Lio_cloudoffice_platform_cockpit_collection_ListItemView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.relateWithParentCollection__VLio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2Lio_cloudoffice_platform_cockpit_collection_ListItemView_2 = function(lcA0, lcA1) {
lcA0.setTempSelectionForRelation__VLio_cloudoffice_platform_cockpit_collection_ListItemView_2(lcA1);
lcA0.setShowCollectionList__VZ(0);
var stA0 = lcA0.getSelectedCollectionId__Ljava_lang_String_2();
var lcA2 = stA0;
var lcA3 = "COLLECTION";
var stA0 = lcA1.getItemId__Ljava_lang_String_2();
var lcA4 = stA0;
var stA0 = lcA1.getItemType__Ljava_lang_String_2();
var lcA5 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['builder__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var lcA6 = stA0;
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(lcA6,"itemId", lcA2);
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(lcA6,"itemType", lcA3);
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(lcA6,"relatedItemId", lcA4);
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(lcA6,"relatedItemType", lcA5);
var stA0 = new io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BuildupRelationshipAsyncRequest;
var stA1 = stA0;var stA2 = "\"/VirtualItem-portlet.searchitem/saveRelatedItems\"";var stA3 = new io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BuildupRelationshipAsyncRequestCallback;
(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BuildupRelationshipAsyncRequestCallback || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BuildupRelationshipAsyncRequestCallback = io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BuildupRelationshipAsyncRequestCallback(false))).constructor.cons__V.call(stA3);
var stA4 = lcA0;var stA5 = invoker.toJSON__Ljava_lang_String_2(lcA6);
(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BuildupRelationshipAsyncRequest || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BuildupRelationshipAsyncRequest = io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BuildupRelationshipAsyncRequest(false))).constructor.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_ServerCallback_2Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2Ljava_lang_String_2.call(stA1, stA2, stA3, stA4, stA5);
var lcA7 = stA0;
invoker.call__V(lcA7);
return;

};
c['relateWithParentCollection__VLio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2Lio_cloudoffice_platform_cockpit_collection_ListItemView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.breakupRelationWithParentCollection__VLio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2Lio_cloudoffice_platform_cockpit_collection_ListItemView_2 = function(lcA0, lcA1) {
lcA0.setTempSelectionForRelation__VLio_cloudoffice_platform_cockpit_collection_ListItemView_2(lcA1);
var stA0 = lcA0.getSelectedCollectionId__Ljava_lang_String_2();
var lcA2 = stA0;
var lcA3 = "COLLECTION";
var stA0 = lcA1.getItemId__Ljava_lang_String_2();
var lcA4 = stA0;
var stA0 = lcA1.getItemType__Ljava_lang_String_2();
var lcA5 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['builder__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var lcA6 = stA0;
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(lcA6,"itemId", lcA2);
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(lcA6,"itemType", lcA3);
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(lcA6,"relatedItemId", lcA4);
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(lcA6,"relatedItemType", lcA5);
var stA0 = new io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BreakupRelationshipAsyncRequest;
var stA1 = stA0;var stA2 = "\"/VirtualItem-portlet.searchitem/deleteRelatedItem\"";var stA3 = new io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BreakupRelationshipAsyncRequestCallback;
(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BreakupRelationshipAsyncRequestCallback || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BreakupRelationshipAsyncRequestCallback = io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BreakupRelationshipAsyncRequestCallback(false))).constructor.cons__V.call(stA3);
var stA4 = lcA0;var stA5 = invoker.toJSON__Ljava_lang_String_2(lcA6);
(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BreakupRelationshipAsyncRequest || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BreakupRelationshipAsyncRequest = io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BreakupRelationshipAsyncRequest(false))).constructor.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_ServerCallback_2Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2Ljava_lang_String_2.call(stA1, stA2, stA3, stA4, stA5);
var lcA7 = stA0;
invoker.call__V(lcA7);
return;

};
c['breakupRelationWithParentCollection__VLio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2Lio_cloudoffice_platform_cockpit_collection_ListItemView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModelfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModelfillInstOf });
    io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModelfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/collection/CollectionComponent$CollectionListItemViewModel';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_api_Event;
    var refs_io_cloudoffice_platform_cockpit_api_Components;
    var refs_java_util_HashMap;
    var refs_java_util_ArrayList;
    var refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$2;
    var refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$1;
    var refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$4;
    var refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$3;
    var refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BuildupRelationshipAsyncRequestCallback;
    var refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BuildupRelationshipAsyncRequest;
    var refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BreakupRelationshipAsyncRequestCallback;
    var refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BreakupRelationshipAsyncRequest;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel = registerClass(exports,'io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel',io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel);


function io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BreakupRelationshipAsyncRequestCallback() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BreakupRelationshipAsyncRequestCallback;
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
c.processCallbackData__VLjava_lang_String_2.call(lcA0, lcA1);
return;

};
c['process__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.processCallbackData__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getRequest__Lio_cloudoffice_platform_cockpit_api_AsyncRequest_2(lcA0);
var stA0 = invoker.getView__Ljava_lang_Object_2(stA0);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_collection_CollectionListItemView']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.collection.CollectionListItemView');
var lcA2 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](lcA1);
if ((stI0) == 0) { gt = 84; break IF; }
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2'](lcA1);
var lcA3 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA3,"code");
var lcA4 = stA0;
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA4,"200");
if ((stI0) == 0) { gt = 84; break IF; }
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_Object_2'](lcA2);
if ((stI0) == 0) { gt = 84; break IF; }
var stA0 = lcA2.getExistingItemList__Ljava_util_List_2();
var stA1 = lcA2.getTempSelectionForRelation__Lio_cloudoffice_platform_cockpit_collection_ListItemView_2();
var stI0 = invoker.remove__ZLjava_lang_Object_2(stA0,stA1);
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"Successfully breakup relation >>");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA1);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2'](stA0);
    }
    X_84: for (;;) { IF: if (gt <= 84) {
return;

    }
}}
};
    m.access = 2;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BreakupRelationshipAsyncRequestCallbackfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BreakupRelationshipAsyncRequestCallback', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BreakupRelationshipAsyncRequestCallbackfillInstOf });
    io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BreakupRelationshipAsyncRequestCallbackfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/collection/CollectionComponent$CollectionListItemViewModel$BreakupRelationshipAsyncRequestCallback';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_ServerCallback;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_java_lang_StringBuilder;
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
vm.io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BreakupRelationshipAsyncRequestCallback = registerClass(exports,'io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BreakupRelationshipAsyncRequestCallback',io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BreakupRelationshipAsyncRequestCallback);


function io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BreakupRelationshipAsyncRequest() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BreakupRelationshipAsyncRequest;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_api_AsyncRequest(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._requestparameters = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BreakupRelationshipAsyncRequest_requestparameters'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BreakupRelationshipAsyncRequest_requestparameters']; };
    m = CLS.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_ServerCallback_2Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3, lcA4) {
  var  lcA0 = this;
(refs_io_cloudoffice_platform_cockpit_api_AsyncRequest || (refs_io_cloudoffice_platform_cockpit_api_AsyncRequest = vm.io_cloudoffice_platform_cockpit_api_AsyncRequest(false))).constructor['cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_ServerCallback_2Ljava_lang_Object_2'].call(lcA0, lcA1, lcA2, lcA3);
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BreakupRelationshipAsyncRequest_requestparameters'] = lcA4;
return;

};
CLS['cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_ServerCallback_2Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.preparePostData__V = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getRequestparameters__Ljava_lang_String_2(lcA0);
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA0);
if ((stI0) == 0) { gt = 134; break IF; }
var stA0 = invoker.getRequestparameters__Ljava_lang_String_2(lcA0);
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2'](stA0);
var lcA1 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"itemId");
var lcA2 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"itemType");
var lcA3 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"relatedItemId");
var lcA4 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"relatedItemType");
var lcA5 = stA0;
var stA0 = new vm.java_util_HashMap;
(refs_java_util_HashMap || (refs_java_util_HashMap = vm.java_util_HashMap(false))).constructor['cons__V'].call(stA0);
var lcA6 = stA0;
var stA0 = new vm.java_util_HashMap;
(refs_java_util_HashMap || (refs_java_util_HashMap = vm.java_util_HashMap(false))).constructor['cons__V'].call(stA0);
var lcA7 = stA0;
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA7,"itemId", lcA2);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA7,"itemType", lcA3);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA7,"relatedItemId", lcA4);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA7,"relatedItemType", lcA5);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA6,"relatedItemData", lcA7);
var stA0 = lcA0;var stA1 = invoker.getEndpoint__Ljava_lang_String_2(lcA0);
invoker.put__VLjava_lang_String_2Ljava_lang_Object_2(stA0,stA1, lcA6);
    }
    X_134: for (;;) { IF: if (gt <= 134) {
return;

    }
}}
};
c['preparePostData__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.doValidate__Z = function() {
  var  lcA0 = this;
var stA0 = invoker.getRequestparameters__Ljava_lang_String_2(lcA0);
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA0);
return stI0;

};
c['doValidate__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getRequestparameters__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
return lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BreakupRelationshipAsyncRequest_requestparameters'];

};
c['getRequestparameters__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setRequestparameters__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BreakupRelationshipAsyncRequest_requestparameters'] = lcA1;
return;

};
c['setRequestparameters__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BreakupRelationshipAsyncRequestfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BreakupRelationshipAsyncRequest', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BreakupRelationshipAsyncRequestfillInstOf });
    io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BreakupRelationshipAsyncRequestfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/collection/CollectionComponent$CollectionListItemViewModel$BreakupRelationshipAsyncRequest';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_AsyncRequest;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_java_util_HashMap;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BreakupRelationshipAsyncRequest_requestparameters'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BreakupRelationshipAsyncRequest = registerClass(exports,'io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BreakupRelationshipAsyncRequest',io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BreakupRelationshipAsyncRequest);


function io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BuildupRelationshipAsyncRequestCallback() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BuildupRelationshipAsyncRequestCallback;
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
c.processCallbackData__VLjava_lang_String_2.call(lcA0, lcA1);
return;

};
c['process__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.processCallbackData__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getRequest__Lio_cloudoffice_platform_cockpit_api_AsyncRequest_2(lcA0);
var stA0 = invoker.getView__Ljava_lang_Object_2(stA0);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_collection_CollectionListItemView']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.collection.CollectionListItemView');
var lcA2 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](lcA1);
if ((stI0) == 0) { gt = 90; break IF; }
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2'](lcA1);
var lcA3 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA3,"code");
var lcA4 = stA0;
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA4,"200");
if ((stI0) == 0) { gt = 90; break IF; }
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_Object_2'](lcA2);
if ((stI0) == 0) { gt = 90; break IF; }
var stA0 = lcA2.getExistingItemList__Ljava_util_List_2();
var stA1 = lcA2.getTempSelectionForRelation__Lio_cloudoffice_platform_cockpit_collection_ListItemView_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
lcA2.setCollectionInputBoxText__VLjava_lang_String_2("");
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"Successfully make relation >>");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA1);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2'](stA0);
    }
    X_90: for (;;) { IF: if (gt <= 90) {
return;

    }
}}
};
    m.access = 2;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BuildupRelationshipAsyncRequestCallbackfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BuildupRelationshipAsyncRequestCallback', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BuildupRelationshipAsyncRequestCallbackfillInstOf });
    io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BuildupRelationshipAsyncRequestCallbackfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/collection/CollectionComponent$CollectionListItemViewModel$BuildupRelationshipAsyncRequestCallback';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_ServerCallback;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_java_lang_StringBuilder;
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
vm.io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BuildupRelationshipAsyncRequestCallback = registerClass(exports,'io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BuildupRelationshipAsyncRequestCallback',io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BuildupRelationshipAsyncRequestCallback);


function io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BuildupRelationshipAsyncRequest() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BuildupRelationshipAsyncRequest;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_api_AsyncRequest(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._requestparameters = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BuildupRelationshipAsyncRequest_requestparameters'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BuildupRelationshipAsyncRequest_requestparameters']; };
    m = CLS.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_ServerCallback_2Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3, lcA4) {
  var  lcA0 = this;
(refs_io_cloudoffice_platform_cockpit_api_AsyncRequest || (refs_io_cloudoffice_platform_cockpit_api_AsyncRequest = vm.io_cloudoffice_platform_cockpit_api_AsyncRequest(false))).constructor['cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_ServerCallback_2Ljava_lang_Object_2'].call(lcA0, lcA1, lcA2, lcA3);
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BuildupRelationshipAsyncRequest_requestparameters'] = lcA4;
return;

};
CLS['cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_ServerCallback_2Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.preparePostData__V = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getRequestparameters__Ljava_lang_String_2(lcA0);
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA0);
if ((stI0) == 0) { gt = 636; break IF; }
var stA0 = invoker.getRequestparameters__Ljava_lang_String_2(lcA0);
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2'](stA0);
var lcA1 = stA0;
var stA0 = new vm.java_util_ArrayList;
(refs_java_util_ArrayList || (refs_java_util_ArrayList = vm.java_util_ArrayList(false))).constructor['cons__V'].call(stA0);
var lcA2 = stA0;
var stA0 = new vm.java_util_HashMap;
(refs_java_util_HashMap || (refs_java_util_HashMap = vm.java_util_HashMap(false))).constructor['cons__V'].call(stA0);
var lcA3 = stA0;
var stA0 = lcA3;var stA1 = "itemId";var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"itemId");
var stI2 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA2);
if ((stI2) == 0) { gt = 58; break IF; }
var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"itemId");
{ gt = 60; break IF; }
    }
    X_58: for (;;) { IF: if (gt <= 58) {

var stA2 = "''";    }
    X_60: for (;;) { IF: if (gt <= 60) {
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA3;var stA1 = "itemType";var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"itemType");
var stI2 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA2);
if ((stI2) == 0) { gt = 90; break IF; }
var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"itemType");
{ gt = 92; break IF; }
    }
    X_90: for (;;) { IF: if (gt <= 90) {

var stA2 = "''";    }
    X_92: for (;;) { IF: if (gt <= 92) {
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA3;var stA1 = "itemName";var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"itemName");
var stI2 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA2);
if ((stI2) == 0) { gt = 122; break IF; }
var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"itemName");
{ gt = 124; break IF; }
    }
    X_122: for (;;) { IF: if (gt <= 122) {

var stA2 = "''";    }
    X_124: for (;;) { IF: if (gt <= 124) {
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA3;var stA1 = "relatedItemId";var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"relatedItemId");
var stI2 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA2);
if ((stI2) == 0) { gt = 154; break IF; }
var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"relatedItemId");
{ gt = 156; break IF; }
    }
    X_154: for (;;) { IF: if (gt <= 154) {

var stA2 = "''";    }
    X_156: for (;;) { IF: if (gt <= 156) {
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA3;var stA1 = "relatedItemType";var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"relatedItemType");
var stI2 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA2);
if ((stI2) == 0) { gt = 186; break IF; }
var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"relatedItemType");
{ gt = 188; break IF; }
    }
    X_186: for (;;) { IF: if (gt <= 186) {

var stA2 = "''";    }
    X_188: for (;;) { IF: if (gt <= 188) {
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA3,"searchKey", "''");
var stA0 = lcA3;var stA1 = "description";var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"description");
var stI2 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA2);
if ((stI2) == 0) { gt = 229; break IF; }
var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"description");
{ gt = 231; break IF; }
    }
    X_229: for (;;) { IF: if (gt <= 229) {

var stA2 = "''";    }
    X_231: for (;;) { IF: if (gt <= 231) {
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA3;var stA1 = "companyRelationTypeA";var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"companyRelationTypeA");
var stI2 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA2);
if ((stI2) == 0) { gt = 261; break IF; }
var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"companyRelationTypeA");
{ gt = 263; break IF; }
    }
    X_261: for (;;) { IF: if (gt <= 261) {

var stA2 = "''";    }
    X_263: for (;;) { IF: if (gt <= 263) {
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA3;var stA1 = "companyRelationTypeB";var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"companyRelationTypeB");
var stI2 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA2);
if ((stI2) == 0) { gt = 293; break IF; }
var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"companyRelationTypeB");
{ gt = 295; break IF; }
    }
    X_293: for (;;) { IF: if (gt <= 293) {

var stA2 = "''";    }
    X_295: for (;;) { IF: if (gt <= 295) {
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA3;var stA1 = "personCompanyRelation";var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"personCompanyRelation");
var stI2 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA2);
if ((stI2) == 0) { gt = 325; break IF; }
var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"personCompanyRelation");
{ gt = 327; break IF; }
    }
    X_325: for (;;) { IF: if (gt <= 325) {

var stA2 = "''";    }
    X_327: for (;;) { IF: if (gt <= 327) {
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA3;var stA1 = "personCompanyPhone";var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"personCompanyPhone");
var stI2 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA2);
if ((stI2) == 0) { gt = 357; break IF; }
var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"personCompanyPhone");
{ gt = 359; break IF; }
    }
    X_357: for (;;) { IF: if (gt <= 357) {

var stA2 = "''";    }
    X_359: for (;;) { IF: if (gt <= 359) {
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA3;var stA1 = "personCompanyMobile";var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"personCompanyMobile");
var stI2 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA2);
if ((stI2) == 0) { gt = 389; break IF; }
var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"personCompanyMobile");
{ gt = 391; break IF; }
    }
    X_389: for (;;) { IF: if (gt <= 389) {

var stA2 = "''";    }
    X_391: for (;;) { IF: if (gt <= 391) {
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA3;var stA1 = "personCompanyEmail";var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"personCompanyEmail");
var stI2 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA2);
if ((stI2) == 0) { gt = 421; break IF; }
var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"personCompanyEmail");
{ gt = 423; break IF; }
    }
    X_421: for (;;) { IF: if (gt <= 421) {

var stA2 = "''";    }
    X_423: for (;;) { IF: if (gt <= 423) {
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA3;var stA1 = "function";var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"function");
var stI2 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA2);
if ((stI2) == 0) { gt = 453; break IF; }
var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"function");
{ gt = 455; break IF; }
    }
    X_453: for (;;) { IF: if (gt <= 453) {

var stA2 = "''";    }
    X_455: for (;;) { IF: if (gt <= 455) {
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA3;var stA1 = "personCompanyDepartment";var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"personCompanyDepartment");
var stI2 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA2);
if ((stI2) == 0) { gt = 485; break IF; }
var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"personCompanyDepartment");
{ gt = 487; break IF; }
    }
    X_485: for (;;) { IF: if (gt <= 485) {

var stA2 = "''";    }
    X_487: for (;;) { IF: if (gt <= 487) {
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA3;var stA1 = "engagementEndDate";var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"engagementEndDate");
var stI2 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA2);
if ((stI2) == 0) { gt = 517; break IF; }
var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"engagementEndDate");
{ gt = 519; break IF; }
    }
    X_517: for (;;) { IF: if (gt <= 517) {

var stA2 = "''";    }
    X_519: for (;;) { IF: if (gt <= 519) {
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA3;var stA1 = "projectRelationType";var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"projectRelationType");
var stI2 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA2);
if ((stI2) == 0) { gt = 549; break IF; }
var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"projectRelationType");
{ gt = 551; break IF; }
    }
    X_549: for (;;) { IF: if (gt <= 549) {

var stA2 = "''";    }
    X_551: for (;;) { IF: if (gt <= 551) {
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA3;var stA1 = "isEmployee";var stI2 = invoker.getBoolean__ZLjava_lang_String_2(lcA1,"isEmployee");
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA3;var stA1 = "businessModelName";var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"businessModelName");
var stI2 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA2);
if ((stI2) == 0) { gt = 599; break IF; }
var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"businessModelName");
{ gt = 601; break IF; }
    }
    X_599: for (;;) { IF: if (gt <= 599) {

var stA2 = "''";    }
    X_601: for (;;) { IF: if (gt <= 601) {
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA3,"selectedCampaignTypeList", lcA2);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA3,"items", lcA2);
var stA0 = lcA0;var stA1 = invoker.getEndpoint__Ljava_lang_String_2(lcA0);
invoker.put__VLjava_lang_String_2Ljava_lang_Object_2(stA0,stA1, lcA3);
    }
    X_636: for (;;) { IF: if (gt <= 636) {
return;

    }
}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
};
c['preparePostData__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.doValidate__Z = function() {
  var  lcA0 = this;
var stA0 = invoker.getRequestparameters__Ljava_lang_String_2(lcA0);
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA0);
return stI0;

};
c['doValidate__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getRequestparameters__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
return lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BuildupRelationshipAsyncRequest_requestparameters'];

};
c['getRequestparameters__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setRequestparameters__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BuildupRelationshipAsyncRequest_requestparameters'] = lcA1;
return;

};
c['setRequestparameters__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BuildupRelationshipAsyncRequestfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BuildupRelationshipAsyncRequest', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BuildupRelationshipAsyncRequestfillInstOf });
    io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BuildupRelationshipAsyncRequestfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/collection/CollectionComponent$CollectionListItemViewModel$BuildupRelationshipAsyncRequest';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_AsyncRequest;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_java_util_ArrayList;
    var refs_java_util_HashMap;
    var refs_java_lang_Boolean;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BuildupRelationshipAsyncRequest_requestparameters'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BuildupRelationshipAsyncRequest = registerClass(exports,'io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BuildupRelationshipAsyncRequest',io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$BuildupRelationshipAsyncRequest);


function io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$3() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$3;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_api_ServerCallback(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$item = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$3_val$item'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$3_val$item']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_collection_ListItemView_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$3_val$item'] = lcA1;
(refs_io_cloudoffice_platform_cockpit_api_ServerCallback || (refs_io_cloudoffice_platform_cockpit_api_ServerCallback = vm.io_cloudoffice_platform_cockpit_api_ServerCallback(false))).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.process__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getRequest__Lio_cloudoffice_platform_cockpit_api_AsyncRequest_2(lcA0);
var stA0 = invoker.getView__Ljava_lang_Object_2(stA0);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_collection_CollectionListItemView']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.collection.CollectionListItemView');
var lcA2 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](lcA1);
if ((stI0) == 0) { gt = 52; break IF; }
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2'](lcA1);
var lcA3 = stA0;
var stL0 = invoker.getLong__JLjava_lang_String_2(lcA3,"deleteCount");
var lcL4 = stL0;
if ((__compare64(lcL4,(0).toLong())) <= 0) { gt = 52; break IF; }
var stA0 = lcA2.getExistingItemList__Ljava_util_List_2();
var stI0 = invoker.remove__ZLjava_lang_Object_2(stA0,lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$3_val$item']);
    }
    X_52: for (;;) { IF: if (gt <= 52) {
return;

    }
}}
};
c['process__VLjava_lang_String_2'] = m;

    m.access = 1;
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
    function io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$3fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$3', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$3fillInstOf });
    io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$3fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/collection/CollectionComponent$CollectionListItemViewModel$3';
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
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$3_val$item'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$3 = io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$3;


function io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$4() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$4;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_api_AsyncRequest(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$itemId = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$4_val$itemId'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$4_val$itemId']; };
  m = c._val$itemType = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$4_val$itemType'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$4_val$itemType']; };
  m = c._val$collectionItemId = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$4_val$collectionItemId'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$4_val$collectionItemId']; };
    m = CLS.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3, lcA4, lcA5) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$4_val$itemId'] = lcA3;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$4_val$itemType'] = lcA4;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$4_val$collectionItemId'] = lcA5;
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
var stA0 = new vm.java_util_ArrayList;
(refs_java_util_ArrayList || (refs_java_util_ArrayList = vm.java_util_ArrayList(false))).constructor['cons__V'].call(stA0);
var lcA2 = stA0;
var stA0 = new vm.java_util_HashMap;
(refs_java_util_HashMap || (refs_java_util_HashMap = vm.java_util_HashMap(false))).constructor['cons__V'].call(stA0);
var lcA3 = stA0;
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA3,"itemId", lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$4_val$itemId']);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA3,"itemType", lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$4_val$itemType']);
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA2,lcA3);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA1,"parentCollectionId", lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$4_val$collectionItemId']);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA1,"items", lcA2);
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
    function io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$4fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$4', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$4fillInstOf });
    io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$4fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/collection/CollectionComponent$CollectionListItemViewModel$4';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_AsyncRequest;
    var refs_java_util_HashMap;
    var refs_java_util_ArrayList;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$4_val$itemId'] = null;
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$4_val$itemType'] = null;
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$4_val$collectionItemId'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$4 = io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$4;


function io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$1;
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
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_collection_CollectionListItemView']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.collection.CollectionListItemView');
var lcA2 = stA0;
var stA0 = lcA2.getItemList__Ljava_util_List_2();
invoker.clear__V(stA0);
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](lcA1);
if ((stI0) == 0) { gt = 161; break IF; }
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Z'](lcA1, 1);
var stA0 = invoker.getArray__Ljava_util_List_2(stA0);
var lcA3 = stA0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA3);
var lcA4 = stA0;
    }
    X_44: for (;;) { IF: if (gt <= 44) {

var stI0 = invoker.hasNext__Z(lcA4);
if ((stI0) == 0) { gt = 161; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA4);
if (stA0 !== null && !stA0['$instOf_java_util_Map']) vm.java_lang_Class(false).castEx(stA0, 'java.util.Map');
var lcA5 = stA0;
var stA0 = new io_cloudoffice_platform_cockpit_collection_ListItemView;
(refs_io_cloudoffice_platform_cockpit_collection_ListItemView || (refs_io_cloudoffice_platform_cockpit_collection_ListItemView = io_cloudoffice_platform_cockpit_collection_ListItemView(false))).constructor.cons__V.call(stA0);
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
var stA0 = lcA6;var stA1 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA5,"itemType");
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
var stA1 = (refs_io_cloudoffice_platform_cockpit_api_QueryMetaModel || (refs_io_cloudoffice_platform_cockpit_api_QueryMetaModel = vm.io_cloudoffice_platform_cockpit_api_QueryMetaModel(false)))['getItemTypeIconCss__Ljava_lang_String_2Ljava_lang_String_2'](stA1);
stA0.setItemTypeIconCss__VLjava_lang_String_2(stA1);
var stA0 = lcA2.getItemList__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA6);
{ gt = 0; continue X_44; }
    }
    X_161: for (;;) { IF: if (gt <= 161) {
return;

    }
}}}
};
c['process__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$1fillInstOf });
    io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/collection/CollectionComponent$CollectionListItemViewModel$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_ServerCallback;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_collection_ListItemView;
    var refs_io_cloudoffice_platform_cockpit_api_QueryMetaModel;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$1 = io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$1;


function io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$2() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$2;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_api_AsyncRequest(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$collectionListType = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$2_val$collectionListType'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$2_val$collectionListType']; };
  m = c._val$existingItemList = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$2_val$existingItemList'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$2_val$existingItemList']; };
  m = c._val$searchKey = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$2_val$searchKey'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$2_val$searchKey']; };
    m = CLS.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2Ljava_lang_String_2Ljava_util_List_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3, lcA4, lcA5) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$2_val$collectionListType'] = lcA3;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$2_val$existingItemList'] = lcA4;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$2_val$searchKey'] = lcA5;
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
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$2_val$collectionListType'],"ALL");
if ((stI0) == 0) { gt = 59; break IF; }
var stI0 = invoker.addAll__ZLjava_util_Collection_2(lcA4,(refs_io_cloudoffice_platform_cockpit_api_QueryMetaModel || (refs_io_cloudoffice_platform_cockpit_api_QueryMetaModel = vm.io_cloudoffice_platform_cockpit_api_QueryMetaModel(false)))['_COLLECTION_SEARCH_ITEM']());
{ gt = 71; break IF; }
    }
    X_59: for (;;) { IF: if (gt <= 59) {

var stI0 = invoker.add__ZLjava_lang_Object_2(lcA4,lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$2_val$collectionListType']);
    }
    X_71: for (;;) { IF: if (gt <= 71) {

var stA0 = lcA3;var stA1 = "scopeGroup";var stA2 = (refs_io_cloudoffice_platform_cockpit_api_Session || (refs_io_cloudoffice_platform_cockpit_api_Session = vm.io_cloudoffice_platform_cockpit_api_Session(false)))['getCompany__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(stA2,"itemId");
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA3,"collectionType", "generic");
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$2_val$existingItemList']);
var lcA5 = stA0;
    }
    X_110: for (;;) { IF: if (gt <= 110) {

var stI0 = invoker.hasNext__Z(lcA5);
if ((stI0) == 0) { gt = 183; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA5);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_collection_ListItemView']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.collection.ListItemView');
var lcA6 = stA0;
var stA0 = new vm.java_util_HashMap;
(refs_java_util_HashMap || (refs_java_util_HashMap = vm.java_util_HashMap(false))).constructor['cons__V'].call(stA0);
var lcA7 = stA0;
var stA0 = lcA7;var stA1 = "itemId";var stA2 = lcA6.getItemId__Ljava_lang_String_2();
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA7;var stA1 = "itemType";var stA2 = lcA6.getItemType__Ljava_lang_String_2();
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA2,lcA7);
{ gt = 0; continue X_110; }
    }
    X_183: for (;;) { IF: if (gt <= 183) {

var stA0 = lcA1;var stA1 = "searchKey";var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"'");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$2_val$searchKey']);
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
}}}}}
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
    function io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$2fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$2', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$2fillInstOf });
    io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$2fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/collection/CollectionComponent$CollectionListItemViewModel$2';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_AsyncRequest;
    var refs_java_util_HashMap;
    var refs_java_util_ArrayList;
    var refs_io_cloudoffice_platform_cockpit_api_QueryMetaModel;
    var refs_io_cloudoffice_platform_cockpit_api_Session;
    var refs_java_lang_StringBuilder;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$2_val$collectionListType'] = null;
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$2_val$existingItemList'] = null;
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$2_val$searchKey'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$2 = io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionListItemViewModel$2;

vm.io_cloudoffice_platform_cockpit_api_ComponentDef = link('io/cloudoffice/platform/cockpit/api/ComponentDef', function(f) { vm.io_cloudoffice_platform_cockpit_api_ComponentDef =  f; });
vm.net_java_html_json_Models = link('net/java/html/json/Models', function(f) { vm.net_java_html_json_Models =  f; });

function io_cloudoffice_platform_cockpit_collection_CollectionConfiguration() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_collection_CollectionConfiguration;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_proto'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_proto']; };
  m = c._prop_loader = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_loader'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_loader']; };
  m = c._prop_collectionItemList = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_collectionItemList'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_collectionItemList']; };
  m = c._prop_inputBoxText = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_inputBoxText'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_inputBoxText']; };
  m = c._prop_showItemList = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_showItemList'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_showItemList']; };
  m = c._prop_itemList = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_itemList'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_itemList']; };
  m = c._prop_itemListLoader = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_itemListLoader'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_itemListLoader']; };
  m = c._prop_collectionListType = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_collectionListType'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_collectionListType']; };
  m = c._prop_layoutRowId = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_layoutRowId'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_layoutRowId']; };
  m = c._prop_listComponentDefinition = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_listComponentDefinition'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_listComponentDefinition']; };
  m = c._prop_relatedItemComponentDefinition = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_relatedItemComponentDefinition'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_relatedItemComponentDefinition']; };
  m = c._prop_newItemComponentDefinition = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_newItemComponentDefinition'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_newItemComponentDefinition']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager = io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_proto'],"loader");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_loader']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_HelperItemView;
(refs_io_cloudoffice_platform_cockpit_api_HelperItemView || (refs_io_cloudoffice_platform_cockpit_api_HelperItemView = vm.io_cloudoffice_platform_cockpit_api_HelperItemView(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_loader'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_loader'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_loader']['$instOf_io_cloudoffice_platform_cockpit_api_HelperItemView']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_loader'], 'io.cloudoffice.platform.cockpit.api.HelperItemView');
return lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_loader'];

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

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_loader'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_loader'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_proto'],"loader", lcA2, lcA1);
return;

    }
}}
};
c['setLoader__VLio_cloudoffice_platform_cockpit_api_HelperItemView_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getCollectionItemList__Ljava_util_List_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_proto'],"collectionItemList");
return lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_collectionItemList'];

};
c['getCollectionItemList__Ljava_util_List_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getInputBoxText__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_proto'],"inputBoxText");
return lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_inputBoxText'];

};
c['getInputBoxText__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setInputBoxText__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_inputBoxText'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_inputBoxText'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_proto'],"inputBoxText", lcA2, lcA1);
var lcA3 = lcA0;
(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager = io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager(false))).itemSearchAutocomplete__VLio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2(lcA3);
return;

    }
}}
};
c['setInputBoxText__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isShowItemList__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_proto'],"showItemList");
return lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_showItemList'];

};
c['isShowItemList__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setShowItemList__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_showItemList']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_showItemList'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_proto'];var stA1 = "showItemList";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
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
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_proto'],"itemList");
return lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_itemList'];

};
c['getItemList__Ljava_util_List_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getItemListLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_proto'],"itemListLoader");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_itemListLoader']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_HelperItemView;
(refs_io_cloudoffice_platform_cockpit_api_HelperItemView || (refs_io_cloudoffice_platform_cockpit_api_HelperItemView = vm.io_cloudoffice_platform_cockpit_api_HelperItemView(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_itemListLoader'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_itemListLoader'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_itemListLoader']['$instOf_io_cloudoffice_platform_cockpit_api_HelperItemView']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_itemListLoader'], 'io.cloudoffice.platform.cockpit.api.HelperItemView');
return lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_itemListLoader'];

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

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_itemListLoader'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_itemListLoader'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_proto'],"itemListLoader", lcA2, lcA1);
return;

    }
}}
};
c['setItemListLoader__VLio_cloudoffice_platform_cockpit_api_HelperItemView_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getCollectionListType__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_proto'],"collectionListType");
return lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_collectionListType'];

};
c['getCollectionListType__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setCollectionListType__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_collectionListType'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_collectionListType'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_proto'],"collectionListType", lcA2, lcA1);
return;

    }
}}
};
c['setCollectionListType__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getLayoutRowId__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_proto'],"layoutRowId");
return lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_layoutRowId'];

};
c['getLayoutRowId__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setLayoutRowId__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_layoutRowId'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_layoutRowId'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_proto'],"layoutRowId", lcA2, lcA1);
return;

    }
}}
};
c['setLayoutRowId__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getListComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_proto'],"listComponentDefinition");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_listComponentDefinition']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_ComponentDef;
(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_listComponentDefinition'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_listComponentDefinition'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_listComponentDefinition']['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_listComponentDefinition'], 'io.cloudoffice.platform.cockpit.api.ComponentDef');
return lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_listComponentDefinition'];

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

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_listComponentDefinition'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_listComponentDefinition'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_proto'],"listComponentDefinition", lcA2, lcA1);
return;

    }
}}
};
c['setListComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getRelatedItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_proto'],"relatedItemComponentDefinition");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_relatedItemComponentDefinition']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_ComponentDef;
(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_relatedItemComponentDefinition'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_relatedItemComponentDefinition'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_relatedItemComponentDefinition']['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_relatedItemComponentDefinition'], 'io.cloudoffice.platform.cockpit.api.ComponentDef');
return lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_relatedItemComponentDefinition'];

    }
}}
};
c['getRelatedItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setRelatedItemComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_relatedItemComponentDefinition'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_relatedItemComponentDefinition'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_proto'],"relatedItemComponentDefinition", lcA2, lcA1);
return;

    }
}}
};
c['setRelatedItemComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getNewItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_proto'],"newItemComponentDefinition");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_newItemComponentDefinition']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_ComponentDef;
(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_newItemComponentDefinition'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_newItemComponentDefinition'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_newItemComponentDefinition']['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_newItemComponentDefinition'], 'io.cloudoffice.platform.cockpit.api.ComponentDef');
return lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_newItemComponentDefinition'];

    }
}}
};
c['getNewItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setNewItemComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_newItemComponentDefinition'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_newItemComponentDefinition'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_proto'],"newItemComponentDefinition", lcA2, lcA1);
return;

    }
}}
};
c['setNewItemComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2(c._TYPE(),lcA0, lcA1);
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_proto'] = stA1;
var stA0 = lcA0;var stA1 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_proto'];var stA2 = "collectionItemList";var stI3 = -1;var stA4 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 0);
var stA1 = invoker.createList__Ljava_util_List_2Ljava_lang_String_2I_3Ljava_lang_String_2(stA1,stA2, stI3, stA4);
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_collectionItemList'] = stA1;
var stA0 = lcA0;var stA1 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_proto'];var stA2 = "itemList";var stI3 = -1;var stA4 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 0);
var stA1 = invoker.createList__Ljava_util_List_2Ljava_lang_String_2I_3Ljava_lang_String_2(stA1,stA2, stI3, stA4);
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_itemList'] = stA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_loader'] = c._TYPE();
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_itemListLoader'] = c._TYPE();
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_listComponentDefinition'] = c._TYPE();
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_relatedItemComponentDefinition'] = c._TYPE();
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_newItemComponentDefinition'] = c._TYPE();
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_api_HelperItemView_2Ljava_lang_String_2ZLio_cloudoffice_platform_cockpit_api_HelperItemView_2Ljava_lang_String_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2_3Lio_cloudoffice_platform_cockpit_collection_ListItemView_2 = function(lcA1, lcA2, lcI3, lcA4, lcA5, lcA6, lcA7, lcA8, lcA9, lcA10) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_loader'] = lcA1;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_inputBoxText'] = lcA2;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_showItemList'] = lcI3;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_itemListLoader'] = lcA4;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_collectionListType'] = lcA5;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_layoutRowId'] = lcA6;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_listComponentDefinition'] = lcA7;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_relatedItemComponentDefinition'] = lcA8;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_newItemComponentDefinition'] = lcA9;
invoker.initTo__VLjava_util_Collection_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_proto'],lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_collectionItemList'], lcA10);
return;

};
CLS['cons__VLio_cloudoffice_platform_cockpit_api_HelperItemView_2Ljava_lang_String_2ZLio_cloudoffice_platform_cockpit_api_HelperItemView_2Ljava_lang_String_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2_3Lio_cloudoffice_platform_cockpit_collection_ListItemView_2'] = m;

    m.access = 129;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, (11));
var lcA3 = stA0;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, (11));
Array.at(stA2, 0, "loader");
Array.at(stA2, 1, "collectionItemList");
Array.at(stA2, 2, "inputBoxText");
Array.at(stA2, 3, "showItemList");
Array.at(stA2, 4, "itemList");
Array.at(stA2, 5, "itemListLoader");
Array.at(stA2, (6), "collectionListType");
Array.at(stA2, (7), "layoutRowId");
Array.at(stA2, (8), "listComponentDefinition");
Array.at(stA2, (9), "relatedItemComponentDefinition");
Array.at(stA2, (10), "newItemComponentDefinition");
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_proto'],(refs_io_cloudoffice_platform_cockpit_api_HelperItemView || (refs_io_cloudoffice_platform_cockpit_api_HelperItemView = vm.io_cloudoffice_platform_cockpit_api_HelperItemView(false))).constructor.$class, (lcA3[0] || Array.at(lcA3, 0)));
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_loader'] = stA1;
var stA0 = c.useAsArray___3Ljava_lang_Object_2Ljava_lang_Object_2((lcA3[1] || Array.at(lcA3, 1)));
var lcA4 = stA0;
var lcI5 = (lcA4).length;
var lcI6 = 0;
    }
    X_117: for (;;) { IF: if (gt <= 117) {

if ((lcI6) >= (lcI5)) { gt = 158; break IF; }
var lcA7 = (lcA4[lcI6] || Array.at(lcA4, lcI6));
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_collectionItemList'];var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_proto'],(refs_io_cloudoffice_platform_cockpit_collection_ListItemView || (refs_io_cloudoffice_platform_cockpit_collection_ListItemView = io_cloudoffice_platform_cockpit_collection_ListItemView(false))).constructor.$class, lcA7);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
lcI6++;
{ gt = 0; continue X_117; }
    }
    X_158: for (;;) { IF: if (gt <= 158) {

if ((lcA3[2] || Array.at(lcA3, 2)) !== null && !(lcA3[2] || Array.at(lcA3, 2))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[2] || Array.at(lcA3, 2)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_inputBoxText'] = (lcA3[2] || Array.at(lcA3, 2));
var stA0 = lcA0;if (((lcA3[3] || Array.at(lcA3, 3))) !== null) { gt = 179; break IF; }
var stI1 = 0;{ gt = 191; break IF; }
    }
    X_179: for (;;) { IF: if (gt <= 179) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[3] || Array.at(lcA3, 3)));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_191: for (;;) { IF: if (gt <= 191) {
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_showItemList'] = stI1;
var stA0 = c.useAsArray___3Ljava_lang_Object_2Ljava_lang_Object_2((lcA3[4] || Array.at(lcA3, 4)));
var lcA4 = stA0;
var lcI5 = (lcA4).length;
var lcI6 = 0;
    }
    X_210: for (;;) { IF: if (gt <= 210) {

if ((lcI6) >= (lcI5)) { gt = 251; break IF; }
var lcA7 = (lcA4[lcI6] || Array.at(lcA4, lcI6));
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_itemList'];var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_proto'],(refs_io_cloudoffice_platform_cockpit_collection_ListItemView || (refs_io_cloudoffice_platform_cockpit_collection_ListItemView = io_cloudoffice_platform_cockpit_collection_ListItemView(false))).constructor.$class, lcA7);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
lcI6++;
{ gt = 0; continue X_210; }
    }
    X_251: for (;;) { IF: if (gt <= 251) {

var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_proto'],(refs_io_cloudoffice_platform_cockpit_api_HelperItemView || (refs_io_cloudoffice_platform_cockpit_api_HelperItemView = vm.io_cloudoffice_platform_cockpit_api_HelperItemView(false))).constructor.$class, (lcA3[5] || Array.at(lcA3, 5)));
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_itemListLoader'] = stA1;
if ((lcA3[(6)] || Array.at(lcA3, (6))) !== null && !(lcA3[(6)] || Array.at(lcA3, (6)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(6)] || Array.at(lcA3, (6))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_collectionListType'] = (lcA3[(6)] || Array.at(lcA3, (6)));
if ((lcA3[(7)] || Array.at(lcA3, (7))) !== null && !(lcA3[(7)] || Array.at(lcA3, (7)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(7)] || Array.at(lcA3, (7))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_layoutRowId'] = (lcA3[(7)] || Array.at(lcA3, (7)));
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_proto'],(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, (lcA3[(8)] || Array.at(lcA3, (8))));
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_listComponentDefinition'] = stA1;
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_proto'],(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, (lcA3[(9)] || Array.at(lcA3, (9))));
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_relatedItemComponentDefinition'] = stA1;
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_proto'],(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, (lcA3[(10)] || Array.at(lcA3, (10))));
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_newItemComponentDefinition'] = stA1;
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"loader");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_loader']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"collectionItemList");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_collectionItemList']);
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
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_itemList']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"itemListLoader");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_itemListLoader']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"collectionListType");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getCollectionListType__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"layoutRowId");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getLayoutRowId__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"listComponentDefinition");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_listComponentDefinition']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"relatedItemComponentDefinition");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_relatedItemComponentDefinition']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"newItemComponentDefinition");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_newItemComponentDefinition']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(125));
var stA0 = invoker.toString__Ljava_lang_String_2(lcA1);
return stA0;

};
c['toString__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_proto']);
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new io_cloudoffice_platform_cockpit_collection_CollectionConfiguration;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_loader']) !== null) { gt = 21; break IF; }
var stA1 = null;{ gt = 45; break IF; }
    }
    X_21: for (;;) { IF: if (gt <= 21) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_loader']) !== (c._TYPE())) { gt = 37; break IF; }
var stA1 = c._TYPE();{ gt = 45; break IF; }
    }
    X_37: for (;;) { IF: if (gt <= 37) {

var stA1 = lcA0.getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_45: for (;;) { IF: if (gt <= 45) {
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_loader'] = stA1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_proto'];var stA1 = lcA2.getCollectionItemList__Ljava_util_List_2();
invoker.cloneList__VLjava_util_Collection_2Lnet_java_html_BrwsrCtx_2Ljava_util_Collection_2(stA0,stA1, lcA1, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_collectionItemList']);
var stA0 = lcA2;var stA1 = lcA0.getInputBoxText__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_inputBoxText'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isShowItemList__Z();
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_showItemList'] = stI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_proto'];var stA1 = lcA2.getItemList__Ljava_util_List_2();
invoker.cloneList__VLjava_util_Collection_2Lnet_java_html_BrwsrCtx_2Ljava_util_Collection_2(stA0,stA1, lcA1, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_itemList']);
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_itemListLoader']) !== null) { gt = 108; break IF; }
var stA1 = null;{ gt = 132; break IF; }
    }
    X_108: for (;;) { IF: if (gt <= 108) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_itemListLoader']) !== (c._TYPE())) { gt = 124; break IF; }
var stA1 = c._TYPE();{ gt = 132; break IF; }
    }
    X_124: for (;;) { IF: if (gt <= 124) {

var stA1 = lcA0.getItemListLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_132: for (;;) { IF: if (gt <= 132) {
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_itemListLoader'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getCollectionListType__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_collectionListType'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getLayoutRowId__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_layoutRowId'] = stA1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_listComponentDefinition']) !== null) { gt = 163; break IF; }
var stA1 = null;{ gt = 187; break IF; }
    }
    X_163: for (;;) { IF: if (gt <= 163) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_listComponentDefinition']) !== (c._TYPE())) { gt = 179; break IF; }
var stA1 = c._TYPE();{ gt = 187; break IF; }
    }
    X_179: for (;;) { IF: if (gt <= 179) {

var stA1 = lcA0.getListComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_187: for (;;) { IF: if (gt <= 187) {
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_listComponentDefinition'] = stA1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_relatedItemComponentDefinition']) !== null) { gt = 202; break IF; }
var stA1 = null;{ gt = 226; break IF; }
    }
    X_202: for (;;) { IF: if (gt <= 202) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_relatedItemComponentDefinition']) !== (c._TYPE())) { gt = 218; break IF; }
var stA1 = c._TYPE();{ gt = 226; break IF; }
    }
    X_218: for (;;) { IF: if (gt <= 218) {

var stA1 = lcA0.getRelatedItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_226: for (;;) { IF: if (gt <= 226) {
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_relatedItemComponentDefinition'] = stA1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_newItemComponentDefinition']) !== null) { gt = 241; break IF; }
var stA1 = null;{ gt = 265; break IF; }
    }
    X_241: for (;;) { IF: if (gt <= 241) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_newItemComponentDefinition']) !== (c._TYPE())) { gt = 257; break IF; }
var stA1 = c._TYPE();{ gt = 265; break IF; }
    }
    X_257: for (;;) { IF: if (gt <= 257) {

var stA1 = lcA0.getNewItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_265: for (;;) { IF: if (gt <= 265) {
stA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_newItemComponentDefinition'] = stA1;
return lcA2;

    }
}}}}}}}}}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2 = function() {
  var  lcA0 = this;
invoker.applyBindings__V(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_proto']);
return lcA0;

};
c['applyBindings__Lio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2'] = m;

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

var stI0 = lcA1 != null && lcA1['$instOf_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.collection.CollectionConfiguration');
var lcA2 = lcA1;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_loader']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_loader']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 48; break IF; }
return 0;
    }
    X_48: for (;;) { IF: if (gt <= 48) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_collectionItemList']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_collectionItemList']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 75; break IF; }
return 0;
    }
    X_75: for (;;) { IF: if (gt <= 75) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_inputBoxText'], lcA2['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_inputBoxText']);
if ((stI0) != 0) { gt = 94; break IF; }
return 0;
    }
    X_94: for (;;) { IF: if (gt <= 94) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_showItemList']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_showItemList']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 119; break IF; }
return 0;
    }
    X_119: for (;;) { IF: if (gt <= 119) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_itemList']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_itemList']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 146; break IF; }
return 0;
    }
    X_146: for (;;) { IF: if (gt <= 146) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_itemListLoader']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_itemListLoader']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 173; break IF; }
return 0;
    }
    X_173: for (;;) { IF: if (gt <= 173) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_collectionListType'], lcA2['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_collectionListType']);
if ((stI0) != 0) { gt = 192; break IF; }
return 0;
    }
    X_192: for (;;) { IF: if (gt <= 192) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_layoutRowId'], lcA2['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_layoutRowId']);
if ((stI0) != 0) { gt = 211; break IF; }
return 0;
    }
    X_211: for (;;) { IF: if (gt <= 211) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_listComponentDefinition']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_listComponentDefinition']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 238; break IF; }
return 0;
    }
    X_238: for (;;) { IF: if (gt <= 238) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_relatedItemComponentDefinition']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_relatedItemComponentDefinition']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 265; break IF; }
return 0;
    }
    X_265: for (;;) { IF: if (gt <= 265) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_newItemComponentDefinition']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_newItemComponentDefinition']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 292; break IF; }
return 0;
    }
    X_292: for (;;) { IF: if (gt <= 292) {

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
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_loader']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_collectionItemList']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_inputBoxText'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_showItemList']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_itemList']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_itemListLoader']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_collectionListType'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_layoutRowId'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_listComponentDefinition']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_relatedItemComponentDefinition']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_newItemComponentDefinition']);
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
var stA0 = lcA0.clone__Lio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lio_cloudoffice_platform_cockpit_collection_CollectionConfiguration$Html4JavaType_2 = function() {
return c._TYPE();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2 = function(lcA0) {
return lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_collection_CollectionConfiguration$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2Lio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_collection_CollectionConfiguration$Html4JavaType;
(refs_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration$Html4JavaType || (refs_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration$Html4JavaType = io_cloudoffice_platform_cockpit_collection_CollectionConfiguration$Html4JavaType(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_collection_CollectionConfiguration$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_collection_CollectionConfigurationfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_collection_CollectionConfigurationfillInstOf });
    io_cloudoffice_platform_cockpit_collection_CollectionConfigurationfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/collection/CollectionConfiguration';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager;
    var refs_io_cloudoffice_platform_cockpit_api_HelperItemView;
    var refs_net_java_html_json_Models;
    var refs_java_lang_Boolean;
    var refs_io_cloudoffice_platform_cockpit_api_ComponentDef;
    var refs_net_java_html_BrwsrCtx;
    var refs_io_cloudoffice_platform_cockpit_collection_ListItemView;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_proto'] = null;
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_loader'] = null;
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_collectionItemList'] = null;
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_inputBoxText'] = null;
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_showItemList'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_itemList'] = null;
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_itemListLoader'] = null;
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_collectionListType'] = null;
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_layoutRowId'] = null;
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_listComponentDefinition'] = null;
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_relatedItemComponentDefinition'] = null;
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration_prop_newItemComponentDefinition'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_collection_CollectionConfiguration = registerClass(exports,'io_cloudoffice_platform_cockpit_collection_CollectionConfiguration',io_cloudoffice_platform_cockpit_collection_CollectionConfiguration);


function io_cloudoffice_platform_cockpit_collection_CollectionConfiguration$Html4JavaType() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_collection_CollectionConfiguration$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration || (refs_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration = io_cloudoffice_platform_cockpit_collection_CollectionConfiguration(false))).constructor.$class, (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager = io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager(false))).constructor.$class, (11), 3);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"loader", 0, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"collectionItemList", 1, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"inputBoxText", 2, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"showItemList", 3, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemList", 4, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemListLoader", 5, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"collectionListType", (6), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"layoutRowId", (7), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"listComponentDefinition", (8), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"relatedItemComponentDefinition", (9), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"newItemComponentDefinition", (10), 0, 0);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"getItemList", 0);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"selectItem", 1);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"removeCollectionItemFromList", 2);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 60; break IF; }
  case 1:{ gt = 77; break IF; }
  case 2:{ gt = 91; break IF; }
  case 3:{ gt = 108; break IF; }
  case 4:{ gt = 128; break IF; }
  case 5:{ gt = 142; break IF; }
  case 6:{ gt = 159; break IF; }
  case 7:{ gt = 176; break IF; }
  case 8:{ gt = 193; break IF; }
  case 9:{ gt = 210; break IF; }
  case 10:{ gt = 227; break IF; }
  default: { gt = 244; break IF; }
}
    }
    X_60: for (;;) { IF: if (gt <= 60) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration || (refs_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration = io_cloudoffice_platform_cockpit_collection_CollectionConfiguration(false))).access$100__Lio_cloudoffice_platform_cockpit_collection_CollectionConfiguration$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_api_HelperItemView || (refs_io_cloudoffice_platform_cockpit_api_HelperItemView = vm.io_cloudoffice_platform_cockpit_api_HelperItemView(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_api_HelperItemView']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.api.HelperItemView');
stA0.setLoader__VLio_cloudoffice_platform_cockpit_api_HelperItemView_2(stA1);
return;
    }
    X_77: for (;;) { IF: if (gt <= 77) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration || (refs_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration = io_cloudoffice_platform_cockpit_collection_CollectionConfiguration(false))).access$100__Lio_cloudoffice_platform_cockpit_collection_CollectionConfiguration$Html4JavaType_2();
var stA1 = lcA1.getCollectionItemList__Ljava_util_List_2();
invoker.replaceValue__VLjava_util_Collection_2Ljava_lang_Class_2Ljava_lang_Object_2(stA0,stA1, (refs_io_cloudoffice_platform_cockpit_collection_ListItemView || (refs_io_cloudoffice_platform_cockpit_collection_ListItemView = io_cloudoffice_platform_cockpit_collection_ListItemView(false))).constructor.$class, lcA3);
return;
    }
    X_91: for (;;) { IF: if (gt <= 91) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration || (refs_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration = io_cloudoffice_platform_cockpit_collection_CollectionConfiguration(false))).access$100__Lio_cloudoffice_platform_cockpit_collection_CollectionConfiguration$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setInputBoxText__VLjava_lang_String_2(stA1);
return;
    }
    X_108: for (;;) { IF: if (gt <= 108) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration || (refs_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration = io_cloudoffice_platform_cockpit_collection_CollectionConfiguration(false))).access$100__Lio_cloudoffice_platform_cockpit_collection_CollectionConfiguration$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setShowItemList__VZ(stI1);
return;
    }
    X_128: for (;;) { IF: if (gt <= 128) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration || (refs_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration = io_cloudoffice_platform_cockpit_collection_CollectionConfiguration(false))).access$100__Lio_cloudoffice_platform_cockpit_collection_CollectionConfiguration$Html4JavaType_2();
var stA1 = lcA1.getItemList__Ljava_util_List_2();
invoker.replaceValue__VLjava_util_Collection_2Ljava_lang_Class_2Ljava_lang_Object_2(stA0,stA1, (refs_io_cloudoffice_platform_cockpit_collection_ListItemView || (refs_io_cloudoffice_platform_cockpit_collection_ListItemView = io_cloudoffice_platform_cockpit_collection_ListItemView(false))).constructor.$class, lcA3);
return;
    }
    X_142: for (;;) { IF: if (gt <= 142) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration || (refs_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration = io_cloudoffice_platform_cockpit_collection_CollectionConfiguration(false))).access$100__Lio_cloudoffice_platform_cockpit_collection_CollectionConfiguration$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_api_HelperItemView || (refs_io_cloudoffice_platform_cockpit_api_HelperItemView = vm.io_cloudoffice_platform_cockpit_api_HelperItemView(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_api_HelperItemView']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.api.HelperItemView');
stA0.setItemListLoader__VLio_cloudoffice_platform_cockpit_api_HelperItemView_2(stA1);
return;
    }
    X_159: for (;;) { IF: if (gt <= 159) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration || (refs_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration = io_cloudoffice_platform_cockpit_collection_CollectionConfiguration(false))).access$100__Lio_cloudoffice_platform_cockpit_collection_CollectionConfiguration$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setCollectionListType__VLjava_lang_String_2(stA1);
return;
    }
    X_176: for (;;) { IF: if (gt <= 176) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration || (refs_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration = io_cloudoffice_platform_cockpit_collection_CollectionConfiguration(false))).access$100__Lio_cloudoffice_platform_cockpit_collection_CollectionConfiguration$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setLayoutRowId__VLjava_lang_String_2(stA1);
return;
    }
    X_193: for (;;) { IF: if (gt <= 193) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration || (refs_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration = io_cloudoffice_platform_cockpit_collection_CollectionConfiguration(false))).access$100__Lio_cloudoffice_platform_cockpit_collection_CollectionConfiguration$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.api.ComponentDef');
stA0.setListComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2(stA1);
return;
    }
    X_210: for (;;) { IF: if (gt <= 210) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration || (refs_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration = io_cloudoffice_platform_cockpit_collection_CollectionConfiguration(false))).access$100__Lio_cloudoffice_platform_cockpit_collection_CollectionConfiguration$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.api.ComponentDef');
stA0.setRelatedItemComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2(stA1);
return;
    }
    X_227: for (;;) { IF: if (gt <= 227) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration || (refs_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration = io_cloudoffice_platform_cockpit_collection_CollectionConfiguration(false))).access$100__Lio_cloudoffice_platform_cockpit_collection_CollectionConfiguration$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.api.ComponentDef');
stA0.setNewItemComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2(stA1);
return;
    }
    X_244: for (;;) { IF: if (gt <= 244) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2I = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 60; break IF; }
  case 1:{ gt = 65; break IF; }
  case 2:{ gt = 70; break IF; }
  case 3:{ gt = 75; break IF; }
  case 4:{ gt = 83; break IF; }
  case 5:{ gt = 88; break IF; }
  case 6:{ gt = 93; break IF; }
  case 7:{ gt = 98; break IF; }
  case 8:{ gt = 103; break IF; }
  case 9:{ gt = 108; break IF; }
  case 10:{ gt = 113; break IF; }
  default: { gt = 118; break IF; }
}
    }
    X_60: for (;;) { IF: if (gt <= 60) {

var stA0 = lcA1.getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
return stA0;
    }
    X_65: for (;;) { IF: if (gt <= 65) {

var stA0 = lcA1.getCollectionItemList__Ljava_util_List_2();
return stA0;
    }
    X_70: for (;;) { IF: if (gt <= 70) {

var stA0 = lcA1.getInputBoxText__Ljava_lang_String_2();
return stA0;
    }
    X_75: for (;;) { IF: if (gt <= 75) {

var stI0 = lcA1.isShowItemList__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_83: for (;;) { IF: if (gt <= 83) {

var stA0 = lcA1.getItemList__Ljava_util_List_2();
return stA0;
    }
    X_88: for (;;) { IF: if (gt <= 88) {

var stA0 = lcA1.getItemListLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
return stA0;
    }
    X_93: for (;;) { IF: if (gt <= 93) {

var stA0 = lcA1.getCollectionListType__Ljava_lang_String_2();
return stA0;
    }
    X_98: for (;;) { IF: if (gt <= 98) {

var stA0 = lcA1.getLayoutRowId__Ljava_lang_String_2();
return stA0;
    }
    X_103: for (;;) { IF: if (gt <= 103) {

var stA0 = lcA1.getListComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
return stA0;
    }
    X_108: for (;;) { IF: if (gt <= 108) {

var stA0 = lcA1.getRelatedItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
return stA0;
    }
    X_113: for (;;) { IF: if (gt <= 113) {

var stA0 = lcA1.getNewItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
return stA0;
    }
    X_118: for (;;) { IF: if (gt <= 118) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.call__VLio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 28; break IF; }
  case 1:{ gt = 33; break IF; }
  case 2:{ gt = 51; break IF; }
  default: { gt = 69; break IF; }
}
    }
    X_28: for (;;) { IF: if (gt <= 28) {

(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager = io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager(false))).getItemList__VLio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2(lcA1);
return;
    }
    X_33: for (;;) { IF: if (gt <= 33) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration || (refs_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration = io_cloudoffice_platform_cockpit_collection_CollectionConfiguration(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2(lcA1);
var stA1 = invoker.toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_collection_ListItemView || (refs_io_cloudoffice_platform_cockpit_collection_ListItemView = io_cloudoffice_platform_cockpit_collection_ListItemView(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_collection_ListItemView']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.collection.ListItemView');
(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager = io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager(false))).selectItem__VLio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2Lio_cloudoffice_platform_cockpit_collection_ListItemView_2(stA0, stA1);
return;
    }
    X_51: for (;;) { IF: if (gt <= 51) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration || (refs_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration = io_cloudoffice_platform_cockpit_collection_CollectionConfiguration(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2(lcA1);
var stA1 = invoker.toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_collection_ListItemView || (refs_io_cloudoffice_platform_cockpit_collection_ListItemView = io_cloudoffice_platform_cockpit_collection_ListItemView(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_collection_ListItemView']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.collection.ListItemView');
(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager = io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager(false))).removeCollectionItemFromList__VLio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2Lio_cloudoffice_platform_cockpit_collection_ListItemView_2(stA0, stA1);
return;
    }
    X_69: for (;;) { IF: if (gt <= 69) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.collection.CollectionConfiguration');
var stA0 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration || (refs_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration = io_cloudoffice_platform_cockpit_collection_CollectionConfiguration(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2I = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0: { gt = 20; break IF; }
  default: { gt = 25; break IF; }
}
    }
    X_20: for (;;) { IF: if (gt <= 20) {

(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager = io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager(false))).itemSearchAutocomplete__VLio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2(lcA1);
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
    m = c.onMessage__VLio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
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
    m = c.read__Lio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_collection_CollectionConfiguration;
(refs_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration || (refs_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration = io_cloudoffice_platform_cockpit_collection_CollectionConfiguration(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_collection_CollectionConfiguration$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2Lio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration || (refs_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration = io_cloudoffice_platform_cockpit_collection_CollectionConfiguration(false))).access$400__Lio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2Lio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.collection.CollectionConfiguration');
lcA0.onMessage__VLio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.collection.CollectionConfiguration');
lcA0.onChange__VLio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.collection.CollectionConfiguration');
var stA0 = lcA0.cloneTo__Lio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2Lio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.collection.CollectionConfiguration');
lcA0.call__VLio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.collection.CollectionConfiguration');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.collection.CollectionConfiguration');
lcA0.setValue__VLio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_collection_CollectionConfiguration$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_collection_CollectionConfiguration$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_collection_CollectionConfiguration$Html4JavaTypefillInstOf });
    io_cloudoffice_platform_cockpit_collection_CollectionConfiguration$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/collection/CollectionConfiguration$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration;
    var refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager;
    var refs_org_netbeans_html_json_spi_Proto$Type;
    var refs_io_cloudoffice_platform_cockpit_api_HelperItemView;
    var refs_io_cloudoffice_platform_cockpit_collection_ListItemView;
    var refs_java_lang_String;
    var refs_java_lang_Boolean;
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
vm.io_cloudoffice_platform_cockpit_collection_CollectionConfiguration$Html4JavaType = io_cloudoffice_platform_cockpit_collection_CollectionConfiguration$Html4JavaType;


function io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager;
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
    m = c.itemSearchAutocomplete__VLio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0.getInputBoxText__Ljava_lang_String_2();
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA0);
if ((stI0) == 0) { gt = 30; break IF; }
var stA0 = lcA0.getItemListLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
invoker.setActive__VZ(stA0,1);
lcA0.setShowItemList__VZ(1);
c.getItemList__VLio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2(lcA0);
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
c['itemSearchAutocomplete__VLio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getItemList__VLio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2 = function(lcA0) {
var stA0 = lcA0.getInputBoxText__Ljava_lang_String_2();
var lcA1 = stA0;
var stA0 = lcA0.getCollectionItemList__Ljava_util_List_2();
var lcA2 = stA0;
var stA0 = new io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager$2;
(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager$2 || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager$2 = io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager$2(false))).constructor.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2Ljava_util_List_2Ljava_lang_String_2.call(stA0, "\"/VirtualItem-portlet.searchitem/autoCompleteSearch\"", lcA0, lcA2, lcA1);
var stA1 = new io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager$1;
(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager$1 || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager$1 = io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager$1(false))).constructor.cons__V.call(stA1);
invoker.call__VLio_cloudoffice_platform_cockpit_api_ServerCallback_2(stA0,stA1);
return;

};
c['getItemList__VLio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.selectItem__VLio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2Lio_cloudoffice_platform_cockpit_collection_ListItemView_2 = function(lcA0, lcA1) {
lcA0.setInputBoxText__VLjava_lang_String_2("");
var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$ListItemViewModel || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$ListItemViewModel = io_cloudoffice_platform_cockpit_collection_CollectionComponent$ListItemViewModel(false))).shortCollectionName__Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_collection_ListItemView_2(lcA1);
stA0.setItemShortName__VLjava_lang_String_2(stA1);
var stA0 = lcA0.getCollectionItemList__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA1);
return;

};
c['selectItem__VLio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2Lio_cloudoffice_platform_cockpit_collection_ListItemView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.removeCollectionItemFromList__VLio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2Lio_cloudoffice_platform_cockpit_collection_ListItemView_2 = function(lcA0, lcA1) {
var stA0 = lcA0.getCollectionItemList__Ljava_util_List_2();
var stI0 = invoker.remove__ZLjava_lang_Object_2(stA0,lcA1);
return;

};
c['removeCollectionItemFromList__VLio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2Lio_cloudoffice_platform_cockpit_collection_ListItemView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManagerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManagerfillInstOf });
    io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManagerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/collection/CollectionComponent$CollectionAdminManager';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager$2;
    var refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager$1;
    var refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$ListItemViewModel;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager = registerClass(exports,'io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager',io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager);


function io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager$1;
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
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.collection.CollectionConfiguration');
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
var stA0 = new io_cloudoffice_platform_cockpit_collection_ListItemView;
(refs_io_cloudoffice_platform_cockpit_collection_ListItemView || (refs_io_cloudoffice_platform_cockpit_collection_ListItemView = io_cloudoffice_platform_cockpit_collection_ListItemView(false))).constructor.cons__V.call(stA0);
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
    function io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager$1fillInstOf });
    io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/collection/CollectionComponent$CollectionAdminManager$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_ServerCallback;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_collection_ListItemView;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager$1 = io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager$1;


function io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager$2() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager$2;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_api_AsyncRequest(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$collectionItems = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager$2_val$collectionItems'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager$2_val$collectionItems']; };
  m = c._val$searchKey = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager$2_val$searchKey'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager$2_val$searchKey']; };
    m = CLS.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2Ljava_util_List_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3, lcA4) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager$2_val$collectionItems'] = lcA3;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager$2_val$searchKey'] = lcA4;
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
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA4,"COLLECTION");
var stA0 = lcA3;var stA1 = "scopeGroup";var stA2 = (refs_io_cloudoffice_platform_cockpit_api_Session || (refs_io_cloudoffice_platform_cockpit_api_Session = vm.io_cloudoffice_platform_cockpit_api_Session(false)))['getCompany__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(stA2,"itemId");
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA3,"collectionType", "generic");
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager$2_val$collectionItems']);
var lcA5 = stA0;
    }
    X_82: for (;;) { IF: if (gt <= 82) {

var stI0 = invoker.hasNext__Z(lcA5);
if ((stI0) == 0) { gt = 155; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA5);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_collection_ListItemView']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.collection.ListItemView');
var lcA6 = stA0;
var stA0 = new vm.java_util_HashMap;
(refs_java_util_HashMap || (refs_java_util_HashMap = vm.java_util_HashMap(false))).constructor['cons__V'].call(stA0);
var lcA7 = stA0;
var stA0 = lcA7;var stA1 = "itemId";var stA2 = lcA6.getItemId__Ljava_lang_String_2();
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA7;var stA1 = "itemType";var stA2 = lcA6.getItemType__Ljava_lang_String_2();
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA2,lcA7);
{ gt = 0; continue X_82; }
    }
    X_155: for (;;) { IF: if (gt <= 155) {

var stA0 = lcA1;var stA1 = "searchKey";var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"'");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager$2_val$searchKey']);
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
    function io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager$2fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager$2', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager$2fillInstOf });
    io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager$2fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/collection/CollectionComponent$CollectionAdminManager$2';
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
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager$2_val$collectionItems'] = null;
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager$2_val$searchKey'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager$2 = io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionAdminManager$2;


function io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionToggleListener() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionToggleListener;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionToggleListener_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionToggleListener_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_collection_CollectionComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionToggleListener_this$0'] = lcA1;
return;

};
CLS['cons__VLio_cloudoffice_platform_cockpit_collection_CollectionComponent_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onReceive__VLio_cloudoffice_platform_cockpit_api_Signal_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getAction__Ljava_lang_String_2(lcA1);
var lcA2 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](lcA2);
if ((stI0) == 0) { gt = 57; break IF; }
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA2,"toggle");
if ((stI0) == 0) { gt = 57; break IF; }
var stA0 = invoker.getPackets__Ljava_util_List_2(lcA1);
var stA0 = invoker.get__Ljava_lang_Object_2I(stA0,0);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_api_MapBuilder']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.api.MapBuilder');
var lcA3 = stA0;
if ((null) === (lcA3)) { gt = 57; break IF; }
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionToggleListener_this$0'];var stA1 = "performToogle";var stA2 = invoker.toJSON__Ljava_lang_String_2(lcA3);
invoker.invoke__VLjava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
    }
    X_57: for (;;) { IF: if (gt <= 57) {
return;

    }
}}
};
c['onReceive__VLio_cloudoffice_platform_cockpit_api_Signal_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionToggleListenerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionToggleListener', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionToggleListenerfillInstOf });
    io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionToggleListenerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/collection/CollectionComponent$CollectionToggleListener';
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
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionToggleListener_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionToggleListener = registerClass(exports,'io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionToggleListener',io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionToggleListener);

vm.io_cloudoffice_platform_cockpit_api_EventListener = link('io/cloudoffice/platform/cockpit/api/EventListener', function(f) { vm.io_cloudoffice_platform_cockpit_api_EventListener =  f; });

function io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionHoverListener() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionHoverListener;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionHoverListener_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionHoverListener_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_collection_CollectionComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionHoverListener_this$0'] = lcA1;
return;

};
CLS['cons__VLio_cloudoffice_platform_cockpit_collection_CollectionComponent_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onReceive__VLio_cloudoffice_platform_cockpit_api_Signal_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getAction__Ljava_lang_String_2(lcA1);
var lcA2 = stA0;
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2'](lcA2);
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](lcA2);
if ((stI0) == 0) { gt = 158; break IF; }
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2'](lcA2);
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA2,"addtocollectionaction");
if ((stI0) == 0) { gt = 43; break IF; }
invoker.invoke__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionHoverListener_this$0'],"openActionHoverWithCollectionItemAddMode");
{ gt = 158; break IF; }
    }
    X_43: for (;;) { IF: if (gt <= 43) {

var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA2,"createnewcollectionaction");
if ((stI0) == 0) { gt = 69; break IF; }
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2']("createnewcollectionaction");
invoker.invoke__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionHoverListener_this$0'],"openActionHoverWithCollectionCreateMode");
{ gt = 158; break IF; }
    }
    X_69: for (;;) { IF: if (gt <= 69) {

var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA2,"createnewcollectionwithchildrenaction");
if ((stI0) == 0) { gt = 115; break IF; }
var stA0 = invoker.getPackets__Ljava_util_List_2(lcA1);
var stA0 = invoker.get__Ljava_lang_Object_2I(stA0,0);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_api_MapBuilder']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.api.MapBuilder');
var lcA3 = stA0;
if ((null) === (lcA3)) { gt = 112; break IF; }
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionHoverListener_this$0'];var stA1 = "createCollectionWithSelectedItems";var stA2 = invoker.toJSON__Ljava_lang_String_2(lcA3);
invoker.invoke__VLjava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
    }
    X_112: for (;;) { IF: if (gt <= 112) {
{ gt = 158; break IF; }
    }
    X_115: for (;;) { IF: if (gt <= 115) {

var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA2,"listdataaddtocollectionaction");
if ((stI0) == 0) { gt = 158; break IF; }
var stA0 = invoker.getPackets__Ljava_util_List_2(lcA1);
var stA0 = invoker.get__Ljava_lang_Object_2I(stA0,0);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_api_MapBuilder']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.api.MapBuilder');
var lcA3 = stA0;
if ((null) === (lcA3)) { gt = 158; break IF; }
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionHoverListener_this$0'];var stA1 = "makeRelationshipWithCollection";var stA2 = invoker.toJSON__Ljava_lang_String_2(lcA3);
invoker.invoke__VLjava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
    }
    X_158: for (;;) { IF: if (gt <= 158) {
return;

    }
}}}}}}
};
c['onReceive__VLio_cloudoffice_platform_cockpit_api_Signal_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionHoverListenerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionHoverListener', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionHoverListenerfillInstOf });
    io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionHoverListenerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/collection/CollectionComponent$CollectionHoverListener';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_EventListener(false).constructor.$class
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_Logger;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionHoverListener_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionHoverListener = registerClass(exports,'io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionHoverListener',io_cloudoffice_platform_cockpit_collection_CollectionComponent$CollectionHoverListener);


function io_cloudoffice_platform_cockpit_collection_CollectionComponent$FunctionInvokeListener() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_collection_CollectionComponent$FunctionInvokeListener;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$FunctionInvokeListener_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$FunctionInvokeListener_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_collection_CollectionComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$FunctionInvokeListener_this$0'] = lcA1;
return;

};
CLS['cons__VLio_cloudoffice_platform_cockpit_collection_CollectionComponent_2'] = m;

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
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$FunctionInvokeListener_this$0'];var stA1 = (refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false)))['valueOf__Ljava_lang_String_2Ljava_lang_Object_2'](lcA2);
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
    function io_cloudoffice_platform_cockpit_collection_CollectionComponent$FunctionInvokeListenerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_collection_CollectionComponent$FunctionInvokeListener', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_collection_CollectionComponent$FunctionInvokeListenerfillInstOf });
    io_cloudoffice_platform_cockpit_collection_CollectionComponent$FunctionInvokeListenerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/collection/CollectionComponent$FunctionInvokeListener';
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
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$FunctionInvokeListener_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_collection_CollectionComponent$FunctionInvokeListener = registerClass(exports,'io_cloudoffice_platform_cockpit_collection_CollectionComponent$FunctionInvokeListener',io_cloudoffice_platform_cockpit_collection_CollectionComponent$FunctionInvokeListener);


function io_cloudoffice_platform_cockpit_collection_CollectionComponent$DesignModeListener() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_collection_CollectionComponent$DesignModeListener;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$DesignModeListener_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$DesignModeListener_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_collection_CollectionComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$DesignModeListener_this$0'] = lcA1;
return;

};
CLS['cons__VLio_cloudoffice_platform_cockpit_collection_CollectionComponent_2'] = m;

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
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$DesignModeListener_this$0'];var stA1 = (refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false)))['valueOf__Ljava_lang_String_2Ljava_lang_Object_2'](lcA2);
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
    function io_cloudoffice_platform_cockpit_collection_CollectionComponent$DesignModeListenerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_collection_CollectionComponent$DesignModeListener', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_collection_CollectionComponent$DesignModeListenerfillInstOf });
    io_cloudoffice_platform_cockpit_collection_CollectionComponent$DesignModeListenerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/collection/CollectionComponent$DesignModeListener';
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
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$DesignModeListener_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_collection_CollectionComponent$DesignModeListener = registerClass(exports,'io_cloudoffice_platform_cockpit_collection_CollectionComponent$DesignModeListener',io_cloudoffice_platform_cockpit_collection_CollectionComponent$DesignModeListener);


function io_cloudoffice_platform_cockpit_collection_CollectionComponent$LoginEventListener() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_collection_CollectionComponent$LoginEventListener;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$LoginEventListener_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$LoginEventListener_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_collection_CollectionComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$LoginEventListener_this$0'] = lcA1;
return;

};
CLS['cons__VLio_cloudoffice_platform_cockpit_collection_CollectionComponent_2'] = m;

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
Array.at(stA0, 0, "collection");
(refs_io_cloudoffice_platform_cockpit_js_VIEW || (refs_io_cloudoffice_platform_cockpit_js_VIEW = vm.io_cloudoffice_platform_cockpit_js_VIEW(false)))['render__V_3Ljava_lang_String_2'](stA0);
var stA0 = invoker.getInstanceId__Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$LoginEventListener_this$0']);
var lcA2 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['configFetchEndpoint__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2']("collection", lcA2);
var stA2 = null;var stA3 = new io_cloudoffice_platform_cockpit_collection_CollectionComponent$LoginEventListener$1;
(refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$LoginEventListener$1 || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$LoginEventListener$1 = io_cloudoffice_platform_cockpit_collection_CollectionComponent$LoginEventListener$1(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_collection_CollectionComponent$LoginEventListener_2.call(stA3, lcA0);
invoker.fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

};
    m.access = 0;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_collection_CollectionComponent$LoginEventListenerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_collection_CollectionComponent$LoginEventListener', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_collection_CollectionComponent$LoginEventListenerfillInstOf });
    io_cloudoffice_platform_cockpit_collection_CollectionComponent$LoginEventListenerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/collection/CollectionComponent$LoginEventListener';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_EventListener(false).constructor.$class
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_js_VIEW;
    var refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration;
    var refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$LoginEventListener$1;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$LoginEventListener_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_collection_CollectionComponent$LoginEventListener = registerClass(exports,'io_cloudoffice_platform_cockpit_collection_CollectionComponent$LoginEventListener',io_cloudoffice_platform_cockpit_collection_CollectionComponent$LoginEventListener);


function io_cloudoffice_platform_cockpit_collection_CollectionComponent$LoginEventListener$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_collection_CollectionComponent$LoginEventListener$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$1 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$LoginEventListener$1_this$1'] = v; return this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$LoginEventListener$1_this$1']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_collection_CollectionComponent$LoginEventListener_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$LoginEventListener$1_this$1'] = lcA1;
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2'](lcA1);
var lcA2 = stA0;
var stA0 = new io_cloudoffice_platform_cockpit_collection_CollectionView;
(refs_io_cloudoffice_platform_cockpit_collection_CollectionView || (refs_io_cloudoffice_platform_cockpit_collection_CollectionView = io_cloudoffice_platform_cockpit_collection_CollectionView(false))).constructor.cons__V.call(stA0);
var lcA3 = stA0;
var stA0 = lcA3;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"instance");
stA0.setInstance__VLjava_lang_String_2(stA1);
var stA0 = lcA3.getCollectionListItemView__Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2();
var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"instance");
stA0.setInstance__VLjava_lang_String_2(stA1);
lcA3.setCollectionClass__VLjava_lang_String_2("collection");
c.prepareConfigurationModelFromJSON__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2.call(lcA0, lcA3, lcA2);
invoker.setView__VLjava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$LoginEventListener$1_this$1']['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$LoginEventListener_this$0'],lcA3);
var stA0 = invoker.getDefaultViewName__Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$LoginEventListener$1_this$1']['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$LoginEventListener_this$0']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['toRaw__Ljava_lang_Object_2Ljava_lang_Object_2'](lcA3);
(refs_io_cloudoffice_platform_cockpit_js_VIEW || (refs_io_cloudoffice_platform_cockpit_js_VIEW = vm.io_cloudoffice_platform_cockpit_js_VIEW(false)))['bind__VLjava_lang_String_2Ljava_lang_Object_2'](stA0, stA1);
return;

};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.prepareConfigurationModelFromJSON__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getJsonObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA2,"configuration");
var lcA3 = stA0;
var stA0 = lcA1.getConfiguration__Lio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2();
var lcA4 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA3,"collectionListType");
var lcA5 = stA0;
lcA1.setCollectionListType__VLjava_lang_String_2(lcA5);
lcA4.setCollectionListType__VLjava_lang_String_2(lcA5);
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA3,"layoutRowId");
var lcA6 = stA0;
lcA1.setLayoutRowId__VLjava_lang_String_2(lcA6);
lcA4.setLayoutRowId__VLjava_lang_String_2(lcA6);
c.prepareTalkToComponent__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2Lorg_json_JSONObject_2.call(lcA0, lcA1, lcA3);
var stA0 = invoker.getJSONArray__Lorg_json_JSONArray_2Ljava_lang_String_2(lcA3,"collectionItemList");
var stA0 = invoker.toList__Ljava_util_List_2(stA0);
var lcA7 = stA0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA7);
var lcA8 = stA0;
    }
    X_81: for (;;) { IF: if (gt <= 81) {

var stI0 = invoker.hasNext__Z(lcA8);
if ((stI0) == 0) { gt = 195; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA8);
var lcA9 = stA0;
if (lcA9 !== null && !lcA9['$instOf_java_util_Map']) vm.java_lang_Class(false).castEx(lcA9, 'java.util.Map');
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_util_Map_2'](lcA9);
var lcA10 = stA0;
var stA0 = new io_cloudoffice_platform_cockpit_collection_ListItemView;
(refs_io_cloudoffice_platform_cockpit_collection_ListItemView || (refs_io_cloudoffice_platform_cockpit_collection_ListItemView = io_cloudoffice_platform_cockpit_collection_ListItemView(false))).constructor.cons__V.call(stA0);
var lcA11 = stA0;
var stA0 = lcA11;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA10,"itemId");
stA0.setItemId__VLjava_lang_String_2(stA1);
var stA0 = lcA11;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA10,"itemName");
stA0.setItemName__VLjava_lang_String_2(stA1);
var stA0 = lcA11;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA10,"itemType");
stA0.setItemType__VLjava_lang_String_2(stA1);
var stA0 = lcA11;var stA1 = (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$ListItemViewModel || (refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$ListItemViewModel = io_cloudoffice_platform_cockpit_collection_CollectionComponent$ListItemViewModel(false))).shortCollectionName__Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_collection_ListItemView_2(lcA11);
stA0.setItemShortName__VLjava_lang_String_2(stA1);
var stA0 = lcA1.getConfiguration__Lio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2();
var stA0 = stA0.getCollectionItemList__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA11);
var stA0 = lcA1.getCollectionItemList__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA11);
{ gt = 0; continue X_81; }
    }
    X_195: for (;;) { IF: if (gt <= 195) {
return;

    }
}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.prepareTalkToComponent__VLio_cloudoffice_platform_cockpit_collection_CollectionView_2Lorg_json_JSONObject_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = lcA1.getListComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA2 = invoker.getJSONObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA2,"listComponentDefinition");
c.configureDef__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2Lorg_json_JSONObject_2.call(stA0, stA1, stA2);
var stA0 = lcA0;var stA1 = lcA1.getConfiguration__Lio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2();
var stA1 = stA1.getListComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA2 = invoker.getJSONObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA2,"listComponentDefinition");
c.configureDef__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2Lorg_json_JSONObject_2.call(stA0, stA1, stA2);
var stA0 = lcA0;var stA1 = lcA1.getCollectionListItemView__Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2();
var stA1 = stA1.getListComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA2 = invoker.getJSONObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA2,"listComponentDefinition");
c.configureDef__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2Lorg_json_JSONObject_2.call(stA0, stA1, stA2);
var stA0 = lcA0;var stA1 = lcA1.getRelatedItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA2 = invoker.getJSONObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA2,"relatedItemComponentDefinition");
c.configureDef__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2Lorg_json_JSONObject_2.call(stA0, stA1, stA2);
var stA0 = lcA0;var stA1 = lcA1.getConfiguration__Lio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2();
var stA1 = stA1.getRelatedItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA2 = invoker.getJSONObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA2,"relatedItemComponentDefinition");
c.configureDef__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2Lorg_json_JSONObject_2.call(stA0, stA1, stA2);
var stA0 = lcA0;var stA1 = lcA1.getCollectionListItemView__Lio_cloudoffice_platform_cockpit_collection_CollectionListItemView_2();
var stA1 = stA1.getRelatedItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA2 = invoker.getJSONObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA2,"relatedItemComponentDefinition");
c.configureDef__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2Lorg_json_JSONObject_2.call(stA0, stA1, stA2);
var stA0 = lcA0;var stA1 = lcA1.getNewItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA2 = invoker.getJSONObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA2,"newItemComponentDefinition");
c.configureDef__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2Lorg_json_JSONObject_2.call(stA0, stA1, stA2);
var stA0 = lcA0;var stA1 = lcA1.getConfiguration__Lio_cloudoffice_platform_cockpit_collection_CollectionConfiguration_2();
var stA1 = stA1.getNewItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA2 = invoker.getJSONObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA2,"newItemComponentDefinition");
c.configureDef__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2Lorg_json_JSONObject_2.call(stA0, stA1, stA2);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.configureDef__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2Lorg_json_JSONObject_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"instanceId");
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2'](stA0);
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"component");
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2'](stA0);
var stA0 = lcA1;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"instanceId");
invoker.setInstanceId__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA1;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"component");
invoker.setComponent__VLjava_lang_String_2(stA0,stA1);
return;

};
    m.access = 2;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_collection_CollectionComponent$LoginEventListener$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_collection_CollectionComponent$LoginEventListener$1', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_collection_CollectionComponent$LoginEventListener$1fillInstOf });
    io_cloudoffice_platform_cockpit_collection_CollectionComponent$LoginEventListener$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/collection/CollectionComponent$LoginEventListener$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65568;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_collection_CollectionView;
    var refs_net_java_html_json_Models;
    var refs_io_cloudoffice_platform_cockpit_js_VIEW;
    var refs_io_cloudoffice_platform_cockpit_collection_ListItemView;
    var refs_io_cloudoffice_platform_cockpit_collection_CollectionComponent$ListItemViewModel;
    var refs_io_cloudoffice_platform_cockpit_api_Logger;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_collection_CollectionComponent$LoginEventListener$1_this$1'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_collection_CollectionComponent$LoginEventListener$1 = io_cloudoffice_platform_cockpit_collection_CollectionComponent$LoginEventListener$1;

vm.io_cloudoffice_platform_cockpit_api_AbstractComponent = link('io/cloudoffice/platform/cockpit/api/AbstractComponent', function(f) { vm.io_cloudoffice_platform_cockpit_api_AbstractComponent =  f; });
vm.io_cloudoffice_platform_cockpit_api_UtilValidate = link('io/cloudoffice/platform/cockpit/api/UtilValidate', function(f) { vm.io_cloudoffice_platform_cockpit_api_UtilValidate =  f; });
vm.io_cloudoffice_platform_cockpit_api_ServerCallback = link('io/cloudoffice/platform/cockpit/api/ServerCallback', function(f) { vm.io_cloudoffice_platform_cockpit_api_ServerCallback =  f; });

function io_cloudoffice_platform_cockpit_collection_CollectionConfiguration$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_collection_CollectionConfiguration$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_collection_CollectionConfiguration$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_collection_CollectionConfiguration$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_collection_CollectionConfiguration$1fillInstOf });
    io_cloudoffice_platform_cockpit_collection_CollectionConfiguration$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/collection/CollectionConfiguration$1';
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
vm.io_cloudoffice_platform_cockpit_collection_CollectionConfiguration$1 = io_cloudoffice_platform_cockpit_collection_CollectionConfiguration$1;


function io_cloudoffice_platform_cockpit_collection_CollectionListItemView$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_collection_CollectionListItemView$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_collection_CollectionListItemView$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_collection_CollectionListItemView$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_collection_CollectionListItemView$1fillInstOf });
    io_cloudoffice_platform_cockpit_collection_CollectionListItemView$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/collection/CollectionListItemView$1';
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
vm.io_cloudoffice_platform_cockpit_collection_CollectionListItemView$1 = io_cloudoffice_platform_cockpit_collection_CollectionListItemView$1;


function io_cloudoffice_platform_cockpit_collection_CollectionView$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_collection_CollectionView$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_collection_CollectionView$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_collection_CollectionView$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_collection_CollectionView$1fillInstOf });
    io_cloudoffice_platform_cockpit_collection_CollectionView$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/collection/CollectionView$1';
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
vm.io_cloudoffice_platform_cockpit_collection_CollectionView$1 = io_cloudoffice_platform_cockpit_collection_CollectionView$1;


function io_cloudoffice_platform_cockpit_collection_ListItemView$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_collection_ListItemView$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_collection_ListItemView$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_collection_ListItemView$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_collection_ListItemView$1fillInstOf });
    io_cloudoffice_platform_cockpit_collection_ListItemView$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/collection/ListItemView$1';
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
vm.io_cloudoffice_platform_cockpit_collection_ListItemView$1 = io_cloudoffice_platform_cockpit_collection_ListItemView$1;

  invoker.getRequest__Lio_cloudoffice_platform_cockpit_api_AsyncRequest_2 = function(target) {
    return target['getRequest__Lio_cloudoffice_platform_cockpit_api_AsyncRequest_2']();
  };
  invoker.getView__Ljava_lang_Object_2 = function(target) {
    return target['getView__Ljava_lang_Object_2']();
  };
  invoker.clear__V = function(target) {
    return target['clear__V']();
  };
  invoker.getString__Ljava_lang_String_2Ljava_lang_String_2 = function(target, p1) {
    return target['getString__Ljava_lang_String_2Ljava_lang_String_2'](p1);
  };
  invoker.add__ZLjava_lang_Object_2 = function(target, p1) {
    return target['add__ZLjava_lang_Object_2'](p1);
  };
  invoker.split___3Ljava_lang_String_2Ljava_lang_String_2 = function(target, p1) {
    return target['split___3Ljava_lang_String_2Ljava_lang_String_2'](p1);
  };
  invoker.length__I = function(target) {
    return target['length__I']();
  };
  invoker.substring__Ljava_lang_String_2II = function(target, p1, p2) {
    return target['substring__Ljava_lang_String_2II'](p1,p2);
  };
  invoker.concat__Ljava_lang_String_2Ljava_lang_String_2 = function(target, p1) {
    return target['concat__Ljava_lang_String_2Ljava_lang_String_2'](p1);
  };
  invoker.toUpperCase__Ljava_lang_String_2 = function(target) {
    return target['toUpperCase__Ljava_lang_String_2']();
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
  invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2 = function(target, p1) {
    return target['append__Ljava_lang_StringBuilder_2Ljava_lang_String_2'](p1);
  };
  invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2 = function(target, p1) {
    return target['toJSON__Ljava_lang_String_2Ljava_lang_Object_2'](p1);
  };
  invoker.toString__Ljava_lang_String_2 = function(target) {
    return target['toString__Ljava_lang_String_2']();
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
  invoker.registerProperty__VLjava_lang_String_2IZZ = function(target, p1, p2, p3, p4) {
    return target['registerProperty__VLjava_lang_String_2IZZ'](p1,p2,p3,p4);
  };
  invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2 = function(target, p1, p2) {
    return target['extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2'](p1,p2);
  };
  invoker.append__Ljava_lang_StringBuilder_2I = function(target, p1) {
    return target['append__Ljava_lang_StringBuilder_2I'](p1);
  };
  invoker.attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2 = function(target, p1, p2) {
    return target['attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2'](p1,p2);
  };
  invoker.setDefaultViewName__VLjava_lang_String_2 = function(target, p1) {
    return target['setDefaultViewName__VLjava_lang_String_2'](p1);
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
  invoker.call__VLio_cloudoffice_platform_cockpit_api_ServerCallback_2 = function(target, p1) {
    return target['call__VLio_cloudoffice_platform_cockpit_api_ServerCallback_2'](p1);
  };
  invoker.getList__Ljava_util_List_2Ljava_lang_String_2 = function(target, p1) {
    return target['getList__Ljava_util_List_2Ljava_lang_String_2'](p1);
  };
  invoker.setActive__VZ = function(target, p1) {
    return target['setActive__VZ'](p1);
  };
  invoker.equals__ZLjava_lang_Object_2 = function(target, p1) {
    return target['equals__ZLjava_lang_Object_2'](p1);
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
  invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2 = function(target, p1, p2) {
    return target['addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2'](p1,p2);
  };
  invoker.addAll__ZLjava_util_Collection_2 = function(target, p1) {
    return target['addAll__ZLjava_util_Collection_2'](p1);
  };
  invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_util_List_2 = function(target, p1, p2) {
    return target['addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_util_List_2'](p1,p2);
  };
  invoker.toJSON__Ljava_lang_String_2 = function(target) {
    return target['toJSON__Ljava_lang_String_2']();
  };
  invoker.call__V = function(target) {
    return target['call__V']();
  };
  invoker.post__VLjava_lang_String_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_api_CallBack_2 = function(target, p1, p2, p3) {
    return target['post__VLjava_lang_String_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_api_CallBack_2'](p1,p2,p3);
  };
  invoker.fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2 = function(target, p1, p2, p3) {
    return target['fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2'](p1,p2,p3);
  };
  invoker.addFieldMapList__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_util_List_2 = function(target, p1, p2) {
    return target['addFieldMapList__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_util_List_2'](p1,p2);
  };
  invoker.getArray__Ljava_util_List_2 = function(target) {
    return target['getArray__Ljava_util_List_2']();
  };
  invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2 = function(target, p1) {
    return target['get__Ljava_lang_Object_2Ljava_lang_Object_2'](p1);
  };
  invoker.isEmpty__Z = function(target) {
    return target['isEmpty__Z']();
  };
  invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(target, p1, p2) {
    return target['put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2'](p1,p2);
  };
  invoker.getRequestparameters__Ljava_lang_String_2 = function(target) {
    return target['getRequestparameters__Ljava_lang_String_2']();
  };
  invoker.getBoolean__ZLjava_lang_String_2 = function(target, p1) {
    return target['getBoolean__ZLjava_lang_String_2'](p1);
  };
  invoker.getEndpoint__Ljava_lang_String_2 = function(target) {
    return target['getEndpoint__Ljava_lang_String_2']();
  };
  invoker.put__VLjava_lang_String_2Ljava_lang_Object_2 = function(target, p1, p2) {
    return target['put__VLjava_lang_String_2Ljava_lang_Object_2'](p1,p2);
  };
  invoker.getJsonObject__Lorg_json_JSONObject_2Ljava_lang_String_2 = function(target, p1) {
    return target['getJsonObject__Lorg_json_JSONObject_2Ljava_lang_String_2'](p1);
  };
  invoker.getJSONObject__Lorg_json_JSONObject_2Ljava_lang_String_2 = function(target, p1) {
    return target['getJSONObject__Lorg_json_JSONObject_2Ljava_lang_String_2'](p1);
  };
  invoker.getJSONArray__Lorg_json_JSONArray_2Ljava_lang_String_2 = function(target, p1) {
    return target['getJSONArray__Lorg_json_JSONArray_2Ljava_lang_String_2'](p1);
  };
  invoker.toList__Ljava_util_List_2 = function(target) {
    return target['toList__Ljava_util_List_2']();
  };
  invoker.setInstanceId__VLjava_lang_String_2 = function(target, p1) {
    return target['setInstanceId__VLjava_lang_String_2'](p1);
  };
  invoker.setComponent__VLjava_lang_String_2 = function(target, p1) {
    return target['setComponent__VLjava_lang_String_2'](p1);
  };
  invoker.setPageNumber__VI = function(target, p1) {
    return target['setPageNumber__VI'](p1);
  };
  invoker.getFromClause__Ljava_util_List_2 = function(target) {
    return target['getFromClause__Ljava_util_List_2']();
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
  invoker.getClauses__Ljava_util_List_2 = function(target) {
    return target['getClauses__Ljava_util_List_2']();
  };
  invoker.getOrClauseGroups__Ljava_util_List_2 = function(target) {
    return target['getOrClauseGroups__Ljava_util_List_2']();
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
  invoker.remove__ZLjava_lang_Object_2 = function(target, p1) {
    return target['remove__ZLjava_lang_Object_2'](p1);
  };
  invoker.getLong__JLjava_lang_String_2 = function(target, p1) {
    return target['getLong__JLjava_lang_String_2'](p1);
  };
  invoker.getAction__Ljava_lang_String_2 = function(target) {
    return target['getAction__Ljava_lang_String_2']();
  };
  invoker.getPackets__Ljava_util_List_2 = function(target) {
    return target['getPackets__Ljava_util_List_2']();
  };
  invoker.get__Ljava_lang_Object_2I = function(target, p1) {
    return target['get__Ljava_lang_Object_2I'](p1);
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
  exports['registerResource']('META-INF/MANIFEST.MF', 'TWFuaWZlc3QtVmVyc2lvbjogMS4wDQpCbmQtTGFzdE1vZGlmaWVkOiAxNTk3NzY0MDUzNzQ2DQpCdWlsZC1KZGs6IDEuOC4wXzEzMQ0KQnVpbHQtQnk6IGV1c2lhDQpCdW5kbGUtTWFuaWZlc3RWZXJzaW9uOiAyDQpCdW5kbGUtTmFtZTogR2FkZ2V0IENvbGxlY3Rpb24NCkJ1bmRsZS1TeW1ib2xpY05hbWU6IGlvLmNsb3Vkb2ZmaWNlLnBsYXRmb3JtLmNvY2twaXQuY29sbGVjdGlvbg0KQnVuZGxlLVZlcnNpb246IDEuMS4wDQpDcmVhdGVkLUJ5OiBBcGFjaGUgTWF2ZW4gQnVuZGxlIFBsdWdpbg0KRXhwb3J0LVBhY2thZ2U6IGlvLmNsb3Vkb2ZmaWNlLnBsYXRmb3JtLmNvY2twaXQuY29sbGVjdGlvbjt1c2VzOj0iaW8uY2xvDQogdWRvZmZpY2UucGxhdGZvcm0uY29ja3BpdC5hcGkiO3ZlcnNpb249IjEuMS4wIg0KSW1wb3J0LVBhY2thZ2U6IGlvLmNsb3Vkb2ZmaWNlLnBsYXRmb3JtLmNvY2twaXQuYXBpO3ZlcnNpb249IlsxLjEsMikiLGlvDQogLmNsb3Vkb2ZmaWNlLnBsYXRmb3JtLmNvY2twaXQuanM7dmVyc2lvbj0iWzEuMSwyKSIsbmV0LmphdmEuaHRtbDt2ZXJzaW8NCiBuPSJbMS42LDIpIixuZXQuamF2YS5odG1sLmpzb247dmVyc2lvbj0iWzEuNiwyKSIsb3JnLmpzb247dmVyc2lvbj0iWzIwMQ0KIDgwODEzLjAsMjAxODA4MTQpIixvcmcubmV0YmVhbnMuaHRtbC5qc29uLnNwaTt2ZXJzaW9uPSJbMS42LDIpIg0KVG9vbDogQm5kLTIuMS4wLjIwMTMwNDI2LTEyMjIxMw0K');
});