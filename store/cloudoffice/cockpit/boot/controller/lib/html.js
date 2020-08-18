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

function net_java_html_BrwsrCtx$1() {
  var m;
  var CLS = net_java_html_BrwsrCtx$1;
  if (!CLS.$class) {
    var pp = org_netbeans_html_context_impl_CtxAccssr(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_context_impl_CtxAccssr || (refs_org_netbeans_html_context_impl_CtxAccssr = org_netbeans_html_context_impl_CtxAccssr(false))).constructor.cons__V.call(lcA0);
return;

};
CLS['cons__V'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.newContext__Lnet_java_html_BrwsrCtx_2Lorg_netbeans_html_context_impl_CtxImpl_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new net_java_html_BrwsrCtx;
(refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = net_java_html_BrwsrCtx(false))).constructor.cons__VLorg_netbeans_html_context_impl_CtxImpl_2Lnet_java_html_BrwsrCtx$1_2.call(stA0, lcA1, null);
return stA0;

};
    m.access = 4;
    m.cls = CLS;
    m = c.find__Lorg_netbeans_html_context_impl_CtxImpl_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = net_java_html_BrwsrCtx(false))).access$100__Lorg_netbeans_html_context_impl_CtxImpl_2Lnet_java_html_BrwsrCtx_2(lcA1);
return stA0;

};
    m.access = 4;
    m.cls = CLS;
    c.constructor = CLS;
    function net_java_html_BrwsrCtx$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_net_java_html_BrwsrCtx$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: net_java_html_BrwsrCtx$1fillInstOf });
    net_java_html_BrwsrCtx$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'net/java/html/BrwsrCtx$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_org_netbeans_html_context_impl_CtxAccssr;
    var refs_net_java_html_BrwsrCtx;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.net_java_html_BrwsrCtx$1 = net_java_html_BrwsrCtx$1;


function net_java_html_BrwsrCtx() {
  var m;
  var CLS = net_java_html_BrwsrCtx;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._impl = function (v) {  if (arguments.length == 1) this['fld_net_java_html_BrwsrCtx_impl'] = v; return this['fld_net_java_html_BrwsrCtx_impl']; };
  CLS['fld_CURRENT'] = null;
  m = c._CURRENT = function (v) {  if (arguments.length == 1) CLS['fld_CURRENT'] = v; return CLS['fld_CURRENT']; };
  CLS['fld_EMPTY'] = null;
  m = c._EMPTY = function (v) {  if (arguments.length == 1) CLS['fld_EMPTY'] = v; return CLS['fld_EMPTY']; };
c['_EMPTY'] = m;

    m = CLS.cons__VLorg_netbeans_html_context_impl_CtxImpl_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_net_java_html_BrwsrCtx_impl'] = lcA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA0) !== ((refs_org_netbeans_html_context_impl_CtxAccssr || (refs_org_netbeans_html_context_impl_CtxAccssr = org_netbeans_html_context_impl_CtxAccssr(false))).constructor.$class)) { gt = 10; break IF; }
return c._EMPTY();
    }
    X_10: for (;;) { IF: if (gt <= 10) {

var stA0 = invoker.get__Ljava_lang_Object_2(c._CURRENT());
if (stA0 !== null && !stA0['$instOf_net_java_html_BrwsrCtx']) vm.java_lang_Class(false).castEx(stA0, 'net.java.html.BrwsrCtx');
var lcA1 = stA0;
if ((lcA1) === null) { gt = 26; break IF; }
return lcA1;
    }
    X_26: for (;;) { IF: if (gt <= 26) {
var stA0 = (refs_org_netbeans_html_context_spi_Contexts || (refs_org_netbeans_html_context_spi_Contexts = org_netbeans_html_context_spi_Contexts(false))).newBuilder__Lorg_netbeans_html_context_spi_Contexts$Builder_2();
var lcA2 = stA0;
var stI0 = (refs_org_netbeans_html_context_spi_Contexts || (refs_org_netbeans_html_context_spi_Contexts = org_netbeans_html_context_spi_Contexts(false))).fillInByProviders__ZLjava_lang_Class_2Lorg_netbeans_html_context_spi_Contexts$Builder_2(lcA0, lcA2);
var lcI3 = stI0;
if ((lcI3) != 0) { gt = 44; break IF; }
return c._EMPTY();
    }
    X_44: for (;;) { IF: if (gt <= 44) {

var stA0 = lcA2.build__Lnet_java_html_BrwsrCtx_2();
return stA0;

    }
}}}}
};
c['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.execute__VLjava_lang_Runnable_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new net_java_html_BrwsrCtx$1Wrap;
(refs_net_java_html_BrwsrCtx$1Wrap || (refs_net_java_html_BrwsrCtx$1Wrap = net_java_html_BrwsrCtx$1Wrap(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Runnable_2.call(stA0, lcA0, lcA1);
var lcA2 = stA0;
var stA0 = (refs_org_netbeans_html_context_spi_Contexts || (refs_org_netbeans_html_context_spi_Contexts = org_netbeans_html_context_spi_Contexts(false))).find__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2(lcA0, (refs_java_util_concurrent_Executor || (refs_java_util_concurrent_Executor = vm.java_util_concurrent_Executor(false))).constructor.$class);
if (stA0 !== null && !stA0['$instOf_java_util_concurrent_Executor']) vm.java_lang_Class(false).castEx(stA0, 'java.util.concurrent.Executor');
var lcA3 = stA0;
if ((lcA3) !== null) { gt = 31; break IF; }
invoker.run__V(lcA2);
{ gt = 38; break IF; }
    }
    X_31: for (;;) { IF: if (gt <= 31) {

invoker.execute__VLjava_lang_Runnable_2(lcA3,lcA2);
    }
    X_38: for (;;) { IF: if (gt <= 38) {
return;

    }
}}}
};
c['execute__VLjava_lang_Runnable_2'] = m;

    m.access = 17;
    m.cls = CLS;
    m = CLS.cons__VLorg_netbeans_html_context_impl_CtxImpl_2Lnet_java_html_BrwsrCtx$1_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
c.constructor.cons__VLorg_netbeans_html_context_impl_CtxImpl_2.call(lcA0, lcA1);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$100__Lorg_netbeans_html_context_impl_CtxImpl_2Lnet_java_html_BrwsrCtx_2 = function(lcA0) {
return lcA0['fld_net_java_html_BrwsrCtx_impl'];

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Ljava_lang_ThreadLocal_2 = function() {
return c._CURRENT();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new vm.java_lang_ThreadLocal;
(refs_java_lang_ThreadLocal || (refs_java_lang_ThreadLocal = vm.java_lang_ThreadLocal(false))).constructor['cons__V'].call(stA0);
c._CURRENT(stA0);
var stA0 = new net_java_html_BrwsrCtx$1;
(refs_net_java_html_BrwsrCtx$1 || (refs_net_java_html_BrwsrCtx$1 = net_java_html_BrwsrCtx$1(false))).constructor.cons__V.call(stA0);
var stA0 = (refs_org_netbeans_html_context_spi_Contexts || (refs_org_netbeans_html_context_spi_Contexts = org_netbeans_html_context_spi_Contexts(false))).newBuilder__Lorg_netbeans_html_context_spi_Contexts$Builder_2();
var stA0 = stA0.build__Lnet_java_html_BrwsrCtx_2();
c._EMPTY(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function net_java_html_BrwsrCtxfillInstOf(x) {
        Object.defineProperty(x, '$instOf_net_java_html_BrwsrCtx', { value : true });
      vm.java_util_concurrent_Executor(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: net_java_html_BrwsrCtxfillInstOf });
    net_java_html_BrwsrCtxfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'net/java/html/BrwsrCtx';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_util_concurrent_Executor(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_org_netbeans_html_context_impl_CtxAccssr;
    var refs_org_netbeans_html_context_spi_Contexts;
    var refs_net_java_html_BrwsrCtx$1Wrap;
    var refs_java_util_concurrent_Executor;
    var refs_java_lang_ThreadLocal;
    var refs_net_java_html_BrwsrCtx$1;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_net_java_html_BrwsrCtx_impl'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.net_java_html_BrwsrCtx = registerClass(exports,'net_java_html_BrwsrCtx',net_java_html_BrwsrCtx);

vm.java_lang_ThreadLocal = link('java/lang/ThreadLocal', function(f) { vm.java_lang_ThreadLocal =  f; });
vm.java_util_concurrent_Executor = link('java/util/concurrent/Executor', function(f) { vm.java_util_concurrent_Executor =  f; });

function net_java_html_BrwsrCtx$1Wrap() {
  var m;
  var CLS = net_java_html_BrwsrCtx$1Wrap;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$exec = function (v) {  if (arguments.length == 1) this['fld_net_java_html_BrwsrCtx$1Wrap_val$exec'] = v; return this['fld_net_java_html_BrwsrCtx$1Wrap_val$exec']; };
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_net_java_html_BrwsrCtx$1Wrap_this$0'] = v; return this['fld_net_java_html_BrwsrCtx$1Wrap_this$0']; };
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Runnable_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
lcA0['fld_net_java_html_BrwsrCtx$1Wrap_this$0'] = lcA1;
lcA0['fld_net_java_html_BrwsrCtx$1Wrap_val$exec'] = lcA2;
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.run__V = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = net_java_html_BrwsrCtx(false))).access$200__Ljava_lang_ThreadLocal_2();
var stA0 = invoker.get__Ljava_lang_Object_2(stA0);
if (stA0 !== null && !stA0['$instOf_net_java_html_BrwsrCtx']) vm.java_lang_Class(false).castEx(stA0, 'net.java.html.BrwsrCtx');
var lcA1 = stA0;
try {var stA0 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = net_java_html_BrwsrCtx(false))).access$200__Ljava_lang_ThreadLocal_2();
invoker.set__VLjava_lang_Object_2(stA0,lcA0['fld_net_java_html_BrwsrCtx$1Wrap_this$0']);
invoker.run__V(lcA0['fld_net_java_html_BrwsrCtx$1Wrap_val$exec']);
} catch (e) {
var stA0 = e;{ gt = 39; break IF; }
}var stA0 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = net_java_html_BrwsrCtx(false))).access$200__Ljava_lang_ThreadLocal_2();
invoker.set__VLjava_lang_Object_2(stA0,lcA1);
{ gt = 49; break IF; }
    }
    X_39: for (;;) { IF: if (gt <= 39) {
var lcA2 = stA0;
var stA0 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = net_java_html_BrwsrCtx(false))).access$200__Ljava_lang_ThreadLocal_2();
invoker.set__VLjava_lang_Object_2(stA0,lcA1);
{ var stA0 = lcA2; throw lcA2; }
    }
    X_49: for (;;) { IF: if (gt <= 49) {
return;

    }
}}}
};
c['run__V'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function net_java_html_BrwsrCtx$1WrapfillInstOf(x) {
        Object.defineProperty(x, '$instOf_net_java_html_BrwsrCtx$1Wrap', { value : true });
      vm.java_lang_Runnable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: net_java_html_BrwsrCtx$1WrapfillInstOf });
    net_java_html_BrwsrCtx$1WrapfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'net/java/html/BrwsrCtx$1Wrap';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Runnable(false).constructor.$class
    ]; };
    CLS.$class.access = 65568;
    CLS.$class.cnstr = CLS;
    var refs_net_java_html_BrwsrCtx;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_net_java_html_BrwsrCtx$1Wrap_val$exec'] = null;
    this['fld_net_java_html_BrwsrCtx$1Wrap_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.net_java_html_BrwsrCtx$1Wrap = net_java_html_BrwsrCtx$1Wrap;

vm.java_lang_Runnable = link('java/lang/Runnable', function(f) { vm.java_lang_Runnable =  f; });

function org_netbeans_html_context_spi_Contexts() {
  var m;
  var CLS = org_netbeans_html_context_spi_Contexts;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.newBuilder__Lorg_netbeans_html_context_spi_Contexts$Builder_2_3Ljava_lang_Object_2 = function(lcA0) {
var stA0 = new org_netbeans_html_context_spi_Contexts$Builder;
(refs_org_netbeans_html_context_spi_Contexts$Builder || (refs_org_netbeans_html_context_spi_Contexts$Builder = org_netbeans_html_context_spi_Contexts$Builder(false))).constructor.cons__V_3Ljava_lang_Object_2.call(stA0, lcA0);
return stA0;

};
c['newBuilder__Lorg_netbeans_html_context_spi_Contexts$Builder_2_3Ljava_lang_Object_2'] = m;

    m.access = 137;
    m.cls = CLS;
    m = c.newBuilder__Lorg_netbeans_html_context_spi_Contexts$Builder_2 = function() {
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 0);
var stA0 = c.newBuilder__Lorg_netbeans_html_context_spi_Contexts$Builder_2_3Ljava_lang_Object_2(stA0);
return stA0;

};
c['newBuilder__Lorg_netbeans_html_context_spi_Contexts$Builder_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.find__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2 = function(lcA0, lcA1) {
var stA0 = (refs_org_netbeans_html_context_impl_CtxImpl || (refs_org_netbeans_html_context_impl_CtxImpl = org_netbeans_html_context_impl_CtxImpl(false))).find__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2(lcA0, lcA1);
return stA0;

};
c['find__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.fillInByProviders__ZLjava_lang_Class_2Lorg_netbeans_html_context_spi_Contexts$Builder_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcI2 = 0;
try {
var stA0 = invoker.getClassLoader__Ljava_lang_ClassLoader_2(lcA0);
var lcA3 = stA0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_SecurityException']) {var stA0 = e;{ gt = 10; break IF; }}
throw e;
}{ gt = 14; break IF; }
    }
    X_10: for (;;) { IF: if (gt <= 10) {
var lcA4 = stA0;
var lcA3 = null;
    }
    X_14: for (;;) { IF: if (gt <= 14) {
var stA0 = new org_netbeans_html_context_spi_Contexts$ClassSet;
(refs_org_netbeans_html_context_spi_Contexts$ClassSet || (refs_org_netbeans_html_context_spi_Contexts$ClassSet = org_netbeans_html_context_spi_Contexts$ClassSet(false))).constructor.cons__VLjava_lang_Class_2.call(stA0, null);
var lcA4 = stA0;
var stA0 = (refs_java_util_ServiceLoader || (refs_java_util_ServiceLoader = vm.java_util_ServiceLoader(false)))['load__Ljava_util_ServiceLoader_2Ljava_lang_Class_2Ljava_lang_ClassLoader_2']((refs_org_netbeans_html_context_spi_Contexts$Provider || (refs_org_netbeans_html_context_spi_Contexts$Provider = org_netbeans_html_context_spi_Contexts$Provider(false))).constructor.$class, lcA3);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA5 = stA0;
    }
    X_35: for (;;) { IF: if (gt <= 35) {

var stI0 = invoker.hasNext__Z(lcA5);
if ((stI0) == 0) { gt = 87; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA5);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_context_spi_Contexts$Provider']) vm.java_lang_Class(false).castEx(stA0, 'org.netbeans.html.context.spi.Contexts$Provider');
var lcA6 = stA0;
var stA0 = lcA4;var stA1 = invoker.getClass__Ljava_lang_Class_2(lcA6);
var stI0 = stA0.add__ZLjava_lang_Class_2(stA1);
if ((stI0) != 0) { gt = 73; break IF; }
{ gt = 0; continue X_35; }
    }
    X_73: for (;;) { IF: if (gt <= 73) {

invoker.fillContext__VLorg_netbeans_html_context_spi_Contexts$Builder_2Ljava_lang_Class_2(lcA6,lcA1, lcA0);
var lcI2 = 1;
{ gt = 0; continue X_35; }
    }
    X_87: for (;;) { IF: if (gt <= 87) {
try {
var stA0 = (refs_org_netbeans_html_context_spi_Contexts$Provider || (refs_org_netbeans_html_context_spi_Contexts$Provider = org_netbeans_html_context_spi_Contexts$Provider(false))).constructor.$class;var stA1 = invoker.getClassLoader__Ljava_lang_ClassLoader_2((refs_org_netbeans_html_context_spi_Contexts$Provider || (refs_org_netbeans_html_context_spi_Contexts$Provider = org_netbeans_html_context_spi_Contexts$Provider(false))).constructor.$class);
var stA0 = (refs_java_util_ServiceLoader || (refs_java_util_ServiceLoader = vm.java_util_ServiceLoader(false)))['load__Ljava_util_ServiceLoader_2Ljava_lang_Class_2Ljava_lang_ClassLoader_2'](stA0, stA1);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA5 = stA0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_SecurityException']) {var stA0 = e;{ gt = 157; break IF; }}
throw e;
}    }
    X_102: for (;;) { IF: if (gt <= 102) {
try {
var stI0 = invoker.hasNext__Z(lcA5);
if ((stI0) == 0) { gt = 154; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA5);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_context_spi_Contexts$Provider']) vm.java_lang_Class(false).castEx(stA0, 'org.netbeans.html.context.spi.Contexts$Provider');
var lcA6 = stA0;
var stA0 = lcA4;var stA1 = invoker.getClass__Ljava_lang_Class_2(lcA6);
var stI0 = stA0.add__ZLjava_lang_Class_2(stA1);
if ((stI0) != 0) { gt = 140; break IF; }
{ gt = 0; continue X_102; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_SecurityException']) {var stA0 = e;{ gt = 157; break IF; }}
throw e;
}    }
    X_140: for (;;) { IF: if (gt <= 140) {
try {
invoker.fillContext__VLorg_netbeans_html_context_spi_Contexts$Builder_2Ljava_lang_Class_2(lcA6,lcA1, lcA0);
var lcI2 = 1;
{ gt = 0; continue X_102; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_SecurityException']) {var stA0 = e;{ gt = 157; break IF; }}
throw e;
}    }
    X_154: for (;;) { IF: if (gt <= 154) {
{ gt = 166; break IF; }
    }
    X_157: for (;;) { IF: if (gt <= 157) {
var lcA5 = stA0;
if ((lcI2) != 0) { gt = 166; break IF; }
{ var stA0 = lcA5; throw lcA5; }
    }
    X_166: for (;;) { IF: if (gt <= 166) {

if ((lcI2) != 0) { gt = 232; break IF; }
var stA0 = (refs_java_util_ServiceLoader || (refs_java_util_ServiceLoader = vm.java_util_ServiceLoader(false)))['load__Ljava_util_ServiceLoader_2Ljava_lang_Class_2']((refs_org_netbeans_html_context_spi_Contexts$Provider || (refs_org_netbeans_html_context_spi_Contexts$Provider = org_netbeans_html_context_spi_Contexts$Provider(false))).constructor.$class);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA5 = stA0;
    }
    X_180: for (;;) { IF: if (gt <= 180) {

var stI0 = invoker.hasNext__Z(lcA5);
if ((stI0) == 0) { gt = 232; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA5);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_context_spi_Contexts$Provider']) vm.java_lang_Class(false).castEx(stA0, 'org.netbeans.html.context.spi.Contexts$Provider');
var lcA6 = stA0;
var stA0 = lcA4;var stA1 = invoker.getClass__Ljava_lang_Class_2(lcA6);
var stI0 = stA0.add__ZLjava_lang_Class_2(stA1);
if ((stI0) != 0) { gt = 218; break IF; }
{ gt = 0; continue X_180; }
    }
    X_218: for (;;) { IF: if (gt <= 218) {

invoker.fillContext__VLorg_netbeans_html_context_spi_Contexts$Builder_2Ljava_lang_Class_2(lcA6,lcA1, lcA0);
var lcI2 = 1;
{ gt = 0; continue X_180; }
    }
    X_232: for (;;) { IF: if (gt <= 232) {

return lcI2;

    }
}}}}}}}}}}}}}}
};
c['fillInByProviders__ZLjava_lang_Class_2Lorg_netbeans_html_context_spi_Contexts$Builder_2'] = m;

    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_context_spi_ContextsfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_context_spi_Contexts', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_context_spi_ContextsfillInstOf });
    org_netbeans_html_context_spi_ContextsfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/context/spi/Contexts';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    var refs_org_netbeans_html_context_spi_Contexts$Builder;
    var refs_org_netbeans_html_context_impl_CtxImpl;
    var refs_org_netbeans_html_context_spi_Contexts$ClassSet;
    var refs_org_netbeans_html_context_spi_Contexts$Provider;
    var refs_java_util_ServiceLoader;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_context_spi_Contexts = registerClass(exports,'org_netbeans_html_context_spi_Contexts',org_netbeans_html_context_spi_Contexts);

vm.java_util_ServiceLoader = link('java/util/ServiceLoader', function(f) { vm.java_util_ServiceLoader =  f; });

function org_netbeans_html_context_spi_Contexts$Provider() {
  var m;
  var CLS = org_netbeans_html_context_spi_Contexts$Provider;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = c.fillContext__VLorg_netbeans_html_context_spi_Contexts$Builder_2Ljava_lang_Class_2 = function(lcA1, lcA2) {
};
c['fillContext__VLorg_netbeans_html_context_spi_Contexts$Builder_2Ljava_lang_Class_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_context_spi_Contexts$ProviderfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_context_spi_Contexts$Provider', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_context_spi_Contexts$ProviderfillInstOf });
    org_netbeans_html_context_spi_Contexts$ProviderfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/context/spi/Contexts$Provider';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 1537;
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
vm.org_netbeans_html_context_spi_Contexts$Provider = registerClass(exports,'org_netbeans_html_context_spi_Contexts$Provider',org_netbeans_html_context_spi_Contexts$Provider);


function org_netbeans_html_context_spi_Contexts$ClassSet() {
  var m;
  var CLS = org_netbeans_html_context_spi_Contexts$ClassSet;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._clazz = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_context_spi_Contexts$ClassSet_clazz'] = v; return this['fld_org_netbeans_html_context_spi_Contexts$ClassSet_clazz']; };
  m = c._next = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_context_spi_Contexts$ClassSet_next'] = v; return this['fld_org_netbeans_html_context_spi_Contexts$ClassSet_next']; };
    m = CLS.cons__VLjava_lang_Class_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_org_netbeans_html_context_spi_Contexts$ClassSet_clazz'] = lcA1;
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.add__ZLjava_lang_Class_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA0['fld_org_netbeans_html_context_spi_Contexts$ClassSet_clazz']) !== (lcA1)) { gt = 10; break IF; }
return 0;
    }
    X_10: for (;;) { IF: if (gt <= 10) {

if ((lcA0['fld_org_netbeans_html_context_spi_Contexts$ClassSet_next']) !== null) { gt = 31; break IF; }
var stA0 = lcA0;var stA1 = new org_netbeans_html_context_spi_Contexts$ClassSet;
c.constructor.cons__VLjava_lang_Class_2.call(stA1, lcA1);
stA0['fld_org_netbeans_html_context_spi_Contexts$ClassSet_next'] = stA1;
return 1;
    }
    X_31: for (;;) { IF: if (gt <= 31) {

var stI0 = lcA0['fld_org_netbeans_html_context_spi_Contexts$ClassSet_next'].add__ZLjava_lang_Class_2(lcA1);
return stI0;

    }
}}}
};
    m.access = 0;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_context_spi_Contexts$ClassSetfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_context_spi_Contexts$ClassSet', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_context_spi_Contexts$ClassSetfillInstOf });
    org_netbeans_html_context_spi_Contexts$ClassSetfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/context/spi/Contexts$ClassSet';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_context_spi_Contexts$ClassSet_clazz'] = null;
    this['fld_org_netbeans_html_context_spi_Contexts$ClassSet_next'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_context_spi_Contexts$ClassSet = org_netbeans_html_context_spi_Contexts$ClassSet;

vm.java_lang_SecurityException = link('java/lang/SecurityException', function(f) { vm.java_lang_SecurityException =  f; });

function org_netbeans_html_context_impl_CtxImpl() {
  var m;
  var CLS = org_netbeans_html_context_impl_CtxImpl;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._techs = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_context_impl_CtxImpl_techs'] = v; return this['fld_org_netbeans_html_context_impl_CtxImpl_techs']; };
  m = c._context = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_context_impl_CtxImpl_context'] = v; return this['fld_org_netbeans_html_context_impl_CtxImpl_context']; };
    m = CLS.cons__V_3Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = lcA1;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lorg/netbeans/html/context/impl/CtxImpl$Bind;', vm.org_netbeans_html_context_impl_CtxImpl$Bind, 0);
c.constructor.cons__V_3Ljava_lang_Object_2_3Lorg_netbeans_html_context_impl_CtxImpl$Bind_2.call(stA0, stA1, stA2);
return;

};
    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__V_3Ljava_lang_Object_2_3Lorg_netbeans_html_context_impl_CtxImpl$Bind_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
lcA0['fld_org_netbeans_html_context_impl_CtxImpl_techs'] = lcA2;
lcA0['fld_org_netbeans_html_context_impl_CtxImpl_context'] = lcA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.find__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = (refs_org_netbeans_html_context_impl_CtxAccssr || (refs_org_netbeans_html_context_impl_CtxAccssr = org_netbeans_html_context_impl_CtxAccssr(false))).getDefault__Lorg_netbeans_html_context_impl_CtxAccssr_2();
var stA0 = stA0.find__Lorg_netbeans_html_context_impl_CtxImpl_2Lnet_java_html_BrwsrCtx_2(lcA0);
var lcA2 = stA0;
var lcA3 = lcA2['fld_org_netbeans_html_context_impl_CtxImpl_techs'];
var lcI4 = (lcA3).length;
var lcI5 = 0;
    }
    X_20: for (;;) { IF: if (gt <= 20) {

if ((lcI5) >= (lcI4)) { gt = 58; break IF; }
var lcA6 = (lcA3[lcI5] || Array.at(lcA3, lcI5));
var stA0 = lcA1;var stA1 = (refs_org_netbeans_html_context_impl_CtxImpl$Bind || (refs_org_netbeans_html_context_impl_CtxImpl$Bind = org_netbeans_html_context_impl_CtxImpl$Bind(false))).access$000__Ljava_lang_Class_2Lorg_netbeans_html_context_impl_CtxImpl$Bind_2(lcA6);
if ((stA0) !== (stA1)) { gt = 52; break IF; }
var stA0 = lcA1;var stA1 = (refs_org_netbeans_html_context_impl_CtxImpl$Bind || (refs_org_netbeans_html_context_impl_CtxImpl$Bind = org_netbeans_html_context_impl_CtxImpl$Bind(false))).access$100__Ljava_lang_Object_2Lorg_netbeans_html_context_impl_CtxImpl$Bind_2(lcA6);
var stA0 = invoker.cast__Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1);
return stA0;
    }
    X_52: for (;;) { IF: if (gt <= 52) {
lcI5++;
{ gt = 0; continue X_20; }
    }
    X_58: for (;;) { IF: if (gt <= 58) {

return null;

    }
}}}}
};
    m.access = 9;
    m.cls = CLS;
    m = c.build__Lnet_java_html_BrwsrCtx_2 = function() {
  var  lcA0 = this;
var stA0 = new org_netbeans_html_context_impl_CtxImpl$BindCompare;
(refs_org_netbeans_html_context_impl_CtxImpl$BindCompare || (refs_org_netbeans_html_context_impl_CtxImpl$BindCompare = org_netbeans_html_context_impl_CtxImpl$BindCompare(false))).constructor.cons__VLorg_netbeans_html_context_impl_CtxImpl_2Lorg_netbeans_html_context_impl_CtxImpl$1_2.call(stA0, lcA0, null);
stA0.sort__V_3Lorg_netbeans_html_context_impl_CtxImpl$Bind_2(lcA0['fld_org_netbeans_html_context_impl_CtxImpl_techs']);
var stA0 = new org_netbeans_html_context_impl_CtxImpl;
var stA1 = stA0;var stA2 = lcA0['fld_org_netbeans_html_context_impl_CtxImpl_context'];var stA3 = invoker.clone__Ljava_lang_Object_2(lcA0['fld_org_netbeans_html_context_impl_CtxImpl_techs']);
if (stA3 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](stA3, 1, vm.org_netbeans_html_context_impl_CtxImpl$Bind)) vm.java_lang_Class(false).castEx(stA3, '');
c.constructor.cons__V_3Ljava_lang_Object_2_3Lorg_netbeans_html_context_impl_CtxImpl$Bind_2.call(stA1, stA2, stA3);
var lcA1 = stA0;
var stA0 = (refs_org_netbeans_html_context_impl_CtxAccssr || (refs_org_netbeans_html_context_impl_CtxAccssr = org_netbeans_html_context_impl_CtxAccssr(false))).getDefault__Lorg_netbeans_html_context_impl_CtxAccssr_2();
var stA0 = stA0.newContext__Lnet_java_html_BrwsrCtx_2Lorg_netbeans_html_context_impl_CtxImpl_2(lcA1);
var lcA2 = stA0;
return lcA2;

};
    m.access = 1;
    m.cls = CLS;
    m = c.register__VLjava_lang_Class_2Ljava_lang_Object_2I = function(lcA1, lcA2, lcI3) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = new org_netbeans_html_context_impl_CtxImpl$BindCompare;
(refs_org_netbeans_html_context_impl_CtxImpl$BindCompare || (refs_org_netbeans_html_context_impl_CtxImpl$BindCompare = org_netbeans_html_context_impl_CtxImpl$BindCompare(false))).constructor.cons__VLorg_netbeans_html_context_impl_CtxImpl_2Lorg_netbeans_html_context_impl_CtxImpl$1_2.call(stA1, lcA0, null);
var stA2 = lcA0['fld_org_netbeans_html_context_impl_CtxImpl_techs'];var stA3 = new org_netbeans_html_context_impl_CtxImpl$Bind;
(refs_org_netbeans_html_context_impl_CtxImpl$Bind || (refs_org_netbeans_html_context_impl_CtxImpl$Bind = org_netbeans_html_context_impl_CtxImpl$Bind(false))).constructor.cons__VLjava_lang_Class_2Ljava_lang_Object_2I.call(stA3, lcA1, lcA2, lcI3);
var stA1 = (refs_org_netbeans_html_context_impl_CtxImpl$BindCompare || (refs_org_netbeans_html_context_impl_CtxImpl$BindCompare = org_netbeans_html_context_impl_CtxImpl$BindCompare(false))).access$300___3Lorg_netbeans_html_context_impl_CtxImpl$Bind_2Lorg_netbeans_html_context_impl_CtxImpl$BindCompare_2_3Lorg_netbeans_html_context_impl_CtxImpl$Bind_2Lorg_netbeans_html_context_impl_CtxImpl$Bind_2(stA1, stA2, stA3);
stA0['fld_org_netbeans_html_context_impl_CtxImpl_techs'] = stA1;
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.access$400___3Ljava_lang_Object_2Lorg_netbeans_html_context_impl_CtxImpl_2 = function(lcA0) {
return lcA0['fld_org_netbeans_html_context_impl_CtxImpl_context'];

};
    m.access = 4104;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_context_impl_CtxImplfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_context_impl_CtxImpl', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_context_impl_CtxImplfillInstOf });
    org_netbeans_html_context_impl_CtxImplfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/context/impl/CtxImpl';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    var refs_org_netbeans_html_context_impl_CtxAccssr;
    var refs_org_netbeans_html_context_impl_CtxImpl$Bind;
    var refs_org_netbeans_html_context_impl_CtxImpl$BindCompare;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_context_impl_CtxImpl_techs'] = null;
    this['fld_org_netbeans_html_context_impl_CtxImpl_context'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_context_impl_CtxImpl = org_netbeans_html_context_impl_CtxImpl;


function org_netbeans_html_context_impl_CtxImpl$BindCompare() {
  var m;
  var CLS = org_netbeans_html_context_impl_CtxImpl$BindCompare;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_context_impl_CtxImpl$BindCompare_this$0'] = v; return this['fld_org_netbeans_html_context_impl_CtxImpl$BindCompare_this$0']; };
    m = CLS.cons__VLorg_netbeans_html_context_impl_CtxImpl_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_org_netbeans_html_context_impl_CtxImpl$BindCompare_this$0'] = lcA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.sort__V_3Lorg_netbeans_html_context_impl_CtxImpl$Bind_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcI2 = 0;
    }
    X_2: for (;;) { IF: if (gt <= 2) {

if ((lcI2) >= ((lcA1).length)) { gt = 77; break IF; }
var lcA3 = (lcA1[lcI2] || Array.at(lcA1, lcI2));
var lcI4 = lcI2;
var lcI5 = (((lcI2) + (1)) | 0);
    }
    X_20: for (;;) { IF: if (gt <= 20) {

if ((lcI5) >= ((lcA1).length)) { gt = 54; break IF; }
var stI0 = c.compare__ILorg_netbeans_html_context_impl_CtxImpl$Bind_2Lorg_netbeans_html_context_impl_CtxImpl$Bind_2.call(lcA0, lcA3, (lcA1[lcI5] || Array.at(lcA1, lcI5)));
if ((stI0) <= 0) { gt = 48; break IF; }
var lcA3 = (lcA1[lcI5] || Array.at(lcA1, lcI5));
var lcI4 = lcI5;
    }
    X_48: for (;;) { IF: if (gt <= 48) {
lcI5++;
{ gt = 0; continue X_20; }
    }
    X_54: for (;;) { IF: if (gt <= 54) {

if ((lcI4) == (lcI2)) { gt = 71; break IF; }
Array.at(lcA1, lcI4, (lcA1[lcI2] || Array.at(lcA1, lcI2)));
Array.at(lcA1, lcI2, lcA3);
    }
    X_71: for (;;) { IF: if (gt <= 71) {
lcI2++;
{ gt = 0; continue X_2; }
    }
    X_77: for (;;) { IF: if (gt <= 77) {
return;

    }
}}}}}}}
};
    m.access = 0;
    m.cls = CLS;
    m = c.add___3Lorg_netbeans_html_context_impl_CtxImpl$Bind_2_3Lorg_netbeans_html_context_impl_CtxImpl$Bind_2Lorg_netbeans_html_context_impl_CtxImpl$Bind_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lorg/netbeans/html/context/impl/CtxImpl$Bind;', vm.org_netbeans_html_context_impl_CtxImpl$Bind, ((((lcA1).length) + (1)) | 0));
var lcA3 = stA0;
var lcI4 = 0;
    }
    X_11: for (;;) { IF: if (gt <= 11) {

if ((lcI4) >= ((lcA1).length)) { gt = 32; break IF; }
Array.at(lcA3, lcI4, (lcA1[lcI4] || Array.at(lcA1, lcI4)));
lcI4++;
{ gt = 0; continue X_11; }
    }
    X_32: for (;;) { IF: if (gt <= 32) {

Array.at(lcA3, (lcA1).length, lcA2);
return lcA3;

    }
}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.isPrefered__ZLorg_netbeans_html_context_impl_CtxImpl$Bind_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = (refs_org_netbeans_html_context_impl_CtxImpl$Bind || (refs_org_netbeans_html_context_impl_CtxImpl$Bind = org_netbeans_html_context_impl_CtxImpl$Bind(false))).access$100__Ljava_lang_Object_2Lorg_netbeans_html_context_impl_CtxImpl$Bind_2(lcA1);
var stA0 = invoker.getClass__Ljava_lang_Class_2(stA0);
var lcA2 = stA0;
var stA0 = invoker.getAnnotation__Ljava_lang_annotation_Annotation_2Ljava_lang_Class_2(lcA2,(refs_org_netbeans_html_context_spi_Contexts$Id || (refs_org_netbeans_html_context_spi_Contexts$Id = org_netbeans_html_context_spi_Contexts$Id(false))).constructor.$class);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_context_spi_Contexts$Id']) vm.java_lang_Class(false).castEx(stA0, 'org.netbeans.html.context.spi.Contexts$Id');
var lcA3 = stA0;
if ((lcA3) !== null) { gt = 24; break IF; }
return 0;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

var stA0 = invoker.value___3Ljava_lang_String_2(lcA3);
var lcA4 = stA0;
var lcI5 = (lcA4).length;
var lcI6 = 0;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if ((lcI6) >= (lcI5)) { gt = 109; break IF; }
var lcA7 = (lcA4[lcI6] || Array.at(lcA4, lcI6));
var stA0 = (refs_org_netbeans_html_context_impl_CtxImpl || (refs_org_netbeans_html_context_impl_CtxImpl = org_netbeans_html_context_impl_CtxImpl(false))).access$400___3Ljava_lang_Object_2Lorg_netbeans_html_context_impl_CtxImpl_2(lcA0['fld_org_netbeans_html_context_impl_CtxImpl$BindCompare_this$0']);
var lcA8 = stA0;
var lcI9 = (lcA8).length;
var lcI10 = 0;
    }
    X_71: for (;;) { IF: if (gt <= 71) {

if ((lcI10) >= (lcI9)) { gt = 103; break IF; }
var lcA11 = (lcA8[lcI10] || Array.at(lcA8, lcI10));
var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,lcA11);
if ((stI0) == 0) { gt = 97; break IF; }
return 1;
    }
    X_97: for (;;) { IF: if (gt <= 97) {
lcI10++;
{ gt = 0; continue X_71; }
    }
    X_103: for (;;) { IF: if (gt <= 103) {
lcI6++;
{ gt = 0; continue X_40; }
    }
    X_109: for (;;) { IF: if (gt <= 109) {

return 0;

    }
}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.compare__ILorg_netbeans_html_context_impl_CtxImpl$Bind_2Lorg_netbeans_html_context_impl_CtxImpl$Bind_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = c.isPrefered__ZLorg_netbeans_html_context_impl_CtxImpl$Bind_2.call(lcA0, lcA1);
var lcI3 = stI0;
var stI0 = c.isPrefered__ZLorg_netbeans_html_context_impl_CtxImpl$Bind_2.call(lcA0, lcA2);
var lcI4 = stI0;
if ((lcI3) == (lcI4)) { gt = 29; break IF; }
if ((lcI3) == 0) { gt = 27; break IF; }
var stI0 = -1;{ gt = 28; break IF; }
    }
    X_27: for (;;) { IF: if (gt <= 27) {

var stI0 = 1;    }
    X_28: for (;;) { IF: if (gt <= 28) {
return stI0;
    }
    X_29: for (;;) { IF: if (gt <= 29) {

var stI0 = (refs_org_netbeans_html_context_impl_CtxImpl$Bind || (refs_org_netbeans_html_context_impl_CtxImpl$Bind = org_netbeans_html_context_impl_CtxImpl$Bind(false))).access$500__ILorg_netbeans_html_context_impl_CtxImpl$Bind_2(lcA1);
var stI1 = (refs_org_netbeans_html_context_impl_CtxImpl$Bind || (refs_org_netbeans_html_context_impl_CtxImpl$Bind = org_netbeans_html_context_impl_CtxImpl$Bind(false))).access$500__ILorg_netbeans_html_context_impl_CtxImpl$Bind_2(lcA2);
if ((stI0) == (stI1)) { gt = 50; break IF; }
var stI0 = (refs_org_netbeans_html_context_impl_CtxImpl$Bind || (refs_org_netbeans_html_context_impl_CtxImpl$Bind = org_netbeans_html_context_impl_CtxImpl$Bind(false))).access$500__ILorg_netbeans_html_context_impl_CtxImpl$Bind_2(lcA1);
var stI1 = (refs_org_netbeans_html_context_impl_CtxImpl$Bind || (refs_org_netbeans_html_context_impl_CtxImpl$Bind = org_netbeans_html_context_impl_CtxImpl$Bind(false))).access$500__ILorg_netbeans_html_context_impl_CtxImpl$Bind_2(lcA2);
return (((stI0) - (stI1)) | 0);
    }
    X_50: for (;;) { IF: if (gt <= 50) {

var stA0 = (refs_org_netbeans_html_context_impl_CtxImpl$Bind || (refs_org_netbeans_html_context_impl_CtxImpl$Bind = org_netbeans_html_context_impl_CtxImpl$Bind(false))).access$000__Ljava_lang_Class_2Lorg_netbeans_html_context_impl_CtxImpl$Bind_2(lcA1);
var stA0 = invoker.getName__Ljava_lang_String_2(stA0);
var stA1 = (refs_org_netbeans_html_context_impl_CtxImpl$Bind || (refs_org_netbeans_html_context_impl_CtxImpl$Bind = org_netbeans_html_context_impl_CtxImpl$Bind(false))).access$000__Ljava_lang_Class_2Lorg_netbeans_html_context_impl_CtxImpl$Bind_2(lcA2);
var stA1 = invoker.getName__Ljava_lang_String_2(stA1);
var stI0 = invoker.compareTo__ILjava_lang_String_2(stA0,stA1);
return stI0;

    }
}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = CLS.cons__VLorg_netbeans_html_context_impl_CtxImpl_2Lorg_netbeans_html_context_impl_CtxImpl$1_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
c.constructor.cons__VLorg_netbeans_html_context_impl_CtxImpl_2.call(lcA0, lcA1);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$300___3Lorg_netbeans_html_context_impl_CtxImpl$Bind_2Lorg_netbeans_html_context_impl_CtxImpl$BindCompare_2_3Lorg_netbeans_html_context_impl_CtxImpl$Bind_2Lorg_netbeans_html_context_impl_CtxImpl$Bind_2 = function(lcA0, lcA1, lcA2) {
var stA0 = c.add___3Lorg_netbeans_html_context_impl_CtxImpl$Bind_2_3Lorg_netbeans_html_context_impl_CtxImpl$Bind_2Lorg_netbeans_html_context_impl_CtxImpl$Bind_2.call(lcA0, lcA1, lcA2);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_context_impl_CtxImpl$BindComparefillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_context_impl_CtxImpl$BindCompare', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_context_impl_CtxImpl$BindComparefillInstOf });
    org_netbeans_html_context_impl_CtxImpl$BindComparefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/context/impl/CtxImpl$BindCompare';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    var refs_org_netbeans_html_context_impl_CtxImpl$Bind;
    var refs_org_netbeans_html_context_spi_Contexts$Id;
    var refs_org_netbeans_html_context_impl_CtxImpl;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_context_impl_CtxImpl$BindCompare_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_context_impl_CtxImpl$BindCompare = org_netbeans_html_context_impl_CtxImpl$BindCompare;


function org_netbeans_html_context_spi_Contexts$Id() {
  var m;
  var CLS = org_netbeans_html_context_spi_Contexts$Id;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = c.value___3Ljava_lang_String_2 = function() {
};
c['value___3Ljava_lang_String_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_context_spi_Contexts$IdfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_context_spi_Contexts$Id', { value : true });
      vm.java_lang_annotation_Annotation(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_context_spi_Contexts$IdfillInstOf });
    org_netbeans_html_context_spi_Contexts$IdfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/context/spi/Contexts$Id';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_annotation_Annotation(false).constructor.$class
    ]; };
    CLS.$class.access = 9729;
    CLS.$class.cnstr = CLS;
    CLS.$class.anno = {"Ljava/lang/annotation/Retention;" : {
"value" : (refs_java_lang_annotation_RetentionPolicy || (refs_java_lang_annotation_RetentionPolicy = vm.java_lang_annotation_RetentionPolicy(false)))['valueOf__Ljava_lang_annotation_RetentionPolicy_2Ljava_lang_String_2']('RUNTIME')
}
,"Ljava/lang/annotation/Target;" : {
"value" : [(refs_java_lang_annotation_ElementType || (refs_java_lang_annotation_ElementType = vm.java_lang_annotation_ElementType(false)))['valueOf__Ljava_lang_annotation_ElementType_2Ljava_lang_String_2']('TYPE')]
}
,"Ljava/lang/annotation/Documented;" : {

}

    };
    var refs_java_lang_annotation_RetentionPolicy;
    var refs_java_lang_annotation_ElementType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_context_spi_Contexts$Id = registerClass(exports,'org_netbeans_html_context_spi_Contexts$Id',org_netbeans_html_context_spi_Contexts$Id);

vm.java_lang_annotation_Documented = link('java/lang/annotation/Documented', function(f) { vm.java_lang_annotation_Documented =  f; });
vm.java_lang_annotation_ElementType = link('java/lang/annotation/ElementType', function(f) { vm.java_lang_annotation_ElementType =  f; });
vm.java_lang_annotation_Target = link('java/lang/annotation/Target', function(f) { vm.java_lang_annotation_Target =  f; });
vm.java_lang_annotation_RetentionPolicy = link('java/lang/annotation/RetentionPolicy', function(f) { vm.java_lang_annotation_RetentionPolicy =  f; });
vm.java_lang_annotation_Retention = link('java/lang/annotation/Retention', function(f) { vm.java_lang_annotation_Retention =  f; });
vm.java_lang_annotation_Annotation = link('java/lang/annotation/Annotation', function(f) { vm.java_lang_annotation_Annotation =  f; });

function org_netbeans_html_context_impl_CtxImpl$Bind() {
  var m;
  var CLS = org_netbeans_html_context_impl_CtxImpl$Bind;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._clazz = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_context_impl_CtxImpl$Bind_clazz'] = v; return this['fld_org_netbeans_html_context_impl_CtxImpl$Bind_clazz']; };
  m = c._impl = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_context_impl_CtxImpl$Bind_impl'] = v; return this['fld_org_netbeans_html_context_impl_CtxImpl$Bind_impl']; };
  m = c._priority = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_context_impl_CtxImpl$Bind_priority'] = v; return this['fld_org_netbeans_html_context_impl_CtxImpl$Bind_priority']; };
    m = CLS.cons__VLjava_lang_Class_2Ljava_lang_Object_2I = function(lcA1, lcA2, lcI3) {
  var  lcA0 = this;
lcA0['fld_org_netbeans_html_context_impl_CtxImpl$Bind_clazz'] = lcA1;
lcA0['fld_org_netbeans_html_context_impl_CtxImpl$Bind_impl'] = lcA2;
lcA0['fld_org_netbeans_html_context_impl_CtxImpl$Bind_priority'] = lcI3;
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.toString__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"Bind{clazz=");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA0,lcA0['fld_org_netbeans_html_context_impl_CtxImpl$Bind_clazz']);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"@");
var stA1 = invoker.getClassLoader__Ljava_lang_ClassLoader_2(lcA0['fld_org_netbeans_html_context_impl_CtxImpl$Bind_clazz']);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,", impl=");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA0,lcA0['fld_org_netbeans_html_context_impl_CtxImpl$Bind_impl']);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,", priority=");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2I(stA0,lcA0['fld_org_netbeans_html_context_impl_CtxImpl$Bind_priority']);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(125));
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
return stA0;

};
c['toString__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.access$000__Ljava_lang_Class_2Lorg_netbeans_html_context_impl_CtxImpl$Bind_2 = function(lcA0) {
return lcA0['fld_org_netbeans_html_context_impl_CtxImpl$Bind_clazz'];

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$100__Ljava_lang_Object_2Lorg_netbeans_html_context_impl_CtxImpl$Bind_2 = function(lcA0) {
return lcA0['fld_org_netbeans_html_context_impl_CtxImpl$Bind_impl'];

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$500__ILorg_netbeans_html_context_impl_CtxImpl$Bind_2 = function(lcA0) {
return lcA0['fld_org_netbeans_html_context_impl_CtxImpl$Bind_priority'];

};
    m.access = 4104;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_context_impl_CtxImpl$BindfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_context_impl_CtxImpl$Bind', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_context_impl_CtxImpl$BindfillInstOf });
    org_netbeans_html_context_impl_CtxImpl$BindfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/context/impl/CtxImpl$Bind';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_StringBuilder;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_context_impl_CtxImpl$Bind_clazz'] = null;
    this['fld_org_netbeans_html_context_impl_CtxImpl$Bind_impl'] = null;
    this['fld_org_netbeans_html_context_impl_CtxImpl$Bind_priority'] = 0;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_context_impl_CtxImpl$Bind = org_netbeans_html_context_impl_CtxImpl$Bind;

vm.java_lang_StringBuilder = link('java/lang/StringBuilder', function(f) { vm.java_lang_StringBuilder =  f; });

function org_netbeans_html_context_spi_Contexts$Builder() {
  var m;
  var CLS = org_netbeans_html_context_spi_Contexts$Builder;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._impl = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_context_spi_Contexts$Builder_impl'] = v; return this['fld_org_netbeans_html_context_spi_Contexts$Builder_impl']; };
    m = CLS.cons__V_3Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = new org_netbeans_html_context_impl_CtxImpl;
(refs_org_netbeans_html_context_impl_CtxImpl || (refs_org_netbeans_html_context_impl_CtxImpl = org_netbeans_html_context_impl_CtxImpl(false))).constructor.cons__V_3Ljava_lang_Object_2.call(stA1, lcA1);
stA0['fld_org_netbeans_html_context_spi_Contexts$Builder_impl'] = stA1;
return;

};
CLS['cons__V_3Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.register__Lorg_netbeans_html_context_spi_Contexts$Builder_2Ljava_lang_Class_2Ljava_lang_Object_2I = function(lcA1, lcA2, lcI3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA2) !== null) { gt = 6; break IF; }
return lcA0;
    }
    X_6: for (;;) { IF: if (gt <= 6) {

if ((lcI3) > 0) { gt = 18; break IF; }
var stA0 = new vm.java_lang_IllegalStateException;
(refs_java_lang_IllegalStateException || (refs_java_lang_IllegalStateException = vm.java_lang_IllegalStateException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_org_netbeans_html_context_spi_Contexts$Builder_impl'].register__VLjava_lang_Class_2Ljava_lang_Object_2I(lcA1, lcA2, lcI3);
return lcA0;

    }
}}}
};
c['register__Lorg_netbeans_html_context_spi_Contexts$Builder_2Ljava_lang_Class_2Ljava_lang_Object_2I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.build__Lnet_java_html_BrwsrCtx_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0['fld_org_netbeans_html_context_spi_Contexts$Builder_impl'].build__Lnet_java_html_BrwsrCtx_2();
return stA0;

};
c['build__Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_context_spi_Contexts$BuilderfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_context_spi_Contexts$Builder', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_context_spi_Contexts$BuilderfillInstOf });
    org_netbeans_html_context_spi_Contexts$BuilderfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/context/spi/Contexts$Builder';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    var refs_org_netbeans_html_context_impl_CtxImpl;
    var refs_java_lang_IllegalStateException;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_context_spi_Contexts$Builder_impl'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_context_spi_Contexts$Builder = registerClass(exports,'org_netbeans_html_context_spi_Contexts$Builder',org_netbeans_html_context_spi_Contexts$Builder);

vm.java_lang_IllegalStateException = link('java/lang/IllegalStateException', function(f) { vm.java_lang_IllegalStateException =  f; });

function org_netbeans_html_context_impl_CtxAccssr() {
  var m;
  var CLS = org_netbeans_html_context_impl_CtxAccssr;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_DEFAULT'] = null;
  m = c._DEFAULT = function (v) {  if (arguments.length == 1) CLS['fld_DEFAULT'] = v; return CLS['fld_DEFAULT']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((c._DEFAULT()) === null) { gt = 18; break IF; }
var stA0 = new vm.java_lang_IllegalStateException;
(refs_java_lang_IllegalStateException || (refs_java_lang_IllegalStateException = vm.java_lang_IllegalStateException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }
    }
    X_18: for (;;) { IF: if (gt <= 18) {

c._DEFAULT(lcA0);
return;

    }
}}
};
CLS['cons__V'] = m;

    m.access = 4;
    m.cls = CLS;
    m = c.newContext__Lnet_java_html_BrwsrCtx_2Lorg_netbeans_html_context_impl_CtxImpl_2 = function(lcA1) {
};
    m.access = 1028;
    m.cls = CLS;
    m = c.find__Lorg_netbeans_html_context_impl_CtxImpl_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
};
    m.access = 1028;
    m.cls = CLS;
    m = c.getDefault__Lorg_netbeans_html_context_impl_CtxAccssr_2 = function() {
return c._DEFAULT();

};
    m.access = 8;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = net_java_html_BrwsrCtx(false))).findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2(c.constructor.$class);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_context_impl_CtxAccssrfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_context_impl_CtxAccssr', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_context_impl_CtxAccssrfillInstOf });
    org_netbeans_html_context_impl_CtxAccssrfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/context/impl/CtxAccssr';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 1057;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_java_lang_IllegalStateException;
    var refs_net_java_html_BrwsrCtx;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_context_impl_CtxAccssr = org_netbeans_html_context_impl_CtxAccssr;


function org_netbeans_html_context_impl_CtxImpl$1() {
  var m;
  var CLS = org_netbeans_html_context_impl_CtxImpl$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function org_netbeans_html_context_impl_CtxImpl$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_context_impl_CtxImpl$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_context_impl_CtxImpl$1fillInstOf });
    org_netbeans_html_context_impl_CtxImpl$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/context/impl/CtxImpl$1';
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
vm.org_netbeans_html_context_impl_CtxImpl$1 = org_netbeans_html_context_impl_CtxImpl$1;

  invoker.get__Ljava_lang_Object_2 = function(target) {
    return target['get__Ljava_lang_Object_2']();
  };
  invoker.run__V = function(target) {
    return target['run__V']();
  };
  invoker.execute__VLjava_lang_Runnable_2 = function(target, p1) {
    return target['execute__VLjava_lang_Runnable_2'](p1);
  };
  invoker.set__VLjava_lang_Object_2 = function(target, p1) {
    return target['set__VLjava_lang_Object_2'](p1);
  };
  invoker.getClassLoader__Ljava_lang_ClassLoader_2 = function(target) {
    return target['getClassLoader__Ljava_lang_ClassLoader_2']();
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
  invoker.getClass__Ljava_lang_Class_2 = function(target) {
    return target['getClass__Ljava_lang_Class_2']();
  };
  invoker.fillContext__VLorg_netbeans_html_context_spi_Contexts$Builder_2Ljava_lang_Class_2 = function(target, p1, p2) {
    return target['fillContext__VLorg_netbeans_html_context_spi_Contexts$Builder_2Ljava_lang_Class_2'](p1,p2);
  };
  invoker.cast__Ljava_lang_Object_2Ljava_lang_Object_2 = function(target, p1) {
    return target['cast__Ljava_lang_Object_2Ljava_lang_Object_2'](p1);
  };
  invoker.clone__Ljava_lang_Object_2 = function(target) {
    return target['clone__Ljava_lang_Object_2']();
  };
  invoker.getAnnotation__Ljava_lang_annotation_Annotation_2Ljava_lang_Class_2 = function(target, p1) {
    return target['getAnnotation__Ljava_lang_annotation_Annotation_2Ljava_lang_Class_2'](p1);
  };
  invoker.value___3Ljava_lang_String_2 = function(target) {
    return target['value___3Ljava_lang_String_2']();
  };
  invoker.equals__ZLjava_lang_Object_2 = function(target, p1) {
    return target['equals__ZLjava_lang_Object_2'](p1);
  };
  invoker.getName__Ljava_lang_String_2 = function(target) {
    return target['getName__Ljava_lang_String_2']();
  };
  invoker.compareTo__ILjava_lang_String_2 = function(target, p1) {
    return target['compareTo__ILjava_lang_String_2'](p1);
  };
  invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2 = function(target, p1) {
    return target['append__Ljava_lang_StringBuilder_2Ljava_lang_String_2'](p1);
  };
  invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2 = function(target, p1) {
    return target['append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2'](p1);
  };
  invoker.append__Ljava_lang_StringBuilder_2I = function(target, p1) {
    return target['append__Ljava_lang_StringBuilder_2I'](p1);
  };
  invoker.append__Ljava_lang_StringBuilder_2C = function(target, p1) {
    return target['append__Ljava_lang_StringBuilder_2C'](p1);
  };
  invoker.toString__Ljava_lang_String_2 = function(target) {
    return target['toString__Ljava_lang_String_2']();
  };
  exports['registerResource']('META-INF/MANIFEST.MF', 'TWFuaWZlc3QtVmVyc2lvbjogMS4wDQpCbmQtTGFzdE1vZGlmaWVkOiAxNTU3MDM1ODUzMDE5DQpCdWlsZC1KZGs6IDEuOC4wXzEyMg0KQnVpbHQtQnk6IGRldmVsDQpCdW5kbGUtRGVzY3JpcHRpb246IFJlcHJlc2VudGF0aW9uIG9mIGFuIEhUTUwgcGFnZSBjb250ZXh0IGEgSmF2YSBwcm9ncmENCiBtIG9wZXJhdGVzIGluLg0KQnVuZGxlLURvY1VSTDogaHR0cDovL2FwYWNoZS5vcmcNCkJ1bmRsZS1MaWNlbnNlOiBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wLnR4dA0KQnVuZGxlLU1hbmlmZXN0VmVyc2lvbjogMg0KQnVuZGxlLU5hbWU6IEhUTUwgQ29udGV4dA0KQnVuZGxlLVN5bWJvbGljTmFtZTogbmV0LmphdmEuaHRtbA0KQnVuZGxlLVZlbmRvcjogVGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uDQpCdW5kbGUtVmVyc2lvbjogMS42LjENCkNyZWF0ZWQtQnk6IEFwYWNoZSBNYXZlbiBCdW5kbGUgUGx1Z2luDQpFY2xpcHNlLUJ1ZGR5UG9saWN5OiBkZXBlbmRlbnQNCkV4cG9ydC1QYWNrYWdlOiBuZXQuamF2YS5odG1sO3ZlcnNpb249IjEuNi4xIixvcmcubmV0YmVhbnMuaHRtbC5jb250ZXh0Lg0KIHNwaTt1c2VzOj0ibmV0LmphdmEuaHRtbCI7dmVyc2lvbj0iMS42LjEiDQpSZXF1aXJlLUNhcGFiaWxpdHk6IG9zZ2kuZXh0ZW5kZXI7cmVzb2x1dGlvbjo9b3B0aW9uYWw7ZmlsdGVyOj0iKG9zZ2kuZXgNCiB0ZW5kZXI9b3NnaS5zZXJ2aWNlbG9hZGVyLnByb2Nlc3NvcikiLG9zZ2kuc2VydmljZWxvYWRlcjtmaWx0ZXI6PSIob3NnaQ0KIC5zZXJ2aWNlbG9hZGVyPW9yZy5uZXRiZWFucy5odG1sLmNvbnRleHQuc3BpLkNvbnRleHRzJFByb3ZpZGVyKSI7Y2FyZGluDQogYWxpdHk6PW11bHRpcGxlO3Jlc29sdXRpb246PW9wdGlvbmFsDQpUb29sOiBCbmQtMi4xLjAuMjAxMzA0MjYtMTIyMjEzDQo=');
  exports['registerResource']('META-INF/DEPENDENCIES', 'Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tCi8vIFRyYW5zaXRpdmUgZGVwZW5kZW5jaWVzIG9mIHRoaXMgcHJvamVjdCBkZXRlcm1pbmVkIGZyb20gdGhlCi8vIG1hdmVuIHBvbSBvcmdhbml6ZWQgYnkgb3JnYW5pemF0aW9uLgovLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0KCkhUTUwgQ29udGV4dAoKCgoKCg==');
  exports['registerResource']('META-INF/LICENSE', 'CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwYWNoZSBMaWNlbnNlCiAgICAgICAgICAgICAgICAgICAgICAgICAgIFZlcnNpb24gMi4wLCBKYW51YXJ5IDIwMDQKICAgICAgICAgICAgICAgICAgICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzLwoKICAgVEVSTVMgQU5EIENPTkRJVElPTlMgRk9SIFVTRSwgUkVQUk9EVUNUSU9OLCBBTkQgRElTVFJJQlVUSU9OCgogICAxLiBEZWZpbml0aW9ucy4KCiAgICAgICJMaWNlbnNlIiBzaGFsbCBtZWFuIHRoZSB0ZXJtcyBhbmQgY29uZGl0aW9ucyBmb3IgdXNlLCByZXByb2R1Y3Rpb24sCiAgICAgIGFuZCBkaXN0cmlidXRpb24gYXMgZGVmaW5lZCBieSBTZWN0aW9ucyAxIHRocm91Z2ggOSBvZiB0aGlzIGRvY3VtZW50LgoKICAgICAgIkxpY2Vuc29yIiBzaGFsbCBtZWFuIHRoZSBjb3B5cmlnaHQgb3duZXIgb3IgZW50aXR5IGF1dGhvcml6ZWQgYnkKICAgICAgdGhlIGNvcHlyaWdodCBvd25lciB0aGF0IGlzIGdyYW50aW5nIHRoZSBMaWNlbnNlLgoKICAgICAgIkxlZ2FsIEVudGl0eSIgc2hhbGwgbWVhbiB0aGUgdW5pb24gb2YgdGhlIGFjdGluZyBlbnRpdHkgYW5kIGFsbAogICAgICBvdGhlciBlbnRpdGllcyB0aGF0IGNvbnRyb2wsIGFyZSBjb250cm9sbGVkIGJ5LCBvciBhcmUgdW5kZXIgY29tbW9uCiAgICAgIGNvbnRyb2wgd2l0aCB0aGF0IGVudGl0eS4gRm9yIHRoZSBwdXJwb3NlcyBvZiB0aGlzIGRlZmluaXRpb24sCiAgICAgICJjb250cm9sIiBtZWFucyAoaSkgdGhlIHBvd2VyLCBkaXJlY3Qgb3IgaW5kaXJlY3QsIHRvIGNhdXNlIHRoZQogICAgICBkaXJlY3Rpb24gb3IgbWFuYWdlbWVudCBvZiBzdWNoIGVudGl0eSwgd2hldGhlciBieSBjb250cmFjdCBvcgogICAgICBvdGhlcndpc2UsIG9yIChpaSkgb3duZXJzaGlwIG9mIGZpZnR5IHBlcmNlbnQgKDUwJSkgb3IgbW9yZSBvZiB0aGUKICAgICAgb3V0c3RhbmRpbmcgc2hhcmVzLCBvciAoaWlpKSBiZW5lZmljaWFsIG93bmVyc2hpcCBvZiBzdWNoIGVudGl0eS4KCiAgICAgICJZb3UiIChvciAiWW91ciIpIHNoYWxsIG1lYW4gYW4gaW5kaXZpZHVhbCBvciBMZWdhbCBFbnRpdHkKICAgICAgZXhlcmNpc2luZyBwZXJtaXNzaW9ucyBncmFudGVkIGJ5IHRoaXMgTGljZW5zZS4KCiAgICAgICJTb3VyY2UiIGZvcm0gc2hhbGwgbWVhbiB0aGUgcHJlZmVycmVkIGZvcm0gZm9yIG1ha2luZyBtb2RpZmljYXRpb25zLAogICAgICBpbmNsdWRpbmcgYnV0IG5vdCBsaW1pdGVkIHRvIHNvZnR3YXJlIHNvdXJjZSBjb2RlLCBkb2N1bWVudGF0aW9uCiAgICAgIHNvdXJjZSwgYW5kIGNvbmZpZ3VyYXRpb24gZmlsZXMuCgogICAgICAiT2JqZWN0IiBmb3JtIHNoYWxsIG1lYW4gYW55IGZvcm0gcmVzdWx0aW5nIGZyb20gbWVjaGFuaWNhbAogICAgICB0cmFuc2Zvcm1hdGlvbiBvciB0cmFuc2xhdGlvbiBvZiBhIFNvdXJjZSBmb3JtLCBpbmNsdWRpbmcgYnV0CiAgICAgIG5vdCBsaW1pdGVkIHRvIGNvbXBpbGVkIG9iamVjdCBjb2RlLCBnZW5lcmF0ZWQgZG9jdW1lbnRhdGlvbiwKICAgICAgYW5kIGNvbnZlcnNpb25zIHRvIG90aGVyIG1lZGlhIHR5cGVzLgoKICAgICAgIldvcmsiIHNoYWxsIG1lYW4gdGhlIHdvcmsgb2YgYXV0aG9yc2hpcCwgd2hldGhlciBpbiBTb3VyY2Ugb3IKICAgICAgT2JqZWN0IGZvcm0sIG1hZGUgYXZhaWxhYmxlIHVuZGVyIHRoZSBMaWNlbnNlLCBhcyBpbmRpY2F0ZWQgYnkgYQogICAgICBjb3B5cmlnaHQgbm90aWNlIHRoYXQgaXMgaW5jbHVkZWQgaW4gb3IgYXR0YWNoZWQgdG8gdGhlIHdvcmsKICAgICAgKGFuIGV4YW1wbGUgaXMgcHJvdmlkZWQgaW4gdGhlIEFwcGVuZGl4IGJlbG93KS4KCiAgICAgICJEZXJpdmF0aXZlIFdvcmtzIiBzaGFsbCBtZWFuIGFueSB3b3JrLCB3aGV0aGVyIGluIFNvdXJjZSBvciBPYmplY3QKICAgICAgZm9ybSwgdGhhdCBpcyBiYXNlZCBvbiAob3IgZGVyaXZlZCBmcm9tKSB0aGUgV29yayBhbmQgZm9yIHdoaWNoIHRoZQogICAgICBlZGl0b3JpYWwgcmV2aXNpb25zLCBhbm5vdGF0aW9ucywgZWxhYm9yYXRpb25zLCBvciBvdGhlciBtb2RpZmljYXRpb25zCiAgICAgIHJlcHJlc2VudCwgYXMgYSB3aG9sZSwgYW4gb3JpZ2luYWwgd29yayBvZiBhdXRob3JzaGlwLiBGb3IgdGhlIHB1cnBvc2VzCiAgICAgIG9mIHRoaXMgTGljZW5zZSwgRGVyaXZhdGl2ZSBXb3JrcyBzaGFsbCBub3QgaW5jbHVkZSB3b3JrcyB0aGF0IHJlbWFpbgogICAgICBzZXBhcmFibGUgZnJvbSwgb3IgbWVyZWx5IGxpbmsgKG9yIGJpbmQgYnkgbmFtZSkgdG8gdGhlIGludGVyZmFjZXMgb2YsCiAgICAgIHRoZSBXb3JrIGFuZCBEZXJpdmF0aXZlIFdvcmtzIHRoZXJlb2YuCgogICAgICAiQ29udHJpYnV0aW9uIiBzaGFsbCBtZWFuIGFueSB3b3JrIG9mIGF1dGhvcnNoaXAsIGluY2x1ZGluZwogICAgICB0aGUgb3JpZ2luYWwgdmVyc2lvbiBvZiB0aGUgV29yayBhbmQgYW55IG1vZGlmaWNhdGlvbnMgb3IgYWRkaXRpb25zCiAgICAgIHRvIHRoYXQgV29yayBvciBEZXJpdmF0aXZlIFdvcmtzIHRoZXJlb2YsIHRoYXQgaXMgaW50ZW50aW9uYWxseQogICAgICBzdWJtaXR0ZWQgdG8gTGljZW5zb3IgZm9yIGluY2x1c2lvbiBpbiB0aGUgV29yayBieSB0aGUgY29weXJpZ2h0IG93bmVyCiAgICAgIG9yIGJ5IGFuIGluZGl2aWR1YWwgb3IgTGVnYWwgRW50aXR5IGF1dGhvcml6ZWQgdG8gc3VibWl0IG9uIGJlaGFsZiBvZgogICAgICB0aGUgY29weXJpZ2h0IG93bmVyLiBGb3IgdGhlIHB1cnBvc2VzIG9mIHRoaXMgZGVmaW5pdGlvbiwgInN1Ym1pdHRlZCIKICAgICAgbWVhbnMgYW55IGZvcm0gb2YgZWxlY3Ryb25pYywgdmVyYmFsLCBvciB3cml0dGVuIGNvbW11bmljYXRpb24gc2VudAogICAgICB0byB0aGUgTGljZW5zb3Igb3IgaXRzIHJlcHJlc2VudGF0aXZlcywgaW5jbHVkaW5nIGJ1dCBub3QgbGltaXRlZCB0bwogICAgICBjb21tdW5pY2F0aW9uIG9uIGVsZWN0cm9uaWMgbWFpbGluZyBsaXN0cywgc291cmNlIGNvZGUgY29udHJvbCBzeXN0ZW1zLAogICAgICBhbmQgaXNzdWUgdHJhY2tpbmcgc3lzdGVtcyB0aGF0IGFyZSBtYW5hZ2VkIGJ5LCBvciBvbiBiZWhhbGYgb2YsIHRoZQogICAgICBMaWNlbnNvciBmb3IgdGhlIHB1cnBvc2Ugb2YgZGlzY3Vzc2luZyBhbmQgaW1wcm92aW5nIHRoZSBXb3JrLCBidXQKICAgICAgZXhjbHVkaW5nIGNvbW11bmljYXRpb24gdGhhdCBpcyBjb25zcGljdW91c2x5IG1hcmtlZCBvciBvdGhlcndpc2UKICAgICAgZGVzaWduYXRlZCBpbiB3cml0aW5nIGJ5IHRoZSBjb3B5cmlnaHQgb3duZXIgYXMgIk5vdCBhIENvbnRyaWJ1dGlvbi4iCgogICAgICAiQ29udHJpYnV0b3IiIHNoYWxsIG1lYW4gTGljZW5zb3IgYW5kIGFueSBpbmRpdmlkdWFsIG9yIExlZ2FsIEVudGl0eQogICAgICBvbiBiZWhhbGYgb2Ygd2hvbSBhIENvbnRyaWJ1dGlvbiBoYXMgYmVlbiByZWNlaXZlZCBieSBMaWNlbnNvciBhbmQKICAgICAgc3Vic2VxdWVudGx5IGluY29ycG9yYXRlZCB3aXRoaW4gdGhlIFdvcmsuCgogICAyLiBHcmFudCBvZiBDb3B5cmlnaHQgTGljZW5zZS4gU3ViamVjdCB0byB0aGUgdGVybXMgYW5kIGNvbmRpdGlvbnMgb2YKICAgICAgdGhpcyBMaWNlbnNlLCBlYWNoIENvbnRyaWJ1dG9yIGhlcmVieSBncmFudHMgdG8gWW91IGEgcGVycGV0dWFsLAogICAgICB3b3JsZHdpZGUsIG5vbi1leGNsdXNpdmUsIG5vLWNoYXJnZSwgcm95YWx0eS1mcmVlLCBpcnJldm9jYWJsZQogICAgICBjb3B5cmlnaHQgbGljZW5zZSB0byByZXByb2R1Y2UsIHByZXBhcmUgRGVyaXZhdGl2ZSBXb3JrcyBvZiwKICAgICAgcHVibGljbHkgZGlzcGxheSwgcHVibGljbHkgcGVyZm9ybSwgc3VibGljZW5zZSwgYW5kIGRpc3RyaWJ1dGUgdGhlCiAgICAgIFdvcmsgYW5kIHN1Y2ggRGVyaXZhdGl2ZSBXb3JrcyBpbiBTb3VyY2Ugb3IgT2JqZWN0IGZvcm0uCgogICAzLiBHcmFudCBvZiBQYXRlbnQgTGljZW5zZS4gU3ViamVjdCB0byB0aGUgdGVybXMgYW5kIGNvbmRpdGlvbnMgb2YKICAgICAgdGhpcyBMaWNlbnNlLCBlYWNoIENvbnRyaWJ1dG9yIGhlcmVieSBncmFudHMgdG8gWW91IGEgcGVycGV0dWFsLAogICAgICB3b3JsZHdpZGUsIG5vbi1leGNsdXNpdmUsIG5vLWNoYXJnZSwgcm95YWx0eS1mcmVlLCBpcnJldm9jYWJsZQogICAgICAoZXhjZXB0IGFzIHN0YXRlZCBpbiB0aGlzIHNlY3Rpb24pIHBhdGVudCBsaWNlbnNlIHRvIG1ha2UsIGhhdmUgbWFkZSwKICAgICAgdXNlLCBvZmZlciB0byBzZWxsLCBzZWxsLCBpbXBvcnQsIGFuZCBvdGhlcndpc2UgdHJhbnNmZXIgdGhlIFdvcmssCiAgICAgIHdoZXJlIHN1Y2ggbGljZW5zZSBhcHBsaWVzIG9ubHkgdG8gdGhvc2UgcGF0ZW50IGNsYWltcyBsaWNlbnNhYmxlCiAgICAgIGJ5IHN1Y2ggQ29udHJpYnV0b3IgdGhhdCBhcmUgbmVjZXNzYXJpbHkgaW5mcmluZ2VkIGJ5IHRoZWlyCiAgICAgIENvbnRyaWJ1dGlvbihzKSBhbG9uZSBvciBieSBjb21iaW5hdGlvbiBvZiB0aGVpciBDb250cmlidXRpb24ocykKICAgICAgd2l0aCB0aGUgV29yayB0byB3aGljaCBzdWNoIENvbnRyaWJ1dGlvbihzKSB3YXMgc3VibWl0dGVkLiBJZiBZb3UKICAgICAgaW5zdGl0dXRlIHBhdGVudCBsaXRpZ2F0aW9uIGFnYWluc3QgYW55IGVudGl0eSAoaW5jbHVkaW5nIGEKICAgICAgY3Jvc3MtY2xhaW0gb3IgY291bnRlcmNsYWltIGluIGEgbGF3c3VpdCkgYWxsZWdpbmcgdGhhdCB0aGUgV29yawogICAgICBvciBhIENvbnRyaWJ1dGlvbiBpbmNvcnBvcmF0ZWQgd2l0aGluIHRoZSBXb3JrIGNvbnN0aXR1dGVzIGRpcmVjdAogICAgICBvciBjb250cmlidXRvcnkgcGF0ZW50IGluZnJpbmdlbWVudCwgdGhlbiBhbnkgcGF0ZW50IGxpY2Vuc2VzCiAgICAgIGdyYW50ZWQgdG8gWW91IHVuZGVyIHRoaXMgTGljZW5zZSBmb3IgdGhhdCBXb3JrIHNoYWxsIHRlcm1pbmF0ZQogICAgICBhcyBvZiB0aGUgZGF0ZSBzdWNoIGxpdGlnYXRpb24gaXMgZmlsZWQuCgogICA0LiBSZWRpc3RyaWJ1dGlvbi4gWW91IG1heSByZXByb2R1Y2UgYW5kIGRpc3RyaWJ1dGUgY29waWVzIG9mIHRoZQogICAgICBXb3JrIG9yIERlcml2YXRpdmUgV29ya3MgdGhlcmVvZiBpbiBhbnkgbWVkaXVtLCB3aXRoIG9yIHdpdGhvdXQKICAgICAgbW9kaWZpY2F0aW9ucywgYW5kIGluIFNvdXJjZSBvciBPYmplY3QgZm9ybSwgcHJvdmlkZWQgdGhhdCBZb3UKICAgICAgbWVldCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6CgogICAgICAoYSkgWW91IG11c3QgZ2l2ZSBhbnkgb3RoZXIgcmVjaXBpZW50cyBvZiB0aGUgV29yayBvcgogICAgICAgICAgRGVyaXZhdGl2ZSBXb3JrcyBhIGNvcHkgb2YgdGhpcyBMaWNlbnNlOyBhbmQKCiAgICAgIChiKSBZb3UgbXVzdCBjYXVzZSBhbnkgbW9kaWZpZWQgZmlsZXMgdG8gY2FycnkgcHJvbWluZW50IG5vdGljZXMKICAgICAgICAgIHN0YXRpbmcgdGhhdCBZb3UgY2hhbmdlZCB0aGUgZmlsZXM7IGFuZAoKICAgICAgKGMpIFlvdSBtdXN0IHJldGFpbiwgaW4gdGhlIFNvdXJjZSBmb3JtIG9mIGFueSBEZXJpdmF0aXZlIFdvcmtzCiAgICAgICAgICB0aGF0IFlvdSBkaXN0cmlidXRlLCBhbGwgY29weXJpZ2h0LCBwYXRlbnQsIHRyYWRlbWFyaywgYW5kCiAgICAgICAgICBhdHRyaWJ1dGlvbiBub3RpY2VzIGZyb20gdGhlIFNvdXJjZSBmb3JtIG9mIHRoZSBXb3JrLAogICAgICAgICAgZXhjbHVkaW5nIHRob3NlIG5vdGljZXMgdGhhdCBkbyBub3QgcGVydGFpbiB0byBhbnkgcGFydCBvZgogICAgICAgICAgdGhlIERlcml2YXRpdmUgV29ya3M7IGFuZAoKICAgICAgKGQpIElmIHRoZSBXb3JrIGluY2x1ZGVzIGEgIk5PVElDRSIgdGV4dCBmaWxlIGFzIHBhcnQgb2YgaXRzCiAgICAgICAgICBkaXN0cmlidXRpb24sIHRoZW4gYW55IERlcml2YXRpdmUgV29ya3MgdGhhdCBZb3UgZGlzdHJpYnV0ZSBtdXN0CiAgICAgICAgICBpbmNsdWRlIGEgcmVhZGFibGUgY29weSBvZiB0aGUgYXR0cmlidXRpb24gbm90aWNlcyBjb250YWluZWQKICAgICAgICAgIHdpdGhpbiBzdWNoIE5PVElDRSBmaWxlLCBleGNsdWRpbmcgdGhvc2Ugbm90aWNlcyB0aGF0IGRvIG5vdAogICAgICAgICAgcGVydGFpbiB0byBhbnkgcGFydCBvZiB0aGUgRGVyaXZhdGl2ZSBXb3JrcywgaW4gYXQgbGVhc3Qgb25lCiAgICAgICAgICBvZiB0aGUgZm9sbG93aW5nIHBsYWNlczogd2l0aGluIGEgTk9USUNFIHRleHQgZmlsZSBkaXN0cmlidXRlZAogICAgICAgICAgYXMgcGFydCBvZiB0aGUgRGVyaXZhdGl2ZSBXb3Jrczsgd2l0aGluIHRoZSBTb3VyY2UgZm9ybSBvcgogICAgICAgICAgZG9jdW1lbnRhdGlvbiwgaWYgcHJvdmlkZWQgYWxvbmcgd2l0aCB0aGUgRGVyaXZhdGl2ZSBXb3Jrczsgb3IsCiAgICAgICAgICB3aXRoaW4gYSBkaXNwbGF5IGdlbmVyYXRlZCBieSB0aGUgRGVyaXZhdGl2ZSBXb3JrcywgaWYgYW5kCiAgICAgICAgICB3aGVyZXZlciBzdWNoIHRoaXJkLXBhcnR5IG5vdGljZXMgbm9ybWFsbHkgYXBwZWFyLiBUaGUgY29udGVudHMKICAgICAgICAgIG9mIHRoZSBOT1RJQ0UgZmlsZSBhcmUgZm9yIGluZm9ybWF0aW9uYWwgcHVycG9zZXMgb25seSBhbmQKICAgICAgICAgIGRvIG5vdCBtb2RpZnkgdGhlIExpY2Vuc2UuIFlvdSBtYXkgYWRkIFlvdXIgb3duIGF0dHJpYnV0aW9uCiAgICAgICAgICBub3RpY2VzIHdpdGhpbiBEZXJpdmF0aXZlIFdvcmtzIHRoYXQgWW91IGRpc3RyaWJ1dGUsIGFsb25nc2lkZQogICAgICAgICAgb3IgYXMgYW4gYWRkZW5kdW0gdG8gdGhlIE5PVElDRSB0ZXh0IGZyb20gdGhlIFdvcmssIHByb3ZpZGVkCiAgICAgICAgICB0aGF0IHN1Y2ggYWRkaXRpb25hbCBhdHRyaWJ1dGlvbiBub3RpY2VzIGNhbm5vdCBiZSBjb25zdHJ1ZWQKICAgICAgICAgIGFzIG1vZGlmeWluZyB0aGUgTGljZW5zZS4KCiAgICAgIFlvdSBtYXkgYWRkIFlvdXIgb3duIGNvcHlyaWdodCBzdGF0ZW1lbnQgdG8gWW91ciBtb2RpZmljYXRpb25zIGFuZAogICAgICBtYXkgcHJvdmlkZSBhZGRpdGlvbmFsIG9yIGRpZmZlcmVudCBsaWNlbnNlIHRlcm1zIGFuZCBjb25kaXRpb25zCiAgICAgIGZvciB1c2UsIHJlcHJvZHVjdGlvbiwgb3IgZGlzdHJpYnV0aW9uIG9mIFlvdXIgbW9kaWZpY2F0aW9ucywgb3IKICAgICAgZm9yIGFueSBzdWNoIERlcml2YXRpdmUgV29ya3MgYXMgYSB3aG9sZSwgcHJvdmlkZWQgWW91ciB1c2UsCiAgICAgIHJlcHJvZHVjdGlvbiwgYW5kIGRpc3RyaWJ1dGlvbiBvZiB0aGUgV29yayBvdGhlcndpc2UgY29tcGxpZXMgd2l0aAogICAgICB0aGUgY29uZGl0aW9ucyBzdGF0ZWQgaW4gdGhpcyBMaWNlbnNlLgoKICAgNS4gU3VibWlzc2lvbiBvZiBDb250cmlidXRpb25zLiBVbmxlc3MgWW91IGV4cGxpY2l0bHkgc3RhdGUgb3RoZXJ3aXNlLAogICAgICBhbnkgQ29udHJpYnV0aW9uIGludGVudGlvbmFsbHkgc3VibWl0dGVkIGZvciBpbmNsdXNpb24gaW4gdGhlIFdvcmsKICAgICAgYnkgWW91IHRvIHRoZSBMaWNlbnNvciBzaGFsbCBiZSB1bmRlciB0aGUgdGVybXMgYW5kIGNvbmRpdGlvbnMgb2YKICAgICAgdGhpcyBMaWNlbnNlLCB3aXRob3V0IGFueSBhZGRpdGlvbmFsIHRlcm1zIG9yIGNvbmRpdGlvbnMuCiAgICAgIE5vdHdpdGhzdGFuZGluZyB0aGUgYWJvdmUsIG5vdGhpbmcgaGVyZWluIHNoYWxsIHN1cGVyc2VkZSBvciBtb2RpZnkKICAgICAgdGhlIHRlcm1zIG9mIGFueSBzZXBhcmF0ZSBsaWNlbnNlIGFncmVlbWVudCB5b3UgbWF5IGhhdmUgZXhlY3V0ZWQKICAgICAgd2l0aCBMaWNlbnNvciByZWdhcmRpbmcgc3VjaCBDb250cmlidXRpb25zLgoKICAgNi4gVHJhZGVtYXJrcy4gVGhpcyBMaWNlbnNlIGRvZXMgbm90IGdyYW50IHBlcm1pc3Npb24gdG8gdXNlIHRoZSB0cmFkZQogICAgICBuYW1lcywgdHJhZGVtYXJrcywgc2VydmljZSBtYXJrcywgb3IgcHJvZHVjdCBuYW1lcyBvZiB0aGUgTGljZW5zb3IsCiAgICAgIGV4Y2VwdCBhcyByZXF1aXJlZCBmb3IgcmVhc29uYWJsZSBhbmQgY3VzdG9tYXJ5IHVzZSBpbiBkZXNjcmliaW5nIHRoZQogICAgICBvcmlnaW4gb2YgdGhlIFdvcmsgYW5kIHJlcHJvZHVjaW5nIHRoZSBjb250ZW50IG9mIHRoZSBOT1RJQ0UgZmlsZS4KCiAgIDcuIERpc2NsYWltZXIgb2YgV2FycmFudHkuIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvcgogICAgICBhZ3JlZWQgdG8gaW4gd3JpdGluZywgTGljZW5zb3IgcHJvdmlkZXMgdGhlIFdvcmsgKGFuZCBlYWNoCiAgICAgIENvbnRyaWJ1dG9yIHByb3ZpZGVzIGl0cyBDb250cmlidXRpb25zKSBvbiBhbiAiQVMgSVMiIEJBU0lTLAogICAgICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IKICAgICAgaW1wbGllZCwgaW5jbHVkaW5nLCB3aXRob3V0IGxpbWl0YXRpb24sIGFueSB3YXJyYW50aWVzIG9yIGNvbmRpdGlvbnMKICAgICAgb2YgVElUTEUsIE5PTi1JTkZSSU5HRU1FTlQsIE1FUkNIQU5UQUJJTElUWSwgb3IgRklUTkVTUyBGT1IgQQogICAgICBQQVJUSUNVTEFSIFBVUlBPU0UuIFlvdSBhcmUgc29sZWx5IHJlc3BvbnNpYmxlIGZvciBkZXRlcm1pbmluZyB0aGUKICAgICAgYXBwcm9wcmlhdGVuZXNzIG9mIHVzaW5nIG9yIHJlZGlzdHJpYnV0aW5nIHRoZSBXb3JrIGFuZCBhc3N1bWUgYW55CiAgICAgIHJpc2tzIGFzc29jaWF0ZWQgd2l0aCBZb3VyIGV4ZXJjaXNlIG9mIHBlcm1pc3Npb25zIHVuZGVyIHRoaXMgTGljZW5zZS4KCiAgIDguIExpbWl0YXRpb24gb2YgTGlhYmlsaXR5LiBJbiBubyBldmVudCBhbmQgdW5kZXIgbm8gbGVnYWwgdGhlb3J5LAogICAgICB3aGV0aGVyIGluIHRvcnQgKGluY2x1ZGluZyBuZWdsaWdlbmNlKSwgY29udHJhY3QsIG9yIG90aGVyd2lzZSwKICAgICAgdW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IChzdWNoIGFzIGRlbGliZXJhdGUgYW5kIGdyb3NzbHkKICAgICAgbmVnbGlnZW50IGFjdHMpIG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzaGFsbCBhbnkgQ29udHJpYnV0b3IgYmUKICAgICAgbGlhYmxlIHRvIFlvdSBmb3IgZGFtYWdlcywgaW5jbHVkaW5nIGFueSBkaXJlY3QsIGluZGlyZWN0LCBzcGVjaWFsLAogICAgICBpbmNpZGVudGFsLCBvciBjb25zZXF1ZW50aWFsIGRhbWFnZXMgb2YgYW55IGNoYXJhY3RlciBhcmlzaW5nIGFzIGEKICAgICAgcmVzdWx0IG9mIHRoaXMgTGljZW5zZSBvciBvdXQgb2YgdGhlIHVzZSBvciBpbmFiaWxpdHkgdG8gdXNlIHRoZQogICAgICBXb3JrIChpbmNsdWRpbmcgYnV0IG5vdCBsaW1pdGVkIHRvIGRhbWFnZXMgZm9yIGxvc3Mgb2YgZ29vZHdpbGwsCiAgICAgIHdvcmsgc3RvcHBhZ2UsIGNvbXB1dGVyIGZhaWx1cmUgb3IgbWFsZnVuY3Rpb24sIG9yIGFueSBhbmQgYWxsCiAgICAgIG90aGVyIGNvbW1lcmNpYWwgZGFtYWdlcyBvciBsb3NzZXMpLCBldmVuIGlmIHN1Y2ggQ29udHJpYnV0b3IKICAgICAgaGFzIGJlZW4gYWR2aXNlZCBvZiB0aGUgcG9zc2liaWxpdHkgb2Ygc3VjaCBkYW1hZ2VzLgoKICAgOS4gQWNjZXB0aW5nIFdhcnJhbnR5IG9yIEFkZGl0aW9uYWwgTGlhYmlsaXR5LiBXaGlsZSByZWRpc3RyaWJ1dGluZwogICAgICB0aGUgV29yayBvciBEZXJpdmF0aXZlIFdvcmtzIHRoZXJlb2YsIFlvdSBtYXkgY2hvb3NlIHRvIG9mZmVyLAogICAgICBhbmQgY2hhcmdlIGEgZmVlIGZvciwgYWNjZXB0YW5jZSBvZiBzdXBwb3J0LCB3YXJyYW50eSwgaW5kZW1uaXR5LAogICAgICBvciBvdGhlciBsaWFiaWxpdHkgb2JsaWdhdGlvbnMgYW5kL29yIHJpZ2h0cyBjb25zaXN0ZW50IHdpdGggdGhpcwogICAgICBMaWNlbnNlLiBIb3dldmVyLCBpbiBhY2NlcHRpbmcgc3VjaCBvYmxpZ2F0aW9ucywgWW91IG1heSBhY3Qgb25seQogICAgICBvbiBZb3VyIG93biBiZWhhbGYgYW5kIG9uIFlvdXIgc29sZSByZXNwb25zaWJpbGl0eSwgbm90IG9uIGJlaGFsZgogICAgICBvZiBhbnkgb3RoZXIgQ29udHJpYnV0b3IsIGFuZCBvbmx5IGlmIFlvdSBhZ3JlZSB0byBpbmRlbW5pZnksCiAgICAgIGRlZmVuZCwgYW5kIGhvbGQgZWFjaCBDb250cmlidXRvciBoYXJtbGVzcyBmb3IgYW55IGxpYWJpbGl0eQogICAgICBpbmN1cnJlZCBieSwgb3IgY2xhaW1zIGFzc2VydGVkIGFnYWluc3QsIHN1Y2ggQ29udHJpYnV0b3IgYnkgcmVhc29uCiAgICAgIG9mIHlvdXIgYWNjZXB0aW5nIGFueSBzdWNoIHdhcnJhbnR5IG9yIGFkZGl0aW9uYWwgbGlhYmlsaXR5LgoKICAgRU5EIE9GIFRFUk1TIEFORCBDT05ESVRJT05TCgogICBBUFBFTkRJWDogSG93IHRvIGFwcGx5IHRoZSBBcGFjaGUgTGljZW5zZSB0byB5b3VyIHdvcmsuCgogICAgICBUbyBhcHBseSB0aGUgQXBhY2hlIExpY2Vuc2UgdG8geW91ciB3b3JrLCBhdHRhY2ggdGhlIGZvbGxvd2luZwogICAgICBib2lsZXJwbGF0ZSBub3RpY2UsIHdpdGggdGhlIGZpZWxkcyBlbmNsb3NlZCBieSBicmFja2V0cyAiW10iCiAgICAgIHJlcGxhY2VkIHdpdGggeW91ciBvd24gaWRlbnRpZnlpbmcgaW5mb3JtYXRpb24uIChEb24ndCBpbmNsdWRlCiAgICAgIHRoZSBicmFja2V0cyEpICBUaGUgdGV4dCBzaG91bGQgYmUgZW5jbG9zZWQgaW4gdGhlIGFwcHJvcHJpYXRlCiAgICAgIGNvbW1lbnQgc3ludGF4IGZvciB0aGUgZmlsZSBmb3JtYXQuIFdlIGFsc28gcmVjb21tZW5kIHRoYXQgYQogICAgICBmaWxlIG9yIGNsYXNzIG5hbWUgYW5kIGRlc2NyaXB0aW9uIG9mIHB1cnBvc2UgYmUgaW5jbHVkZWQgb24gdGhlCiAgICAgIHNhbWUgInByaW50ZWQgcGFnZSIgYXMgdGhlIGNvcHlyaWdodCBub3RpY2UgZm9yIGVhc2llcgogICAgICBpZGVudGlmaWNhdGlvbiB3aXRoaW4gdGhpcmQtcGFydHkgYXJjaGl2ZXMuCgogICBDb3B5cmlnaHQgW3l5eXldIFtuYW1lIG9mIGNvcHlyaWdodCBvd25lcl0KCiAgIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSAiTGljZW5zZSIpOwogICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuCiAgIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdAoKICAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMAoKICAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZQogICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiAiQVMgSVMiIEJBU0lTLAogICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4KICAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZAogICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS4K');
  exports['registerResource']('META-INF/NOTICE', 'CkhUTUwgQ29udGV4dApDb3B5cmlnaHQgMjAxOSBUaGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24KClRoaXMgcHJvZHVjdCBpbmNsdWRlcyBzb2Z0d2FyZSBkZXZlbG9wZWQgYXQKVGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChodHRwOi8vd3d3LmFwYWNoZS5vcmcvKS4KCgo=');
});