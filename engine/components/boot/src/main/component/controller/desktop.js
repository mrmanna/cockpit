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
vm.java_lang_Object = link('java/lang/Object', function(f) { vm.java_lang_Object =  f; });
vm.java_lang_Class = link('java/lang/Class', function(f) { vm.java_lang_Class =  f; });
vm.java_lang_ArithmeticException = link('java/lang/ArithmeticException', function(f) { vm.java_lang_ArithmeticException =  f; });

function io_cloudoffice_platform_cockpit_desktop_Boot() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_desktop_Boot;
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
    m.access = 2;
    m.cls = CLS;
    m = c.main__V_3Ljava_lang_String_2 = function(lcA0) {
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 0);
var stA0 = (refs_net_java_html_boot_BrowserBuilder || (refs_net_java_html_boot_BrowserBuilder = vm.net_java_html_boot_BrowserBuilder(false)))['newBrowser__Lnet_java_html_boot_BrowserBuilder_2_3Ljava_lang_Object_2'](stA0);
var stA0 = invoker.loadPage__Lnet_java_html_boot_BrowserBuilder_2Ljava_lang_String_2(stA0,"http://testcompany01.local");
var stA0 = invoker.loadClass__Lnet_java_html_boot_BrowserBuilder_2Ljava_lang_Class_2(stA0,c.constructor.$class);
var stA0 = invoker.invoke__Lnet_java_html_boot_BrowserBuilder_2Ljava_lang_String_2_3Ljava_lang_String_2(stA0,"onPageLoad", lcA0);
invoker.showAndWait__V(stA0);
(refs_java_lang_System || (refs_java_lang_System = vm.java_lang_System(false)))['exit__VI'](0);
return;

};
c['main__V_3Ljava_lang_String_2'] = m;

    m.access = 137;
    m.cls = CLS;
    m = c.onPageLoad__V = function() {
(refs_io_cloudoffice_platform_cockpit_boot_Startup || (refs_io_cloudoffice_platform_cockpit_boot_Startup = vm.io_cloudoffice_platform_cockpit_boot_Startup(false)))['fromDesktop__V']();
return;

};
c['onPageLoad__V'] = m;

    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_desktop_BootfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_desktop_Boot', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_desktop_BootfillInstOf });
    io_cloudoffice_platform_cockpit_desktop_BootfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/desktop/Boot';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_net_java_html_boot_BrowserBuilder;
    var refs_java_lang_System;
    var refs_io_cloudoffice_platform_cockpit_boot_Startup;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_desktop_Boot = registerClass(exports,'io_cloudoffice_platform_cockpit_desktop_Boot',io_cloudoffice_platform_cockpit_desktop_Boot);

vm.io_cloudoffice_platform_cockpit_boot_Startup = link('io/cloudoffice/platform/cockpit/boot/Startup', function(f) { vm.io_cloudoffice_platform_cockpit_boot_Startup =  f; });
vm.java_lang_System = link('java/lang/System', function(f) { vm.java_lang_System =  f; });
vm.net_java_html_boot_BrowserBuilder = link('net/java/html/boot/BrowserBuilder', function(f) { vm.net_java_html_boot_BrowserBuilder =  f; });
  invoker.loadPage__Lnet_java_html_boot_BrowserBuilder_2Ljava_lang_String_2 = function(target, p1) {
    return target['loadPage__Lnet_java_html_boot_BrowserBuilder_2Ljava_lang_String_2'](p1);
  };
  invoker.loadClass__Lnet_java_html_boot_BrowserBuilder_2Ljava_lang_Class_2 = function(target, p1) {
    return target['loadClass__Lnet_java_html_boot_BrowserBuilder_2Ljava_lang_Class_2'](p1);
  };
  invoker.invoke__Lnet_java_html_boot_BrowserBuilder_2Ljava_lang_String_2_3Ljava_lang_String_2 = function(target, p1, p2) {
    return target['invoke__Lnet_java_html_boot_BrowserBuilder_2Ljava_lang_String_2_3Ljava_lang_String_2'](p1,p2);
  };
  invoker.showAndWait__V = function(target) {
    return target['showAndWait__V']();
  };
  exports['registerResource']('META-INF/MANIFEST.MF', 'TWFuaWZlc3QtVmVyc2lvbjogMS4wDQpBcmNoaXZlci1WZXJzaW9uOiBQbGV4dXMgQXJjaGl2ZXINCkJ1aWx0LUJ5OiBTaGFyaWZ1bCBJc2xhbQ0KQ3JlYXRlZC1CeTogQXBhY2hlIE1hdmVuIDMuMC41DQpCdWlsZC1KZGs6IDEuOC4wXzEzMQ0KTWFpbi1DbGFzczogaW8uY2xvdWRvZmZpY2UucGxhdGZvcm0uY29ja3BpdC5kZXNrdG9wLkJvb3QNCg0K');
});