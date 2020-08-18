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

function io_cloudoffice_platform_cockpit_relateditem_Item$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_relateditem_Item$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_relateditem_Item$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_relateditem_Item$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_relateditem_Item$1fillInstOf });
    io_cloudoffice_platform_cockpit_relateditem_Item$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/relateditem/Item$1';
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
vm.io_cloudoffice_platform_cockpit_relateditem_Item$1 = io_cloudoffice_platform_cockpit_relateditem_Item$1;


function io_cloudoffice_platform_cockpit_relateditem_Item$Html4JavaType() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_relateditem_Item$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_io_cloudoffice_platform_cockpit_relateditem_Item || (refs_io_cloudoffice_platform_cockpit_relateditem_Item = io_cloudoffice_platform_cockpit_relateditem_Item(false))).constructor.$class, (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$ItemModel || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$ItemModel = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$ItemModel(false))).constructor.$class, 2, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"id", 0, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"name", 1, 0, 0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLio_cloudoffice_platform_cockpit_relateditem_Item_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
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

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_relateditem_Item || (refs_io_cloudoffice_platform_cockpit_relateditem_Item = io_cloudoffice_platform_cockpit_relateditem_Item(false))).access$100__Lio_cloudoffice_platform_cockpit_relateditem_Item$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setId__VLjava_lang_String_2(stA1);
return;
    }
    X_45: for (;;) { IF: if (gt <= 45) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_relateditem_Item || (refs_io_cloudoffice_platform_cockpit_relateditem_Item = io_cloudoffice_platform_cockpit_relateditem_Item(false))).access$100__Lio_cloudoffice_platform_cockpit_relateditem_Item$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setName__VLjava_lang_String_2(stA1);
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
    m = c.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_relateditem_Item_2I = function(lcA1, lcI2) {
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

var stA0 = lcA1.getId__Ljava_lang_String_2();
return stA0;
    }
    X_33: for (;;) { IF: if (gt <= 33) {

var stA0 = lcA1.getName__Ljava_lang_String_2();
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
    m = c.call__VLio_cloudoffice_platform_cockpit_relateditem_Item_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_relateditem_Item']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.relateditem.Item');
var stA0 = (refs_io_cloudoffice_platform_cockpit_relateditem_Item || (refs_io_cloudoffice_platform_cockpit_relateditem_Item = io_cloudoffice_platform_cockpit_relateditem_Item(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_relateditem_Item_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLio_cloudoffice_platform_cockpit_relateditem_Item_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLio_cloudoffice_platform_cockpit_relateditem_Item_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
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
    m = c.read__Lio_cloudoffice_platform_cockpit_relateditem_Item_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_relateditem_Item;
(refs_io_cloudoffice_platform_cockpit_relateditem_Item || (refs_io_cloudoffice_platform_cockpit_relateditem_Item = io_cloudoffice_platform_cockpit_relateditem_Item(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_relateditem_Item$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lio_cloudoffice_platform_cockpit_relateditem_Item_2Lio_cloudoffice_platform_cockpit_relateditem_Item_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_relateditem_Item || (refs_io_cloudoffice_platform_cockpit_relateditem_Item = io_cloudoffice_platform_cockpit_relateditem_Item(false))).access$400__Lio_cloudoffice_platform_cockpit_relateditem_Item_2Lio_cloudoffice_platform_cockpit_relateditem_Item_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_relateditem_Item']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.relateditem.Item');
lcA0.onMessage__VLio_cloudoffice_platform_cockpit_relateditem_Item_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_relateditem_Item']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.relateditem.Item');
lcA0.onChange__VLio_cloudoffice_platform_cockpit_relateditem_Item_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lio_cloudoffice_platform_cockpit_relateditem_Item_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_relateditem_Item']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.relateditem.Item');
var stA0 = lcA0.cloneTo__Lio_cloudoffice_platform_cockpit_relateditem_Item_2Lio_cloudoffice_platform_cockpit_relateditem_Item_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_relateditem_Item']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.relateditem.Item');
lcA0.call__VLio_cloudoffice_platform_cockpit_relateditem_Item_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_relateditem_Item']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.relateditem.Item');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_relateditem_Item_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_relateditem_Item']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.relateditem.Item');
lcA0.setValue__VLio_cloudoffice_platform_cockpit_relateditem_Item_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_relateditem_Item$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_relateditem_Item$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_relateditem_Item$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_relateditem_Item$Html4JavaTypefillInstOf });
    io_cloudoffice_platform_cockpit_relateditem_Item$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/relateditem/Item$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_relateditem_Item;
    var refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$ItemModel;
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
vm.io_cloudoffice_platform_cockpit_relateditem_Item$Html4JavaType = io_cloudoffice_platform_cockpit_relateditem_Item$Html4JavaType;

vm.java_lang_StringBuilder = link('java/lang/StringBuilder', function(f) { vm.java_lang_StringBuilder =  f; });
vm.java_lang_UnsupportedOperationException = link('java/lang/UnsupportedOperationException', function(f) { vm.java_lang_UnsupportedOperationException =  f; });
vm.java_lang_String = link('java/lang/String', function(f) { vm.java_lang_String =  f; });
vm.org_netbeans_html_json_spi_Proto$Type = link('org/netbeans/html/json/spi/Proto$Type', function(f) { vm.org_netbeans_html_json_spi_Proto$Type =  f; });

function io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$ItemModel() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$ItemModel;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$ItemModel_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$ItemModel_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$ItemModel_this$0'] = lcA1;
return;

};
CLS['cons__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$ItemModelfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$ItemModel', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$ItemModelfillInstOf });
    io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$ItemModelfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/relateditem/RelatedItemComponent$ItemModel';
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
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$ItemModel_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$ItemModel = registerClass(exports,'io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$ItemModel',io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$ItemModel);


function io_cloudoffice_platform_cockpit_relateditem_Item() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_relateditem_Item;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_Item_proto'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_Item_proto']; };
  m = c._prop_id = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_Item_prop_id'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_Item_prop_id']; };
  m = c._prop_name = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_Item_prop_name'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_Item_prop_name']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$ItemModel || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$ItemModel = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$ItemModel(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.getId__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_Item_proto'],"id");
return lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_Item_prop_id'];

};
c['getId__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setId__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_Item_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_Item_prop_id'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_Item_prop_id'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_Item_proto'],"id", lcA2, lcA1);
return;

    }
}}
};
c['setId__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getName__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_Item_proto'],"name");
return lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_Item_prop_name'];

};
c['getName__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setName__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_Item_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_Item_prop_name'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_Item_prop_name'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_Item_proto'],"name", lcA2, lcA1);
return;

    }
}}
};
c['setName__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2(c._TYPE(),lcA0, lcA1);
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_Item_proto'] = stA1;
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
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_Item_prop_id'] = lcA1;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_Item_prop_name'] = lcA2;
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
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_Item_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 2);
Array.at(stA2, 0, "id");
Array.at(stA2, 1, "name");
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
if ((lcA3[0] || Array.at(lcA3, 0)) !== null && !(lcA3[0] || Array.at(lcA3, 0))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[0] || Array.at(lcA3, 0)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_Item_prop_id'] = (lcA3[0] || Array.at(lcA3, 0));
if ((lcA3[1] || Array.at(lcA3, 1)) !== null && !(lcA3[1] || Array.at(lcA3, 1))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[1] || Array.at(lcA3, 1)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_Item_prop_name'] = (lcA3[1] || Array.at(lcA3, 1));
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(125));
var stA0 = invoker.toString__Ljava_lang_String_2(lcA1);
return stA0;

};
c['toString__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_relateditem_Item_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_Item_proto']);
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_relateditem_Item_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lio_cloudoffice_platform_cockpit_relateditem_Item_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_relateditem_Item_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_relateditem_Item;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = lcA0.getId__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_Item_prop_id'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getName__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_Item_prop_name'] = stA1;
return lcA2;

};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lio_cloudoffice_platform_cockpit_relateditem_Item_2 = function() {
  var  lcA0 = this;
invoker.applyBindings__V(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_Item_proto']);
return lcA0;

};
c['applyBindings__Lio_cloudoffice_platform_cockpit_relateditem_Item_2'] = m;

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

var stI0 = lcA1 != null && lcA1['$instOf_io_cloudoffice_platform_cockpit_relateditem_Item'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_relateditem_Item']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.relateditem.Item');
var lcA2 = lcA1;
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_Item_prop_id'], lcA2['fld_io_cloudoffice_platform_cockpit_relateditem_Item_prop_id']);
if ((stI0) != 0) { gt = 40; break IF; }
return 0;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_Item_prop_name'], lcA2['fld_io_cloudoffice_platform_cockpit_relateditem_Item_prop_name']);
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
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_Item_prop_id'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_Item_prop_name'], lcI1);
var lcI1 = stI0;
return lcI1;

};
c['hashCode__I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Ljava_lang_Object_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0.clone__Lio_cloudoffice_platform_cockpit_relateditem_Item_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lio_cloudoffice_platform_cockpit_relateditem_Item$Html4JavaType_2 = function() {
return c._TYPE();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_relateditem_Item_2 = function(lcA0) {
return lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_Item_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_relateditem_Item$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lio_cloudoffice_platform_cockpit_relateditem_Item_2Lio_cloudoffice_platform_cockpit_relateditem_Item_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_relateditem_Item_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_relateditem_Item$Html4JavaType;
(refs_io_cloudoffice_platform_cockpit_relateditem_Item$Html4JavaType || (refs_io_cloudoffice_platform_cockpit_relateditem_Item$Html4JavaType = io_cloudoffice_platform_cockpit_relateditem_Item$Html4JavaType(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_relateditem_Item$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_relateditem_ItemfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_relateditem_Item', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_relateditem_ItemfillInstOf });
    io_cloudoffice_platform_cockpit_relateditem_ItemfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/relateditem/Item';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$ItemModel;
    var refs_net_java_html_BrwsrCtx;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_relateditem_Item$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_relateditem_Item_proto'] = null;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_Item_prop_id'] = null;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_Item_prop_name'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_relateditem_Item = registerClass(exports,'io_cloudoffice_platform_cockpit_relateditem_Item',io_cloudoffice_platform_cockpit_relateditem_Item);

vm.java_lang_Cloneable = link('java/lang/Cloneable', function(f) { vm.java_lang_Cloneable =  f; });
vm.net_java_html_BrwsrCtx = link('net/java/html/BrwsrCtx', function(f) { vm.net_java_html_BrwsrCtx =  f; });

function io_cloudoffice_platform_cockpit_relateditem_ListItemView$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_relateditem_ListItemView$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_relateditem_ListItemView$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_relateditem_ListItemView$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_relateditem_ListItemView$1fillInstOf });
    io_cloudoffice_platform_cockpit_relateditem_ListItemView$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/relateditem/ListItemView$1';
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
vm.io_cloudoffice_platform_cockpit_relateditem_ListItemView$1 = io_cloudoffice_platform_cockpit_relateditem_ListItemView$1;


function io_cloudoffice_platform_cockpit_relateditem_ListItemView$Html4JavaType() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_relateditem_ListItemView$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_io_cloudoffice_platform_cockpit_relateditem_ListItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_ListItemView = io_cloudoffice_platform_cockpit_relateditem_ListItemView(false))).constructor.$class, (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$ListItemViewModel || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$ListItemViewModel = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$ListItemViewModel(false))).constructor.$class, (9), 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemId", 0, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemName", 1, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemType", 2, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemTypeIconCss", 3, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"avatar", 4, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"hasOwnerPermission", 5, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"hasAdminPermission", (6), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"hasWritePermission", (7), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"hasReadPermission", (8), 0, 0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLio_cloudoffice_platform_cockpit_relateditem_ListItemView_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
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

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_relateditem_ListItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_ListItemView = io_cloudoffice_platform_cockpit_relateditem_ListItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_relateditem_ListItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemId__VLjava_lang_String_2(stA1);
return;
    }
    X_69: for (;;) { IF: if (gt <= 69) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_relateditem_ListItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_ListItemView = io_cloudoffice_platform_cockpit_relateditem_ListItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_relateditem_ListItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemName__VLjava_lang_String_2(stA1);
return;
    }
    X_86: for (;;) { IF: if (gt <= 86) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_relateditem_ListItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_ListItemView = io_cloudoffice_platform_cockpit_relateditem_ListItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_relateditem_ListItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemType__VLjava_lang_String_2(stA1);
return;
    }
    X_103: for (;;) { IF: if (gt <= 103) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_relateditem_ListItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_ListItemView = io_cloudoffice_platform_cockpit_relateditem_ListItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_relateditem_ListItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemTypeIconCss__VLjava_lang_String_2(stA1);
return;
    }
    X_120: for (;;) { IF: if (gt <= 120) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_relateditem_ListItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_ListItemView = io_cloudoffice_platform_cockpit_relateditem_ListItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_relateditem_ListItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setAvatar__VLjava_lang_String_2(stA1);
return;
    }
    X_137: for (;;) { IF: if (gt <= 137) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_relateditem_ListItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_ListItemView = io_cloudoffice_platform_cockpit_relateditem_ListItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_relateditem_ListItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setHasOwnerPermission__VZ(stI1);
return;
    }
    X_157: for (;;) { IF: if (gt <= 157) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_relateditem_ListItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_ListItemView = io_cloudoffice_platform_cockpit_relateditem_ListItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_relateditem_ListItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setHasAdminPermission__VZ(stI1);
return;
    }
    X_177: for (;;) { IF: if (gt <= 177) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_relateditem_ListItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_ListItemView = io_cloudoffice_platform_cockpit_relateditem_ListItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_relateditem_ListItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setHasWritePermission__VZ(stI1);
return;
    }
    X_197: for (;;) { IF: if (gt <= 197) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_relateditem_ListItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_ListItemView = io_cloudoffice_platform_cockpit_relateditem_ListItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_relateditem_ListItemView$Html4JavaType_2();
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
    m = c.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_relateditem_ListItemView_2I = function(lcA1, lcI2) {
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

var stA0 = lcA1.getItemTypeIconCss__Ljava_lang_String_2();
return stA0;
    }
    X_72: for (;;) { IF: if (gt <= 72) {

var stA0 = lcA1.getAvatar__Ljava_lang_String_2();
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
    m = c.call__VLio_cloudoffice_platform_cockpit_relateditem_ListItemView_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_relateditem_ListItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.relateditem.ListItemView');
var stA0 = (refs_io_cloudoffice_platform_cockpit_relateditem_ListItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_ListItemView = io_cloudoffice_platform_cockpit_relateditem_ListItemView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_relateditem_ListItemView_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLio_cloudoffice_platform_cockpit_relateditem_ListItemView_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLio_cloudoffice_platform_cockpit_relateditem_ListItemView_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
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
    m = c.read__Lio_cloudoffice_platform_cockpit_relateditem_ListItemView_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_relateditem_ListItemView;
(refs_io_cloudoffice_platform_cockpit_relateditem_ListItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_ListItemView = io_cloudoffice_platform_cockpit_relateditem_ListItemView(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_relateditem_ListItemView$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lio_cloudoffice_platform_cockpit_relateditem_ListItemView_2Lio_cloudoffice_platform_cockpit_relateditem_ListItemView_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_relateditem_ListItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_ListItemView = io_cloudoffice_platform_cockpit_relateditem_ListItemView(false))).access$400__Lio_cloudoffice_platform_cockpit_relateditem_ListItemView_2Lio_cloudoffice_platform_cockpit_relateditem_ListItemView_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_relateditem_ListItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.relateditem.ListItemView');
lcA0.onMessage__VLio_cloudoffice_platform_cockpit_relateditem_ListItemView_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_relateditem_ListItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.relateditem.ListItemView');
lcA0.onChange__VLio_cloudoffice_platform_cockpit_relateditem_ListItemView_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lio_cloudoffice_platform_cockpit_relateditem_ListItemView_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_relateditem_ListItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.relateditem.ListItemView');
var stA0 = lcA0.cloneTo__Lio_cloudoffice_platform_cockpit_relateditem_ListItemView_2Lio_cloudoffice_platform_cockpit_relateditem_ListItemView_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_relateditem_ListItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.relateditem.ListItemView');
lcA0.call__VLio_cloudoffice_platform_cockpit_relateditem_ListItemView_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_relateditem_ListItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.relateditem.ListItemView');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_relateditem_ListItemView_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_relateditem_ListItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.relateditem.ListItemView');
lcA0.setValue__VLio_cloudoffice_platform_cockpit_relateditem_ListItemView_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_relateditem_ListItemView$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_relateditem_ListItemView$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_relateditem_ListItemView$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_relateditem_ListItemView$Html4JavaTypefillInstOf });
    io_cloudoffice_platform_cockpit_relateditem_ListItemView$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/relateditem/ListItemView$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_relateditem_ListItemView;
    var refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$ListItemViewModel;
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
vm.io_cloudoffice_platform_cockpit_relateditem_ListItemView$Html4JavaType = io_cloudoffice_platform_cockpit_relateditem_ListItemView$Html4JavaType;

vm.java_lang_Boolean = link('java/lang/Boolean', function(f) { vm.java_lang_Boolean =  f; });

function io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$ListItemViewModel() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$ListItemViewModel;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$ListItemViewModel_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$ListItemViewModel_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$ListItemViewModel_this$0'] = lcA1;
return;

};
CLS['cons__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$ListItemViewModelfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$ListItemViewModel', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$ListItemViewModelfillInstOf });
    io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$ListItemViewModelfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/relateditem/RelatedItemComponent$ListItemViewModel';
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
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$ListItemViewModel_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$ListItemViewModel = registerClass(exports,'io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$ListItemViewModel',io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$ListItemViewModel);


function io_cloudoffice_platform_cockpit_relateditem_ListItemView() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_relateditem_ListItemView;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_proto'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_proto']; };
  m = c._prop_itemId = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_itemId'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_itemId']; };
  m = c._prop_itemName = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_itemName'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_itemName']; };
  m = c._prop_itemType = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_itemType'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_itemType']; };
  m = c._prop_itemTypeIconCss = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_itemTypeIconCss'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_itemTypeIconCss']; };
  m = c._prop_avatar = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_avatar'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_avatar']; };
  m = c._prop_hasOwnerPermission = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_hasOwnerPermission'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_hasOwnerPermission']; };
  m = c._prop_hasAdminPermission = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_hasAdminPermission'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_hasAdminPermission']; };
  m = c._prop_hasWritePermission = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_hasWritePermission'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_hasWritePermission']; };
  m = c._prop_hasReadPermission = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_hasReadPermission'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_hasReadPermission']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$ListItemViewModel || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$ListItemViewModel = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$ListItemViewModel(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.getItemId__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_proto'],"itemId");
return lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_itemId'];

};
c['getItemId__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemId__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_itemId'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_itemId'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_proto'],"itemId", lcA2, lcA1);
return;

    }
}}
};
c['setItemId__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getItemName__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_proto'],"itemName");
return lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_itemName'];

};
c['getItemName__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemName__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_itemName'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_itemName'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_proto'],"itemName", lcA2, lcA1);
return;

    }
}}
};
c['setItemName__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getItemType__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_proto'],"itemType");
return lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_itemType'];

};
c['getItemType__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemType__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_itemType'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_itemType'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_proto'],"itemType", lcA2, lcA1);
return;

    }
}}
};
c['setItemType__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getItemTypeIconCss__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_proto'],"itemTypeIconCss");
return lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_itemTypeIconCss'];

};
c['getItemTypeIconCss__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemTypeIconCss__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_itemTypeIconCss'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_itemTypeIconCss'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_proto'],"itemTypeIconCss", lcA2, lcA1);
return;

    }
}}
};
c['setItemTypeIconCss__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getAvatar__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_proto'],"avatar");
return lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_avatar'];

};
c['getAvatar__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setAvatar__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_avatar'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_avatar'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_proto'],"avatar", lcA2, lcA1);
return;

    }
}}
};
c['setAvatar__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isHasOwnerPermission__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_proto'],"hasOwnerPermission");
return lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_hasOwnerPermission'];

};
c['isHasOwnerPermission__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setHasOwnerPermission__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_hasOwnerPermission']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_hasOwnerPermission'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_proto'];var stA1 = "hasOwnerPermission";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
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
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_proto'],"hasAdminPermission");
return lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_hasAdminPermission'];

};
c['isHasAdminPermission__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setHasAdminPermission__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_hasAdminPermission']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_hasAdminPermission'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_proto'];var stA1 = "hasAdminPermission";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
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
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_proto'],"hasWritePermission");
return lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_hasWritePermission'];

};
c['isHasWritePermission__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setHasWritePermission__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_hasWritePermission']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_hasWritePermission'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_proto'];var stA1 = "hasWritePermission";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
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
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_proto'],"hasReadPermission");
return lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_hasReadPermission'];

};
c['isHasReadPermission__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setHasReadPermission__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_hasReadPermission']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_hasReadPermission'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_proto'];var stA1 = "hasReadPermission";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
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
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_proto'] = stA1;
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
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_itemId'] = lcA1;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_itemName'] = lcA2;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_itemType'] = lcA3;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_itemTypeIconCss'] = lcA4;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_avatar'] = lcA5;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_hasOwnerPermission'] = lcI6;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_hasAdminPermission'] = lcI7;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_hasWritePermission'] = lcI8;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_hasReadPermission'] = lcI9;
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
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, (9));
Array.at(stA2, 0, "itemId");
Array.at(stA2, 1, "itemName");
Array.at(stA2, 2, "itemType");
Array.at(stA2, 3, "itemTypeIconCss");
Array.at(stA2, 4, "avatar");
Array.at(stA2, 5, "hasOwnerPermission");
Array.at(stA2, (6), "hasAdminPermission");
Array.at(stA2, (7), "hasWritePermission");
Array.at(stA2, (8), "hasReadPermission");
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
if ((lcA3[0] || Array.at(lcA3, 0)) !== null && !(lcA3[0] || Array.at(lcA3, 0))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[0] || Array.at(lcA3, 0)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_itemId'] = (lcA3[0] || Array.at(lcA3, 0));
if ((lcA3[1] || Array.at(lcA3, 1)) !== null && !(lcA3[1] || Array.at(lcA3, 1))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[1] || Array.at(lcA3, 1)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_itemName'] = (lcA3[1] || Array.at(lcA3, 1));
if ((lcA3[2] || Array.at(lcA3, 2)) !== null && !(lcA3[2] || Array.at(lcA3, 2))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[2] || Array.at(lcA3, 2)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_itemType'] = (lcA3[2] || Array.at(lcA3, 2));
if ((lcA3[3] || Array.at(lcA3, 3)) !== null && !(lcA3[3] || Array.at(lcA3, 3))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[3] || Array.at(lcA3, 3)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_itemTypeIconCss'] = (lcA3[3] || Array.at(lcA3, 3));
if ((lcA3[4] || Array.at(lcA3, 4)) !== null && !(lcA3[4] || Array.at(lcA3, 4))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[4] || Array.at(lcA3, 4)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_avatar'] = (lcA3[4] || Array.at(lcA3, 4));
var stA0 = lcA0;if (((lcA3[5] || Array.at(lcA3, 5))) !== null) { gt = 134; break IF; }
var stI1 = 0;{ gt = 146; break IF; }
    }
    X_134: for (;;) { IF: if (gt <= 134) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[5] || Array.at(lcA3, 5)));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_146: for (;;) { IF: if (gt <= 146) {
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_hasOwnerPermission'] = stI1;
var stA0 = lcA0;if (((lcA3[(6)] || Array.at(lcA3, (6)))) !== null) { gt = 161; break IF; }
var stI1 = 0;{ gt = 174; break IF; }
    }
    X_161: for (;;) { IF: if (gt <= 161) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(6)] || Array.at(lcA3, (6))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_174: for (;;) { IF: if (gt <= 174) {
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_hasAdminPermission'] = stI1;
var stA0 = lcA0;if (((lcA3[(7)] || Array.at(lcA3, (7)))) !== null) { gt = 189; break IF; }
var stI1 = 0;{ gt = 202; break IF; }
    }
    X_189: for (;;) { IF: if (gt <= 189) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(7)] || Array.at(lcA3, (7))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_202: for (;;) { IF: if (gt <= 202) {
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_hasWritePermission'] = stI1;
var stA0 = lcA0;if (((lcA3[(8)] || Array.at(lcA3, (8)))) !== null) { gt = 217; break IF; }
var stI1 = 0;{ gt = 230; break IF; }
    }
    X_217: for (;;) { IF: if (gt <= 217) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(8)] || Array.at(lcA3, (8))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_230: for (;;) { IF: if (gt <= 230) {
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_hasReadPermission'] = stI1;
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"itemTypeIconCss");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getItemTypeIconCss__Ljava_lang_String_2();
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
    m = c.clone__Lio_cloudoffice_platform_cockpit_relateditem_ListItemView_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_proto']);
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_relateditem_ListItemView_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lio_cloudoffice_platform_cockpit_relateditem_ListItemView_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_relateditem_ListItemView_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_relateditem_ListItemView;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = lcA0.getItemId__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_itemId'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getItemName__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_itemName'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getItemType__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_itemType'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getItemTypeIconCss__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_itemTypeIconCss'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getAvatar__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_avatar'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isHasOwnerPermission__Z();
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_hasOwnerPermission'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isHasAdminPermission__Z();
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_hasAdminPermission'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isHasWritePermission__Z();
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_hasWritePermission'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isHasReadPermission__Z();
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_hasReadPermission'] = stI1;
return lcA2;

};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lio_cloudoffice_platform_cockpit_relateditem_ListItemView_2 = function() {
  var  lcA0 = this;
invoker.applyBindings__V(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_proto']);
return lcA0;

};
c['applyBindings__Lio_cloudoffice_platform_cockpit_relateditem_ListItemView_2'] = m;

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

var stI0 = lcA1 != null && lcA1['$instOf_io_cloudoffice_platform_cockpit_relateditem_ListItemView'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_relateditem_ListItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.relateditem.ListItemView');
var lcA2 = lcA1;
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_itemId'], lcA2['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_itemId']);
if ((stI0) != 0) { gt = 40; break IF; }
return 0;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_itemName'], lcA2['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_itemName']);
if ((stI0) != 0) { gt = 59; break IF; }
return 0;
    }
    X_59: for (;;) { IF: if (gt <= 59) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_itemType'], lcA2['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_itemType']);
if ((stI0) != 0) { gt = 78; break IF; }
return 0;
    }
    X_78: for (;;) { IF: if (gt <= 78) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_itemTypeIconCss'], lcA2['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_itemTypeIconCss']);
if ((stI0) != 0) { gt = 97; break IF; }
return 0;
    }
    X_97: for (;;) { IF: if (gt <= 97) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_avatar'], lcA2['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_avatar']);
if ((stI0) != 0) { gt = 116; break IF; }
return 0;
    }
    X_116: for (;;) { IF: if (gt <= 116) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_hasOwnerPermission']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_hasOwnerPermission']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 141; break IF; }
return 0;
    }
    X_141: for (;;) { IF: if (gt <= 141) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_hasAdminPermission']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_hasAdminPermission']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 166; break IF; }
return 0;
    }
    X_166: for (;;) { IF: if (gt <= 166) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_hasWritePermission']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_hasWritePermission']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 191; break IF; }
return 0;
    }
    X_191: for (;;) { IF: if (gt <= 191) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_hasReadPermission']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_hasReadPermission']);
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
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_itemId'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_itemName'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_itemType'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_itemTypeIconCss'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_avatar'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_hasOwnerPermission']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_hasAdminPermission']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_hasWritePermission']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_hasReadPermission']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
return lcI1;

};
c['hashCode__I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Ljava_lang_Object_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0.clone__Lio_cloudoffice_platform_cockpit_relateditem_ListItemView_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lio_cloudoffice_platform_cockpit_relateditem_ListItemView$Html4JavaType_2 = function() {
return c._TYPE();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_relateditem_ListItemView_2 = function(lcA0) {
return lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_relateditem_ListItemView$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lio_cloudoffice_platform_cockpit_relateditem_ListItemView_2Lio_cloudoffice_platform_cockpit_relateditem_ListItemView_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_relateditem_ListItemView_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_relateditem_ListItemView$Html4JavaType;
(refs_io_cloudoffice_platform_cockpit_relateditem_ListItemView$Html4JavaType || (refs_io_cloudoffice_platform_cockpit_relateditem_ListItemView$Html4JavaType = io_cloudoffice_platform_cockpit_relateditem_ListItemView$Html4JavaType(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_relateditem_ListItemView$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_relateditem_ListItemViewfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_relateditem_ListItemView', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_relateditem_ListItemViewfillInstOf });
    io_cloudoffice_platform_cockpit_relateditem_ListItemViewfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/relateditem/ListItemView';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$ListItemViewModel;
    var refs_java_lang_Boolean;
    var refs_net_java_html_BrwsrCtx;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_relateditem_ListItemView$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_proto'] = null;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_itemId'] = null;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_itemName'] = null;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_itemType'] = null;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_itemTypeIconCss'] = null;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_avatar'] = null;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_hasOwnerPermission'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_hasAdminPermission'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_hasWritePermission'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_ListItemView_prop_hasReadPermission'] = 0;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_relateditem_ListItemView = registerClass(exports,'io_cloudoffice_platform_cockpit_relateditem_ListItemView',io_cloudoffice_platform_cockpit_relateditem_ListItemView);


function io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$view = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$1_val$view'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$1_val$view']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$1_val$view'] = lcA1;
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2']("Save Callback");
(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent(false))).resetConfiguration__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$1_val$view']);
(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent(false))).closeConfigurationPanel__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$1_val$view']);
return;

};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$1', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$1fillInstOf });
    io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/relateditem/RelatedItemComponent$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_Logger;
    var refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$1_val$view'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$1 = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$1;

vm.io_cloudoffice_platform_cockpit_api_CallBack = link('io/cloudoffice/platform/cockpit/api/CallBack', function(f) { vm.io_cloudoffice_platform_cockpit_api_CallBack =  f; });

function io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_api_AbstractComponent(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = c.getInstance__Lio_cloudoffice_platform_cockpit_api_Component_2 = function() {
var stA0 = new io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent;
c.constructor.cons__V.call(stA0);
return stA0;

};
c['getInstance__Lio_cloudoffice_platform_cockpit_api_Component_2'] = m;

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
    m = c.getInstance__Lio_cloudoffice_platform_cockpit_api_Component_2Ljava_lang_String_2 = function(lcA0) {
var stA0 = new io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent;
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
c['_componentName'].call(lcA0, "relateditem-component");
return;

};
c['setComponentName__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.bindViewNames__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getName__Ljava_lang_String_2((refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView = io_cloudoffice_platform_cockpit_relateditem_RelatedItemView(false))).constructor.$class);
invoker.setDefaultViewName__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA0;var stA1 = invoker.getName__Ljava_lang_String_2((refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView = io_cloudoffice_platform_cockpit_relateditem_RelatedItemView(false))).constructor.$class);
invoker.setDefaultConfigViewName__VLjava_lang_String_2(stA0,stA1);
return;

};
c['bindViewNames__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.bindEventListeners__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = "loginsuccess";var stA2 = new io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$LoginEventListener;
(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$LoginEventListener || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$LoginEventListener = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$LoginEventListener(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent_2.call(stA2, lcA0);
invoker.attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2(stA0,stA1, stA2);
var stA0 = lcA0;var stA1 = "designermode";var stA2 = new io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$DesignModeListener;
(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$DesignModeListener || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$DesignModeListener = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$DesignModeListener(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent_2.call(stA2, lcA0);
invoker.attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2(stA0,stA1, stA2);
var stA0 = lcA0;var stA1 = "toogleitemaction";var stA2 = new io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$ToogleRelatedItemListener;
(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$ToogleRelatedItemListener || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$ToogleRelatedItemListener = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$ToogleRelatedItemListener(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent_2.call(stA2, lcA0);
invoker.attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2(stA0,stA1, stA2);
var stA0 = lcA0;var stA1 = "saverelateditem";var stA2 = new io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$SaveRelatedItemListener;
(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$SaveRelatedItemListener || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$SaveRelatedItemListener = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$SaveRelatedItemListener(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent_2.call(stA2, lcA0);
invoker.attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2(stA0,stA1, stA2);
var stA0 = lcA0;var stA1 = "invokefunction";var stA2 = new io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$FunctionInvokeListener;
(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$FunctionInvokeListener || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$FunctionInvokeListener = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$FunctionInvokeListener(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent_2Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$1_2.call(stA2, lcA0, null);
invoker.attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2(stA0,stA1, stA2);
var stA0 = lcA0;var stA1 = "getrelateditems";var stA2 = new io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$GetRelatedItemListListener;
(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$GetRelatedItemListListener || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$GetRelatedItemListListener = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$GetRelatedItemListListener(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent_2.call(stA2, lcA0);
invoker.attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2(stA0,stA1, stA2);
var stA0 = lcA0;var stA1 = "removerelateditem";var stA2 = new io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$RemoveRelatedItemListener;
(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$RemoveRelatedItemListener || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$RemoveRelatedItemListener = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$RemoveRelatedItemListener(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent_2.call(stA2, lcA0);
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
    m = c.openConfig__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2 = function(lcA0) {
lcA0.setDesignerMode__VZ(1);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.closeConfigurationPanel__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2 = function(lcA0) {
lcA0.setDesignerMode__VZ(0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.save__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2 = function(lcA0) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = "relateditem";var stA2 = lcA0.getInstance__Ljava_lang_String_2();
var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['configPostEndpoint__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'](stA1, stA2, "");
var stA2 = lcA0.toString__Ljava_lang_String_2();
var stA3 = new io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$1;
(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$1 || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$1 = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$1(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2.call(stA3, lcA0);
invoker.post__VLjava_lang_String_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.resetConfiguration__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2 = function(lcA0) {
c.resetConfigurationModelFromJSON__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2(lcA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.resetConfigurationModelFromJSON__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2 = function(lcA0) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = "relateditem";var stA2 = lcA0.getInstance__Ljava_lang_String_2();
var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['configFetchEndpoint__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'](stA1, stA2);
var stA2 = null;var stA3 = new io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$2;
(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$2 || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$2 = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$2(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2.call(stA3, lcA0);
invoker.fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.prepareConfigurationModelFromJSON__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA1.getConfiguration__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_2();
var lcA3 = stA0;
var stA0 = invoker.getJsonObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA2,"configuration");
var lcA4 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_Object_2'](lcA4);
if ((stI0) == 0) { gt = 26; break IF; }
c.setComponentDefinition__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2(lcA1, lcA2);
    }
    X_26: for (;;) { IF: if (gt <= 26) {
return;

    }
}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.setComponentDefinition__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2 = function(lcA0, lcA1) {
var stA0 = lcA0.getConfiguration__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_2();
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
    m = c.clearFilter__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2 = function(lcA0) {
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
    m = c.toogleRelateItem__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

c.defaultInitialData__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2(lcA0);
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
c['toogleRelateItem__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.closeRelatedItem__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2 = function(lcA0) {
lcA0.setVisible__VZ(0);
return;

};
c['closeRelatedItem__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.activate__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2Ljava_lang_String_2 = function(lcA0, lcA1) {
lcA0.setRelatedItemType__VLjava_lang_String_2(lcA1);
var stA0 = lcA0.getRelatedItemList__Ljava_util_List_2();
invoker.clear__V(stA0);
var stA0 = lcA0.getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
invoker.setActive__VZ(stA0,1);
lcA0.setShowRelatedItemList__VZ(0);
var stA0 = lcA0;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"+ enter ");
var stA2 = invoker.toLowerCase__Ljava_lang_String_2(lcA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," name ...");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
stA0.setAutocompletePlaceholderText__VLjava_lang_String_2(stA1);
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['builder__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = "itemId";var stA2 = lcA0.getSelectedItemId__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA0 = lcA2;var stA1 = "itemType";var stA2 = lcA0.getSelectedItemType__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA0 = new vm.java_util_ArrayList;
(refs_java_util_ArrayList || (refs_java_util_ArrayList = vm.java_util_ArrayList(false))).constructor['cons__V'].call(stA0);
var lcA3 = stA0;
var stA0 = lcA3;var stA1 = lcA0.getRelatedItemType__Ljava_lang_String_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_util_List_2(lcA2,"relatedItemTypes", lcA3);
var stA0 = lcA0;var stA1 = invoker.toJSON__Ljava_lang_String_2(lcA2);
c.processRelatedItemList__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2Ljava_lang_String_2(stA0, stA1);
return;

};
c['activate__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.toggleRelatedItemList__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

lcA0.setInputBoxText__VLjava_lang_String_2("");
var stA0 = lcA0;var stI1 = lcA0.isShowRelatedItemList__Z();
if ((stI1) != 0) { gt = 18; break IF; }
var stI1 = 1;{ gt = 19; break IF; }
    }
    X_18: for (;;) { IF: if (gt <= 18) {

var stI1 = 0;    }
    X_19: for (;;) { IF: if (gt <= 19) {
stA0.setShowRelatedItemList__VZ(stI1);
return;

    }
}}}
};
c['toggleRelatedItemList__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.processRelatedItem__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2Ljava_lang_String_2 = function(lcA0, lcA1) {
var stA0 = lcA0.getRelatedItemList__Ljava_util_List_2();
invoker.clear__V(stA0);
c.toogleRelateItem__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2(lcA0);
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
var stA0 = lcA0;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"businessModelName");
stA0.setBusinessModelName__VLjava_lang_String_2(stA1);
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['builder__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var lcA3 = stA0;
var stA0 = lcA3;var stA1 = "itemId";var stA2 = lcA0.getSelectedItemId__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA0 = lcA3;var stA1 = "itemType";var stA2 = lcA0.getSelectedItemType__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA0 = new vm.java_util_ArrayList;
(refs_java_util_ArrayList || (refs_java_util_ArrayList = vm.java_util_ArrayList(false))).constructor['cons__V'].call(stA0);
var lcA4 = stA0;
var stA0 = lcA4;var stA1 = lcA0.getRelatedItemType__Ljava_lang_String_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_util_List_2(lcA3,"relatedItemTypes", lcA4);
var stA0 = lcA0;var stA1 = invoker.toJSON__Ljava_lang_String_2(lcA3);
c.processRelatedItemList__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2Ljava_lang_String_2(stA0, stA1);
return;

};
c['processRelatedItem__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.processRelatedItemList__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2Ljava_lang_String_2 = function(lcA0, lcA1) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2'](lcA1);
var lcA2 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"itemId");
var lcA3 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"itemType");
var lcA4 = stA0;
var stA0 = invoker.getList__Ljava_util_List_2Ljava_lang_String_2(lcA2,"relatedItemTypes");
var lcA5 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"component");
var lcA6 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"instanceId");
var lcA7 = stA0;
var stA0 = new io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$4;
(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$4 || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$4 = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$4(false))).constructor.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2Ljava_util_List_2Ljava_lang_String_2Ljava_lang_String_2.call(stA0, "\"/VirtualItem-portlet.searchitem/search\"", lcA0, lcA5, lcA3, lcA4);
var stA1 = new io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$3;
(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$3 || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$3 = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$3(false))).constructor.cons__VLjava_lang_String_2Ljava_lang_String_2.call(stA1, lcA6, lcA7);
invoker.call__VLio_cloudoffice_platform_cockpit_api_ServerCallback_2(stA0,stA1);
return;

};
c['processRelatedItemList__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.itemSearchAutocomplete__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

lcA0.setShowRelatedItemList__VZ(0);
var stA0 = lcA0.getInputBoxText__Ljava_lang_String_2();
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA0);
if ((stI0) == 0) { gt = 35; break IF; }
var stA0 = lcA0.getItemListLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
invoker.setActive__VZ(stA0,1);
lcA0.setShowItemList__VZ(1);
c.getItemList__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2(lcA0);
{ gt = 49; break IF; }
    }
    X_35: for (;;) { IF: if (gt <= 35) {

lcA0.setShowItemList__VZ(0);
var stA0 = lcA0.getItemList__Ljava_util_List_2();
invoker.clear__V(stA0);
    }
    X_49: for (;;) { IF: if (gt <= 49) {
return;

    }
}}}
};
c['itemSearchAutocomplete__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getItemList__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2 = function(lcA0) {
var stA0 = lcA0.getSelectedItemId__Ljava_lang_String_2();
var lcA1 = stA0;
var stA0 = lcA0.getSelectedItemType__Ljava_lang_String_2();
var lcA2 = stA0;
var stA0 = lcA0.getRelatedItemType__Ljava_lang_String_2();
var lcA3 = stA0;
var stA0 = lcA0.getInputBoxText__Ljava_lang_String_2();
var lcA4 = stA0;
var stA0 = lcA0.getRelatedItemList__Ljava_util_List_2();
var lcA5 = stA0;
var stA0 = new io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$6;
(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$6 || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$6 = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$6(false))).constructor.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_util_List_2Ljava_lang_String_2.call(stA0, "\"/VirtualItem-portlet.searchitem/autoCompleteSearch\"", lcA0, lcA3, lcA2, lcA1, lcA5, lcA4);
var stA1 = new io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$5;
(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$5 || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$5 = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$5(false))).constructor.cons__V.call(stA1);
invoker.call__VLio_cloudoffice_platform_cockpit_api_ServerCallback_2(stA0,stA1);
return;

};
c['getItemList__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.selectItem__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2Lio_cloudoffice_platform_cockpit_relateditem_ListItemView_2 = function(lcA0, lcA1) {
c.openRelationForm__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2(lcA0);
lcA0.setInputBoxText__VLjava_lang_String_2("");
var stA0 = lcA0;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"Relate with ");
var stA2 = lcA0.getSelectedItemName__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
stA0.setTitle__VLjava_lang_String_2(stA1);
var stA0 = lcA0;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"Selected ");
var stA2 = lcA1.getItemType__Ljava_lang_String_2();
var stA2 = invoker.toLowerCase__Ljava_lang_String_2(stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
stA0.setLabelText__VLjava_lang_String_2(stA1);
var stA0 = lcA0;var stA1 = lcA1.getItemName__Ljava_lang_String_2();
stA0.setRelatedItemName__VLjava_lang_String_2(stA1);
var stA0 = lcA0;var stA1 = lcA1.getItemId__Ljava_lang_String_2();
stA0.setRelatedItemId__VLjava_lang_String_2(stA1);
var stA0 = lcA0;var stA1 = lcA1.getItemType__Ljava_lang_String_2();
var stA1 = (refs_io_cloudoffice_platform_cockpit_api_QueryMetaModel || (refs_io_cloudoffice_platform_cockpit_api_QueryMetaModel = vm.io_cloudoffice_platform_cockpit_api_QueryMetaModel(false)))['getItemTypeIconCss__Ljava_lang_String_2Ljava_lang_String_2'](stA1);
stA0.setRelatedItemTypeIcon__VLjava_lang_String_2(stA1);
return;

};
c['selectItem__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2Lio_cloudoffice_platform_cockpit_relateditem_ListItemView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.openRelationForm__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2 = function(lcA0) {
c.initRelationFormStaticData__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2(lcA0);
lcA0.setShowRelationForm__VZ(1);
return;

};
c['openRelationForm__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.hideRelationForm__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2 = function(lcA0) {
lcA0.setShowRelationForm__VZ(0);
c.clearRelationForm__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2(lcA0);
return;

};
c['hideRelationForm__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.toggleEmplyee__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = lcA0.isIsEmployee__Z();
if ((stI0) == 0) { gt = 21; break IF; }
lcA0.setIsEmployee__VZ(0);
lcA0.setEmployeeClass__VLjava_lang_String_2("");
{ gt = 33; break IF; }
    }
    X_21: for (;;) { IF: if (gt <= 21) {

lcA0.setIsEmployee__VZ(1);
lcA0.setEmployeeClass__VLjava_lang_String_2("active");
    }
    X_33: for (;;) { IF: if (gt <= 33) {
return;

    }
}}}
};
c['toggleEmplyee__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.showDatePicker__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2 = function(lcA0) {
return;

};
c['showDatePicker__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.initRelationFormStaticData__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2 = function(lcA0) {
lcA0.setDatePickerId__VLjava_lang_String_2("relation-dp");
lcA0.setProjectRelationType__VLjava_lang_String_2("Project Lead");
c.initOrgOrgRelationStaticData__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2(lcA0);
c.initPersonOrgRelationStaticData__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2(lcA0);
c.initProjectRelationStaticData__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2(lcA0);
c.checkRelationType__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2(lcA0);
return;

};
c['initRelationFormStaticData__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.initOrgOrgRelationStaticData__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2 = function(lcA0) {
var stA0 = lcA0.getOrgOrgRelationList__Ljava_util_List_2();
invoker.clear__V(stA0);
var stA0 = new io_cloudoffice_platform_cockpit_relateditem_Item;
(refs_io_cloudoffice_platform_cockpit_relateditem_Item || (refs_io_cloudoffice_platform_cockpit_relateditem_Item = io_cloudoffice_platform_cockpit_relateditem_Item(false))).constructor.cons__VLjava_lang_String_2Ljava_lang_String_2.call(stA0, "Parent", "Parent");
var lcA1 = stA0;
var stA0 = lcA0.getOrgOrgRelationList__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA1);
var stA0 = new io_cloudoffice_platform_cockpit_relateditem_Item;
(refs_io_cloudoffice_platform_cockpit_relateditem_Item || (refs_io_cloudoffice_platform_cockpit_relateditem_Item = io_cloudoffice_platform_cockpit_relateditem_Item(false))).constructor.cons__VLjava_lang_String_2Ljava_lang_String_2.call(stA0, "Child", "Child");
var lcA1 = stA0;
var stA0 = lcA0.getOrgOrgRelationList__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA1);
var stA0 = new io_cloudoffice_platform_cockpit_relateditem_Item;
(refs_io_cloudoffice_platform_cockpit_relateditem_Item || (refs_io_cloudoffice_platform_cockpit_relateditem_Item = io_cloudoffice_platform_cockpit_relateditem_Item(false))).constructor.cons__VLjava_lang_String_2Ljava_lang_String_2.call(stA0, "Sister", "Sister");
var lcA1 = stA0;
var stA0 = lcA0.getOrgOrgRelationList__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA1);
var stA0 = new io_cloudoffice_platform_cockpit_relateditem_Item;
(refs_io_cloudoffice_platform_cockpit_relateditem_Item || (refs_io_cloudoffice_platform_cockpit_relateditem_Item = io_cloudoffice_platform_cockpit_relateditem_Item(false))).constructor.cons__VLjava_lang_String_2Ljava_lang_String_2.call(stA0, "Network", "Network");
var lcA1 = stA0;
var stA0 = lcA0.getOrgOrgRelationList__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA1);
return;

};
c['initOrgOrgRelationStaticData__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.initPersonOrgRelationStaticData__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2 = function(lcA0) {
var stA0 = lcA0.getPersonCompanyRelationList__Ljava_util_List_2();
invoker.clear__V(stA0);
var stA0 = new io_cloudoffice_platform_cockpit_relateditem_Item;
(refs_io_cloudoffice_platform_cockpit_relateditem_Item || (refs_io_cloudoffice_platform_cockpit_relateditem_Item = io_cloudoffice_platform_cockpit_relateditem_Item(false))).constructor.cons__VLjava_lang_String_2Ljava_lang_String_2.call(stA0, "Nutral", "Nutral");
var lcA1 = stA0;
var stA0 = lcA0.getPersonCompanyRelationList__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA1);
var stA0 = new io_cloudoffice_platform_cockpit_relateditem_Item;
(refs_io_cloudoffice_platform_cockpit_relateditem_Item || (refs_io_cloudoffice_platform_cockpit_relateditem_Item = io_cloudoffice_platform_cockpit_relateditem_Item(false))).constructor.cons__VLjava_lang_String_2Ljava_lang_String_2.call(stA0, "Negative", "Negative");
var lcA1 = stA0;
var stA0 = lcA0.getPersonCompanyRelationList__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA1);
var stA0 = new io_cloudoffice_platform_cockpit_relateditem_Item;
(refs_io_cloudoffice_platform_cockpit_relateditem_Item || (refs_io_cloudoffice_platform_cockpit_relateditem_Item = io_cloudoffice_platform_cockpit_relateditem_Item(false))).constructor.cons__VLjava_lang_String_2Ljava_lang_String_2.call(stA0, "Active", "Active");
var lcA1 = stA0;
var stA0 = lcA0.getPersonCompanyRelationList__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA1);
var stA0 = new io_cloudoffice_platform_cockpit_relateditem_Item;
(refs_io_cloudoffice_platform_cockpit_relateditem_Item || (refs_io_cloudoffice_platform_cockpit_relateditem_Item = io_cloudoffice_platform_cockpit_relateditem_Item(false))).constructor.cons__VLjava_lang_String_2Ljava_lang_String_2.call(stA0, "3", "3");
var lcA1 = stA0;
var stA0 = lcA0.getPersonCompanyRelationList__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA1);
var stA0 = new io_cloudoffice_platform_cockpit_relateditem_Item;
(refs_io_cloudoffice_platform_cockpit_relateditem_Item || (refs_io_cloudoffice_platform_cockpit_relateditem_Item = io_cloudoffice_platform_cockpit_relateditem_Item(false))).constructor.cons__VLjava_lang_String_2Ljava_lang_String_2.call(stA0, "1", "1");
var lcA1 = stA0;
var stA0 = lcA0.getPersonCompanyRelationList__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA1);
var stA0 = new io_cloudoffice_platform_cockpit_relateditem_Item;
(refs_io_cloudoffice_platform_cockpit_relateditem_Item || (refs_io_cloudoffice_platform_cockpit_relateditem_Item = io_cloudoffice_platform_cockpit_relateditem_Item(false))).constructor.cons__VLjava_lang_String_2Ljava_lang_String_2.call(stA0, "DEBITOR", "DEBITOR");
var lcA1 = stA0;
var stA0 = lcA0.getPersonCompanyRelationList__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA1);
var stA0 = new io_cloudoffice_platform_cockpit_relateditem_Item;
(refs_io_cloudoffice_platform_cockpit_relateditem_Item || (refs_io_cloudoffice_platform_cockpit_relateditem_Item = io_cloudoffice_platform_cockpit_relateditem_Item(false))).constructor.cons__VLjava_lang_String_2Ljava_lang_String_2.call(stA0, "CREDITOR", "CREDITOR");
var lcA1 = stA0;
var stA0 = lcA0.getPersonCompanyRelationList__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA1);
return;

};
c['initPersonOrgRelationStaticData__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.initProjectRelationStaticData__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2 = function(lcA0) {
var stA0 = lcA0.getProjectRelationTypeList__Ljava_util_List_2();
invoker.clear__V(stA0);
var stA0 = new io_cloudoffice_platform_cockpit_relateditem_Item;
(refs_io_cloudoffice_platform_cockpit_relateditem_Item || (refs_io_cloudoffice_platform_cockpit_relateditem_Item = io_cloudoffice_platform_cockpit_relateditem_Item(false))).constructor.cons__VLjava_lang_String_2Ljava_lang_String_2.call(stA0, "Project Lead", "Project Lead");
var lcA1 = stA0;
var stA0 = lcA0.getProjectRelationTypeList__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA1);
var stA0 = new io_cloudoffice_platform_cockpit_relateditem_Item;
(refs_io_cloudoffice_platform_cockpit_relateditem_Item || (refs_io_cloudoffice_platform_cockpit_relateditem_Item = io_cloudoffice_platform_cockpit_relateditem_Item(false))).constructor.cons__VLjava_lang_String_2Ljava_lang_String_2.call(stA0, "Project Admin", "Project Admin");
var lcA1 = stA0;
var stA0 = lcA0.getProjectRelationTypeList__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA1);
var stA0 = new io_cloudoffice_platform_cockpit_relateditem_Item;
(refs_io_cloudoffice_platform_cockpit_relateditem_Item || (refs_io_cloudoffice_platform_cockpit_relateditem_Item = io_cloudoffice_platform_cockpit_relateditem_Item(false))).constructor.cons__VLjava_lang_String_2Ljava_lang_String_2.call(stA0, "Project Member", "Project Member");
var lcA1 = stA0;
var stA0 = lcA0.getProjectRelationTypeList__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA1);
var stA0 = new io_cloudoffice_platform_cockpit_relateditem_Item;
(refs_io_cloudoffice_platform_cockpit_relateditem_Item || (refs_io_cloudoffice_platform_cockpit_relateditem_Item = io_cloudoffice_platform_cockpit_relateditem_Item(false))).constructor.cons__VLjava_lang_String_2Ljava_lang_String_2.call(stA0, "Project Client", "Project Client");
var lcA1 = stA0;
var stA0 = lcA0.getProjectRelationTypeList__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA1);
var stA0 = new io_cloudoffice_platform_cockpit_relateditem_Item;
(refs_io_cloudoffice_platform_cockpit_relateditem_Item || (refs_io_cloudoffice_platform_cockpit_relateditem_Item = io_cloudoffice_platform_cockpit_relateditem_Item(false))).constructor.cons__VLjava_lang_String_2Ljava_lang_String_2.call(stA0, "None", "None");
var lcA1 = stA0;
var stA0 = lcA0.getProjectRelationTypeList__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA1);
return;

};
c['initProjectRelationStaticData__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.checkRelationType__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0.getSelectedItemType__Ljava_lang_String_2();
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA0);
if ((stI0) == 0) { gt = 17; break IF; }
var stA0 = lcA0.getSelectedItemType__Ljava_lang_String_2();
{ gt = 19; break IF; }
    }
    X_17: for (;;) { IF: if (gt <= 17) {

var stA0 = "";    }
    X_19: for (;;) { IF: if (gt <= 19) {
var lcA1 = stA0;
var stA0 = lcA0.getRelatedItemType__Ljava_lang_String_2();
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA0);
if ((stI0) == 0) { gt = 37; break IF; }
var stA0 = lcA0.getRelatedItemType__Ljava_lang_String_2();
{ gt = 39; break IF; }
    }
    X_37: for (;;) { IF: if (gt <= 37) {

var stA0 = "";    }
    X_39: for (;;) { IF: if (gt <= 39) {
var lcA2 = stA0;
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA1,"PERSON");
if ((stI0) == 0) { gt = 60; break IF; }
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA2,"ORGANIZATION");
if ((stI0) != 0) { gt = 80; break IF; }
    }
    X_60: for (;;) { IF: if (gt <= 60) {

var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA1,"ORGANIZATION");
if ((stI0) == 0) { gt = 85; break IF; }
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA2,"PERSON");
if ((stI0) == 0) { gt = 85; break IF; }
    }
    X_80: for (;;) { IF: if (gt <= 80) {

lcA0.setIsPersonOrgRelation__VZ(1);
    }
    X_85: for (;;) { IF: if (gt <= 85) {

var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA1,"ORGANIZATION");
if ((stI0) == 0) { gt = 110; break IF; }
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA2,"ORGANIZATION");
if ((stI0) == 0) { gt = 110; break IF; }
lcA0.setIsOrgOrgRelation__VZ(1);
    }
    X_110: for (;;) { IF: if (gt <= 110) {

var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA1,"PERSON");
if ((stI0) == 0) { gt = 130; break IF; }
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA2,"PROJECT");
if ((stI0) != 0) { gt = 150; break IF; }
    }
    X_130: for (;;) { IF: if (gt <= 130) {

var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA1,"PROJECT");
if ((stI0) == 0) { gt = 155; break IF; }
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA2,"PERSON");
if ((stI0) == 0) { gt = 155; break IF; }
    }
    X_150: for (;;) { IF: if (gt <= 150) {

lcA0.setIsPersonProjectRelation__VZ(1);
    }
    X_155: for (;;) { IF: if (gt <= 155) {
return;

    }
}}}}}}}}}}}}
};
c['checkRelationType__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.clearRelationForm__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2 = function(lcA0) {
lcA0.setRelatedItemId__VLjava_lang_String_2("");
lcA0.setRelatedItemName__VLjava_lang_String_2("");
lcA0.setIsEmployee__VZ(0);
lcA0.setCompanyRelationTypeA__VLjava_lang_String_2("");
lcA0.setDescription__VLjava_lang_String_2("");
lcA0.setEmployeeClass__VLjava_lang_String_2("");
lcA0.setEngagementEndDate__VLjava_lang_String_2("");
lcA0.setPersonCompanyFunction__VLjava_lang_String_2("");
lcA0.setIsOrgOrgRelation__VZ(0);
lcA0.setIsPersonOrgRelation__VZ(0);
lcA0.setIsPersonProjectRelation__VZ(0);
lcA0.setLabelText__VLjava_lang_String_2("");
lcA0.setPersonCompanyDepartment__VLjava_lang_String_2("");
lcA0.setPersonCompanyEmail__VLjava_lang_String_2("");
lcA0.setPersonCompanyMobile__VLjava_lang_String_2("");
lcA0.setPersonCompanyPhone__VLjava_lang_String_2("");
lcA0.setPersonCompanyRelation__VLjava_lang_String_2("");
lcA0.setProjectRelationType__VLjava_lang_String_2("");
lcA0.setTitle__VLjava_lang_String_2("");
lcA0.setRelatedItemTypeIcon__VLjava_lang_String_2("");
return;

};
c['clearRelationForm__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.companyRelationTypeB__Ljava_lang_String_2Ljava_lang_String_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isEmpty__ZLjava_lang_String_2'](lcA0);
if ((stI0) == 0) { gt = 10; break IF; }
return "";
    }
    X_10: for (;;) { IF: if (gt <= 10) {

var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA0,"Parent");
if ((stI0) == 0) { gt = 24; break IF; }
return "Child";
    }
    X_24: for (;;) { IF: if (gt <= 24) {

var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA0,"Child");
if ((stI0) == 0) { gt = 38; break IF; }
return "Parent";
    }
    X_38: for (;;) { IF: if (gt <= 38) {

var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA0,"Sister");
if ((stI0) == 0) { gt = 52; break IF; }
return "Sister";
    }
    X_52: for (;;) { IF: if (gt <= 52) {

var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA0,"Network");
if ((stI0) == 0) { gt = 66; break IF; }
return "Network";
    }
    X_66: for (;;) { IF: if (gt <= 66) {

return "";

    }
}}}}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.addRelatedItem__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = lcA0.isIsPersonOrgRelation__Z();
if ((stI0) == 0) { gt = 14; break IF; }
var stI0 = lcA0.isIsEmployee__Z();
if ((stI0) == 0) { gt = 14; break IF; }
    }
    X_14: for (;;) { IF: if (gt <= 14) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['builder__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var stA1 = "itemId";var stA2 = lcA0.getSelectedItemId__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA1 = "itemType";var stA2 = lcA0.getSelectedItemType__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA1 = "itemName";var stA2 = lcA0.getSelectedItemName__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA1 = "relatedItemId";var stA2 = lcA0.getRelatedItemId__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA1 = "relatedItemType";var stA2 = lcA0.getRelatedItemType__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA1 = "description";var stA2 = lcA0.getDescription__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA1 = "companyRelationTypeA";var stA2 = lcA0.getCompanyRelationTypeA__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA1 = "companyRelationTypeB";var stA2 = lcA0.getCompanyRelationTypeA__Ljava_lang_String_2();
var stA2 = c.companyRelationTypeB__Ljava_lang_String_2Ljava_lang_String_2(stA2);
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA1 = "personCompanyRelation";var stA2 = lcA0.getPersonCompanyRelation__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA1 = "personCompanyPhone";var stA2 = lcA0.getPersonCompanyPhone__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA1 = "personCompanyMobile";var stA2 = lcA0.getPersonCompanyMobile__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA1 = "personCompanyEmail";var stA2 = lcA0.getPersonCompanyEmail__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA1 = "function";var stA2 = lcA0.getPersonCompanyFunction__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA1 = "personCompanyDepartment";var stA2 = lcA0.getPersonCompanyDepartment__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA1 = "engagementEndDate";var stA2 = lcA0.getEngagementEndDate__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA1 = "projectRelationType";var stA2 = lcA0.getProjectRelationType__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA1 = "isEmployee";var stI2 = lcA0.isIsEmployee__Z();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Z(stA0,stA1, stI2);
var stA1 = "businessModelName";var stA2 = lcA0.getBusinessModelName__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA0 = invoker.toJSON__Ljava_lang_String_2(stA0);
var lcA1 = stA0;
c.saveRelatedItem__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2Ljava_lang_String_2(lcA0, lcA1);
return;

    }
}}
};
c['addRelatedItem__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getView__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2 = function() {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_AbstractComponent || (refs_io_cloudoffice_platform_cockpit_api_AbstractComponent = vm.io_cloudoffice_platform_cockpit_api_AbstractComponent(false)))['getView__Ljava_lang_Object_2'].call(lcA0);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.relateditem.RelatedItemView');
return stA0;

};
c['getView__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.saveRelatedItem__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2Ljava_lang_String_2 = function(lcA0, lcA1) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2'](lcA1);
var lcA2 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"component");
var lcA3 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"instanceId");
var lcA4 = stA0;
var stA0 = new io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$8;
(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$8 || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$8 = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$8(false))).constructor.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2.call(stA0, "\"/VirtualItem-portlet.searchitem/saveRelatedItems\"", lcA0, lcA2);
var stA1 = new io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$7;
(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$7 || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$7 = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$7(false))).constructor.cons__VLjava_lang_String_2Ljava_lang_String_2.call(stA1, lcA3, lcA4);
invoker.call__VLio_cloudoffice_platform_cockpit_api_ServerCallback_2(stA0,stA1);
return;

};
c['saveRelatedItem__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.deleteRelatedItemFromList__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2Lio_cloudoffice_platform_cockpit_relateditem_ListItemView_2 = function(lcA0, lcA1) {
var stA0 = lcA0.getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
invoker.setActive__VZ(stA0,1);
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['builder__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = "itemId";var stA2 = lcA0.getSelectedItemId__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA0 = lcA2;var stA1 = "itemType";var stA2 = lcA0.getSelectedItemType__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA0 = lcA2;var stA1 = "relatedItemId";var stA2 = lcA1.getItemId__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA0 = lcA2;var stA1 = "relatedItemType";var stA2 = lcA1.getItemType__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA0 = lcA0;var stA1 = invoker.toJSON__Ljava_lang_String_2(lcA2);
c.deleteRelatedItem__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2Ljava_lang_String_2(stA0, stA1);
return;

};
c['deleteRelatedItemFromList__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2Lio_cloudoffice_platform_cockpit_relateditem_ListItemView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.deleteRelatedItem__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2Ljava_lang_String_2 = function(lcA0, lcA1) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2'](lcA1);
var lcA2 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"component");
var lcA3 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"instanceId");
var lcA4 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"itemId");
var lcA5 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"itemType");
var lcA6 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"relatedItemId");
var lcA7 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"relatedItemType");
var lcA8 = stA0;
var stA0 = new io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$10;
(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$10 || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$10 = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$10(false))).constructor.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2.call(stA0, "\"/VirtualItem-portlet.searchitem/deleteRelatedItem\"", lcA0, lcA5, lcA6, lcA7, lcA8);
var stA1 = new io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$9;
(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$9 || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$9 = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$9(false))).constructor.cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2.call(stA1, lcA7, lcA3, lcA4);
invoker.call__VLio_cloudoffice_platform_cockpit_api_ServerCallback_2(stA0,stA1);
return;

};
c['deleteRelatedItem__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.defaultInitialData__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2 = function(lcA0) {
var stA0 = lcA0.getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
invoker.setActive__VZ(stA0,0);
lcA0.setShowRelatedItemList__VZ(0);
lcA0.setShowItemList__VZ(0);
var stA0 = lcA0.getItemListLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
invoker.setActive__VZ(stA0,0);
var stA0 = lcA0.getItemList__Ljava_util_List_2();
invoker.clear__V(stA0);
var stA0 = lcA0.getRelatedItemList__Ljava_util_List_2();
invoker.clear__V(stA0);
lcA0.setRelatedItemType__VLjava_lang_String_2("PERSON");
lcA0.setInputBoxText__VLjava_lang_String_2("");
lcA0.setAutocompletePlaceholderText__VLjava_lang_String_2("+ enter person name ...");
return;

};
c['defaultInitialData__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getView__Ljava_lang_Object_2 = function() {
  var  lcA0 = this;
var stA0 = invoker.getView__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2(lcA0);
return stA0;

};
c['getView__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2 = function(lcA0, lcA1) {
c.setComponentDefinition__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2(lcA0, lcA1);
return;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent_2Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2 = function(lcA0, lcA1, lcA2) {
c.prepareConfigurationModelFromJSON__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4104;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponentfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponentfillInstOf });
    io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponentfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/relateditem/RelatedItemComponent';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_AbstractComponent;
    var refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView;
    var refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$LoginEventListener;
    var refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$DesignModeListener;
    var refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$ToogleRelatedItemListener;
    var refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$SaveRelatedItemListener;
    var refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$FunctionInvokeListener;
    var refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$GetRelatedItemListListener;
    var refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$RemoveRelatedItemListener;
    var refs_java_lang_UnsupportedOperationException;
    var refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration;
    var refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$1;
    var refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$2;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_io_cloudoffice_platform_cockpit_api_Event;
    var refs_io_cloudoffice_platform_cockpit_api_Components;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_java_util_ArrayList;
    var refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$4;
    var refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$3;
    var refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$6;
    var refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$5;
    var refs_io_cloudoffice_platform_cockpit_api_QueryMetaModel;
    var refs_io_cloudoffice_platform_cockpit_relateditem_Item;
    var refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$8;
    var refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$7;
    var refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$10;
    var refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$9;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent = registerClass(exports,'io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent',io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent);


function io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$9() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$9;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_api_ServerCallback(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$relatedItemId = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$9_val$relatedItemId'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$9_val$relatedItemId']; };
  m = c._val$component = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$9_val$component'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$9_val$component']; };
  m = c._val$instanceId = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$9_val$instanceId'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$9_val$instanceId']; };
    m = CLS.cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$9_val$relatedItemId'] = lcA1;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$9_val$component'] = lcA2;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$9_val$instanceId'] = lcA3;
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
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.relateditem.RelatedItemView');
var lcA2 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](lcA1);
if ((stI0) == 0) { gt = 50; break IF; }
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2'](lcA1);
var lcA3 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA3,"code");
var lcA4 = stA0;
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA4,"200");
if ((stI0) == 0) { gt = 50; break IF; }
c.removeItemFromRelatedList__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2Ljava_lang_String_2.call(lcA0, lcA2, lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$9_val$relatedItemId']);
    }
    X_50: for (;;) { IF: if (gt <= 50) {

var stA0 = lcA2.getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
invoker.setActive__VZ(stA0,0);
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$9_val$component']);
if ((stI0) == 0) { gt = 108; break IF; }
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$9_val$instanceId']);
if ((stI0) == 0) { gt = 108; break IF; }
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA0, "breakuprelation", "receivecomponentdata", lcA1);
var lcA3 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['get__Lio_cloudoffice_platform_cockpit_api_Component_2Ljava_lang_String_2Ljava_lang_String_2'](lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$9_val$component'], lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$9_val$instanceId']);
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA3);
    }
    X_108: for (;;) { IF: if (gt <= 108) {
return;

    }
}}}
};
c['process__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.removeItemFromRelatedList__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2Ljava_lang_String_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcA3 = null;
var stA0 = lcA1.getRelatedItemList__Ljava_util_List_2();
var lcA4 = stA0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA4);
var lcA5 = stA0;
    }
    X_17: for (;;) { IF: if (gt <= 17) {

var stI0 = invoker.hasNext__Z(lcA5);
if ((stI0) == 0) { gt = 76; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA5);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_relateditem_ListItemView']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.relateditem.ListItemView');
var lcA6 = stA0;
var stA0 = lcA6.getItemId__Ljava_lang_String_2();
var lcA7 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](lcA7);
if ((stI0) == 0) { gt = 73; break IF; }
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](lcA2);
if ((stI0) == 0) { gt = 73; break IF; }
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA7,lcA2);
if ((stI0) == 0) { gt = 73; break IF; }
var lcA3 = lcA6;
    }
    X_73: for (;;) { IF: if (gt <= 73) {
{ gt = 0; continue X_17; }
    }
    X_76: for (;;) { IF: if (gt <= 76) {

if ((null) === (lcA3)) { gt = 92; break IF; }
var stA0 = lcA1.getRelatedItemList__Ljava_util_List_2();
var stI0 = invoker.remove__ZLjava_lang_Object_2(stA0,lcA3);
    }
    X_92: for (;;) { IF: if (gt <= 92) {
return;

    }
}}}}}
};
    m.access = 2;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$9fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$9', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$9fillInstOf });
    io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$9fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/relateditem/RelatedItemComponent$9';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_ServerCallback;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_api_Event;
    var refs_io_cloudoffice_platform_cockpit_api_Components;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$9_val$relatedItemId'] = null;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$9_val$component'] = null;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$9_val$instanceId'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$9 = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$9;

vm.io_cloudoffice_platform_cockpit_api_ServerCallback = link('io/cloudoffice/platform/cockpit/api/ServerCallback', function(f) { vm.io_cloudoffice_platform_cockpit_api_ServerCallback =  f; });

function io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$10() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$10;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_api_AsyncRequest(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$itemId = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$10_val$itemId'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$10_val$itemId']; };
  m = c._val$itemType = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$10_val$itemType'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$10_val$itemType']; };
  m = c._val$relatedItemId = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$10_val$relatedItemId'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$10_val$relatedItemId']; };
  m = c._val$relatedItemType = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$10_val$relatedItemType'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$10_val$relatedItemType']; };
    m = CLS.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3, lcA4, lcA5, lcA6) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$10_val$itemId'] = lcA3;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$10_val$itemType'] = lcA4;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$10_val$relatedItemId'] = lcA5;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$10_val$relatedItemType'] = lcA6;
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
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA2,"itemId", lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$10_val$itemId']);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA2,"itemType", lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$10_val$itemType']);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA2,"relatedItemId", lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$10_val$relatedItemId']);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA2,"relatedItemType", lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$10_val$relatedItemType']);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA1,"relatedItemData", lcA2);
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
    function io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$10fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$10', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$10fillInstOf });
    io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$10fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/relateditem/RelatedItemComponent$10';
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
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$10_val$itemId'] = null;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$10_val$itemType'] = null;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$10_val$relatedItemId'] = null;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$10_val$relatedItemType'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$10 = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$10;

vm.java_util_HashMap = link('java/util/HashMap', function(f) { vm.java_util_HashMap =  f; });
vm.io_cloudoffice_platform_cockpit_api_AsyncRequest = link('io/cloudoffice/platform/cockpit/api/AsyncRequest', function(f) { vm.io_cloudoffice_platform_cockpit_api_AsyncRequest =  f; });

function io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$7() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$7;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_api_ServerCallback(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$component = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$7_val$component'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$7_val$component']; };
  m = c._val$instanceId = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$7_val$instanceId'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$7_val$instanceId']; };
    m = CLS.cons__VLjava_lang_String_2Ljava_lang_String_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$7_val$component'] = lcA1;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$7_val$instanceId'] = lcA2;
(refs_io_cloudoffice_platform_cockpit_api_ServerCallback || (refs_io_cloudoffice_platform_cockpit_api_ServerCallback = vm.io_cloudoffice_platform_cockpit_api_ServerCallback(false))).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.process__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['builder__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var lcA2 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](lcA1);
if ((stI0) == 0) { gt = 116; break IF; }
var stA0 = invoker.getRequest__Lio_cloudoffice_platform_cockpit_api_AsyncRequest_2(lcA0);
var stA0 = invoker.getView__Ljava_lang_Object_2(stA0);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.relateditem.RelatedItemView');
var lcA3 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2'](lcA1);
var lcA2 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"code");
var lcA4 = stA0;
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA4,"200");
if ((stI0) == 0) { gt = 116; break IF; }
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_Object_2'](lcA3);
if ((stI0) == 0) { gt = 116; break IF; }
var stA0 = new io_cloudoffice_platform_cockpit_relateditem_ListItemView;
(refs_io_cloudoffice_platform_cockpit_relateditem_ListItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_ListItemView = io_cloudoffice_platform_cockpit_relateditem_ListItemView(false))).constructor.cons__V.call(stA0);
var lcA5 = stA0;
var stA0 = lcA5;var stA1 = lcA3.getRelatedItemId__Ljava_lang_String_2();
stA0.setItemId__VLjava_lang_String_2(stA1);
var stA0 = lcA5;var stA1 = lcA3.getRelatedItemName__Ljava_lang_String_2();
stA0.setItemName__VLjava_lang_String_2(stA1);
var stA0 = lcA5;var stA1 = lcA3.getRelatedItemType__Ljava_lang_String_2();
stA0.setItemType__VLjava_lang_String_2(stA1);
var stA0 = lcA5;var stA1 = lcA3.getRelatedItemType__Ljava_lang_String_2();
var stA1 = (refs_io_cloudoffice_platform_cockpit_api_QueryMetaModel || (refs_io_cloudoffice_platform_cockpit_api_QueryMetaModel = vm.io_cloudoffice_platform_cockpit_api_QueryMetaModel(false)))['getItemTypeIconCss__Ljava_lang_String_2Ljava_lang_String_2'](stA1);
stA0.setItemTypeIconCss__VLjava_lang_String_2(stA1);
var stA0 = lcA3.getRelatedItemList__Ljava_util_List_2();
invoker.add__VILjava_lang_Object_2(stA0,0, lcA5);
(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent(false))).hideRelationForm__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2(lcA3);
    }
    X_116: for (;;) { IF: if (gt <= 116) {

var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$7_val$component']);
if ((stI0) == 0) { gt = 169; break IF; }
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$7_val$instanceId']);
if ((stI0) == 0) { gt = 169; break IF; }
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
var stA1 = stA0;var stA2 = "makerelation";var stA3 = "receivecomponentdata";var stA4 = invoker.toJSON__Ljava_lang_String_2(lcA2);
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA1, stA2, stA3, stA4);
var lcA3 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['get__Lio_cloudoffice_platform_cockpit_api_Component_2Ljava_lang_String_2Ljava_lang_String_2'](lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$7_val$component'], lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$7_val$instanceId']);
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA3);
    }
    X_169: for (;;) { IF: if (gt <= 169) {
return;

    }
}}}
};
c['process__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$7fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$7', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$7fillInstOf });
    io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$7fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/relateditem/RelatedItemComponent$7';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_ServerCallback;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_io_cloudoffice_platform_cockpit_relateditem_ListItemView;
    var refs_io_cloudoffice_platform_cockpit_api_QueryMetaModel;
    var refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent;
    var refs_io_cloudoffice_platform_cockpit_api_Event;
    var refs_io_cloudoffice_platform_cockpit_api_Components;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$7_val$component'] = null;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$7_val$instanceId'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$7 = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$7;


function io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$8() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$8;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_api_AsyncRequest(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$builder = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$8_val$builder'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$8_val$builder']; };
    m = CLS.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$8_val$builder'] = lcA3;
(refs_io_cloudoffice_platform_cockpit_api_AsyncRequest || (refs_io_cloudoffice_platform_cockpit_api_AsyncRequest = vm.io_cloudoffice_platform_cockpit_api_AsyncRequest(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_Object_2'].call(lcA0, lcA1, lcA2);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.preparePostData__V = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new vm.java_util_ArrayList;
(refs_java_util_ArrayList || (refs_java_util_ArrayList = vm.java_util_ArrayList(false))).constructor['cons__V'].call(stA0);
var lcA1 = stA0;
var stA0 = new vm.java_util_HashMap;
(refs_java_util_HashMap || (refs_java_util_HashMap = vm.java_util_HashMap(false))).constructor['cons__V'].call(stA0);
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = "itemId";var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$8_val$builder'],"itemId");
var stI2 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA2);
if ((stI2) == 0) { gt = 46; break IF; }
var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$8_val$builder'],"itemId");
{ gt = 48; break IF; }
    }
    X_46: for (;;) { IF: if (gt <= 46) {

var stA2 = "''";    }
    X_48: for (;;) { IF: if (gt <= 48) {
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA2;var stA1 = "itemType";var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$8_val$builder'],"itemType");
var stI2 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA2);
if ((stI2) == 0) { gt = 84; break IF; }
var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$8_val$builder'],"itemType");
{ gt = 86; break IF; }
    }
    X_84: for (;;) { IF: if (gt <= 84) {

var stA2 = "''";    }
    X_86: for (;;) { IF: if (gt <= 86) {
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA2;var stA1 = "itemName";var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$8_val$builder'],"itemName");
var stI2 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA2);
if ((stI2) == 0) { gt = 122; break IF; }
var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$8_val$builder'],"itemName");
{ gt = 124; break IF; }
    }
    X_122: for (;;) { IF: if (gt <= 122) {

var stA2 = "''";    }
    X_124: for (;;) { IF: if (gt <= 124) {
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA2;var stA1 = "relatedItemId";var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$8_val$builder'],"relatedItemId");
var stI2 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA2);
if ((stI2) == 0) { gt = 160; break IF; }
var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$8_val$builder'],"relatedItemId");
{ gt = 162; break IF; }
    }
    X_160: for (;;) { IF: if (gt <= 160) {

var stA2 = "''";    }
    X_162: for (;;) { IF: if (gt <= 162) {
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA2;var stA1 = "relatedItemType";var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$8_val$builder'],"relatedItemType");
var stI2 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA2);
if ((stI2) == 0) { gt = 198; break IF; }
var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$8_val$builder'],"relatedItemType");
{ gt = 200; break IF; }
    }
    X_198: for (;;) { IF: if (gt <= 198) {

var stA2 = "''";    }
    X_200: for (;;) { IF: if (gt <= 200) {
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA2,"searchKey", "''");
var stA0 = lcA2;var stA1 = "description";var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$8_val$builder'],"description");
var stI2 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA2);
if ((stI2) == 0) { gt = 247; break IF; }
var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$8_val$builder'],"description");
{ gt = 249; break IF; }
    }
    X_247: for (;;) { IF: if (gt <= 247) {

var stA2 = "''";    }
    X_249: for (;;) { IF: if (gt <= 249) {
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA2;var stA1 = "companyRelationTypeA";var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$8_val$builder'],"companyRelationTypeA");
var stI2 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA2);
if ((stI2) == 0) { gt = 285; break IF; }
var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$8_val$builder'],"companyRelationTypeA");
{ gt = 287; break IF; }
    }
    X_285: for (;;) { IF: if (gt <= 285) {

var stA2 = "''";    }
    X_287: for (;;) { IF: if (gt <= 287) {
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA2;var stA1 = "companyRelationTypeB";var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$8_val$builder'],"companyRelationTypeB");
var stI2 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA2);
if ((stI2) == 0) { gt = 323; break IF; }
var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$8_val$builder'],"companyRelationTypeB");
{ gt = 325; break IF; }
    }
    X_323: for (;;) { IF: if (gt <= 323) {

var stA2 = "''";    }
    X_325: for (;;) { IF: if (gt <= 325) {
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA2;var stA1 = "personCompanyRelation";var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$8_val$builder'],"personCompanyRelation");
var stI2 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA2);
if ((stI2) == 0) { gt = 361; break IF; }
var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$8_val$builder'],"personCompanyRelation");
{ gt = 363; break IF; }
    }
    X_361: for (;;) { IF: if (gt <= 361) {

var stA2 = "''";    }
    X_363: for (;;) { IF: if (gt <= 363) {
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA2;var stA1 = "personCompanyPhone";var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$8_val$builder'],"personCompanyPhone");
var stI2 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA2);
if ((stI2) == 0) { gt = 399; break IF; }
var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$8_val$builder'],"personCompanyPhone");
{ gt = 401; break IF; }
    }
    X_399: for (;;) { IF: if (gt <= 399) {

var stA2 = "''";    }
    X_401: for (;;) { IF: if (gt <= 401) {
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA2;var stA1 = "personCompanyMobile";var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$8_val$builder'],"personCompanyMobile");
var stI2 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA2);
if ((stI2) == 0) { gt = 437; break IF; }
var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$8_val$builder'],"personCompanyMobile");
{ gt = 439; break IF; }
    }
    X_437: for (;;) { IF: if (gt <= 437) {

var stA2 = "''";    }
    X_439: for (;;) { IF: if (gt <= 439) {
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA2;var stA1 = "personCompanyEmail";var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$8_val$builder'],"personCompanyEmail");
var stI2 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA2);
if ((stI2) == 0) { gt = 475; break IF; }
var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$8_val$builder'],"personCompanyEmail");
{ gt = 477; break IF; }
    }
    X_475: for (;;) { IF: if (gt <= 475) {

var stA2 = "''";    }
    X_477: for (;;) { IF: if (gt <= 477) {
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA2;var stA1 = "function";var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$8_val$builder'],"function");
var stI2 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA2);
if ((stI2) == 0) { gt = 513; break IF; }
var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$8_val$builder'],"function");
{ gt = 515; break IF; }
    }
    X_513: for (;;) { IF: if (gt <= 513) {

var stA2 = "''";    }
    X_515: for (;;) { IF: if (gt <= 515) {
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA2;var stA1 = "personCompanyDepartment";var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$8_val$builder'],"personCompanyDepartment");
var stI2 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA2);
if ((stI2) == 0) { gt = 551; break IF; }
var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$8_val$builder'],"personCompanyDepartment");
{ gt = 553; break IF; }
    }
    X_551: for (;;) { IF: if (gt <= 551) {

var stA2 = "''";    }
    X_553: for (;;) { IF: if (gt <= 553) {
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA2;var stA1 = "engagementEndDate";var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$8_val$builder'],"engagementEndDate");
var stI2 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA2);
if ((stI2) == 0) { gt = 589; break IF; }
var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$8_val$builder'],"engagementEndDate");
{ gt = 591; break IF; }
    }
    X_589: for (;;) { IF: if (gt <= 589) {

var stA2 = "''";    }
    X_591: for (;;) { IF: if (gt <= 591) {
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA2;var stA1 = "projectRelationType";var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$8_val$builder'],"projectRelationType");
var stI2 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA2);
if ((stI2) == 0) { gt = 627; break IF; }
var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$8_val$builder'],"projectRelationType");
{ gt = 629; break IF; }
    }
    X_627: for (;;) { IF: if (gt <= 627) {

var stA2 = "''";    }
    X_629: for (;;) { IF: if (gt <= 629) {
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA2;var stA1 = "isEmployee";var stI2 = invoker.getBoolean__ZLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$8_val$builder'],"isEmployee");
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA2;var stA1 = "businessModelName";var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$8_val$builder'],"businessModelName");
var stI2 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA2);
if ((stI2) == 0) { gt = 686; break IF; }
var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$8_val$builder'],"businessModelName");
{ gt = 688; break IF; }
    }
    X_686: for (;;) { IF: if (gt <= 686) {

var stA2 = "''";    }
    X_688: for (;;) { IF: if (gt <= 688) {
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA2,"selectedCampaignTypeList", lcA1);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA2,"items", lcA1);
var stA0 = lcA0;var stA1 = invoker.getEndpoint__Ljava_lang_String_2(lcA0);
invoker.put__VLjava_lang_String_2Ljava_lang_Object_2(stA0,stA1, lcA2);
return;

    }
}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
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
    function io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$8fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$8', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$8fillInstOf });
    io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$8fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/relateditem/RelatedItemComponent$8';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_AsyncRequest;
    var refs_java_util_ArrayList;
    var refs_java_util_HashMap;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_java_lang_Boolean;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$8_val$builder'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$8 = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$8;

vm.io_cloudoffice_platform_cockpit_api_QueryMetaModel = link('io/cloudoffice/platform/cockpit/api/QueryMetaModel', function(f) { vm.io_cloudoffice_platform_cockpit_api_QueryMetaModel =  f; });

function io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$5() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$5;
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
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.relateditem.RelatedItemView');
var lcA2 = stA0;
var stA0 = lcA2.getItemList__Ljava_util_List_2();
invoker.clear__V(stA0);
var stA0 = lcA2.getItemListLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
invoker.setActive__VZ(stA0,0);
if ((null) === (lcA1)) { gt = 264; break IF; }
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
var stA0 = new io_cloudoffice_platform_cockpit_relateditem_ListItemView;
(refs_io_cloudoffice_platform_cockpit_relateditem_ListItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_ListItemView = io_cloudoffice_platform_cockpit_relateditem_ListItemView(false))).constructor.cons__V.call(stA0);
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
var stA0 = lcA6;var stA1 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA5,"avatar");
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setAvatar__VLjava_lang_String_2(stA1);
var stA0 = lcA6;var stA1 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA5,"itemType");
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
var stA1 = (refs_io_cloudoffice_platform_cockpit_api_QueryMetaModel || (refs_io_cloudoffice_platform_cockpit_api_QueryMetaModel = vm.io_cloudoffice_platform_cockpit_api_QueryMetaModel(false)))['getItemTypeIconCss__Ljava_lang_String_2Ljava_lang_String_2'](stA1);
stA0.setItemTypeIconCss__VLjava_lang_String_2(stA1);
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
    X_264: for (;;) { IF: if (gt <= 264) {
return;

    }
}}}
};
c['process__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$5fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$5', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$5fillInstOf });
    io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$5fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/relateditem/RelatedItemComponent$5';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_ServerCallback;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_relateditem_ListItemView;
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
vm.io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$5 = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$5;


function io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$6() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$6;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_api_AsyncRequest(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$relatedItemType = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$6_val$relatedItemType'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$6_val$relatedItemType']; };
  m = c._val$itemType = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$6_val$itemType'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$6_val$itemType']; };
  m = c._val$itemId = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$6_val$itemId'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$6_val$itemId']; };
  m = c._val$relatedItems = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$6_val$relatedItems'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$6_val$relatedItems']; };
  m = c._val$searchKey = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$6_val$searchKey'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$6_val$searchKey']; };
    m = CLS.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_util_List_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3, lcA4, lcA5, lcA6, lcA7) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$6_val$relatedItemType'] = lcA3;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$6_val$itemType'] = lcA4;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$6_val$itemId'] = lcA5;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$6_val$relatedItems'] = lcA6;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$6_val$searchKey'] = lcA7;
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
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA4,lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$6_val$relatedItemType']);
var stA0 = lcA3;var stA1 = "scopeGroup";var stA2 = (refs_io_cloudoffice_platform_cockpit_api_Session || (refs_io_cloudoffice_platform_cockpit_api_Session = vm.io_cloudoffice_platform_cockpit_api_Session(false)))['getCompany__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(stA2,"itemId");
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$6_val$relatedItemType'],"COLLECTION");
if ((stI0) != 0) { gt = 86; break IF; }
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$6_val$relatedItemType'],"CHANNEL");
if ((stI0) == 0) { gt = 118; break IF; }
    }
    X_86: for (;;) { IF: if (gt <= 86) {

var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$6_val$relatedItemType'],"COLLECTION");
if ((stI0) == 0) { gt = 103; break IF; }
var stA0 = "generic";{ gt = 105; break IF; }
    }
    X_103: for (;;) { IF: if (gt <= 103) {

var stA0 = "message";    }
    X_105: for (;;) { IF: if (gt <= 105) {
var lcA5 = stA0;
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA3,"collectionType", lcA5);
    }
    X_118: for (;;) { IF: if (gt <= 118) {

var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$6_val$itemType'],lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$6_val$relatedItemType']);
if ((stI0) == 0) { gt = 178; break IF; }
var stA0 = new vm.java_util_HashMap;
(refs_java_util_HashMap || (refs_java_util_HashMap = vm.java_util_HashMap(false))).constructor['cons__V'].call(stA0);
var lcA5 = stA0;
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA5,"itemId", lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$6_val$itemId']);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA5,"itemType", lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$6_val$itemType']);
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA2,lcA5);
    }
    X_178: for (;;) { IF: if (gt <= 178) {

var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$6_val$relatedItems']);
var lcA5 = stA0;
    }
    X_189: for (;;) { IF: if (gt <= 189) {

var stI0 = invoker.hasNext__Z(lcA5);
if ((stI0) == 0) { gt = 262; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA5);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_relateditem_ListItemView']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.relateditem.ListItemView');
var lcA6 = stA0;
var stA0 = new vm.java_util_HashMap;
(refs_java_util_HashMap || (refs_java_util_HashMap = vm.java_util_HashMap(false))).constructor['cons__V'].call(stA0);
var lcA7 = stA0;
var stA0 = lcA7;var stA1 = "itemId";var stA2 = lcA6.getItemId__Ljava_lang_String_2();
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA7;var stA1 = "itemType";var stA2 = lcA6.getItemType__Ljava_lang_String_2();
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA2,lcA7);
{ gt = 0; continue X_189; }
    }
    X_262: for (;;) { IF: if (gt <= 262) {

var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA1,"searchKey", lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$6_val$searchKey']);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA1,"fromClause", lcA4);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA1,"attributes", lcA3);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA1,"existingItems", lcA2);
var stA0 = lcA0;var stA1 = invoker.getEndpoint__Ljava_lang_String_2(lcA0);
invoker.put__VLjava_lang_String_2Ljava_lang_Object_2(stA0,stA1, lcA1);
return;

    }
}}}}}}}}
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
    function io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$6fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$6', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$6fillInstOf });
    io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$6fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/relateditem/RelatedItemComponent$6';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_AsyncRequest;
    var refs_java_util_HashMap;
    var refs_java_util_ArrayList;
    var refs_io_cloudoffice_platform_cockpit_api_Session;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$6_val$relatedItemType'] = null;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$6_val$itemType'] = null;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$6_val$itemId'] = null;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$6_val$relatedItems'] = null;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$6_val$searchKey'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$6 = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$6;

vm.io_cloudoffice_platform_cockpit_api_Session = link('io/cloudoffice/platform/cockpit/api/Session', function(f) { vm.io_cloudoffice_platform_cockpit_api_Session =  f; });

function io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$3() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$3;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_api_ServerCallback(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$component = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$3_val$component'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$3_val$component']; };
  m = c._val$instanceId = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$3_val$instanceId'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$3_val$instanceId']; };
    m = CLS.cons__VLjava_lang_String_2Ljava_lang_String_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$3_val$component'] = lcA1;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$3_val$instanceId'] = lcA2;
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
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.relateditem.RelatedItemView');
var lcA2 = stA0;
if ((null) === (lcA1)) { gt = 273; break IF; }
var stA0 = lcA2.getRelatedItemList__Ljava_util_List_2();
invoker.clear__V(stA0);
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Z'](lcA1, 1);
var stA0 = invoker.getArray__Ljava_util_List_2(stA0);
var lcA3 = stA0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA3);
var lcA4 = stA0;
    }
    X_42: for (;;) { IF: if (gt <= 42) {

var stI0 = invoker.hasNext__Z(lcA4);
if ((stI0) == 0) { gt = 273; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA4);
if (stA0 !== null && !stA0['$instOf_java_util_Map']) vm.java_lang_Class(false).castEx(stA0, 'java.util.Map');
var lcA5 = stA0;
var stA0 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA5,"itemId");
var stI0 = invoker.equals__ZLjava_lang_Object_2(stA0,"-10");
if ((stI0) != 0) { gt = 270; break IF; }
var stA0 = new io_cloudoffice_platform_cockpit_relateditem_ListItemView;
(refs_io_cloudoffice_platform_cockpit_relateditem_ListItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_ListItemView = io_cloudoffice_platform_cockpit_relateditem_ListItemView(false))).constructor.cons__V.call(stA0);
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
var stA0 = lcA6;var stA1 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA5,"avatar");
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setAvatar__VLjava_lang_String_2(stA1);
var stA0 = lcA6;var stA1 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA5,"itemType");
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
var stA1 = (refs_io_cloudoffice_platform_cockpit_api_QueryMetaModel || (refs_io_cloudoffice_platform_cockpit_api_QueryMetaModel = vm.io_cloudoffice_platform_cockpit_api_QueryMetaModel(false)))['getItemTypeIconCss__Ljava_lang_String_2Ljava_lang_String_2'](stA1);
stA0.setItemTypeIconCss__VLjava_lang_String_2(stA1);
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
var stA0 = lcA2.getRelatedItemList__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA6);
    }
    X_270: for (;;) { IF: if (gt <= 270) {
{ gt = 0; continue X_42; }
    }
    X_273: for (;;) { IF: if (gt <= 273) {

var stA0 = lcA2.getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
invoker.setActive__VZ(stA0,0);
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$3_val$component']);
if ((stI0) == 0) { gt = 331; break IF; }
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$3_val$instanceId']);
if ((stI0) == 0) { gt = 331; break IF; }
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA0, "relateddataaction", "receivecomponentdata", lcA1);
var lcA3 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['get__Lio_cloudoffice_platform_cockpit_api_Component_2Ljava_lang_String_2Ljava_lang_String_2'](lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$3_val$component'], lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$3_val$instanceId']);
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA3);
    }
    X_331: for (;;) { IF: if (gt <= 331) {
return;

    }
}}}}}
};
c['process__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$3fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$3', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$3fillInstOf });
    io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$3fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/relateditem/RelatedItemComponent$3';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_ServerCallback;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_relateditem_ListItemView;
    var refs_io_cloudoffice_platform_cockpit_api_QueryMetaModel;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_io_cloudoffice_platform_cockpit_api_Event;
    var refs_io_cloudoffice_platform_cockpit_api_Components;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$3_val$component'] = null;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$3_val$instanceId'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$3 = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$3;


function io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$4() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$4;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_api_AsyncRequest(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$relatedItemTypes = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$4_val$relatedItemTypes'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$4_val$relatedItemTypes']; };
  m = c._val$itemId = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$4_val$itemId'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$4_val$itemId']; };
  m = c._val$itemType = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$4_val$itemType'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$4_val$itemType']; };
    m = CLS.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2Ljava_util_List_2Ljava_lang_String_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3, lcA4, lcA5) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$4_val$relatedItemTypes'] = lcA3;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$4_val$itemId'] = lcA4;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$4_val$itemType'] = lcA5;
(refs_io_cloudoffice_platform_cockpit_api_AsyncRequest || (refs_io_cloudoffice_platform_cockpit_api_AsyncRequest = vm.io_cloudoffice_platform_cockpit_api_AsyncRequest(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_Object_2'].call(lcA0, lcA1, lcA2);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.preparePostData__V = function() {
  var  lcA0 = this;
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Query;
(refs_io_cloudoffice_platform_cockpit_api_Query || (refs_io_cloudoffice_platform_cockpit_api_Query = vm.io_cloudoffice_platform_cockpit_api_Query(false))).constructor['cons__V'].call(stA0);
var lcA1 = stA0;
invoker.setPageNumber__VI(lcA1,-1);
var stA0 = invoker.getFromClause__Ljava_util_List_2(lcA1);
var stI0 = invoker.addAll__ZLjava_util_Collection_2(stA0,lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$4_val$relatedItemTypes']);
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_ClauseGroup;
(refs_io_cloudoffice_platform_cockpit_api_ClauseGroup || (refs_io_cloudoffice_platform_cockpit_api_ClauseGroup = vm.io_cloudoffice_platform_cockpit_api_ClauseGroup(false))).constructor['cons__V'].call(stA0);
var lcA2 = stA0;
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Clause;
(refs_io_cloudoffice_platform_cockpit_api_Clause || (refs_io_cloudoffice_platform_cockpit_api_Clause = vm.io_cloudoffice_platform_cockpit_api_Clause(false))).constructor['cons__V'].call(stA0);
var lcA3 = stA0;
var stA0 = invoker.getKey__Ljava_util_List_2(lcA3);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,"relatedItemId");
invoker.setValue__VLjava_lang_String_2(lcA3,lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$4_val$itemId']);
invoker.setLike__VZ(lcA3,0);
invoker.setItemType__VLjava_lang_String_2(lcA3,lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$4_val$itemType']);
invoker.setType__VLjava_lang_String_2(lcA3,"VIRTUAL_RELATED");
var stA0 = lcA3;var stA1 = invoker.name__Ljava_lang_String_2((refs_io_cloudoffice_platform_cockpit_api_ClauseModel$Occur || (refs_io_cloudoffice_platform_cockpit_api_ClauseModel$Occur = vm.io_cloudoffice_platform_cockpit_api_ClauseModel$Occur(false)))['_MUST']());
invoker.setOccur__VLjava_lang_String_2(stA0,stA1);
var stA0 = invoker.getClauses__Ljava_util_List_2(lcA2);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA3);
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Clause;
(refs_io_cloudoffice_platform_cockpit_api_Clause || (refs_io_cloudoffice_platform_cockpit_api_Clause = vm.io_cloudoffice_platform_cockpit_api_Clause(false))).constructor['cons__V'].call(stA0);
var lcA3 = stA0;
var stA0 = invoker.getKey__Ljava_util_List_2(lcA3);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,"relatedItemType");
invoker.setValue__VLjava_lang_String_2(lcA3,lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$4_val$itemType']);
invoker.setItemType__VLjava_lang_String_2(lcA3,lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$4_val$itemType']);
invoker.setType__VLjava_lang_String_2(lcA3,"RELATED");
invoker.setLike__VZ(lcA3,0);
var stA0 = lcA3;var stA1 = invoker.name__Ljava_lang_String_2((refs_io_cloudoffice_platform_cockpit_api_ClauseModel$Occur || (refs_io_cloudoffice_platform_cockpit_api_ClauseModel$Occur = vm.io_cloudoffice_platform_cockpit_api_ClauseModel$Occur(false)))['_MUST']());
invoker.setOccur__VLjava_lang_String_2(stA0,stA1);
var stA0 = invoker.getClauses__Ljava_util_List_2(lcA2);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA3);
var stA0 = invoker.getOrClauseGroups__Ljava_util_List_2(lcA1);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA2);
var stA0 = new vm.java_util_HashMap;
(refs_java_util_HashMap || (refs_java_util_HashMap = vm.java_util_HashMap(false))).constructor['cons__V'].call(stA0);
var lcA4 = stA0;
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA4,"query", lcA1);
var stA0 = lcA0;var stA1 = invoker.getEndpoint__Ljava_lang_String_2(lcA0);
invoker.put__VLjava_lang_String_2Ljava_lang_Object_2(stA0,stA1, lcA4);
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
    function io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$4fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$4', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$4fillInstOf });
    io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$4fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/relateditem/RelatedItemComponent$4';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_AsyncRequest;
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
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$4_val$relatedItemTypes'] = null;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$4_val$itemId'] = null;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$4_val$itemType'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$4 = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$4;

vm.io_cloudoffice_platform_cockpit_api_ClauseModel$Occur = link('io/cloudoffice/platform/cockpit/api/ClauseModel$Occur', function(f) { vm.io_cloudoffice_platform_cockpit_api_ClauseModel$Occur =  f; });
vm.io_cloudoffice_platform_cockpit_api_Clause = link('io/cloudoffice/platform/cockpit/api/Clause', function(f) { vm.io_cloudoffice_platform_cockpit_api_Clause =  f; });
vm.io_cloudoffice_platform_cockpit_api_ClauseGroup = link('io/cloudoffice/platform/cockpit/api/ClauseGroup', function(f) { vm.io_cloudoffice_platform_cockpit_api_ClauseGroup =  f; });
vm.io_cloudoffice_platform_cockpit_api_Query = link('io/cloudoffice/platform/cockpit/api/Query', function(f) { vm.io_cloudoffice_platform_cockpit_api_Query =  f; });
vm.java_util_ArrayList = link('java/util/ArrayList', function(f) { vm.java_util_ArrayList =  f; });
vm.io_cloudoffice_platform_cockpit_api_MapBuilder = link('io/cloudoffice/platform/cockpit/api/MapBuilder', function(f) { vm.io_cloudoffice_platform_cockpit_api_MapBuilder =  f; });
vm.io_cloudoffice_platform_cockpit_api_Components = link('io/cloudoffice/platform/cockpit/api/Components', function(f) { vm.io_cloudoffice_platform_cockpit_api_Components =  f; });
vm.io_cloudoffice_platform_cockpit_api_Event = link('io/cloudoffice/platform/cockpit/api/Event', function(f) { vm.io_cloudoffice_platform_cockpit_api_Event =  f; });
vm.io_cloudoffice_platform_cockpit_api_UtilValidate = link('io/cloudoffice/platform/cockpit/api/UtilValidate', function(f) { vm.io_cloudoffice_platform_cockpit_api_UtilValidate =  f; });

function io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$2() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$2;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$view = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$2_val$view'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$2_val$view']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$2_val$view'] = lcA1;
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
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$2_val$view'].getConfiguration__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_2();
var lcA3 = stA0;
var stA0 = invoker.getJsonObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA2,"configuration");
var lcA4 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_Object_2'](lcA4);
if ((stI0) == 0) { gt = 37; break IF; }
(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent(false))).access$100__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$2_val$view'], lcA2);
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
    function io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$2fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$2', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$2fillInstOf });
    io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$2fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/relateditem/RelatedItemComponent$2';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$2_val$view'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$2 = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$2;

vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration = link('io/cloudoffice/platform/cockpit/api/ComponentConfiguration', function(f) { vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration =  f; });

function io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$RemoveRelatedItemListener() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$RemoveRelatedItemListener;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$RemoveRelatedItemListener_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$RemoveRelatedItemListener_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$RemoveRelatedItemListener_this$0'] = lcA1;
return;

};
CLS['cons__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onReceive__VLio_cloudoffice_platform_cockpit_api_Signal_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getPackets__Ljava_util_List_2(lcA1);
var stA0 = invoker.get__Ljava_lang_Object_2I(stA0,0);
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_Object_2'](stA0);
if ((stI0) == 0) { gt = 43; break IF; }
var stA0 = invoker.getView__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$RemoveRelatedItemListener_this$0']);
var stA1 = invoker.getPackets__Ljava_util_List_2(lcA1);
var stA1 = invoker.get__Ljava_lang_Object_2I(stA1,0);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent(false))).deleteRelatedItem__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2Ljava_lang_String_2(stA0, stA1);
    }
    X_43: for (;;) { IF: if (gt <= 43) {
return;

    }
}}
};
c['onReceive__VLio_cloudoffice_platform_cockpit_api_Signal_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$RemoveRelatedItemListenerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$RemoveRelatedItemListener', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$RemoveRelatedItemListenerfillInstOf });
    io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$RemoveRelatedItemListenerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/relateditem/RelatedItemComponent$RemoveRelatedItemListener';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_EventListener(false).constructor.$class
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$RemoveRelatedItemListener_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$RemoveRelatedItemListener = registerClass(exports,'io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$RemoveRelatedItemListener',io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$RemoveRelatedItemListener);

vm.io_cloudoffice_platform_cockpit_api_EventListener = link('io/cloudoffice/platform/cockpit/api/EventListener', function(f) { vm.io_cloudoffice_platform_cockpit_api_EventListener =  f; });

function io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$GetRelatedItemListListener() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$GetRelatedItemListListener;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$GetRelatedItemListListener_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$GetRelatedItemListListener_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$GetRelatedItemListListener_this$0'] = lcA1;
return;

};
CLS['cons__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onReceive__VLio_cloudoffice_platform_cockpit_api_Signal_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getPackets__Ljava_util_List_2(lcA1);
var stA0 = invoker.get__Ljava_lang_Object_2I(stA0,0);
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_Object_2'](stA0);
if ((stI0) == 0) { gt = 43; break IF; }
var stA0 = invoker.getView__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$GetRelatedItemListListener_this$0']);
var stA1 = invoker.getPackets__Ljava_util_List_2(lcA1);
var stA1 = invoker.get__Ljava_lang_Object_2I(stA1,0);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent(false))).processRelatedItemList__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2Ljava_lang_String_2(stA0, stA1);
    }
    X_43: for (;;) { IF: if (gt <= 43) {
return;

    }
}}
};
c['onReceive__VLio_cloudoffice_platform_cockpit_api_Signal_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$GetRelatedItemListListenerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$GetRelatedItemListListener', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$GetRelatedItemListListenerfillInstOf });
    io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$GetRelatedItemListListenerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/relateditem/RelatedItemComponent$GetRelatedItemListListener';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_EventListener(false).constructor.$class
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$GetRelatedItemListListener_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$GetRelatedItemListListener = registerClass(exports,'io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$GetRelatedItemListListener',io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$GetRelatedItemListListener);


function io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$FunctionInvokeListener() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$FunctionInvokeListener;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$FunctionInvokeListener_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$FunctionInvokeListener_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$FunctionInvokeListener_this$0'] = lcA1;
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
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$FunctionInvokeListener_this$0'];var stA1 = (refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false)))['valueOf__Ljava_lang_String_2Ljava_lang_Object_2'](lcA2);
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
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent_2Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$1_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
c.constructor.cons__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent_2.call(lcA0, lcA1);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$FunctionInvokeListenerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$FunctionInvokeListener', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$FunctionInvokeListenerfillInstOf });
    io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$FunctionInvokeListenerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/relateditem/RelatedItemComponent$FunctionInvokeListener';
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
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$FunctionInvokeListener_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$FunctionInvokeListener = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$FunctionInvokeListener;


function io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$SaveRelatedItemListener() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$SaveRelatedItemListener;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$SaveRelatedItemListener_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$SaveRelatedItemListener_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$SaveRelatedItemListener_this$0'] = lcA1;
return;

};
CLS['cons__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onReceive__VLio_cloudoffice_platform_cockpit_api_Signal_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getPackets__Ljava_util_List_2(lcA1);
var stA0 = invoker.get__Ljava_lang_Object_2I(stA0,0);
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_Object_2'](stA0);
if ((stI0) == 0) { gt = 43; break IF; }
var stA0 = invoker.getView__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$SaveRelatedItemListener_this$0']);
var stA1 = invoker.getPackets__Ljava_util_List_2(lcA1);
var stA1 = invoker.get__Ljava_lang_Object_2I(stA1,0);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent(false))).saveRelatedItem__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2Ljava_lang_String_2(stA0, stA1);
    }
    X_43: for (;;) { IF: if (gt <= 43) {
return;

    }
}}
};
c['onReceive__VLio_cloudoffice_platform_cockpit_api_Signal_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$SaveRelatedItemListenerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$SaveRelatedItemListener', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$SaveRelatedItemListenerfillInstOf });
    io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$SaveRelatedItemListenerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/relateditem/RelatedItemComponent$SaveRelatedItemListener';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_EventListener(false).constructor.$class
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$SaveRelatedItemListener_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$SaveRelatedItemListener = registerClass(exports,'io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$SaveRelatedItemListener',io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$SaveRelatedItemListener);


function io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$ToogleRelatedItemListener() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$ToogleRelatedItemListener;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$ToogleRelatedItemListener_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$ToogleRelatedItemListener_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$ToogleRelatedItemListener_this$0'] = lcA1;
return;

};
CLS['cons__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onReceive__VLio_cloudoffice_platform_cockpit_api_Signal_2 = function(lcA1) {
  var  lcA0 = this;
lcA0.toogleRelatedItem__VLio_cloudoffice_platform_cockpit_api_Signal_2(lcA1);
return;

};
c['onReceive__VLio_cloudoffice_platform_cockpit_api_Signal_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.toogleRelatedItem__VLio_cloudoffice_platform_cockpit_api_Signal_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getPackets__Ljava_util_List_2(lcA1);
var stA0 = invoker.get__Ljava_lang_Object_2I(stA0,0);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_api_MapBuilder']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.api.MapBuilder');
var lcA2 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_Object_2'](lcA2);
if ((stI0) == 0) { gt = 33; break IF; }
invoker.invoke__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$ToogleRelatedItemListener_this$0'],"processRelatedItem", lcA2);
    }
    X_33: for (;;) { IF: if (gt <= 33) {
return;

    }
}}
};
    m.access = 0;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$ToogleRelatedItemListenerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$ToogleRelatedItemListener', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$ToogleRelatedItemListenerfillInstOf });
    io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$ToogleRelatedItemListenerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/relateditem/RelatedItemComponent$ToogleRelatedItemListener';
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
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$ToogleRelatedItemListener_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$ToogleRelatedItemListener = registerClass(exports,'io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$ToogleRelatedItemListener',io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$ToogleRelatedItemListener);


function io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$DesignModeListener() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$DesignModeListener;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$DesignModeListener_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$DesignModeListener_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$DesignModeListener_this$0'] = lcA1;
return;

};
CLS['cons__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent_2'] = m;

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
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$DesignModeListener_this$0'];var stA1 = (refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false)))['valueOf__Ljava_lang_String_2Ljava_lang_Object_2'](lcA2);
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
    function io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$DesignModeListenerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$DesignModeListener', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$DesignModeListenerfillInstOf });
    io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$DesignModeListenerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/relateditem/RelatedItemComponent$DesignModeListener';
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
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$DesignModeListener_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$DesignModeListener = registerClass(exports,'io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$DesignModeListener',io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$DesignModeListener);


function io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$LoginEventListener() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$LoginEventListener;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$LoginEventListener_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$LoginEventListener_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$LoginEventListener_this$0'] = lcA1;
return;

};
CLS['cons__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent_2'] = m;

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
Array.at(stA0, 0, "relateditem");
(refs_io_cloudoffice_platform_cockpit_js_VIEW || (refs_io_cloudoffice_platform_cockpit_js_VIEW = vm.io_cloudoffice_platform_cockpit_js_VIEW(false)))['render__V_3Ljava_lang_String_2'](stA0);
var stA0 = invoker.getInstanceId__Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$LoginEventListener_this$0']);
var lcA2 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['configFetchEndpoint__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2']("relateditem", lcA2);
var stA2 = null;var stA3 = new io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$LoginEventListener$1;
(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$LoginEventListener$1 || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$LoginEventListener$1 = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$LoginEventListener$1(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$LoginEventListener_2.call(stA3, lcA0);
invoker.fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

};
    m.access = 0;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$LoginEventListenerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$LoginEventListener', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$LoginEventListenerfillInstOf });
    io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$LoginEventListenerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/relateditem/RelatedItemComponent$LoginEventListener';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_EventListener(false).constructor.$class
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_js_VIEW;
    var refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration;
    var refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$LoginEventListener$1;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$LoginEventListener_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$LoginEventListener = registerClass(exports,'io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$LoginEventListener',io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$LoginEventListener);


function io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$LoginEventListener$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$LoginEventListener$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$1 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$LoginEventListener$1_this$1'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$LoginEventListener$1_this$1']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$LoginEventListener_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$LoginEventListener$1_this$1'] = lcA1;
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2'](lcA1);
var lcA2 = stA0;
var stA0 = new io_cloudoffice_platform_cockpit_relateditem_RelatedItemView;
(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView = io_cloudoffice_platform_cockpit_relateditem_RelatedItemView(false))).constructor.cons__V.call(stA0);
var lcA3 = stA0;
var stA0 = lcA3;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"instance");
stA0.setInstance__VLjava_lang_String_2(stA1);
(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent(false))).access$200__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent_2Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$LoginEventListener$1_this$1']['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$LoginEventListener_this$0'], lcA3, lcA2);
(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent(false))).defaultInitialData__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2(lcA3);
invoker.setView__VLjava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$LoginEventListener$1_this$1']['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$LoginEventListener_this$0'],lcA3);
var stA0 = invoker.getDefaultViewName__Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$LoginEventListener$1_this$1']['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$LoginEventListener_this$0']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['toRaw__Ljava_lang_Object_2Ljava_lang_Object_2'](lcA3);
(refs_io_cloudoffice_platform_cockpit_js_VIEW || (refs_io_cloudoffice_platform_cockpit_js_VIEW = vm.io_cloudoffice_platform_cockpit_js_VIEW(false)))['bind__VLjava_lang_String_2Ljava_lang_Object_2'](stA0, stA1);
return;

};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$LoginEventListener$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$LoginEventListener$1', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$LoginEventListener$1fillInstOf });
    io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$LoginEventListener$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/relateditem/RelatedItemComponent$LoginEventListener$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65568;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView;
    var refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent;
    var refs_net_java_html_json_Models;
    var refs_io_cloudoffice_platform_cockpit_js_VIEW;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$LoginEventListener$1_this$1'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$LoginEventListener$1 = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$LoginEventListener$1;

vm.net_java_html_json_Models = link('net/java/html/json/Models', function(f) { vm.net_java_html_json_Models =  f; });
vm.io_cloudoffice_platform_cockpit_js_VIEW = link('io/cloudoffice/platform/cockpit/js/VIEW', function(f) { vm.io_cloudoffice_platform_cockpit_js_VIEW =  f; });

function io_cloudoffice_platform_cockpit_relateditem_RelatedItemView() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_relateditem_RelatedItemView;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto']; };
  m = c._prop_instance = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_instance'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_instance']; };
  m = c._prop_designerMode = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_designerMode'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_designerMode']; };
  m = c._prop_configuration = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_configuration'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_configuration']; };
  m = c._prop_searchBoxComponentDefinition = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_searchBoxComponentDefinition'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_searchBoxComponentDefinition']; };
  m = c._prop_selectedItemId = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_selectedItemId'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_selectedItemId']; };
  m = c._prop_selectedItemName = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_selectedItemName'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_selectedItemName']; };
  m = c._prop_selectedItemType = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_selectedItemType'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_selectedItemType']; };
  m = c._prop_relatedItemId = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_relatedItemId'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_relatedItemId']; };
  m = c._prop_relatedItemName = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_relatedItemName'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_relatedItemName']; };
  m = c._prop_relatedItemType = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_relatedItemType'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_relatedItemType']; };
  m = c._prop_relatedItemTypeIcon = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_relatedItemTypeIcon'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_relatedItemTypeIcon']; };
  m = c._prop_businessModelName = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_businessModelName'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_businessModelName']; };
  m = c._prop_autocompletePlaceholderText = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_autocompletePlaceholderText'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_autocompletePlaceholderText']; };
  m = c._prop_visible = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_visible'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_visible']; };
  m = c._prop_showRelatedItemList = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_showRelatedItemList'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_showRelatedItemList']; };
  m = c._prop_relatedItemList = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_relatedItemList'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_relatedItemList']; };
  m = c._prop_loader = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_loader'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_loader']; };
  m = c._prop_inputBoxText = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_inputBoxText'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_inputBoxText']; };
  m = c._prop_showItemList = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_showItemList'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_showItemList']; };
  m = c._prop_itemList = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_itemList'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_itemList']; };
  m = c._prop_itemListLoader = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_itemListLoader'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_itemListLoader']; };
  m = c._prop_showRelationForm = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_showRelationForm'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_showRelationForm']; };
  m = c._prop_isEmployee = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_isEmployee'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_isEmployee']; };
  m = c._prop_employeeClass = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_employeeClass'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_employeeClass']; };
  m = c._prop_isOrgOrgRelation = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_isOrgOrgRelation'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_isOrgOrgRelation']; };
  m = c._prop_isPersonOrgRelation = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_isPersonOrgRelation'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_isPersonOrgRelation']; };
  m = c._prop_isPersonProjectRelation = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_isPersonProjectRelation'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_isPersonProjectRelation']; };
  m = c._prop_datePickerId = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_datePickerId'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_datePickerId']; };
  m = c._prop_title = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_title'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_title']; };
  m = c._prop_labelText = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_labelText'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_labelText']; };
  m = c._prop_description = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_description'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_description']; };
  m = c._prop_companyRelationTypeA = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_companyRelationTypeA'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_companyRelationTypeA']; };
  m = c._prop_personCompanyPhone = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyPhone'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyPhone']; };
  m = c._prop_personCompanyMobile = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyMobile'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyMobile']; };
  m = c._prop_personCompanyEmail = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyEmail'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyEmail']; };
  m = c._prop_personCompanyFunction = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyFunction'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyFunction']; };
  m = c._prop_personCompanyDepartment = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyDepartment'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyDepartment']; };
  m = c._prop_engagementEndDate = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_engagementEndDate'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_engagementEndDate']; };
  m = c._prop_personCompanyRelation = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyRelation'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyRelation']; };
  m = c._prop_projectRelationType = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_projectRelationType'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_projectRelationType']; };
  m = c._prop_orgOrgRelationList = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_orgOrgRelationList'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_orgOrgRelationList']; };
  m = c._prop_personCompanyRelationList = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyRelationList'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyRelationList']; };
  m = c._prop_projectRelationTypeList = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_projectRelationTypeList'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_projectRelationTypeList']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.getCompanyRelationTypeB__Ljava_lang_String_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0.getCompanyRelationTypeA__Ljava_lang_String_2();
var lcA1 = stA0;
try {
invoker.acquireLock__V(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto']);
var stA0 = (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent(false))).companyRelationTypeB__Ljava_lang_String_2Ljava_lang_String_2(lcA1);
var lcA2 = stA0;
} catch (e) {
var stA0 = e;{ gt = 26; break IF; }
}
invoker.releaseLock__V(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto']);
return lcA2;
    }
    X_26: for (;;) { IF: if (gt <= 26) {
var lcA3 = stA0;
invoker.releaseLock__V(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto']);
{ var stA0 = lcA3; throw lcA3; }

    }
}}
};
c['getCompanyRelationTypeB__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getInstance__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"instance");
return lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_instance'];

};
c['getInstance__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setInstance__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_instance'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_instance'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"instance", lcA2, lcA1);
return;

    }
}}
};
c['setInstance__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isDesignerMode__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"designerMode");
return lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_designerMode'];

};
c['isDesignerMode__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setDesignerMode__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_designerMode']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_designerMode'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'];var stA1 = "designerMode";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setDesignerMode__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getConfiguration__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"configuration");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_configuration']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration;
(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration = io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration(false))).constructor.cons__V.call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_configuration'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_configuration'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_configuration']['$instOf_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_configuration'], 'io.cloudoffice.platform.cockpit.relateditem.RelatedItemConfiguration');
return lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_configuration'];

    }
}}
};
c['getConfiguration__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setConfiguration__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_configuration'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_configuration'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"configuration", lcA2, lcA1);
return;

    }
}}
};
c['setConfiguration__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"searchBoxComponentDefinition");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_searchBoxComponentDefinition']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_ComponentDef;
(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_searchBoxComponentDefinition'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_searchBoxComponentDefinition'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_searchBoxComponentDefinition']['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_searchBoxComponentDefinition'], 'io.cloudoffice.platform.cockpit.api.ComponentDef');
return lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_searchBoxComponentDefinition'];

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

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_searchBoxComponentDefinition'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_searchBoxComponentDefinition'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"searchBoxComponentDefinition", lcA2, lcA1);
return;

    }
}}
};
c['setSearchBoxComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getSelectedItemId__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"selectedItemId");
return lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_selectedItemId'];

};
c['getSelectedItemId__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setSelectedItemId__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_selectedItemId'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_selectedItemId'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"selectedItemId", lcA2, lcA1);
return;

    }
}}
};
c['setSelectedItemId__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getSelectedItemName__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"selectedItemName");
return lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_selectedItemName'];

};
c['getSelectedItemName__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setSelectedItemName__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_selectedItemName'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_selectedItemName'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"selectedItemName", lcA2, lcA1);
return;

    }
}}
};
c['setSelectedItemName__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getSelectedItemType__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"selectedItemType");
return lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_selectedItemType'];

};
c['getSelectedItemType__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setSelectedItemType__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_selectedItemType'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_selectedItemType'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"selectedItemType", lcA2, lcA1);
return;

    }
}}
};
c['setSelectedItemType__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getRelatedItemId__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"relatedItemId");
return lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_relatedItemId'];

};
c['getRelatedItemId__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setRelatedItemId__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_relatedItemId'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_relatedItemId'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"relatedItemId", lcA2, lcA1);
return;

    }
}}
};
c['setRelatedItemId__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getRelatedItemName__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"relatedItemName");
return lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_relatedItemName'];

};
c['getRelatedItemName__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setRelatedItemName__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_relatedItemName'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_relatedItemName'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"relatedItemName", lcA2, lcA1);
return;

    }
}}
};
c['setRelatedItemName__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getRelatedItemType__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"relatedItemType");
return lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_relatedItemType'];

};
c['getRelatedItemType__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setRelatedItemType__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_relatedItemType'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_relatedItemType'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"relatedItemType", lcA2, lcA1);
return;

    }
}}
};
c['setRelatedItemType__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getRelatedItemTypeIcon__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"relatedItemTypeIcon");
return lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_relatedItemTypeIcon'];

};
c['getRelatedItemTypeIcon__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setRelatedItemTypeIcon__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_relatedItemTypeIcon'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_relatedItemTypeIcon'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"relatedItemTypeIcon", lcA2, lcA1);
return;

    }
}}
};
c['setRelatedItemTypeIcon__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getBusinessModelName__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"businessModelName");
return lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_businessModelName'];

};
c['getBusinessModelName__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setBusinessModelName__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_businessModelName'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_businessModelName'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"businessModelName", lcA2, lcA1);
return;

    }
}}
};
c['setBusinessModelName__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getAutocompletePlaceholderText__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"autocompletePlaceholderText");
return lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_autocompletePlaceholderText'];

};
c['getAutocompletePlaceholderText__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setAutocompletePlaceholderText__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_autocompletePlaceholderText'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_autocompletePlaceholderText'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"autocompletePlaceholderText", lcA2, lcA1);
return;

    }
}}
};
c['setAutocompletePlaceholderText__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isVisible__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"visible");
return lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_visible'];

};
c['isVisible__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setVisible__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_visible']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_visible'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'];var stA1 = "visible";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setVisible__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isShowRelatedItemList__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"showRelatedItemList");
return lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_showRelatedItemList'];

};
c['isShowRelatedItemList__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setShowRelatedItemList__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_showRelatedItemList']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_showRelatedItemList'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'];var stA1 = "showRelatedItemList";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setShowRelatedItemList__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getRelatedItemList__Ljava_util_List_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"relatedItemList");
return lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_relatedItemList'];

};
c['getRelatedItemList__Ljava_util_List_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"loader");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_loader']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_HelperItemView;
(refs_io_cloudoffice_platform_cockpit_api_HelperItemView || (refs_io_cloudoffice_platform_cockpit_api_HelperItemView = vm.io_cloudoffice_platform_cockpit_api_HelperItemView(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_loader'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_loader'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_loader']['$instOf_io_cloudoffice_platform_cockpit_api_HelperItemView']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_loader'], 'io.cloudoffice.platform.cockpit.api.HelperItemView');
return lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_loader'];

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

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_loader'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_loader'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"loader", lcA2, lcA1);
return;

    }
}}
};
c['setLoader__VLio_cloudoffice_platform_cockpit_api_HelperItemView_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getInputBoxText__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"inputBoxText");
return lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_inputBoxText'];

};
c['getInputBoxText__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setInputBoxText__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_inputBoxText'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_inputBoxText'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"inputBoxText", lcA2, lcA1);
var lcA3 = lcA0;
(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent(false))).itemSearchAutocomplete__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2(lcA3);
return;

    }
}}
};
c['setInputBoxText__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isShowItemList__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"showItemList");
return lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_showItemList'];

};
c['isShowItemList__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setShowItemList__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_showItemList']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_showItemList'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'];var stA1 = "showItemList";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
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
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"itemList");
return lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_itemList'];

};
c['getItemList__Ljava_util_List_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getItemListLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"itemListLoader");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_itemListLoader']) !== (c._TYPE())) { gt = 41; break IF; }
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_HelperItemView;
(refs_io_cloudoffice_platform_cockpit_api_HelperItemView || (refs_io_cloudoffice_platform_cockpit_api_HelperItemView = vm.io_cloudoffice_platform_cockpit_api_HelperItemView(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_itemListLoader'] = stA1;
    }
    X_41: for (;;) { IF: if (gt <= 41) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_itemListLoader'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_itemListLoader']['$instOf_io_cloudoffice_platform_cockpit_api_HelperItemView']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_itemListLoader'], 'io.cloudoffice.platform.cockpit.api.HelperItemView');
return lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_itemListLoader'];

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

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_itemListLoader'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_itemListLoader'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"itemListLoader", lcA2, lcA1);
return;

    }
}}
};
c['setItemListLoader__VLio_cloudoffice_platform_cockpit_api_HelperItemView_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isShowRelationForm__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"showRelationForm");
return lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_showRelationForm'];

};
c['isShowRelationForm__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setShowRelationForm__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_showRelationForm']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_showRelationForm'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'];var stA1 = "showRelationForm";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setShowRelationForm__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isIsEmployee__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"isEmployee");
return lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_isEmployee'];

};
c['isIsEmployee__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setIsEmployee__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_isEmployee']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_isEmployee'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'];var stA1 = "isEmployee";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setIsEmployee__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getEmployeeClass__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"employeeClass");
return lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_employeeClass'];

};
c['getEmployeeClass__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setEmployeeClass__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_employeeClass'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_employeeClass'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"employeeClass", lcA2, lcA1);
return;

    }
}}
};
c['setEmployeeClass__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isIsOrgOrgRelation__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"isOrgOrgRelation");
return lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_isOrgOrgRelation'];

};
c['isIsOrgOrgRelation__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setIsOrgOrgRelation__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_isOrgOrgRelation']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_isOrgOrgRelation'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'];var stA1 = "isOrgOrgRelation";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setIsOrgOrgRelation__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isIsPersonOrgRelation__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"isPersonOrgRelation");
return lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_isPersonOrgRelation'];

};
c['isIsPersonOrgRelation__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setIsPersonOrgRelation__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_isPersonOrgRelation']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_isPersonOrgRelation'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'];var stA1 = "isPersonOrgRelation";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setIsPersonOrgRelation__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isIsPersonProjectRelation__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"isPersonProjectRelation");
return lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_isPersonProjectRelation'];

};
c['isIsPersonProjectRelation__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setIsPersonProjectRelation__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_isPersonProjectRelation']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_isPersonProjectRelation'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'];var stA1 = "isPersonProjectRelation";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setIsPersonProjectRelation__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getDatePickerId__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"datePickerId");
return lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_datePickerId'];

};
c['getDatePickerId__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setDatePickerId__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_datePickerId'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_datePickerId'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"datePickerId", lcA2, lcA1);
return;

    }
}}
};
c['setDatePickerId__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getTitle__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"title");
return lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_title'];

};
c['getTitle__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setTitle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_title'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_title'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"title", lcA2, lcA1);
return;

    }
}}
};
c['setTitle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getLabelText__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"labelText");
return lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_labelText'];

};
c['getLabelText__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setLabelText__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_labelText'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_labelText'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"labelText", lcA2, lcA1);
return;

    }
}}
};
c['setLabelText__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getDescription__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"description");
return lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_description'];

};
c['getDescription__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setDescription__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_description'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_description'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"description", lcA2, lcA1);
return;

    }
}}
};
c['setDescription__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getCompanyRelationTypeA__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"companyRelationTypeA");
return lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_companyRelationTypeA'];

};
c['getCompanyRelationTypeA__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setCompanyRelationTypeA__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_companyRelationTypeA'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_companyRelationTypeA'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"companyRelationTypeA", lcA2, lcA1);
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'];var stA1 = "companyRelationTypeB";var stA2 = null;var stA3 = lcA0.getCompanyRelationTypeB__Ljava_lang_String_2();
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setCompanyRelationTypeA__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getPersonCompanyPhone__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"personCompanyPhone");
return lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyPhone'];

};
c['getPersonCompanyPhone__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setPersonCompanyPhone__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyPhone'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyPhone'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"personCompanyPhone", lcA2, lcA1);
return;

    }
}}
};
c['setPersonCompanyPhone__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getPersonCompanyMobile__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"personCompanyMobile");
return lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyMobile'];

};
c['getPersonCompanyMobile__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setPersonCompanyMobile__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyMobile'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyMobile'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"personCompanyMobile", lcA2, lcA1);
return;

    }
}}
};
c['setPersonCompanyMobile__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getPersonCompanyEmail__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"personCompanyEmail");
return lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyEmail'];

};
c['getPersonCompanyEmail__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setPersonCompanyEmail__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyEmail'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyEmail'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"personCompanyEmail", lcA2, lcA1);
return;

    }
}}
};
c['setPersonCompanyEmail__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getPersonCompanyFunction__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"personCompanyFunction");
return lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyFunction'];

};
c['getPersonCompanyFunction__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setPersonCompanyFunction__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyFunction'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyFunction'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"personCompanyFunction", lcA2, lcA1);
return;

    }
}}
};
c['setPersonCompanyFunction__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getPersonCompanyDepartment__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"personCompanyDepartment");
return lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyDepartment'];

};
c['getPersonCompanyDepartment__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setPersonCompanyDepartment__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyDepartment'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyDepartment'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"personCompanyDepartment", lcA2, lcA1);
return;

    }
}}
};
c['setPersonCompanyDepartment__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getEngagementEndDate__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"engagementEndDate");
return lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_engagementEndDate'];

};
c['getEngagementEndDate__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setEngagementEndDate__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_engagementEndDate'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_engagementEndDate'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"engagementEndDate", lcA2, lcA1);
return;

    }
}}
};
c['setEngagementEndDate__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getPersonCompanyRelation__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"personCompanyRelation");
return lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyRelation'];

};
c['getPersonCompanyRelation__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setPersonCompanyRelation__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyRelation'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyRelation'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"personCompanyRelation", lcA2, lcA1);
return;

    }
}}
};
c['setPersonCompanyRelation__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getProjectRelationType__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"projectRelationType");
return lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_projectRelationType'];

};
c['getProjectRelationType__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setProjectRelationType__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_projectRelationType'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_projectRelationType'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"projectRelationType", lcA2, lcA1);
return;

    }
}}
};
c['setProjectRelationType__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getOrgOrgRelationList__Ljava_util_List_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"orgOrgRelationList");
return lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_orgOrgRelationList'];

};
c['getOrgOrgRelationList__Ljava_util_List_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getPersonCompanyRelationList__Ljava_util_List_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"personCompanyRelationList");
return lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyRelationList'];

};
c['getPersonCompanyRelationList__Ljava_util_List_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getProjectRelationTypeList__Ljava_util_List_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],"projectRelationTypeList");
return lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_projectRelationTypeList'];

};
c['getProjectRelationTypeList__Ljava_util_List_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2(c._TYPE(),lcA0, lcA1);
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'] = stA1;
var stA0 = lcA0;var stA1 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'];var stA2 = "relatedItemList";var stI3 = -1;var stA4 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 0);
var stA1 = invoker.createList__Ljava_util_List_2Ljava_lang_String_2I_3Ljava_lang_String_2(stA1,stA2, stI3, stA4);
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_relatedItemList'] = stA1;
var stA0 = lcA0;var stA1 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'];var stA2 = "itemList";var stI3 = -1;var stA4 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 0);
var stA1 = invoker.createList__Ljava_util_List_2Ljava_lang_String_2I_3Ljava_lang_String_2(stA1,stA2, stI3, stA4);
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_itemList'] = stA1;
var stA0 = lcA0;var stA1 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'];var stA2 = "orgOrgRelationList";var stI3 = -1;var stA4 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 0);
var stA1 = invoker.createList__Ljava_util_List_2Ljava_lang_String_2I_3Ljava_lang_String_2(stA1,stA2, stI3, stA4);
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_orgOrgRelationList'] = stA1;
var stA0 = lcA0;var stA1 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'];var stA2 = "personCompanyRelationList";var stI3 = -1;var stA4 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 0);
var stA1 = invoker.createList__Ljava_util_List_2Ljava_lang_String_2I_3Ljava_lang_String_2(stA1,stA2, stI3, stA4);
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyRelationList'] = stA1;
var stA0 = lcA0;var stA1 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'];var stA2 = "projectRelationTypeList";var stI3 = -1;var stA4 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 0);
var stA1 = invoker.createList__Ljava_util_List_2Ljava_lang_String_2I_3Ljava_lang_String_2(stA1,stA2, stI3, stA4);
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_projectRelationTypeList'] = stA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_configuration'] = c._TYPE();
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_searchBoxComponentDefinition'] = c._TYPE();
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_loader'] = c._TYPE();
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_itemListLoader'] = c._TYPE();
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLjava_lang_String_2ZLio_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2ZZLio_cloudoffice_platform_cockpit_api_HelperItemView_2Ljava_lang_String_2ZLio_cloudoffice_platform_cockpit_api_HelperItemView_2ZZLjava_lang_String_2ZZZLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2_3Lio_cloudoffice_platform_cockpit_relateditem_ListItemView_2 = function(lcA1, lcI2, lcA3, lcA4, lcA5, lcA6, lcA7, lcA8, lcA9, lcA10, lcA11, lcA12, lcA13, lcI14, lcI15, lcA16, lcA17, lcI18, lcA19, lcI20, lcI21, lcA22, lcI23, lcI24, lcI25, lcA26, lcA27, lcA28, lcA29, lcA30, lcA31, lcA32, lcA33, lcA34, lcA35, lcA36, lcA37, lcA38, lcA39) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_instance'] = lcA1;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_designerMode'] = lcI2;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_configuration'] = lcA3;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_searchBoxComponentDefinition'] = lcA4;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_selectedItemId'] = lcA5;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_selectedItemName'] = lcA6;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_selectedItemType'] = lcA7;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_relatedItemId'] = lcA8;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_relatedItemName'] = lcA9;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_relatedItemType'] = lcA10;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_relatedItemTypeIcon'] = lcA11;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_businessModelName'] = lcA12;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_autocompletePlaceholderText'] = lcA13;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_visible'] = lcI14;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_showRelatedItemList'] = lcI15;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_loader'] = lcA16;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_inputBoxText'] = lcA17;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_showItemList'] = lcI18;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_itemListLoader'] = lcA19;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_showRelationForm'] = lcI20;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_isEmployee'] = lcI21;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_employeeClass'] = lcA22;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_isOrgOrgRelation'] = lcI23;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_isPersonOrgRelation'] = lcI24;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_isPersonProjectRelation'] = lcI25;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_datePickerId'] = lcA26;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_title'] = lcA27;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_labelText'] = lcA28;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_description'] = lcA29;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_companyRelationTypeA'] = lcA30;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyPhone'] = lcA31;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyMobile'] = lcA32;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyEmail'] = lcA33;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyFunction'] = lcA34;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyDepartment'] = lcA35;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_engagementEndDate'] = lcA36;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyRelation'] = lcA37;
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_projectRelationType'] = lcA38;
invoker.initTo__VLjava_util_Collection_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_relatedItemList'], lcA39);
return;

};
CLS['cons__VLjava_lang_String_2ZLio_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2ZZLio_cloudoffice_platform_cockpit_api_HelperItemView_2Ljava_lang_String_2ZLio_cloudoffice_platform_cockpit_api_HelperItemView_2ZZLjava_lang_String_2ZZZLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2_3Lio_cloudoffice_platform_cockpit_relateditem_ListItemView_2'] = m;

    m.access = 129;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, (43));
var lcA3 = stA0;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, (43));
Array.at(stA2, 0, "instance");
Array.at(stA2, 1, "designerMode");
Array.at(stA2, 2, "configuration");
Array.at(stA2, 3, "searchBoxComponentDefinition");
Array.at(stA2, 4, "selectedItemId");
Array.at(stA2, 5, "selectedItemName");
Array.at(stA2, (6), "selectedItemType");
Array.at(stA2, (7), "relatedItemId");
Array.at(stA2, (8), "relatedItemName");
Array.at(stA2, (9), "relatedItemType");
Array.at(stA2, (10), "relatedItemTypeIcon");
Array.at(stA2, (11), "businessModelName");
Array.at(stA2, (12), "autocompletePlaceholderText");
Array.at(stA2, (13), "visible");
Array.at(stA2, (14), "showRelatedItemList");
Array.at(stA2, (15), "relatedItemList");
Array.at(stA2, (16), "loader");
Array.at(stA2, (17), "inputBoxText");
Array.at(stA2, (18), "showItemList");
Array.at(stA2, (19), "itemList");
Array.at(stA2, (20), "itemListLoader");
Array.at(stA2, (21), "showRelationForm");
Array.at(stA2, (22), "isEmployee");
Array.at(stA2, (23), "employeeClass");
Array.at(stA2, (24), "isOrgOrgRelation");
Array.at(stA2, (25), "isPersonOrgRelation");
Array.at(stA2, (26), "isPersonProjectRelation");
Array.at(stA2, (27), "datePickerId");
Array.at(stA2, (28), "title");
Array.at(stA2, (29), "labelText");
Array.at(stA2, (30), "description");
Array.at(stA2, (31), "companyRelationTypeA");
Array.at(stA2, (32), "personCompanyPhone");
Array.at(stA2, (33), "personCompanyMobile");
Array.at(stA2, (34), "personCompanyEmail");
Array.at(stA2, (35), "personCompanyFunction");
Array.at(stA2, (36), "personCompanyDepartment");
Array.at(stA2, (37), "engagementEndDate");
Array.at(stA2, (38), "personCompanyRelation");
Array.at(stA2, (39), "projectRelationType");
Array.at(stA2, (40), "orgOrgRelationList");
Array.at(stA2, (41), "personCompanyRelationList");
Array.at(stA2, (42), "projectRelationTypeList");
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
if ((lcA3[0] || Array.at(lcA3, 0)) !== null && !(lcA3[0] || Array.at(lcA3, 0))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[0] || Array.at(lcA3, 0)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_instance'] = (lcA3[0] || Array.at(lcA3, 0));
var stA0 = lcA0;if (((lcA3[1] || Array.at(lcA3, 1))) !== null) { gt = 324; break IF; }
var stI1 = 0;{ gt = 336; break IF; }
    }
    X_324: for (;;) { IF: if (gt <= 324) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[1] || Array.at(lcA3, 1)));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_336: for (;;) { IF: if (gt <= 336) {
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_designerMode'] = stI1;
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration = io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration(false))).constructor.$class, (lcA3[2] || Array.at(lcA3, 2)));
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_configuration'] = stA1;
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, (lcA3[3] || Array.at(lcA3, 3)));
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_searchBoxComponentDefinition'] = stA1;
if ((lcA3[4] || Array.at(lcA3, 4)) !== null && !(lcA3[4] || Array.at(lcA3, 4))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[4] || Array.at(lcA3, 4)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_selectedItemId'] = (lcA3[4] || Array.at(lcA3, 4));
if ((lcA3[5] || Array.at(lcA3, 5)) !== null && !(lcA3[5] || Array.at(lcA3, 5))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[5] || Array.at(lcA3, 5)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_selectedItemName'] = (lcA3[5] || Array.at(lcA3, 5));
if ((lcA3[(6)] || Array.at(lcA3, (6))) !== null && !(lcA3[(6)] || Array.at(lcA3, (6)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(6)] || Array.at(lcA3, (6))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_selectedItemType'] = (lcA3[(6)] || Array.at(lcA3, (6)));
if ((lcA3[(7)] || Array.at(lcA3, (7))) !== null && !(lcA3[(7)] || Array.at(lcA3, (7)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(7)] || Array.at(lcA3, (7))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_relatedItemId'] = (lcA3[(7)] || Array.at(lcA3, (7)));
if ((lcA3[(8)] || Array.at(lcA3, (8))) !== null && !(lcA3[(8)] || Array.at(lcA3, (8)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(8)] || Array.at(lcA3, (8))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_relatedItemName'] = (lcA3[(8)] || Array.at(lcA3, (8)));
if ((lcA3[(9)] || Array.at(lcA3, (9))) !== null && !(lcA3[(9)] || Array.at(lcA3, (9)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(9)] || Array.at(lcA3, (9))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_relatedItemType'] = (lcA3[(9)] || Array.at(lcA3, (9)));
if ((lcA3[(10)] || Array.at(lcA3, (10))) !== null && !(lcA3[(10)] || Array.at(lcA3, (10)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(10)] || Array.at(lcA3, (10))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_relatedItemTypeIcon'] = (lcA3[(10)] || Array.at(lcA3, (10)));
if ((lcA3[(11)] || Array.at(lcA3, (11))) !== null && !(lcA3[(11)] || Array.at(lcA3, (11)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(11)] || Array.at(lcA3, (11))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_businessModelName'] = (lcA3[(11)] || Array.at(lcA3, (11)));
if ((lcA3[(12)] || Array.at(lcA3, (12))) !== null && !(lcA3[(12)] || Array.at(lcA3, (12)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(12)] || Array.at(lcA3, (12))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_autocompletePlaceholderText'] = (lcA3[(12)] || Array.at(lcA3, (12)));
var stA0 = lcA0;if (((lcA3[(13)] || Array.at(lcA3, (13)))) !== null) { gt = 480; break IF; }
var stI1 = 0;{ gt = 493; break IF; }
    }
    X_480: for (;;) { IF: if (gt <= 480) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(13)] || Array.at(lcA3, (13))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_493: for (;;) { IF: if (gt <= 493) {
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_visible'] = stI1;
var stA0 = lcA0;if (((lcA3[(14)] || Array.at(lcA3, (14)))) !== null) { gt = 508; break IF; }
var stI1 = 0;{ gt = 521; break IF; }
    }
    X_508: for (;;) { IF: if (gt <= 508) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(14)] || Array.at(lcA3, (14))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_521: for (;;) { IF: if (gt <= 521) {
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_showRelatedItemList'] = stI1;
var stA0 = c.useAsArray___3Ljava_lang_Object_2Ljava_lang_Object_2((lcA3[(15)] || Array.at(lcA3, (15))));
var lcA4 = stA0;
var lcI5 = (lcA4).length;
var lcI6 = 0;
    }
    X_541: for (;;) { IF: if (gt <= 541) {

if ((lcI6) >= (lcI5)) { gt = 583; break IF; }
var lcA7 = (lcA4[lcI6] || Array.at(lcA4, lcI6));
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_relatedItemList'];var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],(refs_io_cloudoffice_platform_cockpit_relateditem_ListItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_ListItemView = io_cloudoffice_platform_cockpit_relateditem_ListItemView(false))).constructor.$class, lcA7);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
lcI6++;
{ gt = 0; continue X_541; }
    }
    X_583: for (;;) { IF: if (gt <= 583) {

var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],(refs_io_cloudoffice_platform_cockpit_api_HelperItemView || (refs_io_cloudoffice_platform_cockpit_api_HelperItemView = vm.io_cloudoffice_platform_cockpit_api_HelperItemView(false))).constructor.$class, (lcA3[(16)] || Array.at(lcA3, (16))));
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_loader'] = stA1;
if ((lcA3[(17)] || Array.at(lcA3, (17))) !== null && !(lcA3[(17)] || Array.at(lcA3, (17)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(17)] || Array.at(lcA3, (17))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_inputBoxText'] = (lcA3[(17)] || Array.at(lcA3, (17)));
var stA0 = lcA0;if (((lcA3[(18)] || Array.at(lcA3, (18)))) !== null) { gt = 623; break IF; }
var stI1 = 0;{ gt = 636; break IF; }
    }
    X_623: for (;;) { IF: if (gt <= 623) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(18)] || Array.at(lcA3, (18))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_636: for (;;) { IF: if (gt <= 636) {
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_showItemList'] = stI1;
var stA0 = c.useAsArray___3Ljava_lang_Object_2Ljava_lang_Object_2((lcA3[(19)] || Array.at(lcA3, (19))));
var lcA4 = stA0;
var lcI5 = (lcA4).length;
var lcI6 = 0;
    }
    X_656: for (;;) { IF: if (gt <= 656) {

if ((lcI6) >= (lcI5)) { gt = 698; break IF; }
var lcA7 = (lcA4[lcI6] || Array.at(lcA4, lcI6));
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_itemList'];var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],(refs_io_cloudoffice_platform_cockpit_relateditem_ListItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_ListItemView = io_cloudoffice_platform_cockpit_relateditem_ListItemView(false))).constructor.$class, lcA7);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
lcI6++;
{ gt = 0; continue X_656; }
    }
    X_698: for (;;) { IF: if (gt <= 698) {

var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],(refs_io_cloudoffice_platform_cockpit_api_HelperItemView || (refs_io_cloudoffice_platform_cockpit_api_HelperItemView = vm.io_cloudoffice_platform_cockpit_api_HelperItemView(false))).constructor.$class, (lcA3[(20)] || Array.at(lcA3, (20))));
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_itemListLoader'] = stA1;
var stA0 = lcA0;if (((lcA3[(21)] || Array.at(lcA3, (21)))) !== null) { gt = 727; break IF; }
var stI1 = 0;{ gt = 740; break IF; }
    }
    X_727: for (;;) { IF: if (gt <= 727) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(21)] || Array.at(lcA3, (21))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_740: for (;;) { IF: if (gt <= 740) {
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_showRelationForm'] = stI1;
var stA0 = lcA0;if (((lcA3[(22)] || Array.at(lcA3, (22)))) !== null) { gt = 755; break IF; }
var stI1 = 0;{ gt = 768; break IF; }
    }
    X_755: for (;;) { IF: if (gt <= 755) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(22)] || Array.at(lcA3, (22))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_768: for (;;) { IF: if (gt <= 768) {
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_isEmployee'] = stI1;
if ((lcA3[(23)] || Array.at(lcA3, (23))) !== null && !(lcA3[(23)] || Array.at(lcA3, (23)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(23)] || Array.at(lcA3, (23))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_employeeClass'] = (lcA3[(23)] || Array.at(lcA3, (23)));
var stA0 = lcA0;if (((lcA3[(24)] || Array.at(lcA3, (24)))) !== null) { gt = 794; break IF; }
var stI1 = 0;{ gt = 807; break IF; }
    }
    X_794: for (;;) { IF: if (gt <= 794) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(24)] || Array.at(lcA3, (24))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_807: for (;;) { IF: if (gt <= 807) {
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_isOrgOrgRelation'] = stI1;
var stA0 = lcA0;if (((lcA3[(25)] || Array.at(lcA3, (25)))) !== null) { gt = 822; break IF; }
var stI1 = 0;{ gt = 835; break IF; }
    }
    X_822: for (;;) { IF: if (gt <= 822) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(25)] || Array.at(lcA3, (25))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_835: for (;;) { IF: if (gt <= 835) {
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_isPersonOrgRelation'] = stI1;
var stA0 = lcA0;if (((lcA3[(26)] || Array.at(lcA3, (26)))) !== null) { gt = 850; break IF; }
var stI1 = 0;{ gt = 863; break IF; }
    }
    X_850: for (;;) { IF: if (gt <= 850) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(26)] || Array.at(lcA3, (26))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_863: for (;;) { IF: if (gt <= 863) {
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_isPersonProjectRelation'] = stI1;
if ((lcA3[(27)] || Array.at(lcA3, (27))) !== null && !(lcA3[(27)] || Array.at(lcA3, (27)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(27)] || Array.at(lcA3, (27))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_datePickerId'] = (lcA3[(27)] || Array.at(lcA3, (27)));
if ((lcA3[(28)] || Array.at(lcA3, (28))) !== null && !(lcA3[(28)] || Array.at(lcA3, (28)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(28)] || Array.at(lcA3, (28))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_title'] = (lcA3[(28)] || Array.at(lcA3, (28)));
if ((lcA3[(29)] || Array.at(lcA3, (29))) !== null && !(lcA3[(29)] || Array.at(lcA3, (29)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(29)] || Array.at(lcA3, (29))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_labelText'] = (lcA3[(29)] || Array.at(lcA3, (29)));
if ((lcA3[(30)] || Array.at(lcA3, (30))) !== null && !(lcA3[(30)] || Array.at(lcA3, (30)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(30)] || Array.at(lcA3, (30))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_description'] = (lcA3[(30)] || Array.at(lcA3, (30)));
if ((lcA3[(31)] || Array.at(lcA3, (31))) !== null && !(lcA3[(31)] || Array.at(lcA3, (31)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(31)] || Array.at(lcA3, (31))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_companyRelationTypeA'] = (lcA3[(31)] || Array.at(lcA3, (31)));
if ((lcA3[(32)] || Array.at(lcA3, (32))) !== null && !(lcA3[(32)] || Array.at(lcA3, (32)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(32)] || Array.at(lcA3, (32))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyPhone'] = (lcA3[(32)] || Array.at(lcA3, (32)));
if ((lcA3[(33)] || Array.at(lcA3, (33))) !== null && !(lcA3[(33)] || Array.at(lcA3, (33)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(33)] || Array.at(lcA3, (33))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyMobile'] = (lcA3[(33)] || Array.at(lcA3, (33)));
if ((lcA3[(34)] || Array.at(lcA3, (34))) !== null && !(lcA3[(34)] || Array.at(lcA3, (34)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(34)] || Array.at(lcA3, (34))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyEmail'] = (lcA3[(34)] || Array.at(lcA3, (34)));
if ((lcA3[(35)] || Array.at(lcA3, (35))) !== null && !(lcA3[(35)] || Array.at(lcA3, (35)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(35)] || Array.at(lcA3, (35))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyFunction'] = (lcA3[(35)] || Array.at(lcA3, (35)));
if ((lcA3[(36)] || Array.at(lcA3, (36))) !== null && !(lcA3[(36)] || Array.at(lcA3, (36)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(36)] || Array.at(lcA3, (36))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyDepartment'] = (lcA3[(36)] || Array.at(lcA3, (36)));
if ((lcA3[(37)] || Array.at(lcA3, (37))) !== null && !(lcA3[(37)] || Array.at(lcA3, (37)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(37)] || Array.at(lcA3, (37))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_engagementEndDate'] = (lcA3[(37)] || Array.at(lcA3, (37)));
if ((lcA3[(38)] || Array.at(lcA3, (38))) !== null && !(lcA3[(38)] || Array.at(lcA3, (38)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(38)] || Array.at(lcA3, (38))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyRelation'] = (lcA3[(38)] || Array.at(lcA3, (38)));
if ((lcA3[(39)] || Array.at(lcA3, (39))) !== null && !(lcA3[(39)] || Array.at(lcA3, (39)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(39)] || Array.at(lcA3, (39))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_projectRelationType'] = (lcA3[(39)] || Array.at(lcA3, (39)));
var stA0 = c.useAsArray___3Ljava_lang_Object_2Ljava_lang_Object_2((lcA3[(40)] || Array.at(lcA3, (40))));
var lcA4 = stA0;
var lcI5 = (lcA4).length;
var lcI6 = 0;
    }
    X_1026: for (;;) { IF: if (gt <= 1026) {

if ((lcI6) >= (lcI5)) { gt = 1068; break IF; }
var lcA7 = (lcA4[lcI6] || Array.at(lcA4, lcI6));
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_orgOrgRelationList'];var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],(refs_io_cloudoffice_platform_cockpit_relateditem_Item || (refs_io_cloudoffice_platform_cockpit_relateditem_Item = io_cloudoffice_platform_cockpit_relateditem_Item(false))).constructor.$class, lcA7);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
lcI6++;
{ gt = 0; continue X_1026; }
    }
    X_1068: for (;;) { IF: if (gt <= 1068) {

var stA0 = c.useAsArray___3Ljava_lang_Object_2Ljava_lang_Object_2((lcA3[(41)] || Array.at(lcA3, (41))));
var lcA4 = stA0;
var lcI5 = (lcA4).length;
var lcI6 = 0;
    }
    X_1085: for (;;) { IF: if (gt <= 1085) {

if ((lcI6) >= (lcI5)) { gt = 1127; break IF; }
var lcA7 = (lcA4[lcI6] || Array.at(lcA4, lcI6));
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyRelationList'];var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],(refs_io_cloudoffice_platform_cockpit_relateditem_Item || (refs_io_cloudoffice_platform_cockpit_relateditem_Item = io_cloudoffice_platform_cockpit_relateditem_Item(false))).constructor.$class, lcA7);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
lcI6++;
{ gt = 0; continue X_1085; }
    }
    X_1127: for (;;) { IF: if (gt <= 1127) {

var stA0 = c.useAsArray___3Ljava_lang_Object_2Ljava_lang_Object_2((lcA3[(42)] || Array.at(lcA3, (42))));
var lcA4 = stA0;
var lcI5 = (lcA4).length;
var lcI6 = 0;
    }
    X_1144: for (;;) { IF: if (gt <= 1144) {

if ((lcI6) >= (lcI5)) { gt = 1186; break IF; }
var lcA7 = (lcA4[lcI6] || Array.at(lcA4, lcI6));
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_projectRelationTypeList'];var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'],(refs_io_cloudoffice_platform_cockpit_relateditem_Item || (refs_io_cloudoffice_platform_cockpit_relateditem_Item = io_cloudoffice_platform_cockpit_relateditem_Item(false))).constructor.$class, lcA7);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
lcI6++;
{ gt = 0; continue X_1144; }
    }
    X_1186: for (;;) { IF: if (gt <= 1186) {
return;

    }
}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
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
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_configuration']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"searchBoxComponentDefinition");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_searchBoxComponentDefinition']);
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"relatedItemId");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getRelatedItemId__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"relatedItemName");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getRelatedItemName__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"relatedItemType");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getRelatedItemType__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"relatedItemTypeIcon");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getRelatedItemTypeIcon__Ljava_lang_String_2();
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"autocompletePlaceholderText");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getAutocompletePlaceholderText__Ljava_lang_String_2();
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"showRelatedItemList");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isShowRelatedItemList__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"relatedItemList");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_relatedItemList']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"loader");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_loader']);
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
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_itemList']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"itemListLoader");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_itemListLoader']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"showRelationForm");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isShowRelationForm__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"isEmployee");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isIsEmployee__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"employeeClass");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getEmployeeClass__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"isOrgOrgRelation");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isIsOrgOrgRelation__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"isPersonOrgRelation");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isIsPersonOrgRelation__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"isPersonProjectRelation");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isIsPersonProjectRelation__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"datePickerId");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getDatePickerId__Ljava_lang_String_2();
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"labelText");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getLabelText__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"description");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getDescription__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"companyRelationTypeA");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getCompanyRelationTypeA__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"personCompanyPhone");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getPersonCompanyPhone__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"personCompanyMobile");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getPersonCompanyMobile__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"personCompanyEmail");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getPersonCompanyEmail__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"personCompanyFunction");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getPersonCompanyFunction__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"personCompanyDepartment");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getPersonCompanyDepartment__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"engagementEndDate");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getEngagementEndDate__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"personCompanyRelation");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getPersonCompanyRelation__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"projectRelationType");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getProjectRelationType__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"orgOrgRelationList");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_orgOrgRelationList']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"personCompanyRelationList");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyRelationList']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"projectRelationTypeList");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_projectRelationTypeList']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(125));
var stA0 = invoker.toString__Ljava_lang_String_2(lcA1);
return stA0;

};
c['toString__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto']);
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new io_cloudoffice_platform_cockpit_relateditem_RelatedItemView;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = lcA0.getInstance__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_instance'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isDesignerMode__Z();
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_designerMode'] = stI1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_configuration']) !== null) { gt = 37; break IF; }
var stA1 = null;{ gt = 61; break IF; }
    }
    X_37: for (;;) { IF: if (gt <= 37) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_configuration']) !== (c._TYPE())) { gt = 53; break IF; }
var stA1 = c._TYPE();{ gt = 61; break IF; }
    }
    X_53: for (;;) { IF: if (gt <= 53) {

var stA1 = lcA0.getConfiguration__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_61: for (;;) { IF: if (gt <= 61) {
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_configuration'] = stA1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_searchBoxComponentDefinition']) !== null) { gt = 76; break IF; }
var stA1 = null;{ gt = 100; break IF; }
    }
    X_76: for (;;) { IF: if (gt <= 76) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_searchBoxComponentDefinition']) !== (c._TYPE())) { gt = 92; break IF; }
var stA1 = c._TYPE();{ gt = 100; break IF; }
    }
    X_92: for (;;) { IF: if (gt <= 92) {

var stA1 = lcA0.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_100: for (;;) { IF: if (gt <= 100) {
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_searchBoxComponentDefinition'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getSelectedItemId__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_selectedItemId'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getSelectedItemName__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_selectedItemName'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getSelectedItemType__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_selectedItemType'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getRelatedItemId__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_relatedItemId'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getRelatedItemName__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_relatedItemName'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getRelatedItemType__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_relatedItemType'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getRelatedItemTypeIcon__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_relatedItemTypeIcon'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getBusinessModelName__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_businessModelName'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getAutocompletePlaceholderText__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_autocompletePlaceholderText'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isVisible__Z();
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_visible'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isShowRelatedItemList__Z();
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_showRelatedItemList'] = stI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'];var stA1 = lcA2.getRelatedItemList__Ljava_util_List_2();
invoker.cloneList__VLjava_util_Collection_2Lnet_java_html_BrwsrCtx_2Ljava_util_Collection_2(stA0,stA1, lcA1, lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_relatedItemList']);
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_loader']) !== null) { gt = 219; break IF; }
var stA1 = null;{ gt = 243; break IF; }
    }
    X_219: for (;;) { IF: if (gt <= 219) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_loader']) !== (c._TYPE())) { gt = 235; break IF; }
var stA1 = c._TYPE();{ gt = 243; break IF; }
    }
    X_235: for (;;) { IF: if (gt <= 235) {

var stA1 = lcA0.getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_243: for (;;) { IF: if (gt <= 243) {
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_loader'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getInputBoxText__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_inputBoxText'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isShowItemList__Z();
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_showItemList'] = stI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'];var stA1 = lcA2.getItemList__Ljava_util_List_2();
invoker.cloneList__VLjava_util_Collection_2Lnet_java_html_BrwsrCtx_2Ljava_util_Collection_2(stA0,stA1, lcA1, lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_itemList']);
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_itemListLoader']) !== null) { gt = 290; break IF; }
var stA1 = null;{ gt = 314; break IF; }
    }
    X_290: for (;;) { IF: if (gt <= 290) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_itemListLoader']) !== (c._TYPE())) { gt = 306; break IF; }
var stA1 = c._TYPE();{ gt = 314; break IF; }
    }
    X_306: for (;;) { IF: if (gt <= 306) {

var stA1 = lcA0.getItemListLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_314: for (;;) { IF: if (gt <= 314) {
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_itemListLoader'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isShowRelationForm__Z();
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_showRelationForm'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isIsEmployee__Z();
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_isEmployee'] = stI1;
var stA0 = lcA2;var stA1 = lcA0.getEmployeeClass__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_employeeClass'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isIsOrgOrgRelation__Z();
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_isOrgOrgRelation'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isIsPersonOrgRelation__Z();
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_isPersonOrgRelation'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isIsPersonProjectRelation__Z();
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_isPersonProjectRelation'] = stI1;
var stA0 = lcA2;var stA1 = lcA0.getDatePickerId__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_datePickerId'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getTitle__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_title'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getLabelText__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_labelText'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getDescription__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_description'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getCompanyRelationTypeA__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_companyRelationTypeA'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getPersonCompanyPhone__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyPhone'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getPersonCompanyMobile__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyMobile'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getPersonCompanyEmail__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyEmail'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getPersonCompanyFunction__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyFunction'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getPersonCompanyDepartment__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyDepartment'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getEngagementEndDate__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_engagementEndDate'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getPersonCompanyRelation__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyRelation'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getProjectRelationType__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_projectRelationType'] = stA1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'];var stA1 = lcA2.getOrgOrgRelationList__Ljava_util_List_2();
invoker.cloneList__VLjava_util_Collection_2Lnet_java_html_BrwsrCtx_2Ljava_util_Collection_2(stA0,stA1, lcA1, lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_orgOrgRelationList']);
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'];var stA1 = lcA2.getPersonCompanyRelationList__Ljava_util_List_2();
invoker.cloneList__VLjava_util_Collection_2Lnet_java_html_BrwsrCtx_2Ljava_util_Collection_2(stA0,stA1, lcA1, lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyRelationList']);
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'];var stA1 = lcA2.getProjectRelationTypeList__Ljava_util_List_2();
invoker.cloneList__VLjava_util_Collection_2Lnet_java_html_BrwsrCtx_2Ljava_util_Collection_2(stA0,stA1, lcA1, lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_projectRelationTypeList']);
return lcA2;

    }
}}}}}}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2 = function() {
  var  lcA0 = this;
invoker.applyBindings__V(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto']);
return lcA0;

};
c['applyBindings__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2'] = m;

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

var stI0 = lcA1 != null && lcA1['$instOf_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.relateditem.RelatedItemView');
var lcA2 = lcA1;
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_instance'], lcA2['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_instance']);
if ((stI0) != 0) { gt = 40; break IF; }
return 0;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_designerMode']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_designerMode']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 65; break IF; }
return 0;
    }
    X_65: for (;;) { IF: if (gt <= 65) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_configuration']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_configuration']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 92; break IF; }
return 0;
    }
    X_92: for (;;) { IF: if (gt <= 92) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_searchBoxComponentDefinition']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_searchBoxComponentDefinition']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 119; break IF; }
return 0;
    }
    X_119: for (;;) { IF: if (gt <= 119) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_selectedItemId'], lcA2['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_selectedItemId']);
if ((stI0) != 0) { gt = 138; break IF; }
return 0;
    }
    X_138: for (;;) { IF: if (gt <= 138) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_selectedItemName'], lcA2['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_selectedItemName']);
if ((stI0) != 0) { gt = 157; break IF; }
return 0;
    }
    X_157: for (;;) { IF: if (gt <= 157) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_selectedItemType'], lcA2['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_selectedItemType']);
if ((stI0) != 0) { gt = 176; break IF; }
return 0;
    }
    X_176: for (;;) { IF: if (gt <= 176) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_relatedItemId'], lcA2['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_relatedItemId']);
if ((stI0) != 0) { gt = 195; break IF; }
return 0;
    }
    X_195: for (;;) { IF: if (gt <= 195) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_relatedItemName'], lcA2['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_relatedItemName']);
if ((stI0) != 0) { gt = 214; break IF; }
return 0;
    }
    X_214: for (;;) { IF: if (gt <= 214) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_relatedItemType'], lcA2['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_relatedItemType']);
if ((stI0) != 0) { gt = 233; break IF; }
return 0;
    }
    X_233: for (;;) { IF: if (gt <= 233) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_relatedItemTypeIcon'], lcA2['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_relatedItemTypeIcon']);
if ((stI0) != 0) { gt = 252; break IF; }
return 0;
    }
    X_252: for (;;) { IF: if (gt <= 252) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_businessModelName'], lcA2['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_businessModelName']);
if ((stI0) != 0) { gt = 271; break IF; }
return 0;
    }
    X_271: for (;;) { IF: if (gt <= 271) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_autocompletePlaceholderText'], lcA2['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_autocompletePlaceholderText']);
if ((stI0) != 0) { gt = 290; break IF; }
return 0;
    }
    X_290: for (;;) { IF: if (gt <= 290) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_visible']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_visible']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 315; break IF; }
return 0;
    }
    X_315: for (;;) { IF: if (gt <= 315) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_showRelatedItemList']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_showRelatedItemList']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 340; break IF; }
return 0;
    }
    X_340: for (;;) { IF: if (gt <= 340) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_relatedItemList']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_relatedItemList']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 367; break IF; }
return 0;
    }
    X_367: for (;;) { IF: if (gt <= 367) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_loader']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_loader']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 394; break IF; }
return 0;
    }
    X_394: for (;;) { IF: if (gt <= 394) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_inputBoxText'], lcA2['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_inputBoxText']);
if ((stI0) != 0) { gt = 413; break IF; }
return 0;
    }
    X_413: for (;;) { IF: if (gt <= 413) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_showItemList']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_showItemList']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 438; break IF; }
return 0;
    }
    X_438: for (;;) { IF: if (gt <= 438) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_itemList']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_itemList']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 465; break IF; }
return 0;
    }
    X_465: for (;;) { IF: if (gt <= 465) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_itemListLoader']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_itemListLoader']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 492; break IF; }
return 0;
    }
    X_492: for (;;) { IF: if (gt <= 492) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_showRelationForm']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_showRelationForm']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 517; break IF; }
return 0;
    }
    X_517: for (;;) { IF: if (gt <= 517) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_isEmployee']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_isEmployee']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 542; break IF; }
return 0;
    }
    X_542: for (;;) { IF: if (gt <= 542) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_employeeClass'], lcA2['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_employeeClass']);
if ((stI0) != 0) { gt = 561; break IF; }
return 0;
    }
    X_561: for (;;) { IF: if (gt <= 561) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_isOrgOrgRelation']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_isOrgOrgRelation']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 586; break IF; }
return 0;
    }
    X_586: for (;;) { IF: if (gt <= 586) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_isPersonOrgRelation']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_isPersonOrgRelation']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 611; break IF; }
return 0;
    }
    X_611: for (;;) { IF: if (gt <= 611) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_isPersonProjectRelation']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_isPersonProjectRelation']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 636; break IF; }
return 0;
    }
    X_636: for (;;) { IF: if (gt <= 636) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_datePickerId'], lcA2['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_datePickerId']);
if ((stI0) != 0) { gt = 655; break IF; }
return 0;
    }
    X_655: for (;;) { IF: if (gt <= 655) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_title'], lcA2['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_title']);
if ((stI0) != 0) { gt = 674; break IF; }
return 0;
    }
    X_674: for (;;) { IF: if (gt <= 674) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_labelText'], lcA2['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_labelText']);
if ((stI0) != 0) { gt = 693; break IF; }
return 0;
    }
    X_693: for (;;) { IF: if (gt <= 693) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_description'], lcA2['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_description']);
if ((stI0) != 0) { gt = 712; break IF; }
return 0;
    }
    X_712: for (;;) { IF: if (gt <= 712) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_companyRelationTypeA'], lcA2['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_companyRelationTypeA']);
if ((stI0) != 0) { gt = 731; break IF; }
return 0;
    }
    X_731: for (;;) { IF: if (gt <= 731) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyPhone'], lcA2['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyPhone']);
if ((stI0) != 0) { gt = 750; break IF; }
return 0;
    }
    X_750: for (;;) { IF: if (gt <= 750) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyMobile'], lcA2['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyMobile']);
if ((stI0) != 0) { gt = 769; break IF; }
return 0;
    }
    X_769: for (;;) { IF: if (gt <= 769) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyEmail'], lcA2['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyEmail']);
if ((stI0) != 0) { gt = 788; break IF; }
return 0;
    }
    X_788: for (;;) { IF: if (gt <= 788) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyFunction'], lcA2['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyFunction']);
if ((stI0) != 0) { gt = 807; break IF; }
return 0;
    }
    X_807: for (;;) { IF: if (gt <= 807) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyDepartment'], lcA2['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyDepartment']);
if ((stI0) != 0) { gt = 826; break IF; }
return 0;
    }
    X_826: for (;;) { IF: if (gt <= 826) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_engagementEndDate'], lcA2['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_engagementEndDate']);
if ((stI0) != 0) { gt = 845; break IF; }
return 0;
    }
    X_845: for (;;) { IF: if (gt <= 845) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyRelation'], lcA2['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyRelation']);
if ((stI0) != 0) { gt = 864; break IF; }
return 0;
    }
    X_864: for (;;) { IF: if (gt <= 864) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_projectRelationType'], lcA2['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_projectRelationType']);
if ((stI0) != 0) { gt = 883; break IF; }
return 0;
    }
    X_883: for (;;) { IF: if (gt <= 883) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_orgOrgRelationList']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_orgOrgRelationList']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 910; break IF; }
return 0;
    }
    X_910: for (;;) { IF: if (gt <= 910) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyRelationList']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyRelationList']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 937; break IF; }
return 0;
    }
    X_937: for (;;) { IF: if (gt <= 937) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_projectRelationTypeList']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_projectRelationTypeList']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 964; break IF; }
return 0;
    }
    X_964: for (;;) { IF: if (gt <= 964) {

return 1;

    }
}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
};
c['equals__ZLjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.hashCode__I = function() {
  var  lcA0 = this;
var stA0 = invoker.getName__Ljava_lang_String_2(c.constructor.$class);
var stI0 = invoker.hashCode__I(stA0);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_instance'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_designerMode']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_configuration']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_searchBoxComponentDefinition']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_selectedItemId'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_selectedItemName'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_selectedItemType'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_relatedItemId'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_relatedItemName'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_relatedItemType'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_relatedItemTypeIcon'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_businessModelName'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_autocompletePlaceholderText'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_visible']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_showRelatedItemList']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_relatedItemList']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_loader']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_inputBoxText'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_showItemList']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_itemList']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_itemListLoader']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_showRelationForm']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_isEmployee']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_employeeClass'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_isOrgOrgRelation']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_isPersonOrgRelation']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_isPersonProjectRelation']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_datePickerId'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_title'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_labelText'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_description'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_companyRelationTypeA'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyPhone'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyMobile'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyEmail'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyFunction'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyDepartment'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_engagementEndDate'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyRelation'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_projectRelationType'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_orgOrgRelationList']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyRelationList']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_projectRelationTypeList']);
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
var stA0 = lcA0.clone__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView$Html4JavaType_2 = function() {
return c._TYPE();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2 = function(lcA0) {
return lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_relateditem_RelatedItemView$Html4JavaType;
(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView$Html4JavaType || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView$Html4JavaType = io_cloudoffice_platform_cockpit_relateditem_RelatedItemView$Html4JavaType(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_relateditem_RelatedItemViewfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_relateditem_RelatedItemViewfillInstOf });
    io_cloudoffice_platform_cockpit_relateditem_RelatedItemViewfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/relateditem/RelatedItemView';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent;
    var refs_java_lang_Boolean;
    var refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration;
    var refs_net_java_html_json_Models;
    var refs_io_cloudoffice_platform_cockpit_api_ComponentDef;
    var refs_io_cloudoffice_platform_cockpit_api_HelperItemView;
    var refs_net_java_html_BrwsrCtx;
    var refs_io_cloudoffice_platform_cockpit_relateditem_ListItemView;
    var refs_io_cloudoffice_platform_cockpit_relateditem_Item;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_proto'] = null;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_instance'] = null;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_designerMode'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_configuration'] = null;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_searchBoxComponentDefinition'] = null;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_selectedItemId'] = null;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_selectedItemName'] = null;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_selectedItemType'] = null;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_relatedItemId'] = null;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_relatedItemName'] = null;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_relatedItemType'] = null;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_relatedItemTypeIcon'] = null;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_businessModelName'] = null;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_autocompletePlaceholderText'] = null;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_visible'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_showRelatedItemList'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_relatedItemList'] = null;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_loader'] = null;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_inputBoxText'] = null;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_showItemList'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_itemList'] = null;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_itemListLoader'] = null;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_showRelationForm'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_isEmployee'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_employeeClass'] = null;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_isOrgOrgRelation'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_isPersonOrgRelation'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_isPersonProjectRelation'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_datePickerId'] = null;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_title'] = null;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_labelText'] = null;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_description'] = null;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_companyRelationTypeA'] = null;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyPhone'] = null;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyMobile'] = null;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyEmail'] = null;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyFunction'] = null;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyDepartment'] = null;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_engagementEndDate'] = null;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyRelation'] = null;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_projectRelationType'] = null;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_orgOrgRelationList'] = null;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_personCompanyRelationList'] = null;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView_prop_projectRelationTypeList'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_relateditem_RelatedItemView = registerClass(exports,'io_cloudoffice_platform_cockpit_relateditem_RelatedItemView',io_cloudoffice_platform_cockpit_relateditem_RelatedItemView);


function io_cloudoffice_platform_cockpit_relateditem_RelatedItemView$Html4JavaType() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_relateditem_RelatedItemView$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView = io_cloudoffice_platform_cockpit_relateditem_RelatedItemView(false))).constructor.$class, (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent(false))).constructor.$class, (44), (28));
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"companyRelationTypeB", 0, 1, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"instance", 1, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"designerMode", 2, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"configuration", 3, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"searchBoxComponentDefinition", 4, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"selectedItemId", 5, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"selectedItemName", (6), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"selectedItemType", (7), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"relatedItemId", (8), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"relatedItemName", (9), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"relatedItemType", (10), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"relatedItemTypeIcon", (11), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"businessModelName", (12), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"autocompletePlaceholderText", (13), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"visible", (14), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"showRelatedItemList", (15), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"relatedItemList", (16), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"loader", (17), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"inputBoxText", (18), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"showItemList", (19), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemList", (20), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemListLoader", (21), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"showRelationForm", (22), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"isEmployee", (23), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"employeeClass", (24), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"isOrgOrgRelation", (25), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"isPersonOrgRelation", (26), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"isPersonProjectRelation", (27), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"datePickerId", (28), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"title", (29), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"labelText", (30), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"description", (31), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"companyRelationTypeA", (32), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"personCompanyPhone", (33), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"personCompanyMobile", (34), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"personCompanyEmail", (35), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"personCompanyFunction", (36), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"personCompanyDepartment", (37), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"engagementEndDate", (38), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"personCompanyRelation", (39), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"projectRelationType", (40), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"orgOrgRelationList", (41), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"personCompanyRelationList", (42), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"projectRelationTypeList", (43), 0, 0);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"openConfig", 0);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"closeConfigurationPanel", 1);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"save", 2);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"resetConfiguration", 3);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"clearFilter", 4);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"toogleRelateItem", 5);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"closeRelatedItem", (6));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"activate", (7));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"toggleRelatedItemList", (8));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"processRelatedItem", (9));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"processRelatedItemList", (10));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"getItemList", (11));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"selectItem", (12));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"openRelationForm", (13));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"hideRelationForm", (14));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"toggleEmplyee", (15));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"showDatePicker", (16));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"initRelationFormStaticData", (17));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"initOrgOrgRelationStaticData", (18));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"initPersonOrgRelationStaticData", (19));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"initProjectRelationStaticData", (20));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"checkRelationType", (21));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"clearRelationForm", (22));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"addRelatedItem", (23));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"saveRelatedItem", (24));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"deleteRelatedItemFromList", (25));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"deleteRelatedItem", (26));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"defaultInitialData", (27));
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 1:{ gt = 188; break IF; }
  case 2:{ gt = 205; break IF; }
  case 3:{ gt = 225; break IF; }
  case 4:{ gt = 242; break IF; }
  case 5:{ gt = 259; break IF; }
  case 6:{ gt = 276; break IF; }
  case 7:{ gt = 293; break IF; }
  case 8:{ gt = 310; break IF; }
  case 9:{ gt = 327; break IF; }
  case 10:{ gt = 344; break IF; }
  case 11:{ gt = 361; break IF; }
  case 12:{ gt = 378; break IF; }
  case 13:{ gt = 395; break IF; }
  case 14:{ gt = 412; break IF; }
  case 15:{ gt = 432; break IF; }
  case 16:{ gt = 452; break IF; }
  case 17:{ gt = 466; break IF; }
  case 18:{ gt = 484; break IF; }
  case 19:{ gt = 501; break IF; }
  case 20:{ gt = 521; break IF; }
  case 21:{ gt = 535; break IF; }
  case 22:{ gt = 553; break IF; }
  case 23:{ gt = 573; break IF; }
  case 24:{ gt = 593; break IF; }
  case 25:{ gt = 610; break IF; }
  case 26:{ gt = 630; break IF; }
  case 27:{ gt = 650; break IF; }
  case 28:{ gt = 670; break IF; }
  case 29:{ gt = 687; break IF; }
  case 30:{ gt = 704; break IF; }
  case 31:{ gt = 721; break IF; }
  case 32:{ gt = 738; break IF; }
  case 33:{ gt = 755; break IF; }
  case 34:{ gt = 772; break IF; }
  case 35:{ gt = 789; break IF; }
  case 36:{ gt = 806; break IF; }
  case 37:{ gt = 823; break IF; }
  case 38:{ gt = 840; break IF; }
  case 39:{ gt = 857; break IF; }
  case 40:{ gt = 874; break IF; }
  case 41:{ gt = 891; break IF; }
  case 42:{ gt = 906; break IF; }
  case 43:{ gt = 921; break IF; }
  default: { gt = 936; break IF; }
}
    }
    X_188: for (;;) { IF: if (gt <= 188) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView = io_cloudoffice_platform_cockpit_relateditem_RelatedItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setInstance__VLjava_lang_String_2(stA1);
return;
    }
    X_205: for (;;) { IF: if (gt <= 205) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView = io_cloudoffice_platform_cockpit_relateditem_RelatedItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setDesignerMode__VZ(stI1);
return;
    }
    X_225: for (;;) { IF: if (gt <= 225) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView = io_cloudoffice_platform_cockpit_relateditem_RelatedItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration = io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.relateditem.RelatedItemConfiguration');
stA0.setConfiguration__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_2(stA1);
return;
    }
    X_242: for (;;) { IF: if (gt <= 242) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView = io_cloudoffice_platform_cockpit_relateditem_RelatedItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.api.ComponentDef');
stA0.setSearchBoxComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2(stA1);
return;
    }
    X_259: for (;;) { IF: if (gt <= 259) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView = io_cloudoffice_platform_cockpit_relateditem_RelatedItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setSelectedItemId__VLjava_lang_String_2(stA1);
return;
    }
    X_276: for (;;) { IF: if (gt <= 276) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView = io_cloudoffice_platform_cockpit_relateditem_RelatedItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setSelectedItemName__VLjava_lang_String_2(stA1);
return;
    }
    X_293: for (;;) { IF: if (gt <= 293) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView = io_cloudoffice_platform_cockpit_relateditem_RelatedItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setSelectedItemType__VLjava_lang_String_2(stA1);
return;
    }
    X_310: for (;;) { IF: if (gt <= 310) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView = io_cloudoffice_platform_cockpit_relateditem_RelatedItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setRelatedItemId__VLjava_lang_String_2(stA1);
return;
    }
    X_327: for (;;) { IF: if (gt <= 327) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView = io_cloudoffice_platform_cockpit_relateditem_RelatedItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setRelatedItemName__VLjava_lang_String_2(stA1);
return;
    }
    X_344: for (;;) { IF: if (gt <= 344) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView = io_cloudoffice_platform_cockpit_relateditem_RelatedItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setRelatedItemType__VLjava_lang_String_2(stA1);
return;
    }
    X_361: for (;;) { IF: if (gt <= 361) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView = io_cloudoffice_platform_cockpit_relateditem_RelatedItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setRelatedItemTypeIcon__VLjava_lang_String_2(stA1);
return;
    }
    X_378: for (;;) { IF: if (gt <= 378) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView = io_cloudoffice_platform_cockpit_relateditem_RelatedItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setBusinessModelName__VLjava_lang_String_2(stA1);
return;
    }
    X_395: for (;;) { IF: if (gt <= 395) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView = io_cloudoffice_platform_cockpit_relateditem_RelatedItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setAutocompletePlaceholderText__VLjava_lang_String_2(stA1);
return;
    }
    X_412: for (;;) { IF: if (gt <= 412) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView = io_cloudoffice_platform_cockpit_relateditem_RelatedItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setVisible__VZ(stI1);
return;
    }
    X_432: for (;;) { IF: if (gt <= 432) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView = io_cloudoffice_platform_cockpit_relateditem_RelatedItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setShowRelatedItemList__VZ(stI1);
return;
    }
    X_452: for (;;) { IF: if (gt <= 452) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView = io_cloudoffice_platform_cockpit_relateditem_RelatedItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView$Html4JavaType_2();
var stA1 = lcA1.getRelatedItemList__Ljava_util_List_2();
invoker.replaceValue__VLjava_util_Collection_2Ljava_lang_Class_2Ljava_lang_Object_2(stA0,stA1, (refs_io_cloudoffice_platform_cockpit_relateditem_ListItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_ListItemView = io_cloudoffice_platform_cockpit_relateditem_ListItemView(false))).constructor.$class, lcA3);
return;
    }
    X_466: for (;;) { IF: if (gt <= 466) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView = io_cloudoffice_platform_cockpit_relateditem_RelatedItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_api_HelperItemView || (refs_io_cloudoffice_platform_cockpit_api_HelperItemView = vm.io_cloudoffice_platform_cockpit_api_HelperItemView(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_api_HelperItemView']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.api.HelperItemView');
stA0.setLoader__VLio_cloudoffice_platform_cockpit_api_HelperItemView_2(stA1);
return;
    }
    X_484: for (;;) { IF: if (gt <= 484) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView = io_cloudoffice_platform_cockpit_relateditem_RelatedItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setInputBoxText__VLjava_lang_String_2(stA1);
return;
    }
    X_501: for (;;) { IF: if (gt <= 501) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView = io_cloudoffice_platform_cockpit_relateditem_RelatedItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setShowItemList__VZ(stI1);
return;
    }
    X_521: for (;;) { IF: if (gt <= 521) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView = io_cloudoffice_platform_cockpit_relateditem_RelatedItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView$Html4JavaType_2();
var stA1 = lcA1.getItemList__Ljava_util_List_2();
invoker.replaceValue__VLjava_util_Collection_2Ljava_lang_Class_2Ljava_lang_Object_2(stA0,stA1, (refs_io_cloudoffice_platform_cockpit_relateditem_ListItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_ListItemView = io_cloudoffice_platform_cockpit_relateditem_ListItemView(false))).constructor.$class, lcA3);
return;
    }
    X_535: for (;;) { IF: if (gt <= 535) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView = io_cloudoffice_platform_cockpit_relateditem_RelatedItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_api_HelperItemView || (refs_io_cloudoffice_platform_cockpit_api_HelperItemView = vm.io_cloudoffice_platform_cockpit_api_HelperItemView(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_api_HelperItemView']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.api.HelperItemView');
stA0.setItemListLoader__VLio_cloudoffice_platform_cockpit_api_HelperItemView_2(stA1);
return;
    }
    X_553: for (;;) { IF: if (gt <= 553) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView = io_cloudoffice_platform_cockpit_relateditem_RelatedItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setShowRelationForm__VZ(stI1);
return;
    }
    X_573: for (;;) { IF: if (gt <= 573) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView = io_cloudoffice_platform_cockpit_relateditem_RelatedItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setIsEmployee__VZ(stI1);
return;
    }
    X_593: for (;;) { IF: if (gt <= 593) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView = io_cloudoffice_platform_cockpit_relateditem_RelatedItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setEmployeeClass__VLjava_lang_String_2(stA1);
return;
    }
    X_610: for (;;) { IF: if (gt <= 610) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView = io_cloudoffice_platform_cockpit_relateditem_RelatedItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setIsOrgOrgRelation__VZ(stI1);
return;
    }
    X_630: for (;;) { IF: if (gt <= 630) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView = io_cloudoffice_platform_cockpit_relateditem_RelatedItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setIsPersonOrgRelation__VZ(stI1);
return;
    }
    X_650: for (;;) { IF: if (gt <= 650) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView = io_cloudoffice_platform_cockpit_relateditem_RelatedItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setIsPersonProjectRelation__VZ(stI1);
return;
    }
    X_670: for (;;) { IF: if (gt <= 670) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView = io_cloudoffice_platform_cockpit_relateditem_RelatedItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setDatePickerId__VLjava_lang_String_2(stA1);
return;
    }
    X_687: for (;;) { IF: if (gt <= 687) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView = io_cloudoffice_platform_cockpit_relateditem_RelatedItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setTitle__VLjava_lang_String_2(stA1);
return;
    }
    X_704: for (;;) { IF: if (gt <= 704) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView = io_cloudoffice_platform_cockpit_relateditem_RelatedItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setLabelText__VLjava_lang_String_2(stA1);
return;
    }
    X_721: for (;;) { IF: if (gt <= 721) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView = io_cloudoffice_platform_cockpit_relateditem_RelatedItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setDescription__VLjava_lang_String_2(stA1);
return;
    }
    X_738: for (;;) { IF: if (gt <= 738) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView = io_cloudoffice_platform_cockpit_relateditem_RelatedItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setCompanyRelationTypeA__VLjava_lang_String_2(stA1);
return;
    }
    X_755: for (;;) { IF: if (gt <= 755) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView = io_cloudoffice_platform_cockpit_relateditem_RelatedItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setPersonCompanyPhone__VLjava_lang_String_2(stA1);
return;
    }
    X_772: for (;;) { IF: if (gt <= 772) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView = io_cloudoffice_platform_cockpit_relateditem_RelatedItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setPersonCompanyMobile__VLjava_lang_String_2(stA1);
return;
    }
    X_789: for (;;) { IF: if (gt <= 789) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView = io_cloudoffice_platform_cockpit_relateditem_RelatedItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setPersonCompanyEmail__VLjava_lang_String_2(stA1);
return;
    }
    X_806: for (;;) { IF: if (gt <= 806) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView = io_cloudoffice_platform_cockpit_relateditem_RelatedItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setPersonCompanyFunction__VLjava_lang_String_2(stA1);
return;
    }
    X_823: for (;;) { IF: if (gt <= 823) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView = io_cloudoffice_platform_cockpit_relateditem_RelatedItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setPersonCompanyDepartment__VLjava_lang_String_2(stA1);
return;
    }
    X_840: for (;;) { IF: if (gt <= 840) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView = io_cloudoffice_platform_cockpit_relateditem_RelatedItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setEngagementEndDate__VLjava_lang_String_2(stA1);
return;
    }
    X_857: for (;;) { IF: if (gt <= 857) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView = io_cloudoffice_platform_cockpit_relateditem_RelatedItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setPersonCompanyRelation__VLjava_lang_String_2(stA1);
return;
    }
    X_874: for (;;) { IF: if (gt <= 874) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView = io_cloudoffice_platform_cockpit_relateditem_RelatedItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setProjectRelationType__VLjava_lang_String_2(stA1);
return;
    }
    X_891: for (;;) { IF: if (gt <= 891) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView = io_cloudoffice_platform_cockpit_relateditem_RelatedItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView$Html4JavaType_2();
var stA1 = lcA1.getOrgOrgRelationList__Ljava_util_List_2();
invoker.replaceValue__VLjava_util_Collection_2Ljava_lang_Class_2Ljava_lang_Object_2(stA0,stA1, (refs_io_cloudoffice_platform_cockpit_relateditem_Item || (refs_io_cloudoffice_platform_cockpit_relateditem_Item = io_cloudoffice_platform_cockpit_relateditem_Item(false))).constructor.$class, lcA3);
return;
    }
    X_906: for (;;) { IF: if (gt <= 906) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView = io_cloudoffice_platform_cockpit_relateditem_RelatedItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView$Html4JavaType_2();
var stA1 = lcA1.getPersonCompanyRelationList__Ljava_util_List_2();
invoker.replaceValue__VLjava_util_Collection_2Ljava_lang_Class_2Ljava_lang_Object_2(stA0,stA1, (refs_io_cloudoffice_platform_cockpit_relateditem_Item || (refs_io_cloudoffice_platform_cockpit_relateditem_Item = io_cloudoffice_platform_cockpit_relateditem_Item(false))).constructor.$class, lcA3);
return;
    }
    X_921: for (;;) { IF: if (gt <= 921) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView = io_cloudoffice_platform_cockpit_relateditem_RelatedItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView$Html4JavaType_2();
var stA1 = lcA1.getProjectRelationTypeList__Ljava_util_List_2();
invoker.replaceValue__VLjava_util_Collection_2Ljava_lang_Class_2Ljava_lang_Object_2(stA0,stA1, (refs_io_cloudoffice_platform_cockpit_relateditem_Item || (refs_io_cloudoffice_platform_cockpit_relateditem_Item = io_cloudoffice_platform_cockpit_relateditem_Item(false))).constructor.$class, lcA3);
return;
    }
    X_936: for (;;) { IF: if (gt <= 936) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2I = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 192; break IF; }
  case 1:{ gt = 197; break IF; }
  case 2:{ gt = 202; break IF; }
  case 3:{ gt = 210; break IF; }
  case 4:{ gt = 215; break IF; }
  case 5:{ gt = 220; break IF; }
  case 6:{ gt = 225; break IF; }
  case 7:{ gt = 230; break IF; }
  case 8:{ gt = 235; break IF; }
  case 9:{ gt = 240; break IF; }
  case 10:{ gt = 245; break IF; }
  case 11:{ gt = 250; break IF; }
  case 12:{ gt = 255; break IF; }
  case 13:{ gt = 260; break IF; }
  case 14:{ gt = 265; break IF; }
  case 15:{ gt = 273; break IF; }
  case 16:{ gt = 281; break IF; }
  case 17:{ gt = 286; break IF; }
  case 18:{ gt = 291; break IF; }
  case 19:{ gt = 296; break IF; }
  case 20:{ gt = 304; break IF; }
  case 21:{ gt = 309; break IF; }
  case 22:{ gt = 314; break IF; }
  case 23:{ gt = 322; break IF; }
  case 24:{ gt = 330; break IF; }
  case 25:{ gt = 335; break IF; }
  case 26:{ gt = 343; break IF; }
  case 27:{ gt = 351; break IF; }
  case 28:{ gt = 359; break IF; }
  case 29:{ gt = 364; break IF; }
  case 30:{ gt = 369; break IF; }
  case 31:{ gt = 374; break IF; }
  case 32:{ gt = 379; break IF; }
  case 33:{ gt = 384; break IF; }
  case 34:{ gt = 389; break IF; }
  case 35:{ gt = 394; break IF; }
  case 36:{ gt = 399; break IF; }
  case 37:{ gt = 404; break IF; }
  case 38:{ gt = 409; break IF; }
  case 39:{ gt = 414; break IF; }
  case 40:{ gt = 419; break IF; }
  case 41:{ gt = 424; break IF; }
  case 42:{ gt = 429; break IF; }
  case 43:{ gt = 434; break IF; }
  default: { gt = 439; break IF; }
}
    }
    X_192: for (;;) { IF: if (gt <= 192) {

var stA0 = lcA1.getCompanyRelationTypeB__Ljava_lang_String_2();
return stA0;
    }
    X_197: for (;;) { IF: if (gt <= 197) {

var stA0 = lcA1.getInstance__Ljava_lang_String_2();
return stA0;
    }
    X_202: for (;;) { IF: if (gt <= 202) {

var stI0 = lcA1.isDesignerMode__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_210: for (;;) { IF: if (gt <= 210) {

var stA0 = lcA1.getConfiguration__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_2();
return stA0;
    }
    X_215: for (;;) { IF: if (gt <= 215) {

var stA0 = lcA1.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
return stA0;
    }
    X_220: for (;;) { IF: if (gt <= 220) {

var stA0 = lcA1.getSelectedItemId__Ljava_lang_String_2();
return stA0;
    }
    X_225: for (;;) { IF: if (gt <= 225) {

var stA0 = lcA1.getSelectedItemName__Ljava_lang_String_2();
return stA0;
    }
    X_230: for (;;) { IF: if (gt <= 230) {

var stA0 = lcA1.getSelectedItemType__Ljava_lang_String_2();
return stA0;
    }
    X_235: for (;;) { IF: if (gt <= 235) {

var stA0 = lcA1.getRelatedItemId__Ljava_lang_String_2();
return stA0;
    }
    X_240: for (;;) { IF: if (gt <= 240) {

var stA0 = lcA1.getRelatedItemName__Ljava_lang_String_2();
return stA0;
    }
    X_245: for (;;) { IF: if (gt <= 245) {

var stA0 = lcA1.getRelatedItemType__Ljava_lang_String_2();
return stA0;
    }
    X_250: for (;;) { IF: if (gt <= 250) {

var stA0 = lcA1.getRelatedItemTypeIcon__Ljava_lang_String_2();
return stA0;
    }
    X_255: for (;;) { IF: if (gt <= 255) {

var stA0 = lcA1.getBusinessModelName__Ljava_lang_String_2();
return stA0;
    }
    X_260: for (;;) { IF: if (gt <= 260) {

var stA0 = lcA1.getAutocompletePlaceholderText__Ljava_lang_String_2();
return stA0;
    }
    X_265: for (;;) { IF: if (gt <= 265) {

var stI0 = lcA1.isVisible__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_273: for (;;) { IF: if (gt <= 273) {

var stI0 = lcA1.isShowRelatedItemList__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_281: for (;;) { IF: if (gt <= 281) {

var stA0 = lcA1.getRelatedItemList__Ljava_util_List_2();
return stA0;
    }
    X_286: for (;;) { IF: if (gt <= 286) {

var stA0 = lcA1.getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
return stA0;
    }
    X_291: for (;;) { IF: if (gt <= 291) {

var stA0 = lcA1.getInputBoxText__Ljava_lang_String_2();
return stA0;
    }
    X_296: for (;;) { IF: if (gt <= 296) {

var stI0 = lcA1.isShowItemList__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_304: for (;;) { IF: if (gt <= 304) {

var stA0 = lcA1.getItemList__Ljava_util_List_2();
return stA0;
    }
    X_309: for (;;) { IF: if (gt <= 309) {

var stA0 = lcA1.getItemListLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
return stA0;
    }
    X_314: for (;;) { IF: if (gt <= 314) {

var stI0 = lcA1.isShowRelationForm__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_322: for (;;) { IF: if (gt <= 322) {

var stI0 = lcA1.isIsEmployee__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_330: for (;;) { IF: if (gt <= 330) {

var stA0 = lcA1.getEmployeeClass__Ljava_lang_String_2();
return stA0;
    }
    X_335: for (;;) { IF: if (gt <= 335) {

var stI0 = lcA1.isIsOrgOrgRelation__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_343: for (;;) { IF: if (gt <= 343) {

var stI0 = lcA1.isIsPersonOrgRelation__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_351: for (;;) { IF: if (gt <= 351) {

var stI0 = lcA1.isIsPersonProjectRelation__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_359: for (;;) { IF: if (gt <= 359) {

var stA0 = lcA1.getDatePickerId__Ljava_lang_String_2();
return stA0;
    }
    X_364: for (;;) { IF: if (gt <= 364) {

var stA0 = lcA1.getTitle__Ljava_lang_String_2();
return stA0;
    }
    X_369: for (;;) { IF: if (gt <= 369) {

var stA0 = lcA1.getLabelText__Ljava_lang_String_2();
return stA0;
    }
    X_374: for (;;) { IF: if (gt <= 374) {

var stA0 = lcA1.getDescription__Ljava_lang_String_2();
return stA0;
    }
    X_379: for (;;) { IF: if (gt <= 379) {

var stA0 = lcA1.getCompanyRelationTypeA__Ljava_lang_String_2();
return stA0;
    }
    X_384: for (;;) { IF: if (gt <= 384) {

var stA0 = lcA1.getPersonCompanyPhone__Ljava_lang_String_2();
return stA0;
    }
    X_389: for (;;) { IF: if (gt <= 389) {

var stA0 = lcA1.getPersonCompanyMobile__Ljava_lang_String_2();
return stA0;
    }
    X_394: for (;;) { IF: if (gt <= 394) {

var stA0 = lcA1.getPersonCompanyEmail__Ljava_lang_String_2();
return stA0;
    }
    X_399: for (;;) { IF: if (gt <= 399) {

var stA0 = lcA1.getPersonCompanyFunction__Ljava_lang_String_2();
return stA0;
    }
    X_404: for (;;) { IF: if (gt <= 404) {

var stA0 = lcA1.getPersonCompanyDepartment__Ljava_lang_String_2();
return stA0;
    }
    X_409: for (;;) { IF: if (gt <= 409) {

var stA0 = lcA1.getEngagementEndDate__Ljava_lang_String_2();
return stA0;
    }
    X_414: for (;;) { IF: if (gt <= 414) {

var stA0 = lcA1.getPersonCompanyRelation__Ljava_lang_String_2();
return stA0;
    }
    X_419: for (;;) { IF: if (gt <= 419) {

var stA0 = lcA1.getProjectRelationType__Ljava_lang_String_2();
return stA0;
    }
    X_424: for (;;) { IF: if (gt <= 424) {

var stA0 = lcA1.getOrgOrgRelationList__Ljava_util_List_2();
return stA0;
    }
    X_429: for (;;) { IF: if (gt <= 429) {

var stA0 = lcA1.getPersonCompanyRelationList__Ljava_util_List_2();
return stA0;
    }
    X_434: for (;;) { IF: if (gt <= 434) {

var stA0 = lcA1.getProjectRelationTypeList__Ljava_util_List_2();
return stA0;
    }
    X_439: for (;;) { IF: if (gt <= 439) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.call__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
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
  case 8:{ gt = 177; break IF; }
  case 9:{ gt = 182; break IF; }
  case 10:{ gt = 196; break IF; }
  case 11:{ gt = 210; break IF; }
  case 12:{ gt = 215; break IF; }
  case 13:{ gt = 233; break IF; }
  case 14:{ gt = 238; break IF; }
  case 15:{ gt = 243; break IF; }
  case 16:{ gt = 248; break IF; }
  case 17:{ gt = 253; break IF; }
  case 18:{ gt = 258; break IF; }
  case 19:{ gt = 263; break IF; }
  case 20:{ gt = 268; break IF; }
  case 21:{ gt = 273; break IF; }
  case 22:{ gt = 278; break IF; }
  case 23:{ gt = 283; break IF; }
  case 24:{ gt = 288; break IF; }
  case 25:{ gt = 302; break IF; }
  case 26:{ gt = 320; break IF; }
  case 27:{ gt = 334; break IF; }
  default: { gt = 339; break IF; }
}
    }
    X_128: for (;;) { IF: if (gt <= 128) {

(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent(false))).openConfig__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2(lcA1);
return;
    }
    X_133: for (;;) { IF: if (gt <= 133) {

(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent(false))).closeConfigurationPanel__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2(lcA1);
return;
    }
    X_138: for (;;) { IF: if (gt <= 138) {

(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent(false))).save__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2(lcA1);
return;
    }
    X_143: for (;;) { IF: if (gt <= 143) {

(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent(false))).resetConfiguration__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2(lcA1);
return;
    }
    X_148: for (;;) { IF: if (gt <= 148) {

(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent(false))).clearFilter__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2(lcA1);
return;
    }
    X_153: for (;;) { IF: if (gt <= 153) {

(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent(false))).toogleRelateItem__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2(lcA1);
return;
    }
    X_158: for (;;) { IF: if (gt <= 158) {

(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent(false))).closeRelatedItem__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2(lcA1);
return;
    }
    X_163: for (;;) { IF: if (gt <= 163) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView = io_cloudoffice_platform_cockpit_relateditem_RelatedItemView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2(lcA1);
var stA1 = invoker.toString__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_String_2(stA1,lcA3, null);
(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent(false))).activate__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2Ljava_lang_String_2(stA0, stA1);
return;
    }
    X_177: for (;;) { IF: if (gt <= 177) {

(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent(false))).toggleRelatedItemList__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2(lcA1);
return;
    }
    X_182: for (;;) { IF: if (gt <= 182) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView = io_cloudoffice_platform_cockpit_relateditem_RelatedItemView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2(lcA1);
var stA1 = invoker.toString__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_String_2(stA1,lcA3, null);
(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent(false))).processRelatedItem__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2Ljava_lang_String_2(stA0, stA1);
return;
    }
    X_196: for (;;) { IF: if (gt <= 196) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView = io_cloudoffice_platform_cockpit_relateditem_RelatedItemView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2(lcA1);
var stA1 = invoker.toString__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_String_2(stA1,lcA3, null);
(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent(false))).processRelatedItemList__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2Ljava_lang_String_2(stA0, stA1);
return;
    }
    X_210: for (;;) { IF: if (gt <= 210) {

(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent(false))).getItemList__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2(lcA1);
return;
    }
    X_215: for (;;) { IF: if (gt <= 215) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView = io_cloudoffice_platform_cockpit_relateditem_RelatedItemView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2(lcA1);
var stA1 = invoker.toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_relateditem_ListItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_ListItemView = io_cloudoffice_platform_cockpit_relateditem_ListItemView(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_relateditem_ListItemView']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.relateditem.ListItemView');
(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent(false))).selectItem__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2Lio_cloudoffice_platform_cockpit_relateditem_ListItemView_2(stA0, stA1);
return;
    }
    X_233: for (;;) { IF: if (gt <= 233) {

(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent(false))).openRelationForm__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2(lcA1);
return;
    }
    X_238: for (;;) { IF: if (gt <= 238) {

(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent(false))).hideRelationForm__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2(lcA1);
return;
    }
    X_243: for (;;) { IF: if (gt <= 243) {

(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent(false))).toggleEmplyee__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2(lcA1);
return;
    }
    X_248: for (;;) { IF: if (gt <= 248) {

(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent(false))).showDatePicker__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2(lcA1);
return;
    }
    X_253: for (;;) { IF: if (gt <= 253) {

(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent(false))).initRelationFormStaticData__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2(lcA1);
return;
    }
    X_258: for (;;) { IF: if (gt <= 258) {

(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent(false))).initOrgOrgRelationStaticData__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2(lcA1);
return;
    }
    X_263: for (;;) { IF: if (gt <= 263) {

(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent(false))).initPersonOrgRelationStaticData__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2(lcA1);
return;
    }
    X_268: for (;;) { IF: if (gt <= 268) {

(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent(false))).initProjectRelationStaticData__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2(lcA1);
return;
    }
    X_273: for (;;) { IF: if (gt <= 273) {

(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent(false))).checkRelationType__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2(lcA1);
return;
    }
    X_278: for (;;) { IF: if (gt <= 278) {

(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent(false))).clearRelationForm__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2(lcA1);
return;
    }
    X_283: for (;;) { IF: if (gt <= 283) {

(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent(false))).addRelatedItem__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2(lcA1);
return;
    }
    X_288: for (;;) { IF: if (gt <= 288) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView = io_cloudoffice_platform_cockpit_relateditem_RelatedItemView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2(lcA1);
var stA1 = invoker.toString__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_String_2(stA1,lcA3, null);
(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent(false))).saveRelatedItem__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2Ljava_lang_String_2(stA0, stA1);
return;
    }
    X_302: for (;;) { IF: if (gt <= 302) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView = io_cloudoffice_platform_cockpit_relateditem_RelatedItemView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2(lcA1);
var stA1 = invoker.toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_relateditem_ListItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_ListItemView = io_cloudoffice_platform_cockpit_relateditem_ListItemView(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_relateditem_ListItemView']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.relateditem.ListItemView');
(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent(false))).deleteRelatedItemFromList__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2Lio_cloudoffice_platform_cockpit_relateditem_ListItemView_2(stA0, stA1);
return;
    }
    X_320: for (;;) { IF: if (gt <= 320) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView = io_cloudoffice_platform_cockpit_relateditem_RelatedItemView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2(lcA1);
var stA1 = invoker.toString__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_String_2(stA1,lcA3, null);
(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent(false))).deleteRelatedItem__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2Ljava_lang_String_2(stA0, stA1);
return;
    }
    X_334: for (;;) { IF: if (gt <= 334) {

(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent(false))).defaultInitialData__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2(lcA1);
return;
    }
    X_339: for (;;) { IF: if (gt <= 339) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.relateditem.RelatedItemView');
var stA0 = (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView = io_cloudoffice_platform_cockpit_relateditem_RelatedItemView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2I = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0: { gt = 20; break IF; }
  default: { gt = 25; break IF; }
}
    }
    X_20: for (;;) { IF: if (gt <= 20) {

(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent(false))).itemSearchAutocomplete__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2(lcA1);
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
    m = c.onMessage__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
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
    m = c.read__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_relateditem_RelatedItemView;
(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView = io_cloudoffice_platform_cockpit_relateditem_RelatedItemView(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView = io_cloudoffice_platform_cockpit_relateditem_RelatedItemView(false))).access$400__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.relateditem.RelatedItemView');
lcA0.onMessage__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.relateditem.RelatedItemView');
lcA0.onChange__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.relateditem.RelatedItemView');
var stA0 = lcA0.cloneTo__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.relateditem.RelatedItemView');
lcA0.call__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.relateditem.RelatedItemView');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.relateditem.RelatedItemView');
lcA0.setValue__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemView$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_relateditem_RelatedItemView$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_relateditem_RelatedItemView$Html4JavaTypefillInstOf });
    io_cloudoffice_platform_cockpit_relateditem_RelatedItemView$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/relateditem/RelatedItemView$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView;
    var refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent;
    var refs_org_netbeans_html_json_spi_Proto$Type;
    var refs_java_lang_String;
    var refs_java_lang_Boolean;
    var refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration;
    var refs_io_cloudoffice_platform_cockpit_api_ComponentDef;
    var refs_io_cloudoffice_platform_cockpit_relateditem_ListItemView;
    var refs_io_cloudoffice_platform_cockpit_api_HelperItemView;
    var refs_io_cloudoffice_platform_cockpit_relateditem_Item;
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
vm.io_cloudoffice_platform_cockpit_relateditem_RelatedItemView$Html4JavaType = io_cloudoffice_platform_cockpit_relateditem_RelatedItemView$Html4JavaType;

vm.io_cloudoffice_platform_cockpit_api_HelperItemView = link('io/cloudoffice/platform/cockpit/api/HelperItemView', function(f) { vm.io_cloudoffice_platform_cockpit_api_HelperItemView =  f; });
vm.io_cloudoffice_platform_cockpit_api_ComponentDef = link('io/cloudoffice/platform/cockpit/api/ComponentDef', function(f) { vm.io_cloudoffice_platform_cockpit_api_ComponentDef =  f; });

function io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_proto'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_proto']; };
  m = c._prop_searchBoxComponentDefinition = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_prop_searchBoxComponentDefinition'] = v; return this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_prop_searchBoxComponentDefinition']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$RelatedItemManager || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$RelatedItemManager = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$RelatedItemManager(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_proto'],"searchBoxComponentDefinition");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_prop_searchBoxComponentDefinition']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_ComponentDef;
(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_prop_searchBoxComponentDefinition'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_prop_searchBoxComponentDefinition'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_prop_searchBoxComponentDefinition']['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_prop_searchBoxComponentDefinition'], 'io.cloudoffice.platform.cockpit.api.ComponentDef');
return lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_prop_searchBoxComponentDefinition'];

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

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_prop_searchBoxComponentDefinition'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_prop_searchBoxComponentDefinition'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_proto'],"searchBoxComponentDefinition", lcA2, lcA1);
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
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_proto'] = stA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_prop_searchBoxComponentDefinition'] = c._TYPE();
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_prop_searchBoxComponentDefinition'] = lcA1;
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
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 1);
Array.at(stA2, 0, "searchBoxComponentDefinition");
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_proto'],(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, (lcA3[0] || Array.at(lcA3, 0)));
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_prop_searchBoxComponentDefinition'] = stA1;
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
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_prop_searchBoxComponentDefinition']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(125));
var stA0 = invoker.toString__Ljava_lang_String_2(lcA1);
return stA0;

};
c['toString__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_proto']);
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_prop_searchBoxComponentDefinition']) !== null) { gt = 21; break IF; }
var stA1 = null;{ gt = 45; break IF; }
    }
    X_21: for (;;) { IF: if (gt <= 21) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_prop_searchBoxComponentDefinition']) !== (c._TYPE())) { gt = 37; break IF; }
var stA1 = c._TYPE();{ gt = 45; break IF; }
    }
    X_37: for (;;) { IF: if (gt <= 37) {

var stA1 = lcA0.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_45: for (;;) { IF: if (gt <= 45) {
stA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_prop_searchBoxComponentDefinition'] = stA1;
return lcA2;

    }
}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_2 = function() {
  var  lcA0 = this;
invoker.applyBindings__V(lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_proto']);
return lcA0;

};
c['applyBindings__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_2'] = m;

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

var stI0 = lcA1 != null && lcA1['$instOf_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.relateditem.RelatedItemConfiguration');
var lcA2 = lcA1;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_prop_searchBoxComponentDefinition']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_prop_searchBoxComponentDefinition']);
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
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_prop_searchBoxComponentDefinition']);
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
var stA0 = lcA0.clone__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration$Html4JavaType_2 = function() {
return c._TYPE();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_2 = function(lcA0) {
return lcA0['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_2Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration$Html4JavaType;
(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration$Html4JavaType || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration$Html4JavaType = io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration$Html4JavaType(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfigurationfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfigurationfillInstOf });
    io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfigurationfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/relateditem/RelatedItemConfiguration';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$RelatedItemManager;
    var refs_io_cloudoffice_platform_cockpit_api_ComponentDef;
    var refs_net_java_html_json_Models;
    var refs_net_java_html_BrwsrCtx;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_proto'] = null;
    this['fld_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_prop_searchBoxComponentDefinition'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration = registerClass(exports,'io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration',io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration);


function io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration$Html4JavaType() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration = io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration(false))).constructor.$class, (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$RelatedItemManager || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$RelatedItemManager = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$RelatedItemManager(false))).constructor.$class, 1, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"searchBoxComponentDefinition", 0, 0, 0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0: { gt = 20; break IF; }
  default: { gt = 37; break IF; }
}
    }
    X_20: for (;;) { IF: if (gt <= 20) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration = io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration(false))).access$100__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration$Html4JavaType_2();
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
    m = c.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_2I = function(lcA1, lcI2) {
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
    m = c.call__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.relateditem.RelatedItemConfiguration');
var stA0 = (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration = io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
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
    m = c.read__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration;
(refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration = io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_2Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration || (refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration = io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration(false))).access$400__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_2Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.relateditem.RelatedItemConfiguration');
lcA0.onMessage__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.relateditem.RelatedItemConfiguration');
lcA0.onChange__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.relateditem.RelatedItemConfiguration');
var stA0 = lcA0.cloneTo__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_2Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.relateditem.RelatedItemConfiguration');
lcA0.call__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.relateditem.RelatedItemConfiguration');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.relateditem.RelatedItemConfiguration');
lcA0.setValue__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration$Html4JavaTypefillInstOf });
    io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/relateditem/RelatedItemConfiguration$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration;
    var refs_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$RelatedItemManager;
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
vm.io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration$Html4JavaType = io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration$Html4JavaType;


function io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$RelatedItemManager() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$RelatedItemManager;
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
    function io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$RelatedItemManagerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$RelatedItemManager', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$RelatedItemManagerfillInstOf });
    io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$RelatedItemManagerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/relateditem/RelatedItemComponent$RelatedItemManager';
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
vm.io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$RelatedItemManager = registerClass(exports,'io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$RelatedItemManager',io_cloudoffice_platform_cockpit_relateditem_RelatedItemComponent$RelatedItemManager);

vm.io_cloudoffice_platform_cockpit_api_AbstractComponent = link('io/cloudoffice/platform/cockpit/api/AbstractComponent', function(f) { vm.io_cloudoffice_platform_cockpit_api_AbstractComponent =  f; });
vm.io_cloudoffice_platform_cockpit_api_Logger = link('io/cloudoffice/platform/cockpit/api/Logger', function(f) { vm.io_cloudoffice_platform_cockpit_api_Logger =  f; });

function io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration$1fillInstOf });
    io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/relateditem/RelatedItemConfiguration$1';
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
vm.io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration$1 = io_cloudoffice_platform_cockpit_relateditem_RelatedItemConfiguration$1;


function io_cloudoffice_platform_cockpit_relateditem_RelatedItemView$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_relateditem_RelatedItemView$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_relateditem_RelatedItemView$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_relateditem_RelatedItemView$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_relateditem_RelatedItemView$1fillInstOf });
    io_cloudoffice_platform_cockpit_relateditem_RelatedItemView$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/relateditem/RelatedItemView$1';
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
vm.io_cloudoffice_platform_cockpit_relateditem_RelatedItemView$1 = io_cloudoffice_platform_cockpit_relateditem_RelatedItemView$1;

  invoker.registerProperty__VLjava_lang_String_2IZZ = function(target, p1, p2, p3, p4) {
    return target['registerProperty__VLjava_lang_String_2IZZ'](p1,p2,p3,p4);
  };
  invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2 = function(target, p1, p2) {
    return target['extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2'](p1,p2);
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
  invoker.booleanValue__Z = function(target) {
    return target['booleanValue__Z']();
  };
  invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2 = function(target, p1) {
    return target['boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2'](p1);
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
  invoker.toLowerCase__Ljava_lang_String_2 = function(target) {
    return target['toLowerCase__Ljava_lang_String_2']();
  };
  invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2 = function(target, p1, p2) {
    return target['addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2'](p1,p2);
  };
  invoker.add__ZLjava_lang_Object_2 = function(target, p1) {
    return target['add__ZLjava_lang_Object_2'](p1);
  };
  invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_util_List_2 = function(target, p1, p2) {
    return target['addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_util_List_2'](p1,p2);
  };
  invoker.toJSON__Ljava_lang_String_2 = function(target) {
    return target['toJSON__Ljava_lang_String_2']();
  };
  invoker.getList__Ljava_util_List_2Ljava_lang_String_2 = function(target, p1) {
    return target['getList__Ljava_util_List_2Ljava_lang_String_2'](p1);
  };
  invoker.call__VLio_cloudoffice_platform_cockpit_api_ServerCallback_2 = function(target, p1) {
    return target['call__VLio_cloudoffice_platform_cockpit_api_ServerCallback_2'](p1);
  };
  invoker.equalsIgnoreCase__ZLjava_lang_String_2 = function(target, p1) {
    return target['equalsIgnoreCase__ZLjava_lang_String_2'](p1);
  };
  invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Z = function(target, p1, p2) {
    return target['addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Z'](p1,p2);
  };
  invoker.getView__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2 = function(target) {
    return target['getView__Lio_cloudoffice_platform_cockpit_relateditem_RelatedItemView_2']();
  };
  invoker.getRequest__Lio_cloudoffice_platform_cockpit_api_AsyncRequest_2 = function(target) {
    return target['getRequest__Lio_cloudoffice_platform_cockpit_api_AsyncRequest_2']();
  };
  invoker.getView__Ljava_lang_Object_2 = function(target) {
    return target['getView__Ljava_lang_Object_2']();
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
  invoker.add__VILjava_lang_Object_2 = function(target, p1, p2) {
    return target['add__VILjava_lang_Object_2'](p1,p2);
  };
  invoker.getBoolean__ZLjava_lang_String_2 = function(target, p1) {
    return target['getBoolean__ZLjava_lang_String_2'](p1);
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
  invoker.setPageNumber__VI = function(target, p1) {
    return target['setPageNumber__VI'](p1);
  };
  invoker.getFromClause__Ljava_util_List_2 = function(target) {
    return target['getFromClause__Ljava_util_List_2']();
  };
  invoker.addAll__ZLjava_util_Collection_2 = function(target, p1) {
    return target['addAll__ZLjava_util_Collection_2'](p1);
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
  invoker.acquireLock__V = function(target) {
    return target['acquireLock__V']();
  };
  invoker.releaseLock__V = function(target) {
    return target['releaseLock__V']();
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
  exports['registerResource']('META-INF/MANIFEST.MF', 'TWFuaWZlc3QtVmVyc2lvbjogMS4wDQpCbmQtTGFzdE1vZGlmaWVkOiAxNTk3NzY0MDk1ODA3DQpCdWlsZC1KZGs6IDEuOC4wXzEzMQ0KQnVpbHQtQnk6IGV1c2lhDQpCdW5kbGUtTWFuaWZlc3RWZXJzaW9uOiAyDQpCdW5kbGUtTmFtZTogR2FkZ2V0IFJlbGF0ZQ0KQnVuZGxlLVN5bWJvbGljTmFtZTogaW8uY2xvdWRvZmZpY2UucGxhdGZvcm0uY29ja3BpdC5yZWxhdGVkaXRlbQ0KQnVuZGxlLVZlcnNpb246IDEuMS4wDQpDcmVhdGVkLUJ5OiBBcGFjaGUgTWF2ZW4gQnVuZGxlIFBsdWdpbg0KRXhwb3J0LVBhY2thZ2U6IGlvLmNsb3Vkb2ZmaWNlLnBsYXRmb3JtLmNvY2twaXQucmVsYXRlZGl0ZW07dXNlczo9ImlvLmNsDQogb3Vkb2ZmaWNlLnBsYXRmb3JtLmNvY2twaXQuYXBpIjt2ZXJzaW9uPSIxLjEuMCINCkltcG9ydC1QYWNrYWdlOiBpby5jbG91ZG9mZmljZS5wbGF0Zm9ybS5jb2NrcGl0LmFwaTt2ZXJzaW9uPSJbMS4xLDIpIixpbw0KIC5jbG91ZG9mZmljZS5wbGF0Zm9ybS5jb2NrcGl0LmpzO3ZlcnNpb249IlsxLjEsMikiLG5ldC5qYXZhLmh0bWw7dmVyc2lvDQogbj0iWzEuNiwyKSIsbmV0LmphdmEuaHRtbC5qc29uO3ZlcnNpb249IlsxLjYsMikiLG9yZy5qc29uO3ZlcnNpb249IlsyMDENCiA4MDgxMy4wLDIwMTgwODE0KSIsb3JnLm5ldGJlYW5zLmh0bWwuanNvbi5zcGk7dmVyc2lvbj0iWzEuNiwyKSINClRvb2w6IEJuZC0yLjEuMC4yMDEzMDQyNi0xMjIyMTMNCg==');
});