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

function io_cloudoffice_platform_cockpit_signin_SigninAdmin$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_signin_SigninAdmin$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_signin_SigninAdmin$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_signin_SigninAdmin$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_signin_SigninAdmin$1fillInstOf });
    io_cloudoffice_platform_cockpit_signin_SigninAdmin$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/signin/SigninAdmin$1';
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
vm.io_cloudoffice_platform_cockpit_signin_SigninAdmin$1 = io_cloudoffice_platform_cockpit_signin_SigninAdmin$1;


function io_cloudoffice_platform_cockpit_signin_SigninAdmin$Html4JavaType() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_signin_SigninAdmin$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_io_cloudoffice_platform_cockpit_signin_SigninAdmin || (refs_io_cloudoffice_platform_cockpit_signin_SigninAdmin = io_cloudoffice_platform_cockpit_signin_SigninAdmin(false))).constructor.$class, (refs_io_cloudoffice_platform_cockpit_signin_SigninComponent$SigninAdminManager || (refs_io_cloudoffice_platform_cockpit_signin_SigninComponent$SigninAdminManager = io_cloudoffice_platform_cockpit_signin_SigninComponent$SigninAdminManager(false))).constructor.$class, 1, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"id", 0, 0, 0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLio_cloudoffice_platform_cockpit_signin_SigninAdmin_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0: { gt = 20; break IF; }
  default: { gt = 37; break IF; }
}
    }
    X_20: for (;;) { IF: if (gt <= 20) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_signin_SigninAdmin || (refs_io_cloudoffice_platform_cockpit_signin_SigninAdmin = io_cloudoffice_platform_cockpit_signin_SigninAdmin(false))).access$100__Lio_cloudoffice_platform_cockpit_signin_SigninAdmin$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setId__VLjava_lang_String_2(stA1);
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
    m = c.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_signin_SigninAdmin_2I = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0: { gt = 20; break IF; }
  default: { gt = 25; break IF; }
}
    }
    X_20: for (;;) { IF: if (gt <= 20) {

var stA0 = lcA1.getId__Ljava_lang_String_2();
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
    m = c.call__VLio_cloudoffice_platform_cockpit_signin_SigninAdmin_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_signin_SigninAdmin']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.signin.SigninAdmin');
var stA0 = (refs_io_cloudoffice_platform_cockpit_signin_SigninAdmin || (refs_io_cloudoffice_platform_cockpit_signin_SigninAdmin = io_cloudoffice_platform_cockpit_signin_SigninAdmin(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_signin_SigninAdmin_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLio_cloudoffice_platform_cockpit_signin_SigninAdmin_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLio_cloudoffice_platform_cockpit_signin_SigninAdmin_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
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
    m = c.read__Lio_cloudoffice_platform_cockpit_signin_SigninAdmin_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_signin_SigninAdmin;
(refs_io_cloudoffice_platform_cockpit_signin_SigninAdmin || (refs_io_cloudoffice_platform_cockpit_signin_SigninAdmin = io_cloudoffice_platform_cockpit_signin_SigninAdmin(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_signin_SigninAdmin$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lio_cloudoffice_platform_cockpit_signin_SigninAdmin_2Lio_cloudoffice_platform_cockpit_signin_SigninAdmin_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_signin_SigninAdmin || (refs_io_cloudoffice_platform_cockpit_signin_SigninAdmin = io_cloudoffice_platform_cockpit_signin_SigninAdmin(false))).access$400__Lio_cloudoffice_platform_cockpit_signin_SigninAdmin_2Lio_cloudoffice_platform_cockpit_signin_SigninAdmin_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_signin_SigninAdmin']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.signin.SigninAdmin');
lcA0.onMessage__VLio_cloudoffice_platform_cockpit_signin_SigninAdmin_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_signin_SigninAdmin']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.signin.SigninAdmin');
lcA0.onChange__VLio_cloudoffice_platform_cockpit_signin_SigninAdmin_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lio_cloudoffice_platform_cockpit_signin_SigninAdmin_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_signin_SigninAdmin']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.signin.SigninAdmin');
var stA0 = lcA0.cloneTo__Lio_cloudoffice_platform_cockpit_signin_SigninAdmin_2Lio_cloudoffice_platform_cockpit_signin_SigninAdmin_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_signin_SigninAdmin']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.signin.SigninAdmin');
lcA0.call__VLio_cloudoffice_platform_cockpit_signin_SigninAdmin_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_signin_SigninAdmin']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.signin.SigninAdmin');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_signin_SigninAdmin_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_signin_SigninAdmin']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.signin.SigninAdmin');
lcA0.setValue__VLio_cloudoffice_platform_cockpit_signin_SigninAdmin_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_signin_SigninAdmin$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_signin_SigninAdmin$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_signin_SigninAdmin$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_signin_SigninAdmin$Html4JavaTypefillInstOf });
    io_cloudoffice_platform_cockpit_signin_SigninAdmin$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/signin/SigninAdmin$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_signin_SigninAdmin;
    var refs_io_cloudoffice_platform_cockpit_signin_SigninComponent$SigninAdminManager;
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
vm.io_cloudoffice_platform_cockpit_signin_SigninAdmin$Html4JavaType = io_cloudoffice_platform_cockpit_signin_SigninAdmin$Html4JavaType;

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
vm.java_lang_String = function() {
  var instance = arguments.length == 0 || arguments[0] === true;
  delete vm.java_lang_String;
  return link('java/lang/String', function(f) { vm.java_lang_String = f;})(instance);
}
vm.org_netbeans_html_json_spi_Proto$Type = link('org/netbeans/html/json/spi/Proto$Type', function(f) { vm.org_netbeans_html_json_spi_Proto$Type =  f; });

function io_cloudoffice_platform_cockpit_signin_SigninComponent$SigninAdminManager() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_signin_SigninComponent$SigninAdminManager;
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
    function io_cloudoffice_platform_cockpit_signin_SigninComponent$SigninAdminManagerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_signin_SigninComponent$SigninAdminManager', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_signin_SigninComponent$SigninAdminManagerfillInstOf });
    io_cloudoffice_platform_cockpit_signin_SigninComponent$SigninAdminManagerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/signin/SigninComponent$SigninAdminManager';
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
vm.io_cloudoffice_platform_cockpit_signin_SigninComponent$SigninAdminManager = registerClass(exports,'io_cloudoffice_platform_cockpit_signin_SigninComponent$SigninAdminManager',io_cloudoffice_platform_cockpit_signin_SigninComponent$SigninAdminManager);


function io_cloudoffice_platform_cockpit_signin_SigninAdmin() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_signin_SigninAdmin;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_signin_SigninAdmin_proto'] = v; return this['fld_io_cloudoffice_platform_cockpit_signin_SigninAdmin_proto']; };
  m = c._prop_id = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_signin_SigninAdmin_prop_id'] = v; return this['fld_io_cloudoffice_platform_cockpit_signin_SigninAdmin_prop_id']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_io_cloudoffice_platform_cockpit_signin_SigninComponent$SigninAdminManager || (refs_io_cloudoffice_platform_cockpit_signin_SigninComponent$SigninAdminManager = io_cloudoffice_platform_cockpit_signin_SigninComponent$SigninAdminManager(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.getId__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninAdmin_proto'],"id");
return lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninAdmin_prop_id'];

};
c['getId__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setId__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninAdmin_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninAdmin_prop_id'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninAdmin_prop_id'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninAdmin_proto'],"id", lcA2, lcA1);
return;

    }
}}
};
c['setId__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
var stA0 = lcA0;var stA1 = invoker.createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2(c._TYPE(),lcA0, lcA1);
stA0['fld_io_cloudoffice_platform_cockpit_signin_SigninAdmin_proto'] = stA1;
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
    m = CLS.cons__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninAdmin_prop_id'] = lcA1;
return;

};
CLS['cons__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 1);
var lcA3 = stA0;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninAdmin_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 1);
Array.at(stA2, 0, "id");
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
if ((lcA3[0] || Array.at(lcA3, 0)) !== null && !(lcA3[0] || Array.at(lcA3, 0))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[0] || Array.at(lcA3, 0)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninAdmin_prop_id'] = (lcA3[0] || Array.at(lcA3, 0));
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(125));
var stA0 = invoker.toString__Ljava_lang_String_2(lcA1);
return stA0;

};
c['toString__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_signin_SigninAdmin_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninAdmin_proto']);
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_signin_SigninAdmin_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lio_cloudoffice_platform_cockpit_signin_SigninAdmin_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_signin_SigninAdmin_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_signin_SigninAdmin;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = lcA0.getId__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_signin_SigninAdmin_prop_id'] = stA1;
return lcA2;

};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lio_cloudoffice_platform_cockpit_signin_SigninAdmin_2 = function() {
  var  lcA0 = this;
invoker.applyBindings__V(lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninAdmin_proto']);
return lcA0;

};
c['applyBindings__Lio_cloudoffice_platform_cockpit_signin_SigninAdmin_2'] = m;

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

var stI0 = lcA1 != null && lcA1['$instOf_io_cloudoffice_platform_cockpit_signin_SigninAdmin'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_signin_SigninAdmin']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.signin.SigninAdmin');
var lcA2 = lcA1;
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninAdmin_prop_id'], lcA2['fld_io_cloudoffice_platform_cockpit_signin_SigninAdmin_prop_id']);
if ((stI0) != 0) { gt = 40; break IF; }
return 0;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

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
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninAdmin_prop_id'], lcI1);
var lcI1 = stI0;
return lcI1;

};
c['hashCode__I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Ljava_lang_Object_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0.clone__Lio_cloudoffice_platform_cockpit_signin_SigninAdmin_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lio_cloudoffice_platform_cockpit_signin_SigninAdmin$Html4JavaType_2 = function() {
return c._TYPE();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_signin_SigninAdmin_2 = function(lcA0) {
return lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninAdmin_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_signin_SigninAdmin$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lio_cloudoffice_platform_cockpit_signin_SigninAdmin_2Lio_cloudoffice_platform_cockpit_signin_SigninAdmin_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_signin_SigninAdmin_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_signin_SigninAdmin$Html4JavaType;
(refs_io_cloudoffice_platform_cockpit_signin_SigninAdmin$Html4JavaType || (refs_io_cloudoffice_platform_cockpit_signin_SigninAdmin$Html4JavaType = io_cloudoffice_platform_cockpit_signin_SigninAdmin$Html4JavaType(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_signin_SigninAdmin$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_signin_SigninAdminfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_signin_SigninAdmin', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_signin_SigninAdminfillInstOf });
    io_cloudoffice_platform_cockpit_signin_SigninAdminfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/signin/SigninAdmin';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_signin_SigninComponent$SigninAdminManager;
    var refs_java_lang_Object;
    var refs_net_java_html_BrwsrCtx;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_signin_SigninAdmin$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_signin_SigninAdmin_proto'] = null;
    this['fld_io_cloudoffice_platform_cockpit_signin_SigninAdmin_prop_id'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_signin_SigninAdmin = registerClass(exports,'io_cloudoffice_platform_cockpit_signin_SigninAdmin',io_cloudoffice_platform_cockpit_signin_SigninAdmin);

vm.java_lang_Cloneable = function() {
  var instance = arguments.length == 0 || arguments[0] === true;
  delete vm.java_lang_Cloneable;
  return link('java/lang/Cloneable', function(f) { vm.java_lang_Cloneable = f;})(instance);
}
vm.net_java_html_BrwsrCtx = link('net/java/html/BrwsrCtx', function(f) { vm.net_java_html_BrwsrCtx =  f; });

function io_cloudoffice_platform_cockpit_signin_SigninComponent$LoginLoadEventListener$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_signin_SigninComponent$LoginLoadEventListener$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$1 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_signin_SigninComponent$LoginLoadEventListener$1_this$1'] = v; return this['fld_io_cloudoffice_platform_cockpit_signin_SigninComponent$LoginLoadEventListener$1_this$1']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_signin_SigninComponent$LoginLoadEventListener_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninComponent$LoginLoadEventListener$1_this$1'] = lcA1;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2'](lcA1);
var lcA2 = stA0;
var stA0 = new io_cloudoffice_platform_cockpit_signin_SigninView;
(refs_io_cloudoffice_platform_cockpit_signin_SigninView || (refs_io_cloudoffice_platform_cockpit_signin_SigninView = io_cloudoffice_platform_cockpit_signin_SigninView(false))).constructor.cons__V.call(stA0);
var lcA3 = stA0;
var stA0 = lcA3;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"instance");
stA0.setInstance__VLjava_lang_String_2(stA1);
invoker.setView__VLjava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninComponent$LoginLoadEventListener$1_this$1']['fld_io_cloudoffice_platform_cockpit_signin_SigninComponent$LoginLoadEventListener_this$0'],lcA3);
var stA0 = invoker.getDefaultViewName__Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninComponent$LoginLoadEventListener$1_this$1']['fld_io_cloudoffice_platform_cockpit_signin_SigninComponent$LoginLoadEventListener_this$0']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['toRaw__Ljava_lang_Object_2Ljava_lang_Object_2'](lcA3);
(refs_io_cloudoffice_platform_cockpit_js_VIEW || (refs_io_cloudoffice_platform_cockpit_js_VIEW = vm.io_cloudoffice_platform_cockpit_js_VIEW(false)))['bind__VLjava_lang_String_2Ljava_lang_Object_2'](stA0, stA1);
return;

};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_signin_SigninComponent$LoginLoadEventListener$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_signin_SigninComponent$LoginLoadEventListener$1', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_signin_SigninComponent$LoginLoadEventListener$1fillInstOf });
    io_cloudoffice_platform_cockpit_signin_SigninComponent$LoginLoadEventListener$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/signin/SigninComponent$LoginLoadEventListener$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65568;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_signin_SigninView;
    var refs_net_java_html_json_Models;
    var refs_io_cloudoffice_platform_cockpit_js_VIEW;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_signin_SigninComponent$LoginLoadEventListener$1_this$1'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_signin_SigninComponent$LoginLoadEventListener$1 = io_cloudoffice_platform_cockpit_signin_SigninComponent$LoginLoadEventListener$1;

vm.io_cloudoffice_platform_cockpit_api_CallBack = link('io/cloudoffice/platform/cockpit/api/CallBack', function(f) { vm.io_cloudoffice_platform_cockpit_api_CallBack =  f; });
vm.io_cloudoffice_platform_cockpit_js_VIEW = link('io/cloudoffice/platform/cockpit/js/VIEW', function(f) { vm.io_cloudoffice_platform_cockpit_js_VIEW =  f; });
vm.net_java_html_json_Models = link('net/java/html/json/Models', function(f) { vm.net_java_html_json_Models =  f; });

function io_cloudoffice_platform_cockpit_signin_SigninComponent$LoginLoadEventListener() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_signin_SigninComponent$LoginLoadEventListener;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_signin_SigninComponent$LoginLoadEventListener_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_signin_SigninComponent$LoginLoadEventListener_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_signin_SigninComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninComponent$LoginLoadEventListener_this$0'] = lcA1;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
return;

};
CLS['cons__VLio_cloudoffice_platform_cockpit_signin_SigninComponent_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onReceive__VLio_cloudoffice_platform_cockpit_api_Signal_2 = function(lcA1) {
  var  lcA0 = this;
lcA0.prepareLoadLogin__V();
return;

};
c['onReceive__VLio_cloudoffice_platform_cockpit_api_Signal_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.prepareLoadLogin__V = function() {
  var  lcA0 = this;
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 1);
Array.at(stA0, 0, "signin");
(refs_io_cloudoffice_platform_cockpit_js_VIEW || (refs_io_cloudoffice_platform_cockpit_js_VIEW = vm.io_cloudoffice_platform_cockpit_js_VIEW(false)))['render__V_3Ljava_lang_String_2'](stA0);
var stA0 = invoker.getInstanceId__Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninComponent$LoginLoadEventListener_this$0']);
var lcA1 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['configFetchEndpoint__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2']("signin", lcA1);
var stA2 = null;var stA3 = new io_cloudoffice_platform_cockpit_signin_SigninComponent$LoginLoadEventListener$1;
(refs_io_cloudoffice_platform_cockpit_signin_SigninComponent$LoginLoadEventListener$1 || (refs_io_cloudoffice_platform_cockpit_signin_SigninComponent$LoginLoadEventListener$1 = io_cloudoffice_platform_cockpit_signin_SigninComponent$LoginLoadEventListener$1(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_signin_SigninComponent$LoginLoadEventListener_2.call(stA3, lcA0);
invoker.fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

};
    m.access = 0;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_signin_SigninComponent$LoginLoadEventListenerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_signin_SigninComponent$LoginLoadEventListener', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_signin_SigninComponent$LoginLoadEventListenerfillInstOf });
    io_cloudoffice_platform_cockpit_signin_SigninComponent$LoginLoadEventListenerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/signin/SigninComponent$LoginLoadEventListener';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_EventListener(false).constructor.$class
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_io_cloudoffice_platform_cockpit_js_VIEW;
    var refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration;
    var refs_io_cloudoffice_platform_cockpit_signin_SigninComponent$LoginLoadEventListener$1;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_signin_SigninComponent$LoginLoadEventListener_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_signin_SigninComponent$LoginLoadEventListener = registerClass(exports,'io_cloudoffice_platform_cockpit_signin_SigninComponent$LoginLoadEventListener',io_cloudoffice_platform_cockpit_signin_SigninComponent$LoginLoadEventListener);

vm.io_cloudoffice_platform_cockpit_api_EventListener = link('io/cloudoffice/platform/cockpit/api/EventListener', function(f) { vm.io_cloudoffice_platform_cockpit_api_EventListener =  f; });
vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration = link('io/cloudoffice/platform/cockpit/api/ComponentConfiguration', function(f) { vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration =  f; });

function io_cloudoffice_platform_cockpit_signin_SigninView() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_signin_SigninView;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_signin_SigninView_proto'] = v; return this['fld_io_cloudoffice_platform_cockpit_signin_SigninView_proto']; };
  m = c._prop_instance = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_instance'] = v; return this['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_instance']; };
  m = c._prop_username = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_username'] = v; return this['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_username']; };
  m = c._prop_password = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_password'] = v; return this['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_password']; };
  m = c._prop_signinLayout = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_signinLayout'] = v; return this['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_signinLayout']; };
  m = c._prop_timeZone = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_timeZone'] = v; return this['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_timeZone']; };
  m = c._prop_mqUserName = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_mqUserName'] = v; return this['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_mqUserName']; };
  m = c._prop_mqPassword = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_mqPassword'] = v; return this['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_mqPassword']; };
  m = c._prop_mqDestination = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_mqDestination'] = v; return this['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_mqDestination']; };
  m = c._prop_loader = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_loader'] = v; return this['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_loader']; };
  m = c._prop_message = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_message'] = v; return this['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_message']; };
  m = c._prop_enterPressed = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_enterPressed'] = v; return this['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_enterPressed']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_io_cloudoffice_platform_cockpit_signin_SigninComponent || (refs_io_cloudoffice_platform_cockpit_signin_SigninComponent = io_cloudoffice_platform_cockpit_signin_SigninComponent(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.getInstance__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_proto'],"instance");
return lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_instance'];

};
c['getInstance__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setInstance__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_instance'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_instance'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_proto'],"instance", lcA2, lcA1);
return;

    }
}}
};
c['setInstance__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getUsername__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_proto'],"username");
return lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_username'];

};
c['getUsername__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setUsername__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_username'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_username'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_proto'],"username", lcA2, lcA1);
return;

    }
}}
};
c['setUsername__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getPassword__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_proto'],"password");
return lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_password'];

};
c['getPassword__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setPassword__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_password'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_password'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_proto'],"password", lcA2, lcA1);
return;

    }
}}
};
c['setPassword__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getSigninLayout__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_proto'],"signinLayout");
return lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_signinLayout'];

};
c['getSigninLayout__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setSigninLayout__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_signinLayout'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_signinLayout'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_proto'],"signinLayout", lcA2, lcA1);
return;

    }
}}
};
c['setSigninLayout__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getTimeZone__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_proto'],"timeZone");
return lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_timeZone'];

};
c['getTimeZone__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setTimeZone__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_timeZone'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_timeZone'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_proto'],"timeZone", lcA2, lcA1);
return;

    }
}}
};
c['setTimeZone__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getMqUserName__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_proto'],"mqUserName");
return lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_mqUserName'];

};
c['getMqUserName__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setMqUserName__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_mqUserName'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_mqUserName'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_proto'],"mqUserName", lcA2, lcA1);
return;

    }
}}
};
c['setMqUserName__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getMqPassword__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_proto'],"mqPassword");
return lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_mqPassword'];

};
c['getMqPassword__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setMqPassword__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_mqPassword'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_mqPassword'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_proto'],"mqPassword", lcA2, lcA1);
return;

    }
}}
};
c['setMqPassword__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getMqDestination__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_proto'],"mqDestination");
return lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_mqDestination'];

};
c['getMqDestination__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setMqDestination__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_mqDestination'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_mqDestination'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_proto'],"mqDestination", lcA2, lcA1);
return;

    }
}}
};
c['setMqDestination__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_proto'],"loader");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_loader']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_HelperItemView;
(refs_io_cloudoffice_platform_cockpit_api_HelperItemView || (refs_io_cloudoffice_platform_cockpit_api_HelperItemView = vm.io_cloudoffice_platform_cockpit_api_HelperItemView(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_loader'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_loader'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_loader']['$instOf_io_cloudoffice_platform_cockpit_api_HelperItemView']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_loader'], 'io.cloudoffice.platform.cockpit.api.HelperItemView');
return lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_loader'];

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

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_loader'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_loader'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_proto'],"loader", lcA2, lcA1);
return;

    }
}}
};
c['setLoader__VLio_cloudoffice_platform_cockpit_api_HelperItemView_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getMessage__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_proto'],"message");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_message']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_HelperItemView;
(refs_io_cloudoffice_platform_cockpit_api_HelperItemView || (refs_io_cloudoffice_platform_cockpit_api_HelperItemView = vm.io_cloudoffice_platform_cockpit_api_HelperItemView(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_message'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_message'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_message']['$instOf_io_cloudoffice_platform_cockpit_api_HelperItemView']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_message'], 'io.cloudoffice.platform.cockpit.api.HelperItemView');
return lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_message'];

    }
}}
};
c['getMessage__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setMessage__VLio_cloudoffice_platform_cockpit_api_HelperItemView_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_message'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_message'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_proto'],"message", lcA2, lcA1);
return;

    }
}}
};
c['setMessage__VLio_cloudoffice_platform_cockpit_api_HelperItemView_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isEnterPressed__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_proto'],"enterPressed");
return lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_enterPressed'];

};
c['isEnterPressed__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setEnterPressed__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_enterPressed']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_enterPressed'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_proto'];var stA1 = "enterPressed";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
var lcA3 = lcA0;
(refs_io_cloudoffice_platform_cockpit_signin_SigninComponent || (refs_io_cloudoffice_platform_cockpit_signin_SigninComponent = io_cloudoffice_platform_cockpit_signin_SigninComponent(false))).enterKey__VLio_cloudoffice_platform_cockpit_signin_SigninView_2(lcA3);
return;

    }
}}
};
c['setEnterPressed__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.signin__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_signin_SigninView_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_proto'];var stI1 = 0;var stA2 = null;var stA3 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA3);
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,"");
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,lcA1);
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,"");
var stA3 = invoker.toString__Ljava_lang_String_2(stA3);
var stA4 = null;var stA5 = "POST";var stA6 = lcA2;var stA7 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 0);
invoker.loadJSONWithHeaders__VILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2_3Ljava_lang_Object_2(stA0,stI1, stA2, stA3, stA4, stA5, stA6, stA7);
return;

};
c['signin__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_signin_SigninView_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
var stA0 = lcA0;var stA1 = invoker.createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2(c._TYPE(),lcA0, lcA1);
stA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_proto'] = stA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_loader'] = c._TYPE();
lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_message'] = c._TYPE();
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_api_HelperItemView_2Lio_cloudoffice_platform_cockpit_api_HelperItemView_2Z = function(lcA1, lcA2, lcA3, lcA4, lcA5, lcA6, lcA7, lcA8, lcA9, lcA10, lcI11) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_instance'] = lcA1;
lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_username'] = lcA2;
lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_password'] = lcA3;
lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_signinLayout'] = lcA4;
lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_timeZone'] = lcA5;
lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_mqUserName'] = lcA6;
lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_mqPassword'] = lcA7;
lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_mqDestination'] = lcA8;
lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_loader'] = lcA9;
lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_message'] = lcA10;
lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_enterPressed'] = lcI11;
return;

};
CLS['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_api_HelperItemView_2Lio_cloudoffice_platform_cockpit_api_HelperItemView_2Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, (11));
var lcA3 = stA0;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, (11));
Array.at(stA2, 0, "instance");
Array.at(stA2, 1, "username");
Array.at(stA2, 2, "password");
Array.at(stA2, 3, "signinLayout");
Array.at(stA2, 4, "timeZone");
Array.at(stA2, 5, "mqUserName");
Array.at(stA2, (6), "mqPassword");
Array.at(stA2, (7), "mqDestination");
Array.at(stA2, (8), "loader");
Array.at(stA2, (9), "message");
Array.at(stA2, (10), "enterPressed");
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
if ((lcA3[0] || Array.at(lcA3, 0)) !== null && !(lcA3[0] || Array.at(lcA3, 0))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[0] || Array.at(lcA3, 0)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_instance'] = (lcA3[0] || Array.at(lcA3, 0));
if ((lcA3[1] || Array.at(lcA3, 1)) !== null && !(lcA3[1] || Array.at(lcA3, 1))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[1] || Array.at(lcA3, 1)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_username'] = (lcA3[1] || Array.at(lcA3, 1));
if ((lcA3[2] || Array.at(lcA3, 2)) !== null && !(lcA3[2] || Array.at(lcA3, 2))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[2] || Array.at(lcA3, 2)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_password'] = (lcA3[2] || Array.at(lcA3, 2));
if ((lcA3[3] || Array.at(lcA3, 3)) !== null && !(lcA3[3] || Array.at(lcA3, 3))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[3] || Array.at(lcA3, 3)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_signinLayout'] = (lcA3[3] || Array.at(lcA3, 3));
if ((lcA3[4] || Array.at(lcA3, 4)) !== null && !(lcA3[4] || Array.at(lcA3, 4))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[4] || Array.at(lcA3, 4)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_timeZone'] = (lcA3[4] || Array.at(lcA3, 4));
if ((lcA3[5] || Array.at(lcA3, 5)) !== null && !(lcA3[5] || Array.at(lcA3, 5))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[5] || Array.at(lcA3, 5)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_mqUserName'] = (lcA3[5] || Array.at(lcA3, 5));
if ((lcA3[(6)] || Array.at(lcA3, (6))) !== null && !(lcA3[(6)] || Array.at(lcA3, (6)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(6)] || Array.at(lcA3, (6))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_mqPassword'] = (lcA3[(6)] || Array.at(lcA3, (6)));
if ((lcA3[(7)] || Array.at(lcA3, (7))) !== null && !(lcA3[(7)] || Array.at(lcA3, (7)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(7)] || Array.at(lcA3, (7))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_mqDestination'] = (lcA3[(7)] || Array.at(lcA3, (7)));
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_proto'],(refs_io_cloudoffice_platform_cockpit_api_HelperItemView || (refs_io_cloudoffice_platform_cockpit_api_HelperItemView = vm.io_cloudoffice_platform_cockpit_api_HelperItemView(false))).constructor.$class, (lcA3[(8)] || Array.at(lcA3, (8))));
stA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_loader'] = stA1;
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_proto'],(refs_io_cloudoffice_platform_cockpit_api_HelperItemView || (refs_io_cloudoffice_platform_cockpit_api_HelperItemView = vm.io_cloudoffice_platform_cockpit_api_HelperItemView(false))).constructor.$class, (lcA3[(9)] || Array.at(lcA3, (9))));
stA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_message'] = stA1;
var stA0 = lcA0;if (((lcA3[(10)] || Array.at(lcA3, (10)))) !== null) { gt = 213; break IF; }
var stI1 = 0;{ gt = 226; break IF; }
    }
    X_213: for (;;) { IF: if (gt <= 213) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(10)] || Array.at(lcA3, (10))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_226: for (;;) { IF: if (gt <= 226) {
stA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_enterPressed'] = stI1;
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"instance");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getInstance__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"username");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getUsername__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"password");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getPassword__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"signinLayout");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getSigninLayout__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"timeZone");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getTimeZone__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"mqUserName");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getMqUserName__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"mqPassword");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getMqPassword__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"mqDestination");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getMqDestination__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"loader");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_loader']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"message");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_message']);
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(125));
var stA0 = invoker.toString__Ljava_lang_String_2(lcA1);
return stA0;

};
c['toString__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_signin_SigninView_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_proto']);
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_signin_SigninView_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lio_cloudoffice_platform_cockpit_signin_SigninView_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_signin_SigninView_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new io_cloudoffice_platform_cockpit_signin_SigninView;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = lcA0.getInstance__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_instance'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getUsername__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_username'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getPassword__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_password'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getSigninLayout__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_signinLayout'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getTimeZone__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_timeZone'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getMqUserName__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_mqUserName'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getMqPassword__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_mqPassword'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getMqDestination__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_mqDestination'] = stA1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_loader']) !== null) { gt = 85; break IF; }
var stA1 = null;{ gt = 109; break IF; }
    }
    X_85: for (;;) { IF: if (gt <= 85) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_loader']) !== (c._TYPE())) { gt = 101; break IF; }
var stA1 = c._TYPE();{ gt = 109; break IF; }
    }
    X_101: for (;;) { IF: if (gt <= 101) {

var stA1 = lcA0.getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_109: for (;;) { IF: if (gt <= 109) {
stA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_loader'] = stA1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_message']) !== null) { gt = 124; break IF; }
var stA1 = null;{ gt = 148; break IF; }
    }
    X_124: for (;;) { IF: if (gt <= 124) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_message']) !== (c._TYPE())) { gt = 140; break IF; }
var stA1 = c._TYPE();{ gt = 148; break IF; }
    }
    X_140: for (;;) { IF: if (gt <= 140) {

var stA1 = lcA0.getMessage__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_148: for (;;) { IF: if (gt <= 148) {
stA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_message'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isEnterPressed__Z();
stA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_enterPressed'] = stI1;
return lcA2;

    }
}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lio_cloudoffice_platform_cockpit_signin_SigninView_2 = function() {
  var  lcA0 = this;
invoker.applyBindings__V(lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_proto']);
return lcA0;

};
c['applyBindings__Lio_cloudoffice_platform_cockpit_signin_SigninView_2'] = m;

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

var stI0 = lcA1 != null && lcA1['$instOf_io_cloudoffice_platform_cockpit_signin_SigninView'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_signin_SigninView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.signin.SigninView');
var lcA2 = lcA1;
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_instance'], lcA2['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_instance']);
if ((stI0) != 0) { gt = 40; break IF; }
return 0;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_username'], lcA2['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_username']);
if ((stI0) != 0) { gt = 59; break IF; }
return 0;
    }
    X_59: for (;;) { IF: if (gt <= 59) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_password'], lcA2['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_password']);
if ((stI0) != 0) { gt = 78; break IF; }
return 0;
    }
    X_78: for (;;) { IF: if (gt <= 78) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_signinLayout'], lcA2['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_signinLayout']);
if ((stI0) != 0) { gt = 97; break IF; }
return 0;
    }
    X_97: for (;;) { IF: if (gt <= 97) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_timeZone'], lcA2['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_timeZone']);
if ((stI0) != 0) { gt = 116; break IF; }
return 0;
    }
    X_116: for (;;) { IF: if (gt <= 116) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_mqUserName'], lcA2['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_mqUserName']);
if ((stI0) != 0) { gt = 135; break IF; }
return 0;
    }
    X_135: for (;;) { IF: if (gt <= 135) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_mqPassword'], lcA2['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_mqPassword']);
if ((stI0) != 0) { gt = 154; break IF; }
return 0;
    }
    X_154: for (;;) { IF: if (gt <= 154) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_mqDestination'], lcA2['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_mqDestination']);
if ((stI0) != 0) { gt = 173; break IF; }
return 0;
    }
    X_173: for (;;) { IF: if (gt <= 173) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_loader']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_loader']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 200; break IF; }
return 0;
    }
    X_200: for (;;) { IF: if (gt <= 200) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_message']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_message']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 227; break IF; }
return 0;
    }
    X_227: for (;;) { IF: if (gt <= 227) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_enterPressed']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_enterPressed']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 252; break IF; }
return 0;
    }
    X_252: for (;;) { IF: if (gt <= 252) {

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
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_instance'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_username'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_password'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_signinLayout'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_timeZone'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_mqUserName'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_mqPassword'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_mqDestination'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_loader']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_message']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_enterPressed']);
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
var stA0 = lcA0.clone__Lio_cloudoffice_platform_cockpit_signin_SigninView_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lio_cloudoffice_platform_cockpit_signin_SigninView$Html4JavaType_2 = function() {
return c._TYPE();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_signin_SigninView_2 = function(lcA0) {
return lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninView_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_signin_SigninView$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lio_cloudoffice_platform_cockpit_signin_SigninView_2Lio_cloudoffice_platform_cockpit_signin_SigninView_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_signin_SigninView_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_signin_SigninView$Html4JavaType;
(refs_io_cloudoffice_platform_cockpit_signin_SigninView$Html4JavaType || (refs_io_cloudoffice_platform_cockpit_signin_SigninView$Html4JavaType = io_cloudoffice_platform_cockpit_signin_SigninView$Html4JavaType(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_signin_SigninView$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_signin_SigninViewfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_signin_SigninView', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_signin_SigninViewfillInstOf });
    io_cloudoffice_platform_cockpit_signin_SigninViewfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/signin/SigninView';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_signin_SigninComponent;
    var refs_io_cloudoffice_platform_cockpit_api_HelperItemView;
    var refs_net_java_html_json_Models;
    var refs_java_lang_Boolean;
    var refs_java_lang_StringBuilder;
    var refs_java_lang_Object;
    var refs_net_java_html_BrwsrCtx;
    var refs_io_cloudoffice_platform_cockpit_signin_SigninView$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_signin_SigninView_proto'] = null;
    this['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_instance'] = null;
    this['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_username'] = null;
    this['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_password'] = null;
    this['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_signinLayout'] = null;
    this['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_timeZone'] = null;
    this['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_mqUserName'] = null;
    this['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_mqPassword'] = null;
    this['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_mqDestination'] = null;
    this['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_loader'] = null;
    this['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_message'] = null;
    this['fld_io_cloudoffice_platform_cockpit_signin_SigninView_prop_enterPressed'] = 0;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_signin_SigninView = registerClass(exports,'io_cloudoffice_platform_cockpit_signin_SigninView',io_cloudoffice_platform_cockpit_signin_SigninView);


function io_cloudoffice_platform_cockpit_signin_SigninView$Html4JavaType() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_signin_SigninView$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_io_cloudoffice_platform_cockpit_signin_SigninView || (refs_io_cloudoffice_platform_cockpit_signin_SigninView = io_cloudoffice_platform_cockpit_signin_SigninView(false))).constructor.$class, (refs_io_cloudoffice_platform_cockpit_signin_SigninComponent || (refs_io_cloudoffice_platform_cockpit_signin_SigninComponent = io_cloudoffice_platform_cockpit_signin_SigninComponent(false))).constructor.$class, (11), 1);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"instance", 0, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"username", 1, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"password", 2, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"signinLayout", 3, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"timeZone", 4, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"mqUserName", 5, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"mqPassword", (6), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"mqDestination", (7), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"loader", (8), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"message", (9), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"enterPressed", (10), 0, 0);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"login", 0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLio_cloudoffice_platform_cockpit_signin_SigninView_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 60; break IF; }
  case 1:{ gt = 77; break IF; }
  case 2:{ gt = 94; break IF; }
  case 3:{ gt = 111; break IF; }
  case 4:{ gt = 128; break IF; }
  case 5:{ gt = 145; break IF; }
  case 6:{ gt = 162; break IF; }
  case 7:{ gt = 179; break IF; }
  case 8:{ gt = 196; break IF; }
  case 9:{ gt = 213; break IF; }
  case 10:{ gt = 230; break IF; }
  default: { gt = 250; break IF; }
}
    }
    X_60: for (;;) { IF: if (gt <= 60) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_signin_SigninView || (refs_io_cloudoffice_platform_cockpit_signin_SigninView = io_cloudoffice_platform_cockpit_signin_SigninView(false))).access$100__Lio_cloudoffice_platform_cockpit_signin_SigninView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setInstance__VLjava_lang_String_2(stA1);
return;
    }
    X_77: for (;;) { IF: if (gt <= 77) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_signin_SigninView || (refs_io_cloudoffice_platform_cockpit_signin_SigninView = io_cloudoffice_platform_cockpit_signin_SigninView(false))).access$100__Lio_cloudoffice_platform_cockpit_signin_SigninView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setUsername__VLjava_lang_String_2(stA1);
return;
    }
    X_94: for (;;) { IF: if (gt <= 94) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_signin_SigninView || (refs_io_cloudoffice_platform_cockpit_signin_SigninView = io_cloudoffice_platform_cockpit_signin_SigninView(false))).access$100__Lio_cloudoffice_platform_cockpit_signin_SigninView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setPassword__VLjava_lang_String_2(stA1);
return;
    }
    X_111: for (;;) { IF: if (gt <= 111) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_signin_SigninView || (refs_io_cloudoffice_platform_cockpit_signin_SigninView = io_cloudoffice_platform_cockpit_signin_SigninView(false))).access$100__Lio_cloudoffice_platform_cockpit_signin_SigninView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setSigninLayout__VLjava_lang_String_2(stA1);
return;
    }
    X_128: for (;;) { IF: if (gt <= 128) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_signin_SigninView || (refs_io_cloudoffice_platform_cockpit_signin_SigninView = io_cloudoffice_platform_cockpit_signin_SigninView(false))).access$100__Lio_cloudoffice_platform_cockpit_signin_SigninView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setTimeZone__VLjava_lang_String_2(stA1);
return;
    }
    X_145: for (;;) { IF: if (gt <= 145) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_signin_SigninView || (refs_io_cloudoffice_platform_cockpit_signin_SigninView = io_cloudoffice_platform_cockpit_signin_SigninView(false))).access$100__Lio_cloudoffice_platform_cockpit_signin_SigninView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setMqUserName__VLjava_lang_String_2(stA1);
return;
    }
    X_162: for (;;) { IF: if (gt <= 162) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_signin_SigninView || (refs_io_cloudoffice_platform_cockpit_signin_SigninView = io_cloudoffice_platform_cockpit_signin_SigninView(false))).access$100__Lio_cloudoffice_platform_cockpit_signin_SigninView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setMqPassword__VLjava_lang_String_2(stA1);
return;
    }
    X_179: for (;;) { IF: if (gt <= 179) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_signin_SigninView || (refs_io_cloudoffice_platform_cockpit_signin_SigninView = io_cloudoffice_platform_cockpit_signin_SigninView(false))).access$100__Lio_cloudoffice_platform_cockpit_signin_SigninView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setMqDestination__VLjava_lang_String_2(stA1);
return;
    }
    X_196: for (;;) { IF: if (gt <= 196) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_signin_SigninView || (refs_io_cloudoffice_platform_cockpit_signin_SigninView = io_cloudoffice_platform_cockpit_signin_SigninView(false))).access$100__Lio_cloudoffice_platform_cockpit_signin_SigninView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_api_HelperItemView || (refs_io_cloudoffice_platform_cockpit_api_HelperItemView = vm.io_cloudoffice_platform_cockpit_api_HelperItemView(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_api_HelperItemView']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.api.HelperItemView');
stA0.setLoader__VLio_cloudoffice_platform_cockpit_api_HelperItemView_2(stA1);
return;
    }
    X_213: for (;;) { IF: if (gt <= 213) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_signin_SigninView || (refs_io_cloudoffice_platform_cockpit_signin_SigninView = io_cloudoffice_platform_cockpit_signin_SigninView(false))).access$100__Lio_cloudoffice_platform_cockpit_signin_SigninView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_api_HelperItemView || (refs_io_cloudoffice_platform_cockpit_api_HelperItemView = vm.io_cloudoffice_platform_cockpit_api_HelperItemView(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_api_HelperItemView']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.api.HelperItemView');
stA0.setMessage__VLio_cloudoffice_platform_cockpit_api_HelperItemView_2(stA1);
return;
    }
    X_230: for (;;) { IF: if (gt <= 230) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_signin_SigninView || (refs_io_cloudoffice_platform_cockpit_signin_SigninView = io_cloudoffice_platform_cockpit_signin_SigninView(false))).access$100__Lio_cloudoffice_platform_cockpit_signin_SigninView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setEnterPressed__VZ(stI1);
return;
    }
    X_250: for (;;) { IF: if (gt <= 250) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_signin_SigninView_2I = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 60; break IF; }
  case 1:{ gt = 65; break IF; }
  case 2:{ gt = 70; break IF; }
  case 3:{ gt = 75; break IF; }
  case 4:{ gt = 80; break IF; }
  case 5:{ gt = 85; break IF; }
  case 6:{ gt = 90; break IF; }
  case 7:{ gt = 95; break IF; }
  case 8:{ gt = 100; break IF; }
  case 9:{ gt = 105; break IF; }
  case 10:{ gt = 110; break IF; }
  default: { gt = 118; break IF; }
}
    }
    X_60: for (;;) { IF: if (gt <= 60) {

var stA0 = lcA1.getInstance__Ljava_lang_String_2();
return stA0;
    }
    X_65: for (;;) { IF: if (gt <= 65) {

var stA0 = lcA1.getUsername__Ljava_lang_String_2();
return stA0;
    }
    X_70: for (;;) { IF: if (gt <= 70) {

var stA0 = lcA1.getPassword__Ljava_lang_String_2();
return stA0;
    }
    X_75: for (;;) { IF: if (gt <= 75) {

var stA0 = lcA1.getSigninLayout__Ljava_lang_String_2();
return stA0;
    }
    X_80: for (;;) { IF: if (gt <= 80) {

var stA0 = lcA1.getTimeZone__Ljava_lang_String_2();
return stA0;
    }
    X_85: for (;;) { IF: if (gt <= 85) {

var stA0 = lcA1.getMqUserName__Ljava_lang_String_2();
return stA0;
    }
    X_90: for (;;) { IF: if (gt <= 90) {

var stA0 = lcA1.getMqPassword__Ljava_lang_String_2();
return stA0;
    }
    X_95: for (;;) { IF: if (gt <= 95) {

var stA0 = lcA1.getMqDestination__Ljava_lang_String_2();
return stA0;
    }
    X_100: for (;;) { IF: if (gt <= 100) {

var stA0 = lcA1.getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
return stA0;
    }
    X_105: for (;;) { IF: if (gt <= 105) {

var stA0 = lcA1.getMessage__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
return stA0;
    }
    X_110: for (;;) { IF: if (gt <= 110) {

var stI0 = lcA1.isEnterPressed__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
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
    m = c.call__VLio_cloudoffice_platform_cockpit_signin_SigninView_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0: { gt = 20; break IF; }
  default: { gt = 37; break IF; }
}
    }
    X_20: for (;;) { IF: if (gt <= 20) {

var stA0 = (refs_io_cloudoffice_platform_cockpit_signin_SigninView || (refs_io_cloudoffice_platform_cockpit_signin_SigninView = io_cloudoffice_platform_cockpit_signin_SigninView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_signin_SigninView_2(lcA1);
var stA0 = invoker.toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA0,(refs_io_cloudoffice_platform_cockpit_signin_SigninView || (refs_io_cloudoffice_platform_cockpit_signin_SigninView = io_cloudoffice_platform_cockpit_signin_SigninView(false))).constructor.$class, lcA3);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_signin_SigninView']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.signin.SigninView');
(refs_io_cloudoffice_platform_cockpit_signin_SigninComponent || (refs_io_cloudoffice_platform_cockpit_signin_SigninComponent = io_cloudoffice_platform_cockpit_signin_SigninComponent(false))).login__VLio_cloudoffice_platform_cockpit_signin_SigninView_2(stA0);
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
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_signin_SigninView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.signin.SigninView');
var stA0 = (refs_io_cloudoffice_platform_cockpit_signin_SigninView || (refs_io_cloudoffice_platform_cockpit_signin_SigninView = io_cloudoffice_platform_cockpit_signin_SigninView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_signin_SigninView_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLio_cloudoffice_platform_cockpit_signin_SigninView_2I = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0: { gt = 20; break IF; }
  default: { gt = 25; break IF; }
}
    }
    X_20: for (;;) { IF: if (gt <= 20) {

(refs_io_cloudoffice_platform_cockpit_signin_SigninComponent || (refs_io_cloudoffice_platform_cockpit_signin_SigninComponent = io_cloudoffice_platform_cockpit_signin_SigninComponent(false))).enterKey__VLio_cloudoffice_platform_cockpit_signin_SigninView_2(lcA1);
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
    m = c.onMessage__VLio_cloudoffice_platform_cockpit_signin_SigninView_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0: { gt = 20; break IF; }
  default: { gt = 91; break IF; }
}
    }
    X_20: for (;;) { IF: if (gt <= 20) {

if ((lcI3) != (2)) { gt = 38; break IF; }
if (lcA4 !== null && !lcA4['$instOf_java_lang_Exception']) vm.java_lang_Class(false).castEx(lcA4, 'java.lang.Exception');
var lcA6 = lcA4;
invoker.printStackTrace__V(lcA6);
return;
    }
    X_38: for (;;) { IF: if (gt <= 38) {

if ((lcI3) != (1)) { gt = 91; break IF; }
if (lcA4 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA4, 1, vm.java_lang_Object)) vm.java_lang_Class(false).castEx(lcA4, '');
if (lcA4 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA4, 1, vm.java_lang_Object)) vm.java_lang_Class(false).castEx(lcA4, '');
var lcA6 = lcA4;
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 1);
Array.at(stA0, 0, null);
var lcA7 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_signin_SigninView || (refs_io_cloudoffice_platform_cockpit_signin_SigninView = io_cloudoffice_platform_cockpit_signin_SigninView(false))).access$100__Lio_cloudoffice_platform_cockpit_signin_SigninView$Html4JavaType_2();
var stA1 = (refs_io_cloudoffice_platform_cockpit_signin_SigninView || (refs_io_cloudoffice_platform_cockpit_signin_SigninView = io_cloudoffice_platform_cockpit_signin_SigninView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_signin_SigninView_2(lcA1);
var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(stA1);
invoker.copyJSON__VLnet_java_html_BrwsrCtx_2_3Ljava_lang_Object_2Ljava_lang_Class_2_3Ljava_lang_Object_2(stA0,stA1, lcA6, (refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA7);
(refs_io_cloudoffice_platform_cockpit_signin_SigninComponent || (refs_io_cloudoffice_platform_cockpit_signin_SigninComponent = io_cloudoffice_platform_cockpit_signin_SigninComponent(false))).signin__VLio_cloudoffice_platform_cockpit_signin_SigninView_2Ljava_lang_String_2(lcA1, (lcA7[0] || Array.at(lcA7, 0)));
return;
    }
    X_91: for (;;) { IF: if (gt <= 91) {
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

    }
}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.read__Lio_cloudoffice_platform_cockpit_signin_SigninView_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_signin_SigninView;
(refs_io_cloudoffice_platform_cockpit_signin_SigninView || (refs_io_cloudoffice_platform_cockpit_signin_SigninView = io_cloudoffice_platform_cockpit_signin_SigninView(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_signin_SigninView$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lio_cloudoffice_platform_cockpit_signin_SigninView_2Lio_cloudoffice_platform_cockpit_signin_SigninView_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_signin_SigninView || (refs_io_cloudoffice_platform_cockpit_signin_SigninView = io_cloudoffice_platform_cockpit_signin_SigninView(false))).access$400__Lio_cloudoffice_platform_cockpit_signin_SigninView_2Lio_cloudoffice_platform_cockpit_signin_SigninView_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_signin_SigninView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.signin.SigninView');
lcA0.onMessage__VLio_cloudoffice_platform_cockpit_signin_SigninView_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_signin_SigninView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.signin.SigninView');
lcA0.onChange__VLio_cloudoffice_platform_cockpit_signin_SigninView_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lio_cloudoffice_platform_cockpit_signin_SigninView_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_signin_SigninView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.signin.SigninView');
var stA0 = lcA0.cloneTo__Lio_cloudoffice_platform_cockpit_signin_SigninView_2Lio_cloudoffice_platform_cockpit_signin_SigninView_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_signin_SigninView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.signin.SigninView');
lcA0.call__VLio_cloudoffice_platform_cockpit_signin_SigninView_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_signin_SigninView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.signin.SigninView');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_signin_SigninView_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_signin_SigninView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.signin.SigninView');
lcA0.setValue__VLio_cloudoffice_platform_cockpit_signin_SigninView_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_signin_SigninView$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_signin_SigninView$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_signin_SigninView$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_signin_SigninView$Html4JavaTypefillInstOf });
    io_cloudoffice_platform_cockpit_signin_SigninView$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/signin/SigninView$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_signin_SigninView;
    var refs_io_cloudoffice_platform_cockpit_signin_SigninComponent;
    var refs_org_netbeans_html_json_spi_Proto$Type;
    var refs_java_lang_String;
    var refs_io_cloudoffice_platform_cockpit_api_HelperItemView;
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
vm.io_cloudoffice_platform_cockpit_signin_SigninView$Html4JavaType = io_cloudoffice_platform_cockpit_signin_SigninView$Html4JavaType;

vm.java_lang_Boolean = function() {
  var instance = arguments.length == 0 || arguments[0] === true;
  delete vm.java_lang_Boolean;
  return link('java/lang/Boolean', function(f) { vm.java_lang_Boolean = f;})(instance);
}
vm.io_cloudoffice_platform_cockpit_api_HelperItemView = link('io/cloudoffice/platform/cockpit/api/HelperItemView', function(f) { vm.io_cloudoffice_platform_cockpit_api_HelperItemView =  f; });

function io_cloudoffice_platform_cockpit_signin_SigninComponent() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_signin_SigninComponent;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_api_AbstractComponent(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = c.getInstance__Lio_cloudoffice_platform_cockpit_api_Component_2Ljava_lang_String_2 = function(lcA0) {
var stA0 = new io_cloudoffice_platform_cockpit_signin_SigninComponent;
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
var stA0 = lcA0;var stA1 = "loginsuccess";var stA2 = new io_cloudoffice_platform_cockpit_signin_SigninComponent$LoginLoadEventListener;
(refs_io_cloudoffice_platform_cockpit_signin_SigninComponent$LoginLoadEventListener || (refs_io_cloudoffice_platform_cockpit_signin_SigninComponent$LoginLoadEventListener = io_cloudoffice_platform_cockpit_signin_SigninComponent$LoginLoadEventListener(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_signin_SigninComponent_2.call(stA2, lcA0);
invoker.attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2(stA0,stA1, stA2);
return;

};
c['bindEventListeners__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.enterKey__VLio_cloudoffice_platform_cockpit_signin_SigninView_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = lcA0.isEnterPressed__Z();
if ((stI0) == 0) { gt = 11; break IF; }
c.login__VLio_cloudoffice_platform_cockpit_signin_SigninView_2(lcA0);
    }
    X_11: for (;;) { IF: if (gt <= 11) {

lcA0.setEnterPressed__VZ(0);
return;

    }
}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.login__VLio_cloudoffice_platform_cockpit_signin_SigninView_2 = function(lcA0) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_captain_Captain || (refs_io_cloudoffice_platform_cockpit_api_captain_Captain = vm.io_cloudoffice_platform_cockpit_api_captain_Captain(false)))['plan__Lio_cloudoffice_platform_cockpit_api_captain_Captain_2']();
var stA1 = (refs_io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$1 || (refs_io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$1 = io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$1(false))).lambdaFactory$__Lio_cloudoffice_platform_cockpit_api_captain_Execution_2Lio_cloudoffice_platform_cockpit_signin_SigninView_2(lcA0);
var stA0 = invoker.begin__Lio_cloudoffice_platform_cockpit_api_captain_Captain_2Lio_cloudoffice_platform_cockpit_api_captain_Execution_2(stA0,stA1);
var stA1 = (refs_io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$2 || (refs_io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$2 = io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$2(false))).lambdaFactory$__Lio_cloudoffice_platform_cockpit_api_captain_Execution_2();
var stA0 = invoker.then__Lio_cloudoffice_platform_cockpit_api_captain_Captain_2Lio_cloudoffice_platform_cockpit_api_captain_Execution_2(stA0,stA1);
invoker.perform__V(stA0);
return;

};
c['login__VLio_cloudoffice_platform_cockpit_signin_SigninView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.signin__VLio_cloudoffice_platform_cockpit_signin_SigninView_2Ljava_lang_String_2 = function(lcA0, lcA1) {
(refs_io_cloudoffice_platform_cockpit_api_Session || (refs_io_cloudoffice_platform_cockpit_api_Session = vm.io_cloudoffice_platform_cockpit_api_Session(false)))['setUser__VLjava_lang_String_2'](lcA1);
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Session || (refs_io_cloudoffice_platform_cockpit_api_Session = vm.io_cloudoffice_platform_cockpit_api_Session(false)))['getUser__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(stA0,"layout");
var lcA2 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Session || (refs_io_cloudoffice_platform_cockpit_api_Session = vm.io_cloudoffice_platform_cockpit_api_Session(false)))['getUser__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(stA0,"path");
var lcA3 = stA0;
(refs_io_cloudoffice_platform_cockpit_js_JSUIUtils || (refs_io_cloudoffice_platform_cockpit_js_JSUIUtils = vm.io_cloudoffice_platform_cockpit_js_JSUIUtils(false)))['setLayout__VLjava_lang_String_2'](lcA2);
var stA0 = (refs_io_cloudoffice_platform_cockpit_js_JSUIUtils || (refs_io_cloudoffice_platform_cockpit_js_JSUIUtils = vm.io_cloudoffice_platform_cockpit_js_JSUIUtils(false)))['setPath__Ljava_lang_String_2Ljava_lang_String_2'](lcA3);
(refs_io_cloudoffice_platform_cockpit_api_Session || (refs_io_cloudoffice_platform_cockpit_api_Session = vm.io_cloudoffice_platform_cockpit_api_Session(false)))['destroySession__V']();
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['_BOOT']();var stA1 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2'].call(stA1, "boot", "boot");
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,stA1);
return;

};
c['signin__VLio_cloudoffice_platform_cockpit_signin_SigninView_2Ljava_lang_String_2'] = m;

    m.access = 9;
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
c['_componentName'].call(lcA0, "signin-component");
return;

};
c['setComponentName__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.bindViewNames__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getName__Ljava_lang_String_2((refs_io_cloudoffice_platform_cockpit_signin_SigninView || (refs_io_cloudoffice_platform_cockpit_signin_SigninView = io_cloudoffice_platform_cockpit_signin_SigninView(false))).constructor.$class);
invoker.setDefaultViewName__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA0;var stA1 = invoker.getName__Ljava_lang_String_2((refs_io_cloudoffice_platform_cockpit_signin_SigninAdmin || (refs_io_cloudoffice_platform_cockpit_signin_SigninAdmin = io_cloudoffice_platform_cockpit_signin_SigninAdmin(false))).constructor.$class);
invoker.setDefaultConfigViewName__VLjava_lang_String_2(stA0,stA1);
return;

};
c['bindViewNames__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.lambda$login$3__VLio_cloudoffice_platform_cockpit_api_captain_Duty_2 = function(lcA0) {
return;

};
    m.access = 4106;
    m.cls = CLS;
    m = c.lambda$login$2__VLio_cloudoffice_platform_cockpit_signin_SigninView_2Lio_cloudoffice_platform_cockpit_api_captain_Duty_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Application || (refs_io_cloudoffice_platform_cockpit_api_Application = vm.io_cloudoffice_platform_cockpit_api_Application(false)))['getApplicationContext__Lio_cloudoffice_platform_cockpit_api_ApplicationContext_2']();
var stA0 = invoker.getDevice__Ljava_lang_String_2(stA0);
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(stA0,(refs_io_cloudoffice_platform_cockpit_api_Application || (refs_io_cloudoffice_platform_cockpit_api_Application = vm.io_cloudoffice_platform_cockpit_api_Application(false)))['_DESKTOP']());
if ((stI0) == 0) { gt = 21; break IF; }
var stA0 = (refs_io_cloudoffice_platform_cockpit_js_JSUIUtils || (refs_io_cloudoffice_platform_cockpit_js_JSUIUtils = vm.io_cloudoffice_platform_cockpit_js_JSUIUtils(false)))['getDHost__Ljava_lang_String_2']();
{ gt = 24; break IF; }
    }
    X_21: for (;;) { IF: if (gt <= 21) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_js_JSUIUtils || (refs_io_cloudoffice_platform_cockpit_js_JSUIUtils = vm.io_cloudoffice_platform_cockpit_js_JSUIUtils(false)))['getHost__Ljava_lang_String_2']();
    }
    X_24: for (;;) { IF: if (gt <= 24) {
var lcA2 = stA0;
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"https://");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"/o/signin");
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var stA1 = (refs_io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$3 || (refs_io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$3 = io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$3(false))).lambdaFactory$__Lio_cloudoffice_platform_cockpit_api_connect_Mapper_2Lio_cloudoffice_platform_cockpit_signin_SigninView_2(lcA0);
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_connect_Connect || (refs_io_cloudoffice_platform_cockpit_api_connect_Connect = vm.io_cloudoffice_platform_cockpit_api_connect_Connect(false)))['send__Lio_cloudoffice_platform_cockpit_api_connect_Connect_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_api_connect_Mapper_2'](stA0, stA1);
var stA1 = (refs_io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$4 || (refs_io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$4 = io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$4(false))).lambdaFactory$__Lio_cloudoffice_platform_cockpit_api_connect_Mapper_2Lio_cloudoffice_platform_cockpit_api_captain_Duty_2(lcA1);
invoker.receive__VLio_cloudoffice_platform_cockpit_api_connect_Mapper_2(stA0,stA1);
return;

    }
}}}
};
    m.access = 4106;
    m.cls = CLS;
    m = c.lambda$null$1__VLio_cloudoffice_platform_cockpit_api_captain_Duty_2Lio_cloudoffice_platform_cockpit_api_connect_Connect_2 = function(lcA0, lcA1) {
var stA0 = invoker.result__Ljava_lang_String_2(lcA1);
(refs_io_cloudoffice_platform_cockpit_api_Session || (refs_io_cloudoffice_platform_cockpit_api_Session = vm.io_cloudoffice_platform_cockpit_api_Session(false)))['setUser__VLjava_lang_String_2'](stA0);
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Session || (refs_io_cloudoffice_platform_cockpit_api_Session = vm.io_cloudoffice_platform_cockpit_api_Session(false)))['getUser__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(stA0,"layout");
var lcA2 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Session || (refs_io_cloudoffice_platform_cockpit_api_Session = vm.io_cloudoffice_platform_cockpit_api_Session(false)))['getUser__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(stA0,"path");
var lcA3 = stA0;
(refs_io_cloudoffice_platform_cockpit_js_JSUIUtils || (refs_io_cloudoffice_platform_cockpit_js_JSUIUtils = vm.io_cloudoffice_platform_cockpit_js_JSUIUtils(false)))['setLayout__VLjava_lang_String_2'](lcA2);
var stA0 = (refs_io_cloudoffice_platform_cockpit_js_JSUIUtils || (refs_io_cloudoffice_platform_cockpit_js_JSUIUtils = vm.io_cloudoffice_platform_cockpit_js_JSUIUtils(false)))['setPath__Ljava_lang_String_2Ljava_lang_String_2'](lcA3);
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['_BOOT']();var stA1 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2'].call(stA1, "boot", "boot");
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,stA1);
var stA0 = invoker.captain__Lio_cloudoffice_platform_cockpit_api_captain_Captain_2(lcA0);
invoker.deliverAndCloseAssignment__V(stA0);
return;

};
    m.access = 4106;
    m.cls = CLS;
    m = c.lambda$null$0__VLio_cloudoffice_platform_cockpit_signin_SigninView_2Lio_cloudoffice_platform_cockpit_api_connect_Connect_2 = function(lcA0, lcA1) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_js_JSUIUtils || (refs_io_cloudoffice_platform_cockpit_js_JSUIUtils = vm.io_cloudoffice_platform_cockpit_js_JSUIUtils(false)))['getCompany__Ljava_lang_String_2']();
var lcA2 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['builder__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var stA1 = "username";var stA2 = lcA0.getUsername__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA1 = "password";var stA2 = lcA0.getPassword__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,"company", lcA2);
var stA0 = invoker.toJSON__Ljava_lang_String_2(stA0);
var lcA3 = stA0;
invoker.data__VLjava_lang_Object_2(lcA1,lcA3);
return;

};
    m.access = 4106;
    m.cls = CLS;
    m = c.access$lambda$0__VLio_cloudoffice_platform_cockpit_signin_SigninView_2Lio_cloudoffice_platform_cockpit_api_captain_Duty_2 = function(lcA0, lcA1) {
c.lambda$login$2__VLio_cloudoffice_platform_cockpit_signin_SigninView_2Lio_cloudoffice_platform_cockpit_api_captain_Duty_2(lcA0, lcA1);
return;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$lambda$1__VLio_cloudoffice_platform_cockpit_api_captain_Duty_2 = function(lcA0) {
c.lambda$login$3__VLio_cloudoffice_platform_cockpit_api_captain_Duty_2(lcA0);
return;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$lambda$2__VLio_cloudoffice_platform_cockpit_signin_SigninView_2Lio_cloudoffice_platform_cockpit_api_connect_Connect_2 = function(lcA0, lcA1) {
c.lambda$null$0__VLio_cloudoffice_platform_cockpit_signin_SigninView_2Lio_cloudoffice_platform_cockpit_api_connect_Connect_2(lcA0, lcA1);
return;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$lambda$3__VLio_cloudoffice_platform_cockpit_api_captain_Duty_2Lio_cloudoffice_platform_cockpit_api_connect_Connect_2 = function(lcA0, lcA1) {
c.lambda$null$1__VLio_cloudoffice_platform_cockpit_api_captain_Duty_2Lio_cloudoffice_platform_cockpit_api_connect_Connect_2(lcA0, lcA1);
return;

};
    m.access = 4104;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_signin_SigninComponentfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_signin_SigninComponent', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_signin_SigninComponentfillInstOf });
    io_cloudoffice_platform_cockpit_signin_SigninComponentfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/signin/SigninComponent';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_AbstractComponent;
    var refs_io_cloudoffice_platform_cockpit_signin_SigninComponent$LoginLoadEventListener;
    var refs_io_cloudoffice_platform_cockpit_api_captain_Captain;
    var refs_io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$1;
    var refs_io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$2;
    var refs_io_cloudoffice_platform_cockpit_api_Session;
    var refs_io_cloudoffice_platform_cockpit_js_JSUIUtils;
    var refs_io_cloudoffice_platform_cockpit_api_Components;
    var refs_io_cloudoffice_platform_cockpit_api_Event;
    var refs_java_lang_UnsupportedOperationException;
    var refs_io_cloudoffice_platform_cockpit_signin_SigninView;
    var refs_io_cloudoffice_platform_cockpit_signin_SigninAdmin;
    var refs_io_cloudoffice_platform_cockpit_api_Application;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$3;
    var refs_io_cloudoffice_platform_cockpit_api_connect_Connect;
    var refs_io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$4;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_signin_SigninComponent = registerClass(exports,'io_cloudoffice_platform_cockpit_signin_SigninComponent',io_cloudoffice_platform_cockpit_signin_SigninComponent);


function io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$4() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$4;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._arg$1 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$4_arg$1'] = v; return this['fld_io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$4_arg$1']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_api_captain_Duty_2 = function(lcA1) {
  var  lcA0 = this;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$4_arg$1'] = lcA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.get$Lambda__Lio_cloudoffice_platform_cockpit_api_connect_Mapper_2Lio_cloudoffice_platform_cockpit_api_captain_Duty_2 = function(lcA0) {
var stA0 = new io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$4;
c.constructor.cons__VLio_cloudoffice_platform_cockpit_api_captain_Duty_2.call(stA0, lcA0);
return stA0;

};
    m.access = 10;
    m.cls = CLS;
    m = c.data__VLio_cloudoffice_platform_cockpit_api_connect_Connect_2 = function(lcA1) {
  var  lcA0 = this;
(refs_io_cloudoffice_platform_cockpit_signin_SigninComponent || (refs_io_cloudoffice_platform_cockpit_signin_SigninComponent = io_cloudoffice_platform_cockpit_signin_SigninComponent(false))).access$lambda$3__VLio_cloudoffice_platform_cockpit_api_captain_Duty_2Lio_cloudoffice_platform_cockpit_api_connect_Connect_2(lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$4_arg$1'], lcA1);
return;

};
c['data__VLio_cloudoffice_platform_cockpit_api_connect_Connect_2'] = m;

    m.anno = {"Ljava/lang/invoke/LambdaForm$Hidden;" : {

}

    };
    m.access = 1;
    m.cls = CLS;
    m = c.lambdaFactory$__Lio_cloudoffice_platform_cockpit_api_connect_Mapper_2Lio_cloudoffice_platform_cockpit_api_captain_Duty_2 = function(lcA0) {
var stA0 = new io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$4;
c.constructor.cons__VLio_cloudoffice_platform_cockpit_api_captain_Duty_2.call(stA0, lcA0);
return stA0;

};
    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$4fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$4', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_connect_Mapper(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$4fillInstOf });
    io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$4fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/signin/SigninComponent$$Lambda$4';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_connect_Mapper(false).constructor.$class
    ]; };
    CLS.$class.access = 4144;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_io_cloudoffice_platform_cockpit_signin_SigninComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$4_arg$1'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$4 = io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$4;

vm.io_cloudoffice_platform_cockpit_api_connect_Mapper = link('io/cloudoffice/platform/cockpit/api/connect/Mapper', function(f) { vm.io_cloudoffice_platform_cockpit_api_connect_Mapper =  f; });
vm.java_lang_invoke_LambdaForm$Hidden = function() {
  var instance = arguments.length == 0 || arguments[0] === true;
  delete vm.java_lang_invoke_LambdaForm$Hidden;
  return link('java/lang/invoke/LambdaForm$Hidden', function(f) { vm.java_lang_invoke_LambdaForm$Hidden = f;})(instance);
}
vm.io_cloudoffice_platform_cockpit_api_connect_Connect = link('io/cloudoffice/platform/cockpit/api/connect/Connect', function(f) { vm.io_cloudoffice_platform_cockpit_api_connect_Connect =  f; });

function io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$3() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$3;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._arg$1 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$3_arg$1'] = v; return this['fld_io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$3_arg$1']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_signin_SigninView_2 = function(lcA1) {
  var  lcA0 = this;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$3_arg$1'] = lcA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.get$Lambda__Lio_cloudoffice_platform_cockpit_api_connect_Mapper_2Lio_cloudoffice_platform_cockpit_signin_SigninView_2 = function(lcA0) {
var stA0 = new io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$3;
c.constructor.cons__VLio_cloudoffice_platform_cockpit_signin_SigninView_2.call(stA0, lcA0);
return stA0;

};
    m.access = 10;
    m.cls = CLS;
    m = c.data__VLio_cloudoffice_platform_cockpit_api_connect_Connect_2 = function(lcA1) {
  var  lcA0 = this;
(refs_io_cloudoffice_platform_cockpit_signin_SigninComponent || (refs_io_cloudoffice_platform_cockpit_signin_SigninComponent = io_cloudoffice_platform_cockpit_signin_SigninComponent(false))).access$lambda$2__VLio_cloudoffice_platform_cockpit_signin_SigninView_2Lio_cloudoffice_platform_cockpit_api_connect_Connect_2(lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$3_arg$1'], lcA1);
return;

};
c['data__VLio_cloudoffice_platform_cockpit_api_connect_Connect_2'] = m;

    m.anno = {"Ljava/lang/invoke/LambdaForm$Hidden;" : {

}

    };
    m.access = 1;
    m.cls = CLS;
    m = c.lambdaFactory$__Lio_cloudoffice_platform_cockpit_api_connect_Mapper_2Lio_cloudoffice_platform_cockpit_signin_SigninView_2 = function(lcA0) {
var stA0 = new io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$3;
c.constructor.cons__VLio_cloudoffice_platform_cockpit_signin_SigninView_2.call(stA0, lcA0);
return stA0;

};
    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$3fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$3', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_connect_Mapper(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$3fillInstOf });
    io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$3fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/signin/SigninComponent$$Lambda$3';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_connect_Mapper(false).constructor.$class
    ]; };
    CLS.$class.access = 4144;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_io_cloudoffice_platform_cockpit_signin_SigninComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$3_arg$1'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$3 = io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$3;

vm.io_cloudoffice_platform_cockpit_api_Application = link('io/cloudoffice/platform/cockpit/api/Application', function(f) { vm.io_cloudoffice_platform_cockpit_api_Application =  f; });
vm.io_cloudoffice_platform_cockpit_api_Event = link('io/cloudoffice/platform/cockpit/api/Event', function(f) { vm.io_cloudoffice_platform_cockpit_api_Event =  f; });
vm.io_cloudoffice_platform_cockpit_api_Components = link('io/cloudoffice/platform/cockpit/api/Components', function(f) { vm.io_cloudoffice_platform_cockpit_api_Components =  f; });
vm.io_cloudoffice_platform_cockpit_js_JSUIUtils = link('io/cloudoffice/platform/cockpit/js/JSUIUtils', function(f) { vm.io_cloudoffice_platform_cockpit_js_JSUIUtils =  f; });
vm.io_cloudoffice_platform_cockpit_api_Session = link('io/cloudoffice/platform/cockpit/api/Session', function(f) { vm.io_cloudoffice_platform_cockpit_api_Session =  f; });

function io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$2() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$2;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_instance'] = null;
  m = c._instance = function (v) {  if (arguments.length == 1) CLS['fld_instance'] = v; return CLS['fld_instance']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.execute__VLio_cloudoffice_platform_cockpit_api_captain_Duty_2 = function(lcA1) {
  var  lcA0 = this;
(refs_io_cloudoffice_platform_cockpit_signin_SigninComponent || (refs_io_cloudoffice_platform_cockpit_signin_SigninComponent = io_cloudoffice_platform_cockpit_signin_SigninComponent(false))).access$lambda$1__VLio_cloudoffice_platform_cockpit_api_captain_Duty_2(lcA1);
return;

};
c['execute__VLio_cloudoffice_platform_cockpit_api_captain_Duty_2'] = m;

    m.anno = {"Ljava/lang/invoke/LambdaForm$Hidden;" : {

}

    };
    m.access = 1;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$2;
c.constructor.cons__V.call(stA0);
c._instance(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.lambdaFactory$__Lio_cloudoffice_platform_cockpit_api_captain_Execution_2 = function() {
return c._instance();

};
    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$2fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$2', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_captain_Execution(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$2fillInstOf });
    io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$2fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/signin/SigninComponent$$Lambda$2';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_captain_Execution(false).constructor.$class
    ]; };
    CLS.$class.access = 4144;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_java_lang_Object;
    var refs_io_cloudoffice_platform_cockpit_signin_SigninComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$2 = io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$2;

vm.io_cloudoffice_platform_cockpit_api_captain_Execution = link('io/cloudoffice/platform/cockpit/api/captain/Execution', function(f) { vm.io_cloudoffice_platform_cockpit_api_captain_Execution =  f; });

function io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._arg$1 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$1_arg$1'] = v; return this['fld_io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$1_arg$1']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_signin_SigninView_2 = function(lcA1) {
  var  lcA0 = this;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$1_arg$1'] = lcA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.get$Lambda__Lio_cloudoffice_platform_cockpit_api_captain_Execution_2Lio_cloudoffice_platform_cockpit_signin_SigninView_2 = function(lcA0) {
var stA0 = new io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$1;
c.constructor.cons__VLio_cloudoffice_platform_cockpit_signin_SigninView_2.call(stA0, lcA0);
return stA0;

};
    m.access = 10;
    m.cls = CLS;
    m = c.execute__VLio_cloudoffice_platform_cockpit_api_captain_Duty_2 = function(lcA1) {
  var  lcA0 = this;
(refs_io_cloudoffice_platform_cockpit_signin_SigninComponent || (refs_io_cloudoffice_platform_cockpit_signin_SigninComponent = io_cloudoffice_platform_cockpit_signin_SigninComponent(false))).access$lambda$0__VLio_cloudoffice_platform_cockpit_signin_SigninView_2Lio_cloudoffice_platform_cockpit_api_captain_Duty_2(lcA0['fld_io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$1_arg$1'], lcA1);
return;

};
c['execute__VLio_cloudoffice_platform_cockpit_api_captain_Duty_2'] = m;

    m.anno = {"Ljava/lang/invoke/LambdaForm$Hidden;" : {

}

    };
    m.access = 1;
    m.cls = CLS;
    m = c.lambdaFactory$__Lio_cloudoffice_platform_cockpit_api_captain_Execution_2Lio_cloudoffice_platform_cockpit_signin_SigninView_2 = function(lcA0) {
var stA0 = new io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$1;
c.constructor.cons__VLio_cloudoffice_platform_cockpit_signin_SigninView_2.call(stA0, lcA0);
return stA0;

};
    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$1', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_captain_Execution(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$1fillInstOf });
    io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/signin/SigninComponent$$Lambda$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_captain_Execution(false).constructor.$class
    ]; };
    CLS.$class.access = 4144;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_io_cloudoffice_platform_cockpit_signin_SigninComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$1_arg$1'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$1 = io_cloudoffice_platform_cockpit_signin_SigninComponent$$Lambda$1;

vm.io_cloudoffice_platform_cockpit_api_captain_Captain = link('io/cloudoffice/platform/cockpit/api/captain/Captain', function(f) { vm.io_cloudoffice_platform_cockpit_api_captain_Captain =  f; });
vm.io_cloudoffice_platform_cockpit_api_AbstractComponent = link('io/cloudoffice/platform/cockpit/api/AbstractComponent', function(f) { vm.io_cloudoffice_platform_cockpit_api_AbstractComponent =  f; });
vm.io_cloudoffice_platform_cockpit_api_MapBuilder = link('io/cloudoffice/platform/cockpit/api/MapBuilder', function(f) { vm.io_cloudoffice_platform_cockpit_api_MapBuilder =  f; });

function io_cloudoffice_platform_cockpit_signin_SigninView$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_signin_SigninView$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_signin_SigninView$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_signin_SigninView$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_signin_SigninView$1fillInstOf });
    io_cloudoffice_platform_cockpit_signin_SigninView$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/signin/SigninView$1';
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
vm.io_cloudoffice_platform_cockpit_signin_SigninView$1 = io_cloudoffice_platform_cockpit_signin_SigninView$1;

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
  invoker.getString__Ljava_lang_String_2Ljava_lang_String_2 = function(target, p1) {
    return target['getString__Ljava_lang_String_2Ljava_lang_String_2'](p1);
  };
  invoker.setView__VLjava_lang_Object_2 = function(target, p1) {
    return target['setView__VLjava_lang_Object_2'](p1);
  };
  invoker.getDefaultViewName__Ljava_lang_String_2 = function(target) {
    return target['getDefaultViewName__Ljava_lang_String_2']();
  };
  invoker.getInstanceId__Ljava_lang_String_2 = function(target) {
    return target['getInstanceId__Ljava_lang_String_2']();
  };
  invoker.fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2 = function(target, p1, p2, p3) {
    return target['fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2'](p1,p2,p3);
  };
  invoker.loadJSONWithHeaders__VILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2_3Ljava_lang_Object_2 = function(target, p1, p2, p3, p4, p5, p6, p7) {
    return target['loadJSONWithHeaders__VILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2_3Ljava_lang_Object_2'](p1,p2,p3,p4,p5,p6,p7);
  };
  invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2 = function(target, p1, p2) {
    return target['read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2'](p1,p2);
  };
  invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2 = function(target, p1) {
    return target['boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2'](p1);
  };
  invoker.booleanValue__Z = function(target) {
    return target['booleanValue__Z']();
  };
  invoker.registerFunction__VLjava_lang_String_2I = function(target, p1, p2) {
    return target['registerFunction__VLjava_lang_String_2I'](p1,p2);
  };
  invoker.toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2 = function(target, p1, p2) {
    return target['toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2'](p1,p2);
  };
  invoker.printStackTrace__V = function(target) {
    return target['printStackTrace__V']();
  };
  invoker.copyJSON__VLnet_java_html_BrwsrCtx_2_3Ljava_lang_Object_2Ljava_lang_Class_2_3Ljava_lang_Object_2 = function(target, p1, p2, p3, p4) {
    return target['copyJSON__VLnet_java_html_BrwsrCtx_2_3Ljava_lang_Object_2Ljava_lang_Class_2_3Ljava_lang_Object_2'](p1,p2,p3,p4);
  };
  invoker.attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2 = function(target, p1, p2) {
    return target['attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2'](p1,p2);
  };
  invoker.begin__Lio_cloudoffice_platform_cockpit_api_captain_Captain_2Lio_cloudoffice_platform_cockpit_api_captain_Execution_2 = function(target, p1) {
    return target['begin__Lio_cloudoffice_platform_cockpit_api_captain_Captain_2Lio_cloudoffice_platform_cockpit_api_captain_Execution_2'](p1);
  };
  invoker.then__Lio_cloudoffice_platform_cockpit_api_captain_Captain_2Lio_cloudoffice_platform_cockpit_api_captain_Execution_2 = function(target, p1) {
    return target['then__Lio_cloudoffice_platform_cockpit_api_captain_Captain_2Lio_cloudoffice_platform_cockpit_api_captain_Execution_2'](p1);
  };
  invoker.perform__V = function(target) {
    return target['perform__V']();
  };
  invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2 = function(target, p1) {
    return target['listen__VLio_cloudoffice_platform_cockpit_api_Signal_2'](p1);
  };
  invoker.setDefaultViewName__VLjava_lang_String_2 = function(target, p1) {
    return target['setDefaultViewName__VLjava_lang_String_2'](p1);
  };
  invoker.setDefaultConfigViewName__VLjava_lang_String_2 = function(target, p1) {
    return target['setDefaultConfigViewName__VLjava_lang_String_2'](p1);
  };
  invoker.getDevice__Ljava_lang_String_2 = function(target) {
    return target['getDevice__Ljava_lang_String_2']();
  };
  invoker.equalsIgnoreCase__ZLjava_lang_String_2 = function(target, p1) {
    return target['equalsIgnoreCase__ZLjava_lang_String_2'](p1);
  };
  invoker.receive__VLio_cloudoffice_platform_cockpit_api_connect_Mapper_2 = function(target, p1) {
    return target['receive__VLio_cloudoffice_platform_cockpit_api_connect_Mapper_2'](p1);
  };
  invoker.result__Ljava_lang_String_2 = function(target) {
    return target['result__Ljava_lang_String_2']();
  };
  invoker.captain__Lio_cloudoffice_platform_cockpit_api_captain_Captain_2 = function(target) {
    return target['captain__Lio_cloudoffice_platform_cockpit_api_captain_Captain_2']();
  };
  invoker.deliverAndCloseAssignment__V = function(target) {
    return target['deliverAndCloseAssignment__V']();
  };
  invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2 = function(target, p1, p2) {
    return target['addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2'](p1,p2);
  };
  invoker.toJSON__Ljava_lang_String_2 = function(target) {
    return target['toJSON__Ljava_lang_String_2']();
  };
  invoker.data__VLjava_lang_Object_2 = function(target, p1) {
    return target['data__VLjava_lang_Object_2'](p1);
  };
  exports['registerResource']('META-INF/MANIFEST.MF', 'TWFuaWZlc3QtVmVyc2lvbjogMS4wDQpCbmQtTGFzdE1vZGlmaWVkOiAxNTk3Nzc1MTQwMTE5DQpCdWlsZC1KZGs6IDEuOC4wXzEzMQ0KQnVpbHQtQnk6IGV1c2lhDQpCdW5kbGUtTWFuaWZlc3RWZXJzaW9uOiAyDQpCdW5kbGUtTmFtZTogRW5naW5lIENvbXBvbmVudHMgc2lnbmluDQpCdW5kbGUtU3ltYm9saWNOYW1lOiBpby5jbG91ZG9mZmljZS5wbGF0Zm9ybS5jb2NrcGl0LnNpZ25pbg0KQnVuZGxlLVZlcnNpb246IDEuMS4wDQpDcmVhdGVkLUJ5OiBBcGFjaGUgTWF2ZW4gQnVuZGxlIFBsdWdpbg0KRXhwb3J0LVBhY2thZ2U6IGlvLmNsb3Vkb2ZmaWNlLnBsYXRmb3JtLmNvY2twaXQuc2lnbmluO3VzZXM6PSJpby5jbG91ZG9mDQogZmljZS5wbGF0Zm9ybS5jb2NrcGl0LmFwaSI7dmVyc2lvbj0iMS4xLjAiDQpJbXBvcnQtUGFja2FnZTogaW8uY2xvdWRvZmZpY2UucGxhdGZvcm0uY29ja3BpdC5hcGk7dmVyc2lvbj0iWzEuMSwyKSIsaW8NCiAuY2xvdWRvZmZpY2UucGxhdGZvcm0uY29ja3BpdC5hcGkuY2FwdGFpbjt2ZXJzaW9uPSJbMS4xLDIpIixpby5jbG91ZG9mZg0KIGljZS5wbGF0Zm9ybS5jb2NrcGl0LmFwaS5jb25uZWN0O3ZlcnNpb249IlsxLjEsMikiLGlvLmNsb3Vkb2ZmaWNlLnBsYXRmDQogb3JtLmNvY2twaXQuanM7dmVyc2lvbj0iWzEuMSwyKSIsbmV0LmphdmEuaHRtbDt2ZXJzaW9uPSJbMS42LDIpIixuZXQuamENCiB2YS5odG1sLmpzb247dmVyc2lvbj0iWzEuNiwyKSIsb3JnLm5ldGJlYW5zLmh0bWwuanNvbi5zcGk7dmVyc2lvbj0iWzEuNg0KICwyKSINCk1haW4tQ2xhc3M6ICR7cHJvamVjdC5tYWluY2xhc3N9DQpUb29sOiBCbmQtMi4xLjAuMjAxMzA0MjYtMTIyMjEzDQo=');
});