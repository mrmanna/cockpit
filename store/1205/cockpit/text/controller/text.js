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

function io_cloudoffice_platform_cockpit_text_TextComponent$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_text_TextComponent$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$view = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_text_TextComponent$1_val$view'] = v; return this['fld_io_cloudoffice_platform_cockpit_text_TextComponent$1_val$view']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_text_TextView_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextComponent$1_val$view'] = lcA1;
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2']("Save Callback");
c.runtimeViewAdjustmentByConfiguration__VLio_cloudoffice_platform_cockpit_text_TextView_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_text_TextComponent$1_val$view']);
(refs_io_cloudoffice_platform_cockpit_text_TextComponent || (refs_io_cloudoffice_platform_cockpit_text_TextComponent = io_cloudoffice_platform_cockpit_text_TextComponent(false))).closeConfigurationPanel__VLio_cloudoffice_platform_cockpit_text_TextView_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextComponent$1_val$view']);
return;

};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.runtimeViewAdjustmentByConfiguration__VLio_cloudoffice_platform_cockpit_text_TextView_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA1.getConfiguration__Lio_cloudoffice_platform_cockpit_text_TextConfiguration_2();
var lcA2 = stA0;
var stA0 = lcA1;var stI1 = lcA2.isDisplayTextItem__Z();
stA0.setDisplayTextItem__VZ(stI1);
var stA0 = lcA2.getSelectedTextItems__Ljava_util_List_2();
var lcA3 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isEmpty__ZLjava_util_Collection_2'](lcA3);
if ((stI0) == 0) { gt = 39; break IF; }
var stA0 = lcA1;var stA1 = new io_cloudoffice_platform_cockpit_text_TextItemView;
(refs_io_cloudoffice_platform_cockpit_text_TextItemView || (refs_io_cloudoffice_platform_cockpit_text_TextItemView = io_cloudoffice_platform_cockpit_text_TextItemView(false))).constructor.cons__V.call(stA1);
stA0.setTextItem__VLio_cloudoffice_platform_cockpit_text_TextItemView_2(stA1);
{ gt = 53; break IF; }
    }
    X_39: for (;;) { IF: if (gt <= 39) {

var stA0 = lcA1;var stA1 = invoker.get__Ljava_lang_Object_2I(lcA3,0);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_text_TextItemView']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.text.TextItemView');
stA0.setTextItem__VLio_cloudoffice_platform_cockpit_text_TextItemView_2(stA1);
    }
    X_53: for (;;) { IF: if (gt <= 53) {
return;

    }
}}}
};
    m.access = 2;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_text_TextComponent$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_text_TextComponent$1', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_text_TextComponent$1fillInstOf });
    io_cloudoffice_platform_cockpit_text_TextComponent$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/text/TextComponent$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_Logger;
    var refs_io_cloudoffice_platform_cockpit_text_TextComponent;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_io_cloudoffice_platform_cockpit_text_TextItemView;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_text_TextComponent$1_val$view'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_text_TextComponent$1 = io_cloudoffice_platform_cockpit_text_TextComponent$1;

vm.io_cloudoffice_platform_cockpit_api_CallBack = link('io/cloudoffice/platform/cockpit/api/CallBack', function(f) { vm.io_cloudoffice_platform_cockpit_api_CallBack =  f; });

function io_cloudoffice_platform_cockpit_text_TextItemView() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_text_TextItemView;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_text_TextItemView_proto'] = v; return this['fld_io_cloudoffice_platform_cockpit_text_TextItemView_proto']; };
  m = c._prop_itemId = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_itemId'] = v; return this['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_itemId']; };
  m = c._prop_itemName = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_itemName'] = v; return this['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_itemName']; };
  m = c._prop_itemType = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_itemType'] = v; return this['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_itemType']; };
  m = c._prop_itemUserId = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_itemUserId'] = v; return this['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_itemUserId']; };
  m = c._prop_itemText = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_itemText'] = v; return this['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_itemText']; };
  m = c._prop_hasOwnerPermission = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_hasOwnerPermission'] = v; return this['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_hasOwnerPermission']; };
  m = c._prop_hasAdminPermission = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_hasAdminPermission'] = v; return this['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_hasAdminPermission']; };
  m = c._prop_hasWritePermission = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_hasWritePermission'] = v; return this['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_hasWritePermission']; };
  m = c._prop_hasReadPermission = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_hasReadPermission'] = v; return this['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_hasReadPermission']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_io_cloudoffice_platform_cockpit_text_TextComponent$TextItemModel || (refs_io_cloudoffice_platform_cockpit_text_TextComponent$TextItemModel = io_cloudoffice_platform_cockpit_text_TextComponent$TextItemModel(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.getItemId__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_proto'],"itemId");
return lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_itemId'];

};
c['getItemId__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemId__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_itemId'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_itemId'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_proto'],"itemId", lcA2, lcA1);
return;

    }
}}
};
c['setItemId__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getItemName__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_proto'],"itemName");
return lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_itemName'];

};
c['getItemName__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemName__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_itemName'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_itemName'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_proto'],"itemName", lcA2, lcA1);
return;

    }
}}
};
c['setItemName__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getItemType__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_proto'],"itemType");
return lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_itemType'];

};
c['getItemType__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemType__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_itemType'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_itemType'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_proto'],"itemType", lcA2, lcA1);
return;

    }
}}
};
c['setItemType__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getItemUserId__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_proto'],"itemUserId");
return lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_itemUserId'];

};
c['getItemUserId__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemUserId__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_itemUserId'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_itemUserId'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_proto'],"itemUserId", lcA2, lcA1);
return;

    }
}}
};
c['setItemUserId__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getItemText__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_proto'],"itemText");
return lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_itemText'];

};
c['getItemText__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemText__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_itemText'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_itemText'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_proto'],"itemText", lcA2, lcA1);
return;

    }
}}
};
c['setItemText__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isHasOwnerPermission__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_proto'],"hasOwnerPermission");
return lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_hasOwnerPermission'];

};
c['isHasOwnerPermission__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setHasOwnerPermission__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_hasOwnerPermission']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_hasOwnerPermission'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_proto'];var stA1 = "hasOwnerPermission";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
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
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_proto'],"hasAdminPermission");
return lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_hasAdminPermission'];

};
c['isHasAdminPermission__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setHasAdminPermission__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_hasAdminPermission']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_hasAdminPermission'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_proto'];var stA1 = "hasAdminPermission";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
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
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_proto'],"hasWritePermission");
return lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_hasWritePermission'];

};
c['isHasWritePermission__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setHasWritePermission__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_hasWritePermission']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_hasWritePermission'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_proto'];var stA1 = "hasWritePermission";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
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
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_proto'],"hasReadPermission");
return lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_hasReadPermission'];

};
c['isHasReadPermission__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setHasReadPermission__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_hasReadPermission']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_hasReadPermission'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_proto'];var stA1 = "hasReadPermission";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
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
stA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_proto'] = stA1;
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
    m = CLS.cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2ZZZZ = function(lcA1, lcA2, lcA3, lcA4, lcA5, lcI6, lcI7, lcI8, lcI9) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_itemId'] = lcA1;
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_itemName'] = lcA2;
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_itemType'] = lcA3;
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_itemUserId'] = lcA4;
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_itemText'] = lcA5;
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_hasOwnerPermission'] = lcI6;
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_hasAdminPermission'] = lcI7;
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_hasWritePermission'] = lcI8;
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_hasReadPermission'] = lcI9;
return;

};
CLS['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2ZZZZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, (9));
var lcA3 = stA0;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, (9));
Array.at(stA2, 0, "itemId");
Array.at(stA2, 1, "itemName");
Array.at(stA2, 2, "itemType");
Array.at(stA2, 3, "itemUserId");
Array.at(stA2, 4, "itemText");
Array.at(stA2, 5, "hasOwnerPermission");
Array.at(stA2, (6), "hasAdminPermission");
Array.at(stA2, (7), "hasWritePermission");
Array.at(stA2, (8), "hasReadPermission");
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
if ((lcA3[0] || Array.at(lcA3, 0)) !== null && !(lcA3[0] || Array.at(lcA3, 0))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[0] || Array.at(lcA3, 0)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_itemId'] = (lcA3[0] || Array.at(lcA3, 0));
if ((lcA3[1] || Array.at(lcA3, 1)) !== null && !(lcA3[1] || Array.at(lcA3, 1))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[1] || Array.at(lcA3, 1)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_itemName'] = (lcA3[1] || Array.at(lcA3, 1));
if ((lcA3[2] || Array.at(lcA3, 2)) !== null && !(lcA3[2] || Array.at(lcA3, 2))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[2] || Array.at(lcA3, 2)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_itemType'] = (lcA3[2] || Array.at(lcA3, 2));
if ((lcA3[3] || Array.at(lcA3, 3)) !== null && !(lcA3[3] || Array.at(lcA3, 3))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[3] || Array.at(lcA3, 3)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_itemUserId'] = (lcA3[3] || Array.at(lcA3, 3));
if ((lcA3[4] || Array.at(lcA3, 4)) !== null && !(lcA3[4] || Array.at(lcA3, 4))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[4] || Array.at(lcA3, 4)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_itemText'] = (lcA3[4] || Array.at(lcA3, 4));
var stA0 = lcA0;if (((lcA3[5] || Array.at(lcA3, 5))) !== null) { gt = 134; break IF; }
var stI1 = 0;{ gt = 146; break IF; }
    }
    X_134: for (;;) { IF: if (gt <= 134) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[5] || Array.at(lcA3, 5)));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_146: for (;;) { IF: if (gt <= 146) {
stA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_hasOwnerPermission'] = stI1;
var stA0 = lcA0;if (((lcA3[(6)] || Array.at(lcA3, (6)))) !== null) { gt = 161; break IF; }
var stI1 = 0;{ gt = 174; break IF; }
    }
    X_161: for (;;) { IF: if (gt <= 161) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(6)] || Array.at(lcA3, (6))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_174: for (;;) { IF: if (gt <= 174) {
stA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_hasAdminPermission'] = stI1;
var stA0 = lcA0;if (((lcA3[(7)] || Array.at(lcA3, (7)))) !== null) { gt = 189; break IF; }
var stI1 = 0;{ gt = 202; break IF; }
    }
    X_189: for (;;) { IF: if (gt <= 189) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(7)] || Array.at(lcA3, (7))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_202: for (;;) { IF: if (gt <= 202) {
stA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_hasWritePermission'] = stI1;
var stA0 = lcA0;if (((lcA3[(8)] || Array.at(lcA3, (8)))) !== null) { gt = 217; break IF; }
var stI1 = 0;{ gt = 230; break IF; }
    }
    X_217: for (;;) { IF: if (gt <= 217) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(8)] || Array.at(lcA3, (8))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_230: for (;;) { IF: if (gt <= 230) {
stA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_hasReadPermission'] = stI1;
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"itemUserId");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getItemUserId__Ljava_lang_String_2();
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
    m = c.clone__Lio_cloudoffice_platform_cockpit_text_TextItemView_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_proto']);
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_text_TextItemView_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lio_cloudoffice_platform_cockpit_text_TextItemView_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_text_TextItemView_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_text_TextItemView;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = lcA0.getItemId__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_itemId'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getItemName__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_itemName'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getItemType__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_itemType'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getItemUserId__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_itemUserId'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getItemText__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_itemText'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isHasOwnerPermission__Z();
stA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_hasOwnerPermission'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isHasAdminPermission__Z();
stA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_hasAdminPermission'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isHasWritePermission__Z();
stA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_hasWritePermission'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isHasReadPermission__Z();
stA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_hasReadPermission'] = stI1;
return lcA2;

};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lio_cloudoffice_platform_cockpit_text_TextItemView_2 = function() {
  var  lcA0 = this;
invoker.applyBindings__V(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_proto']);
return lcA0;

};
c['applyBindings__Lio_cloudoffice_platform_cockpit_text_TextItemView_2'] = m;

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

var stI0 = lcA1 != null && lcA1['$instOf_io_cloudoffice_platform_cockpit_text_TextItemView'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_text_TextItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.text.TextItemView');
var lcA2 = lcA1;
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_itemId'], lcA2['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_itemId']);
if ((stI0) != 0) { gt = 40; break IF; }
return 0;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_itemName'], lcA2['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_itemName']);
if ((stI0) != 0) { gt = 59; break IF; }
return 0;
    }
    X_59: for (;;) { IF: if (gt <= 59) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_itemType'], lcA2['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_itemType']);
if ((stI0) != 0) { gt = 78; break IF; }
return 0;
    }
    X_78: for (;;) { IF: if (gt <= 78) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_itemUserId'], lcA2['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_itemUserId']);
if ((stI0) != 0) { gt = 97; break IF; }
return 0;
    }
    X_97: for (;;) { IF: if (gt <= 97) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_itemText'], lcA2['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_itemText']);
if ((stI0) != 0) { gt = 116; break IF; }
return 0;
    }
    X_116: for (;;) { IF: if (gt <= 116) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_hasOwnerPermission']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_hasOwnerPermission']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 141; break IF; }
return 0;
    }
    X_141: for (;;) { IF: if (gt <= 141) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_hasAdminPermission']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_hasAdminPermission']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 166; break IF; }
return 0;
    }
    X_166: for (;;) { IF: if (gt <= 166) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_hasWritePermission']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_hasWritePermission']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 191; break IF; }
return 0;
    }
    X_191: for (;;) { IF: if (gt <= 191) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_hasReadPermission']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_hasReadPermission']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 216; break IF; }
return 0;
    }
    X_216: for (;;) { IF: if (gt <= 216) {

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
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_itemId'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_itemName'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_itemType'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_itemUserId'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_itemText'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_hasOwnerPermission']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_hasAdminPermission']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_hasWritePermission']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_hasReadPermission']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
return lcI1;

};
c['hashCode__I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Ljava_lang_Object_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0.clone__Lio_cloudoffice_platform_cockpit_text_TextItemView_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lio_cloudoffice_platform_cockpit_text_TextItemView$Html4JavaType_2 = function() {
return c._TYPE();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_text_TextItemView_2 = function(lcA0) {
return lcA0['fld_io_cloudoffice_platform_cockpit_text_TextItemView_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_text_TextItemView$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lio_cloudoffice_platform_cockpit_text_TextItemView_2Lio_cloudoffice_platform_cockpit_text_TextItemView_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_text_TextItemView_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_text_TextItemView$Html4JavaType;
(refs_io_cloudoffice_platform_cockpit_text_TextItemView$Html4JavaType || (refs_io_cloudoffice_platform_cockpit_text_TextItemView$Html4JavaType = io_cloudoffice_platform_cockpit_text_TextItemView$Html4JavaType(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_text_TextItemView$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_text_TextItemViewfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_text_TextItemView', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_text_TextItemViewfillInstOf });
    io_cloudoffice_platform_cockpit_text_TextItemViewfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/text/TextItemView';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_text_TextComponent$TextItemModel;
    var refs_java_lang_Boolean;
    var refs_net_java_html_BrwsrCtx;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_text_TextItemView$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_text_TextItemView_proto'] = null;
    this['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_itemId'] = null;
    this['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_itemName'] = null;
    this['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_itemType'] = null;
    this['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_itemUserId'] = null;
    this['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_itemText'] = null;
    this['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_hasOwnerPermission'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_hasAdminPermission'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_hasWritePermission'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_text_TextItemView_prop_hasReadPermission'] = 0;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_text_TextItemView = registerClass(exports,'io_cloudoffice_platform_cockpit_text_TextItemView',io_cloudoffice_platform_cockpit_text_TextItemView);

vm.java_lang_Cloneable = link('java/lang/Cloneable', function(f) { vm.java_lang_Cloneable =  f; });

function io_cloudoffice_platform_cockpit_text_TextItemView$Html4JavaType() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_text_TextItemView$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_io_cloudoffice_platform_cockpit_text_TextItemView || (refs_io_cloudoffice_platform_cockpit_text_TextItemView = io_cloudoffice_platform_cockpit_text_TextItemView(false))).constructor.$class, (refs_io_cloudoffice_platform_cockpit_text_TextComponent$TextItemModel || (refs_io_cloudoffice_platform_cockpit_text_TextComponent$TextItemModel = io_cloudoffice_platform_cockpit_text_TextComponent$TextItemModel(false))).constructor.$class, (9), 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemId", 0, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemName", 1, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemType", 2, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemUserId", 3, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemText", 4, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"hasOwnerPermission", 5, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"hasAdminPermission", (6), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"hasWritePermission", (7), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"hasReadPermission", (8), 0, 0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLio_cloudoffice_platform_cockpit_text_TextItemView_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 52; break IF; }
  case 1:{ gt = 69; break IF; }
  case 2:{ gt = 86; break IF; }
  case 3:{ gt = 103; break IF; }
  case 4:{ gt = 120; break IF; }
  case 5:{ gt = 137; break IF; }
  case 6:{ gt = 157; break IF; }
  case 7:{ gt = 177; break IF; }
  case 8:{ gt = 197; break IF; }
  default: { gt = 217; break IF; }
}
    }
    X_52: for (;;) { IF: if (gt <= 52) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_text_TextItemView || (refs_io_cloudoffice_platform_cockpit_text_TextItemView = io_cloudoffice_platform_cockpit_text_TextItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_text_TextItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemId__VLjava_lang_String_2(stA1);
return;
    }
    X_69: for (;;) { IF: if (gt <= 69) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_text_TextItemView || (refs_io_cloudoffice_platform_cockpit_text_TextItemView = io_cloudoffice_platform_cockpit_text_TextItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_text_TextItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemName__VLjava_lang_String_2(stA1);
return;
    }
    X_86: for (;;) { IF: if (gt <= 86) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_text_TextItemView || (refs_io_cloudoffice_platform_cockpit_text_TextItemView = io_cloudoffice_platform_cockpit_text_TextItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_text_TextItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemType__VLjava_lang_String_2(stA1);
return;
    }
    X_103: for (;;) { IF: if (gt <= 103) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_text_TextItemView || (refs_io_cloudoffice_platform_cockpit_text_TextItemView = io_cloudoffice_platform_cockpit_text_TextItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_text_TextItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemUserId__VLjava_lang_String_2(stA1);
return;
    }
    X_120: for (;;) { IF: if (gt <= 120) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_text_TextItemView || (refs_io_cloudoffice_platform_cockpit_text_TextItemView = io_cloudoffice_platform_cockpit_text_TextItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_text_TextItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemText__VLjava_lang_String_2(stA1);
return;
    }
    X_137: for (;;) { IF: if (gt <= 137) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_text_TextItemView || (refs_io_cloudoffice_platform_cockpit_text_TextItemView = io_cloudoffice_platform_cockpit_text_TextItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_text_TextItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setHasOwnerPermission__VZ(stI1);
return;
    }
    X_157: for (;;) { IF: if (gt <= 157) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_text_TextItemView || (refs_io_cloudoffice_platform_cockpit_text_TextItemView = io_cloudoffice_platform_cockpit_text_TextItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_text_TextItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setHasAdminPermission__VZ(stI1);
return;
    }
    X_177: for (;;) { IF: if (gt <= 177) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_text_TextItemView || (refs_io_cloudoffice_platform_cockpit_text_TextItemView = io_cloudoffice_platform_cockpit_text_TextItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_text_TextItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setHasWritePermission__VZ(stI1);
return;
    }
    X_197: for (;;) { IF: if (gt <= 197) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_text_TextItemView || (refs_io_cloudoffice_platform_cockpit_text_TextItemView = io_cloudoffice_platform_cockpit_text_TextItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_text_TextItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setHasReadPermission__VZ(stI1);
return;
    }
    X_217: for (;;) { IF: if (gt <= 217) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_text_TextItemView_2I = function(lcA1, lcI2) {
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
  case 6:{ gt = 85; break IF; }
  case 7:{ gt = 93; break IF; }
  case 8:{ gt = 101; break IF; }
  default: { gt = 109; break IF; }
}
    }
    X_52: for (;;) { IF: if (gt <= 52) {

var stA0 = lcA1.getItemId__Ljava_lang_String_2();
return stA0;
    }
    X_57: for (;;) { IF: if (gt <= 57) {

var stA0 = lcA1.getItemName__Ljava_lang_String_2();
return stA0;
    }
    X_62: for (;;) { IF: if (gt <= 62) {

var stA0 = lcA1.getItemType__Ljava_lang_String_2();
return stA0;
    }
    X_67: for (;;) { IF: if (gt <= 67) {

var stA0 = lcA1.getItemUserId__Ljava_lang_String_2();
return stA0;
    }
    X_72: for (;;) { IF: if (gt <= 72) {

var stA0 = lcA1.getItemText__Ljava_lang_String_2();
return stA0;
    }
    X_77: for (;;) { IF: if (gt <= 77) {

var stI0 = lcA1.isHasOwnerPermission__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_85: for (;;) { IF: if (gt <= 85) {

var stI0 = lcA1.isHasAdminPermission__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_93: for (;;) { IF: if (gt <= 93) {

var stI0 = lcA1.isHasWritePermission__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_101: for (;;) { IF: if (gt <= 101) {

var stI0 = lcA1.isHasReadPermission__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_109: for (;;) { IF: if (gt <= 109) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.call__VLio_cloudoffice_platform_cockpit_text_TextItemView_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_text_TextItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.text.TextItemView');
var stA0 = (refs_io_cloudoffice_platform_cockpit_text_TextItemView || (refs_io_cloudoffice_platform_cockpit_text_TextItemView = io_cloudoffice_platform_cockpit_text_TextItemView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_text_TextItemView_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLio_cloudoffice_platform_cockpit_text_TextItemView_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLio_cloudoffice_platform_cockpit_text_TextItemView_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
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
    m = c.read__Lio_cloudoffice_platform_cockpit_text_TextItemView_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_text_TextItemView;
(refs_io_cloudoffice_platform_cockpit_text_TextItemView || (refs_io_cloudoffice_platform_cockpit_text_TextItemView = io_cloudoffice_platform_cockpit_text_TextItemView(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_text_TextItemView$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lio_cloudoffice_platform_cockpit_text_TextItemView_2Lio_cloudoffice_platform_cockpit_text_TextItemView_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_text_TextItemView || (refs_io_cloudoffice_platform_cockpit_text_TextItemView = io_cloudoffice_platform_cockpit_text_TextItemView(false))).access$400__Lio_cloudoffice_platform_cockpit_text_TextItemView_2Lio_cloudoffice_platform_cockpit_text_TextItemView_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_text_TextItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.text.TextItemView');
lcA0.onMessage__VLio_cloudoffice_platform_cockpit_text_TextItemView_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_text_TextItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.text.TextItemView');
lcA0.onChange__VLio_cloudoffice_platform_cockpit_text_TextItemView_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lio_cloudoffice_platform_cockpit_text_TextItemView_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_text_TextItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.text.TextItemView');
var stA0 = lcA0.cloneTo__Lio_cloudoffice_platform_cockpit_text_TextItemView_2Lio_cloudoffice_platform_cockpit_text_TextItemView_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_text_TextItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.text.TextItemView');
lcA0.call__VLio_cloudoffice_platform_cockpit_text_TextItemView_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_text_TextItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.text.TextItemView');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_text_TextItemView_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_text_TextItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.text.TextItemView');
lcA0.setValue__VLio_cloudoffice_platform_cockpit_text_TextItemView_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_text_TextItemView$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_text_TextItemView$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_text_TextItemView$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_text_TextItemView$Html4JavaTypefillInstOf });
    io_cloudoffice_platform_cockpit_text_TextItemView$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/text/TextItemView$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_text_TextItemView;
    var refs_io_cloudoffice_platform_cockpit_text_TextComponent$TextItemModel;
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
vm.io_cloudoffice_platform_cockpit_text_TextItemView$Html4JavaType = io_cloudoffice_platform_cockpit_text_TextItemView$Html4JavaType;

vm.java_lang_UnsupportedOperationException = link('java/lang/UnsupportedOperationException', function(f) { vm.java_lang_UnsupportedOperationException =  f; });
vm.java_lang_String = link('java/lang/String', function(f) { vm.java_lang_String =  f; });
vm.org_netbeans_html_json_spi_Proto$Type = link('org/netbeans/html/json/spi/Proto$Type', function(f) { vm.org_netbeans_html_json_spi_Proto$Type =  f; });
vm.java_lang_StringBuilder = link('java/lang/StringBuilder', function(f) { vm.java_lang_StringBuilder =  f; });
vm.net_java_html_BrwsrCtx = link('net/java/html/BrwsrCtx', function(f) { vm.net_java_html_BrwsrCtx =  f; });
vm.java_lang_Boolean = link('java/lang/Boolean', function(f) { vm.java_lang_Boolean =  f; });

function io_cloudoffice_platform_cockpit_text_TextComponent$TextItemModel() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_text_TextComponent$TextItemModel;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_text_TextComponent$TextItemModel_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_text_TextComponent$TextItemModel_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_text_TextComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextComponent$TextItemModel_this$0'] = lcA1;
return;

};
CLS['cons__VLio_cloudoffice_platform_cockpit_text_TextComponent_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_text_TextComponent$TextItemModelfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_text_TextComponent$TextItemModel', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_text_TextComponent$TextItemModelfillInstOf });
    io_cloudoffice_platform_cockpit_text_TextComponent$TextItemModelfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/text/TextComponent$TextItemModel';
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
    this['fld_io_cloudoffice_platform_cockpit_text_TextComponent$TextItemModel_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_text_TextComponent$TextItemModel = registerClass(exports,'io_cloudoffice_platform_cockpit_text_TextComponent$TextItemModel',io_cloudoffice_platform_cockpit_text_TextComponent$TextItemModel);

vm.io_cloudoffice_platform_cockpit_api_UtilValidate = link('io/cloudoffice/platform/cockpit/api/UtilValidate', function(f) { vm.io_cloudoffice_platform_cockpit_api_UtilValidate =  f; });

function io_cloudoffice_platform_cockpit_text_TextComponent() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_text_TextComponent;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_api_AbstractComponent(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = c.getInstance__Lio_cloudoffice_platform_cockpit_api_Component_2Ljava_lang_String_2 = function(lcA0) {
var stA0 = new io_cloudoffice_platform_cockpit_text_TextComponent;
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
c['_componentName'].call(lcA0, "text-component");
return;

};
c['setComponentName__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.bindEventListeners__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = "loginsuccess";var stA2 = new io_cloudoffice_platform_cockpit_text_TextComponent$LoginEventListener;
(refs_io_cloudoffice_platform_cockpit_text_TextComponent$LoginEventListener || (refs_io_cloudoffice_platform_cockpit_text_TextComponent$LoginEventListener = io_cloudoffice_platform_cockpit_text_TextComponent$LoginEventListener(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_text_TextComponent_2.call(stA2, lcA0);
invoker.attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2(stA0,stA1, stA2);
var stA0 = lcA0;var stA1 = "designermode";var stA2 = new io_cloudoffice_platform_cockpit_text_TextComponent$DesignModeListener;
(refs_io_cloudoffice_platform_cockpit_text_TextComponent$DesignModeListener || (refs_io_cloudoffice_platform_cockpit_text_TextComponent$DesignModeListener = io_cloudoffice_platform_cockpit_text_TextComponent$DesignModeListener(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_text_TextComponent_2Lio_cloudoffice_platform_cockpit_text_TextComponent$1_2.call(stA2, lcA0, null);
invoker.attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2(stA0,stA1, stA2);
var stA0 = lcA0;var stA1 = "invokefunction";var stA2 = new io_cloudoffice_platform_cockpit_text_TextComponent$InvokeFunctionListener;
(refs_io_cloudoffice_platform_cockpit_text_TextComponent$InvokeFunctionListener || (refs_io_cloudoffice_platform_cockpit_text_TextComponent$InvokeFunctionListener = io_cloudoffice_platform_cockpit_text_TextComponent$InvokeFunctionListener(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_text_TextComponent_2Lio_cloudoffice_platform_cockpit_text_TextComponent$1_2.call(stA2, lcA0, null);
invoker.attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2(stA0,stA1, stA2);
var stA0 = lcA0;var stA1 = "loaditemdetail";var stA2 = new io_cloudoffice_platform_cockpit_text_TextComponent$LoadItemDetailListener;
(refs_io_cloudoffice_platform_cockpit_text_TextComponent$LoadItemDetailListener || (refs_io_cloudoffice_platform_cockpit_text_TextComponent$LoadItemDetailListener = io_cloudoffice_platform_cockpit_text_TextComponent$LoadItemDetailListener(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_text_TextComponent_2.call(stA2, lcA0);
invoker.attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2(stA0,stA1, stA2);
return;

};
c['bindEventListeners__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onError__VLio_cloudoffice_platform_cockpit_api_Error_2Lio_cloudoffice_platform_cockpit_api_Source_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
return;

};
c['onError__VLio_cloudoffice_platform_cockpit_api_Error_2Lio_cloudoffice_platform_cockpit_api_Source_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.bindViewNames__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getName__Ljava_lang_String_2((refs_io_cloudoffice_platform_cockpit_text_TextView || (refs_io_cloudoffice_platform_cockpit_text_TextView = io_cloudoffice_platform_cockpit_text_TextView(false))).constructor.$class);
invoker.setDefaultViewName__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA0;var stA1 = invoker.getName__Ljava_lang_String_2((refs_io_cloudoffice_platform_cockpit_text_TextConfiguration || (refs_io_cloudoffice_platform_cockpit_text_TextConfiguration = io_cloudoffice_platform_cockpit_text_TextConfiguration(false))).constructor.$class);
invoker.setDefaultConfigViewName__VLjava_lang_String_2(stA0,stA1);
return;

};
c['bindViewNames__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.openConfig__VLio_cloudoffice_platform_cockpit_text_TextView_2 = function(lcA0) {
lcA0.setDesignerMode__VZ(1);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.closeConfigurationPanel__VLio_cloudoffice_platform_cockpit_text_TextView_2 = function(lcA0) {
lcA0.setDesignerMode__VZ(0);
c.resetConfigurationModelFromJSON__VLio_cloudoffice_platform_cockpit_text_TextView_2(lcA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.save__VLio_cloudoffice_platform_cockpit_text_TextView_2 = function(lcA0) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = "text";var stA2 = lcA0.getInstance__Ljava_lang_String_2();
var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['configPostEndpoint__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'](stA1, stA2, "");
var stA2 = lcA0.toString__Ljava_lang_String_2();
var stA3 = new io_cloudoffice_platform_cockpit_text_TextComponent$1;
(refs_io_cloudoffice_platform_cockpit_text_TextComponent$1 || (refs_io_cloudoffice_platform_cockpit_text_TextComponent$1 = io_cloudoffice_platform_cockpit_text_TextComponent$1(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_text_TextView_2.call(stA3, lcA0);
invoker.post__VLjava_lang_String_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.resetConfiguration__VLio_cloudoffice_platform_cockpit_text_TextView_2 = function(lcA0) {
c.resetConfigurationModelFromJSON__VLio_cloudoffice_platform_cockpit_text_TextView_2(lcA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.resetConfigurationModelFromJSON__VLio_cloudoffice_platform_cockpit_text_TextView_2 = function(lcA0) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = "text";var stA2 = lcA0.getInstance__Ljava_lang_String_2();
var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['configFetchEndpoint__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'](stA1, stA2);
var stA2 = null;var stA3 = new io_cloudoffice_platform_cockpit_text_TextComponent$2;
(refs_io_cloudoffice_platform_cockpit_text_TextComponent$2 || (refs_io_cloudoffice_platform_cockpit_text_TextComponent$2 = io_cloudoffice_platform_cockpit_text_TextComponent$2(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_text_TextView_2.call(stA3, lcA0);
invoker.fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.enableFullView__VLio_cloudoffice_platform_cockpit_text_TextView_2 = function(lcA0) {
lcA0.setVisible__VZ(1);
lcA0.setFullViewEnabled__VZ(1);
c.hideList__VLio_cloudoffice_platform_cockpit_text_TextView_2(lcA0);
var lcA1 = "100";
var stA0 = lcA0.getConfiguration__Lio_cloudoffice_platform_cockpit_text_TextConfiguration_2();
var stA0 = stA0.getLayoutColumnId__Ljava_lang_String_2();
var lcA2 = stA0;
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"LayoutManager.toggleListDetailView(\"");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"\",\"");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"\");");
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
(refs_io_cloudoffice_platform_cockpit_js_VIEW || (refs_io_cloudoffice_platform_cockpit_js_VIEW = vm.io_cloudoffice_platform_cockpit_js_VIEW(false)))['invokeJSFunction__VLjava_lang_String_2'](stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.enableSplitView__VLio_cloudoffice_platform_cockpit_text_TextView_2 = function(lcA0) {
lcA0.setVisible__VZ(1);
lcA0.setFullViewEnabled__VZ(0);
c.showList__VLio_cloudoffice_platform_cockpit_text_TextView_2(lcA0);
var lcA1 = "30";
var stA0 = lcA0.getConfiguration__Lio_cloudoffice_platform_cockpit_text_TextConfiguration_2();
var stA0 = stA0.getLayoutColumnId__Ljava_lang_String_2();
var lcA2 = stA0;
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"LayoutManager.toggleListDetailView(\"");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"\",\"");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"\");");
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
(refs_io_cloudoffice_platform_cockpit_js_VIEW || (refs_io_cloudoffice_platform_cockpit_js_VIEW = vm.io_cloudoffice_platform_cockpit_js_VIEW(false)))['invokeJSFunction__VLjava_lang_String_2'](stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.backToList__VLio_cloudoffice_platform_cockpit_text_TextView_2 = function(lcA0) {
c.enableFullView__VLio_cloudoffice_platform_cockpit_text_TextView_2(lcA0);
lcA0.setVisible__VZ(0);
c.clearFilter__VLio_cloudoffice_platform_cockpit_text_TextView_2(lcA0);
c.showList__VLio_cloudoffice_platform_cockpit_text_TextView_2(lcA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.hideList__VLio_cloudoffice_platform_cockpit_text_TextView_2 = function(lcA0) {
var stA0 = lcA0.getConfiguration__Lio_cloudoffice_platform_cockpit_text_TextConfiguration_2();
var stA0 = stA0.getListComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA0 = invoker.getComponent__Ljava_lang_String_2(stA0);
var lcA1 = stA0;
var stA0 = lcA0.getConfiguration__Lio_cloudoffice_platform_cockpit_text_TextConfiguration_2();
var stA0 = stA0.getListComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA0 = invoker.getInstanceId__Ljava_lang_String_2(stA0);
var lcA2 = stA0;
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA0, "invokefunction", "invokefunction", "hideList");
var lcA3 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['get__Lio_cloudoffice_platform_cockpit_api_Component_2Ljava_lang_String_2Ljava_lang_String_2'](lcA1, lcA2);
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA3);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.showList__VLio_cloudoffice_platform_cockpit_text_TextView_2 = function(lcA0) {
var stA0 = lcA0.getConfiguration__Lio_cloudoffice_platform_cockpit_text_TextConfiguration_2();
var stA0 = stA0.getLayoutColumnId__Ljava_lang_String_2();
var lcA1 = stA0;
var stA0 = lcA0.getConfiguration__Lio_cloudoffice_platform_cockpit_text_TextConfiguration_2();
var stA0 = stA0.getListComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA0 = invoker.getComponent__Ljava_lang_String_2(stA0);
var lcA2 = stA0;
var stA0 = lcA0.getConfiguration__Lio_cloudoffice_platform_cockpit_text_TextConfiguration_2();
var stA0 = stA0.getListComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA0 = invoker.getInstanceId__Ljava_lang_String_2(stA0);
var lcA3 = stA0;
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA0, "invokefunction", "invokefunction", "showList");
var lcA4 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['get__Lio_cloudoffice_platform_cockpit_api_Component_2Ljava_lang_String_2Ljava_lang_String_2'](lcA2, lcA3);
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA4);
var lcA5 = "0";
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"LayoutManager.toggleListDetailView(\"");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"\",\"");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA5);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"\");");
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
(refs_io_cloudoffice_platform_cockpit_js_VIEW || (refs_io_cloudoffice_platform_cockpit_js_VIEW = vm.io_cloudoffice_platform_cockpit_js_VIEW(false)))['invokeJSFunction__VLjava_lang_String_2'](stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.clearFilter__VLio_cloudoffice_platform_cockpit_text_TextView_2 = function(lcA0) {
var stA0 = lcA0.getConfiguration__Lio_cloudoffice_platform_cockpit_text_TextConfiguration_2();
var stA0 = stA0.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA0 = invoker.getComponent__Ljava_lang_String_2(stA0);
var lcA1 = stA0;
var stA0 = lcA0.getConfiguration__Lio_cloudoffice_platform_cockpit_text_TextConfiguration_2();
var stA0 = stA0.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
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
    m = c.showActionMenu__VLio_cloudoffice_platform_cockpit_text_TextView_2 = function(lcA0) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['builder__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var stA1 = "itemId";var stA2 = lcA0.getItemId__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA1 = "itemName";var stA2 = lcA0.getItemName__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,"itemType", "USER_DEFINE");
var stA1 = "maximumPermission";var stA2 = c.getMaximumPermission__Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_text_TextView_2(lcA0);
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,"businessModelName", "UDI_ARTICLE");
var lcA1 = stA0;
var stA0 = lcA0.getConfiguration__Lio_cloudoffice_platform_cockpit_text_TextConfiguration_2();
var stA0 = stA0.getActionMenuComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA0 = invoker.getComponent__Ljava_lang_String_2(stA0);
var lcA2 = stA0;
var stA0 = lcA0.getConfiguration__Lio_cloudoffice_platform_cockpit_text_TextConfiguration_2();
var stA0 = stA0.getActionMenuComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA0 = invoker.getInstanceId__Ljava_lang_String_2(stA0);
var lcA3 = stA0;
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA0, "toogleactionmenu", "toogleactionmenu", lcA1);
var lcA4 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['get__Lio_cloudoffice_platform_cockpit_api_Component_2Ljava_lang_String_2Ljava_lang_String_2'](lcA2, lcA3);
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA4);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.getMaximumPermission__Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_text_TextView_2 = function(lcA0) {

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
    m = c.addFilter__VLio_cloudoffice_platform_cockpit_text_TextView_2 = function(lcA0) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['builder__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var stA1 = "itemId";var stA2 = lcA0.getItemId__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA1 = "itemName";var stA2 = lcA0.getItemName__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,"itemType", "ARTICLE");
var lcA1 = stA0;
var stA0 = lcA0.getConfiguration__Lio_cloudoffice_platform_cockpit_text_TextConfiguration_2();
var stA0 = stA0.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA0 = invoker.getComponent__Ljava_lang_String_2(stA0);
var lcA2 = stA0;
var stA0 = lcA0.getConfiguration__Lio_cloudoffice_platform_cockpit_text_TextConfiguration_2();
var stA0 = stA0.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA0 = invoker.getInstanceId__Ljava_lang_String_2(stA0);
var lcA3 = stA0;
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA0, "addfilter", "addfilter", lcA1);
var lcA4 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['get__Lio_cloudoffice_platform_cockpit_api_Component_2Ljava_lang_String_2Ljava_lang_String_2'](lcA2, lcA3);
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA4);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.enableCreateMode__VLio_cloudoffice_platform_cockpit_text_TextView_2 = function(lcA0) {
lcA0.setItemId__VLjava_lang_String_2("0");
lcA0.setItemName__VLjava_lang_String_2("Untitled");
lcA0.setItemText__VLjava_lang_String_2("");
c.addFilter__VLio_cloudoffice_platform_cockpit_text_TextView_2(lcA0);
c.enableFullView__VLio_cloudoffice_platform_cockpit_text_TextView_2(lcA0);
lcA0.setViewMode__VLjava_lang_String_2("editMode");
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.createItem__VLio_cloudoffice_platform_cockpit_text_TextView_2Ljava_lang_String_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2'](lcA1);
var lcA2 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"titleText");
var stA0 = invoker.trim__Ljava_lang_String_2(stA0);
var lcA3 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"descriptionText");
var stA0 = invoker.trim__Ljava_lang_String_2(stA0);
var lcA4 = stA0;
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"ID: ");
var stA1 = lcA0.getItemId__Ljava_lang_String_2();
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2'](stA0);
var stA0 = lcA0.getItemId__Ljava_lang_String_2();
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isEmpty__ZLjava_lang_String_2'](stA0);
if ((stI0) != 0) { gt = 76; break IF; }
var stA0 = lcA0.getItemId__Ljava_lang_String_2();
var stI0 = invoker.equals__ZLjava_lang_Object_2(stA0,"0");
if ((stI0) == 0) { gt = 86; break IF; }
    }
    X_76: for (;;) { IF: if (gt <= 76) {

c.createArticleItem__VLio_cloudoffice_platform_cockpit_text_TextView_2Ljava_lang_String_2Ljava_lang_String_2(lcA0, lcA3, lcA4);
{ gt = 93; break IF; }
    }
    X_86: for (;;) { IF: if (gt <= 86) {

c.updateArticleItem__VLio_cloudoffice_platform_cockpit_text_TextView_2Ljava_lang_String_2Ljava_lang_String_2(lcA0, lcA3, lcA4);
    }
    X_93: for (;;) { IF: if (gt <= 93) {
return;

    }
}}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.createArticleItem__VLio_cloudoffice_platform_cockpit_text_TextView_2Ljava_lang_String_2Ljava_lang_String_2 = function(lcA0, lcA1, lcA2) {
var stA0 = new io_cloudoffice_platform_cockpit_text_TextComponent$4;
(refs_io_cloudoffice_platform_cockpit_text_TextComponent$4 || (refs_io_cloudoffice_platform_cockpit_text_TextComponent$4 = io_cloudoffice_platform_cockpit_text_TextComponent$4(false))).constructor.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_text_TextView_2Ljava_lang_String_2Ljava_lang_String_2.call(stA0, "\"/VirtualItem-portlet.virtualuserdefineitem/createArticleUserDefineItem\"", lcA0, lcA1, lcA2);
var stA1 = new io_cloudoffice_platform_cockpit_text_TextComponent$3;
(refs_io_cloudoffice_platform_cockpit_text_TextComponent$3 || (refs_io_cloudoffice_platform_cockpit_text_TextComponent$3 = io_cloudoffice_platform_cockpit_text_TextComponent$3(false))).constructor.cons__V.call(stA1);
invoker.call__VLio_cloudoffice_platform_cockpit_api_ServerCallback_2(stA0,stA1);
return;

};
c['createArticleItem__VLio_cloudoffice_platform_cockpit_text_TextView_2Ljava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.updateArticleItem__VLio_cloudoffice_platform_cockpit_text_TextView_2Ljava_lang_String_2Ljava_lang_String_2 = function(lcA0, lcA1, lcA2) {
var stA0 = new io_cloudoffice_platform_cockpit_text_TextComponent$6;
(refs_io_cloudoffice_platform_cockpit_text_TextComponent$6 || (refs_io_cloudoffice_platform_cockpit_text_TextComponent$6 = io_cloudoffice_platform_cockpit_text_TextComponent$6(false))).constructor.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_text_TextView_2Lio_cloudoffice_platform_cockpit_text_TextView_2Ljava_lang_String_2Ljava_lang_String_2.call(stA0, "\"/VirtualItem-portlet.virtualuserdefineitem/updateUserDefineItem\"", lcA0, lcA0, lcA1, lcA2);
var stA1 = new io_cloudoffice_platform_cockpit_text_TextComponent$5;
(refs_io_cloudoffice_platform_cockpit_text_TextComponent$5 || (refs_io_cloudoffice_platform_cockpit_text_TextComponent$5 = io_cloudoffice_platform_cockpit_text_TextComponent$5(false))).constructor.cons__V.call(stA1);
invoker.call__VLio_cloudoffice_platform_cockpit_api_ServerCallback_2(stA0,stA1);
return;

};
c['updateArticleItem__VLio_cloudoffice_platform_cockpit_text_TextView_2Ljava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.processTextDetail__VLio_cloudoffice_platform_cockpit_text_TextView_2Ljava_lang_String_2 = function(lcA0, lcA1) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2'](lcA1);
var lcA2 = stA0;
lcA0.setViewMode__VLjava_lang_String_2("editMode");
c.enableFullView__VLio_cloudoffice_platform_cockpit_text_TextView_2(lcA0);
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"itemId");
var lcA3 = stA0;
var stA0 = new io_cloudoffice_platform_cockpit_text_TextComponent$8;
(refs_io_cloudoffice_platform_cockpit_text_TextComponent$8 || (refs_io_cloudoffice_platform_cockpit_text_TextComponent$8 = io_cloudoffice_platform_cockpit_text_TextComponent$8(false))).constructor.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_text_TextView_2Ljava_lang_String_2.call(stA0, "\"/VirtualItem-portlet.virtualuserdefineitem/getItemDetail\"", lcA0, lcA3);
var stA1 = new io_cloudoffice_platform_cockpit_text_TextComponent$7;
(refs_io_cloudoffice_platform_cockpit_text_TextComponent$7 || (refs_io_cloudoffice_platform_cockpit_text_TextComponent$7 = io_cloudoffice_platform_cockpit_text_TextComponent$7(false))).constructor.cons__V.call(stA1);
invoker.call__VLio_cloudoffice_platform_cockpit_api_ServerCallback_2(stA0,stA1);
return;

};
c['processTextDetail__VLio_cloudoffice_platform_cockpit_text_TextView_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.setTextDetailData__VLjava_lang_String_2 = function(lcA0) {
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"TextManager.setDetailData(\"");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"\");");
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
(refs_io_cloudoffice_platform_cockpit_js_VIEW || (refs_io_cloudoffice_platform_cockpit_js_VIEW = vm.io_cloudoffice_platform_cockpit_js_VIEW(false)))['invokeJSFunction__VLjava_lang_String_2'](stA0);
return;

};
c['setTextDetailData__VLjava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_text_TextComponentfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_text_TextComponent', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_text_TextComponentfillInstOf });
    io_cloudoffice_platform_cockpit_text_TextComponentfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/text/TextComponent';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_AbstractComponent;
    var refs_io_cloudoffice_platform_cockpit_text_TextComponent$LoginEventListener;
    var refs_io_cloudoffice_platform_cockpit_text_TextComponent$DesignModeListener;
    var refs_io_cloudoffice_platform_cockpit_text_TextComponent$InvokeFunctionListener;
    var refs_io_cloudoffice_platform_cockpit_text_TextComponent$LoadItemDetailListener;
    var refs_io_cloudoffice_platform_cockpit_text_TextView;
    var refs_io_cloudoffice_platform_cockpit_text_TextConfiguration;
    var refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration;
    var refs_io_cloudoffice_platform_cockpit_text_TextComponent$1;
    var refs_io_cloudoffice_platform_cockpit_text_TextComponent$2;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_js_VIEW;
    var refs_io_cloudoffice_platform_cockpit_api_Event;
    var refs_io_cloudoffice_platform_cockpit_api_Components;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_api_Logger;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_io_cloudoffice_platform_cockpit_text_TextComponent$4;
    var refs_io_cloudoffice_platform_cockpit_text_TextComponent$3;
    var refs_io_cloudoffice_platform_cockpit_text_TextComponent$6;
    var refs_io_cloudoffice_platform_cockpit_text_TextComponent$5;
    var refs_io_cloudoffice_platform_cockpit_text_TextComponent$8;
    var refs_io_cloudoffice_platform_cockpit_text_TextComponent$7;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_text_TextComponent = registerClass(exports,'io_cloudoffice_platform_cockpit_text_TextComponent',io_cloudoffice_platform_cockpit_text_TextComponent);


function io_cloudoffice_platform_cockpit_text_TextComponent$7() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_text_TextComponent$7;
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
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_text_TextView']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.text.TextView');
var lcA2 = stA0;
var lcA3 = "";
var lcA4 = "";
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](lcA1);
if ((stI0) == 0) { gt = 148; break IF; }
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2'](lcA1);
var lcA5 = stA0;
var stA0 = invoker.getList__Ljava_util_List_2Ljava_lang_String_2(lcA5,"valueMap");
var lcA6 = stA0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA6);
var lcA7 = stA0;
    }
    X_49: for (;;) { IF: if (gt <= 49) {

var stI0 = invoker.hasNext__Z(lcA7);
if ((stI0) == 0) { gt = 132; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA7);
if (stA0 !== null && !stA0['$instOf_java_util_Map']) vm.java_lang_Class(false).castEx(stA0, 'java.util.Map');
var lcA8 = stA0;
var stA0 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA8,"propName");
if (stA0 !== null && !stA0['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA0, 'java.lang.String');
var lcA9 = stA0;
var stA0 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA8,"propValue");
if (stA0 !== null && !stA0['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA0, 'java.lang.String');
var lcA10 = stA0;
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA9,"title");
if ((stI0) == 0) { gt = 115; break IF; }
var lcA3 = lcA10;
{ gt = 129; break IF; }
    }
    X_115: for (;;) { IF: if (gt <= 115) {

var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA9,"description");
if ((stI0) == 0) { gt = 129; break IF; }
var lcA4 = lcA10;
    }
    X_129: for (;;) { IF: if (gt <= 129) {
{ gt = 0; continue X_49; }
    }
    X_132: for (;;) { IF: if (gt <= 132) {

var stA0 = lcA2;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA5,"itemId");
stA0.setItemId__VLjava_lang_String_2(stA1);
(refs_io_cloudoffice_platform_cockpit_text_TextComponent || (refs_io_cloudoffice_platform_cockpit_text_TextComponent = io_cloudoffice_platform_cockpit_text_TextComponent(false))).setTextDetailData__VLjava_lang_String_2(lcA4);
    }
    X_148: for (;;) { IF: if (gt <= 148) {
return;

    }
}}}}}}
};
c['process__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_text_TextComponent$7fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_text_TextComponent$7', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_text_TextComponent$7fillInstOf });
    io_cloudoffice_platform_cockpit_text_TextComponent$7fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/text/TextComponent$7';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_ServerCallback;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_text_TextComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_text_TextComponent$7 = io_cloudoffice_platform_cockpit_text_TextComponent$7;

vm.io_cloudoffice_platform_cockpit_api_ServerCallback = link('io/cloudoffice/platform/cockpit/api/ServerCallback', function(f) { vm.io_cloudoffice_platform_cockpit_api_ServerCallback =  f; });

function io_cloudoffice_platform_cockpit_text_TextComponent$8() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_text_TextComponent$8;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_api_AsyncRequest(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$itemId = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_text_TextComponent$8_val$itemId'] = v; return this['fld_io_cloudoffice_platform_cockpit_text_TextComponent$8_val$itemId']; };
    m = CLS.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_text_TextView_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextComponent$8_val$itemId'] = lcA3;
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
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA2,"itemId", lcA0['fld_io_cloudoffice_platform_cockpit_text_TextComponent$8_val$itemId']);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA1,"context", lcA2);
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
    function io_cloudoffice_platform_cockpit_text_TextComponent$8fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_text_TextComponent$8', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_text_TextComponent$8fillInstOf });
    io_cloudoffice_platform_cockpit_text_TextComponent$8fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/text/TextComponent$8';
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
    this['fld_io_cloudoffice_platform_cockpit_text_TextComponent$8_val$itemId'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_text_TextComponent$8 = io_cloudoffice_platform_cockpit_text_TextComponent$8;

vm.java_util_HashMap = link('java/util/HashMap', function(f) { vm.java_util_HashMap =  f; });
vm.io_cloudoffice_platform_cockpit_api_AsyncRequest = link('io/cloudoffice/platform/cockpit/api/AsyncRequest', function(f) { vm.io_cloudoffice_platform_cockpit_api_AsyncRequest =  f; });

function io_cloudoffice_platform_cockpit_text_TextComponent$5() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_text_TextComponent$5;
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
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_text_TextView']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.text.TextView');
var lcA2 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](lcA1);
if ((stI0) == 0) { gt = 37; break IF; }
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2'](lcA1);
var lcA3 = stA0;
var stA0 = lcA2;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA3,"title");
stA0.setItemName__VLjava_lang_String_2(stA1);
(refs_io_cloudoffice_platform_cockpit_text_TextComponent || (refs_io_cloudoffice_platform_cockpit_text_TextComponent = io_cloudoffice_platform_cockpit_text_TextComponent(false))).addFilter__VLio_cloudoffice_platform_cockpit_text_TextView_2(lcA2);
    }
    X_37: for (;;) { IF: if (gt <= 37) {
return;

    }
}}
};
c['process__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_text_TextComponent$5fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_text_TextComponent$5', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_text_TextComponent$5fillInstOf });
    io_cloudoffice_platform_cockpit_text_TextComponent$5fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/text/TextComponent$5';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_ServerCallback;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_text_TextComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_text_TextComponent$5 = io_cloudoffice_platform_cockpit_text_TextComponent$5;


function io_cloudoffice_platform_cockpit_text_TextComponent$6() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_text_TextComponent$6;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_api_AsyncRequest(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$view = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_text_TextComponent$6_val$view'] = v; return this['fld_io_cloudoffice_platform_cockpit_text_TextComponent$6_val$view']; };
  m = c._val$title = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_text_TextComponent$6_val$title'] = v; return this['fld_io_cloudoffice_platform_cockpit_text_TextComponent$6_val$title']; };
  m = c._val$description = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_text_TextComponent$6_val$description'] = v; return this['fld_io_cloudoffice_platform_cockpit_text_TextComponent$6_val$description']; };
    m = CLS.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_text_TextView_2Lio_cloudoffice_platform_cockpit_text_TextView_2Ljava_lang_String_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3, lcA4, lcA5) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextComponent$6_val$view'] = lcA3;
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextComponent$6_val$title'] = lcA4;
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextComponent$6_val$description'] = lcA5;
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
var stA0 = lcA2;var stA1 = "itemId";var stA2 = lcA0['fld_io_cloudoffice_platform_cockpit_text_TextComponent$6_val$view'].getItemId__Ljava_lang_String_2();
var stA2 = (refs_java_lang_Long || (refs_java_lang_Long = vm.java_lang_Long(false)))['valueOf__Ljava_lang_Long_2Ljava_lang_String_2'](stA2);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA2;var stA1 = "title";var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"\"");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,lcA0['fld_io_cloudoffice_platform_cockpit_text_TextComponent$6_val$title']);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"\"");
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA2;var stA1 = "description";var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"\"");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,lcA0['fld_io_cloudoffice_platform_cockpit_text_TextComponent$6_val$description']);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"\"");
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA2,"businessModelName", "\"UDI_ARTICLE\"");
var stA0 = lcA1;var stA1 = "reqContext";var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"'");
var stA3 = invoker.toString__Ljava_lang_String_2(lcA2);
var stA3 = (refs_io_cloudoffice_platform_cockpit_api_Base64 || (refs_io_cloudoffice_platform_cockpit_api_Base64 = vm.io_cloudoffice_platform_cockpit_api_Base64(false)))['encodeBase64__Ljava_lang_String_2Ljava_lang_String_2'](stA3);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,stA3);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"'");
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
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
    function io_cloudoffice_platform_cockpit_text_TextComponent$6fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_text_TextComponent$6', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_text_TextComponent$6fillInstOf });
    io_cloudoffice_platform_cockpit_text_TextComponent$6fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/text/TextComponent$6';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_AsyncRequest;
    var refs_java_util_HashMap;
    var refs_java_lang_Long;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_api_Base64;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_text_TextComponent$6_val$view'] = null;
    this['fld_io_cloudoffice_platform_cockpit_text_TextComponent$6_val$title'] = null;
    this['fld_io_cloudoffice_platform_cockpit_text_TextComponent$6_val$description'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_text_TextComponent$6 = io_cloudoffice_platform_cockpit_text_TextComponent$6;

vm.io_cloudoffice_platform_cockpit_api_Base64 = link('io/cloudoffice/platform/cockpit/api/Base64', function(f) { vm.io_cloudoffice_platform_cockpit_api_Base64 =  f; });
vm.java_lang_Long = link('java/lang/Long', function(f) { vm.java_lang_Long =  f; });

function io_cloudoffice_platform_cockpit_text_TextComponent$3() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_text_TextComponent$3;
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
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_text_TextView']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.text.TextView');
var lcA2 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](lcA1);
if ((stI0) == 0) { gt = 56; break IF; }
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2'](lcA1);
var lcA3 = stA0;
var stA0 = lcA2;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA3,"userDefineItemId");
stA0.setItemId__VLjava_lang_String_2(stA1);
var stA0 = lcA2;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA3,"title");
stA0.setItemName__VLjava_lang_String_2(stA1);
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA3,"description");
(refs_io_cloudoffice_platform_cockpit_text_TextComponent || (refs_io_cloudoffice_platform_cockpit_text_TextComponent = io_cloudoffice_platform_cockpit_text_TextComponent(false))).setTextDetailData__VLjava_lang_String_2(stA0);
(refs_io_cloudoffice_platform_cockpit_text_TextComponent || (refs_io_cloudoffice_platform_cockpit_text_TextComponent = io_cloudoffice_platform_cockpit_text_TextComponent(false))).addFilter__VLio_cloudoffice_platform_cockpit_text_TextView_2(lcA2);
    }
    X_56: for (;;) { IF: if (gt <= 56) {
return;

    }
}}
};
c['process__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_text_TextComponent$3fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_text_TextComponent$3', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_text_TextComponent$3fillInstOf });
    io_cloudoffice_platform_cockpit_text_TextComponent$3fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/text/TextComponent$3';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_ServerCallback;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_text_TextComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_text_TextComponent$3 = io_cloudoffice_platform_cockpit_text_TextComponent$3;


function io_cloudoffice_platform_cockpit_text_TextComponent$4() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_text_TextComponent$4;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_api_AsyncRequest(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$title = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_text_TextComponent$4_val$title'] = v; return this['fld_io_cloudoffice_platform_cockpit_text_TextComponent$4_val$title']; };
  m = c._val$description = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_text_TextComponent$4_val$description'] = v; return this['fld_io_cloudoffice_platform_cockpit_text_TextComponent$4_val$description']; };
    m = CLS.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_text_TextView_2Ljava_lang_String_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3, lcA4) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextComponent$4_val$title'] = lcA3;
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextComponent$4_val$description'] = lcA4;
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
var stA0 = lcA2;var stA1 = "itemId";var stA2 = (refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false)))['valueOf__Ljava_lang_Integer_2I'](0);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA2;var stA1 = "title";var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"\"");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,lcA0['fld_io_cloudoffice_platform_cockpit_text_TextComponent$4_val$title']);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"\"");
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA2;var stA1 = "description";var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"\"");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,lcA0['fld_io_cloudoffice_platform_cockpit_text_TextComponent$4_val$description']);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"\"");
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA2,"businessModelName", "\"UDI_ARTICLE\"");
var stA0 = lcA2;var stA1 = "scopeGroupId";var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"\"");
var stA3 = (refs_io_cloudoffice_platform_cockpit_api_Session || (refs_io_cloudoffice_platform_cockpit_api_Session = vm.io_cloudoffice_platform_cockpit_api_Session(false)))['getCompany__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var stA3 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(stA3,"itemId");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,stA3);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"\"");
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA1;var stA1 = "reqContext";var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"'");
var stA3 = invoker.toString__Ljava_lang_String_2(lcA2);
var stA3 = (refs_io_cloudoffice_platform_cockpit_api_Base64 || (refs_io_cloudoffice_platform_cockpit_api_Base64 = vm.io_cloudoffice_platform_cockpit_api_Base64(false)))['encodeBase64__Ljava_lang_String_2Ljava_lang_String_2'](stA3);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,stA3);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"'");
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
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
    function io_cloudoffice_platform_cockpit_text_TextComponent$4fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_text_TextComponent$4', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_text_TextComponent$4fillInstOf });
    io_cloudoffice_platform_cockpit_text_TextComponent$4fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/text/TextComponent$4';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_AsyncRequest;
    var refs_java_util_HashMap;
    var refs_java_lang_Integer;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_api_Session;
    var refs_io_cloudoffice_platform_cockpit_api_Base64;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_text_TextComponent$4_val$title'] = null;
    this['fld_io_cloudoffice_platform_cockpit_text_TextComponent$4_val$description'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_text_TextComponent$4 = io_cloudoffice_platform_cockpit_text_TextComponent$4;

vm.io_cloudoffice_platform_cockpit_api_Session = link('io/cloudoffice/platform/cockpit/api/Session', function(f) { vm.io_cloudoffice_platform_cockpit_api_Session =  f; });
vm.java_lang_Integer = link('java/lang/Integer', function(f) { vm.java_lang_Integer =  f; });
vm.io_cloudoffice_platform_cockpit_api_MapBuilder = link('io/cloudoffice/platform/cockpit/api/MapBuilder', function(f) { vm.io_cloudoffice_platform_cockpit_api_MapBuilder =  f; });
vm.io_cloudoffice_platform_cockpit_api_Components = link('io/cloudoffice/platform/cockpit/api/Components', function(f) { vm.io_cloudoffice_platform_cockpit_api_Components =  f; });
vm.io_cloudoffice_platform_cockpit_api_Event = link('io/cloudoffice/platform/cockpit/api/Event', function(f) { vm.io_cloudoffice_platform_cockpit_api_Event =  f; });
vm.io_cloudoffice_platform_cockpit_js_VIEW = link('io/cloudoffice/platform/cockpit/js/VIEW', function(f) { vm.io_cloudoffice_platform_cockpit_js_VIEW =  f; });

function io_cloudoffice_platform_cockpit_text_TextComponent$2() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_text_TextComponent$2;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$view = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_text_TextComponent$2_val$view'] = v; return this['fld_io_cloudoffice_platform_cockpit_text_TextComponent$2_val$view']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_text_TextView_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextComponent$2_val$view'] = lcA1;
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
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_text_TextComponent$2_val$view'].getConfiguration__Lio_cloudoffice_platform_cockpit_text_TextConfiguration_2();
var lcA3 = stA0;
var stA0 = invoker.getJsonObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA2,"configuration");
var lcA4 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_Object_2'](lcA4);
if ((stI0) == 0) { gt = 121; break IF; }
var stA0 = lcA3;var stI1 = invoker.getBoolean__ZLjava_lang_String_2(lcA4,"displayTextItem");
stA0.setDisplayTextItem__VZ(stI1);
var stA0 = lcA3;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA4,"layoutColumnId");
stA0.setLayoutColumnId__VLjava_lang_String_2(stA1);
var stA0 = lcA0;var stA1 = lcA0['fld_io_cloudoffice_platform_cockpit_text_TextComponent$2_val$view'].getConfiguration__Lio_cloudoffice_platform_cockpit_text_TextConfiguration_2();
var stA1 = stA1.getListComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA2 = invoker.getJSONObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA4,"listComponentDefinition");
c.prepareTalkToComponent__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2Lorg_json_JSONObject_2.call(stA0, stA1, stA2);
var stA0 = lcA0;var stA1 = lcA0['fld_io_cloudoffice_platform_cockpit_text_TextComponent$2_val$view'].getConfiguration__Lio_cloudoffice_platform_cockpit_text_TextConfiguration_2();
var stA1 = stA1.getActionMenuComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA2 = invoker.getJSONObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA4,"actionMenuComponentDefinition");
c.prepareTalkToComponent__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2Lorg_json_JSONObject_2.call(stA0, stA1, stA2);
var stA0 = lcA0;var stA1 = lcA0['fld_io_cloudoffice_platform_cockpit_text_TextComponent$2_val$view'].getConfiguration__Lio_cloudoffice_platform_cockpit_text_TextConfiguration_2();
var stA1 = stA1.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA2 = invoker.getJSONObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA4,"searchBoxComponentDefinition");
c.prepareTalkToComponent__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2Lorg_json_JSONObject_2.call(stA0, stA1, stA2);
c.prepareSelectedText__VLorg_json_JSONObject_2Lio_cloudoffice_platform_cockpit_text_TextConfiguration_2.call(lcA0, lcA4, lcA3);
    }
    X_121: for (;;) { IF: if (gt <= 121) {
return;

    }
}}
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
    m = c.prepareSelectedText__VLorg_json_JSONObject_2Lio_cloudoffice_platform_cockpit_text_TextConfiguration_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA2.getSelectedTextItems__Ljava_util_List_2();
invoker.clear__V(stA0);
var stA0 = invoker.getJSONArray__Lorg_json_JSONArray_2Ljava_lang_String_2(lcA1,"selectedTextItems");
var stA0 = invoker.toList__Ljava_util_List_2(stA0);
var lcA3 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_util_Collection_2'](lcA3);
if ((stI0) == 0) { gt = 174; break IF; }
var stA0 = invoker.get__Ljava_lang_Object_2I(lcA3,0);
var lcA4 = stA0;
if (lcA4 !== null && !lcA4['$instOf_java_util_Map']) vm.java_lang_Class(false).castEx(lcA4, 'java.util.Map');
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_util_Map_2'](lcA4);
var lcA5 = stA0;
var stA0 = new io_cloudoffice_platform_cockpit_text_TextItemView;
(refs_io_cloudoffice_platform_cockpit_text_TextItemView || (refs_io_cloudoffice_platform_cockpit_text_TextItemView = io_cloudoffice_platform_cockpit_text_TextItemView(false))).constructor.cons__V.call(stA0);
var lcA6 = stA0;
var stA0 = lcA6;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA5,"itemId");
stA0.setItemId__VLjava_lang_String_2(stA1);
var stA0 = lcA6;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA5,"itemName");
stA0.setItemName__VLjava_lang_String_2(stA1);
var stA0 = lcA6;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA5,"itemType");
stA0.setItemType__VLjava_lang_String_2(stA1);
var stA0 = lcA6;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA5,"itemText");
stA0.setItemText__VLjava_lang_String_2(stA1);
var stA0 = lcA6;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA5,"itemUserId");
stA0.setItemUserId__VLjava_lang_String_2(stA1);
var stA0 = lcA6;var stI1 = invoker.getBoolean__ZLjava_lang_String_2(lcA5,"hasOwnerPermission");
stA0.setHasOwnerPermission__VZ(stI1);
var stA0 = lcA6;var stI1 = invoker.getBoolean__ZLjava_lang_String_2(lcA5,"hasAdminPermission");
stA0.setHasAdminPermission__VZ(stI1);
var stA0 = lcA6;var stI1 = invoker.getBoolean__ZLjava_lang_String_2(lcA5,"hasWritePermission");
stA0.setHasWritePermission__VZ(stI1);
var stA0 = lcA6;var stI1 = invoker.getBoolean__ZLjava_lang_String_2(lcA5,"hasReadPermission");
stA0.setHasReadPermission__VZ(stI1);
var stA0 = lcA2.getSelectedTextItems__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA6);
    }
    X_174: for (;;) { IF: if (gt <= 174) {
return;

    }
}}
};
    m.access = 2;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_text_TextComponent$2fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_text_TextComponent$2', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_text_TextComponent$2fillInstOf });
    io_cloudoffice_platform_cockpit_text_TextComponent$2fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/text/TextComponent$2';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_io_cloudoffice_platform_cockpit_text_TextItemView;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_text_TextComponent$2_val$view'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_text_TextComponent$2 = io_cloudoffice_platform_cockpit_text_TextComponent$2;

vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration = link('io/cloudoffice/platform/cockpit/api/ComponentConfiguration', function(f) { vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration =  f; });

function io_cloudoffice_platform_cockpit_text_TextConfiguration() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_text_TextConfiguration;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_proto'] = v; return this['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_proto']; };
  m = c._prop_autocompleteinputbox = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_autocompleteinputbox'] = v; return this['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_autocompleteinputbox']; };
  m = c._prop_itemListLoader = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_itemListLoader'] = v; return this['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_itemListLoader']; };
  m = c._prop_showItemList = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_showItemList'] = v; return this['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_showItemList']; };
  m = c._prop_itemList = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_itemList'] = v; return this['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_itemList']; };
  m = c._prop_selectedTextItems = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_selectedTextItems'] = v; return this['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_selectedTextItems']; };
  m = c._prop_displayTextItem = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_displayTextItem'] = v; return this['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_displayTextItem']; };
  m = c._prop_layoutColumnId = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_layoutColumnId'] = v; return this['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_layoutColumnId']; };
  m = c._prop_listComponentDefinition = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_listComponentDefinition'] = v; return this['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_listComponentDefinition']; };
  m = c._prop_actionMenuComponentDefinition = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_actionMenuComponentDefinition'] = v; return this['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_actionMenuComponentDefinition']; };
  m = c._prop_searchBoxComponentDefinition = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_searchBoxComponentDefinition'] = v; return this['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_searchBoxComponentDefinition']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManager || (refs_io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManager = io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManager(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.getAutocompleteinputbox__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_proto'],"autocompleteinputbox");
return lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_autocompleteinputbox'];

};
c['getAutocompleteinputbox__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setAutocompleteinputbox__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_autocompleteinputbox'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_autocompleteinputbox'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_proto'],"autocompleteinputbox", lcA2, lcA1);
var lcA3 = lcA0;
(refs_io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManager || (refs_io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManager = io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManager(false))).itemSearchAutocomplete__VLio_cloudoffice_platform_cockpit_text_TextConfiguration_2(lcA3);
return;

    }
}}
};
c['setAutocompleteinputbox__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getItemListLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_proto'],"itemListLoader");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_itemListLoader']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_HelperItemView;
(refs_io_cloudoffice_platform_cockpit_api_HelperItemView || (refs_io_cloudoffice_platform_cockpit_api_HelperItemView = vm.io_cloudoffice_platform_cockpit_api_HelperItemView(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_itemListLoader'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_itemListLoader'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_itemListLoader']['$instOf_io_cloudoffice_platform_cockpit_api_HelperItemView']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_itemListLoader'], 'io.cloudoffice.platform.cockpit.api.HelperItemView');
return lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_itemListLoader'];

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

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_itemListLoader'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_itemListLoader'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_proto'],"itemListLoader", lcA2, lcA1);
return;

    }
}}
};
c['setItemListLoader__VLio_cloudoffice_platform_cockpit_api_HelperItemView_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isShowItemList__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_proto'],"showItemList");
return lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_showItemList'];

};
c['isShowItemList__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setShowItemList__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_showItemList']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_showItemList'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_proto'];var stA1 = "showItemList";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
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
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_proto'],"itemList");
return lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_itemList'];

};
c['getItemList__Ljava_util_List_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getSelectedTextItems__Ljava_util_List_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_proto'],"selectedTextItems");
return lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_selectedTextItems'];

};
c['getSelectedTextItems__Ljava_util_List_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isDisplayTextItem__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_proto'],"displayTextItem");
return lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_displayTextItem'];

};
c['isDisplayTextItem__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setDisplayTextItem__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_displayTextItem']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_displayTextItem'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_proto'];var stA1 = "displayTextItem";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setDisplayTextItem__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getLayoutColumnId__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_proto'],"layoutColumnId");
return lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_layoutColumnId'];

};
c['getLayoutColumnId__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setLayoutColumnId__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_layoutColumnId'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_layoutColumnId'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_proto'],"layoutColumnId", lcA2, lcA1);
return;

    }
}}
};
c['setLayoutColumnId__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getListComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_proto'],"listComponentDefinition");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_listComponentDefinition']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_ComponentDef;
(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_listComponentDefinition'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_listComponentDefinition'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_listComponentDefinition']['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_listComponentDefinition'], 'io.cloudoffice.platform.cockpit.api.ComponentDef');
return lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_listComponentDefinition'];

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

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_listComponentDefinition'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_listComponentDefinition'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_proto'],"listComponentDefinition", lcA2, lcA1);
return;

    }
}}
};
c['setListComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getActionMenuComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_proto'],"actionMenuComponentDefinition");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_actionMenuComponentDefinition']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_ComponentDef;
(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_actionMenuComponentDefinition'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_actionMenuComponentDefinition'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_actionMenuComponentDefinition']['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_actionMenuComponentDefinition'], 'io.cloudoffice.platform.cockpit.api.ComponentDef');
return lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_actionMenuComponentDefinition'];

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

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_actionMenuComponentDefinition'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_actionMenuComponentDefinition'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_proto'],"actionMenuComponentDefinition", lcA2, lcA1);
return;

    }
}}
};
c['setActionMenuComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_proto'],"searchBoxComponentDefinition");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_searchBoxComponentDefinition']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_ComponentDef;
(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_searchBoxComponentDefinition'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_searchBoxComponentDefinition'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_searchBoxComponentDefinition']['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_searchBoxComponentDefinition'], 'io.cloudoffice.platform.cockpit.api.ComponentDef');
return lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_searchBoxComponentDefinition'];

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

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_searchBoxComponentDefinition'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_searchBoxComponentDefinition'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_proto'],"searchBoxComponentDefinition", lcA2, lcA1);
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
stA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_proto'] = stA1;
var stA0 = lcA0;var stA1 = lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_proto'];var stA2 = "itemList";var stI3 = -1;var stA4 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 0);
var stA1 = invoker.createList__Ljava_util_List_2Ljava_lang_String_2I_3Ljava_lang_String_2(stA1,stA2, stI3, stA4);
stA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_itemList'] = stA1;
var stA0 = lcA0;var stA1 = lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_proto'];var stA2 = "selectedTextItems";var stI3 = -1;var stA4 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 0);
var stA1 = invoker.createList__Ljava_util_List_2Ljava_lang_String_2I_3Ljava_lang_String_2(stA1,stA2, stI3, stA4);
stA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_selectedTextItems'] = stA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_itemListLoader'] = c._TYPE();
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_listComponentDefinition'] = c._TYPE();
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_actionMenuComponentDefinition'] = c._TYPE();
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_searchBoxComponentDefinition'] = c._TYPE();
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_HelperItemView_2ZZLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2_3Lio_cloudoffice_platform_cockpit_text_TextItemView_2 = function(lcA1, lcA2, lcI3, lcI4, lcA5, lcA6, lcA7, lcA8, lcA9) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_autocompleteinputbox'] = lcA1;
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_itemListLoader'] = lcA2;
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_showItemList'] = lcI3;
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_displayTextItem'] = lcI4;
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_layoutColumnId'] = lcA5;
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_listComponentDefinition'] = lcA6;
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_actionMenuComponentDefinition'] = lcA7;
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_searchBoxComponentDefinition'] = lcA8;
invoker.initTo__VLjava_util_Collection_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_proto'],lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_itemList'], lcA9);
return;

};
CLS['cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_HelperItemView_2ZZLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2_3Lio_cloudoffice_platform_cockpit_text_TextItemView_2'] = m;

    m.access = 129;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, (10));
var lcA3 = stA0;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, (10));
Array.at(stA2, 0, "autocompleteinputbox");
Array.at(stA2, 1, "itemListLoader");
Array.at(stA2, 2, "showItemList");
Array.at(stA2, 3, "itemList");
Array.at(stA2, 4, "selectedTextItems");
Array.at(stA2, 5, "displayTextItem");
Array.at(stA2, (6), "layoutColumnId");
Array.at(stA2, (7), "listComponentDefinition");
Array.at(stA2, (8), "actionMenuComponentDefinition");
Array.at(stA2, (9), "searchBoxComponentDefinition");
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
if ((lcA3[0] || Array.at(lcA3, 0)) !== null && !(lcA3[0] || Array.at(lcA3, 0))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[0] || Array.at(lcA3, 0)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_autocompleteinputbox'] = (lcA3[0] || Array.at(lcA3, 0));
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_proto'],(refs_io_cloudoffice_platform_cockpit_api_HelperItemView || (refs_io_cloudoffice_platform_cockpit_api_HelperItemView = vm.io_cloudoffice_platform_cockpit_api_HelperItemView(false))).constructor.$class, (lcA3[1] || Array.at(lcA3, 1)));
stA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_itemListLoader'] = stA1;
var stA0 = lcA0;if (((lcA3[2] || Array.at(lcA3, 2))) !== null) { gt = 116; break IF; }
var stI1 = 0;{ gt = 128; break IF; }
    }
    X_116: for (;;) { IF: if (gt <= 116) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[2] || Array.at(lcA3, 2)));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_128: for (;;) { IF: if (gt <= 128) {
stA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_showItemList'] = stI1;
var stA0 = c.useAsArray___3Ljava_lang_Object_2Ljava_lang_Object_2((lcA3[3] || Array.at(lcA3, 3)));
var lcA4 = stA0;
var lcI5 = (lcA4).length;
var lcI6 = 0;
    }
    X_147: for (;;) { IF: if (gt <= 147) {

if ((lcI6) >= (lcI5)) { gt = 188; break IF; }
var lcA7 = (lcA4[lcI6] || Array.at(lcA4, lcI6));
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_itemList'];var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_proto'],(refs_io_cloudoffice_platform_cockpit_text_TextItemView || (refs_io_cloudoffice_platform_cockpit_text_TextItemView = io_cloudoffice_platform_cockpit_text_TextItemView(false))).constructor.$class, lcA7);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
lcI6++;
{ gt = 0; continue X_147; }
    }
    X_188: for (;;) { IF: if (gt <= 188) {

var stA0 = c.useAsArray___3Ljava_lang_Object_2Ljava_lang_Object_2((lcA3[4] || Array.at(lcA3, 4)));
var lcA4 = stA0;
var lcI5 = (lcA4).length;
var lcI6 = 0;
    }
    X_204: for (;;) { IF: if (gt <= 204) {

if ((lcI6) >= (lcI5)) { gt = 245; break IF; }
var lcA7 = (lcA4[lcI6] || Array.at(lcA4, lcI6));
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_selectedTextItems'];var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_proto'],(refs_io_cloudoffice_platform_cockpit_text_TextItemView || (refs_io_cloudoffice_platform_cockpit_text_TextItemView = io_cloudoffice_platform_cockpit_text_TextItemView(false))).constructor.$class, lcA7);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
lcI6++;
{ gt = 0; continue X_204; }
    }
    X_245: for (;;) { IF: if (gt <= 245) {

var stA0 = lcA0;if (((lcA3[5] || Array.at(lcA3, 5))) !== null) { gt = 256; break IF; }
var stI1 = 0;{ gt = 268; break IF; }
    }
    X_256: for (;;) { IF: if (gt <= 256) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[5] || Array.at(lcA3, 5)));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_268: for (;;) { IF: if (gt <= 268) {
stA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_displayTextItem'] = stI1;
if ((lcA3[(6)] || Array.at(lcA3, (6))) !== null && !(lcA3[(6)] || Array.at(lcA3, (6)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(6)] || Array.at(lcA3, (6))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_layoutColumnId'] = (lcA3[(6)] || Array.at(lcA3, (6)));
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_proto'],(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, (lcA3[(7)] || Array.at(lcA3, (7))));
stA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_listComponentDefinition'] = stA1;
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_proto'],(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, (lcA3[(8)] || Array.at(lcA3, (8))));
stA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_actionMenuComponentDefinition'] = stA1;
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_proto'],(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, (lcA3[(9)] || Array.at(lcA3, (9))));
stA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_searchBoxComponentDefinition'] = stA1;
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"autocompleteinputbox");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getAutocompleteinputbox__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"itemListLoader");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_itemListLoader']);
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
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_itemList']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"selectedTextItems");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_selectedTextItems']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"displayTextItem");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isDisplayTextItem__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"layoutColumnId");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getLayoutColumnId__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"listComponentDefinition");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_listComponentDefinition']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"actionMenuComponentDefinition");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_actionMenuComponentDefinition']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"searchBoxComponentDefinition");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_searchBoxComponentDefinition']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(125));
var stA0 = invoker.toString__Ljava_lang_String_2(lcA1);
return stA0;

};
c['toString__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_text_TextConfiguration_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_proto']);
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_text_TextConfiguration_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lio_cloudoffice_platform_cockpit_text_TextConfiguration_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_text_TextConfiguration_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new io_cloudoffice_platform_cockpit_text_TextConfiguration;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = lcA0.getAutocompleteinputbox__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_autocompleteinputbox'] = stA1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_itemListLoader']) !== null) { gt = 29; break IF; }
var stA1 = null;{ gt = 53; break IF; }
    }
    X_29: for (;;) { IF: if (gt <= 29) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_itemListLoader']) !== (c._TYPE())) { gt = 45; break IF; }
var stA1 = c._TYPE();{ gt = 53; break IF; }
    }
    X_45: for (;;) { IF: if (gt <= 45) {

var stA1 = lcA0.getItemListLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_53: for (;;) { IF: if (gt <= 53) {
stA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_itemListLoader'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isShowItemList__Z();
stA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_showItemList'] = stI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_proto'];var stA1 = lcA2.getItemList__Ljava_util_List_2();
invoker.cloneList__VLjava_util_Collection_2Lnet_java_html_BrwsrCtx_2Ljava_util_Collection_2(stA0,stA1, lcA1, lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_itemList']);
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_proto'];var stA1 = lcA2.getSelectedTextItems__Ljava_util_List_2();
invoker.cloneList__VLjava_util_Collection_2Lnet_java_html_BrwsrCtx_2Ljava_util_Collection_2(stA0,stA1, lcA1, lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_selectedTextItems']);
var stA0 = lcA2;var stI1 = lcA0.isDisplayTextItem__Z();
stA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_displayTextItem'] = stI1;
var stA0 = lcA2;var stA1 = lcA0.getLayoutColumnId__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_layoutColumnId'] = stA1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_listComponentDefinition']) !== null) { gt = 124; break IF; }
var stA1 = null;{ gt = 148; break IF; }
    }
    X_124: for (;;) { IF: if (gt <= 124) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_listComponentDefinition']) !== (c._TYPE())) { gt = 140; break IF; }
var stA1 = c._TYPE();{ gt = 148; break IF; }
    }
    X_140: for (;;) { IF: if (gt <= 140) {

var stA1 = lcA0.getListComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_148: for (;;) { IF: if (gt <= 148) {
stA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_listComponentDefinition'] = stA1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_actionMenuComponentDefinition']) !== null) { gt = 163; break IF; }
var stA1 = null;{ gt = 187; break IF; }
    }
    X_163: for (;;) { IF: if (gt <= 163) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_actionMenuComponentDefinition']) !== (c._TYPE())) { gt = 179; break IF; }
var stA1 = c._TYPE();{ gt = 187; break IF; }
    }
    X_179: for (;;) { IF: if (gt <= 179) {

var stA1 = lcA0.getActionMenuComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_187: for (;;) { IF: if (gt <= 187) {
stA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_actionMenuComponentDefinition'] = stA1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_searchBoxComponentDefinition']) !== null) { gt = 202; break IF; }
var stA1 = null;{ gt = 226; break IF; }
    }
    X_202: for (;;) { IF: if (gt <= 202) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_searchBoxComponentDefinition']) !== (c._TYPE())) { gt = 218; break IF; }
var stA1 = c._TYPE();{ gt = 226; break IF; }
    }
    X_218: for (;;) { IF: if (gt <= 218) {

var stA1 = lcA0.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_226: for (;;) { IF: if (gt <= 226) {
stA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_searchBoxComponentDefinition'] = stA1;
return lcA2;

    }
}}}}}}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lio_cloudoffice_platform_cockpit_text_TextConfiguration_2 = function() {
  var  lcA0 = this;
invoker.applyBindings__V(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_proto']);
return lcA0;

};
c['applyBindings__Lio_cloudoffice_platform_cockpit_text_TextConfiguration_2'] = m;

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

var stI0 = lcA1 != null && lcA1['$instOf_io_cloudoffice_platform_cockpit_text_TextConfiguration'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_text_TextConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.text.TextConfiguration');
var lcA2 = lcA1;
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_autocompleteinputbox'], lcA2['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_autocompleteinputbox']);
if ((stI0) != 0) { gt = 40; break IF; }
return 0;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_itemListLoader']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_itemListLoader']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 67; break IF; }
return 0;
    }
    X_67: for (;;) { IF: if (gt <= 67) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_showItemList']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_showItemList']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 92; break IF; }
return 0;
    }
    X_92: for (;;) { IF: if (gt <= 92) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_itemList']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_itemList']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 119; break IF; }
return 0;
    }
    X_119: for (;;) { IF: if (gt <= 119) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_selectedTextItems']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_selectedTextItems']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 146; break IF; }
return 0;
    }
    X_146: for (;;) { IF: if (gt <= 146) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_displayTextItem']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_displayTextItem']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 171; break IF; }
return 0;
    }
    X_171: for (;;) { IF: if (gt <= 171) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_layoutColumnId'], lcA2['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_layoutColumnId']);
if ((stI0) != 0) { gt = 190; break IF; }
return 0;
    }
    X_190: for (;;) { IF: if (gt <= 190) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_listComponentDefinition']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_listComponentDefinition']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 217; break IF; }
return 0;
    }
    X_217: for (;;) { IF: if (gt <= 217) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_actionMenuComponentDefinition']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_actionMenuComponentDefinition']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 244; break IF; }
return 0;
    }
    X_244: for (;;) { IF: if (gt <= 244) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_searchBoxComponentDefinition']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_searchBoxComponentDefinition']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 271; break IF; }
return 0;
    }
    X_271: for (;;) { IF: if (gt <= 271) {

return 1;

    }
}}}}}}}}}}}}}
};
c['equals__ZLjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.hashCode__I = function() {
  var  lcA0 = this;
var stA0 = invoker.getName__Ljava_lang_String_2(c.constructor.$class);
var stI0 = invoker.hashCode__I(stA0);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_autocompleteinputbox'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_itemListLoader']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_showItemList']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_itemList']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_selectedTextItems']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_displayTextItem']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_layoutColumnId'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_listComponentDefinition']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_actionMenuComponentDefinition']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_searchBoxComponentDefinition']);
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
var stA0 = lcA0.clone__Lio_cloudoffice_platform_cockpit_text_TextConfiguration_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lio_cloudoffice_platform_cockpit_text_TextConfiguration$Html4JavaType_2 = function() {
return c._TYPE();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_text_TextConfiguration_2 = function(lcA0) {
return lcA0['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_text_TextConfiguration$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lio_cloudoffice_platform_cockpit_text_TextConfiguration_2Lio_cloudoffice_platform_cockpit_text_TextConfiguration_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_text_TextConfiguration_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_text_TextConfiguration$Html4JavaType;
(refs_io_cloudoffice_platform_cockpit_text_TextConfiguration$Html4JavaType || (refs_io_cloudoffice_platform_cockpit_text_TextConfiguration$Html4JavaType = io_cloudoffice_platform_cockpit_text_TextConfiguration$Html4JavaType(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_text_TextConfiguration$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_text_TextConfigurationfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_text_TextConfiguration', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_text_TextConfigurationfillInstOf });
    io_cloudoffice_platform_cockpit_text_TextConfigurationfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/text/TextConfiguration';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManager;
    var refs_io_cloudoffice_platform_cockpit_api_HelperItemView;
    var refs_net_java_html_json_Models;
    var refs_java_lang_Boolean;
    var refs_io_cloudoffice_platform_cockpit_api_ComponentDef;
    var refs_net_java_html_BrwsrCtx;
    var refs_io_cloudoffice_platform_cockpit_text_TextItemView;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_text_TextConfiguration$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_proto'] = null;
    this['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_autocompleteinputbox'] = null;
    this['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_itemListLoader'] = null;
    this['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_showItemList'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_itemList'] = null;
    this['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_selectedTextItems'] = null;
    this['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_displayTextItem'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_layoutColumnId'] = null;
    this['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_listComponentDefinition'] = null;
    this['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_actionMenuComponentDefinition'] = null;
    this['fld_io_cloudoffice_platform_cockpit_text_TextConfiguration_prop_searchBoxComponentDefinition'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_text_TextConfiguration = registerClass(exports,'io_cloudoffice_platform_cockpit_text_TextConfiguration',io_cloudoffice_platform_cockpit_text_TextConfiguration);


function io_cloudoffice_platform_cockpit_text_TextConfiguration$Html4JavaType() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_text_TextConfiguration$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_io_cloudoffice_platform_cockpit_text_TextConfiguration || (refs_io_cloudoffice_platform_cockpit_text_TextConfiguration = io_cloudoffice_platform_cockpit_text_TextConfiguration(false))).constructor.$class, (refs_io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManager || (refs_io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManager = io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManager(false))).constructor.$class, (10), 2);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"autocompleteinputbox", 0, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemListLoader", 1, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"showItemList", 2, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemList", 3, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"selectedTextItems", 4, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"displayTextItem", 5, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"layoutColumnId", (6), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"listComponentDefinition", (7), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"actionMenuComponentDefinition", (8), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"searchBoxComponentDefinition", (9), 0, 0);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"selectItem", 0);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"removeItemFromSelectedList", 1);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLio_cloudoffice_platform_cockpit_text_TextConfiguration_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 56; break IF; }
  case 1:{ gt = 73; break IF; }
  case 2:{ gt = 90; break IF; }
  case 3:{ gt = 110; break IF; }
  case 4:{ gt = 124; break IF; }
  case 5:{ gt = 138; break IF; }
  case 6:{ gt = 158; break IF; }
  case 7:{ gt = 175; break IF; }
  case 8:{ gt = 192; break IF; }
  case 9:{ gt = 209; break IF; }
  default: { gt = 226; break IF; }
}
    }
    X_56: for (;;) { IF: if (gt <= 56) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_text_TextConfiguration || (refs_io_cloudoffice_platform_cockpit_text_TextConfiguration = io_cloudoffice_platform_cockpit_text_TextConfiguration(false))).access$100__Lio_cloudoffice_platform_cockpit_text_TextConfiguration$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setAutocompleteinputbox__VLjava_lang_String_2(stA1);
return;
    }
    X_73: for (;;) { IF: if (gt <= 73) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_text_TextConfiguration || (refs_io_cloudoffice_platform_cockpit_text_TextConfiguration = io_cloudoffice_platform_cockpit_text_TextConfiguration(false))).access$100__Lio_cloudoffice_platform_cockpit_text_TextConfiguration$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_api_HelperItemView || (refs_io_cloudoffice_platform_cockpit_api_HelperItemView = vm.io_cloudoffice_platform_cockpit_api_HelperItemView(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_api_HelperItemView']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.api.HelperItemView');
stA0.setItemListLoader__VLio_cloudoffice_platform_cockpit_api_HelperItemView_2(stA1);
return;
    }
    X_90: for (;;) { IF: if (gt <= 90) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_text_TextConfiguration || (refs_io_cloudoffice_platform_cockpit_text_TextConfiguration = io_cloudoffice_platform_cockpit_text_TextConfiguration(false))).access$100__Lio_cloudoffice_platform_cockpit_text_TextConfiguration$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setShowItemList__VZ(stI1);
return;
    }
    X_110: for (;;) { IF: if (gt <= 110) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_text_TextConfiguration || (refs_io_cloudoffice_platform_cockpit_text_TextConfiguration = io_cloudoffice_platform_cockpit_text_TextConfiguration(false))).access$100__Lio_cloudoffice_platform_cockpit_text_TextConfiguration$Html4JavaType_2();
var stA1 = lcA1.getItemList__Ljava_util_List_2();
invoker.replaceValue__VLjava_util_Collection_2Ljava_lang_Class_2Ljava_lang_Object_2(stA0,stA1, (refs_io_cloudoffice_platform_cockpit_text_TextItemView || (refs_io_cloudoffice_platform_cockpit_text_TextItemView = io_cloudoffice_platform_cockpit_text_TextItemView(false))).constructor.$class, lcA3);
return;
    }
    X_124: for (;;) { IF: if (gt <= 124) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_text_TextConfiguration || (refs_io_cloudoffice_platform_cockpit_text_TextConfiguration = io_cloudoffice_platform_cockpit_text_TextConfiguration(false))).access$100__Lio_cloudoffice_platform_cockpit_text_TextConfiguration$Html4JavaType_2();
var stA1 = lcA1.getSelectedTextItems__Ljava_util_List_2();
invoker.replaceValue__VLjava_util_Collection_2Ljava_lang_Class_2Ljava_lang_Object_2(stA0,stA1, (refs_io_cloudoffice_platform_cockpit_text_TextItemView || (refs_io_cloudoffice_platform_cockpit_text_TextItemView = io_cloudoffice_platform_cockpit_text_TextItemView(false))).constructor.$class, lcA3);
return;
    }
    X_138: for (;;) { IF: if (gt <= 138) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_text_TextConfiguration || (refs_io_cloudoffice_platform_cockpit_text_TextConfiguration = io_cloudoffice_platform_cockpit_text_TextConfiguration(false))).access$100__Lio_cloudoffice_platform_cockpit_text_TextConfiguration$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setDisplayTextItem__VZ(stI1);
return;
    }
    X_158: for (;;) { IF: if (gt <= 158) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_text_TextConfiguration || (refs_io_cloudoffice_platform_cockpit_text_TextConfiguration = io_cloudoffice_platform_cockpit_text_TextConfiguration(false))).access$100__Lio_cloudoffice_platform_cockpit_text_TextConfiguration$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setLayoutColumnId__VLjava_lang_String_2(stA1);
return;
    }
    X_175: for (;;) { IF: if (gt <= 175) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_text_TextConfiguration || (refs_io_cloudoffice_platform_cockpit_text_TextConfiguration = io_cloudoffice_platform_cockpit_text_TextConfiguration(false))).access$100__Lio_cloudoffice_platform_cockpit_text_TextConfiguration$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.api.ComponentDef');
stA0.setListComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2(stA1);
return;
    }
    X_192: for (;;) { IF: if (gt <= 192) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_text_TextConfiguration || (refs_io_cloudoffice_platform_cockpit_text_TextConfiguration = io_cloudoffice_platform_cockpit_text_TextConfiguration(false))).access$100__Lio_cloudoffice_platform_cockpit_text_TextConfiguration$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.api.ComponentDef');
stA0.setActionMenuComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2(stA1);
return;
    }
    X_209: for (;;) { IF: if (gt <= 209) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_text_TextConfiguration || (refs_io_cloudoffice_platform_cockpit_text_TextConfiguration = io_cloudoffice_platform_cockpit_text_TextConfiguration(false))).access$100__Lio_cloudoffice_platform_cockpit_text_TextConfiguration$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.api.ComponentDef');
stA0.setSearchBoxComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2(stA1);
return;
    }
    X_226: for (;;) { IF: if (gt <= 226) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_text_TextConfiguration_2I = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 56; break IF; }
  case 1:{ gt = 61; break IF; }
  case 2:{ gt = 66; break IF; }
  case 3:{ gt = 74; break IF; }
  case 4:{ gt = 79; break IF; }
  case 5:{ gt = 84; break IF; }
  case 6:{ gt = 92; break IF; }
  case 7:{ gt = 97; break IF; }
  case 8:{ gt = 102; break IF; }
  case 9:{ gt = 107; break IF; }
  default: { gt = 112; break IF; }
}
    }
    X_56: for (;;) { IF: if (gt <= 56) {

var stA0 = lcA1.getAutocompleteinputbox__Ljava_lang_String_2();
return stA0;
    }
    X_61: for (;;) { IF: if (gt <= 61) {

var stA0 = lcA1.getItemListLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
return stA0;
    }
    X_66: for (;;) { IF: if (gt <= 66) {

var stI0 = lcA1.isShowItemList__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_74: for (;;) { IF: if (gt <= 74) {

var stA0 = lcA1.getItemList__Ljava_util_List_2();
return stA0;
    }
    X_79: for (;;) { IF: if (gt <= 79) {

var stA0 = lcA1.getSelectedTextItems__Ljava_util_List_2();
return stA0;
    }
    X_84: for (;;) { IF: if (gt <= 84) {

var stI0 = lcA1.isDisplayTextItem__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_92: for (;;) { IF: if (gt <= 92) {

var stA0 = lcA1.getLayoutColumnId__Ljava_lang_String_2();
return stA0;
    }
    X_97: for (;;) { IF: if (gt <= 97) {

var stA0 = lcA1.getListComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
return stA0;
    }
    X_102: for (;;) { IF: if (gt <= 102) {

var stA0 = lcA1.getActionMenuComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
return stA0;
    }
    X_107: for (;;) { IF: if (gt <= 107) {

var stA0 = lcA1.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
return stA0;
    }
    X_112: for (;;) { IF: if (gt <= 112) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.call__VLio_cloudoffice_platform_cockpit_text_TextConfiguration_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0: { gt = 28; break IF; }
  case 1: { gt = 46; break IF; }
  default: { gt = 64; break IF; }
}
    }
    X_28: for (;;) { IF: if (gt <= 28) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_text_TextConfiguration || (refs_io_cloudoffice_platform_cockpit_text_TextConfiguration = io_cloudoffice_platform_cockpit_text_TextConfiguration(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_text_TextConfiguration_2(lcA1);
var stA1 = invoker.toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_text_TextItemView || (refs_io_cloudoffice_platform_cockpit_text_TextItemView = io_cloudoffice_platform_cockpit_text_TextItemView(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_text_TextItemView']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.text.TextItemView');
(refs_io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManager || (refs_io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManager = io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManager(false))).selectItem__VLio_cloudoffice_platform_cockpit_text_TextConfiguration_2Lio_cloudoffice_platform_cockpit_text_TextItemView_2(stA0, stA1);
return;
    }
    X_46: for (;;) { IF: if (gt <= 46) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_text_TextConfiguration || (refs_io_cloudoffice_platform_cockpit_text_TextConfiguration = io_cloudoffice_platform_cockpit_text_TextConfiguration(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_text_TextConfiguration_2(lcA1);
var stA1 = invoker.toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_text_TextItemView || (refs_io_cloudoffice_platform_cockpit_text_TextItemView = io_cloudoffice_platform_cockpit_text_TextItemView(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_text_TextItemView']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.text.TextItemView');
(refs_io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManager || (refs_io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManager = io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManager(false))).removeItemFromSelectedList__VLio_cloudoffice_platform_cockpit_text_TextConfiguration_2Lio_cloudoffice_platform_cockpit_text_TextItemView_2(stA0, stA1);
return;
    }
    X_64: for (;;) { IF: if (gt <= 64) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_text_TextConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.text.TextConfiguration');
var stA0 = (refs_io_cloudoffice_platform_cockpit_text_TextConfiguration || (refs_io_cloudoffice_platform_cockpit_text_TextConfiguration = io_cloudoffice_platform_cockpit_text_TextConfiguration(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_text_TextConfiguration_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLio_cloudoffice_platform_cockpit_text_TextConfiguration_2I = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0: { gt = 20; break IF; }
  default: { gt = 25; break IF; }
}
    }
    X_20: for (;;) { IF: if (gt <= 20) {

(refs_io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManager || (refs_io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManager = io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManager(false))).itemSearchAutocomplete__VLio_cloudoffice_platform_cockpit_text_TextConfiguration_2(lcA1);
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
    m = c.onMessage__VLio_cloudoffice_platform_cockpit_text_TextConfiguration_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
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
    m = c.read__Lio_cloudoffice_platform_cockpit_text_TextConfiguration_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_text_TextConfiguration;
(refs_io_cloudoffice_platform_cockpit_text_TextConfiguration || (refs_io_cloudoffice_platform_cockpit_text_TextConfiguration = io_cloudoffice_platform_cockpit_text_TextConfiguration(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_text_TextConfiguration$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lio_cloudoffice_platform_cockpit_text_TextConfiguration_2Lio_cloudoffice_platform_cockpit_text_TextConfiguration_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_text_TextConfiguration || (refs_io_cloudoffice_platform_cockpit_text_TextConfiguration = io_cloudoffice_platform_cockpit_text_TextConfiguration(false))).access$400__Lio_cloudoffice_platform_cockpit_text_TextConfiguration_2Lio_cloudoffice_platform_cockpit_text_TextConfiguration_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_text_TextConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.text.TextConfiguration');
lcA0.onMessage__VLio_cloudoffice_platform_cockpit_text_TextConfiguration_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_text_TextConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.text.TextConfiguration');
lcA0.onChange__VLio_cloudoffice_platform_cockpit_text_TextConfiguration_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lio_cloudoffice_platform_cockpit_text_TextConfiguration_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_text_TextConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.text.TextConfiguration');
var stA0 = lcA0.cloneTo__Lio_cloudoffice_platform_cockpit_text_TextConfiguration_2Lio_cloudoffice_platform_cockpit_text_TextConfiguration_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_text_TextConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.text.TextConfiguration');
lcA0.call__VLio_cloudoffice_platform_cockpit_text_TextConfiguration_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_text_TextConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.text.TextConfiguration');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_text_TextConfiguration_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_text_TextConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.text.TextConfiguration');
lcA0.setValue__VLio_cloudoffice_platform_cockpit_text_TextConfiguration_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_text_TextConfiguration$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_text_TextConfiguration$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_text_TextConfiguration$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_text_TextConfiguration$Html4JavaTypefillInstOf });
    io_cloudoffice_platform_cockpit_text_TextConfiguration$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/text/TextConfiguration$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_text_TextConfiguration;
    var refs_io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManager;
    var refs_org_netbeans_html_json_spi_Proto$Type;
    var refs_java_lang_String;
    var refs_io_cloudoffice_platform_cockpit_api_HelperItemView;
    var refs_java_lang_Boolean;
    var refs_io_cloudoffice_platform_cockpit_text_TextItemView;
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
vm.io_cloudoffice_platform_cockpit_text_TextConfiguration$Html4JavaType = io_cloudoffice_platform_cockpit_text_TextConfiguration$Html4JavaType;

vm.io_cloudoffice_platform_cockpit_api_ComponentDef = link('io/cloudoffice/platform/cockpit/api/ComponentDef', function(f) { vm.io_cloudoffice_platform_cockpit_api_ComponentDef =  f; });
vm.net_java_html_json_Models = link('net/java/html/json/Models', function(f) { vm.net_java_html_json_Models =  f; });
vm.io_cloudoffice_platform_cockpit_api_HelperItemView = link('io/cloudoffice/platform/cockpit/api/HelperItemView', function(f) { vm.io_cloudoffice_platform_cockpit_api_HelperItemView =  f; });

function io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManager() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManager;
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
    m = c.itemSearchAutocomplete__VLio_cloudoffice_platform_cockpit_text_TextConfiguration_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0.getAutocompleteinputbox__Ljava_lang_String_2();
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA0);
if ((stI0) == 0) { gt = 48; break IF; }
var stA0 = lcA0.getItemListLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
invoker.setActive__VZ(stA0,1);
lcA0.setShowItemList__VZ(1);
var stA0 = new io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManager$GetRelatedTextAsyncRequest;
var stA1 = stA0;var stA2 = "\"/VirtualItem-portlet.searchitem/autoCompleteSearch\"";var stA3 = new io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManager$GetRelatedTextAsyncRequestCallback;
(refs_io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManager$GetRelatedTextAsyncRequestCallback || (refs_io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManager$GetRelatedTextAsyncRequestCallback = io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManager$GetRelatedTextAsyncRequestCallback(false))).constructor.cons__V.call(stA3);
(refs_io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManager$GetRelatedTextAsyncRequest || (refs_io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManager$GetRelatedTextAsyncRequest = io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManager$GetRelatedTextAsyncRequest(false))).constructor.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_ServerCallback_2Lio_cloudoffice_platform_cockpit_text_TextConfiguration_2.call(stA1, stA2, stA3, lcA0);
var lcA1 = stA0;
invoker.call__V(lcA1);
{ gt = 62; break IF; }
    }
    X_48: for (;;) { IF: if (gt <= 48) {

lcA0.setShowItemList__VZ(0);
var stA0 = lcA0.getItemList__Ljava_util_List_2();
invoker.clear__V(stA0);
    }
    X_62: for (;;) { IF: if (gt <= 62) {
return;

    }
}}}
};
c['itemSearchAutocomplete__VLio_cloudoffice_platform_cockpit_text_TextConfiguration_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.selectItem__VLio_cloudoffice_platform_cockpit_text_TextConfiguration_2Lio_cloudoffice_platform_cockpit_text_TextItemView_2 = function(lcA0, lcA1) {
lcA0.setAutocompleteinputbox__VLjava_lang_String_2("");
var stA0 = lcA0.getSelectedTextItems__Ljava_util_List_2();
invoker.clear__V(stA0);
var stA0 = lcA0.getSelectedTextItems__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA1);
return;

};
c['selectItem__VLio_cloudoffice_platform_cockpit_text_TextConfiguration_2Lio_cloudoffice_platform_cockpit_text_TextItemView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.removeItemFromSelectedList__VLio_cloudoffice_platform_cockpit_text_TextConfiguration_2Lio_cloudoffice_platform_cockpit_text_TextItemView_2 = function(lcA0, lcA1) {
var stA0 = lcA0.getSelectedTextItems__Ljava_util_List_2();
var stI0 = invoker.remove__ZLjava_lang_Object_2(stA0,lcA1);
return;

};
c['removeItemFromSelectedList__VLio_cloudoffice_platform_cockpit_text_TextConfiguration_2Lio_cloudoffice_platform_cockpit_text_TextItemView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManagerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManager', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManagerfillInstOf });
    io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManagerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/text/TextComponent$TextAdminManager';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManager$GetRelatedTextAsyncRequestCallback;
    var refs_io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManager$GetRelatedTextAsyncRequest;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManager = registerClass(exports,'io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManager',io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManager);


function io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManager$GetRelatedTextAsyncRequestCallback() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManager$GetRelatedTextAsyncRequestCallback;
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
var stA0 = invoker.getView__Ljava_lang_Object_2(stA0);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_text_TextConfiguration']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.text.TextConfiguration');
var lcA2 = stA0;
var stA0 = lcA2.getItemList__Ljava_util_List_2();
invoker.clear__V(stA0);
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](lcA1);
if ((stI0) == 0) { gt = 165; break IF; }
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Z'](lcA1, 1);
var stA0 = invoker.getArray__Ljava_util_List_2(stA0);
var lcA3 = stA0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA3);
var lcA4 = stA0;
    }
    X_44: for (;;) { IF: if (gt <= 44) {

var stI0 = invoker.hasNext__Z(lcA4);
if ((stI0) == 0) { gt = 165; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA4);
if (stA0 !== null && !stA0['$instOf_java_util_Map']) vm.java_lang_Class(false).castEx(stA0, 'java.util.Map');
var lcA5 = stA0;
var stA0 = new io_cloudoffice_platform_cockpit_text_TextItemView;
(refs_io_cloudoffice_platform_cockpit_text_TextItemView || (refs_io_cloudoffice_platform_cockpit_text_TextItemView = io_cloudoffice_platform_cockpit_text_TextItemView(false))).constructor.cons__V.call(stA0);
var lcA6 = stA0;
var stA0 = lcA6;var stA1 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA5,"itemId");
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemId__VLjava_lang_String_2(stA1);
var stA0 = lcA6;var stA1 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA5,"itemName");
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
var stA1 = invoker.replaceAll__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2(stA1,"\\<.*?\\>", "");
stA0.setItemName__VLjava_lang_String_2(stA1);
var stA0 = lcA6;var stA1 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA5,"itemType");
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemType__VLjava_lang_String_2(stA1);
var stA0 = lcA6;var stA1 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA5,"description");
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemText__VLjava_lang_String_2(stA1);
var stA0 = lcA2.getItemList__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA6);
{ gt = 0; continue X_44; }
    }
    X_165: for (;;) { IF: if (gt <= 165) {

var stA0 = lcA2.getItemListLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
invoker.setActive__VZ(stA0,0);
return;

    }
}}}
};
c['process__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManager$GetRelatedTextAsyncRequestCallbackfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManager$GetRelatedTextAsyncRequestCallback', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManager$GetRelatedTextAsyncRequestCallbackfillInstOf });
    io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManager$GetRelatedTextAsyncRequestCallbackfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/text/TextComponent$TextAdminManager$GetRelatedTextAsyncRequestCallback';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_ServerCallback;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_text_TextItemView;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManager$GetRelatedTextAsyncRequestCallback = registerClass(exports,'io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManager$GetRelatedTextAsyncRequestCallback',io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManager$GetRelatedTextAsyncRequestCallback);


function io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManager$GetRelatedTextAsyncRequest() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManager$GetRelatedTextAsyncRequest;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_api_AsyncRequest(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._map = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManager$GetRelatedTextAsyncRequest_map'] = v; return this['fld_io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManager$GetRelatedTextAsyncRequest_map']; };
    m = CLS.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_ServerCallback_2Lio_cloudoffice_platform_cockpit_text_TextConfiguration_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
(refs_io_cloudoffice_platform_cockpit_api_AsyncRequest || (refs_io_cloudoffice_platform_cockpit_api_AsyncRequest = vm.io_cloudoffice_platform_cockpit_api_AsyncRequest(false))).constructor['cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_ServerCallback_2Ljava_lang_Object_2'].call(lcA0, lcA1, lcA2, lcA3);
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManager$GetRelatedTextAsyncRequest_map'] = null;
c.prepareRequestParams__VLio_cloudoffice_platform_cockpit_text_TextConfiguration_2.call(lcA0, lcA3);
return;

};
CLS['cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_ServerCallback_2Lio_cloudoffice_platform_cockpit_text_TextConfiguration_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.prepareRequestParams__VLio_cloudoffice_platform_cockpit_text_TextConfiguration_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA1.getAutocompleteinputbox__Ljava_lang_String_2();
var lcA2 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](lcA2);
if ((stI0) == 0) { gt = 142; break IF; }
var stA0 = lcA0;var stA1 = new vm.java_util_HashMap;
(refs_java_util_HashMap || (refs_java_util_HashMap = vm.java_util_HashMap(false))).constructor['cons__V'].call(stA1);
stA0['fld_io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManager$GetRelatedTextAsyncRequest_map'] = stA1;
var stA0 = invoker.getMap__Ljava_util_Map_2(lcA0);
var stA1 = "searchKey";var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"'");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,lcA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"'");
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = invoker.getMap__Ljava_util_Map_2(lcA0);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,"fromClause", "USER_DEFINE");
var stA0 = invoker.getMap__Ljava_util_Map_2(lcA0);
var stA1 = "existingItems";var stA2 = c.getExistingItems__Ljava_util_List_2Lio_cloudoffice_platform_cockpit_text_TextConfiguration_2.call(lcA0, lcA1);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = new vm.java_util_HashMap;
(refs_java_util_HashMap || (refs_java_util_HashMap = vm.java_util_HashMap(false))).constructor['cons__V'].call(stA0);
var lcA3 = stA0;
var stA0 = lcA3;var stA1 = "scopeGroup";var stA2 = (refs_io_cloudoffice_platform_cockpit_api_Session || (refs_io_cloudoffice_platform_cockpit_api_Session = vm.io_cloudoffice_platform_cockpit_api_Session(false)))['getCompany__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(stA2,"itemId");
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA3,"businessModelName", "UDI_ARTICLE");
var stA0 = invoker.getMap__Ljava_util_Map_2(lcA0);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,"attributes", lcA3);
{ gt = 169; break IF; }
    }
    X_142: for (;;) { IF: if (gt <= 142) {

lcA0['fld_io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManager$GetRelatedTextAsyncRequest_map'] = null;
lcA1.setShowItemList__VZ(0);
var stA0 = lcA1.getItemListLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
invoker.setActive__VZ(stA0,0);
var stA0 = lcA1.getItemList__Ljava_util_List_2();
invoker.clear__V(stA0);
    }
    X_169: for (;;) { IF: if (gt <= 169) {
return;

    }
}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.getExistingItems__Ljava_util_List_2Lio_cloudoffice_platform_cockpit_text_TextConfiguration_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new vm.java_util_ArrayList;
(refs_java_util_ArrayList || (refs_java_util_ArrayList = vm.java_util_ArrayList(false))).constructor['cons__V'].call(stA0);
var lcA2 = stA0;
var stA0 = lcA1.getSelectedTextItems__Ljava_util_List_2();
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA3 = stA0;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

var stI0 = invoker.hasNext__Z(lcA3);
if ((stI0) == 0) { gt = 89; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA3);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_text_TextItemView']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.text.TextItemView');
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
    m = c.preparePostData__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getEndpoint__Ljava_lang_String_2(lcA0);
var stA2 = invoker.getMap__Ljava_util_Map_2(lcA0);
invoker.put__VLjava_lang_String_2Ljava_lang_Object_2(stA0,stA1, stA2);
return;

};
c['preparePostData__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.doValidate__Z = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = null;var stA1 = invoker.getMap__Ljava_util_Map_2(lcA0);
if ((stA0) === (stA1)) { gt = 12; break IF; }
var stI0 = 1;{ gt = 13; break IF; }
    }
    X_12: for (;;) { IF: if (gt <= 12) {

var stI0 = 0;    }
    X_13: for (;;) { IF: if (gt <= 13) {
return stI0;

    }
}}}
};
c['doValidate__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getMap__Ljava_util_Map_2 = function() {
  var  lcA0 = this;
return lcA0['fld_io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManager$GetRelatedTextAsyncRequest_map'];

};
c['getMap__Ljava_util_Map_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setMap__VLjava_util_Map_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManager$GetRelatedTextAsyncRequest_map'] = lcA1;
return;

};
c['setMap__VLjava_util_Map_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManager$GetRelatedTextAsyncRequestfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManager$GetRelatedTextAsyncRequest', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManager$GetRelatedTextAsyncRequestfillInstOf });
    io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManager$GetRelatedTextAsyncRequestfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/text/TextComponent$TextAdminManager$GetRelatedTextAsyncRequest';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_AsyncRequest;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_java_util_HashMap;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_api_Session;
    var refs_java_util_ArrayList;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManager$GetRelatedTextAsyncRequest_map'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManager$GetRelatedTextAsyncRequest = registerClass(exports,'io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManager$GetRelatedTextAsyncRequest',io_cloudoffice_platform_cockpit_text_TextComponent$TextAdminManager$GetRelatedTextAsyncRequest);

vm.java_util_ArrayList = link('java/util/ArrayList', function(f) { vm.java_util_ArrayList =  f; });

function io_cloudoffice_platform_cockpit_text_TextView() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_text_TextView;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_text_TextView_proto'] = v; return this['fld_io_cloudoffice_platform_cockpit_text_TextView_proto']; };
  m = c._prop_instance = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_instance'] = v; return this['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_instance']; };
  m = c._prop_designerMode = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_designerMode'] = v; return this['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_designerMode']; };
  m = c._prop_configuration = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_configuration'] = v; return this['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_configuration']; };
  m = c._prop_textItem = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_textItem'] = v; return this['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_textItem']; };
  m = c._prop_viewMode = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_viewMode'] = v; return this['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_viewMode']; };
  m = c._prop_fullViewEnabled = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_fullViewEnabled'] = v; return this['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_fullViewEnabled']; };
  m = c._prop_visible = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_visible'] = v; return this['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_visible']; };
  m = c._prop_displayTextItem = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_displayTextItem'] = v; return this['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_displayTextItem']; };
  m = c._prop_itemId = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_itemId'] = v; return this['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_itemId']; };
  m = c._prop_itemName = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_itemName'] = v; return this['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_itemName']; };
  m = c._prop_itemText = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_itemText'] = v; return this['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_itemText']; };
  m = c._prop_hasOwnerPermission = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_hasOwnerPermission'] = v; return this['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_hasOwnerPermission']; };
  m = c._prop_hasAdminPermission = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_hasAdminPermission'] = v; return this['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_hasAdminPermission']; };
  m = c._prop_hasWritePermission = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_hasWritePermission'] = v; return this['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_hasWritePermission']; };
  m = c._prop_hasReadPermission = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_hasReadPermission'] = v; return this['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_hasReadPermission']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_io_cloudoffice_platform_cockpit_text_TextComponent || (refs_io_cloudoffice_platform_cockpit_text_TextComponent = io_cloudoffice_platform_cockpit_text_TextComponent(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.getInstance__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_proto'],"instance");
return lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_instance'];

};
c['getInstance__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setInstance__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_instance'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_instance'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_proto'],"instance", lcA2, lcA1);
return;

    }
}}
};
c['setInstance__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isDesignerMode__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_proto'],"designerMode");
return lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_designerMode'];

};
c['isDesignerMode__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setDesignerMode__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_designerMode']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_designerMode'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_proto'];var stA1 = "designerMode";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setDesignerMode__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getConfiguration__Lio_cloudoffice_platform_cockpit_text_TextConfiguration_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_proto'],"configuration");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_configuration']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new io_cloudoffice_platform_cockpit_text_TextConfiguration;
(refs_io_cloudoffice_platform_cockpit_text_TextConfiguration || (refs_io_cloudoffice_platform_cockpit_text_TextConfiguration = io_cloudoffice_platform_cockpit_text_TextConfiguration(false))).constructor.cons__V.call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_configuration'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_configuration'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_configuration']['$instOf_io_cloudoffice_platform_cockpit_text_TextConfiguration']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_configuration'], 'io.cloudoffice.platform.cockpit.text.TextConfiguration');
return lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_configuration'];

    }
}}
};
c['getConfiguration__Lio_cloudoffice_platform_cockpit_text_TextConfiguration_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setConfiguration__VLio_cloudoffice_platform_cockpit_text_TextConfiguration_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_configuration'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_configuration'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_proto'],"configuration", lcA2, lcA1);
return;

    }
}}
};
c['setConfiguration__VLio_cloudoffice_platform_cockpit_text_TextConfiguration_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getTextItem__Lio_cloudoffice_platform_cockpit_text_TextItemView_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_proto'],"textItem");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_textItem']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new io_cloudoffice_platform_cockpit_text_TextItemView;
(refs_io_cloudoffice_platform_cockpit_text_TextItemView || (refs_io_cloudoffice_platform_cockpit_text_TextItemView = io_cloudoffice_platform_cockpit_text_TextItemView(false))).constructor.cons__V.call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_textItem'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_textItem'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_textItem']['$instOf_io_cloudoffice_platform_cockpit_text_TextItemView']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_textItem'], 'io.cloudoffice.platform.cockpit.text.TextItemView');
return lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_textItem'];

    }
}}
};
c['getTextItem__Lio_cloudoffice_platform_cockpit_text_TextItemView_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setTextItem__VLio_cloudoffice_platform_cockpit_text_TextItemView_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_textItem'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_textItem'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_proto'],"textItem", lcA2, lcA1);
return;

    }
}}
};
c['setTextItem__VLio_cloudoffice_platform_cockpit_text_TextItemView_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getViewMode__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_proto'],"viewMode");
return lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_viewMode'];

};
c['getViewMode__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setViewMode__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_viewMode'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_viewMode'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_proto'],"viewMode", lcA2, lcA1);
return;

    }
}}
};
c['setViewMode__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isFullViewEnabled__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_proto'],"fullViewEnabled");
return lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_fullViewEnabled'];

};
c['isFullViewEnabled__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setFullViewEnabled__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_fullViewEnabled']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_fullViewEnabled'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_proto'];var stA1 = "fullViewEnabled";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setFullViewEnabled__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isVisible__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_proto'],"visible");
return lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_visible'];

};
c['isVisible__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setVisible__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_visible']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_visible'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_proto'];var stA1 = "visible";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setVisible__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isDisplayTextItem__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_proto'],"displayTextItem");
return lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_displayTextItem'];

};
c['isDisplayTextItem__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setDisplayTextItem__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_displayTextItem']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_displayTextItem'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_proto'];var stA1 = "displayTextItem";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setDisplayTextItem__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getItemId__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_proto'],"itemId");
return lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_itemId'];

};
c['getItemId__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemId__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_itemId'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_itemId'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_proto'],"itemId", lcA2, lcA1);
return;

    }
}}
};
c['setItemId__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getItemName__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_proto'],"itemName");
return lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_itemName'];

};
c['getItemName__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemName__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_itemName'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_itemName'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_proto'],"itemName", lcA2, lcA1);
return;

    }
}}
};
c['setItemName__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getItemText__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_proto'],"itemText");
return lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_itemText'];

};
c['getItemText__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemText__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_itemText'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_itemText'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_proto'],"itemText", lcA2, lcA1);
return;

    }
}}
};
c['setItemText__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isHasOwnerPermission__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_proto'],"hasOwnerPermission");
return lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_hasOwnerPermission'];

};
c['isHasOwnerPermission__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setHasOwnerPermission__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_hasOwnerPermission']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_hasOwnerPermission'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_proto'];var stA1 = "hasOwnerPermission";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
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
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_proto'],"hasAdminPermission");
return lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_hasAdminPermission'];

};
c['isHasAdminPermission__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setHasAdminPermission__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_hasAdminPermission']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_hasAdminPermission'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_proto'];var stA1 = "hasAdminPermission";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
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
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_proto'],"hasWritePermission");
return lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_hasWritePermission'];

};
c['isHasWritePermission__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setHasWritePermission__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_hasWritePermission']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_hasWritePermission'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_proto'];var stA1 = "hasWritePermission";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
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
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_proto'],"hasReadPermission");
return lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_hasReadPermission'];

};
c['isHasReadPermission__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setHasReadPermission__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_hasReadPermission']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_hasReadPermission'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_proto'];var stA1 = "hasReadPermission";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
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
stA0['fld_io_cloudoffice_platform_cockpit_text_TextView_proto'] = stA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_configuration'] = c._TYPE();
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_textItem'] = c._TYPE();
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLjava_lang_String_2ZLio_cloudoffice_platform_cockpit_text_TextConfiguration_2Lio_cloudoffice_platform_cockpit_text_TextItemView_2Ljava_lang_String_2ZZZLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2ZZZZ = function(lcA1, lcI2, lcA3, lcA4, lcA5, lcI6, lcI7, lcI8, lcA9, lcA10, lcA11, lcI12, lcI13, lcI14, lcI15) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_instance'] = lcA1;
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_designerMode'] = lcI2;
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_configuration'] = lcA3;
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_textItem'] = lcA4;
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_viewMode'] = lcA5;
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_fullViewEnabled'] = lcI6;
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_visible'] = lcI7;
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_displayTextItem'] = lcI8;
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_itemId'] = lcA9;
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_itemName'] = lcA10;
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_itemText'] = lcA11;
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_hasOwnerPermission'] = lcI12;
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_hasAdminPermission'] = lcI13;
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_hasWritePermission'] = lcI14;
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_hasReadPermission'] = lcI15;
return;

};
CLS['cons__VLjava_lang_String_2ZLio_cloudoffice_platform_cockpit_text_TextConfiguration_2Lio_cloudoffice_platform_cockpit_text_TextItemView_2Ljava_lang_String_2ZZZLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2ZZZZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, (15));
var lcA3 = stA0;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, (15));
Array.at(stA2, 0, "instance");
Array.at(stA2, 1, "designerMode");
Array.at(stA2, 2, "configuration");
Array.at(stA2, 3, "textItem");
Array.at(stA2, 4, "viewMode");
Array.at(stA2, 5, "fullViewEnabled");
Array.at(stA2, (6), "visible");
Array.at(stA2, (7), "displayTextItem");
Array.at(stA2, (8), "itemId");
Array.at(stA2, (9), "itemName");
Array.at(stA2, (10), "itemText");
Array.at(stA2, (11), "hasOwnerPermission");
Array.at(stA2, (12), "hasAdminPermission");
Array.at(stA2, (13), "hasWritePermission");
Array.at(stA2, (14), "hasReadPermission");
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
if ((lcA3[0] || Array.at(lcA3, 0)) !== null && !(lcA3[0] || Array.at(lcA3, 0))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[0] || Array.at(lcA3, 0)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_instance'] = (lcA3[0] || Array.at(lcA3, 0));
var stA0 = lcA0;if (((lcA3[1] || Array.at(lcA3, 1))) !== null) { gt = 130; break IF; }
var stI1 = 0;{ gt = 142; break IF; }
    }
    X_130: for (;;) { IF: if (gt <= 130) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[1] || Array.at(lcA3, 1)));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_142: for (;;) { IF: if (gt <= 142) {
stA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_designerMode'] = stI1;
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_proto'],(refs_io_cloudoffice_platform_cockpit_text_TextConfiguration || (refs_io_cloudoffice_platform_cockpit_text_TextConfiguration = io_cloudoffice_platform_cockpit_text_TextConfiguration(false))).constructor.$class, (lcA3[2] || Array.at(lcA3, 2)));
stA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_configuration'] = stA1;
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_proto'],(refs_io_cloudoffice_platform_cockpit_text_TextItemView || (refs_io_cloudoffice_platform_cockpit_text_TextItemView = io_cloudoffice_platform_cockpit_text_TextItemView(false))).constructor.$class, (lcA3[3] || Array.at(lcA3, 3)));
stA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_textItem'] = stA1;
if ((lcA3[4] || Array.at(lcA3, 4)) !== null && !(lcA3[4] || Array.at(lcA3, 4))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[4] || Array.at(lcA3, 4)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_viewMode'] = (lcA3[4] || Array.at(lcA3, 4));
var stA0 = lcA0;if (((lcA3[5] || Array.at(lcA3, 5))) !== null) { gt = 198; break IF; }
var stI1 = 0;{ gt = 210; break IF; }
    }
    X_198: for (;;) { IF: if (gt <= 198) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[5] || Array.at(lcA3, 5)));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_210: for (;;) { IF: if (gt <= 210) {
stA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_fullViewEnabled'] = stI1;
var stA0 = lcA0;if (((lcA3[(6)] || Array.at(lcA3, (6)))) !== null) { gt = 225; break IF; }
var stI1 = 0;{ gt = 238; break IF; }
    }
    X_225: for (;;) { IF: if (gt <= 225) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(6)] || Array.at(lcA3, (6))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_238: for (;;) { IF: if (gt <= 238) {
stA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_visible'] = stI1;
var stA0 = lcA0;if (((lcA3[(7)] || Array.at(lcA3, (7)))) !== null) { gt = 253; break IF; }
var stI1 = 0;{ gt = 266; break IF; }
    }
    X_253: for (;;) { IF: if (gt <= 253) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(7)] || Array.at(lcA3, (7))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_266: for (;;) { IF: if (gt <= 266) {
stA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_displayTextItem'] = stI1;
if ((lcA3[(8)] || Array.at(lcA3, (8))) !== null && !(lcA3[(8)] || Array.at(lcA3, (8)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(8)] || Array.at(lcA3, (8))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_itemId'] = (lcA3[(8)] || Array.at(lcA3, (8)));
if ((lcA3[(9)] || Array.at(lcA3, (9))) !== null && !(lcA3[(9)] || Array.at(lcA3, (9)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(9)] || Array.at(lcA3, (9))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_itemName'] = (lcA3[(9)] || Array.at(lcA3, (9)));
if ((lcA3[(10)] || Array.at(lcA3, (10))) !== null && !(lcA3[(10)] || Array.at(lcA3, (10)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(10)] || Array.at(lcA3, (10))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_itemText'] = (lcA3[(10)] || Array.at(lcA3, (10)));
var stA0 = lcA0;if (((lcA3[(11)] || Array.at(lcA3, (11)))) !== null) { gt = 314; break IF; }
var stI1 = 0;{ gt = 327; break IF; }
    }
    X_314: for (;;) { IF: if (gt <= 314) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(11)] || Array.at(lcA3, (11))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_327: for (;;) { IF: if (gt <= 327) {
stA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_hasOwnerPermission'] = stI1;
var stA0 = lcA0;if (((lcA3[(12)] || Array.at(lcA3, (12)))) !== null) { gt = 342; break IF; }
var stI1 = 0;{ gt = 355; break IF; }
    }
    X_342: for (;;) { IF: if (gt <= 342) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(12)] || Array.at(lcA3, (12))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_355: for (;;) { IF: if (gt <= 355) {
stA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_hasAdminPermission'] = stI1;
var stA0 = lcA0;if (((lcA3[(13)] || Array.at(lcA3, (13)))) !== null) { gt = 370; break IF; }
var stI1 = 0;{ gt = 383; break IF; }
    }
    X_370: for (;;) { IF: if (gt <= 370) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(13)] || Array.at(lcA3, (13))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_383: for (;;) { IF: if (gt <= 383) {
stA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_hasWritePermission'] = stI1;
var stA0 = lcA0;if (((lcA3[(14)] || Array.at(lcA3, (14)))) !== null) { gt = 398; break IF; }
var stI1 = 0;{ gt = 411; break IF; }
    }
    X_398: for (;;) { IF: if (gt <= 398) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(14)] || Array.at(lcA3, (14))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_411: for (;;) { IF: if (gt <= 411) {
stA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_hasReadPermission'] = stI1;
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
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_configuration']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"textItem");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_textItem']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"viewMode");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getViewMode__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"fullViewEnabled");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isFullViewEnabled__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"displayTextItem");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isDisplayTextItem__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"itemText");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getItemText__Ljava_lang_String_2();
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
    m = c.clone__Lio_cloudoffice_platform_cockpit_text_TextView_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_proto']);
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_text_TextView_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lio_cloudoffice_platform_cockpit_text_TextView_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_text_TextView_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new io_cloudoffice_platform_cockpit_text_TextView;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = lcA0.getInstance__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_instance'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isDesignerMode__Z();
stA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_designerMode'] = stI1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_configuration']) !== null) { gt = 37; break IF; }
var stA1 = null;{ gt = 61; break IF; }
    }
    X_37: for (;;) { IF: if (gt <= 37) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_configuration']) !== (c._TYPE())) { gt = 53; break IF; }
var stA1 = c._TYPE();{ gt = 61; break IF; }
    }
    X_53: for (;;) { IF: if (gt <= 53) {

var stA1 = lcA0.getConfiguration__Lio_cloudoffice_platform_cockpit_text_TextConfiguration_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_61: for (;;) { IF: if (gt <= 61) {
stA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_configuration'] = stA1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_textItem']) !== null) { gt = 76; break IF; }
var stA1 = null;{ gt = 100; break IF; }
    }
    X_76: for (;;) { IF: if (gt <= 76) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_textItem']) !== (c._TYPE())) { gt = 92; break IF; }
var stA1 = c._TYPE();{ gt = 100; break IF; }
    }
    X_92: for (;;) { IF: if (gt <= 92) {

var stA1 = lcA0.getTextItem__Lio_cloudoffice_platform_cockpit_text_TextItemView_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_100: for (;;) { IF: if (gt <= 100) {
stA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_textItem'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getViewMode__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_viewMode'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isFullViewEnabled__Z();
stA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_fullViewEnabled'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isVisible__Z();
stA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_visible'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isDisplayTextItem__Z();
stA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_displayTextItem'] = stI1;
var stA0 = lcA2;var stA1 = lcA0.getItemId__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_itemId'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getItemName__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_itemName'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getItemText__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_itemText'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isHasOwnerPermission__Z();
stA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_hasOwnerPermission'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isHasAdminPermission__Z();
stA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_hasAdminPermission'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isHasWritePermission__Z();
stA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_hasWritePermission'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isHasReadPermission__Z();
stA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_hasReadPermission'] = stI1;
return lcA2;

    }
}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lio_cloudoffice_platform_cockpit_text_TextView_2 = function() {
  var  lcA0 = this;
invoker.applyBindings__V(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_proto']);
return lcA0;

};
c['applyBindings__Lio_cloudoffice_platform_cockpit_text_TextView_2'] = m;

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

var stI0 = lcA1 != null && lcA1['$instOf_io_cloudoffice_platform_cockpit_text_TextView'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_text_TextView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.text.TextView');
var lcA2 = lcA1;
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_instance'], lcA2['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_instance']);
if ((stI0) != 0) { gt = 40; break IF; }
return 0;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_designerMode']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_designerMode']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 65; break IF; }
return 0;
    }
    X_65: for (;;) { IF: if (gt <= 65) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_configuration']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_configuration']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 92; break IF; }
return 0;
    }
    X_92: for (;;) { IF: if (gt <= 92) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_textItem']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_textItem']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 119; break IF; }
return 0;
    }
    X_119: for (;;) { IF: if (gt <= 119) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_viewMode'], lcA2['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_viewMode']);
if ((stI0) != 0) { gt = 138; break IF; }
return 0;
    }
    X_138: for (;;) { IF: if (gt <= 138) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_fullViewEnabled']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_fullViewEnabled']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 163; break IF; }
return 0;
    }
    X_163: for (;;) { IF: if (gt <= 163) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_visible']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_visible']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 188; break IF; }
return 0;
    }
    X_188: for (;;) { IF: if (gt <= 188) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_displayTextItem']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_displayTextItem']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 213; break IF; }
return 0;
    }
    X_213: for (;;) { IF: if (gt <= 213) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_itemId'], lcA2['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_itemId']);
if ((stI0) != 0) { gt = 232; break IF; }
return 0;
    }
    X_232: for (;;) { IF: if (gt <= 232) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_itemName'], lcA2['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_itemName']);
if ((stI0) != 0) { gt = 251; break IF; }
return 0;
    }
    X_251: for (;;) { IF: if (gt <= 251) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_itemText'], lcA2['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_itemText']);
if ((stI0) != 0) { gt = 270; break IF; }
return 0;
    }
    X_270: for (;;) { IF: if (gt <= 270) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_hasOwnerPermission']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_hasOwnerPermission']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 295; break IF; }
return 0;
    }
    X_295: for (;;) { IF: if (gt <= 295) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_hasAdminPermission']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_hasAdminPermission']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 320; break IF; }
return 0;
    }
    X_320: for (;;) { IF: if (gt <= 320) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_hasWritePermission']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_hasWritePermission']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 345; break IF; }
return 0;
    }
    X_345: for (;;) { IF: if (gt <= 345) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_hasReadPermission']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_hasReadPermission']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 370; break IF; }
return 0;
    }
    X_370: for (;;) { IF: if (gt <= 370) {

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
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_instance'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_designerMode']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_configuration']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_textItem']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_viewMode'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_fullViewEnabled']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_visible']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_displayTextItem']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_itemId'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_itemName'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_itemText'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_hasOwnerPermission']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_hasAdminPermission']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_hasWritePermission']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_hasReadPermission']);
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
var stA0 = lcA0.clone__Lio_cloudoffice_platform_cockpit_text_TextView_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lio_cloudoffice_platform_cockpit_text_TextView$Html4JavaType_2 = function() {
return c._TYPE();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_text_TextView_2 = function(lcA0) {
return lcA0['fld_io_cloudoffice_platform_cockpit_text_TextView_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_text_TextView$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lio_cloudoffice_platform_cockpit_text_TextView_2Lio_cloudoffice_platform_cockpit_text_TextView_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_text_TextView_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_text_TextView$Html4JavaType;
(refs_io_cloudoffice_platform_cockpit_text_TextView$Html4JavaType || (refs_io_cloudoffice_platform_cockpit_text_TextView$Html4JavaType = io_cloudoffice_platform_cockpit_text_TextView$Html4JavaType(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_text_TextView$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_text_TextViewfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_text_TextView', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_text_TextViewfillInstOf });
    io_cloudoffice_platform_cockpit_text_TextViewfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/text/TextView';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_text_TextComponent;
    var refs_java_lang_Boolean;
    var refs_io_cloudoffice_platform_cockpit_text_TextConfiguration;
    var refs_net_java_html_json_Models;
    var refs_io_cloudoffice_platform_cockpit_text_TextItemView;
    var refs_net_java_html_BrwsrCtx;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_text_TextView$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_text_TextView_proto'] = null;
    this['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_instance'] = null;
    this['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_designerMode'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_configuration'] = null;
    this['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_textItem'] = null;
    this['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_viewMode'] = null;
    this['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_fullViewEnabled'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_visible'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_displayTextItem'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_itemId'] = null;
    this['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_itemName'] = null;
    this['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_itemText'] = null;
    this['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_hasOwnerPermission'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_hasAdminPermission'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_hasWritePermission'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_text_TextView_prop_hasReadPermission'] = 0;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_text_TextView = registerClass(exports,'io_cloudoffice_platform_cockpit_text_TextView',io_cloudoffice_platform_cockpit_text_TextView);


function io_cloudoffice_platform_cockpit_text_TextView$Html4JavaType() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_text_TextView$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_io_cloudoffice_platform_cockpit_text_TextView || (refs_io_cloudoffice_platform_cockpit_text_TextView = io_cloudoffice_platform_cockpit_text_TextView(false))).constructor.$class, (refs_io_cloudoffice_platform_cockpit_text_TextComponent || (refs_io_cloudoffice_platform_cockpit_text_TextComponent = io_cloudoffice_platform_cockpit_text_TextComponent(false))).constructor.$class, (15), (16));
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"instance", 0, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"designerMode", 1, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"configuration", 2, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"textItem", 3, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"viewMode", 4, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"fullViewEnabled", 5, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"visible", (6), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"displayTextItem", (7), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemId", (8), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemName", (9), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemText", (10), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"hasOwnerPermission", (11), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"hasAdminPermission", (12), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"hasWritePermission", (13), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"hasReadPermission", (14), 0, 0);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"openConfig", 0);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"closeConfigurationPanel", 1);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"save", 2);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"resetConfiguration", 3);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"enableFullView", 4);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"enableSplitView", 5);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"backToList", (6));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"hideList", (7));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"showList", (8));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"clearFilter", (9));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"showActionMenu", (10));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"enableCreateMode", (11));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"createItem", (12));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"createArticleItem", (13));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"updateArticleItem", (14));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"processTextDetail", (15));
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLio_cloudoffice_platform_cockpit_text_TextView_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
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
  case 6:{ gt = 184; break IF; }
  case 7:{ gt = 204; break IF; }
  case 8:{ gt = 224; break IF; }
  case 9:{ gt = 241; break IF; }
  case 10:{ gt = 258; break IF; }
  case 11:{ gt = 275; break IF; }
  case 12:{ gt = 295; break IF; }
  case 13:{ gt = 315; break IF; }
  case 14:{ gt = 335; break IF; }
  default: { gt = 355; break IF; }
}
    }
    X_76: for (;;) { IF: if (gt <= 76) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_text_TextView || (refs_io_cloudoffice_platform_cockpit_text_TextView = io_cloudoffice_platform_cockpit_text_TextView(false))).access$100__Lio_cloudoffice_platform_cockpit_text_TextView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setInstance__VLjava_lang_String_2(stA1);
return;
    }
    X_93: for (;;) { IF: if (gt <= 93) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_text_TextView || (refs_io_cloudoffice_platform_cockpit_text_TextView = io_cloudoffice_platform_cockpit_text_TextView(false))).access$100__Lio_cloudoffice_platform_cockpit_text_TextView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setDesignerMode__VZ(stI1);
return;
    }
    X_113: for (;;) { IF: if (gt <= 113) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_text_TextView || (refs_io_cloudoffice_platform_cockpit_text_TextView = io_cloudoffice_platform_cockpit_text_TextView(false))).access$100__Lio_cloudoffice_platform_cockpit_text_TextView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_text_TextConfiguration || (refs_io_cloudoffice_platform_cockpit_text_TextConfiguration = io_cloudoffice_platform_cockpit_text_TextConfiguration(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_text_TextConfiguration']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.text.TextConfiguration');
stA0.setConfiguration__VLio_cloudoffice_platform_cockpit_text_TextConfiguration_2(stA1);
return;
    }
    X_130: for (;;) { IF: if (gt <= 130) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_text_TextView || (refs_io_cloudoffice_platform_cockpit_text_TextView = io_cloudoffice_platform_cockpit_text_TextView(false))).access$100__Lio_cloudoffice_platform_cockpit_text_TextView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_text_TextItemView || (refs_io_cloudoffice_platform_cockpit_text_TextItemView = io_cloudoffice_platform_cockpit_text_TextItemView(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_text_TextItemView']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.text.TextItemView');
stA0.setTextItem__VLio_cloudoffice_platform_cockpit_text_TextItemView_2(stA1);
return;
    }
    X_147: for (;;) { IF: if (gt <= 147) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_text_TextView || (refs_io_cloudoffice_platform_cockpit_text_TextView = io_cloudoffice_platform_cockpit_text_TextView(false))).access$100__Lio_cloudoffice_platform_cockpit_text_TextView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setViewMode__VLjava_lang_String_2(stA1);
return;
    }
    X_164: for (;;) { IF: if (gt <= 164) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_text_TextView || (refs_io_cloudoffice_platform_cockpit_text_TextView = io_cloudoffice_platform_cockpit_text_TextView(false))).access$100__Lio_cloudoffice_platform_cockpit_text_TextView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setFullViewEnabled__VZ(stI1);
return;
    }
    X_184: for (;;) { IF: if (gt <= 184) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_text_TextView || (refs_io_cloudoffice_platform_cockpit_text_TextView = io_cloudoffice_platform_cockpit_text_TextView(false))).access$100__Lio_cloudoffice_platform_cockpit_text_TextView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setVisible__VZ(stI1);
return;
    }
    X_204: for (;;) { IF: if (gt <= 204) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_text_TextView || (refs_io_cloudoffice_platform_cockpit_text_TextView = io_cloudoffice_platform_cockpit_text_TextView(false))).access$100__Lio_cloudoffice_platform_cockpit_text_TextView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setDisplayTextItem__VZ(stI1);
return;
    }
    X_224: for (;;) { IF: if (gt <= 224) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_text_TextView || (refs_io_cloudoffice_platform_cockpit_text_TextView = io_cloudoffice_platform_cockpit_text_TextView(false))).access$100__Lio_cloudoffice_platform_cockpit_text_TextView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemId__VLjava_lang_String_2(stA1);
return;
    }
    X_241: for (;;) { IF: if (gt <= 241) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_text_TextView || (refs_io_cloudoffice_platform_cockpit_text_TextView = io_cloudoffice_platform_cockpit_text_TextView(false))).access$100__Lio_cloudoffice_platform_cockpit_text_TextView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemName__VLjava_lang_String_2(stA1);
return;
    }
    X_258: for (;;) { IF: if (gt <= 258) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_text_TextView || (refs_io_cloudoffice_platform_cockpit_text_TextView = io_cloudoffice_platform_cockpit_text_TextView(false))).access$100__Lio_cloudoffice_platform_cockpit_text_TextView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemText__VLjava_lang_String_2(stA1);
return;
    }
    X_275: for (;;) { IF: if (gt <= 275) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_text_TextView || (refs_io_cloudoffice_platform_cockpit_text_TextView = io_cloudoffice_platform_cockpit_text_TextView(false))).access$100__Lio_cloudoffice_platform_cockpit_text_TextView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setHasOwnerPermission__VZ(stI1);
return;
    }
    X_295: for (;;) { IF: if (gt <= 295) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_text_TextView || (refs_io_cloudoffice_platform_cockpit_text_TextView = io_cloudoffice_platform_cockpit_text_TextView(false))).access$100__Lio_cloudoffice_platform_cockpit_text_TextView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setHasAdminPermission__VZ(stI1);
return;
    }
    X_315: for (;;) { IF: if (gt <= 315) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_text_TextView || (refs_io_cloudoffice_platform_cockpit_text_TextView = io_cloudoffice_platform_cockpit_text_TextView(false))).access$100__Lio_cloudoffice_platform_cockpit_text_TextView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setHasWritePermission__VZ(stI1);
return;
    }
    X_335: for (;;) { IF: if (gt <= 335) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_text_TextView || (refs_io_cloudoffice_platform_cockpit_text_TextView = io_cloudoffice_platform_cockpit_text_TextView(false))).access$100__Lio_cloudoffice_platform_cockpit_text_TextView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setHasReadPermission__VZ(stI1);
return;
    }
    X_355: for (;;) { IF: if (gt <= 355) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_text_TextView_2I = function(lcA1, lcI2) {
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
  case 6:{ gt = 112; break IF; }
  case 7:{ gt = 120; break IF; }
  case 8:{ gt = 128; break IF; }
  case 9:{ gt = 133; break IF; }
  case 10:{ gt = 138; break IF; }
  case 11:{ gt = 143; break IF; }
  case 12:{ gt = 151; break IF; }
  case 13:{ gt = 159; break IF; }
  case 14:{ gt = 167; break IF; }
  default: { gt = 175; break IF; }
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

var stA0 = lcA1.getConfiguration__Lio_cloudoffice_platform_cockpit_text_TextConfiguration_2();
return stA0;
    }
    X_94: for (;;) { IF: if (gt <= 94) {

var stA0 = lcA1.getTextItem__Lio_cloudoffice_platform_cockpit_text_TextItemView_2();
return stA0;
    }
    X_99: for (;;) { IF: if (gt <= 99) {

var stA0 = lcA1.getViewMode__Ljava_lang_String_2();
return stA0;
    }
    X_104: for (;;) { IF: if (gt <= 104) {

var stI0 = lcA1.isFullViewEnabled__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_112: for (;;) { IF: if (gt <= 112) {

var stI0 = lcA1.isVisible__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_120: for (;;) { IF: if (gt <= 120) {

var stI0 = lcA1.isDisplayTextItem__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_128: for (;;) { IF: if (gt <= 128) {

var stA0 = lcA1.getItemId__Ljava_lang_String_2();
return stA0;
    }
    X_133: for (;;) { IF: if (gt <= 133) {

var stA0 = lcA1.getItemName__Ljava_lang_String_2();
return stA0;
    }
    X_138: for (;;) { IF: if (gt <= 138) {

var stA0 = lcA1.getItemText__Ljava_lang_String_2();
return stA0;
    }
    X_143: for (;;) { IF: if (gt <= 143) {

var stI0 = lcA1.isHasOwnerPermission__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_151: for (;;) { IF: if (gt <= 151) {

var stI0 = lcA1.isHasAdminPermission__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_159: for (;;) { IF: if (gt <= 159) {

var stI0 = lcA1.isHasWritePermission__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_167: for (;;) { IF: if (gt <= 167) {

var stI0 = lcA1.isHasReadPermission__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_175: for (;;) { IF: if (gt <= 175) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.call__VLio_cloudoffice_platform_cockpit_text_TextView_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
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
  case 8:{ gt = 120; break IF; }
  case 9:{ gt = 125; break IF; }
  case 10:{ gt = 130; break IF; }
  case 11:{ gt = 135; break IF; }
  case 12:{ gt = 140; break IF; }
  case 13:{ gt = 154; break IF; }
  case 14:{ gt = 183; break IF; }
  case 15:{ gt = 212; break IF; }
  default: { gt = 226; break IF; }
}
    }
    X_80: for (;;) { IF: if (gt <= 80) {

(refs_io_cloudoffice_platform_cockpit_text_TextComponent || (refs_io_cloudoffice_platform_cockpit_text_TextComponent = io_cloudoffice_platform_cockpit_text_TextComponent(false))).openConfig__VLio_cloudoffice_platform_cockpit_text_TextView_2(lcA1);
return;
    }
    X_85: for (;;) { IF: if (gt <= 85) {

(refs_io_cloudoffice_platform_cockpit_text_TextComponent || (refs_io_cloudoffice_platform_cockpit_text_TextComponent = io_cloudoffice_platform_cockpit_text_TextComponent(false))).closeConfigurationPanel__VLio_cloudoffice_platform_cockpit_text_TextView_2(lcA1);
return;
    }
    X_90: for (;;) { IF: if (gt <= 90) {

(refs_io_cloudoffice_platform_cockpit_text_TextComponent || (refs_io_cloudoffice_platform_cockpit_text_TextComponent = io_cloudoffice_platform_cockpit_text_TextComponent(false))).save__VLio_cloudoffice_platform_cockpit_text_TextView_2(lcA1);
return;
    }
    X_95: for (;;) { IF: if (gt <= 95) {

(refs_io_cloudoffice_platform_cockpit_text_TextComponent || (refs_io_cloudoffice_platform_cockpit_text_TextComponent = io_cloudoffice_platform_cockpit_text_TextComponent(false))).resetConfiguration__VLio_cloudoffice_platform_cockpit_text_TextView_2(lcA1);
return;
    }
    X_100: for (;;) { IF: if (gt <= 100) {

(refs_io_cloudoffice_platform_cockpit_text_TextComponent || (refs_io_cloudoffice_platform_cockpit_text_TextComponent = io_cloudoffice_platform_cockpit_text_TextComponent(false))).enableFullView__VLio_cloudoffice_platform_cockpit_text_TextView_2(lcA1);
return;
    }
    X_105: for (;;) { IF: if (gt <= 105) {

(refs_io_cloudoffice_platform_cockpit_text_TextComponent || (refs_io_cloudoffice_platform_cockpit_text_TextComponent = io_cloudoffice_platform_cockpit_text_TextComponent(false))).enableSplitView__VLio_cloudoffice_platform_cockpit_text_TextView_2(lcA1);
return;
    }
    X_110: for (;;) { IF: if (gt <= 110) {

(refs_io_cloudoffice_platform_cockpit_text_TextComponent || (refs_io_cloudoffice_platform_cockpit_text_TextComponent = io_cloudoffice_platform_cockpit_text_TextComponent(false))).backToList__VLio_cloudoffice_platform_cockpit_text_TextView_2(lcA1);
return;
    }
    X_115: for (;;) { IF: if (gt <= 115) {

(refs_io_cloudoffice_platform_cockpit_text_TextComponent || (refs_io_cloudoffice_platform_cockpit_text_TextComponent = io_cloudoffice_platform_cockpit_text_TextComponent(false))).hideList__VLio_cloudoffice_platform_cockpit_text_TextView_2(lcA1);
return;
    }
    X_120: for (;;) { IF: if (gt <= 120) {

(refs_io_cloudoffice_platform_cockpit_text_TextComponent || (refs_io_cloudoffice_platform_cockpit_text_TextComponent = io_cloudoffice_platform_cockpit_text_TextComponent(false))).showList__VLio_cloudoffice_platform_cockpit_text_TextView_2(lcA1);
return;
    }
    X_125: for (;;) { IF: if (gt <= 125) {

(refs_io_cloudoffice_platform_cockpit_text_TextComponent || (refs_io_cloudoffice_platform_cockpit_text_TextComponent = io_cloudoffice_platform_cockpit_text_TextComponent(false))).clearFilter__VLio_cloudoffice_platform_cockpit_text_TextView_2(lcA1);
return;
    }
    X_130: for (;;) { IF: if (gt <= 130) {

(refs_io_cloudoffice_platform_cockpit_text_TextComponent || (refs_io_cloudoffice_platform_cockpit_text_TextComponent = io_cloudoffice_platform_cockpit_text_TextComponent(false))).showActionMenu__VLio_cloudoffice_platform_cockpit_text_TextView_2(lcA1);
return;
    }
    X_135: for (;;) { IF: if (gt <= 135) {

(refs_io_cloudoffice_platform_cockpit_text_TextComponent || (refs_io_cloudoffice_platform_cockpit_text_TextComponent = io_cloudoffice_platform_cockpit_text_TextComponent(false))).enableCreateMode__VLio_cloudoffice_platform_cockpit_text_TextView_2(lcA1);
return;
    }
    X_140: for (;;) { IF: if (gt <= 140) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_text_TextView || (refs_io_cloudoffice_platform_cockpit_text_TextView = io_cloudoffice_platform_cockpit_text_TextView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_text_TextView_2(lcA1);
var stA1 = invoker.toString__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_String_2(stA1,lcA3, null);
(refs_io_cloudoffice_platform_cockpit_text_TextComponent || (refs_io_cloudoffice_platform_cockpit_text_TextComponent = io_cloudoffice_platform_cockpit_text_TextComponent(false))).createItem__VLio_cloudoffice_platform_cockpit_text_TextView_2Ljava_lang_String_2(stA0, stA1);
return;
    }
    X_154: for (;;) { IF: if (gt <= 154) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_text_TextView || (refs_io_cloudoffice_platform_cockpit_text_TextView = io_cloudoffice_platform_cockpit_text_TextView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_text_TextView_2(lcA1);
var stA1 = invoker.toString__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_String_2(stA1,lcA4, "title");
var stA2 = (refs_io_cloudoffice_platform_cockpit_text_TextView || (refs_io_cloudoffice_platform_cockpit_text_TextView = io_cloudoffice_platform_cockpit_text_TextView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_text_TextView_2(lcA1);
var stA2 = invoker.toString__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_String_2(stA2,lcA4, "description");
(refs_io_cloudoffice_platform_cockpit_text_TextComponent || (refs_io_cloudoffice_platform_cockpit_text_TextComponent = io_cloudoffice_platform_cockpit_text_TextComponent(false))).createArticleItem__VLio_cloudoffice_platform_cockpit_text_TextView_2Ljava_lang_String_2Ljava_lang_String_2(stA0, stA1, stA2);
return;
    }
    X_183: for (;;) { IF: if (gt <= 183) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_text_TextView || (refs_io_cloudoffice_platform_cockpit_text_TextView = io_cloudoffice_platform_cockpit_text_TextView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_text_TextView_2(lcA1);
var stA1 = invoker.toString__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_String_2(stA1,lcA4, "title");
var stA2 = (refs_io_cloudoffice_platform_cockpit_text_TextView || (refs_io_cloudoffice_platform_cockpit_text_TextView = io_cloudoffice_platform_cockpit_text_TextView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_text_TextView_2(lcA1);
var stA2 = invoker.toString__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_String_2(stA2,lcA4, "description");
(refs_io_cloudoffice_platform_cockpit_text_TextComponent || (refs_io_cloudoffice_platform_cockpit_text_TextComponent = io_cloudoffice_platform_cockpit_text_TextComponent(false))).updateArticleItem__VLio_cloudoffice_platform_cockpit_text_TextView_2Ljava_lang_String_2Ljava_lang_String_2(stA0, stA1, stA2);
return;
    }
    X_212: for (;;) { IF: if (gt <= 212) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_text_TextView || (refs_io_cloudoffice_platform_cockpit_text_TextView = io_cloudoffice_platform_cockpit_text_TextView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_text_TextView_2(lcA1);
var stA1 = invoker.toString__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_String_2(stA1,lcA3, null);
(refs_io_cloudoffice_platform_cockpit_text_TextComponent || (refs_io_cloudoffice_platform_cockpit_text_TextComponent = io_cloudoffice_platform_cockpit_text_TextComponent(false))).processTextDetail__VLio_cloudoffice_platform_cockpit_text_TextView_2Ljava_lang_String_2(stA0, stA1);
return;
    }
    X_226: for (;;) { IF: if (gt <= 226) {
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
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_text_TextView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.text.TextView');
var stA0 = (refs_io_cloudoffice_platform_cockpit_text_TextView || (refs_io_cloudoffice_platform_cockpit_text_TextView = io_cloudoffice_platform_cockpit_text_TextView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_text_TextView_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLio_cloudoffice_platform_cockpit_text_TextView_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLio_cloudoffice_platform_cockpit_text_TextView_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
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
    m = c.read__Lio_cloudoffice_platform_cockpit_text_TextView_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_text_TextView;
(refs_io_cloudoffice_platform_cockpit_text_TextView || (refs_io_cloudoffice_platform_cockpit_text_TextView = io_cloudoffice_platform_cockpit_text_TextView(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_text_TextView$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lio_cloudoffice_platform_cockpit_text_TextView_2Lio_cloudoffice_platform_cockpit_text_TextView_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_text_TextView || (refs_io_cloudoffice_platform_cockpit_text_TextView = io_cloudoffice_platform_cockpit_text_TextView(false))).access$400__Lio_cloudoffice_platform_cockpit_text_TextView_2Lio_cloudoffice_platform_cockpit_text_TextView_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_text_TextView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.text.TextView');
lcA0.onMessage__VLio_cloudoffice_platform_cockpit_text_TextView_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_text_TextView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.text.TextView');
lcA0.onChange__VLio_cloudoffice_platform_cockpit_text_TextView_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lio_cloudoffice_platform_cockpit_text_TextView_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_text_TextView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.text.TextView');
var stA0 = lcA0.cloneTo__Lio_cloudoffice_platform_cockpit_text_TextView_2Lio_cloudoffice_platform_cockpit_text_TextView_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_text_TextView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.text.TextView');
lcA0.call__VLio_cloudoffice_platform_cockpit_text_TextView_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_text_TextView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.text.TextView');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_text_TextView_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_text_TextView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.text.TextView');
lcA0.setValue__VLio_cloudoffice_platform_cockpit_text_TextView_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_text_TextView$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_text_TextView$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_text_TextView$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_text_TextView$Html4JavaTypefillInstOf });
    io_cloudoffice_platform_cockpit_text_TextView$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/text/TextView$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_text_TextView;
    var refs_io_cloudoffice_platform_cockpit_text_TextComponent;
    var refs_org_netbeans_html_json_spi_Proto$Type;
    var refs_java_lang_String;
    var refs_java_lang_Boolean;
    var refs_io_cloudoffice_platform_cockpit_text_TextConfiguration;
    var refs_io_cloudoffice_platform_cockpit_text_TextItemView;
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
vm.io_cloudoffice_platform_cockpit_text_TextView$Html4JavaType = io_cloudoffice_platform_cockpit_text_TextView$Html4JavaType;


function io_cloudoffice_platform_cockpit_text_TextComponent$LoadItemDetailListener() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_text_TextComponent$LoadItemDetailListener;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_text_TextComponent$LoadItemDetailListener_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_text_TextComponent$LoadItemDetailListener_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_text_TextComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextComponent$LoadItemDetailListener_this$0'] = lcA1;
return;

};
CLS['cons__VLio_cloudoffice_platform_cockpit_text_TextComponent_2'] = m;

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
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_text_TextComponent$LoadItemDetailListener_this$0'];var stA1 = "processTextDetail";var stA2 = invoker.toJSON__Ljava_lang_String_2(lcA2);
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
    function io_cloudoffice_platform_cockpit_text_TextComponent$LoadItemDetailListenerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_text_TextComponent$LoadItemDetailListener', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_text_TextComponent$LoadItemDetailListenerfillInstOf });
    io_cloudoffice_platform_cockpit_text_TextComponent$LoadItemDetailListenerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/text/TextComponent$LoadItemDetailListener';
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
    this['fld_io_cloudoffice_platform_cockpit_text_TextComponent$LoadItemDetailListener_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_text_TextComponent$LoadItemDetailListener = registerClass(exports,'io_cloudoffice_platform_cockpit_text_TextComponent$LoadItemDetailListener',io_cloudoffice_platform_cockpit_text_TextComponent$LoadItemDetailListener);

vm.io_cloudoffice_platform_cockpit_api_EventListener = link('io/cloudoffice/platform/cockpit/api/EventListener', function(f) { vm.io_cloudoffice_platform_cockpit_api_EventListener =  f; });

function io_cloudoffice_platform_cockpit_text_TextComponent$InvokeFunctionListener() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_text_TextComponent$InvokeFunctionListener;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_text_TextComponent$InvokeFunctionListener_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_text_TextComponent$InvokeFunctionListener_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_text_TextComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextComponent$InvokeFunctionListener_this$0'] = lcA1;
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
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_text_TextComponent$InvokeFunctionListener_this$0'];var stA1 = (refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false)))['valueOf__Ljava_lang_String_2Ljava_lang_Object_2'](lcA2);
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
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_text_TextComponent_2Lio_cloudoffice_platform_cockpit_text_TextComponent$1_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
c.constructor.cons__VLio_cloudoffice_platform_cockpit_text_TextComponent_2.call(lcA0, lcA1);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_text_TextComponent$InvokeFunctionListenerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_text_TextComponent$InvokeFunctionListener', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_text_TextComponent$InvokeFunctionListenerfillInstOf });
    io_cloudoffice_platform_cockpit_text_TextComponent$InvokeFunctionListenerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/text/TextComponent$InvokeFunctionListener';
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
    this['fld_io_cloudoffice_platform_cockpit_text_TextComponent$InvokeFunctionListener_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_text_TextComponent$InvokeFunctionListener = io_cloudoffice_platform_cockpit_text_TextComponent$InvokeFunctionListener;


function io_cloudoffice_platform_cockpit_text_TextComponent$DesignModeListener() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_text_TextComponent$DesignModeListener;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_text_TextComponent$DesignModeListener_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_text_TextComponent$DesignModeListener_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_text_TextComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextComponent$DesignModeListener_this$0'] = lcA1;
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
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_text_TextComponent$DesignModeListener_this$0'];var stA1 = (refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false)))['valueOf__Ljava_lang_String_2Ljava_lang_Object_2'](lcA2);
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
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_text_TextComponent_2Lio_cloudoffice_platform_cockpit_text_TextComponent$1_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
c.constructor.cons__VLio_cloudoffice_platform_cockpit_text_TextComponent_2.call(lcA0, lcA1);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_text_TextComponent$DesignModeListenerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_text_TextComponent$DesignModeListener', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_text_TextComponent$DesignModeListenerfillInstOf });
    io_cloudoffice_platform_cockpit_text_TextComponent$DesignModeListenerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/text/TextComponent$DesignModeListener';
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
    this['fld_io_cloudoffice_platform_cockpit_text_TextComponent$DesignModeListener_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_text_TextComponent$DesignModeListener = io_cloudoffice_platform_cockpit_text_TextComponent$DesignModeListener;


function io_cloudoffice_platform_cockpit_text_TextComponent$LoginEventListener() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_text_TextComponent$LoginEventListener;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_text_TextComponent$LoginEventListener_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_text_TextComponent$LoginEventListener_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_text_TextComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextComponent$LoginEventListener_this$0'] = lcA1;
return;

};
CLS['cons__VLio_cloudoffice_platform_cockpit_text_TextComponent_2'] = m;

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
(refs_io_cloudoffice_platform_cockpit_js_VIEW || (refs_io_cloudoffice_platform_cockpit_js_VIEW = vm.io_cloudoffice_platform_cockpit_js_VIEW(false)))['renderView__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2']("text", "text", "text");
(refs_io_cloudoffice_platform_cockpit_js_VIEW || (refs_io_cloudoffice_platform_cockpit_js_VIEW = vm.io_cloudoffice_platform_cockpit_js_VIEW(false)))['renderView__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2']("text", "texteditview", "texteditview");
var stA0 = invoker.getInstanceId__Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextComponent$LoginEventListener_this$0']);
var lcA2 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['configFetchEndpoint__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2']("text", lcA2);
var stA2 = null;var stA3 = new io_cloudoffice_platform_cockpit_text_TextComponent$LoginEventListener$1;
(refs_io_cloudoffice_platform_cockpit_text_TextComponent$LoginEventListener$1 || (refs_io_cloudoffice_platform_cockpit_text_TextComponent$LoginEventListener$1 = io_cloudoffice_platform_cockpit_text_TextComponent$LoginEventListener$1(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_text_TextComponent$LoginEventListener_2.call(stA3, lcA0);
invoker.fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

};
    m.access = 0;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_text_TextComponent$LoginEventListenerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_text_TextComponent$LoginEventListener', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_text_TextComponent$LoginEventListenerfillInstOf });
    io_cloudoffice_platform_cockpit_text_TextComponent$LoginEventListenerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/text/TextComponent$LoginEventListener';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_EventListener(false).constructor.$class
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_js_VIEW;
    var refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration;
    var refs_io_cloudoffice_platform_cockpit_text_TextComponent$LoginEventListener$1;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_text_TextComponent$LoginEventListener_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_text_TextComponent$LoginEventListener = registerClass(exports,'io_cloudoffice_platform_cockpit_text_TextComponent$LoginEventListener',io_cloudoffice_platform_cockpit_text_TextComponent$LoginEventListener);


function io_cloudoffice_platform_cockpit_text_TextComponent$LoginEventListener$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_text_TextComponent$LoginEventListener$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$1 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_text_TextComponent$LoginEventListener$1_this$1'] = v; return this['fld_io_cloudoffice_platform_cockpit_text_TextComponent$LoginEventListener$1_this$1']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_text_TextComponent$LoginEventListener_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_text_TextComponent$LoginEventListener$1_this$1'] = lcA1;
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2'](lcA1);
var lcA2 = stA0;
var stA0 = new io_cloudoffice_platform_cockpit_text_TextView;
(refs_io_cloudoffice_platform_cockpit_text_TextView || (refs_io_cloudoffice_platform_cockpit_text_TextView = io_cloudoffice_platform_cockpit_text_TextView(false))).constructor.cons__V.call(stA0);
var lcA3 = stA0;
var stA0 = lcA3;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"instance");
stA0.setInstance__VLjava_lang_String_2(stA1);
c.prepareConfigurationModelFromJSON__VLio_cloudoffice_platform_cockpit_text_TextView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2.call(lcA0, lcA3, lcA2);
lcA3.setFullViewEnabled__VZ(1);
lcA3.setViewMode__VLjava_lang_String_2("");
invoker.setView__VLjava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextComponent$LoginEventListener$1_this$1']['fld_io_cloudoffice_platform_cockpit_text_TextComponent$LoginEventListener_this$0'],lcA3);
var stA0 = invoker.getDefaultViewName__Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_text_TextComponent$LoginEventListener$1_this$1']['fld_io_cloudoffice_platform_cockpit_text_TextComponent$LoginEventListener_this$0']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['toRaw__Ljava_lang_Object_2Ljava_lang_Object_2'](lcA3);
(refs_io_cloudoffice_platform_cockpit_js_VIEW || (refs_io_cloudoffice_platform_cockpit_js_VIEW = vm.io_cloudoffice_platform_cockpit_js_VIEW(false)))['bind__VLjava_lang_String_2Ljava_lang_Object_2'](stA0, stA1);
return;

};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.prepareConfigurationModelFromJSON__VLio_cloudoffice_platform_cockpit_text_TextView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA1.getConfiguration__Lio_cloudoffice_platform_cockpit_text_TextConfiguration_2();
var lcA3 = stA0;
var stA0 = invoker.getJsonObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA2,"configuration");
var lcA4 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_Object_2'](lcA4);
if ((stI0) == 0) { gt = 69; break IF; }
var stA0 = lcA1;var stI1 = invoker.getBoolean__ZLjava_lang_String_2(lcA4,"displayTextItem");
stA0.setDisplayTextItem__VZ(stI1);
var stA0 = lcA3;var stI1 = invoker.getBoolean__ZLjava_lang_String_2(lcA4,"displayTextItem");
stA0.setDisplayTextItem__VZ(stI1);
var stA0 = lcA3;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA4,"layoutColumnId");
stA0.setLayoutColumnId__VLjava_lang_String_2(stA1);
c.prepareTalkToComponent__VLio_cloudoffice_platform_cockpit_text_TextView_2Lorg_json_JSONObject_2.call(lcA0, lcA1, lcA4);
c.prepareSelectedText__VLorg_json_JSONObject_2Lio_cloudoffice_platform_cockpit_text_TextView_2Lio_cloudoffice_platform_cockpit_text_TextConfiguration_2.call(lcA0, lcA4, lcA1, lcA3);
    }
    X_69: for (;;) { IF: if (gt <= 69) {
return;

    }
}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.prepareTalkToComponent__VLio_cloudoffice_platform_cockpit_text_TextView_2Lorg_json_JSONObject_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = lcA1.getConfiguration__Lio_cloudoffice_platform_cockpit_text_TextConfiguration_2();
var stA1 = stA1.getListComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA2 = invoker.getJSONObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA2,"listComponentDefinition");
c.configureDef__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2Lorg_json_JSONObject_2.call(stA0, stA1, stA2);
var stA0 = lcA0;var stA1 = lcA1.getConfiguration__Lio_cloudoffice_platform_cockpit_text_TextConfiguration_2();
var stA1 = stA1.getActionMenuComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA2 = invoker.getJSONObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA2,"actionMenuComponentDefinition");
c.configureDef__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2Lorg_json_JSONObject_2.call(stA0, stA1, stA2);
var stA0 = lcA0;var stA1 = lcA1.getConfiguration__Lio_cloudoffice_platform_cockpit_text_TextConfiguration_2();
var stA1 = stA1.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA2 = invoker.getJSONObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA2,"searchBoxComponentDefinition");
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
    m = c.prepareSelectedText__VLorg_json_JSONObject_2Lio_cloudoffice_platform_cockpit_text_TextView_2Lio_cloudoffice_platform_cockpit_text_TextConfiguration_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA3.getSelectedTextItems__Ljava_util_List_2();
invoker.clear__V(stA0);
var stA0 = invoker.getJSONArray__Lorg_json_JSONArray_2Ljava_lang_String_2(lcA1,"selectedTextItems");
var stA0 = invoker.toList__Ljava_util_List_2(stA0);
var lcA4 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_util_Collection_2'](lcA4);
if ((stI0) == 0) { gt = 184; break IF; }
var stA0 = invoker.get__Ljava_lang_Object_2I(lcA4,0);
var lcA5 = stA0;
if (lcA5 !== null && !lcA5['$instOf_java_util_Map']) vm.java_lang_Class(false).castEx(lcA5, 'java.util.Map');
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_util_Map_2'](lcA5);
var lcA6 = stA0;
var stA0 = new io_cloudoffice_platform_cockpit_text_TextItemView;
(refs_io_cloudoffice_platform_cockpit_text_TextItemView || (refs_io_cloudoffice_platform_cockpit_text_TextItemView = io_cloudoffice_platform_cockpit_text_TextItemView(false))).constructor.cons__V.call(stA0);
var lcA7 = stA0;
var stA0 = lcA7;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA6,"itemId");
stA0.setItemId__VLjava_lang_String_2(stA1);
var stA0 = lcA7;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA6,"itemName");
stA0.setItemName__VLjava_lang_String_2(stA1);
var stA0 = lcA7;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA6,"itemType");
stA0.setItemType__VLjava_lang_String_2(stA1);
var stA0 = lcA7;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA6,"itemText");
stA0.setItemText__VLjava_lang_String_2(stA1);
var stA0 = lcA7;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA6,"itemUserId");
stA0.setItemUserId__VLjava_lang_String_2(stA1);
var stA0 = lcA7;var stI1 = invoker.getBoolean__ZLjava_lang_String_2(lcA6,"hasOwnerPermission");
stA0.setHasOwnerPermission__VZ(stI1);
var stA0 = lcA7;var stI1 = invoker.getBoolean__ZLjava_lang_String_2(lcA6,"hasAdminPermission");
stA0.setHasAdminPermission__VZ(stI1);
var stA0 = lcA7;var stI1 = invoker.getBoolean__ZLjava_lang_String_2(lcA6,"hasWritePermission");
stA0.setHasWritePermission__VZ(stI1);
var stA0 = lcA7;var stI1 = invoker.getBoolean__ZLjava_lang_String_2(lcA6,"hasReadPermission");
stA0.setHasReadPermission__VZ(stI1);
var stA0 = lcA3.getSelectedTextItems__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA7);
lcA2.setTextItem__VLio_cloudoffice_platform_cockpit_text_TextItemView_2(lcA7);
    }
    X_184: for (;;) { IF: if (gt <= 184) {
return;

    }
}}
};
    m.access = 2;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_text_TextComponent$LoginEventListener$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_text_TextComponent$LoginEventListener$1', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_text_TextComponent$LoginEventListener$1fillInstOf });
    io_cloudoffice_platform_cockpit_text_TextComponent$LoginEventListener$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/text/TextComponent$LoginEventListener$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65568;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_text_TextView;
    var refs_net_java_html_json_Models;
    var refs_io_cloudoffice_platform_cockpit_js_VIEW;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_io_cloudoffice_platform_cockpit_api_Logger;
    var refs_io_cloudoffice_platform_cockpit_text_TextItemView;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_text_TextComponent$LoginEventListener$1_this$1'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_text_TextComponent$LoginEventListener$1 = io_cloudoffice_platform_cockpit_text_TextComponent$LoginEventListener$1;

vm.io_cloudoffice_platform_cockpit_api_AbstractComponent = link('io/cloudoffice/platform/cockpit/api/AbstractComponent', function(f) { vm.io_cloudoffice_platform_cockpit_api_AbstractComponent =  f; });
vm.io_cloudoffice_platform_cockpit_api_Logger = link('io/cloudoffice/platform/cockpit/api/Logger', function(f) { vm.io_cloudoffice_platform_cockpit_api_Logger =  f; });

function io_cloudoffice_platform_cockpit_text_TextConfiguration$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_text_TextConfiguration$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_text_TextConfiguration$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_text_TextConfiguration$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_text_TextConfiguration$1fillInstOf });
    io_cloudoffice_platform_cockpit_text_TextConfiguration$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/text/TextConfiguration$1';
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
vm.io_cloudoffice_platform_cockpit_text_TextConfiguration$1 = io_cloudoffice_platform_cockpit_text_TextConfiguration$1;


function io_cloudoffice_platform_cockpit_text_TextItemView$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_text_TextItemView$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_text_TextItemView$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_text_TextItemView$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_text_TextItemView$1fillInstOf });
    io_cloudoffice_platform_cockpit_text_TextItemView$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/text/TextItemView$1';
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
vm.io_cloudoffice_platform_cockpit_text_TextItemView$1 = io_cloudoffice_platform_cockpit_text_TextItemView$1;


function io_cloudoffice_platform_cockpit_text_TextView$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_text_TextView$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_text_TextView$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_text_TextView$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_text_TextView$1fillInstOf });
    io_cloudoffice_platform_cockpit_text_TextView$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/text/TextView$1';
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
vm.io_cloudoffice_platform_cockpit_text_TextView$1 = io_cloudoffice_platform_cockpit_text_TextView$1;

  invoker.get__Ljava_lang_Object_2I = function(target, p1) {
    return target['get__Ljava_lang_Object_2I'](p1);
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
  invoker.setDefaultConfigViewName__VLjava_lang_String_2 = function(target, p1) {
    return target['setDefaultConfigViewName__VLjava_lang_String_2'](p1);
  };
  invoker.post__VLjava_lang_String_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_api_CallBack_2 = function(target, p1, p2, p3) {
    return target['post__VLjava_lang_String_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_api_CallBack_2'](p1,p2,p3);
  };
  invoker.fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2 = function(target, p1, p2, p3) {
    return target['fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2'](p1,p2,p3);
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
  invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2 = function(target, p1, p2) {
    return target['addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2'](p1,p2);
  };
  invoker.getString__Ljava_lang_String_2Ljava_lang_String_2 = function(target, p1) {
    return target['getString__Ljava_lang_String_2Ljava_lang_String_2'](p1);
  };
  invoker.trim__Ljava_lang_String_2 = function(target) {
    return target['trim__Ljava_lang_String_2']();
  };
  invoker.equals__ZLjava_lang_Object_2 = function(target, p1) {
    return target['equals__ZLjava_lang_Object_2'](p1);
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
  invoker.getList__Ljava_util_List_2Ljava_lang_String_2 = function(target, p1) {
    return target['getList__Ljava_util_List_2Ljava_lang_String_2'](p1);
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
  invoker.equalsIgnoreCase__ZLjava_lang_String_2 = function(target, p1) {
    return target['equalsIgnoreCase__ZLjava_lang_String_2'](p1);
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
  invoker.getJsonObject__Lorg_json_JSONObject_2Ljava_lang_String_2 = function(target, p1) {
    return target['getJsonObject__Lorg_json_JSONObject_2Ljava_lang_String_2'](p1);
  };
  invoker.getBoolean__ZLjava_lang_String_2 = function(target, p1) {
    return target['getBoolean__ZLjava_lang_String_2'](p1);
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
  invoker.clear__V = function(target) {
    return target['clear__V']();
  };
  invoker.getJSONArray__Lorg_json_JSONArray_2Ljava_lang_String_2 = function(target, p1) {
    return target['getJSONArray__Lorg_json_JSONArray_2Ljava_lang_String_2'](p1);
  };
  invoker.toList__Ljava_util_List_2 = function(target) {
    return target['toList__Ljava_util_List_2']();
  };
  invoker.add__ZLjava_lang_Object_2 = function(target, p1) {
    return target['add__ZLjava_lang_Object_2'](p1);
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
  invoker.toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2 = function(target, p1, p2) {
    return target['toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2'](p1,p2);
  };
  invoker.setActive__VZ = function(target, p1) {
    return target['setActive__VZ'](p1);
  };
  invoker.call__V = function(target) {
    return target['call__V']();
  };
  invoker.remove__ZLjava_lang_Object_2 = function(target, p1) {
    return target['remove__ZLjava_lang_Object_2'](p1);
  };
  invoker.getArray__Ljava_util_List_2 = function(target) {
    return target['getArray__Ljava_util_List_2']();
  };
  invoker.replaceAll__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2 = function(target, p1, p2) {
    return target['replaceAll__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'](p1,p2);
  };
  invoker.getMap__Ljava_util_Map_2 = function(target) {
    return target['getMap__Ljava_util_Map_2']();
  };
  invoker.toString__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_String_2 = function(target, p1, p2) {
    return target['toString__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_String_2'](p1,p2);
  };
  invoker.getPackets__Ljava_util_List_2 = function(target) {
    return target['getPackets__Ljava_util_List_2']();
  };
  invoker.toJSON__Ljava_lang_String_2 = function(target) {
    return target['toJSON__Ljava_lang_String_2']();
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
  exports['registerResource']('META-INF/MANIFEST.MF', 'TWFuaWZlc3QtVmVyc2lvbjogMS4wDQpCbmQtTGFzdE1vZGlmaWVkOiAxNTk3NzY0MDg2NTk0DQpCdWlsZC1KZGs6IDEuOC4wXzEzMQ0KQnVpbHQtQnk6IGV1c2lhDQpCdW5kbGUtTWFuaWZlc3RWZXJzaW9uOiAyDQpCdW5kbGUtTmFtZTogR2FkZ2V0IFRleHQNCkJ1bmRsZS1TeW1ib2xpY05hbWU6IGlvLmNsb3Vkb2ZmaWNlLnBsYXRmb3JtLmNvY2twaXQudGV4dA0KQnVuZGxlLVZlcnNpb246IDEuMS4wDQpDcmVhdGVkLUJ5OiBBcGFjaGUgTWF2ZW4gQnVuZGxlIFBsdWdpbg0KRXhwb3J0LVBhY2thZ2U6IGlvLmNsb3Vkb2ZmaWNlLnBsYXRmb3JtLmNvY2twaXQudGV4dDt1c2VzOj0iaW8uY2xvdWRvZmZpDQogY2UucGxhdGZvcm0uY29ja3BpdC5hcGkiO3ZlcnNpb249IjEuMS4wIg0KSW1wb3J0LVBhY2thZ2U6IGlvLmNsb3Vkb2ZmaWNlLnBsYXRmb3JtLmNvY2twaXQuYXBpO3ZlcnNpb249IlsxLjEsMikiLGlvDQogLmNsb3Vkb2ZmaWNlLnBsYXRmb3JtLmNvY2twaXQuanM7dmVyc2lvbj0iWzEuMSwyKSIsbmV0LmphdmEuaHRtbDt2ZXJzaW8NCiBuPSJbMS42LDIpIixuZXQuamF2YS5odG1sLmpzb247dmVyc2lvbj0iWzEuNiwyKSIsb3JnLmpzb247dmVyc2lvbj0iWzIwMQ0KIDgwODEzLjAsMjAxODA4MTQpIixvcmcubmV0YmVhbnMuaHRtbC5qc29uLnNwaTt2ZXJzaW9uPSJbMS42LDIpIg0KVG9vbDogQm5kLTIuMS4wLjIwMTMwNDI2LTEyMjIxMw0K');
});