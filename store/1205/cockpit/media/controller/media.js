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

function io_cloudoffice_platform_cockpit_media_FilterView$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_media_FilterView$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_media_FilterView$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_media_FilterView$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_media_FilterView$1fillInstOf });
    io_cloudoffice_platform_cockpit_media_FilterView$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/media/FilterView$1';
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
vm.io_cloudoffice_platform_cockpit_media_FilterView$1 = io_cloudoffice_platform_cockpit_media_FilterView$1;


function io_cloudoffice_platform_cockpit_media_FilterView$Html4JavaType() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_media_FilterView$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_io_cloudoffice_platform_cockpit_media_FilterView || (refs_io_cloudoffice_platform_cockpit_media_FilterView = io_cloudoffice_platform_cockpit_media_FilterView(false))).constructor.$class, (refs_io_cloudoffice_platform_cockpit_media_MediaComponent$FilterModel || (refs_io_cloudoffice_platform_cockpit_media_MediaComponent$FilterModel = io_cloudoffice_platform_cockpit_media_MediaComponent$FilterModel(false))).constructor.$class, 3, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"filterName", 0, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"filterType", 1, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"isSelected", 2, 0, 0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLio_cloudoffice_platform_cockpit_media_FilterView_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 28; break IF; }
  case 1:{ gt = 45; break IF; }
  case 2:{ gt = 62; break IF; }
  default: { gt = 82; break IF; }
}
    }
    X_28: for (;;) { IF: if (gt <= 28) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_media_FilterView || (refs_io_cloudoffice_platform_cockpit_media_FilterView = io_cloudoffice_platform_cockpit_media_FilterView(false))).access$100__Lio_cloudoffice_platform_cockpit_media_FilterView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setFilterName__VLjava_lang_String_2(stA1);
return;
    }
    X_45: for (;;) { IF: if (gt <= 45) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_media_FilterView || (refs_io_cloudoffice_platform_cockpit_media_FilterView = io_cloudoffice_platform_cockpit_media_FilterView(false))).access$100__Lio_cloudoffice_platform_cockpit_media_FilterView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setFilterType__VLjava_lang_String_2(stA1);
return;
    }
    X_62: for (;;) { IF: if (gt <= 62) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_media_FilterView || (refs_io_cloudoffice_platform_cockpit_media_FilterView = io_cloudoffice_platform_cockpit_media_FilterView(false))).access$100__Lio_cloudoffice_platform_cockpit_media_FilterView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setIsSelected__VZ(stI1);
return;
    }
    X_82: for (;;) { IF: if (gt <= 82) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_media_FilterView_2I = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 28; break IF; }
  case 1:{ gt = 33; break IF; }
  case 2:{ gt = 38; break IF; }
  default: { gt = 46; break IF; }
}
    }
    X_28: for (;;) { IF: if (gt <= 28) {

var stA0 = lcA1.getFilterName__Ljava_lang_String_2();
return stA0;
    }
    X_33: for (;;) { IF: if (gt <= 33) {

var stA0 = lcA1.getFilterType__Ljava_lang_String_2();
return stA0;
    }
    X_38: for (;;) { IF: if (gt <= 38) {

var stI0 = lcA1.isIsSelected__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_46: for (;;) { IF: if (gt <= 46) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.call__VLio_cloudoffice_platform_cockpit_media_FilterView_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_media_FilterView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.media.FilterView');
var stA0 = (refs_io_cloudoffice_platform_cockpit_media_FilterView || (refs_io_cloudoffice_platform_cockpit_media_FilterView = io_cloudoffice_platform_cockpit_media_FilterView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_media_FilterView_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLio_cloudoffice_platform_cockpit_media_FilterView_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLio_cloudoffice_platform_cockpit_media_FilterView_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
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
    m = c.read__Lio_cloudoffice_platform_cockpit_media_FilterView_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_media_FilterView;
(refs_io_cloudoffice_platform_cockpit_media_FilterView || (refs_io_cloudoffice_platform_cockpit_media_FilterView = io_cloudoffice_platform_cockpit_media_FilterView(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_media_FilterView$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lio_cloudoffice_platform_cockpit_media_FilterView_2Lio_cloudoffice_platform_cockpit_media_FilterView_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_media_FilterView || (refs_io_cloudoffice_platform_cockpit_media_FilterView = io_cloudoffice_platform_cockpit_media_FilterView(false))).access$400__Lio_cloudoffice_platform_cockpit_media_FilterView_2Lio_cloudoffice_platform_cockpit_media_FilterView_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_media_FilterView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.media.FilterView');
lcA0.onMessage__VLio_cloudoffice_platform_cockpit_media_FilterView_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_media_FilterView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.media.FilterView');
lcA0.onChange__VLio_cloudoffice_platform_cockpit_media_FilterView_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lio_cloudoffice_platform_cockpit_media_FilterView_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_media_FilterView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.media.FilterView');
var stA0 = lcA0.cloneTo__Lio_cloudoffice_platform_cockpit_media_FilterView_2Lio_cloudoffice_platform_cockpit_media_FilterView_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_media_FilterView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.media.FilterView');
lcA0.call__VLio_cloudoffice_platform_cockpit_media_FilterView_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_media_FilterView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.media.FilterView');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_media_FilterView_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_media_FilterView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.media.FilterView');
lcA0.setValue__VLio_cloudoffice_platform_cockpit_media_FilterView_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_media_FilterView$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_media_FilterView$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_media_FilterView$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_media_FilterView$Html4JavaTypefillInstOf });
    io_cloudoffice_platform_cockpit_media_FilterView$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/media/FilterView$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_media_FilterView;
    var refs_io_cloudoffice_platform_cockpit_media_MediaComponent$FilterModel;
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
vm.io_cloudoffice_platform_cockpit_media_FilterView$Html4JavaType = io_cloudoffice_platform_cockpit_media_FilterView$Html4JavaType;

vm.java_lang_StringBuilder = link('java/lang/StringBuilder', function(f) { vm.java_lang_StringBuilder =  f; });
vm.java_lang_UnsupportedOperationException = link('java/lang/UnsupportedOperationException', function(f) { vm.java_lang_UnsupportedOperationException =  f; });
vm.java_lang_Boolean = link('java/lang/Boolean', function(f) { vm.java_lang_Boolean =  f; });
vm.java_lang_String = link('java/lang/String', function(f) { vm.java_lang_String =  f; });
vm.org_netbeans_html_json_spi_Proto$Type = link('org/netbeans/html/json/spi/Proto$Type', function(f) { vm.org_netbeans_html_json_spi_Proto$Type =  f; });

function io_cloudoffice_platform_cockpit_media_MediaComponent$FilterModel() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_media_MediaComponent$FilterModel;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_media_MediaComponent$FilterModel_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_media_MediaComponent$FilterModel_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_media_MediaComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaComponent$FilterModel_this$0'] = lcA1;
return;

};
CLS['cons__VLio_cloudoffice_platform_cockpit_media_MediaComponent_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_media_MediaComponent$FilterModelfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_media_MediaComponent$FilterModel', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_media_MediaComponent$FilterModelfillInstOf });
    io_cloudoffice_platform_cockpit_media_MediaComponent$FilterModelfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/media/MediaComponent$FilterModel';
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
    this['fld_io_cloudoffice_platform_cockpit_media_MediaComponent$FilterModel_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_media_MediaComponent$FilterModel = registerClass(exports,'io_cloudoffice_platform_cockpit_media_MediaComponent$FilterModel',io_cloudoffice_platform_cockpit_media_MediaComponent$FilterModel);


function io_cloudoffice_platform_cockpit_media_FilterView() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_media_FilterView;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_media_FilterView_proto'] = v; return this['fld_io_cloudoffice_platform_cockpit_media_FilterView_proto']; };
  m = c._prop_filterName = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_media_FilterView_prop_filterName'] = v; return this['fld_io_cloudoffice_platform_cockpit_media_FilterView_prop_filterName']; };
  m = c._prop_filterType = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_media_FilterView_prop_filterType'] = v; return this['fld_io_cloudoffice_platform_cockpit_media_FilterView_prop_filterType']; };
  m = c._prop_isSelected = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_media_FilterView_prop_isSelected'] = v; return this['fld_io_cloudoffice_platform_cockpit_media_FilterView_prop_isSelected']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_io_cloudoffice_platform_cockpit_media_MediaComponent$FilterModel || (refs_io_cloudoffice_platform_cockpit_media_MediaComponent$FilterModel = io_cloudoffice_platform_cockpit_media_MediaComponent$FilterModel(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.getFilterName__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_media_FilterView_proto'],"filterName");
return lcA0['fld_io_cloudoffice_platform_cockpit_media_FilterView_prop_filterName'];

};
c['getFilterName__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setFilterName__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_media_FilterView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_media_FilterView_prop_filterName'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_media_FilterView_prop_filterName'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_media_FilterView_proto'],"filterName", lcA2, lcA1);
return;

    }
}}
};
c['setFilterName__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getFilterType__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_media_FilterView_proto'],"filterType");
return lcA0['fld_io_cloudoffice_platform_cockpit_media_FilterView_prop_filterType'];

};
c['getFilterType__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setFilterType__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_media_FilterView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_media_FilterView_prop_filterType'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_media_FilterView_prop_filterType'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_media_FilterView_proto'],"filterType", lcA2, lcA1);
return;

    }
}}
};
c['setFilterType__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isIsSelected__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_media_FilterView_proto'],"isSelected");
return lcA0['fld_io_cloudoffice_platform_cockpit_media_FilterView_prop_isSelected'];

};
c['isIsSelected__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setIsSelected__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_media_FilterView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_media_FilterView_prop_isSelected']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_media_FilterView_prop_isSelected'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_media_FilterView_proto'];var stA1 = "isSelected";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
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
stA0['fld_io_cloudoffice_platform_cockpit_media_FilterView_proto'] = stA1;
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
    m = CLS.cons__VLjava_lang_String_2Ljava_lang_String_2Z = function(lcA1, lcA2, lcI3) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_media_FilterView_prop_filterName'] = lcA1;
lcA0['fld_io_cloudoffice_platform_cockpit_media_FilterView_prop_filterType'] = lcA2;
lcA0['fld_io_cloudoffice_platform_cockpit_media_FilterView_prop_isSelected'] = lcI3;
return;

};
CLS['cons__VLjava_lang_String_2Ljava_lang_String_2Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 3);
var lcA3 = stA0;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_media_FilterView_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 3);
Array.at(stA2, 0, "filterName");
Array.at(stA2, 1, "filterType");
Array.at(stA2, 2, "isSelected");
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
if ((lcA3[0] || Array.at(lcA3, 0)) !== null && !(lcA3[0] || Array.at(lcA3, 0))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[0] || Array.at(lcA3, 0)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_media_FilterView_prop_filterName'] = (lcA3[0] || Array.at(lcA3, 0));
if ((lcA3[1] || Array.at(lcA3, 1)) !== null && !(lcA3[1] || Array.at(lcA3, 1))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[1] || Array.at(lcA3, 1)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_media_FilterView_prop_filterType'] = (lcA3[1] || Array.at(lcA3, 1));
var stA0 = lcA0;if (((lcA3[2] || Array.at(lcA3, 2))) !== null) { gt = 69; break IF; }
var stI1 = 0;{ gt = 81; break IF; }
    }
    X_69: for (;;) { IF: if (gt <= 69) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[2] || Array.at(lcA3, 2)));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_81: for (;;) { IF: if (gt <= 81) {
stA0['fld_io_cloudoffice_platform_cockpit_media_FilterView_prop_isSelected'] = stI1;
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"filterName");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getFilterName__Ljava_lang_String_2();
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
    m = c.clone__Lio_cloudoffice_platform_cockpit_media_FilterView_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_media_FilterView_proto']);
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_media_FilterView_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lio_cloudoffice_platform_cockpit_media_FilterView_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_media_FilterView_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_media_FilterView;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = lcA0.getFilterName__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_media_FilterView_prop_filterName'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getFilterType__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_media_FilterView_prop_filterType'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isIsSelected__Z();
stA0['fld_io_cloudoffice_platform_cockpit_media_FilterView_prop_isSelected'] = stI1;
return lcA2;

};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lio_cloudoffice_platform_cockpit_media_FilterView_2 = function() {
  var  lcA0 = this;
invoker.applyBindings__V(lcA0['fld_io_cloudoffice_platform_cockpit_media_FilterView_proto']);
return lcA0;

};
c['applyBindings__Lio_cloudoffice_platform_cockpit_media_FilterView_2'] = m;

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

var stI0 = lcA1 != null && lcA1['$instOf_io_cloudoffice_platform_cockpit_media_FilterView'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_media_FilterView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.media.FilterView');
var lcA2 = lcA1;
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_media_FilterView_prop_filterName'], lcA2['fld_io_cloudoffice_platform_cockpit_media_FilterView_prop_filterName']);
if ((stI0) != 0) { gt = 40; break IF; }
return 0;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_media_FilterView_prop_filterType'], lcA2['fld_io_cloudoffice_platform_cockpit_media_FilterView_prop_filterType']);
if ((stI0) != 0) { gt = 59; break IF; }
return 0;
    }
    X_59: for (;;) { IF: if (gt <= 59) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_media_FilterView_prop_isSelected']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_media_FilterView_prop_isSelected']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 84; break IF; }
return 0;
    }
    X_84: for (;;) { IF: if (gt <= 84) {

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
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_media_FilterView_prop_filterName'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_media_FilterView_prop_filterType'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_media_FilterView_prop_isSelected']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
return lcI1;

};
c['hashCode__I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Ljava_lang_Object_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0.clone__Lio_cloudoffice_platform_cockpit_media_FilterView_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lio_cloudoffice_platform_cockpit_media_FilterView$Html4JavaType_2 = function() {
return c._TYPE();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_media_FilterView_2 = function(lcA0) {
return lcA0['fld_io_cloudoffice_platform_cockpit_media_FilterView_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_media_FilterView$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lio_cloudoffice_platform_cockpit_media_FilterView_2Lio_cloudoffice_platform_cockpit_media_FilterView_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_media_FilterView_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_media_FilterView$Html4JavaType;
(refs_io_cloudoffice_platform_cockpit_media_FilterView$Html4JavaType || (refs_io_cloudoffice_platform_cockpit_media_FilterView$Html4JavaType = io_cloudoffice_platform_cockpit_media_FilterView$Html4JavaType(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_media_FilterView$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_media_FilterViewfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_media_FilterView', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_media_FilterViewfillInstOf });
    io_cloudoffice_platform_cockpit_media_FilterViewfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/media/FilterView';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_media_MediaComponent$FilterModel;
    var refs_java_lang_Boolean;
    var refs_net_java_html_BrwsrCtx;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_media_FilterView$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_media_FilterView_proto'] = null;
    this['fld_io_cloudoffice_platform_cockpit_media_FilterView_prop_filterName'] = null;
    this['fld_io_cloudoffice_platform_cockpit_media_FilterView_prop_filterType'] = null;
    this['fld_io_cloudoffice_platform_cockpit_media_FilterView_prop_isSelected'] = 0;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_media_FilterView = registerClass(exports,'io_cloudoffice_platform_cockpit_media_FilterView',io_cloudoffice_platform_cockpit_media_FilterView);

vm.java_lang_Cloneable = link('java/lang/Cloneable', function(f) { vm.java_lang_Cloneable =  f; });
vm.net_java_html_BrwsrCtx = link('net/java/html/BrwsrCtx', function(f) { vm.net_java_html_BrwsrCtx =  f; });

function io_cloudoffice_platform_cockpit_media_MediaComponent$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_media_MediaComponent$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$view = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_media_MediaComponent$1_val$view'] = v; return this['fld_io_cloudoffice_platform_cockpit_media_MediaComponent$1_val$view']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_media_MediaView_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaComponent$1_val$view'] = lcA1;
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2']("Save Callback");
c.runtimeViewAdjustmentByConfiguration__VLio_cloudoffice_platform_cockpit_media_MediaView_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaComponent$1_val$view']);
(refs_io_cloudoffice_platform_cockpit_media_MediaComponent || (refs_io_cloudoffice_platform_cockpit_media_MediaComponent = io_cloudoffice_platform_cockpit_media_MediaComponent(false))).closeConfigurationPanel__VLio_cloudoffice_platform_cockpit_media_MediaView_2(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaComponent$1_val$view']);
return;

};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.runtimeViewAdjustmentByConfiguration__VLio_cloudoffice_platform_cockpit_media_MediaView_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA1.getConfiguration__Lio_cloudoffice_platform_cockpit_media_MediaConfiguration_2();
var lcA2 = stA0;
var stA0 = lcA1;var stI1 = lcA2.isDisplaymediaitem__Z();
stA0.setDisplaymediaitem__VZ(stI1);
var stA0 = lcA2.getSelectedItems__Ljava_util_List_2();
var lcA3 = stA0;
var stI0 = invoker.isEmpty__Z(lcA3);
if ((stI0) != 0) { gt = 48; break IF; }
var stA0 = invoker.get__Ljava_lang_Object_2I(lcA3,0);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_media_MediaItemView']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.media.MediaItemView');
var lcA4 = stA0;
lcA1.setMediaitem__VLio_cloudoffice_platform_cockpit_media_MediaItemView_2(lcA4);
{ gt = 59; break IF; }
    }
    X_48: for (;;) { IF: if (gt <= 48) {

var stA0 = lcA1;var stA1 = new io_cloudoffice_platform_cockpit_media_MediaItemView;
(refs_io_cloudoffice_platform_cockpit_media_MediaItemView || (refs_io_cloudoffice_platform_cockpit_media_MediaItemView = io_cloudoffice_platform_cockpit_media_MediaItemView(false))).constructor.cons__V.call(stA1);
stA0.setMediaitem__VLio_cloudoffice_platform_cockpit_media_MediaItemView_2(stA1);
    }
    X_59: for (;;) { IF: if (gt <= 59) {
return;

    }
}}}
};
    m.access = 2;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_media_MediaComponent$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_media_MediaComponent$1', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_media_MediaComponent$1fillInstOf });
    io_cloudoffice_platform_cockpit_media_MediaComponent$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/media/MediaComponent$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_Logger;
    var refs_io_cloudoffice_platform_cockpit_media_MediaComponent;
    var refs_io_cloudoffice_platform_cockpit_media_MediaItemView;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_media_MediaComponent$1_val$view'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_media_MediaComponent$1 = io_cloudoffice_platform_cockpit_media_MediaComponent$1;

vm.io_cloudoffice_platform_cockpit_api_CallBack = link('io/cloudoffice/platform/cockpit/api/CallBack', function(f) { vm.io_cloudoffice_platform_cockpit_api_CallBack =  f; });

function io_cloudoffice_platform_cockpit_media_MediaItemView() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_media_MediaItemView;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_proto'] = v; return this['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_proto']; };
  m = c._prop_itemId = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_itemId'] = v; return this['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_itemId']; };
  m = c._prop_itemName = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_itemName'] = v; return this['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_itemName']; };
  m = c._prop_itemType = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_itemType'] = v; return this['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_itemType']; };
  m = c._prop_itemTypeIconCss = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_itemTypeIconCss'] = v; return this['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_itemTypeIconCss']; };
  m = c._prop_itemUrl = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_itemUrl'] = v; return this['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_itemUrl']; };
  m = c._prop_hasOwnerPermission = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_hasOwnerPermission'] = v; return this['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_hasOwnerPermission']; };
  m = c._prop_hasAdminPermission = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_hasAdminPermission'] = v; return this['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_hasAdminPermission']; };
  m = c._prop_hasWritePermission = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_hasWritePermission'] = v; return this['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_hasWritePermission']; };
  m = c._prop_hasReadPermission = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_hasReadPermission'] = v; return this['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_hasReadPermission']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_io_cloudoffice_platform_cockpit_media_MediaComponent$MediaItemModel || (refs_io_cloudoffice_platform_cockpit_media_MediaComponent$MediaItemModel = io_cloudoffice_platform_cockpit_media_MediaComponent$MediaItemModel(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.getItemId__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_proto'],"itemId");
return lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_itemId'];

};
c['getItemId__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemId__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_itemId'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_itemId'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_proto'],"itemId", lcA2, lcA1);
return;

    }
}}
};
c['setItemId__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getItemName__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_proto'],"itemName");
return lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_itemName'];

};
c['getItemName__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemName__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_itemName'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_itemName'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_proto'],"itemName", lcA2, lcA1);
return;

    }
}}
};
c['setItemName__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getItemType__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_proto'],"itemType");
return lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_itemType'];

};
c['getItemType__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemType__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_itemType'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_itemType'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_proto'],"itemType", lcA2, lcA1);
return;

    }
}}
};
c['setItemType__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getItemTypeIconCss__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_proto'],"itemTypeIconCss");
return lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_itemTypeIconCss'];

};
c['getItemTypeIconCss__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemTypeIconCss__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_itemTypeIconCss'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_itemTypeIconCss'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_proto'],"itemTypeIconCss", lcA2, lcA1);
return;

    }
}}
};
c['setItemTypeIconCss__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getItemUrl__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_proto'],"itemUrl");
return lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_itemUrl'];

};
c['getItemUrl__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemUrl__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_itemUrl'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_itemUrl'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_proto'],"itemUrl", lcA2, lcA1);
return;

    }
}}
};
c['setItemUrl__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isHasOwnerPermission__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_proto'],"hasOwnerPermission");
return lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_hasOwnerPermission'];

};
c['isHasOwnerPermission__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setHasOwnerPermission__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_hasOwnerPermission']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_hasOwnerPermission'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_proto'];var stA1 = "hasOwnerPermission";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
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
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_proto'],"hasAdminPermission");
return lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_hasAdminPermission'];

};
c['isHasAdminPermission__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setHasAdminPermission__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_hasAdminPermission']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_hasAdminPermission'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_proto'];var stA1 = "hasAdminPermission";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
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
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_proto'],"hasWritePermission");
return lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_hasWritePermission'];

};
c['isHasWritePermission__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setHasWritePermission__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_hasWritePermission']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_hasWritePermission'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_proto'];var stA1 = "hasWritePermission";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
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
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_proto'],"hasReadPermission");
return lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_hasReadPermission'];

};
c['isHasReadPermission__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setHasReadPermission__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_hasReadPermission']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_hasReadPermission'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_proto'];var stA1 = "hasReadPermission";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
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
stA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_proto'] = stA1;
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
lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_itemId'] = lcA1;
lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_itemName'] = lcA2;
lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_itemType'] = lcA3;
lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_itemTypeIconCss'] = lcA4;
lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_itemUrl'] = lcA5;
lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_hasOwnerPermission'] = lcI6;
lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_hasAdminPermission'] = lcI7;
lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_hasWritePermission'] = lcI8;
lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_hasReadPermission'] = lcI9;
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
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, (9));
Array.at(stA2, 0, "itemId");
Array.at(stA2, 1, "itemName");
Array.at(stA2, 2, "itemType");
Array.at(stA2, 3, "itemTypeIconCss");
Array.at(stA2, 4, "itemUrl");
Array.at(stA2, 5, "hasOwnerPermission");
Array.at(stA2, (6), "hasAdminPermission");
Array.at(stA2, (7), "hasWritePermission");
Array.at(stA2, (8), "hasReadPermission");
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
if ((lcA3[0] || Array.at(lcA3, 0)) !== null && !(lcA3[0] || Array.at(lcA3, 0))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[0] || Array.at(lcA3, 0)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_itemId'] = (lcA3[0] || Array.at(lcA3, 0));
if ((lcA3[1] || Array.at(lcA3, 1)) !== null && !(lcA3[1] || Array.at(lcA3, 1))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[1] || Array.at(lcA3, 1)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_itemName'] = (lcA3[1] || Array.at(lcA3, 1));
if ((lcA3[2] || Array.at(lcA3, 2)) !== null && !(lcA3[2] || Array.at(lcA3, 2))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[2] || Array.at(lcA3, 2)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_itemType'] = (lcA3[2] || Array.at(lcA3, 2));
if ((lcA3[3] || Array.at(lcA3, 3)) !== null && !(lcA3[3] || Array.at(lcA3, 3))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[3] || Array.at(lcA3, 3)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_itemTypeIconCss'] = (lcA3[3] || Array.at(lcA3, 3));
if ((lcA3[4] || Array.at(lcA3, 4)) !== null && !(lcA3[4] || Array.at(lcA3, 4))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[4] || Array.at(lcA3, 4)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_itemUrl'] = (lcA3[4] || Array.at(lcA3, 4));
var stA0 = lcA0;if (((lcA3[5] || Array.at(lcA3, 5))) !== null) { gt = 134; break IF; }
var stI1 = 0;{ gt = 146; break IF; }
    }
    X_134: for (;;) { IF: if (gt <= 134) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[5] || Array.at(lcA3, 5)));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_146: for (;;) { IF: if (gt <= 146) {
stA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_hasOwnerPermission'] = stI1;
var stA0 = lcA0;if (((lcA3[(6)] || Array.at(lcA3, (6)))) !== null) { gt = 161; break IF; }
var stI1 = 0;{ gt = 174; break IF; }
    }
    X_161: for (;;) { IF: if (gt <= 161) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(6)] || Array.at(lcA3, (6))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_174: for (;;) { IF: if (gt <= 174) {
stA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_hasAdminPermission'] = stI1;
var stA0 = lcA0;if (((lcA3[(7)] || Array.at(lcA3, (7)))) !== null) { gt = 189; break IF; }
var stI1 = 0;{ gt = 202; break IF; }
    }
    X_189: for (;;) { IF: if (gt <= 189) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(7)] || Array.at(lcA3, (7))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_202: for (;;) { IF: if (gt <= 202) {
stA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_hasWritePermission'] = stI1;
var stA0 = lcA0;if (((lcA3[(8)] || Array.at(lcA3, (8)))) !== null) { gt = 217; break IF; }
var stI1 = 0;{ gt = 230; break IF; }
    }
    X_217: for (;;) { IF: if (gt <= 217) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(8)] || Array.at(lcA3, (8))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_230: for (;;) { IF: if (gt <= 230) {
stA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_hasReadPermission'] = stI1;
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"itemUrl");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getItemUrl__Ljava_lang_String_2();
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
    m = c.clone__Lio_cloudoffice_platform_cockpit_media_MediaItemView_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_proto']);
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_media_MediaItemView_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lio_cloudoffice_platform_cockpit_media_MediaItemView_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_media_MediaItemView_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_media_MediaItemView;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = lcA0.getItemId__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_itemId'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getItemName__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_itemName'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getItemType__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_itemType'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getItemTypeIconCss__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_itemTypeIconCss'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getItemUrl__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_itemUrl'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isHasOwnerPermission__Z();
stA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_hasOwnerPermission'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isHasAdminPermission__Z();
stA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_hasAdminPermission'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isHasWritePermission__Z();
stA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_hasWritePermission'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isHasReadPermission__Z();
stA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_hasReadPermission'] = stI1;
return lcA2;

};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lio_cloudoffice_platform_cockpit_media_MediaItemView_2 = function() {
  var  lcA0 = this;
invoker.applyBindings__V(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_proto']);
return lcA0;

};
c['applyBindings__Lio_cloudoffice_platform_cockpit_media_MediaItemView_2'] = m;

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

var stI0 = lcA1 != null && lcA1['$instOf_io_cloudoffice_platform_cockpit_media_MediaItemView'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_media_MediaItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.media.MediaItemView');
var lcA2 = lcA1;
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_itemId'], lcA2['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_itemId']);
if ((stI0) != 0) { gt = 40; break IF; }
return 0;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_itemName'], lcA2['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_itemName']);
if ((stI0) != 0) { gt = 59; break IF; }
return 0;
    }
    X_59: for (;;) { IF: if (gt <= 59) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_itemType'], lcA2['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_itemType']);
if ((stI0) != 0) { gt = 78; break IF; }
return 0;
    }
    X_78: for (;;) { IF: if (gt <= 78) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_itemTypeIconCss'], lcA2['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_itemTypeIconCss']);
if ((stI0) != 0) { gt = 97; break IF; }
return 0;
    }
    X_97: for (;;) { IF: if (gt <= 97) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_itemUrl'], lcA2['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_itemUrl']);
if ((stI0) != 0) { gt = 116; break IF; }
return 0;
    }
    X_116: for (;;) { IF: if (gt <= 116) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_hasOwnerPermission']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_hasOwnerPermission']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 141; break IF; }
return 0;
    }
    X_141: for (;;) { IF: if (gt <= 141) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_hasAdminPermission']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_hasAdminPermission']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 166; break IF; }
return 0;
    }
    X_166: for (;;) { IF: if (gt <= 166) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_hasWritePermission']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_hasWritePermission']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 191; break IF; }
return 0;
    }
    X_191: for (;;) { IF: if (gt <= 191) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_hasReadPermission']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_hasReadPermission']);
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
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_itemId'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_itemName'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_itemType'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_itemTypeIconCss'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_itemUrl'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_hasOwnerPermission']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_hasAdminPermission']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_hasWritePermission']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_hasReadPermission']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
return lcI1;

};
c['hashCode__I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Ljava_lang_Object_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0.clone__Lio_cloudoffice_platform_cockpit_media_MediaItemView_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lio_cloudoffice_platform_cockpit_media_MediaItemView$Html4JavaType_2 = function() {
return c._TYPE();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_media_MediaItemView_2 = function(lcA0) {
return lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_media_MediaItemView$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lio_cloudoffice_platform_cockpit_media_MediaItemView_2Lio_cloudoffice_platform_cockpit_media_MediaItemView_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_media_MediaItemView_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_media_MediaItemView$Html4JavaType;
(refs_io_cloudoffice_platform_cockpit_media_MediaItemView$Html4JavaType || (refs_io_cloudoffice_platform_cockpit_media_MediaItemView$Html4JavaType = io_cloudoffice_platform_cockpit_media_MediaItemView$Html4JavaType(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_media_MediaItemView$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_media_MediaItemViewfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_media_MediaItemView', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_media_MediaItemViewfillInstOf });
    io_cloudoffice_platform_cockpit_media_MediaItemViewfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/media/MediaItemView';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_media_MediaComponent$MediaItemModel;
    var refs_java_lang_Boolean;
    var refs_net_java_html_BrwsrCtx;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_media_MediaItemView$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_proto'] = null;
    this['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_itemId'] = null;
    this['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_itemName'] = null;
    this['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_itemType'] = null;
    this['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_itemTypeIconCss'] = null;
    this['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_itemUrl'] = null;
    this['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_hasOwnerPermission'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_hasAdminPermission'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_hasWritePermission'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_media_MediaItemView_prop_hasReadPermission'] = 0;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_media_MediaItemView = registerClass(exports,'io_cloudoffice_platform_cockpit_media_MediaItemView',io_cloudoffice_platform_cockpit_media_MediaItemView);


function io_cloudoffice_platform_cockpit_media_MediaItemView$Html4JavaType() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_media_MediaItemView$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_io_cloudoffice_platform_cockpit_media_MediaItemView || (refs_io_cloudoffice_platform_cockpit_media_MediaItemView = io_cloudoffice_platform_cockpit_media_MediaItemView(false))).constructor.$class, (refs_io_cloudoffice_platform_cockpit_media_MediaComponent$MediaItemModel || (refs_io_cloudoffice_platform_cockpit_media_MediaComponent$MediaItemModel = io_cloudoffice_platform_cockpit_media_MediaComponent$MediaItemModel(false))).constructor.$class, (9), 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemId", 0, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemName", 1, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemType", 2, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemTypeIconCss", 3, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemUrl", 4, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"hasOwnerPermission", 5, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"hasAdminPermission", (6), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"hasWritePermission", (7), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"hasReadPermission", (8), 0, 0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLio_cloudoffice_platform_cockpit_media_MediaItemView_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
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

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_media_MediaItemView || (refs_io_cloudoffice_platform_cockpit_media_MediaItemView = io_cloudoffice_platform_cockpit_media_MediaItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_media_MediaItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemId__VLjava_lang_String_2(stA1);
return;
    }
    X_69: for (;;) { IF: if (gt <= 69) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_media_MediaItemView || (refs_io_cloudoffice_platform_cockpit_media_MediaItemView = io_cloudoffice_platform_cockpit_media_MediaItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_media_MediaItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemName__VLjava_lang_String_2(stA1);
return;
    }
    X_86: for (;;) { IF: if (gt <= 86) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_media_MediaItemView || (refs_io_cloudoffice_platform_cockpit_media_MediaItemView = io_cloudoffice_platform_cockpit_media_MediaItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_media_MediaItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemType__VLjava_lang_String_2(stA1);
return;
    }
    X_103: for (;;) { IF: if (gt <= 103) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_media_MediaItemView || (refs_io_cloudoffice_platform_cockpit_media_MediaItemView = io_cloudoffice_platform_cockpit_media_MediaItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_media_MediaItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemTypeIconCss__VLjava_lang_String_2(stA1);
return;
    }
    X_120: for (;;) { IF: if (gt <= 120) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_media_MediaItemView || (refs_io_cloudoffice_platform_cockpit_media_MediaItemView = io_cloudoffice_platform_cockpit_media_MediaItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_media_MediaItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemUrl__VLjava_lang_String_2(stA1);
return;
    }
    X_137: for (;;) { IF: if (gt <= 137) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_media_MediaItemView || (refs_io_cloudoffice_platform_cockpit_media_MediaItemView = io_cloudoffice_platform_cockpit_media_MediaItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_media_MediaItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setHasOwnerPermission__VZ(stI1);
return;
    }
    X_157: for (;;) { IF: if (gt <= 157) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_media_MediaItemView || (refs_io_cloudoffice_platform_cockpit_media_MediaItemView = io_cloudoffice_platform_cockpit_media_MediaItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_media_MediaItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setHasAdminPermission__VZ(stI1);
return;
    }
    X_177: for (;;) { IF: if (gt <= 177) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_media_MediaItemView || (refs_io_cloudoffice_platform_cockpit_media_MediaItemView = io_cloudoffice_platform_cockpit_media_MediaItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_media_MediaItemView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setHasWritePermission__VZ(stI1);
return;
    }
    X_197: for (;;) { IF: if (gt <= 197) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_media_MediaItemView || (refs_io_cloudoffice_platform_cockpit_media_MediaItemView = io_cloudoffice_platform_cockpit_media_MediaItemView(false))).access$100__Lio_cloudoffice_platform_cockpit_media_MediaItemView$Html4JavaType_2();
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
    m = c.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_media_MediaItemView_2I = function(lcA1, lcI2) {
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

var stA0 = lcA1.getItemUrl__Ljava_lang_String_2();
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
    m = c.call__VLio_cloudoffice_platform_cockpit_media_MediaItemView_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_media_MediaItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.media.MediaItemView');
var stA0 = (refs_io_cloudoffice_platform_cockpit_media_MediaItemView || (refs_io_cloudoffice_platform_cockpit_media_MediaItemView = io_cloudoffice_platform_cockpit_media_MediaItemView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_media_MediaItemView_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLio_cloudoffice_platform_cockpit_media_MediaItemView_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLio_cloudoffice_platform_cockpit_media_MediaItemView_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
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
    m = c.read__Lio_cloudoffice_platform_cockpit_media_MediaItemView_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_media_MediaItemView;
(refs_io_cloudoffice_platform_cockpit_media_MediaItemView || (refs_io_cloudoffice_platform_cockpit_media_MediaItemView = io_cloudoffice_platform_cockpit_media_MediaItemView(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_media_MediaItemView$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lio_cloudoffice_platform_cockpit_media_MediaItemView_2Lio_cloudoffice_platform_cockpit_media_MediaItemView_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_media_MediaItemView || (refs_io_cloudoffice_platform_cockpit_media_MediaItemView = io_cloudoffice_platform_cockpit_media_MediaItemView(false))).access$400__Lio_cloudoffice_platform_cockpit_media_MediaItemView_2Lio_cloudoffice_platform_cockpit_media_MediaItemView_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_media_MediaItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.media.MediaItemView');
lcA0.onMessage__VLio_cloudoffice_platform_cockpit_media_MediaItemView_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_media_MediaItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.media.MediaItemView');
lcA0.onChange__VLio_cloudoffice_platform_cockpit_media_MediaItemView_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lio_cloudoffice_platform_cockpit_media_MediaItemView_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_media_MediaItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.media.MediaItemView');
var stA0 = lcA0.cloneTo__Lio_cloudoffice_platform_cockpit_media_MediaItemView_2Lio_cloudoffice_platform_cockpit_media_MediaItemView_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_media_MediaItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.media.MediaItemView');
lcA0.call__VLio_cloudoffice_platform_cockpit_media_MediaItemView_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_media_MediaItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.media.MediaItemView');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_media_MediaItemView_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_media_MediaItemView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.media.MediaItemView');
lcA0.setValue__VLio_cloudoffice_platform_cockpit_media_MediaItemView_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_media_MediaItemView$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_media_MediaItemView$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_media_MediaItemView$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_media_MediaItemView$Html4JavaTypefillInstOf });
    io_cloudoffice_platform_cockpit_media_MediaItemView$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/media/MediaItemView$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_media_MediaItemView;
    var refs_io_cloudoffice_platform_cockpit_media_MediaComponent$MediaItemModel;
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
vm.io_cloudoffice_platform_cockpit_media_MediaItemView$Html4JavaType = io_cloudoffice_platform_cockpit_media_MediaItemView$Html4JavaType;


function io_cloudoffice_platform_cockpit_media_MediaComponent$MediaItemModel() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_media_MediaComponent$MediaItemModel;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_media_MediaComponent$MediaItemModel_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_media_MediaComponent$MediaItemModel_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_media_MediaComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaComponent$MediaItemModel_this$0'] = lcA1;
return;

};
CLS['cons__VLio_cloudoffice_platform_cockpit_media_MediaComponent_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_media_MediaComponent$MediaItemModelfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_media_MediaComponent$MediaItemModel', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_media_MediaComponent$MediaItemModelfillInstOf });
    io_cloudoffice_platform_cockpit_media_MediaComponent$MediaItemModelfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/media/MediaComponent$MediaItemModel';
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
    this['fld_io_cloudoffice_platform_cockpit_media_MediaComponent$MediaItemModel_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_media_MediaComponent$MediaItemModel = registerClass(exports,'io_cloudoffice_platform_cockpit_media_MediaComponent$MediaItemModel',io_cloudoffice_platform_cockpit_media_MediaComponent$MediaItemModel);


function io_cloudoffice_platform_cockpit_media_MediaComponent() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_media_MediaComponent;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_api_AbstractComponent(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = c.getInstance__Lio_cloudoffice_platform_cockpit_api_Component_2Ljava_lang_String_2 = function(lcA0) {
var stA0 = new io_cloudoffice_platform_cockpit_media_MediaComponent;
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
c['_componentName'].call(lcA0, "media-component");
return;

};
c['setComponentName__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.bindEventListeners__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = "loginsuccess";var stA2 = new io_cloudoffice_platform_cockpit_media_MediaComponent$LoginEventListener;
(refs_io_cloudoffice_platform_cockpit_media_MediaComponent$LoginEventListener || (refs_io_cloudoffice_platform_cockpit_media_MediaComponent$LoginEventListener = io_cloudoffice_platform_cockpit_media_MediaComponent$LoginEventListener(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_media_MediaComponent_2.call(stA2, lcA0);
invoker.attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2(stA0,stA1, stA2);
var stA0 = lcA0;var stA1 = "designermode";var stA2 = new io_cloudoffice_platform_cockpit_media_MediaComponent$DesignModeListener;
(refs_io_cloudoffice_platform_cockpit_media_MediaComponent$DesignModeListener || (refs_io_cloudoffice_platform_cockpit_media_MediaComponent$DesignModeListener = io_cloudoffice_platform_cockpit_media_MediaComponent$DesignModeListener(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_media_MediaComponent_2Lio_cloudoffice_platform_cockpit_media_MediaComponent$1_2.call(stA2, lcA0, null);
invoker.attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2(stA0,stA1, stA2);
var stA0 = lcA0;var stA1 = "invokefunction";var stA2 = new io_cloudoffice_platform_cockpit_media_MediaComponent$InvokeFunctionListener;
(refs_io_cloudoffice_platform_cockpit_media_MediaComponent$InvokeFunctionListener || (refs_io_cloudoffice_platform_cockpit_media_MediaComponent$InvokeFunctionListener = io_cloudoffice_platform_cockpit_media_MediaComponent$InvokeFunctionListener(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_media_MediaComponent_2Lio_cloudoffice_platform_cockpit_media_MediaComponent$1_2.call(stA2, lcA0, null);
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
var stA0 = lcA0;var stA1 = invoker.getName__Ljava_lang_String_2((refs_io_cloudoffice_platform_cockpit_media_MediaView || (refs_io_cloudoffice_platform_cockpit_media_MediaView = io_cloudoffice_platform_cockpit_media_MediaView(false))).constructor.$class);
invoker.setDefaultViewName__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA0;var stA1 = invoker.getName__Ljava_lang_String_2((refs_io_cloudoffice_platform_cockpit_media_MediaConfiguration || (refs_io_cloudoffice_platform_cockpit_media_MediaConfiguration = io_cloudoffice_platform_cockpit_media_MediaConfiguration(false))).constructor.$class);
invoker.setDefaultConfigViewName__VLjava_lang_String_2(stA0,stA1);
return;

};
c['bindViewNames__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.openConfig__VLio_cloudoffice_platform_cockpit_media_MediaView_2 = function(lcA0) {
lcA0.setDesignerMode__VZ(1);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.closeConfigurationPanel__VLio_cloudoffice_platform_cockpit_media_MediaView_2 = function(lcA0) {
lcA0.setDesignerMode__VZ(0);
c.resetConfigurationModelFromJSON__VLio_cloudoffice_platform_cockpit_media_MediaView_2(lcA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.save__VLio_cloudoffice_platform_cockpit_media_MediaView_2 = function(lcA0) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = "media";var stA2 = lcA0.getInstance__Ljava_lang_String_2();
var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['configPostEndpoint__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'](stA1, stA2, "");
var stA2 = lcA0.toString__Ljava_lang_String_2();
var stA3 = new io_cloudoffice_platform_cockpit_media_MediaComponent$1;
(refs_io_cloudoffice_platform_cockpit_media_MediaComponent$1 || (refs_io_cloudoffice_platform_cockpit_media_MediaComponent$1 = io_cloudoffice_platform_cockpit_media_MediaComponent$1(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_media_MediaView_2.call(stA3, lcA0);
invoker.post__VLjava_lang_String_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.resetConfiguration__VLio_cloudoffice_platform_cockpit_media_MediaView_2 = function(lcA0) {
c.resetConfigurationModelFromJSON__VLio_cloudoffice_platform_cockpit_media_MediaView_2(lcA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.resetConfigurationModelFromJSON__VLio_cloudoffice_platform_cockpit_media_MediaView_2 = function(lcA0) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = "media";var stA2 = lcA0.getInstance__Ljava_lang_String_2();
var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['configFetchEndpoint__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'](stA1, stA2);
var stA2 = null;var stA3 = new io_cloudoffice_platform_cockpit_media_MediaComponent$2;
(refs_io_cloudoffice_platform_cockpit_media_MediaComponent$2 || (refs_io_cloudoffice_platform_cockpit_media_MediaComponent$2 = io_cloudoffice_platform_cockpit_media_MediaComponent$2(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_media_MediaView_2.call(stA3, lcA0);
invoker.fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_media_MediaComponentfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_media_MediaComponent', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_media_MediaComponentfillInstOf });
    io_cloudoffice_platform_cockpit_media_MediaComponentfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/media/MediaComponent';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_AbstractComponent;
    var refs_io_cloudoffice_platform_cockpit_media_MediaComponent$LoginEventListener;
    var refs_io_cloudoffice_platform_cockpit_media_MediaComponent$DesignModeListener;
    var refs_io_cloudoffice_platform_cockpit_media_MediaComponent$InvokeFunctionListener;
    var refs_io_cloudoffice_platform_cockpit_media_MediaView;
    var refs_io_cloudoffice_platform_cockpit_media_MediaConfiguration;
    var refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration;
    var refs_io_cloudoffice_platform_cockpit_media_MediaComponent$1;
    var refs_io_cloudoffice_platform_cockpit_media_MediaComponent$2;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_media_MediaComponent = registerClass(exports,'io_cloudoffice_platform_cockpit_media_MediaComponent',io_cloudoffice_platform_cockpit_media_MediaComponent);


function io_cloudoffice_platform_cockpit_media_MediaComponent$2() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_media_MediaComponent$2;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$view = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_media_MediaComponent$2_val$view'] = v; return this['fld_io_cloudoffice_platform_cockpit_media_MediaComponent$2_val$view']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_media_MediaView_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaComponent$2_val$view'] = lcA1;
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
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaComponent$2_val$view'].getConfiguration__Lio_cloudoffice_platform_cockpit_media_MediaConfiguration_2();
var lcA3 = stA0;
var stA0 = invoker.getJsonObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA2,"configuration");
var lcA4 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_Object_2'](lcA4);
if ((stI0) == 0) { gt = 43; break IF; }
c.prepareFilters__VLorg_json_JSONObject_2Lio_cloudoffice_platform_cockpit_media_MediaConfiguration_2.call(lcA0, lcA4, lcA3);
c.prepareSelectedMedia__VLorg_json_JSONObject_2Lio_cloudoffice_platform_cockpit_media_MediaConfiguration_2.call(lcA0, lcA4, lcA3);
    }
    X_43: for (;;) { IF: if (gt <= 43) {
return;

    }
}}
};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.prepareFilters__VLorg_json_JSONObject_2Lio_cloudoffice_platform_cockpit_media_MediaConfiguration_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA2.getFilters__Ljava_util_List_2();
invoker.clear__V(stA0);
var stA0 = invoker.getJSONArray__Lorg_json_JSONArray_2Ljava_lang_String_2(lcA1,"filters");
var stA0 = invoker.toList__Ljava_util_List_2(stA0);
var lcA3 = stA0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA3);
var lcA4 = stA0;
    }
    X_27: for (;;) { IF: if (gt <= 27) {

var stI0 = invoker.hasNext__Z(lcA4);
if ((stI0) == 0) { gt = 116; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA4);
var lcA5 = stA0;
if (lcA5 !== null && !lcA5['$instOf_java_util_Map']) vm.java_lang_Class(false).castEx(lcA5, 'java.util.Map');
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_util_Map_2'](lcA5);
var lcA6 = stA0;
var stA0 = new io_cloudoffice_platform_cockpit_media_FilterView;
(refs_io_cloudoffice_platform_cockpit_media_FilterView || (refs_io_cloudoffice_platform_cockpit_media_FilterView = io_cloudoffice_platform_cockpit_media_FilterView(false))).constructor.cons__V.call(stA0);
var lcA7 = stA0;
var stA0 = lcA7;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA6,"filterName");
stA0.setFilterName__VLjava_lang_String_2(stA1);
var stA0 = lcA7;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA6,"filterType");
stA0.setFilterType__VLjava_lang_String_2(stA1);
var stA0 = lcA7;var stI1 = invoker.getBoolean__ZLjava_lang_String_2(lcA6,"isSelected");
stA0.setIsSelected__VZ(stI1);
var stA0 = lcA2.getFilters__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA7);
{ gt = 0; continue X_27; }
    }
    X_116: for (;;) { IF: if (gt <= 116) {
return;

    }
}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.prepareSelectedMedia__VLorg_json_JSONObject_2Lio_cloudoffice_platform_cockpit_media_MediaConfiguration_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA2.getSelectedItems__Ljava_util_List_2();
invoker.clear__V(stA0);
var stA0 = invoker.getJSONArray__Lorg_json_JSONArray_2Ljava_lang_String_2(lcA1,"selectedItems");
var stA0 = invoker.toList__Ljava_util_List_2(stA0);
var lcA3 = stA0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA3);
var lcA4 = stA0;
    }
    X_27: for (;;) { IF: if (gt <= 27) {

var stI0 = invoker.hasNext__Z(lcA4);
if ((stI0) == 0) { gt = 188; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA4);
var lcA5 = stA0;
if (lcA5 !== null && !lcA5['$instOf_java_util_Map']) vm.java_lang_Class(false).castEx(lcA5, 'java.util.Map');
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_util_Map_2'](lcA5);
var lcA6 = stA0;
var stA0 = new io_cloudoffice_platform_cockpit_media_MediaItemView;
(refs_io_cloudoffice_platform_cockpit_media_MediaItemView || (refs_io_cloudoffice_platform_cockpit_media_MediaItemView = io_cloudoffice_platform_cockpit_media_MediaItemView(false))).constructor.cons__V.call(stA0);
var lcA7 = stA0;
var stA0 = lcA7;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA6,"itemId");
stA0.setItemId__VLjava_lang_String_2(stA1);
var stA0 = lcA7;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA6,"itemName");
stA0.setItemName__VLjava_lang_String_2(stA1);
var stA0 = lcA7;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA6,"itemType");
stA0.setItemType__VLjava_lang_String_2(stA1);
var stA0 = lcA7;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA6,"itemTypeIconCss");
stA0.setItemTypeIconCss__VLjava_lang_String_2(stA1);
var stA0 = lcA7;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA6,"itemUrl");
stA0.setItemUrl__VLjava_lang_String_2(stA1);
var stA0 = lcA7;var stI1 = invoker.getBoolean__ZLjava_lang_String_2(lcA6,"hasOwnerPermission");
stA0.setHasOwnerPermission__VZ(stI1);
var stA0 = lcA7;var stI1 = invoker.getBoolean__ZLjava_lang_String_2(lcA6,"hasAdminPermission");
stA0.setHasAdminPermission__VZ(stI1);
var stA0 = lcA7;var stI1 = invoker.getBoolean__ZLjava_lang_String_2(lcA6,"hasWritePermission");
stA0.setHasWritePermission__VZ(stI1);
var stA0 = lcA7;var stI1 = invoker.getBoolean__ZLjava_lang_String_2(lcA6,"hasReadPermission");
stA0.setHasReadPermission__VZ(stI1);
var stA0 = lcA2.getSelectedItems__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA7);
{ gt = 0; continue X_27; }
    }
    X_188: for (;;) { IF: if (gt <= 188) {
return;

    }
}}}
};
    m.access = 2;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_media_MediaComponent$2fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_media_MediaComponent$2', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_media_MediaComponent$2fillInstOf });
    io_cloudoffice_platform_cockpit_media_MediaComponent$2fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/media/MediaComponent$2';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_io_cloudoffice_platform_cockpit_media_FilterView;
    var refs_io_cloudoffice_platform_cockpit_media_MediaItemView;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_media_MediaComponent$2_val$view'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_media_MediaComponent$2 = io_cloudoffice_platform_cockpit_media_MediaComponent$2;

vm.io_cloudoffice_platform_cockpit_api_UtilValidate = link('io/cloudoffice/platform/cockpit/api/UtilValidate', function(f) { vm.io_cloudoffice_platform_cockpit_api_UtilValidate =  f; });
vm.io_cloudoffice_platform_cockpit_api_MapBuilder = link('io/cloudoffice/platform/cockpit/api/MapBuilder', function(f) { vm.io_cloudoffice_platform_cockpit_api_MapBuilder =  f; });
vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration = link('io/cloudoffice/platform/cockpit/api/ComponentConfiguration', function(f) { vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration =  f; });

function io_cloudoffice_platform_cockpit_media_MediaConfiguration() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_media_MediaConfiguration;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_proto'] = v; return this['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_proto']; };
  m = c._prop_displaymediaitem = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_displaymediaitem'] = v; return this['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_displaymediaitem']; };
  m = c._prop_filters = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_filters'] = v; return this['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_filters']; };
  m = c._prop_autocompleteinputbox = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_autocompleteinputbox'] = v; return this['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_autocompleteinputbox']; };
  m = c._prop_itemListLoader = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_itemListLoader'] = v; return this['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_itemListLoader']; };
  m = c._prop_showItemList = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_showItemList'] = v; return this['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_showItemList']; };
  m = c._prop_itemList = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_itemList'] = v; return this['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_itemList']; };
  m = c._prop_selectedItems = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_selectedItems'] = v; return this['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_selectedItems']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManager || (refs_io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManager = io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManager(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.isDisplaymediaitem__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_proto'],"displaymediaitem");
return lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_displaymediaitem'];

};
c['isDisplaymediaitem__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setDisplaymediaitem__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_displaymediaitem']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_displaymediaitem'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_proto'];var stA1 = "displaymediaitem";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setDisplaymediaitem__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getFilters__Ljava_util_List_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_proto'],"filters");
return lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_filters'];

};
c['getFilters__Ljava_util_List_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getAutocompleteinputbox__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_proto'],"autocompleteinputbox");
return lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_autocompleteinputbox'];

};
c['getAutocompleteinputbox__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setAutocompleteinputbox__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_autocompleteinputbox'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_autocompleteinputbox'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_proto'],"autocompleteinputbox", lcA2, lcA1);
var lcA3 = lcA0;
(refs_io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManager || (refs_io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManager = io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManager(false))).itemSearchAutocomplete__VLio_cloudoffice_platform_cockpit_media_MediaConfiguration_2(lcA3);
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

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_proto'],"itemListLoader");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_itemListLoader']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_HelperItemView;
(refs_io_cloudoffice_platform_cockpit_api_HelperItemView || (refs_io_cloudoffice_platform_cockpit_api_HelperItemView = vm.io_cloudoffice_platform_cockpit_api_HelperItemView(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_itemListLoader'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_itemListLoader'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_itemListLoader']['$instOf_io_cloudoffice_platform_cockpit_api_HelperItemView']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_itemListLoader'], 'io.cloudoffice.platform.cockpit.api.HelperItemView');
return lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_itemListLoader'];

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

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_itemListLoader'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_itemListLoader'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_proto'],"itemListLoader", lcA2, lcA1);
return;

    }
}}
};
c['setItemListLoader__VLio_cloudoffice_platform_cockpit_api_HelperItemView_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isShowItemList__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_proto'],"showItemList");
return lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_showItemList'];

};
c['isShowItemList__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setShowItemList__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_showItemList']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_showItemList'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_proto'];var stA1 = "showItemList";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
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
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_proto'],"itemList");
return lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_itemList'];

};
c['getItemList__Ljava_util_List_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getSelectedItems__Ljava_util_List_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_proto'],"selectedItems");
return lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_selectedItems'];

};
c['getSelectedItems__Ljava_util_List_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2(c._TYPE(),lcA0, lcA1);
stA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_proto'] = stA1;
var stA0 = lcA0;var stA1 = lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_proto'];var stA2 = "filters";var stI3 = -1;var stA4 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 0);
var stA1 = invoker.createList__Ljava_util_List_2Ljava_lang_String_2I_3Ljava_lang_String_2(stA1,stA2, stI3, stA4);
stA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_filters'] = stA1;
var stA0 = lcA0;var stA1 = lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_proto'];var stA2 = "itemList";var stI3 = -1;var stA4 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 0);
var stA1 = invoker.createList__Ljava_util_List_2Ljava_lang_String_2I_3Ljava_lang_String_2(stA1,stA2, stI3, stA4);
stA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_itemList'] = stA1;
var stA0 = lcA0;var stA1 = lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_proto'];var stA2 = "selectedItems";var stI3 = -1;var stA4 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 0);
var stA1 = invoker.createList__Ljava_util_List_2Ljava_lang_String_2I_3Ljava_lang_String_2(stA1,stA2, stI3, stA4);
stA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_selectedItems'] = stA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_itemListLoader'] = c._TYPE();
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VZLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_HelperItemView_2Z_3Lio_cloudoffice_platform_cockpit_media_FilterView_2 = function(lcI1, lcA2, lcA3, lcI4, lcA5) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_displaymediaitem'] = lcI1;
lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_autocompleteinputbox'] = lcA2;
lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_itemListLoader'] = lcA3;
lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_showItemList'] = lcI4;
invoker.initTo__VLjava_util_Collection_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_proto'],lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_filters'], lcA5);
return;

};
CLS['cons__VZLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_HelperItemView_2Z_3Lio_cloudoffice_platform_cockpit_media_FilterView_2'] = m;

    m.access = 129;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, (7));
var lcA3 = stA0;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, (7));
Array.at(stA2, 0, "displaymediaitem");
Array.at(stA2, 1, "filters");
Array.at(stA2, 2, "autocompleteinputbox");
Array.at(stA2, 3, "itemListLoader");
Array.at(stA2, 4, "showItemList");
Array.at(stA2, 5, "itemList");
Array.at(stA2, (6), "selectedItems");
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
var stA0 = lcA0;if (((lcA3[0] || Array.at(lcA3, 0))) !== null) { gt = 72; break IF; }
var stI1 = 0;{ gt = 84; break IF; }
    }
    X_72: for (;;) { IF: if (gt <= 72) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[0] || Array.at(lcA3, 0)));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_84: for (;;) { IF: if (gt <= 84) {
stA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_displaymediaitem'] = stI1;
var stA0 = c.useAsArray___3Ljava_lang_Object_2Ljava_lang_Object_2((lcA3[1] || Array.at(lcA3, 1)));
var lcA4 = stA0;
var lcI5 = (lcA4).length;
var lcI6 = 0;
    }
    X_103: for (;;) { IF: if (gt <= 103) {

if ((lcI6) >= (lcI5)) { gt = 144; break IF; }
var lcA7 = (lcA4[lcI6] || Array.at(lcA4, lcI6));
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_filters'];var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_proto'],(refs_io_cloudoffice_platform_cockpit_media_FilterView || (refs_io_cloudoffice_platform_cockpit_media_FilterView = io_cloudoffice_platform_cockpit_media_FilterView(false))).constructor.$class, lcA7);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
lcI6++;
{ gt = 0; continue X_103; }
    }
    X_144: for (;;) { IF: if (gt <= 144) {

if ((lcA3[2] || Array.at(lcA3, 2)) !== null && !(lcA3[2] || Array.at(lcA3, 2))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[2] || Array.at(lcA3, 2)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_autocompleteinputbox'] = (lcA3[2] || Array.at(lcA3, 2));
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_proto'],(refs_io_cloudoffice_platform_cockpit_api_HelperItemView || (refs_io_cloudoffice_platform_cockpit_api_HelperItemView = vm.io_cloudoffice_platform_cockpit_api_HelperItemView(false))).constructor.$class, (lcA3[3] || Array.at(lcA3, 3)));
stA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_itemListLoader'] = stA1;
var stA0 = lcA0;if (((lcA3[4] || Array.at(lcA3, 4))) !== null) { gt = 181; break IF; }
var stI1 = 0;{ gt = 193; break IF; }
    }
    X_181: for (;;) { IF: if (gt <= 181) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[4] || Array.at(lcA3, 4)));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_193: for (;;) { IF: if (gt <= 193) {
stA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_showItemList'] = stI1;
var stA0 = c.useAsArray___3Ljava_lang_Object_2Ljava_lang_Object_2((lcA3[5] || Array.at(lcA3, 5)));
var lcA4 = stA0;
var lcI5 = (lcA4).length;
var lcI6 = 0;
    }
    X_212: for (;;) { IF: if (gt <= 212) {

if ((lcI6) >= (lcI5)) { gt = 253; break IF; }
var lcA7 = (lcA4[lcI6] || Array.at(lcA4, lcI6));
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_itemList'];var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_proto'],(refs_io_cloudoffice_platform_cockpit_media_MediaItemView || (refs_io_cloudoffice_platform_cockpit_media_MediaItemView = io_cloudoffice_platform_cockpit_media_MediaItemView(false))).constructor.$class, lcA7);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
lcI6++;
{ gt = 0; continue X_212; }
    }
    X_253: for (;;) { IF: if (gt <= 253) {

var stA0 = c.useAsArray___3Ljava_lang_Object_2Ljava_lang_Object_2((lcA3[(6)] || Array.at(lcA3, (6))));
var lcA4 = stA0;
var lcI5 = (lcA4).length;
var lcI6 = 0;
    }
    X_270: for (;;) { IF: if (gt <= 270) {

if ((lcI6) >= (lcI5)) { gt = 311; break IF; }
var lcA7 = (lcA4[lcI6] || Array.at(lcA4, lcI6));
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_selectedItems'];var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_proto'],(refs_io_cloudoffice_platform_cockpit_media_MediaItemView || (refs_io_cloudoffice_platform_cockpit_media_MediaItemView = io_cloudoffice_platform_cockpit_media_MediaItemView(false))).constructor.$class, lcA7);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
lcI6++;
{ gt = 0; continue X_270; }
    }
    X_311: for (;;) { IF: if (gt <= 311) {
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"displaymediaitem");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isDisplaymediaitem__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"filters");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_filters']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
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
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_itemListLoader']);
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
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_itemList']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"selectedItems");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_selectedItems']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(125));
var stA0 = invoker.toString__Ljava_lang_String_2(lcA1);
return stA0;

};
c['toString__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_media_MediaConfiguration_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_proto']);
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_media_MediaConfiguration_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lio_cloudoffice_platform_cockpit_media_MediaConfiguration_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_media_MediaConfiguration_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new io_cloudoffice_platform_cockpit_media_MediaConfiguration;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
var stA0 = lcA2;var stI1 = lcA0.isDisplaymediaitem__Z();
stA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_displaymediaitem'] = stI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_proto'];var stA1 = lcA2.getFilters__Ljava_util_List_2();
invoker.cloneList__VLjava_util_Collection_2Lnet_java_html_BrwsrCtx_2Ljava_util_Collection_2(stA0,stA1, lcA1, lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_filters']);
var stA0 = lcA2;var stA1 = lcA0.getAutocompleteinputbox__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_autocompleteinputbox'] = stA1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_itemListLoader']) !== null) { gt = 53; break IF; }
var stA1 = null;{ gt = 77; break IF; }
    }
    X_53: for (;;) { IF: if (gt <= 53) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_itemListLoader']) !== (c._TYPE())) { gt = 69; break IF; }
var stA1 = c._TYPE();{ gt = 77; break IF; }
    }
    X_69: for (;;) { IF: if (gt <= 69) {

var stA1 = lcA0.getItemListLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_77: for (;;) { IF: if (gt <= 77) {
stA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_itemListLoader'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isShowItemList__Z();
stA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_showItemList'] = stI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_proto'];var stA1 = lcA2.getItemList__Ljava_util_List_2();
invoker.cloneList__VLjava_util_Collection_2Lnet_java_html_BrwsrCtx_2Ljava_util_Collection_2(stA0,stA1, lcA1, lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_itemList']);
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_proto'];var stA1 = lcA2.getSelectedItems__Ljava_util_List_2();
invoker.cloneList__VLjava_util_Collection_2Lnet_java_html_BrwsrCtx_2Ljava_util_Collection_2(stA0,stA1, lcA1, lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_selectedItems']);
return lcA2;

    }
}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lio_cloudoffice_platform_cockpit_media_MediaConfiguration_2 = function() {
  var  lcA0 = this;
invoker.applyBindings__V(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_proto']);
return lcA0;

};
c['applyBindings__Lio_cloudoffice_platform_cockpit_media_MediaConfiguration_2'] = m;

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

var stI0 = lcA1 != null && lcA1['$instOf_io_cloudoffice_platform_cockpit_media_MediaConfiguration'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_media_MediaConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.media.MediaConfiguration');
var lcA2 = lcA1;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_displaymediaitem']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_displaymediaitem']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 46; break IF; }
return 0;
    }
    X_46: for (;;) { IF: if (gt <= 46) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_filters']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_filters']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 73; break IF; }
return 0;
    }
    X_73: for (;;) { IF: if (gt <= 73) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_autocompleteinputbox'], lcA2['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_autocompleteinputbox']);
if ((stI0) != 0) { gt = 92; break IF; }
return 0;
    }
    X_92: for (;;) { IF: if (gt <= 92) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_itemListLoader']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_itemListLoader']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 119; break IF; }
return 0;
    }
    X_119: for (;;) { IF: if (gt <= 119) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_showItemList']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_showItemList']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 144; break IF; }
return 0;
    }
    X_144: for (;;) { IF: if (gt <= 144) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_itemList']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_itemList']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 171; break IF; }
return 0;
    }
    X_171: for (;;) { IF: if (gt <= 171) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_selectedItems']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_selectedItems']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 198; break IF; }
return 0;
    }
    X_198: for (;;) { IF: if (gt <= 198) {

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
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_displaymediaitem']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_filters']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_autocompleteinputbox'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_itemListLoader']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_showItemList']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_itemList']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_selectedItems']);
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
var stA0 = lcA0.clone__Lio_cloudoffice_platform_cockpit_media_MediaConfiguration_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lio_cloudoffice_platform_cockpit_media_MediaConfiguration$Html4JavaType_2 = function() {
return c._TYPE();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_media_MediaConfiguration_2 = function(lcA0) {
return lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_media_MediaConfiguration$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lio_cloudoffice_platform_cockpit_media_MediaConfiguration_2Lio_cloudoffice_platform_cockpit_media_MediaConfiguration_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_media_MediaConfiguration_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_media_MediaConfiguration$Html4JavaType;
(refs_io_cloudoffice_platform_cockpit_media_MediaConfiguration$Html4JavaType || (refs_io_cloudoffice_platform_cockpit_media_MediaConfiguration$Html4JavaType = io_cloudoffice_platform_cockpit_media_MediaConfiguration$Html4JavaType(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_media_MediaConfiguration$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_media_MediaConfigurationfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_media_MediaConfiguration', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_media_MediaConfigurationfillInstOf });
    io_cloudoffice_platform_cockpit_media_MediaConfigurationfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/media/MediaConfiguration';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManager;
    var refs_java_lang_Boolean;
    var refs_io_cloudoffice_platform_cockpit_api_HelperItemView;
    var refs_net_java_html_json_Models;
    var refs_net_java_html_BrwsrCtx;
    var refs_io_cloudoffice_platform_cockpit_media_FilterView;
    var refs_io_cloudoffice_platform_cockpit_media_MediaItemView;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_media_MediaConfiguration$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_proto'] = null;
    this['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_displaymediaitem'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_filters'] = null;
    this['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_autocompleteinputbox'] = null;
    this['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_itemListLoader'] = null;
    this['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_showItemList'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_itemList'] = null;
    this['fld_io_cloudoffice_platform_cockpit_media_MediaConfiguration_prop_selectedItems'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_media_MediaConfiguration = registerClass(exports,'io_cloudoffice_platform_cockpit_media_MediaConfiguration',io_cloudoffice_platform_cockpit_media_MediaConfiguration);


function io_cloudoffice_platform_cockpit_media_MediaConfiguration$Html4JavaType() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_media_MediaConfiguration$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_io_cloudoffice_platform_cockpit_media_MediaConfiguration || (refs_io_cloudoffice_platform_cockpit_media_MediaConfiguration = io_cloudoffice_platform_cockpit_media_MediaConfiguration(false))).constructor.$class, (refs_io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManager || (refs_io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManager = io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManager(false))).constructor.$class, (7), 2);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"displaymediaitem", 0, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"filters", 1, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"autocompleteinputbox", 2, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemListLoader", 3, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"showItemList", 4, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemList", 5, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"selectedItems", (6), 0, 0);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"selectItem", 0);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"removeItemFromSelectedList", 1);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLio_cloudoffice_platform_cockpit_media_MediaConfiguration_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 44; break IF; }
  case 1:{ gt = 64; break IF; }
  case 2:{ gt = 78; break IF; }
  case 3:{ gt = 95; break IF; }
  case 4:{ gt = 112; break IF; }
  case 5:{ gt = 132; break IF; }
  case 6:{ gt = 146; break IF; }
  default: { gt = 160; break IF; }
}
    }
    X_44: for (;;) { IF: if (gt <= 44) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_media_MediaConfiguration || (refs_io_cloudoffice_platform_cockpit_media_MediaConfiguration = io_cloudoffice_platform_cockpit_media_MediaConfiguration(false))).access$100__Lio_cloudoffice_platform_cockpit_media_MediaConfiguration$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setDisplaymediaitem__VZ(stI1);
return;
    }
    X_64: for (;;) { IF: if (gt <= 64) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_media_MediaConfiguration || (refs_io_cloudoffice_platform_cockpit_media_MediaConfiguration = io_cloudoffice_platform_cockpit_media_MediaConfiguration(false))).access$100__Lio_cloudoffice_platform_cockpit_media_MediaConfiguration$Html4JavaType_2();
var stA1 = lcA1.getFilters__Ljava_util_List_2();
invoker.replaceValue__VLjava_util_Collection_2Ljava_lang_Class_2Ljava_lang_Object_2(stA0,stA1, (refs_io_cloudoffice_platform_cockpit_media_FilterView || (refs_io_cloudoffice_platform_cockpit_media_FilterView = io_cloudoffice_platform_cockpit_media_FilterView(false))).constructor.$class, lcA3);
return;
    }
    X_78: for (;;) { IF: if (gt <= 78) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_media_MediaConfiguration || (refs_io_cloudoffice_platform_cockpit_media_MediaConfiguration = io_cloudoffice_platform_cockpit_media_MediaConfiguration(false))).access$100__Lio_cloudoffice_platform_cockpit_media_MediaConfiguration$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setAutocompleteinputbox__VLjava_lang_String_2(stA1);
return;
    }
    X_95: for (;;) { IF: if (gt <= 95) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_media_MediaConfiguration || (refs_io_cloudoffice_platform_cockpit_media_MediaConfiguration = io_cloudoffice_platform_cockpit_media_MediaConfiguration(false))).access$100__Lio_cloudoffice_platform_cockpit_media_MediaConfiguration$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_api_HelperItemView || (refs_io_cloudoffice_platform_cockpit_api_HelperItemView = vm.io_cloudoffice_platform_cockpit_api_HelperItemView(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_api_HelperItemView']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.api.HelperItemView');
stA0.setItemListLoader__VLio_cloudoffice_platform_cockpit_api_HelperItemView_2(stA1);
return;
    }
    X_112: for (;;) { IF: if (gt <= 112) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_media_MediaConfiguration || (refs_io_cloudoffice_platform_cockpit_media_MediaConfiguration = io_cloudoffice_platform_cockpit_media_MediaConfiguration(false))).access$100__Lio_cloudoffice_platform_cockpit_media_MediaConfiguration$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setShowItemList__VZ(stI1);
return;
    }
    X_132: for (;;) { IF: if (gt <= 132) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_media_MediaConfiguration || (refs_io_cloudoffice_platform_cockpit_media_MediaConfiguration = io_cloudoffice_platform_cockpit_media_MediaConfiguration(false))).access$100__Lio_cloudoffice_platform_cockpit_media_MediaConfiguration$Html4JavaType_2();
var stA1 = lcA1.getItemList__Ljava_util_List_2();
invoker.replaceValue__VLjava_util_Collection_2Ljava_lang_Class_2Ljava_lang_Object_2(stA0,stA1, (refs_io_cloudoffice_platform_cockpit_media_MediaItemView || (refs_io_cloudoffice_platform_cockpit_media_MediaItemView = io_cloudoffice_platform_cockpit_media_MediaItemView(false))).constructor.$class, lcA3);
return;
    }
    X_146: for (;;) { IF: if (gt <= 146) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_media_MediaConfiguration || (refs_io_cloudoffice_platform_cockpit_media_MediaConfiguration = io_cloudoffice_platform_cockpit_media_MediaConfiguration(false))).access$100__Lio_cloudoffice_platform_cockpit_media_MediaConfiguration$Html4JavaType_2();
var stA1 = lcA1.getSelectedItems__Ljava_util_List_2();
invoker.replaceValue__VLjava_util_Collection_2Ljava_lang_Class_2Ljava_lang_Object_2(stA0,stA1, (refs_io_cloudoffice_platform_cockpit_media_MediaItemView || (refs_io_cloudoffice_platform_cockpit_media_MediaItemView = io_cloudoffice_platform_cockpit_media_MediaItemView(false))).constructor.$class, lcA3);
return;
    }
    X_160: for (;;) { IF: if (gt <= 160) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_media_MediaConfiguration_2I = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 44; break IF; }
  case 1:{ gt = 52; break IF; }
  case 2:{ gt = 57; break IF; }
  case 3:{ gt = 62; break IF; }
  case 4:{ gt = 67; break IF; }
  case 5:{ gt = 75; break IF; }
  case 6:{ gt = 80; break IF; }
  default: { gt = 85; break IF; }
}
    }
    X_44: for (;;) { IF: if (gt <= 44) {

var stI0 = lcA1.isDisplaymediaitem__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_52: for (;;) { IF: if (gt <= 52) {

var stA0 = lcA1.getFilters__Ljava_util_List_2();
return stA0;
    }
    X_57: for (;;) { IF: if (gt <= 57) {

var stA0 = lcA1.getAutocompleteinputbox__Ljava_lang_String_2();
return stA0;
    }
    X_62: for (;;) { IF: if (gt <= 62) {

var stA0 = lcA1.getItemListLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
return stA0;
    }
    X_67: for (;;) { IF: if (gt <= 67) {

var stI0 = lcA1.isShowItemList__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_75: for (;;) { IF: if (gt <= 75) {

var stA0 = lcA1.getItemList__Ljava_util_List_2();
return stA0;
    }
    X_80: for (;;) { IF: if (gt <= 80) {

var stA0 = lcA1.getSelectedItems__Ljava_util_List_2();
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
    m = c.call__VLio_cloudoffice_platform_cockpit_media_MediaConfiguration_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
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

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_media_MediaConfiguration || (refs_io_cloudoffice_platform_cockpit_media_MediaConfiguration = io_cloudoffice_platform_cockpit_media_MediaConfiguration(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_media_MediaConfiguration_2(lcA1);
var stA1 = invoker.toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_media_MediaItemView || (refs_io_cloudoffice_platform_cockpit_media_MediaItemView = io_cloudoffice_platform_cockpit_media_MediaItemView(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_media_MediaItemView']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.media.MediaItemView');
(refs_io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManager || (refs_io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManager = io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManager(false))).selectItem__VLio_cloudoffice_platform_cockpit_media_MediaConfiguration_2Lio_cloudoffice_platform_cockpit_media_MediaItemView_2(stA0, stA1);
return;
    }
    X_46: for (;;) { IF: if (gt <= 46) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_media_MediaConfiguration || (refs_io_cloudoffice_platform_cockpit_media_MediaConfiguration = io_cloudoffice_platform_cockpit_media_MediaConfiguration(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_media_MediaConfiguration_2(lcA1);
var stA1 = invoker.toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_media_MediaItemView || (refs_io_cloudoffice_platform_cockpit_media_MediaItemView = io_cloudoffice_platform_cockpit_media_MediaItemView(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_media_MediaItemView']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.media.MediaItemView');
(refs_io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManager || (refs_io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManager = io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManager(false))).removeItemFromSelectedList__VLio_cloudoffice_platform_cockpit_media_MediaConfiguration_2Lio_cloudoffice_platform_cockpit_media_MediaItemView_2(stA0, stA1);
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
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_media_MediaConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.media.MediaConfiguration');
var stA0 = (refs_io_cloudoffice_platform_cockpit_media_MediaConfiguration || (refs_io_cloudoffice_platform_cockpit_media_MediaConfiguration = io_cloudoffice_platform_cockpit_media_MediaConfiguration(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_media_MediaConfiguration_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLio_cloudoffice_platform_cockpit_media_MediaConfiguration_2I = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0: { gt = 20; break IF; }
  default: { gt = 25; break IF; }
}
    }
    X_20: for (;;) { IF: if (gt <= 20) {

(refs_io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManager || (refs_io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManager = io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManager(false))).itemSearchAutocomplete__VLio_cloudoffice_platform_cockpit_media_MediaConfiguration_2(lcA1);
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
    m = c.onMessage__VLio_cloudoffice_platform_cockpit_media_MediaConfiguration_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
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
    m = c.read__Lio_cloudoffice_platform_cockpit_media_MediaConfiguration_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_media_MediaConfiguration;
(refs_io_cloudoffice_platform_cockpit_media_MediaConfiguration || (refs_io_cloudoffice_platform_cockpit_media_MediaConfiguration = io_cloudoffice_platform_cockpit_media_MediaConfiguration(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_media_MediaConfiguration$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lio_cloudoffice_platform_cockpit_media_MediaConfiguration_2Lio_cloudoffice_platform_cockpit_media_MediaConfiguration_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_media_MediaConfiguration || (refs_io_cloudoffice_platform_cockpit_media_MediaConfiguration = io_cloudoffice_platform_cockpit_media_MediaConfiguration(false))).access$400__Lio_cloudoffice_platform_cockpit_media_MediaConfiguration_2Lio_cloudoffice_platform_cockpit_media_MediaConfiguration_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_media_MediaConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.media.MediaConfiguration');
lcA0.onMessage__VLio_cloudoffice_platform_cockpit_media_MediaConfiguration_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_media_MediaConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.media.MediaConfiguration');
lcA0.onChange__VLio_cloudoffice_platform_cockpit_media_MediaConfiguration_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lio_cloudoffice_platform_cockpit_media_MediaConfiguration_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_media_MediaConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.media.MediaConfiguration');
var stA0 = lcA0.cloneTo__Lio_cloudoffice_platform_cockpit_media_MediaConfiguration_2Lio_cloudoffice_platform_cockpit_media_MediaConfiguration_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_media_MediaConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.media.MediaConfiguration');
lcA0.call__VLio_cloudoffice_platform_cockpit_media_MediaConfiguration_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_media_MediaConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.media.MediaConfiguration');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_media_MediaConfiguration_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_media_MediaConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.media.MediaConfiguration');
lcA0.setValue__VLio_cloudoffice_platform_cockpit_media_MediaConfiguration_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_media_MediaConfiguration$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_media_MediaConfiguration$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_media_MediaConfiguration$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_media_MediaConfiguration$Html4JavaTypefillInstOf });
    io_cloudoffice_platform_cockpit_media_MediaConfiguration$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/media/MediaConfiguration$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_media_MediaConfiguration;
    var refs_io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManager;
    var refs_org_netbeans_html_json_spi_Proto$Type;
    var refs_java_lang_Boolean;
    var refs_io_cloudoffice_platform_cockpit_media_FilterView;
    var refs_java_lang_String;
    var refs_io_cloudoffice_platform_cockpit_api_HelperItemView;
    var refs_io_cloudoffice_platform_cockpit_media_MediaItemView;
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
vm.io_cloudoffice_platform_cockpit_media_MediaConfiguration$Html4JavaType = io_cloudoffice_platform_cockpit_media_MediaConfiguration$Html4JavaType;

vm.net_java_html_json_Models = link('net/java/html/json/Models', function(f) { vm.net_java_html_json_Models =  f; });
vm.io_cloudoffice_platform_cockpit_api_HelperItemView = link('io/cloudoffice/platform/cockpit/api/HelperItemView', function(f) { vm.io_cloudoffice_platform_cockpit_api_HelperItemView =  f; });

function io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManager() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManager;
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
    m = c.itemSearchAutocomplete__VLio_cloudoffice_platform_cockpit_media_MediaConfiguration_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0.getAutocompleteinputbox__Ljava_lang_String_2();
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA0);
if ((stI0) == 0) { gt = 48; break IF; }
var stA0 = lcA0.getItemListLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
invoker.setActive__VZ(stA0,1);
lcA0.setShowItemList__VZ(1);
var stA0 = new io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManager$GetRelatedMediaAsyncRequest;
var stA1 = stA0;var stA2 = "\"/VirtualItem-portlet.searchitem/autoCompleteSearch\"";var stA3 = new io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManager$GetRelatedMediaAsyncRequestCallback;
(refs_io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManager$GetRelatedMediaAsyncRequestCallback || (refs_io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManager$GetRelatedMediaAsyncRequestCallback = io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManager$GetRelatedMediaAsyncRequestCallback(false))).constructor.cons__V.call(stA3);
(refs_io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManager$GetRelatedMediaAsyncRequest || (refs_io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManager$GetRelatedMediaAsyncRequest = io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManager$GetRelatedMediaAsyncRequest(false))).constructor.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_ServerCallback_2Lio_cloudoffice_platform_cockpit_media_MediaConfiguration_2.call(stA1, stA2, stA3, lcA0);
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
c['itemSearchAutocomplete__VLio_cloudoffice_platform_cockpit_media_MediaConfiguration_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.selectItem__VLio_cloudoffice_platform_cockpit_media_MediaConfiguration_2Lio_cloudoffice_platform_cockpit_media_MediaItemView_2 = function(lcA0, lcA1) {
lcA0.setAutocompleteinputbox__VLjava_lang_String_2("");
var stA0 = lcA0.getSelectedItems__Ljava_util_List_2();
invoker.clear__V(stA0);
var stA0 = lcA0.getSelectedItems__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA1);
return;

};
c['selectItem__VLio_cloudoffice_platform_cockpit_media_MediaConfiguration_2Lio_cloudoffice_platform_cockpit_media_MediaItemView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.removeItemFromSelectedList__VLio_cloudoffice_platform_cockpit_media_MediaConfiguration_2Lio_cloudoffice_platform_cockpit_media_MediaItemView_2 = function(lcA0, lcA1) {
var stA0 = lcA0.getSelectedItems__Ljava_util_List_2();
var stI0 = invoker.remove__ZLjava_lang_Object_2(stA0,lcA1);
return;

};
c['removeItemFromSelectedList__VLio_cloudoffice_platform_cockpit_media_MediaConfiguration_2Lio_cloudoffice_platform_cockpit_media_MediaItemView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManagerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManager', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManagerfillInstOf });
    io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManagerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/media/MediaComponent$MediaAdminManager';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManager$GetRelatedMediaAsyncRequestCallback;
    var refs_io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManager$GetRelatedMediaAsyncRequest;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManager = registerClass(exports,'io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManager',io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManager);


function io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManager$GetRelatedMediaAsyncRequestCallback() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManager$GetRelatedMediaAsyncRequestCallback;
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
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_media_MediaConfiguration']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.media.MediaConfiguration');
var lcA2 = stA0;
var stA0 = lcA2.getItemList__Ljava_util_List_2();
invoker.clear__V(stA0);
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](lcA1);
if ((stI0) == 0) { gt = 76; break IF; }
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Z'](lcA1, 1);
var stA0 = invoker.getArray__Ljava_util_List_2(stA0);
var lcA3 = stA0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA3);
var lcA4 = stA0;
    }
    X_44: for (;;) { IF: if (gt <= 44) {

var stI0 = invoker.hasNext__Z(lcA4);
if ((stI0) == 0) { gt = 76; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA4);
if (stA0 !== null && !stA0['$instOf_java_util_Map']) vm.java_lang_Class(false).castEx(stA0, 'java.util.Map');
var lcA5 = stA0;
c.addMediaByFilterSelection__VLjava_util_Map_2Lio_cloudoffice_platform_cockpit_media_MediaConfiguration_2.call(lcA0, lcA5, lcA2);
{ gt = 0; continue X_44; }
    }
    X_76: for (;;) { IF: if (gt <= 76) {

var stA0 = lcA2.getItemListLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
invoker.setActive__VZ(stA0,0);
return;

    }
}}}
};
c['process__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.addMediaByFilterSelection__VLjava_util_Map_2Lio_cloudoffice_platform_cockpit_media_MediaConfiguration_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcA3 = "";
var stA0 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA1,"mimetype");
var lcA4 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_Object_2'](lcA4);
if ((stI0) == 0) { gt = 213; break IF; }
var stA0 = new io_cloudoffice_platform_cockpit_media_MediaItemView;
(refs_io_cloudoffice_platform_cockpit_media_MediaItemView || (refs_io_cloudoffice_platform_cockpit_media_MediaItemView = io_cloudoffice_platform_cockpit_media_MediaItemView(false))).constructor.cons__V.call(stA0);
var lcA5 = stA0;
var stA0 = lcA5;var stA1 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA1,"itemId");
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemId__VLjava_lang_String_2(stA1);
var stA0 = lcA5;var stA1 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA1,"itemName");
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemName__VLjava_lang_String_2(stA1);
var stA0 = lcA5;var stA1 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA1,"itemType");
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemType__VLjava_lang_String_2(stA1);
var stA0 = lcA5;var stA1 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA1,"itemType");
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
var stA2 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA1,"mimetype");
if (stA2 !== null && !stA2['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA2, 'java.lang.String');
var stA1 = (refs_io_cloudoffice_platform_cockpit_api_IconModel || (refs_io_cloudoffice_platform_cockpit_api_IconModel = vm.io_cloudoffice_platform_cockpit_api_IconModel(false)))['getItemTypeIconClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'](stA1, stA2);
stA0.setItemTypeIconCss__VLjava_lang_String_2(stA1);
var stA0 = lcA5;var stA1 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA1,"thumbnailURL");
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemUrl__VLjava_lang_String_2(stA1);
var stA0 = invoker.toString__Ljava_lang_String_2(lcA4);
var lcA3 = stA0;
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA3,"image/png");
if ((stI0) != 0) { gt = 157; break IF; }
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA3,"image/jpg");
if ((stI0) != 0) { gt = 157; break IF; }
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA3,"image/jpeg");
if ((stI0) == 0) { gt = 182; break IF; }
    }
    X_157: for (;;) { IF: if (gt <= 157) {

var stI0 = c.isFilterSelected__ZLio_cloudoffice_platform_cockpit_media_MediaConfiguration_2Ljava_lang_String_2.call(lcA0, lcA2, "IMAGE");
if ((stI0) == 0) { gt = 182; break IF; }
var stA0 = lcA2.getItemList__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA5);
{ gt = 213; break IF; }
    }
    X_182: for (;;) { IF: if (gt <= 182) {

var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA3,"application/pdf");
if ((stI0) == 0) { gt = 213; break IF; }
var stI0 = c.isFilterSelected__ZLio_cloudoffice_platform_cockpit_media_MediaConfiguration_2Ljava_lang_String_2.call(lcA0, lcA2, "FILE");
if ((stI0) == 0) { gt = 213; break IF; }
var stA0 = lcA2.getItemList__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA5);
    }
    X_213: for (;;) { IF: if (gt <= 213) {
return;

    }
}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.isFilterSelected__ZLio_cloudoffice_platform_cockpit_media_MediaConfiguration_2Ljava_lang_String_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA1.getFilters__Ljava_util_List_2();
var lcA3 = stA0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA3);
var lcA4 = stA0;
    }
    X_13: for (;;) { IF: if (gt <= 13) {

var stI0 = invoker.hasNext__Z(lcA4);
if ((stI0) == 0) { gt = 67; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA4);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_media_FilterView']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.media.FilterView');
var lcA5 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](lcA2);
if ((stI0) == 0) { gt = 64; break IF; }
var stA0 = lcA2;var stA1 = lcA5.getFilterType__Ljava_lang_String_2();
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(stA0,stA1);
if ((stI0) == 0) { gt = 64; break IF; }
var stI0 = lcA5.isIsSelected__Z();
if ((stI0) == 0) { gt = 64; break IF; }
return 1;
    }
    X_64: for (;;) { IF: if (gt <= 64) {
{ gt = 0; continue X_13; }
    }
    X_67: for (;;) { IF: if (gt <= 67) {

return 0;

    }
}}}}
};
    m.access = 2;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManager$GetRelatedMediaAsyncRequestCallbackfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManager$GetRelatedMediaAsyncRequestCallback', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManager$GetRelatedMediaAsyncRequestCallbackfillInstOf });
    io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManager$GetRelatedMediaAsyncRequestCallbackfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/media/MediaComponent$MediaAdminManager$GetRelatedMediaAsyncRequestCallback';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_ServerCallback;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_media_MediaItemView;
    var refs_io_cloudoffice_platform_cockpit_api_IconModel;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManager$GetRelatedMediaAsyncRequestCallback = registerClass(exports,'io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManager$GetRelatedMediaAsyncRequestCallback',io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManager$GetRelatedMediaAsyncRequestCallback);

vm.io_cloudoffice_platform_cockpit_api_IconModel = link('io/cloudoffice/platform/cockpit/api/IconModel', function(f) { vm.io_cloudoffice_platform_cockpit_api_IconModel =  f; });
vm.io_cloudoffice_platform_cockpit_api_ServerCallback = link('io/cloudoffice/platform/cockpit/api/ServerCallback', function(f) { vm.io_cloudoffice_platform_cockpit_api_ServerCallback =  f; });

function io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManager$GetRelatedMediaAsyncRequest() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManager$GetRelatedMediaAsyncRequest;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_api_AsyncRequest(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._map = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManager$GetRelatedMediaAsyncRequest_map'] = v; return this['fld_io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManager$GetRelatedMediaAsyncRequest_map']; };
    m = CLS.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_ServerCallback_2Lio_cloudoffice_platform_cockpit_media_MediaConfiguration_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
(refs_io_cloudoffice_platform_cockpit_api_AsyncRequest || (refs_io_cloudoffice_platform_cockpit_api_AsyncRequest = vm.io_cloudoffice_platform_cockpit_api_AsyncRequest(false))).constructor['cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_ServerCallback_2Ljava_lang_Object_2'].call(lcA0, lcA1, lcA2, lcA3);
lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManager$GetRelatedMediaAsyncRequest_map'] = null;
c.prepareRequestParams__VLio_cloudoffice_platform_cockpit_media_MediaConfiguration_2.call(lcA0, lcA3);
return;

};
CLS['cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_ServerCallback_2Lio_cloudoffice_platform_cockpit_media_MediaConfiguration_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.prepareRequestParams__VLio_cloudoffice_platform_cockpit_media_MediaConfiguration_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA1.getAutocompleteinputbox__Ljava_lang_String_2();
var lcA2 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](lcA2);
if ((stI0) == 0) { gt = 134; break IF; }
var stA0 = lcA0;var stA1 = new vm.java_util_HashMap;
(refs_java_util_HashMap || (refs_java_util_HashMap = vm.java_util_HashMap(false))).constructor['cons__V'].call(stA1);
stA0['fld_io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManager$GetRelatedMediaAsyncRequest_map'] = stA1;
var stA0 = invoker.getMap__Ljava_util_Map_2(lcA0);
var stA1 = "searchKey";var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"'");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,lcA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"'");
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = invoker.getMap__Ljava_util_Map_2(lcA0);
var stA1 = "fromClause";var stA2 = c.getFilters__Ljava_util_List_2Lio_cloudoffice_platform_cockpit_media_MediaConfiguration_2.call(lcA0, lcA1);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = invoker.getMap__Ljava_util_Map_2(lcA0);
var stA1 = "existingItems";var stA2 = c.getExistingItems__Ljava_util_List_2Lio_cloudoffice_platform_cockpit_media_MediaConfiguration_2.call(lcA0, lcA1);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = new vm.java_util_HashMap;
(refs_java_util_HashMap || (refs_java_util_HashMap = vm.java_util_HashMap(false))).constructor['cons__V'].call(stA0);
var lcA3 = stA0;
var stA0 = lcA3;var stA1 = "scopeGroup";var stA2 = (refs_io_cloudoffice_platform_cockpit_api_Session || (refs_io_cloudoffice_platform_cockpit_api_Session = vm.io_cloudoffice_platform_cockpit_api_Session(false)))['getCompany__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var stA2 = invoker.getValue__Ljava_lang_String_2Ljava_lang_String_2(stA2,"itemId");
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = invoker.getMap__Ljava_util_Map_2(lcA0);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,"attributes", lcA3);
{ gt = 161; break IF; }
    }
    X_134: for (;;) { IF: if (gt <= 134) {

lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManager$GetRelatedMediaAsyncRequest_map'] = null;
lcA1.setShowItemList__VZ(0);
var stA0 = lcA1.getItemListLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
invoker.setActive__VZ(stA0,0);
var stA0 = lcA1.getItemList__Ljava_util_List_2();
invoker.clear__V(stA0);
    }
    X_161: for (;;) { IF: if (gt <= 161) {
return;

    }
}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.getFilters__Ljava_util_List_2Lio_cloudoffice_platform_cockpit_media_MediaConfiguration_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new vm.java_util_ArrayList;
(refs_java_util_ArrayList || (refs_java_util_ArrayList = vm.java_util_ArrayList(false))).constructor['cons__V'].call(stA0);
var lcA2 = stA0;
var stA0 = lcA1.getFilters__Ljava_util_List_2();
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA3 = stA0;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

var stI0 = invoker.hasNext__Z(lcA3);
if ((stI0) == 0) { gt = 86; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA3);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_media_FilterView']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.media.FilterView');
var lcA4 = stA0;
var stI0 = lcA4.isIsSelected__Z();
if ((stI0) == 0) { gt = 83; break IF; }
var stA0 = lcA4.getFilterType__Ljava_lang_String_2();
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(stA0,"IMAGE");
if ((stI0) == 0) { gt = 71; break IF; }
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA2,"FILE");
{ gt = 83; break IF; }
    }
    X_71: for (;;) { IF: if (gt <= 71) {

var stA0 = lcA2;var stA1 = lcA4.getFilterType__Ljava_lang_String_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
    }
    X_83: for (;;) { IF: if (gt <= 83) {
{ gt = 0; continue X_18; }
    }
    X_86: for (;;) { IF: if (gt <= 86) {
var stA0 = new vm.java_util_ArrayList;
var stA1 = stA0;var stA2 = new vm.java_util_HashSet;
(refs_java_util_HashSet || (refs_java_util_HashSet = vm.java_util_HashSet(false))).constructor['cons__VLjava_util_Collection_2'].call(stA2, lcA2);
(refs_java_util_ArrayList || (refs_java_util_ArrayList = vm.java_util_ArrayList(false))).constructor['cons__VLjava_util_Collection_2'].call(stA1, stA2);
return stA0;

    }
}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.getExistingItems__Ljava_util_List_2Lio_cloudoffice_platform_cockpit_media_MediaConfiguration_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new vm.java_util_ArrayList;
(refs_java_util_ArrayList || (refs_java_util_ArrayList = vm.java_util_ArrayList(false))).constructor['cons__V'].call(stA0);
var lcA2 = stA0;
var stA0 = lcA1.getSelectedItems__Ljava_util_List_2();
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA3 = stA0;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

var stI0 = invoker.hasNext__Z(lcA3);
if ((stI0) == 0) { gt = 89; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA3);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_media_MediaItemView']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.media.MediaItemView');
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
return lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManager$GetRelatedMediaAsyncRequest_map'];

};
c['getMap__Ljava_util_Map_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setMap__VLjava_util_Map_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManager$GetRelatedMediaAsyncRequest_map'] = lcA1;
return;

};
c['setMap__VLjava_util_Map_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManager$GetRelatedMediaAsyncRequestfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManager$GetRelatedMediaAsyncRequest', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManager$GetRelatedMediaAsyncRequestfillInstOf });
    io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManager$GetRelatedMediaAsyncRequestfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/media/MediaComponent$MediaAdminManager$GetRelatedMediaAsyncRequest';
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
    var refs_java_util_HashSet;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManager$GetRelatedMediaAsyncRequest_map'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManager$GetRelatedMediaAsyncRequest = registerClass(exports,'io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManager$GetRelatedMediaAsyncRequest',io_cloudoffice_platform_cockpit_media_MediaComponent$MediaAdminManager$GetRelatedMediaAsyncRequest);

vm.java_util_HashSet = link('java/util/HashSet', function(f) { vm.java_util_HashSet =  f; });
vm.java_util_ArrayList = link('java/util/ArrayList', function(f) { vm.java_util_ArrayList =  f; });
vm.io_cloudoffice_platform_cockpit_api_Session = link('io/cloudoffice/platform/cockpit/api/Session', function(f) { vm.io_cloudoffice_platform_cockpit_api_Session =  f; });
vm.java_util_HashMap = link('java/util/HashMap', function(f) { vm.java_util_HashMap =  f; });
vm.io_cloudoffice_platform_cockpit_api_AsyncRequest = link('io/cloudoffice/platform/cockpit/api/AsyncRequest', function(f) { vm.io_cloudoffice_platform_cockpit_api_AsyncRequest =  f; });

function io_cloudoffice_platform_cockpit_media_MediaView() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_media_MediaView;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_media_MediaView_proto'] = v; return this['fld_io_cloudoffice_platform_cockpit_media_MediaView_proto']; };
  m = c._prop_instance = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_instance'] = v; return this['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_instance']; };
  m = c._prop_designerMode = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_designerMode'] = v; return this['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_designerMode']; };
  m = c._prop_configuration = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_configuration'] = v; return this['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_configuration']; };
  m = c._prop_displaymediaitem = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_displaymediaitem'] = v; return this['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_displaymediaitem']; };
  m = c._prop_mediaitem = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_mediaitem'] = v; return this['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_mediaitem']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_io_cloudoffice_platform_cockpit_media_MediaComponent || (refs_io_cloudoffice_platform_cockpit_media_MediaComponent = io_cloudoffice_platform_cockpit_media_MediaComponent(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.getInstance__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_proto'],"instance");
return lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_instance'];

};
c['getInstance__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setInstance__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_instance'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_instance'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_proto'],"instance", lcA2, lcA1);
return;

    }
}}
};
c['setInstance__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isDesignerMode__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_proto'],"designerMode");
return lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_designerMode'];

};
c['isDesignerMode__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setDesignerMode__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_designerMode']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_designerMode'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_proto'];var stA1 = "designerMode";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setDesignerMode__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getConfiguration__Lio_cloudoffice_platform_cockpit_media_MediaConfiguration_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_proto'],"configuration");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_configuration']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new io_cloudoffice_platform_cockpit_media_MediaConfiguration;
(refs_io_cloudoffice_platform_cockpit_media_MediaConfiguration || (refs_io_cloudoffice_platform_cockpit_media_MediaConfiguration = io_cloudoffice_platform_cockpit_media_MediaConfiguration(false))).constructor.cons__V.call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_configuration'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_configuration'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_configuration']['$instOf_io_cloudoffice_platform_cockpit_media_MediaConfiguration']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_configuration'], 'io.cloudoffice.platform.cockpit.media.MediaConfiguration');
return lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_configuration'];

    }
}}
};
c['getConfiguration__Lio_cloudoffice_platform_cockpit_media_MediaConfiguration_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setConfiguration__VLio_cloudoffice_platform_cockpit_media_MediaConfiguration_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_configuration'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_configuration'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_proto'],"configuration", lcA2, lcA1);
return;

    }
}}
};
c['setConfiguration__VLio_cloudoffice_platform_cockpit_media_MediaConfiguration_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isDisplaymediaitem__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_proto'],"displaymediaitem");
return lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_displaymediaitem'];

};
c['isDisplaymediaitem__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setDisplaymediaitem__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_displaymediaitem']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_displaymediaitem'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_proto'];var stA1 = "displaymediaitem";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setDisplaymediaitem__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getMediaitem__Lio_cloudoffice_platform_cockpit_media_MediaItemView_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_proto'],"mediaitem");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_mediaitem']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new io_cloudoffice_platform_cockpit_media_MediaItemView;
(refs_io_cloudoffice_platform_cockpit_media_MediaItemView || (refs_io_cloudoffice_platform_cockpit_media_MediaItemView = io_cloudoffice_platform_cockpit_media_MediaItemView(false))).constructor.cons__V.call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_mediaitem'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_mediaitem'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_mediaitem']['$instOf_io_cloudoffice_platform_cockpit_media_MediaItemView']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_mediaitem'], 'io.cloudoffice.platform.cockpit.media.MediaItemView');
return lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_mediaitem'];

    }
}}
};
c['getMediaitem__Lio_cloudoffice_platform_cockpit_media_MediaItemView_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setMediaitem__VLio_cloudoffice_platform_cockpit_media_MediaItemView_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_mediaitem'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_mediaitem'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_proto'],"mediaitem", lcA2, lcA1);
return;

    }
}}
};
c['setMediaitem__VLio_cloudoffice_platform_cockpit_media_MediaItemView_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2(c._TYPE(),lcA0, lcA1);
stA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_proto'] = stA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_configuration'] = c._TYPE();
lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_mediaitem'] = c._TYPE();
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLjava_lang_String_2ZLio_cloudoffice_platform_cockpit_media_MediaConfiguration_2ZLio_cloudoffice_platform_cockpit_media_MediaItemView_2 = function(lcA1, lcI2, lcA3, lcI4, lcA5) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_instance'] = lcA1;
lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_designerMode'] = lcI2;
lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_configuration'] = lcA3;
lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_displaymediaitem'] = lcI4;
lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_mediaitem'] = lcA5;
return;

};
CLS['cons__VLjava_lang_String_2ZLio_cloudoffice_platform_cockpit_media_MediaConfiguration_2ZLio_cloudoffice_platform_cockpit_media_MediaItemView_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 5);
var lcA3 = stA0;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 5);
Array.at(stA2, 0, "instance");
Array.at(stA2, 1, "designerMode");
Array.at(stA2, 2, "configuration");
Array.at(stA2, 3, "displaymediaitem");
Array.at(stA2, 4, "mediaitem");
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
if ((lcA3[0] || Array.at(lcA3, 0)) !== null && !(lcA3[0] || Array.at(lcA3, 0))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[0] || Array.at(lcA3, 0)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_instance'] = (lcA3[0] || Array.at(lcA3, 0));
var stA0 = lcA0;if (((lcA3[1] || Array.at(lcA3, 1))) !== null) { gt = 69; break IF; }
var stI1 = 0;{ gt = 81; break IF; }
    }
    X_69: for (;;) { IF: if (gt <= 69) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[1] || Array.at(lcA3, 1)));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_81: for (;;) { IF: if (gt <= 81) {
stA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_designerMode'] = stI1;
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_proto'],(refs_io_cloudoffice_platform_cockpit_media_MediaConfiguration || (refs_io_cloudoffice_platform_cockpit_media_MediaConfiguration = io_cloudoffice_platform_cockpit_media_MediaConfiguration(false))).constructor.$class, (lcA3[2] || Array.at(lcA3, 2)));
stA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_configuration'] = stA1;
var stA0 = lcA0;if (((lcA3[3] || Array.at(lcA3, 3))) !== null) { gt = 111; break IF; }
var stI1 = 0;{ gt = 123; break IF; }
    }
    X_111: for (;;) { IF: if (gt <= 111) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[3] || Array.at(lcA3, 3)));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_123: for (;;) { IF: if (gt <= 123) {
stA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_displaymediaitem'] = stI1;
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_proto'],(refs_io_cloudoffice_platform_cockpit_media_MediaItemView || (refs_io_cloudoffice_platform_cockpit_media_MediaItemView = io_cloudoffice_platform_cockpit_media_MediaItemView(false))).constructor.$class, (lcA3[4] || Array.at(lcA3, 4)));
stA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_mediaitem'] = stA1;
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
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_configuration']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"displaymediaitem");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isDisplaymediaitem__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"mediaitem");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_mediaitem']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(125));
var stA0 = invoker.toString__Ljava_lang_String_2(lcA1);
return stA0;

};
c['toString__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_media_MediaView_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_proto']);
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_media_MediaView_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lio_cloudoffice_platform_cockpit_media_MediaView_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_media_MediaView_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new io_cloudoffice_platform_cockpit_media_MediaView;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = lcA0.getInstance__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_instance'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isDesignerMode__Z();
stA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_designerMode'] = stI1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_configuration']) !== null) { gt = 37; break IF; }
var stA1 = null;{ gt = 61; break IF; }
    }
    X_37: for (;;) { IF: if (gt <= 37) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_configuration']) !== (c._TYPE())) { gt = 53; break IF; }
var stA1 = c._TYPE();{ gt = 61; break IF; }
    }
    X_53: for (;;) { IF: if (gt <= 53) {

var stA1 = lcA0.getConfiguration__Lio_cloudoffice_platform_cockpit_media_MediaConfiguration_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_61: for (;;) { IF: if (gt <= 61) {
stA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_configuration'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isDisplaymediaitem__Z();
stA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_displaymediaitem'] = stI1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_mediaitem']) !== null) { gt = 84; break IF; }
var stA1 = null;{ gt = 108; break IF; }
    }
    X_84: for (;;) { IF: if (gt <= 84) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_mediaitem']) !== (c._TYPE())) { gt = 100; break IF; }
var stA1 = c._TYPE();{ gt = 108; break IF; }
    }
    X_100: for (;;) { IF: if (gt <= 100) {

var stA1 = lcA0.getMediaitem__Lio_cloudoffice_platform_cockpit_media_MediaItemView_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_108: for (;;) { IF: if (gt <= 108) {
stA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_mediaitem'] = stA1;
return lcA2;

    }
}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lio_cloudoffice_platform_cockpit_media_MediaView_2 = function() {
  var  lcA0 = this;
invoker.applyBindings__V(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_proto']);
return lcA0;

};
c['applyBindings__Lio_cloudoffice_platform_cockpit_media_MediaView_2'] = m;

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

var stI0 = lcA1 != null && lcA1['$instOf_io_cloudoffice_platform_cockpit_media_MediaView'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_media_MediaView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.media.MediaView');
var lcA2 = lcA1;
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_instance'], lcA2['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_instance']);
if ((stI0) != 0) { gt = 40; break IF; }
return 0;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_designerMode']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_designerMode']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 65; break IF; }
return 0;
    }
    X_65: for (;;) { IF: if (gt <= 65) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_configuration']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_configuration']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 92; break IF; }
return 0;
    }
    X_92: for (;;) { IF: if (gt <= 92) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_displaymediaitem']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_displaymediaitem']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 117; break IF; }
return 0;
    }
    X_117: for (;;) { IF: if (gt <= 117) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_mediaitem']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_mediaitem']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 144; break IF; }
return 0;
    }
    X_144: for (;;) { IF: if (gt <= 144) {

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
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_instance'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_designerMode']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_configuration']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_displaymediaitem']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_mediaitem']);
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
var stA0 = lcA0.clone__Lio_cloudoffice_platform_cockpit_media_MediaView_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lio_cloudoffice_platform_cockpit_media_MediaView$Html4JavaType_2 = function() {
return c._TYPE();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_media_MediaView_2 = function(lcA0) {
return lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaView_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_media_MediaView$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lio_cloudoffice_platform_cockpit_media_MediaView_2Lio_cloudoffice_platform_cockpit_media_MediaView_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_media_MediaView_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_media_MediaView$Html4JavaType;
(refs_io_cloudoffice_platform_cockpit_media_MediaView$Html4JavaType || (refs_io_cloudoffice_platform_cockpit_media_MediaView$Html4JavaType = io_cloudoffice_platform_cockpit_media_MediaView$Html4JavaType(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_media_MediaView$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_media_MediaViewfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_media_MediaView', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_media_MediaViewfillInstOf });
    io_cloudoffice_platform_cockpit_media_MediaViewfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/media/MediaView';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_media_MediaComponent;
    var refs_java_lang_Boolean;
    var refs_io_cloudoffice_platform_cockpit_media_MediaConfiguration;
    var refs_net_java_html_json_Models;
    var refs_io_cloudoffice_platform_cockpit_media_MediaItemView;
    var refs_net_java_html_BrwsrCtx;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_media_MediaView$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_media_MediaView_proto'] = null;
    this['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_instance'] = null;
    this['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_designerMode'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_configuration'] = null;
    this['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_displaymediaitem'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_media_MediaView_prop_mediaitem'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_media_MediaView = registerClass(exports,'io_cloudoffice_platform_cockpit_media_MediaView',io_cloudoffice_platform_cockpit_media_MediaView);


function io_cloudoffice_platform_cockpit_media_MediaView$Html4JavaType() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_media_MediaView$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_io_cloudoffice_platform_cockpit_media_MediaView || (refs_io_cloudoffice_platform_cockpit_media_MediaView = io_cloudoffice_platform_cockpit_media_MediaView(false))).constructor.$class, (refs_io_cloudoffice_platform_cockpit_media_MediaComponent || (refs_io_cloudoffice_platform_cockpit_media_MediaComponent = io_cloudoffice_platform_cockpit_media_MediaComponent(false))).constructor.$class, 5, 4);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"instance", 0, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"designerMode", 1, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"configuration", 2, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"displaymediaitem", 3, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"mediaitem", 4, 0, 0);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"openConfig", 0);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"closeConfigurationPanel", 1);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"save", 2);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"resetConfiguration", 3);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLio_cloudoffice_platform_cockpit_media_MediaView_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 36; break IF; }
  case 1:{ gt = 53; break IF; }
  case 2:{ gt = 73; break IF; }
  case 3:{ gt = 90; break IF; }
  case 4:{ gt = 110; break IF; }
  default: { gt = 127; break IF; }
}
    }
    X_36: for (;;) { IF: if (gt <= 36) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_media_MediaView || (refs_io_cloudoffice_platform_cockpit_media_MediaView = io_cloudoffice_platform_cockpit_media_MediaView(false))).access$100__Lio_cloudoffice_platform_cockpit_media_MediaView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setInstance__VLjava_lang_String_2(stA1);
return;
    }
    X_53: for (;;) { IF: if (gt <= 53) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_media_MediaView || (refs_io_cloudoffice_platform_cockpit_media_MediaView = io_cloudoffice_platform_cockpit_media_MediaView(false))).access$100__Lio_cloudoffice_platform_cockpit_media_MediaView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setDesignerMode__VZ(stI1);
return;
    }
    X_73: for (;;) { IF: if (gt <= 73) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_media_MediaView || (refs_io_cloudoffice_platform_cockpit_media_MediaView = io_cloudoffice_platform_cockpit_media_MediaView(false))).access$100__Lio_cloudoffice_platform_cockpit_media_MediaView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_media_MediaConfiguration || (refs_io_cloudoffice_platform_cockpit_media_MediaConfiguration = io_cloudoffice_platform_cockpit_media_MediaConfiguration(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_media_MediaConfiguration']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.media.MediaConfiguration');
stA0.setConfiguration__VLio_cloudoffice_platform_cockpit_media_MediaConfiguration_2(stA1);
return;
    }
    X_90: for (;;) { IF: if (gt <= 90) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_media_MediaView || (refs_io_cloudoffice_platform_cockpit_media_MediaView = io_cloudoffice_platform_cockpit_media_MediaView(false))).access$100__Lio_cloudoffice_platform_cockpit_media_MediaView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setDisplaymediaitem__VZ(stI1);
return;
    }
    X_110: for (;;) { IF: if (gt <= 110) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_media_MediaView || (refs_io_cloudoffice_platform_cockpit_media_MediaView = io_cloudoffice_platform_cockpit_media_MediaView(false))).access$100__Lio_cloudoffice_platform_cockpit_media_MediaView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_media_MediaItemView || (refs_io_cloudoffice_platform_cockpit_media_MediaItemView = io_cloudoffice_platform_cockpit_media_MediaItemView(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_media_MediaItemView']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.media.MediaItemView');
stA0.setMediaitem__VLio_cloudoffice_platform_cockpit_media_MediaItemView_2(stA1);
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
    m = c.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_media_MediaView_2I = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 36; break IF; }
  case 1:{ gt = 41; break IF; }
  case 2:{ gt = 49; break IF; }
  case 3:{ gt = 54; break IF; }
  case 4:{ gt = 62; break IF; }
  default: { gt = 67; break IF; }
}
    }
    X_36: for (;;) { IF: if (gt <= 36) {

var stA0 = lcA1.getInstance__Ljava_lang_String_2();
return stA0;
    }
    X_41: for (;;) { IF: if (gt <= 41) {

var stI0 = lcA1.isDesignerMode__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_49: for (;;) { IF: if (gt <= 49) {

var stA0 = lcA1.getConfiguration__Lio_cloudoffice_platform_cockpit_media_MediaConfiguration_2();
return stA0;
    }
    X_54: for (;;) { IF: if (gt <= 54) {

var stI0 = lcA1.isDisplaymediaitem__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_62: for (;;) { IF: if (gt <= 62) {

var stA0 = lcA1.getMediaitem__Lio_cloudoffice_platform_cockpit_media_MediaItemView_2();
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
    m = c.call__VLio_cloudoffice_platform_cockpit_media_MediaView_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
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

(refs_io_cloudoffice_platform_cockpit_media_MediaComponent || (refs_io_cloudoffice_platform_cockpit_media_MediaComponent = io_cloudoffice_platform_cockpit_media_MediaComponent(false))).openConfig__VLio_cloudoffice_platform_cockpit_media_MediaView_2(lcA1);
return;
    }
    X_37: for (;;) { IF: if (gt <= 37) {

(refs_io_cloudoffice_platform_cockpit_media_MediaComponent || (refs_io_cloudoffice_platform_cockpit_media_MediaComponent = io_cloudoffice_platform_cockpit_media_MediaComponent(false))).closeConfigurationPanel__VLio_cloudoffice_platform_cockpit_media_MediaView_2(lcA1);
return;
    }
    X_42: for (;;) { IF: if (gt <= 42) {

(refs_io_cloudoffice_platform_cockpit_media_MediaComponent || (refs_io_cloudoffice_platform_cockpit_media_MediaComponent = io_cloudoffice_platform_cockpit_media_MediaComponent(false))).save__VLio_cloudoffice_platform_cockpit_media_MediaView_2(lcA1);
return;
    }
    X_47: for (;;) { IF: if (gt <= 47) {

(refs_io_cloudoffice_platform_cockpit_media_MediaComponent || (refs_io_cloudoffice_platform_cockpit_media_MediaComponent = io_cloudoffice_platform_cockpit_media_MediaComponent(false))).resetConfiguration__VLio_cloudoffice_platform_cockpit_media_MediaView_2(lcA1);
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
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_media_MediaView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.media.MediaView');
var stA0 = (refs_io_cloudoffice_platform_cockpit_media_MediaView || (refs_io_cloudoffice_platform_cockpit_media_MediaView = io_cloudoffice_platform_cockpit_media_MediaView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_media_MediaView_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLio_cloudoffice_platform_cockpit_media_MediaView_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLio_cloudoffice_platform_cockpit_media_MediaView_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
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
    m = c.read__Lio_cloudoffice_platform_cockpit_media_MediaView_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_media_MediaView;
(refs_io_cloudoffice_platform_cockpit_media_MediaView || (refs_io_cloudoffice_platform_cockpit_media_MediaView = io_cloudoffice_platform_cockpit_media_MediaView(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_media_MediaView$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lio_cloudoffice_platform_cockpit_media_MediaView_2Lio_cloudoffice_platform_cockpit_media_MediaView_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_media_MediaView || (refs_io_cloudoffice_platform_cockpit_media_MediaView = io_cloudoffice_platform_cockpit_media_MediaView(false))).access$400__Lio_cloudoffice_platform_cockpit_media_MediaView_2Lio_cloudoffice_platform_cockpit_media_MediaView_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_media_MediaView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.media.MediaView');
lcA0.onMessage__VLio_cloudoffice_platform_cockpit_media_MediaView_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_media_MediaView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.media.MediaView');
lcA0.onChange__VLio_cloudoffice_platform_cockpit_media_MediaView_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lio_cloudoffice_platform_cockpit_media_MediaView_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_media_MediaView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.media.MediaView');
var stA0 = lcA0.cloneTo__Lio_cloudoffice_platform_cockpit_media_MediaView_2Lio_cloudoffice_platform_cockpit_media_MediaView_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_media_MediaView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.media.MediaView');
lcA0.call__VLio_cloudoffice_platform_cockpit_media_MediaView_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_media_MediaView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.media.MediaView');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_media_MediaView_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_media_MediaView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.media.MediaView');
lcA0.setValue__VLio_cloudoffice_platform_cockpit_media_MediaView_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_media_MediaView$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_media_MediaView$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_media_MediaView$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_media_MediaView$Html4JavaTypefillInstOf });
    io_cloudoffice_platform_cockpit_media_MediaView$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/media/MediaView$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_media_MediaView;
    var refs_io_cloudoffice_platform_cockpit_media_MediaComponent;
    var refs_org_netbeans_html_json_spi_Proto$Type;
    var refs_java_lang_String;
    var refs_java_lang_Boolean;
    var refs_io_cloudoffice_platform_cockpit_media_MediaConfiguration;
    var refs_io_cloudoffice_platform_cockpit_media_MediaItemView;
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
vm.io_cloudoffice_platform_cockpit_media_MediaView$Html4JavaType = io_cloudoffice_platform_cockpit_media_MediaView$Html4JavaType;


function io_cloudoffice_platform_cockpit_media_MediaComponent$InvokeFunctionListener() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_media_MediaComponent$InvokeFunctionListener;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_media_MediaComponent$InvokeFunctionListener_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_media_MediaComponent$InvokeFunctionListener_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_media_MediaComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaComponent$InvokeFunctionListener_this$0'] = lcA1;
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
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaComponent$InvokeFunctionListener_this$0'];var stA1 = (refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false)))['valueOf__Ljava_lang_String_2Ljava_lang_Object_2'](lcA2);
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
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_media_MediaComponent_2Lio_cloudoffice_platform_cockpit_media_MediaComponent$1_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
c.constructor.cons__VLio_cloudoffice_platform_cockpit_media_MediaComponent_2.call(lcA0, lcA1);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_media_MediaComponent$InvokeFunctionListenerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_media_MediaComponent$InvokeFunctionListener', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_media_MediaComponent$InvokeFunctionListenerfillInstOf });
    io_cloudoffice_platform_cockpit_media_MediaComponent$InvokeFunctionListenerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/media/MediaComponent$InvokeFunctionListener';
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
    this['fld_io_cloudoffice_platform_cockpit_media_MediaComponent$InvokeFunctionListener_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_media_MediaComponent$InvokeFunctionListener = io_cloudoffice_platform_cockpit_media_MediaComponent$InvokeFunctionListener;

vm.io_cloudoffice_platform_cockpit_api_EventListener = link('io/cloudoffice/platform/cockpit/api/EventListener', function(f) { vm.io_cloudoffice_platform_cockpit_api_EventListener =  f; });

function io_cloudoffice_platform_cockpit_media_MediaComponent$DesignModeListener() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_media_MediaComponent$DesignModeListener;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_media_MediaComponent$DesignModeListener_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_media_MediaComponent$DesignModeListener_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_media_MediaComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaComponent$DesignModeListener_this$0'] = lcA1;
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
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaComponent$DesignModeListener_this$0'];var stA1 = (refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false)))['valueOf__Ljava_lang_String_2Ljava_lang_Object_2'](lcA2);
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
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_media_MediaComponent_2Lio_cloudoffice_platform_cockpit_media_MediaComponent$1_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
c.constructor.cons__VLio_cloudoffice_platform_cockpit_media_MediaComponent_2.call(lcA0, lcA1);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_media_MediaComponent$DesignModeListenerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_media_MediaComponent$DesignModeListener', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_media_MediaComponent$DesignModeListenerfillInstOf });
    io_cloudoffice_platform_cockpit_media_MediaComponent$DesignModeListenerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/media/MediaComponent$DesignModeListener';
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
    this['fld_io_cloudoffice_platform_cockpit_media_MediaComponent$DesignModeListener_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_media_MediaComponent$DesignModeListener = io_cloudoffice_platform_cockpit_media_MediaComponent$DesignModeListener;


function io_cloudoffice_platform_cockpit_media_MediaComponent$LoginEventListener() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_media_MediaComponent$LoginEventListener;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_media_MediaComponent$LoginEventListener_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_media_MediaComponent$LoginEventListener_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_media_MediaComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaComponent$LoginEventListener_this$0'] = lcA1;
return;

};
CLS['cons__VLio_cloudoffice_platform_cockpit_media_MediaComponent_2'] = m;

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
Array.at(stA0, 0, "media");
(refs_io_cloudoffice_platform_cockpit_js_VIEW || (refs_io_cloudoffice_platform_cockpit_js_VIEW = vm.io_cloudoffice_platform_cockpit_js_VIEW(false)))['render__V_3Ljava_lang_String_2'](stA0);
var stA0 = invoker.getInstanceId__Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaComponent$LoginEventListener_this$0']);
var lcA2 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['configFetchEndpoint__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2']("media", lcA2);
var stA2 = null;var stA3 = new io_cloudoffice_platform_cockpit_media_MediaComponent$LoginEventListener$1;
(refs_io_cloudoffice_platform_cockpit_media_MediaComponent$LoginEventListener$1 || (refs_io_cloudoffice_platform_cockpit_media_MediaComponent$LoginEventListener$1 = io_cloudoffice_platform_cockpit_media_MediaComponent$LoginEventListener$1(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_media_MediaComponent$LoginEventListener_2.call(stA3, lcA0);
invoker.fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

};
    m.access = 0;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_media_MediaComponent$LoginEventListenerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_media_MediaComponent$LoginEventListener', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_media_MediaComponent$LoginEventListenerfillInstOf });
    io_cloudoffice_platform_cockpit_media_MediaComponent$LoginEventListenerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/media/MediaComponent$LoginEventListener';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_EventListener(false).constructor.$class
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_js_VIEW;
    var refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration;
    var refs_io_cloudoffice_platform_cockpit_media_MediaComponent$LoginEventListener$1;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_media_MediaComponent$LoginEventListener_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_media_MediaComponent$LoginEventListener = registerClass(exports,'io_cloudoffice_platform_cockpit_media_MediaComponent$LoginEventListener',io_cloudoffice_platform_cockpit_media_MediaComponent$LoginEventListener);


function io_cloudoffice_platform_cockpit_media_MediaComponent$LoginEventListener$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_media_MediaComponent$LoginEventListener$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$1 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_media_MediaComponent$LoginEventListener$1_this$1'] = v; return this['fld_io_cloudoffice_platform_cockpit_media_MediaComponent$LoginEventListener$1_this$1']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_media_MediaComponent$LoginEventListener_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaComponent$LoginEventListener$1_this$1'] = lcA1;
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2'](lcA1);
var lcA2 = stA0;
var stA0 = new io_cloudoffice_platform_cockpit_media_MediaView;
(refs_io_cloudoffice_platform_cockpit_media_MediaView || (refs_io_cloudoffice_platform_cockpit_media_MediaView = io_cloudoffice_platform_cockpit_media_MediaView(false))).constructor.cons__V.call(stA0);
var lcA3 = stA0;
var stA0 = lcA3;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"instance");
stA0.setInstance__VLjava_lang_String_2(stA1);
c.prepareConfigurationModelFromJSON__VLio_cloudoffice_platform_cockpit_media_MediaView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2.call(lcA0, lcA3, lcA2);
invoker.setView__VLjava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaComponent$LoginEventListener$1_this$1']['fld_io_cloudoffice_platform_cockpit_media_MediaComponent$LoginEventListener_this$0'],lcA3);
var stA0 = invoker.getDefaultViewName__Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_media_MediaComponent$LoginEventListener$1_this$1']['fld_io_cloudoffice_platform_cockpit_media_MediaComponent$LoginEventListener_this$0']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['toRaw__Ljava_lang_Object_2Ljava_lang_Object_2'](lcA3);
(refs_io_cloudoffice_platform_cockpit_js_VIEW || (refs_io_cloudoffice_platform_cockpit_js_VIEW = vm.io_cloudoffice_platform_cockpit_js_VIEW(false)))['bind__VLjava_lang_String_2Ljava_lang_Object_2'](stA0, stA1);
return;

};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.prepareConfigurationModelFromJSON__VLio_cloudoffice_platform_cockpit_media_MediaView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA1.getConfiguration__Lio_cloudoffice_platform_cockpit_media_MediaConfiguration_2();
var lcA3 = stA0;
var stA0 = invoker.getJsonObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA2,"configuration");
var lcA4 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_Object_2'](lcA4);
if ((stI0) == 0) { gt = 58; break IF; }
var stA0 = lcA1;var stI1 = invoker.getBoolean__ZLjava_lang_String_2(lcA4,"displaymediaitem");
stA0.setDisplaymediaitem__VZ(stI1);
var stA0 = lcA3;var stI1 = invoker.getBoolean__ZLjava_lang_String_2(lcA4,"displaymediaitem");
stA0.setDisplaymediaitem__VZ(stI1);
c.prepareFilters__VLorg_json_JSONObject_2Lio_cloudoffice_platform_cockpit_media_MediaConfiguration_2.call(lcA0, lcA4, lcA3);
c.prepareSelectedMedia__VLorg_json_JSONObject_2Lio_cloudoffice_platform_cockpit_media_MediaView_2Lio_cloudoffice_platform_cockpit_media_MediaConfiguration_2.call(lcA0, lcA4, lcA1, lcA3);
    }
    X_58: for (;;) { IF: if (gt <= 58) {
return;

    }
}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.prepareFilters__VLorg_json_JSONObject_2Lio_cloudoffice_platform_cockpit_media_MediaConfiguration_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getJSONArray__Lorg_json_JSONArray_2Ljava_lang_String_2(lcA1,"filters");
var stA0 = invoker.toList__Ljava_util_List_2(stA0);
var lcA3 = stA0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA3);
var lcA4 = stA0;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

var stI0 = invoker.hasNext__Z(lcA4);
if ((stI0) == 0) { gt = 107; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA4);
var lcA5 = stA0;
if (lcA5 !== null && !lcA5['$instOf_java_util_Map']) vm.java_lang_Class(false).castEx(lcA5, 'java.util.Map');
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_util_Map_2'](lcA5);
var lcA6 = stA0;
var stA0 = new io_cloudoffice_platform_cockpit_media_FilterView;
(refs_io_cloudoffice_platform_cockpit_media_FilterView || (refs_io_cloudoffice_platform_cockpit_media_FilterView = io_cloudoffice_platform_cockpit_media_FilterView(false))).constructor.cons__V.call(stA0);
var lcA7 = stA0;
var stA0 = lcA7;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA6,"filterName");
stA0.setFilterName__VLjava_lang_String_2(stA1);
var stA0 = lcA7;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA6,"filterType");
stA0.setFilterType__VLjava_lang_String_2(stA1);
var stA0 = lcA7;var stI1 = invoker.getBoolean__ZLjava_lang_String_2(lcA6,"isSelected");
stA0.setIsSelected__VZ(stI1);
var stA0 = lcA2.getFilters__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA7);
{ gt = 0; continue X_18; }
    }
    X_107: for (;;) { IF: if (gt <= 107) {
return;

    }
}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.prepareSelectedMedia__VLorg_json_JSONObject_2Lio_cloudoffice_platform_cockpit_media_MediaView_2Lio_cloudoffice_platform_cockpit_media_MediaConfiguration_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA3.getSelectedItems__Ljava_util_List_2();
invoker.clear__V(stA0);
var stA0 = invoker.getJSONArray__Lorg_json_JSONArray_2Ljava_lang_String_2(lcA1,"selectedItems");
var stA0 = invoker.toList__Ljava_util_List_2(stA0);
var lcA4 = stA0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA4);
var lcA5 = stA0;
    }
    X_29: for (;;) { IF: if (gt <= 29) {

var stI0 = invoker.hasNext__Z(lcA5);
if ((stI0) == 0) { gt = 196; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA5);
var lcA6 = stA0;
if (lcA6 !== null && !lcA6['$instOf_java_util_Map']) vm.java_lang_Class(false).castEx(lcA6, 'java.util.Map');
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_util_Map_2'](lcA6);
var lcA7 = stA0;
var stA0 = new io_cloudoffice_platform_cockpit_media_MediaItemView;
(refs_io_cloudoffice_platform_cockpit_media_MediaItemView || (refs_io_cloudoffice_platform_cockpit_media_MediaItemView = io_cloudoffice_platform_cockpit_media_MediaItemView(false))).constructor.cons__V.call(stA0);
var lcA8 = stA0;
var stA0 = lcA8;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA7,"itemId");
stA0.setItemId__VLjava_lang_String_2(stA1);
var stA0 = lcA8;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA7,"itemName");
stA0.setItemName__VLjava_lang_String_2(stA1);
var stA0 = lcA8;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA7,"itemType");
stA0.setItemType__VLjava_lang_String_2(stA1);
var stA0 = lcA8;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA7,"itemTypeIconCss");
stA0.setItemTypeIconCss__VLjava_lang_String_2(stA1);
var stA0 = lcA8;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA7,"itemUrl");
stA0.setItemUrl__VLjava_lang_String_2(stA1);
var stA0 = lcA8;var stI1 = invoker.getBoolean__ZLjava_lang_String_2(lcA7,"hasOwnerPermission");
stA0.setHasOwnerPermission__VZ(stI1);
var stA0 = lcA8;var stI1 = invoker.getBoolean__ZLjava_lang_String_2(lcA7,"hasAdminPermission");
stA0.setHasAdminPermission__VZ(stI1);
var stA0 = lcA8;var stI1 = invoker.getBoolean__ZLjava_lang_String_2(lcA7,"hasWritePermission");
stA0.setHasWritePermission__VZ(stI1);
var stA0 = lcA8;var stI1 = invoker.getBoolean__ZLjava_lang_String_2(lcA7,"hasReadPermission");
stA0.setHasReadPermission__VZ(stI1);
var stA0 = lcA3.getSelectedItems__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA8);
lcA2.setMediaitem__VLio_cloudoffice_platform_cockpit_media_MediaItemView_2(lcA8);
{ gt = 0; continue X_29; }
    }
    X_196: for (;;) { IF: if (gt <= 196) {
return;

    }
}}}
};
    m.access = 2;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_media_MediaComponent$LoginEventListener$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_media_MediaComponent$LoginEventListener$1', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_media_MediaComponent$LoginEventListener$1fillInstOf });
    io_cloudoffice_platform_cockpit_media_MediaComponent$LoginEventListener$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/media/MediaComponent$LoginEventListener$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65568;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_media_MediaView;
    var refs_net_java_html_json_Models;
    var refs_io_cloudoffice_platform_cockpit_js_VIEW;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_io_cloudoffice_platform_cockpit_media_FilterView;
    var refs_io_cloudoffice_platform_cockpit_media_MediaItemView;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_media_MediaComponent$LoginEventListener$1_this$1'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_media_MediaComponent$LoginEventListener$1 = io_cloudoffice_platform_cockpit_media_MediaComponent$LoginEventListener$1;

vm.io_cloudoffice_platform_cockpit_js_VIEW = link('io/cloudoffice/platform/cockpit/js/VIEW', function(f) { vm.io_cloudoffice_platform_cockpit_js_VIEW =  f; });
vm.io_cloudoffice_platform_cockpit_api_AbstractComponent = link('io/cloudoffice/platform/cockpit/api/AbstractComponent', function(f) { vm.io_cloudoffice_platform_cockpit_api_AbstractComponent =  f; });
vm.io_cloudoffice_platform_cockpit_api_Logger = link('io/cloudoffice/platform/cockpit/api/Logger', function(f) { vm.io_cloudoffice_platform_cockpit_api_Logger =  f; });

function io_cloudoffice_platform_cockpit_media_MediaConfiguration$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_media_MediaConfiguration$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_media_MediaConfiguration$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_media_MediaConfiguration$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_media_MediaConfiguration$1fillInstOf });
    io_cloudoffice_platform_cockpit_media_MediaConfiguration$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/media/MediaConfiguration$1';
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
vm.io_cloudoffice_platform_cockpit_media_MediaConfiguration$1 = io_cloudoffice_platform_cockpit_media_MediaConfiguration$1;


function io_cloudoffice_platform_cockpit_media_MediaItemView$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_media_MediaItemView$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_media_MediaItemView$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_media_MediaItemView$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_media_MediaItemView$1fillInstOf });
    io_cloudoffice_platform_cockpit_media_MediaItemView$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/media/MediaItemView$1';
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
vm.io_cloudoffice_platform_cockpit_media_MediaItemView$1 = io_cloudoffice_platform_cockpit_media_MediaItemView$1;


function io_cloudoffice_platform_cockpit_media_MediaView$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_media_MediaView$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_media_MediaView$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_media_MediaView$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_media_MediaView$1fillInstOf });
    io_cloudoffice_platform_cockpit_media_MediaView$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/media/MediaView$1';
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
vm.io_cloudoffice_platform_cockpit_media_MediaView$1 = io_cloudoffice_platform_cockpit_media_MediaView$1;

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
  invoker.isEmpty__Z = function(target) {
    return target['isEmpty__Z']();
  };
  invoker.get__Ljava_lang_Object_2I = function(target, p1) {
    return target['get__Ljava_lang_Object_2I'](p1);
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
  invoker.getJsonObject__Lorg_json_JSONObject_2Ljava_lang_String_2 = function(target, p1) {
    return target['getJsonObject__Lorg_json_JSONObject_2Ljava_lang_String_2'](p1);
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
  invoker.iterator__Ljava_util_Iterator_2 = function(target) {
    return target['iterator__Ljava_util_Iterator_2']();
  };
  invoker.hasNext__Z = function(target) {
    return target['hasNext__Z']();
  };
  invoker.next__Ljava_lang_Object_2 = function(target) {
    return target['next__Ljava_lang_Object_2']();
  };
  invoker.getString__Ljava_lang_String_2Ljava_lang_String_2 = function(target, p1) {
    return target['getString__Ljava_lang_String_2Ljava_lang_String_2'](p1);
  };
  invoker.getBoolean__ZLjava_lang_String_2 = function(target, p1) {
    return target['getBoolean__ZLjava_lang_String_2'](p1);
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
  invoker.getRequest__Lio_cloudoffice_platform_cockpit_api_AsyncRequest_2 = function(target) {
    return target['getRequest__Lio_cloudoffice_platform_cockpit_api_AsyncRequest_2']();
  };
  invoker.getView__Ljava_lang_Object_2 = function(target) {
    return target['getView__Ljava_lang_Object_2']();
  };
  invoker.getArray__Ljava_util_List_2 = function(target) {
    return target['getArray__Ljava_util_List_2']();
  };
  invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2 = function(target, p1) {
    return target['get__Ljava_lang_Object_2Ljava_lang_Object_2'](p1);
  };
  invoker.equalsIgnoreCase__ZLjava_lang_String_2 = function(target, p1) {
    return target['equalsIgnoreCase__ZLjava_lang_String_2'](p1);
  };
  invoker.getMap__Ljava_util_Map_2 = function(target) {
    return target['getMap__Ljava_util_Map_2']();
  };
  invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(target, p1, p2) {
    return target['put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2'](p1,p2);
  };
  invoker.getValue__Ljava_lang_String_2Ljava_lang_String_2 = function(target, p1) {
    return target['getValue__Ljava_lang_String_2Ljava_lang_String_2'](p1);
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
  invoker.invoke__VLjava_lang_String_2 = function(target, p1) {
    return target['invoke__VLjava_lang_String_2'](p1);
  };
  invoker.getInstanceId__Ljava_lang_String_2 = function(target) {
    return target['getInstanceId__Ljava_lang_String_2']();
  };
  invoker.setView__VLjava_lang_Object_2 = function(target, p1) {
    return target['setView__VLjava_lang_Object_2'](p1);
  };
  invoker.getDefaultViewName__Ljava_lang_String_2 = function(target) {
    return target['getDefaultViewName__Ljava_lang_String_2']();
  };
  exports['registerResource']('META-INF/MANIFEST.MF', 'TWFuaWZlc3QtVmVyc2lvbjogMS4wDQpCbmQtTGFzdE1vZGlmaWVkOiAxNTk3NzY0MDM5OTc4DQpCdWlsZC1KZGs6IDEuOC4wXzEzMQ0KQnVpbHQtQnk6IGV1c2lhDQpCdW5kbGUtTWFuaWZlc3RWZXJzaW9uOiAyDQpCdW5kbGUtTmFtZTogR2FkZ2V0IE1lZGlhDQpCdW5kbGUtU3ltYm9saWNOYW1lOiBpby5jbG91ZG9mZmljZS5wbGF0Zm9ybS5jb2NrcGl0Lm1lZGlhDQpCdW5kbGUtVmVyc2lvbjogMS4xLjANCkNyZWF0ZWQtQnk6IEFwYWNoZSBNYXZlbiBCdW5kbGUgUGx1Z2luDQpFeHBvcnQtUGFja2FnZTogaW8uY2xvdWRvZmZpY2UucGxhdGZvcm0uY29ja3BpdC5tZWRpYTt1c2VzOj0iaW8uY2xvdWRvZmYNCiBpY2UucGxhdGZvcm0uY29ja3BpdC5hcGkiO3ZlcnNpb249IjEuMS4wIg0KSW1wb3J0LVBhY2thZ2U6IGlvLmNsb3Vkb2ZmaWNlLnBsYXRmb3JtLmNvY2twaXQuYXBpO3ZlcnNpb249IlsxLjEsMikiLGlvDQogLmNsb3Vkb2ZmaWNlLnBsYXRmb3JtLmNvY2twaXQuanM7dmVyc2lvbj0iWzEuMSwyKSIsbmV0LmphdmEuaHRtbDt2ZXJzaW8NCiBuPSJbMS42LDIpIixuZXQuamF2YS5odG1sLmpzb247dmVyc2lvbj0iWzEuNiwyKSIsb3JnLmpzb247dmVyc2lvbj0iWzIwMQ0KIDgwODEzLjAsMjAxODA4MTQpIixvcmcubmV0YmVhbnMuaHRtbC5qc29uLnNwaTt2ZXJzaW9uPSJbMS42LDIpIg0KVG9vbDogQm5kLTIuMS4wLjIwMTMwNDI2LTEyMjIxMw0K');
});