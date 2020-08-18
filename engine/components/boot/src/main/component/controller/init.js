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

function io_cloudoffice_platform_cockpit_web_BrowserMain() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_web_BrowserMain;
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
(refs_io_cloudoffice_platform_cockpit_boot_Startup || (refs_io_cloudoffice_platform_cockpit_boot_Startup = vm.io_cloudoffice_platform_cockpit_boot_Startup(false)))['fromWeb__V']();
return;

};
c['main__V_3Ljava_lang_String_2'] = m;

    m.access = 137;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_web_BrowserMainfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_web_BrowserMain', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_web_BrowserMainfillInstOf });
    io_cloudoffice_platform_cockpit_web_BrowserMainfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/web/BrowserMain';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
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
vm.io_cloudoffice_platform_cockpit_web_BrowserMain = registerClass(exports,'io_cloudoffice_platform_cockpit_web_BrowserMain',io_cloudoffice_platform_cockpit_web_BrowserMain);

vm.io_cloudoffice_platform_cockpit_boot_Startup = link('io/cloudoffice/platform/cockpit/boot/Startup', function(f) { vm.io_cloudoffice_platform_cockpit_boot_Startup =  f; });
  exports['registerResource']('META-INF/MANIFEST.MF', 'TWFuaWZlc3QtVmVyc2lvbjogMS4wDQpBcmNoaXZlci1WZXJzaW9uOiBQbGV4dXMgQXJjaGl2ZXINCkJ1aWx0LUJ5OiBTaGFyaWZ1bCBJc2xhbQ0KQ2xhc3MtUGF0aDogbGliL2Jvb3QtMS4xLmphciBsaWIvbmV0LmphdmEuaHRtbC0xLjUuMS5qYXIgbGliL25ldC5qYXZhLg0KIGh0bWwuanNvbi0xLjUuMS5qYXIgbGliL25ldC5qYXZhLmh0bWwuc291bmQtMS41LjEuamFyIGxpYi9rbzRqLTEuNS4xLg0KIGphciBsaWIvanMtMS4xLmphciBsaWIvYXBpLTEuMS5qYXIgbGliL2pzb24tMjAxODA4MTMuamFyIGxpYi9tYWlubGF5bw0KIHV0LTEuMS5qYXIgbGliL3NpZ25pbi0xLjEuamFyIGxpYi9zZWFyY2hib3gtMS4xLmphciBsaWIvY2VudGVyY29sdW1ubA0KIGF5b3V0LTEuMS5qYXIgbGliL3Byb2ZpbGVtZW51LTEuMS5qYXIgbGliL2FkbWlubWVudS0xLjEuamFyIGxpYi9sZWZ0dA0KIG9vbGJhci0xLjEuamFyIGxpYi93b3Jrc3BhY2UtMS4xLmphciBsaWIvcmVjZW50c2xpc3QtMS4xLmphciBsaWIvbmV3aQ0KIHRlbW1lbnUtMS4xLmphciBsaWIvaXRlbWRldGFpbG1ldGEtMS4xLmphciBsaWIvaXRlbWRldGFpbGJvZHktMS4xLmphcg0KICBsaWIvdGFiY29udGFpbmVyLTEuMS5qYXIgbGliL3BlcnNvbi0xLjEuamFyIGxpYi9vcmdhbml6YXRpb24tMS4xLmphcg0KICBsaWIvbWVzc2FnZS0xLjEuamFyIGxpYi9hY3Rpb25tZW51LTEuMS5qYXIgbGliL3RhZ2l0ZW0tMS4xLmphciBsaWIvcw0KIGhhcmVpdGVtLTEuMS5qYXIgbGliL3JlbGF0ZWRpdGVtLTEuMS5qYXIgbGliL2xheW91dC0xLjEuamFyIGxpYi9tZWRpYQ0KIC0xLjEuamFyIGxpYi9lbXVsLTAuMjItcnQuamFyIGxpYi9uZXQuamF2YS5odG1sLmJvb3QtMS41LjEuamFyDQpDcmVhdGVkLUJ5OiBBcGFjaGUgTWF2ZW4gMy4wLjUNCkJ1aWxkLUpkazogMS44LjBfMTMxDQpNYWluLUNsYXNzOiBpby5jbG91ZG9mZmljZS5wbGF0Zm9ybS5jb2NrcGl0LndlYi5Ccm93c2VyTWFpbg0KDQo=');
});