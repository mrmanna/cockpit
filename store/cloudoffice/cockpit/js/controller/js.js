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

function io_cloudoffice_platform_cockpit_js_$JsCallbacks$() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_js_$JsCallbacks$;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_VM'] = null;
  m = c._VM = function (v) {  if (arguments.length == 1) CLS['fld_VM'] = v; return CLS['fld_VM']; };
  m = c._ref = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_js_$JsCallbacks$_ref'] = v; return this['fld_io_cloudoffice_platform_cockpit_js_$JsCallbacks$_ref']; };
  m = c._next = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_js_$JsCallbacks$_next'] = v; return this['fld_io_cloudoffice_platform_cockpit_js_$JsCallbacks$_next']; };
    m = CLS.cons__VLorg_netbeans_html_boot_spi_Fn$Presenter_2 = function(lcA1) {
  var  lcA0 = this;
  if (lcA0 === undefined) lcA0 = null;
  if (lcA1 === undefined) lcA1 = null;
return (refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
};
    m.access = 2;
    m.cls = CLS;
    m = c.current__Lio_cloudoffice_platform_cockpit_js_$JsCallbacks$_2 = function() {
  var  lcA0 = this;
  if (lcA0 === undefined) lcA0 = null;
return c.constructor.cons__VLorg_netbeans_html_boot_spi_Fn$Presenter_2.call(stA1, lcA1);
};
    m.access = 48;
    m.cls = CLS;
    m = c.java_1lang_1Runnable$run$__Ljava_lang_Object_2Ljava_lang_Runnable_2 = function(lcA1) {
  var  lcA0 = this;
  if (lcA0 === undefined) lcA0 = null;
  if (lcA1 === undefined) lcA1 = null;
return invoker.run__V(lcA1);
};
c['java_1lang_1Runnable$run$__Ljava_lang_Object_2Ljava_lang_Runnable_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.raw$java_1lang_1Runnable$run$__Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
  if (lcA0 === undefined) lcA0 = null;
  if (lcA1 === undefined) lcA1 = null;
return invoker.run__V(lcA1);
};
c['raw$java_1lang_1Runnable$run$__Ljava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_js_$JsCallbacks$;
c.constructor.cons__VLorg_netbeans_html_boot_spi_Fn$Presenter_2.call(stA0, null);
c._VM(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_js_$JsCallbacks$fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_js_$JsCallbacks$', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_js_$JsCallbacks$fillInstOf });
    io_cloudoffice_platform_cockpit_js_$JsCallbacks$fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/js/$JsCallbacks$';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_java_lang_Object;
    var refs_org_netbeans_html_boot_spi_Fn;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_js_$JsCallbacks$_ref'] = null;
    this['fld_io_cloudoffice_platform_cockpit_js_$JsCallbacks$_next'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_js_$JsCallbacks$ = registerClass(exports,'io_cloudoffice_platform_cockpit_js_$JsCallbacks$',io_cloudoffice_platform_cockpit_js_$JsCallbacks$);

vm.java_lang_Throwable = function() {
  var instance = arguments.length == 0 || arguments[0] === true;
  delete vm.java_lang_Throwable;
  return link('java/lang/Throwable', function(f) { vm.java_lang_Throwable = f;})(instance);
}
vm.org_netbeans_html_boot_spi_Fn = link('org/netbeans/html/boot/spi/Fn', function(f) { vm.org_netbeans_html_boot_spi_Fn =  f; });

function io_cloudoffice_platform_cockpit_js_CacheSync() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_js_CacheSync;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_$$fn$$scheduleSync_1'] = null;
  m = c._$$fn$$scheduleSync_1 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$scheduleSync_1'] = v; return CLS['fld_$$fn$$scheduleSync_1']; };
  CLS['fld_$$fn$$hasUpdate_2'] = null;
  m = c._$$fn$$hasUpdate_2 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$hasUpdate_2'] = v; return CLS['fld_$$fn$$hasUpdate_2']; };
  CLS['fld_$$fn$$sync_3'] = null;
  m = c._$$fn$$sync_3 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$sync_3'] = v; return CLS['fld_$$fn$$sync_3']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.scheduleSync__VJJ = function() {
  var r = (function(interval,delay) {

  interval = vm.java_lang_Class(false).toJS(interval);
  delay = vm.java_lang_Class(false).toJS(delay); var timerId = setTimeout(function sync() {
  CacheSync.processCache();
  timerId = setTimeout(function(){CacheSync.processCache();}, interval);
}, delay);
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['scheduleSync__VJJ'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.hasUpdate__ZLjava_lang_String_2 = function() {
  var r = (function(name) {

  name = vm.java_lang_Class(false).toJS(name);if(null!=Cloudoffice){Cloudoffice.io.Services.Sync.hasUpdate(name);}
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['hasUpdate__ZLjava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.sync__Z = function() {
  var r = (function() {
Cloudoffice.io.Services.Sync.processSync()
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['sync__Z'] = m;

    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_js_CacheSyncfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_js_CacheSync', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_js_CacheSyncfillInstOf });
    io_cloudoffice_platform_cockpit_js_CacheSyncfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/js/CacheSync';
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
vm.io_cloudoffice_platform_cockpit_js_CacheSync = registerClass(exports,'io_cloudoffice_platform_cockpit_js_CacheSync',io_cloudoffice_platform_cockpit_js_CacheSync);


function io_cloudoffice_platform_cockpit_js_CustomTemplateLoader() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_js_CustomTemplateLoader;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_$$fn$$registerComponent_1'] = null;
  m = c._$$fn$$registerComponent_1 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$registerComponent_1'] = v; return CLS['fld_$$fn$$registerComponent_1']; };
  CLS['fld_$$fn$$registerKeyEvents_2'] = null;
  m = c._$$fn$$registerKeyEvents_2 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$registerKeyEvents_2'] = v; return CLS['fld_$$fn$$registerKeyEvents_2']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.registerComponent__V = function() {
  var r = (function() {

}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['registerComponent__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.registerKeyEvents__V = function() {
  var r = (function() {
ko.bindingHandlers['keyPress'] = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
        var allBindings = allBindingsAccessor();
        $(element).keypress(function (event) {
            allBindings['keyPress'].call(viewModel,null, event);
            return false;
        });
    }
};
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['registerKeyEvents__V'] = m;

    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_js_CustomTemplateLoaderfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_js_CustomTemplateLoader', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_js_CustomTemplateLoaderfillInstOf });
    io_cloudoffice_platform_cockpit_js_CustomTemplateLoaderfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/js/CustomTemplateLoader';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
// resource from io/cloudoffice/platform/cockpit/js/kotemplateloader.js

(0 || eval)("/* \r\n"
 + " * To change this license header, choose License Headers in Project Properties.\r\n"
 + " * To change this template file, choose Tools | Templates\r\n"
 + " * and open the template in the editor.\r\n"
 + " */\r\n"
 + "\r\n"
 + "$.ajaxSetup({\r\n"
 + "            headers: {\r\n"
 + "                'Accept': \"*/*; charset=utf-8\"\r\n"
 + "            },\r\n"
 + "            cache:true\r\n"
 + "       });\r\n"
 + "var templateFromUrlLoader = {\r\n"
 + "    loadTemplate: function(name, templateConfig, callback) {\r\n"
 + "\r\n"
 + "        if (templateConfig.fromUrl) {\r\n"
 + "            // Uses jQuery's ajax facility to load the markup from a file\r\n"
 + "            var fullUrl = templateConfig.fromUrl;\r\n"
 + "            $.get(fullUrl, function(markupString) {\r\n"
 + "                // We need an array of DOM nodes, not a string.\r\n"
 + "                // We can use the default loader to convert to the\r\n"
 + "                // required format.\r\n"
 + "                ko.components.defaultLoader.loadTemplate(name, markupString, callback);\r\n"
 + "                $.ajaxSetup({ cache: false });\r\n"
 + "            });\r\n"
 + "        } else {\r\n"
 + "            // Unrecognized config format. Let another loader handle it.\r\n"
 + "            callback(null);\r\n"
 + "        }\r\n"
 + "    }\r\n"
 + "};\r\n"
 + "// Register it\r\n"
 + "ko.components.loaders.unshift(templateFromUrlLoader);\r\n"
 + "\r\n"
 + "var viewModelCustomLoader = {\r\n"
 + "    loadViewModel: function(name, viewModelConfig, callback) {\r\n"
 + "        if (viewModelConfig.viaLoader) {\r\n"
 + "            var fullUrl = viewModelConfig.viaLoader;\r\n"
 + "            $.getScript(fullUrl + \".js\", function(data, textStatus, jqxhr) {\r\n"
 + "                ko.components.defaultLoader.loadViewModel(name, viewmodel, callback);\r\n"
 + "                $.ajaxSetup({ cache: false });\r\n"
 + "            });\r\n"
 + "\r\n"
 + "\r\n"
 + "        } else {\r\n"
 + "            // Unrecognized config format. Let another loader handle it.\r\n"
 + "            callback(null);\r\n"
 + "        }\r\n"
 + "    }\r\n"
 + "};\r\n"
 + "\r\n"
 + "\r\n"
 + "\r\n"
 + "ko.bindingHandlers.enterkey = {\r\n"
 + "    init: function(element, valueAccessor) {\r\n"
 + "        $(element).keypress(function(event) {\r\n"
 + "\r\n"
 + "            var keyCode = (event.which ? event.which : event.keyCode);\r\n"
 + "            if (keyCode === 13) {\r\n"
 + "                var enterPressed = ko.utils.unwrapObservable(valueAccessor()) || {};\r\n"
 + "                enterPressed = true;\r\n"
 + "                if (ko.isObservable(valueAccessor())) {\r\n"
 + "                    valueAccessor()(enterPressed);\r\n"
 + "                }\r\n"
 + "            }\r\n"
 + "\r\n"
 + "        });\r\n"
 + "    }\r\n"
 + "};\r\n"
 + "\r\n"
 + "// Register it\r\n"
 + "ko.components.loaders.unshift(viewModelCustomLoader);\r\n"
 + "\r\n"
 + "\r\n"
 + "ko.bindingHandlers.reverseforeach = {\r\n"
 + "    init: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {\r\n"
 + "        var newBindingContext = bindingContext.extend({\r\n"
 + "            iterator: valueAccessor()\r\n"
 + "        });\r\n"
 + "        var reversedbyfieldname = allBindingsAccessor.get('reversedbyfieldname') || '';\r\n"
 + "        if ((typeof reversedbyfieldname !== \"undefined\" && null !== reversedbyfieldname && \"\" !== reversedbyfieldname)) {\r\n"
 + "            var listitems = ko.unwrap(valueAccessor());\r\n"
 + "            listitems.sort(function(a, b) {\r\n"
 + "                a = ko.unwrap(a[reversedbyfieldname]);\r\n"
 + "                b = ko.unwrap(b[reversedbyfieldname]);\r\n"
 + "                return (a === b ? 0 : a < b ? -1 : 1);\r\n"
 + "            });\r\n"
 + "        }\r\n"
 + "        return ko.bindingHandlers.foreach.init(element, valueAccessor, allBindingsAccessor, viewModel, newBindingContext);\r\n"
 + "    },\r\n"
 + "    update: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {\r\n"
 + "        var newBindingContext = bindingContext.extend({\r\n"
 + "            iterator: valueAccessor()\r\n"
 + "        });\r\n"
 + "        var reversedbyfieldname = allBindingsAccessor.get('reversedbyfieldname') || '';\r\n"
 + "        if ((typeof reversedbyfieldname !== \"undefined\" && null !== reversedbyfieldname && \"\" !== reversedbyfieldname)) {\r\n"
 + "            var listitems = ko.unwrap(valueAccessor());\r\n"
 + "            listitems.sort(function(a, b) {\r\n"
 + "                a = ko.unwrap(a[reversedbyfieldname]);\r\n"
 + "                b = ko.unwrap(b[reversedbyfieldname]);\r\n"
 + "                return (a === b ? 0 : a < b ? -1 : 1);\r\n"
 + "            });\r\n"
 + "        }\r\n"
 + "        return ko.bindingHandlers.foreach.update(element, valueAccessor, allBindingsAccessor, viewModel, newBindingContext);\r\n"
 + "    }\r\n"
 + "};\r\n"
 + "\r\n"
 + "\r\n"
 + "ko.bindingHandlers.fadedIf = {\r\n"
 + "    init: function (element, valueAccessor, allBindingsAccessor, data, bindingContext) {\r\n"
 + "        // Initially set the element to be instantly visible/hidden depending on the value\r\n"
 + "        var value = valueAccessor();\r\n"
 + "        //If the value is a normal function make it a computed so that it updates properly\r\n"
 + "        if (!ko.isObservable(value)) {\r\n"
 + "            value = ko.computed({ read: valueAccessor });\r\n"
 + "        }\r\n"
 + "        //attach our observable property to the accessor so that it can be used in the update function\r\n"
 + "        valueAccessor.domShown = ko.observable(ko.unwrap(value));\r\n"
 + "\r\n"
 + "        //Wrap any contents of the element in a new div, and then bind that div using the \"if\" binding.\r\n"
 + "        //This way the element and its event hooks for fading in/out never leaves the dom, but all content does.\r\n"
 + "        //it also prevents applying multiple bindings to the same element.\r\n"
 + "        var contentWrapper = $(element).children().wrapAll(document.createElement(\"div\")).parent()[0];\r\n"
 + "        ko.applyBindingAccessorsToNode(contentWrapper, { 'if': function () { return valueAccessor.domShown; } }, bindingContext);  \r\n"
 + "    },\r\n"
 + "    update: function (element, valueAccessor) {\r\n"
 + "        // Whenever the value subsequently changes, slowly fade the element in or out\r\n"
 + "        var value = valueAccessor();\r\n"
 + "\r\n"
 + "        if (ko.unwrap(value)) {\r\n"
 + "            valueAccessor.domShown(true); //restore the element to the DOM\r\n"
 + "            $(element).fadeIn(800);\r\n"
 + "        } else {\r\n"
 + "            $(element).fadeOut({\r\n"
 + "                complete: function () {\r\n"
 + "                    valueAccessor.domShown(false); //remove the element from the DOM\r\n"
 + "                }\r\n"
 + "            });\r\n"
 + "        }\r\n"
 + "    }\r\n"
 + "};\r\n"
 + "\r\n"
 + "\r\n"
 + "//https://stackoverflow.com/questions/14321012/prevent-event-bubbling-when-using-the-checked-binding-in-knockoutjs\r\n"
 + "ko.bindingHandlers.stopBubble = {\r\n"
 + "  init: function(element) {\r\n"
 + "    ko.utils.registerEventHandler(element, \"click\", function(event) {\r\n"
 + "         event.cancelBubble = true;\r\n"
 + "         if (event.stopPropagation) {\r\n"
 + "            event.stopPropagation(); \r\n"
 + "         }\r\n"
 + "    });\r\n"
 + "  }\r\n"
 + "};\r\n"
 + "\r\n"
 + "\r\n"
 + "\r\n"
 + "//http://jsfiddle.net/rniemeyer/JksKx/9/\r\n"
 + "ko.bindingHandlers.htmlValue = {\r\n"
 + "    init: function(element, valueAccessor, allBindingsAccessor) {\r\n"
 + "        ko.utils.registerEventHandler(element, \"keyup\", function() {\r\n"
 + "            var modelValue = valueAccessor();\r\n"
 + "            var elementValue = element.innerHTML;\r\n"
 + "            if (ko.isWriteableObservable(modelValue)) {\r\n"
 + "                modelValue(elementValue);\r\n"
 + "\r\n"
 + "            } else { //handle non-observable one-way binding\r\n"
 + "                var allBindings = allBindingsAccessor();\r\n"
 + "                if (allBindings['_ko_property_writers'] && allBindings['_ko_property_writers'].htmlValue) allBindings['_ko_property_writers'].htmlValue(elementValue);\r\n"
 + "            }\r\n"
 + "        });\r\n"
 + "    },\r\n"
 + "    update: function(element, valueAccessor) {\r\n"
 + "        var value = ko.utils.unwrapObservable(valueAccessor()) || \"\";\r\n"
 + "        if (element.innerHTML !== value) {\r\n"
 + "            element.innerHTML = value;\r\n"
 + "        }\r\n"
 + "    }\r\n"
 + "};");

  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_js_CustomTemplateLoader = registerClass(exports,'io_cloudoffice_platform_cockpit_js_CustomTemplateLoader',io_cloudoffice_platform_cockpit_js_CustomTemplateLoader);


function io_cloudoffice_platform_cockpit_js_DelayCall() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_js_DelayCall;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._jsTimer = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_js_DelayCall_jsTimer'] = v; return this['fld_io_cloudoffice_platform_cockpit_js_DelayCall_jsTimer']; };
  CLS['fld_$$fn$$delay_1'] = null;
  m = c._$$fn$$delay_1 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$delay_1'] = v; return CLS['fld_$$fn$$delay_1']; };
  CLS['fld_$$fn$$close_2'] = null;
  m = c._$$fn$$close_2 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$close_2'] = v; return CLS['fld_$$fn$$close_2']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
lcA0['fld_io_cloudoffice_platform_cockpit_js_DelayCall_jsTimer'] = null;
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.cancel__V = function() {
  var  lcA0 = this;
c.close__VLjava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_js_DelayCall_jsTimer']);
lcA0['fld_io_cloudoffice_platform_cockpit_js_DelayCall_jsTimer'] = null;
return;

};
c['cancel__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.run__V = function() {
  var  lcA0 = this;
return;

};
c['run__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.delay__Ljava_lang_Object_2Ljava_lang_Runnable_2I = function() {
  var r = (function(r,millis) {

  r = vm.java_lang_Class(false).toJS(r);
  millis = vm.java_lang_Class(false).toJS(millis);return window.setTimeout(function() { vm.java_lang_Class(false).toJS(vm.io_cloudoffice_platform_cockpit_js_$JsCallbacks$(false)._VM().java_1lang_1Runnable$run$__Ljava_lang_Object_2Ljava_lang_Runnable_2(r)); }, millis);
}).apply(this, arguments);
  return r === undefined ? null : r;

}

    m.access = 10;
    m.cls = CLS;
    m = c.delay__VI = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_js_DelayCall_jsTimer']) === null) { gt = 11; break IF; }
invoker.cancel__V(lcA0);
    }
    X_11: for (;;) { IF: if (gt <= 11) {

var stA0 = lcA0;var stA1 = c.delay__Ljava_lang_Object_2Ljava_lang_Runnable_2I(lcA0, lcI1);
stA0['fld_io_cloudoffice_platform_cockpit_js_DelayCall_jsTimer'] = stA1;
return;

    }
}}
};
c['delay__VI'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.close__VLjava_lang_Object_2 = function() {
  var r = (function(timer) {

  timer = vm.java_lang_Class(false).toJS(timer);window.clearTimeout(timer);
}).apply(this, arguments);
  return r === undefined ? null : r;

}

    m.access = 10;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_js_DelayCallfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_js_DelayCall', { value : true });
      vm.java_lang_Runnable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_js_DelayCallfillInstOf });
    io_cloudoffice_platform_cockpit_js_DelayCallfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/js/DelayCall';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Runnable(false).constructor.$class
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_js_DelayCall_jsTimer'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_js_DelayCall = registerClass(exports,'io_cloudoffice_platform_cockpit_js_DelayCall',io_cloudoffice_platform_cockpit_js_DelayCall);

vm.java_lang_Runnable = function() {
  var instance = arguments.length == 0 || arguments[0] === true;
  delete vm.java_lang_Runnable;
  return link('java/lang/Runnable', function(f) { vm.java_lang_Runnable = f;})(instance);
}

function io_cloudoffice_platform_cockpit_js_FileUpload() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_js_FileUpload;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_$$fn$$registerComponent_1'] = null;
  m = c._$$fn$$registerComponent_1 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$registerComponent_1'] = v; return CLS['fld_$$fn$$registerComponent_1']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.registerComponent__V = function() {
  var r = (function() {

}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['registerComponent__V'] = m;

    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_js_FileUploadfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_js_FileUpload', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_js_FileUploadfillInstOf });
    io_cloudoffice_platform_cockpit_js_FileUploadfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/js/FileUpload';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
// resource from io/cloudoffice/platform/cockpit/js/knockout-file-bindings.js

(0 || eval)("/*\n"
 + " * knockout-file-bindings\n"
 + " * Copyright 2014 Muhammad Safraz Razik\n"
 + " * All Rights Reserved.\n"
 + " * Use, reproduction, distribution, and modification of this code is subject to the terms and\n"
 + " * conditions of the MIT license, available at http://www.opensource.org/licenses/mit-license.php\n"
 + " *\n"
 + " * Author: Muhammad Safraz Razik\n"
 + " * Project: https://github.com/adrotec/knockout-file-bindings\n"
 + " */\n"
 + "(function (factory) {\n"
 + "    // Module systems magic dance.\n"
 + "\n"
 + "    if (typeof require === \"function\" && typeof exports === \"object\" && typeof module === \"object\") {\n"
 + "        // CommonJS or Node: hard-coded dependency on \"knockout\"\n"
 + "        factory(require(\"knockout\"), require(\"jquery\"));\n"
 + "    } else if (typeof define === \"function\" && define[\"amd\"]) {\n"
 + "        // AMD anonymous module with hard-coded dependency on \"knockout\"\n"
 + "        define([\"knockout\", \"jquery\"], factory);\n"
 + "    } else {\n"
 + "        // <script> tag: use the global `ko` object, attaching a `mapping` property\n"
 + "        factory(ko, jQuery);\n"
 + "    }\n"
 + "}(function (ko, $) {\n"
 + "\n"
 + "    var windowURL = window.URL || window.webkitURL;\n"
 + "    \n"
 + "    ko.bindingHandlers.fileInput = {\n"
 + "        init: function (element, valueAccessor) {\n"
 + "            element.onchange = function () {\n"
 + "                var fileData = ko.utils.unwrapObservable(valueAccessor()) || {};\n"
 + "\n"
 + "\n"
 + "\n"
 + "                if (fileData.dataUrl) {\n"
 + "                    fileData.dataURL = fileData.dataUrl;\n"
 + "                }\n"
 + "                if (fileData.objectUrl) {\n"
 + "                    fileData.objectURL = fileData.objectUrl;\n"
 + "                }\n"
 + "                fileData.file = fileData.file || ko.observable();\n"
 + "\n"
 + "                var file = this.files[0];\n"
 + "\n"
 + "                if (file === undefined) {\n"
 + "                    return;\n"
 + "                }\n"
 + "\n"
 + "//                var maxFileSize = 1 * 1024 * 1024; //1MB\n"
 + "//\n"
 + "//                if (file.size > maxFileSize) {\n"
 + "//                    //bindingContext.$data.clearFile(ko.dataFor(element));\n"
 + "//                    alert('Image upload limit is 1MB.');\n"
 + "//                    return;\n"
 + "//                }\n"
 + "\n"
 + "                if (file) {\n"
 + "                    fileData.file(file);\n"
 + "                }\n"
 + "\n"
 + "                if (!fileData.clear) {\n"
 + "                    fileData.clear = function () {\n"
 + "                        $.each(['file', 'objectURL', 'base64String', 'binaryString', 'text', 'dataURL', 'arrayBuffer'], function (i, property) {\n"
 + "                            if (fileData[property] && ko.isObservable(fileData[property])) {\n"
 + "                                if (property == 'objectURL') {\n"
 + "                                    windowURL.revokeObjectURL(fileData.objectURL());\n"
 + "                                }\n"
 + "                                fileData[property](null);\n"
 + "                            }\n"
 + "                        });\n"
 + "                        element.value = '';\n"
 + "                    }\n"
 + "                }\n"
 + "                if (ko.isObservable(valueAccessor())) {\n"
 + "                    valueAccessor()(fileData);\n"
 + "                }\n"
 + "            };\n"
 + "            element.onchange();\n"
 + "        },\n"
 + "        update: function (element, valueAccessor, allBindingsAccessor) {\n"
 + "\n"
 + "            var fileData = ko.utils.unwrapObservable(valueAccessor());\n"
 + "\n"
 + "            var file = ko.isObservable(fileData.file) && fileData.file();\n"
 + "\n"
 + "            if (fileData.objectURL && ko.isObservable(fileData.objectURL)) {\n"
 + "                var newUrl = file && windowURL.createObjectURL(file);\n"
 + "                if (newUrl) {\n"
 + "                    var oldUrl = fileData.objectURL();\n"
 + "                    if (oldUrl) {\n"
 + "                        windowURL.revokeObjectURL(oldUrl);\n"
 + "                    }\n"
 + "                    fileData.objectURL(newUrl);\n"
 + "                }\n"
 + "            }\n"
 + "\n"
 + "\n"
 + "            if (fileData.base64String && ko.isObservable(fileData.base64String)) {\n"
 + "                if (fileData.dataURL && ko.isObservable(fileData.dataURL)) {\n"
 + "                    // will be handled\n"
 + "                } else {\n"
 + "                    fileData.dataURL = ko.observable(); // hack\n"
 + "                }\n"
 + "            }\n"
 + "\n"
 + "            // var properties = ['binaryString', 'text', 'dataURL', 'arrayBuffer'], property;\n"
 + "            // for(var i = 0; i < properties.length; i++){\n"
 + "            //     property = properties[i];\n"
 + "            ['binaryString', 'text', 'dataURL', 'arrayBuffer'].forEach(function (property) {\n"
 + "                var method = 'readAs' + (property.substr(0, 1).toUpperCase() + property.substr(1));\n"
 + "                if (property != 'dataURL' && !(fileData[property] && ko.isObservable(fileData[property]))) {\n"
 + "                    return true;\n"
 + "                }\n"
 + "                if (!file) {\n"
 + "                    return true;\n"
 + "                }\n"
 + "                var reader = new FileReader();\n"
 + "                reader.onload = function (e) {\n"
 + "                    if (fileData[property]) {\n"
 + "                        fileData[property](e.target.result);\n"
 + "                    }\n"
 + "                    if (method == 'readAsDataURL' && fileData.base64String && ko.isObservable(fileData.base64String)) {\n"
 + "                        var resultParts = e.target.result.split(\",\");\n"
 + "                        if (resultParts.length === 2) {\n"
 + "                            fileData.base64String(resultParts[1]);\n"
 + "                        }\n"
 + "                    }\n"
 + "                };\n"
 + "\n"
 + "                reader[method](file);\n"
 + "            });\n"
 + "        }\n"
 + "    };\n"
 + "    \n"
 + "    ko.bindingHandlers['file'] = {\n"
 + "\tinit : function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {\n"
 + "            \n"
 + "                    var fileName,\n"
 + "                    fileContent,\n"
 + "                    mimeType,\n"
 + "                    fileSize,\n"
 + "                    fileData;\n"
 + "\n"
 + "                    fileName = valueAccessor()['name'];\n"
 + "                    fileContent = valueAccessor()['content'];\n"
 + "                    mimeType = valueAccessor()['mimeType'];\n"
 + "                    fileSize = valueAccessor()['size'];  \n"
 + "                    fileData = valueAccessor()['data']; \n"
 + "                    \n"
 + "                \n"
 + "\t\tvar handler = function() {\n"
 + "\t\t\t\n"
 + "                        var fileReaders = [];\n"
 + "                        var fileContents = [];\n"
 + "                        var loadCount = 0;\n"
 + "                        var maxFileSize = 2 * 1024 * 1024;\n"
 + "                        \n"
 + "                        function loadend() {\n"
 + "                                    for(var i=0;i<element.files.length;i++){\n"
 + "                                            //alert(i);\n"
 + "                                            var theFile = element.files[i];\n"
 + "                                            fileName(\"\");\n"
 + "                                            mimeType(\"\");\n"
 + "                                            fileContent(\"\");\n"
 + "                                            //console.log(fileName());  \n"
 + "                                            //console.log(fileContent()); \n"
 + "                                            //console.log(fileSize());\n"
 + "                                            fileName(theFile.name);\n"
 + "                                            mimeType(theFile.type);\n"
 + "                                            if(theFile.size){\n"
 + "                                                fileSize(theFile.size.toString());\n"
 + "                                            }\n"
 + "\n"
 + "                                            fileContent(fileContents[i]);\n"
 + "\n"
 + "                                            //console.log(fileName());  \n"
 + "                                            //console.log(fileContent());\n"
 + "                                            bindingContext.$data.selectFile(ko.dataFor(element));\n"
 + "                                            //console.log(fileName());  \n"
 + "                                            //console.log(fileContent()); \n"
 + "                                    }\n"
 + "                                    \n"
 + "                        }\n"
 + "                        \n"
 + "\t\t\tfor(var i=0;i<element.files.length;i++){\n"
 + "                            \n"
 + "\n"
 + "\t\t\t\tvar file = element.files[i];\n"
 + "\t\t\t\t\n"
 + "\t\t\t\t// Opening the file picker then canceling will trigger a 'change'\n"
 + "\t\t\t\t// event without actually picking a file.\n"
 + "\t\t\t\tif (file === undefined) {\n"
 + "\t\t\t\t\treturn;\n"
 + "\t\t\t\t}\n"
 + "                                \n"
 + "//                                if(file.size>maxFileSize){\n"
 + "//                                    //bindingContext.$data.clearFile(ko.dataFor(element));\n"
 + "//                                    alert('ERROR: Large File Size: '+file.name);\n"
 + "//                                    return;\n"
 + "//                                }\n"
 + "                                \n"
 + "                                var fileLoaded = function(event) {\n"
 + "                                        loadCount++;\n"
 + "                                        var resultParts = event.target.result.split(\",\");\n"
 + "                                        fileContents.push(resultParts[1]);\n"
 + "                                        //Check if we've loaded all the files\n"
 + "                                        if (loadCount == element.files.length) {\n"
 + "                                            loadend();\n"
 + "                                        }\n"
 + "                                  };\n"
 + "                                \n"
 + "                                var reader = new FileReader();\n"
 + "\n"
 + "                                reader.onloadend = fileLoaded;\n"
 + "                                          \n"
 + "\t\t\t\treader.readAsDataURL(file);\n"
 + "\t\t\t\n"
 + "\t\t\t}\n"
 + "\t\t\t\n"
 + "\t\t};\n"
 + "\n"
 + "\t\tko.utils.registerEventHandler(element, 'change', handler);\n"
 + "\t}\n"
 + "    };\n"
 + "\n"
 + "}));\n"
 + "");

  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_js_FileUpload = registerClass(exports,'io_cloudoffice_platform_cockpit_js_FileUpload',io_cloudoffice_platform_cockpit_js_FileUpload);


function io_cloudoffice_platform_cockpit_js_History() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_js_History;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_$$fn$$update_1'] = null;
  m = c._$$fn$$update_1 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$update_1'] = v; return CLS['fld_$$fn$$update_1']; };
  CLS['fld_$$fn$$replace_2'] = null;
  m = c._$$fn$$replace_2 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$replace_2'] = v; return CLS['fld_$$fn$$replace_2']; };
  CLS['fld_$$fn$$getState_3'] = null;
  m = c._$$fn$$getState_3 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getState_3'] = v; return CLS['fld_$$fn$$getState_3']; };
  CLS['fld_$$fn$$init_4'] = null;
  m = c._$$fn$$init_4 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$init_4'] = v; return CLS['fld_$$fn$$init_4']; };
  CLS['fld_$$fn$$installTracker_5'] = null;
  m = c._$$fn$$installTracker_5 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$installTracker_5'] = v; return CLS['fld_$$fn$$installTracker_5']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.update__VLjava_lang_String_2Ljava_lang_String_2 = function() {
  var r = (function(path,data) {

  path = vm.java_lang_Class(false).toJS(path);
  data = vm.java_lang_Class(false).toJS(data);window.history.pushState(data,path,path);

}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['update__VLjava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.replace__VLjava_lang_String_2Ljava_lang_String_2 = function() {
  var r = (function(path,data) {

  path = vm.java_lang_Class(false).toJS(path);
  data = vm.java_lang_Class(false).toJS(data);window.history.replaceState(data,path,path);

}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['replace__VLjava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getState__Ljava_lang_String_2 = function() {
  var r = (function() {
return new String(window.history.state).toString();

}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getState__Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.init__V = function() {
  var r = (function() {

}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['init__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.installTracker__VLjava_lang_String_2Ljava_lang_String_2 = function() {
  var r = (function(trackerName,trackerFunction) {

  trackerName = vm.java_lang_Class(false).toJS(trackerName);
  trackerFunction = vm.java_lang_Class(false).toJS(trackerFunction);window.addEventListener('popstate',function(event) {var view = componentsValue[trackerName];view[trackerFunction](event.state);})
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['installTracker__VLjava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_js_HistoryfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_js_History', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_js_HistoryfillInstOf });
    io_cloudoffice_platform_cockpit_js_HistoryfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/js/History';
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
vm.io_cloudoffice_platform_cockpit_js_History = registerClass(exports,'io_cloudoffice_platform_cockpit_js_History',io_cloudoffice_platform_cockpit_js_History);


function io_cloudoffice_platform_cockpit_js_JQuery() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_js_JQuery;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_$$fn$$init_1'] = null;
  m = c._$$fn$$init_1 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$init_1'] = v; return CLS['fld_$$fn$$init_1']; };
  CLS['fld_$$fn$$registerComponent_2'] = null;
  m = c._$$fn$$registerComponent_2 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$registerComponent_2'] = v; return CLS['fld_$$fn$$registerComponent_2']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.init__V = function() {
  var r = (function() {

}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['init__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.registerComponent__V = function() {
  var r = (function() {

}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['registerComponent__V'] = m;

    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_js_JQueryfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_js_JQuery', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_js_JQueryfillInstOf });
    io_cloudoffice_platform_cockpit_js_JQueryfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/js/JQuery';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
// resource from io/cloudoffice/platform/cockpit/js/jquery.js

(0 || eval)("/*!\n"
 + " * jQuery JavaScript Library v2.1.4\n"
 + " * http://jquery.com/\n"
 + " *\n"
 + " * Includes Sizzle.js\n"
 + " * http://sizzlejs.com/\n"
 + " *\n"
 + " * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors\n"
 + " * Released under the MIT license\n"
 + " * http://jquery.org/license\n"
 + " *\n"
 + " * Date: 2015-04-28T16:01Z\n"
 + " */\n"
 + "!function(e,t){\"object\"==typeof module&&\"object\"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error(\"jQuery requires a window with a document\");return t(e)}:t(e)}(\"undefined\"!=typeof window?window:this,function(e,t){var n=[],r=n.slice,i=n.concat,o=n.push,s=n.indexOf,a={},u=a.toString,l=a.hasOwnProperty,c={},f=e.document,p=function(e,t){return new p.fn.init(e,t)},d=/^[\\s\\uFEFF\\xA0]+|[\\s\\uFEFF\\xA0]+$/g,h=/^-ms-/,g=/-([\\da-z])/gi,m=function(e,t){return t.toUpperCase()};function v(e){var t=\"length\"in e&&e.length,n=p.type(e);return\"function\"!==n&&!p.isWindow(e)&&(!(1!==e.nodeType||!t)||(\"array\"===n||0===t||\"number\"==typeof t&&t>0&&t-1 in e))}p.fn=p.prototype={jquery:\"2.1.4\",constructor:p,selector:\"\",length:0,toArray:function(){return r.call(this)},get:function(e){return null!=e?e<0?this[e+this.length]:this[e]:r.call(this)},pushStack:function(e){var t=p.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return p.each(this,e,t)},map:function(e){return this.pushStack(p.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(r.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:o,sort:n.sort,splice:n.splice},p.extend=p.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,u=arguments.length,l=!1;for(\"boolean\"==typeof s&&(l=s,s=arguments[a]||{},a++),\"object\"==typeof s||p.isFunction(s)||(s={}),a===u&&(s=this,a--);a<u;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],s!==(r=e[t])&&(l&&r&&(p.isPlainObject(r)||(i=p.isArray(r)))?(i?(i=!1,o=n&&p.isArray(n)?n:[]):o=n&&p.isPlainObject(n)?n:{},s[t]=p.extend(l,o,r)):void 0!==r&&(s[t]=r));return s},p.extend({expando:\"jQuery\"+(\"2.1.4\"+Math.random()).replace(/\\D/g,\"\"),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return\"function\"===p.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!p.isArray(e)&&e-parseFloat(e)+1>=0},isPlainObject:function(e){return\"object\"===p.type(e)&&!e.nodeType&&!p.isWindow(e)&&!(e.constructor&&!l.call(e.constructor.prototype,\"isPrototypeOf\"))},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},type:function(e){return null==e?e+\"\":\"object\"==typeof e||\"function\"==typeof e?a[u.call(e)]||\"object\":typeof e},globalEval:function(e){var t,n=eval;(e=p.trim(e))&&(1===e.indexOf(\"use strict\")?((t=f.createElement(\"script\")).text=e,f.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(h,\"ms-\").replace(g,m)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r=0,i=e.length,o=v(e);if(n){if(o)for(;r<i&&!1!==t.apply(e[r],n);r++);else for(r in e)if(!1===t.apply(e[r],n))break}else if(o)for(;r<i&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?\"\":(e+\"\").replace(d,\"\")},makeArray:function(e,t){var n=t||[];return null!=e&&(v(Object(e))?p.merge(n,\"string\"==typeof e?[e]:e):o.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:s.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,s=!n;i<o;i++)!t(e[i],i)!==s&&r.push(e[i]);return r},map:function(e,t,n){var r,o=0,s=e.length,a=[];if(v(e))for(;o<s;o++)null!=(r=t(e[o],o,n))&&a.push(r);else for(o in e)null!=(r=t(e[o],o,n))&&a.push(r);return i.apply([],a)},guid:1,proxy:function(e,t){var n,i,o;if(\"string\"==typeof t&&(n=e[t],t=e,e=n),p.isFunction(e))return i=r.call(arguments,2),(o=function(){return e.apply(t||this,i.concat(r.call(arguments)))}).guid=e.guid=e.guid||p.guid++,o},now:Date.now,support:c}),p.each(\"Boolean Number String Function Array Date RegExp Object Error\".split(\" \"),function(e,t){a[\"[object \"+t+\"]\"]=t.toLowerCase()});var y=\n"
 + "/*!\n"
 + " * Sizzle CSS Selector Engine v2.2.0-pre\n"
 + " * http://sizzlejs.com/\n"
 + " *\n"
 + " * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors\n"
 + " * Released under the MIT license\n"
 + " * http://jquery.org/license\n"
 + " *\n"
 + " * Date: 2014-12-16\n"
 + " */\n"
 + "function(e){var t,n,r,i,o,s,a,u,l,c,f,p,d,h,g,m,v,y,x,b=\"sizzle\"+1*new Date,w=e.document,T=0,C=0,N=se(),k=se(),E=se(),S=function(e,t){return e===t&&(f=!0),0},D=1<<31,j={}.hasOwnProperty,A=[],L=A.pop,q=A.push,H=A.push,O=A.slice,F=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P=\"checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped\",R=\"[\\\\x20\\\\t\\\\r\\\\n\\\\f]\",M=\"(?:\\\\\\\\.|[\\\\w-]|[^\\\\x00-\\\\xa0])+\",W=M.replace(\"w\",\"w#\"),$=\"\\\\[\"+R+\"*(\"+M+\")(?:\"+R+\"*([*^$|!~]?=)\"+R+\"*(?:'((?:\\\\\\\\.|[^\\\\\\\\'])*)'|\\\"((?:\\\\\\\\.|[^\\\\\\\\\\\"])*)\\\"|(\"+W+\"))|)\"+R+\"*\\\\]\",I=\":(\"+M+\")(?:\\\\((('((?:\\\\\\\\.|[^\\\\\\\\'])*)'|\\\"((?:\\\\\\\\.|[^\\\\\\\\\\\"])*)\\\")|((?:\\\\\\\\.|[^\\\\\\\\()[\\\\]]|\"+$+\")*)|.*)\\\\)|)\",B=new RegExp(R+\"+\",\"g\"),_=new RegExp(\"^\"+R+\"+|((?:^|[^\\\\\\\\])(?:\\\\\\\\.)*)\"+R+\"+$\",\"g\"),z=new RegExp(\"^\"+R+\"*,\"+R+\"*\"),X=new RegExp(\"^\"+R+\"*([>+~]|\"+R+\")\"+R+\"*\"),U=new RegExp(\"=\"+R+\"*([^\\\\]'\\\"]*?)\"+R+\"*\\\\]\",\"g\"),V=new RegExp(I),Y=new RegExp(\"^\"+W+\"$\"),G={ID:new RegExp(\"^#(\"+M+\")\"),CLASS:new RegExp(\"^\\\\.(\"+M+\")\"),TAG:new RegExp(\"^(\"+M.replace(\"w\",\"w*\")+\")\"),ATTR:new RegExp(\"^\"+$),PSEUDO:new RegExp(\"^\"+I),CHILD:new RegExp(\"^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\\\(\"+R+\"*(even|odd|(([+-]|)(\\\\d*)n|)\"+R+\"*(?:([+-]|)\"+R+\"*(\\\\d+)|))\"+R+\"*\\\\)|)\",\"i\"),bool:new RegExp(\"^(?:\"+P+\")$\",\"i\"),needsContext:new RegExp(\"^\"+R+\"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\\\(\"+R+\"*((?:-\\\\d)?\\\\d*)\"+R+\"*\\\\)|)(?=[^-]|$)\",\"i\")},Q=/^(?:input|select|textarea|button)$/i,J=/^h\\d$/i,K=/^[^{]+\\{\\s*\\[native \\w/,Z=/^(?:#([\\w-]+)|(\\w+)|\\.([\\w-]+))$/,ee=/[+~]/,te=/'|\\\\/g,ne=new RegExp(\"\\\\\\\\([\\\\da-f]{1,6}\"+R+\"?|(\"+R+\")|.)\",\"ig\"),re=function(e,t,n){var r=\"0x\"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},ie=function(){p()};try{H.apply(A=O.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){H={apply:A.length?function(e,t){q.apply(e,O.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}function oe(e,t,r,i){var o,a,l,c,f,h,v,y,T,C;if((t?t.ownerDocument||t:w)!==d&&p(t),r=r||[],c=(t=t||d).nodeType,\"string\"!=typeof e||!e||1!==c&&9!==c&&11!==c)return r;if(!i&&g){if(11!==c&&(o=Z.exec(e)))if(l=o[1]){if(9===c){if(!(a=t.getElementById(l))||!a.parentNode)return r;if(a.id===l)return r.push(a),r}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(l))&&x(t,a)&&a.id===l)return r.push(a),r}else{if(o[2])return H.apply(r,t.getElementsByTagName(e)),r;if((l=o[3])&&n.getElementsByClassName)return H.apply(r,t.getElementsByClassName(l)),r}if(n.qsa&&(!m||!m.test(e))){if(y=v=b,T=t,C=1!==c&&e,1===c&&\"object\"!==t.nodeName.toLowerCase()){for(h=s(e),(v=t.getAttribute(\"id\"))?y=v.replace(te,\"\\\\$&\"):t.setAttribute(\"id\",y),y=\"[id='\"+y+\"'] \",f=h.length;f--;)h[f]=y+me(h[f]);T=ee.test(e)&&he(t.parentNode)||t,C=h.join(\",\")}if(C)try{return H.apply(r,T.querySelectorAll(C)),r}catch(e){}finally{v||t.removeAttribute(\"id\")}}}return u(e.replace(_,\"$1\"),t,r,i)}function se(){var e=[];return function t(n,i){return e.push(n+\" \")>r.cacheLength&&delete t[e.shift()],t[n+\" \"]=i}}function ae(e){return e[b]=!0,e}function ue(e){var t=d.createElement(\"div\");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){for(var n=e.split(\"|\"),i=e.length;i--;)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return\"input\"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return(\"input\"===n||\"button\"===n)&&t.type===e}}function de(e){return ae(function(t){return t=+t,ae(function(n,r){for(var i,o=e([],n.length,t),s=o.length;s--;)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))})})}function he(e){return e&&void 0!==e.getElementsByTagName&&e}for(t in n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&\"HTML\"!==t.nodeName},p=oe.setDocument=function(e){var t,i,s=e?e.ownerDocument||e:w;return s!==d&&9===s.nodeType&&s.documentElement?(d=s,h=s.documentElement,(i=s.defaultView)&&i!==i.top&&(i.addEventListener?i.addEventListener(\"unload\",ie,!1):i.attachEvent&&i.attachEvent(\"onunload\",ie)),g=!o(s),n.attributes=ue(function(e){return e.className=\"i\",!e.getAttribute(\"className\")}),n.getElementsByTagName=ue(function(e){return e.appendChild(s.createComment(\"\")),!e.getElementsByTagName(\"*\").length}),n.getElementsByClassName=K.test(s.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!s.getElementsByName||!s.getElementsByName(b).length}),n.getById?(r.find.ID=function(e,t){if(void 0!==t.getElementById&&g){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},r.filter.ID=function(e){var t=e.replace(ne,re);return function(e){return e.getAttribute(\"id\")===t}}):(delete r.find.ID,r.filter.ID=function(e){var t=e.replace(ne,re);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode(\"id\");return n&&n.value===t}}),r.find.TAG=n.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if(\"*\"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if(g)return t.getElementsByClassName(e)},v=[],m=[],(n.qsa=K.test(s.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML=\"<a id='\"+b+\"'></a><select id='\"+b+\"-\\f]' msallowcapture=''><option selected=''></option></select>\",e.querySelectorAll(\"[msallowcapture^='']\").length&&m.push(\"[*^$]=\"+R+\"*(?:''|\\\"\\\")\"),e.querySelectorAll(\"[selected]\").length||m.push(\"\\\\[\"+R+\"*(?:value|\"+P+\")\"),e.querySelectorAll(\"[id~=\"+b+\"-]\").length||m.push(\"~=\"),e.querySelectorAll(\":checked\").length||m.push(\":checked\"),e.querySelectorAll(\"a#\"+b+\"+*\").length||m.push(\".#.+[+~]\")}),ue(function(e){var t=s.createElement(\"input\");t.setAttribute(\"type\",\"hidden\"),e.appendChild(t).setAttribute(\"name\",\"D\"),e.querySelectorAll(\"[name=d]\").length&&m.push(\"name\"+R+\"*[*^$|!~]?=\"),e.querySelectorAll(\":enabled\").length||m.push(\":enabled\",\":disabled\"),e.querySelectorAll(\"*,:x\"),m.push(\",.*:\")})),(n.matchesSelector=K.test(y=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=y.call(e,\"div\"),y.call(e,\"[s!='']:x\"),v.push(\"!=\",I)}),m=m.length&&new RegExp(m.join(\"|\")),v=v.length&&new RegExp(v.join(\"|\")),t=K.test(h.compareDocumentPosition),x=t||K.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},S=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===s||e.ownerDocument===w&&x(w,e)?-1:t===s||t.ownerDocument===w&&x(w,t)?1:c?F(c,e)-F(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],u=[t];if(!i||!o)return e===s?-1:t===s?1:i?-1:o?1:c?F(c,e)-F(c,t):0;if(i===o)return ce(e,t);for(n=e;n=n.parentNode;)a.unshift(n);for(n=t;n=n.parentNode;)u.unshift(n);for(;a[r]===u[r];)r++;return r?ce(a[r],u[r]):a[r]===w?-1:u[r]===w?1:0},s):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(U,\"='$1']\"),n.matchesSelector&&g&&(!v||!v.test(t))&&(!m||!m.test(t)))try{var r=y.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&j.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.error=function(e){throw new Error(\"Syntax error, unrecognized expression: \"+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(S),f){for(;t=e[o++];)t===e[o]&&(i=r.push(o));for(;i--;)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n=\"\",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if(\"string\"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[r++];)n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:ae,match:G,attrHandle:{},find:{},relative:{\">\":{dir:\"parentNode\",first:!0},\" \":{dir:\"parentNode\"},\"+\":{dir:\"previousSibling\",first:!0},\"~\":{dir:\"previousSibling\"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(ne,re),e[3]=(e[3]||e[4]||e[5]||\"\").replace(ne,re),\"~=\"===e[2]&&(e[3]=\" \"+e[3]+\" \"),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),\"nth\"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*(\"even\"===e[3]||\"odd\"===e[3])),e[5]=+(e[7]+e[8]||\"odd\"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||\"\":n&&V.test(n)&&(t=s(n,!0))&&(t=n.indexOf(\")\",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(ne,re).toLowerCase();return\"*\"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+\" \"];return t||(t=new RegExp(\"(^|\"+R+\")\"+e+\"(\"+R+\"|$)\"))&&N(e,function(e){return t.test(\"string\"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute(\"class\")||\"\")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?\"!=\"===t:!t||(i+=\"\",\"=\"===t?i===n:\"!=\"===t?i!==n:\"^=\"===t?n&&0===i.indexOf(n):\"*=\"===t?n&&i.indexOf(n)>-1:\"$=\"===t?n&&i.slice(-n.length)===n:\"~=\"===t?(\" \"+i.replace(B,\" \")+\" \").indexOf(n)>-1:\"|=\"===t&&(i===n||i.slice(0,n.length+1)===n+\"-\"))}},CHILD:function(e,t,n,r,i){var o=\"nth\"!==e.slice(0,3),s=\"last\"!==e.slice(-4),a=\"of-type\"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==s?\"nextSibling\":\"previousSibling\",m=t.parentNode,v=a&&t.nodeName.toLowerCase(),y=!u&&!a;if(m){if(o){for(;g;){for(f=t;f=f[g];)if(a?f.nodeName.toLowerCase()===v:1===f.nodeType)return!1;h=g=\"only\"===e&&!h&&\"nextSibling\"}return!0}if(h=[s?m.firstChild:m.lastChild],s&&y){for(d=(l=(c=m[b]||(m[b]={}))[e]||[])[0]===T&&l[1],p=l[0]===T&&l[2],f=d&&m.childNodes[d];f=++d&&f&&f[g]||(p=d=0)||h.pop();)if(1===f.nodeType&&++p&&f===t){c[e]=[T,d,p];break}}else if(y&&(l=(t[b]||(t[b]={}))[e])&&l[0]===T)p=l[1];else for(;(f=++d&&f&&f[g]||(p=d=0)||h.pop())&&((a?f.nodeName.toLowerCase()!==v:1!==f.nodeType)||!++p||(y&&((f[b]||(f[b]={}))[e]=[T,p]),f!==t)););return(p-=i)===r||p%r==0&&p/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error(\"unsupported pseudo: \"+e);return i[b]?i(t):i.length>1?(n=[e,e,\"\",t],r.setFilters.hasOwnProperty(e.toLowerCase())?ae(function(e,n){for(var r,o=i(e,t),s=o.length;s--;)e[r=F(e,o[s])]=!(n[r]=o[s])}):function(e){return i(e,0,n)}):i}},pseudos:{not:ae(function(e){var t=[],n=[],r=a(e.replace(_,\"$1\"));return r[b]?ae(function(e,t,n,i){for(var o,s=r(e,null,i,[]),a=e.length;a--;)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:ae(function(e){return function(t){return oe(e,t).length>0}}),contains:ae(function(e){return e=e.replace(ne,re),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:ae(function(e){return Y.test(e||\"\")||oe.error(\"unsupported lang: \"+e),e=e.replace(ne,re).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute(\"xml:lang\")||t.getAttribute(\"lang\"))return(n=n.toLowerCase())===e||0===n.indexOf(e+\"-\")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return!1===e.disabled},disabled:function(e){return!0===e.disabled},checked:function(e){var t=e.nodeName.toLowerCase();return\"input\"===t&&!!e.checked||\"option\"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return\"input\"===t&&\"button\"===e.type||\"button\"===t},text:function(e){var t;return\"input\"===e.nodeName.toLowerCase()&&\"text\"===e.type&&(null==(t=e.getAttribute(\"type\"))||\"text\"===t.toLowerCase())},first:de(function(){return[0]}),last:de(function(e,t){return[t-1]}),eq:de(function(e,t,n){return[n<0?n+t:n]}),even:de(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:de(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:de(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:de(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ge(){}function me(e){for(var t=0,n=e.length,r=\"\";t<n;t++)r+=e[t].value;return r}function ve(e,t,n){var r=t.dir,i=n&&\"parentNode\"===r,o=C++;return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,o)}:function(t,n,s){var a,u,l=[T,o];if(s){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,s))return!0}else for(;t=t[r];)if(1===t.nodeType||i){if((a=(u=t[b]||(t[b]={}))[r])&&a[0]===T&&a[1]===o)return l[2]=a[2];if(u[r]=l,l[2]=e(t,n,s))return!0}}}function ye(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xe(e,t,n,r,i){for(var o,s=[],a=0,u=e.length,l=null!=t;a<u;a++)(o=e[a])&&(n&&!n(o,r,i)||(s.push(o),l&&t.push(a)));return s}function be(e,t,n,r,i,o){return r&&!r[b]&&(r=be(r)),i&&!i[b]&&(i=be(i,o)),ae(function(o,s,a,u){var l,c,f,p=[],d=[],h=s.length,g=o||function(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}(t||\"*\",a.nodeType?[a]:a,[]),m=!e||!o&&t?g:xe(g,p,e,a,u),v=n?i||(o?e:h||r)?[]:s:m;if(n&&n(m,v,a,u),r)for(l=xe(v,d),r(l,[],a,u),c=l.length;c--;)(f=l[c])&&(v[d[c]]=!(m[d[c]]=f));if(o){if(i||e){if(i){for(l=[],c=v.length;c--;)(f=v[c])&&l.push(m[c]=f);i(null,v=[],l,u)}for(c=v.length;c--;)(f=v[c])&&(l=i?F(o,f):p[c])>-1&&(o[l]=!(s[l]=f))}}else v=xe(v===s?v.splice(h,v.length):v),i?i(null,s,v,u):H.apply(s,v)})}function we(e){for(var t,n,i,o=e.length,s=r.relative[e[0].type],a=s||r.relative[\" \"],u=s?1:0,c=ve(function(e){return e===t},a,!0),f=ve(function(e){return F(t,e)>-1},a,!0),p=[function(e,n,r){var i=!s&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[ve(ye(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o&&!r.relative[e[i].type];i++);return be(u>1&&ye(p),u>1&&me(e.slice(0,u-1).concat({value:\" \"===e[u-2].type?\"*\":\"\"})).replace(_,\"$1\"),n,u<i&&we(e.slice(u,i)),i<o&&we(e=e.slice(i)),i<o&&me(e))}p.push(n)}return ye(p)}return ge.prototype=r.filters=r.pseudos,r.setFilters=new ge,s=oe.tokenize=function(e,t){var n,i,o,s,a,u,l,c=k[e+\" \"];if(c)return t?0:c.slice(0);for(a=e,u=[],l=r.preFilter;a;){for(s in n&&!(i=z.exec(a))||(i&&(a=a.slice(i[0].length)||a),u.push(o=[])),n=!1,(i=X.exec(a))&&(n=i.shift(),o.push({value:n,type:i[0].replace(_,\" \")}),a=a.slice(n.length)),r.filter)!(i=G[s].exec(a))||l[s]&&!(i=l[s](i))||(n=i.shift(),o.push({value:n,type:s,matches:i}),a=a.slice(n.length));if(!n)break}return t?a.length:a?oe.error(e):k(e,u).slice(0)},a=oe.compile=function(e,t){var n,i=[],o=[],a=E[e+\" \"];if(!a){for(t||(t=s(e)),n=t.length;n--;)(a=we(t[n]))[b]?i.push(a):o.push(a);(a=E(e,function(e,t){var n=t.length>0,i=e.length>0,o=function(o,s,a,u,c){var f,p,h,g=0,m=\"0\",v=o&&[],y=[],x=l,b=o||i&&r.find.TAG(\"*\",c),w=T+=null==x?1:Math.random()||.1,C=b.length;for(c&&(l=s!==d&&s);m!==C&&null!=(f=b[m]);m++){if(i&&f){for(p=0;h=e[p++];)if(h(f,s,a)){u.push(f);break}c&&(T=w)}n&&((f=!h&&f)&&g--,o&&v.push(f))}if(g+=m,n&&m!==g){for(p=0;h=t[p++];)h(v,y,s,a);if(o){if(g>0)for(;m--;)v[m]||y[m]||(y[m]=L.call(u));y=xe(y)}H.apply(u,y),c&&!o&&y.length>0&&g+t.length>1&&oe.uniqueSort(u)}return c&&(T=w,l=x),v};return n?ae(o):o}(o,i))).selector=e}return a},u=oe.select=function(e,t,i,o){var u,l,c,f,p,d=\"function\"==typeof e&&e,h=!o&&s(e=d.selector||e);if(i=i||[],1===h.length){if((l=h[0]=h[0].slice(0)).length>2&&\"ID\"===(c=l[0]).type&&n.getById&&9===t.nodeType&&g&&r.relative[l[1].type]){if(!(t=(r.find.ID(c.matches[0].replace(ne,re),t)||[])[0]))return i;d&&(t=t.parentNode),e=e.slice(l.shift().value.length)}for(u=G.needsContext.test(e)?0:l.length;u--&&(c=l[u],!r.relative[f=c.type]);)if((p=r.find[f])&&(o=p(c.matches[0].replace(ne,re),ee.test(l[0].type)&&he(t.parentNode)||t))){if(l.splice(u,1),!(e=o.length&&me(l)))return H.apply(i,o),i;break}}return(d||a(e,h))(o,t,!g,i,ee.test(e)&&he(t.parentNode)||t),i},n.sortStable=b.split(\"\").sort(S).join(\"\")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement(\"div\"))}),ue(function(e){return e.innerHTML=\"<a href='#'></a>\",\"#\"===e.firstChild.getAttribute(\"href\")})||le(\"type|href|height|width\",function(e,t,n){if(!n)return e.getAttribute(t,\"type\"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML=\"<input/>\",e.firstChild.setAttribute(\"value\",\"\"),\"\"===e.firstChild.getAttribute(\"value\")})||le(\"value\",function(e,t,n){if(!n&&\"input\"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute(\"disabled\")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);p.find=y,p.expr=y.selectors,p.expr[\":\"]=p.expr.pseudos,p.unique=y.uniqueSort,p.text=y.getText,p.isXMLDoc=y.isXML,p.contains=y.contains;var x=p.expr.match.needsContext,b=/^<(\\w+)\\s*\\/?>(?:<\\/\\1>|)$/,w=/^.[^:#\\[\\.,]*$/;function T(e,t,n){if(p.isFunction(t))return p.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return p.grep(e,function(e){return e===t!==n});if(\"string\"==typeof t){if(w.test(t))return p.filter(t,e,n);t=p.filter(t,e)}return p.grep(e,function(e){return s.call(t,e)>=0!==n})}p.filter=function(e,t,n){var r=t[0];return n&&(e=\":not(\"+e+\")\"),1===t.length&&1===r.nodeType?p.find.matchesSelector(r,e)?[r]:[]:p.find.matches(e,p.grep(t,function(e){return 1===e.nodeType}))},p.fn.extend({find:function(e){var t,n=this.length,r=[],i=this;if(\"string\"!=typeof e)return this.pushStack(p(e).filter(function(){for(t=0;t<n;t++)if(p.contains(i[t],this))return!0}));for(t=0;t<n;t++)p.find(e,i[t],r);return(r=this.pushStack(n>1?p.unique(r):r)).selector=this.selector?this.selector+\" \"+e:e,r},filter:function(e){return this.pushStack(T(this,e||[],!1))},not:function(e){return this.pushStack(T(this,e||[],!0))},is:function(e){return!!T(this,\"string\"==typeof e&&x.test(e)?p(e):e||[],!1).length}});var C,N=/^(?:\\s*(<[\\w\\W]+>)[^>]*|#([\\w-]*))$/;(p.fn.init=function(e,t){var n,r;if(!e)return this;if(\"string\"==typeof e){if(!(n=\"<\"===e[0]&&\">\"===e[e.length-1]&&e.length>=3?[null,e,null]:N.exec(e))||!n[1]&&t)return!t||t.jquery?(t||C).find(e):this.constructor(t).find(e);if(n[1]){if(t=t instanceof p?t[0]:t,p.merge(this,p.parseHTML(n[1],t&&t.nodeType?t.ownerDocument||t:f,!0)),b.test(n[1])&&p.isPlainObject(t))for(n in t)p.isFunction(this[n])?this[n](t[n]):this.attr(n,t[n]);return this}return(r=f.getElementById(n[2]))&&r.parentNode&&(this.length=1,this[0]=r),this.context=f,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):p.isFunction(e)?void 0!==C.ready?C.ready(e):e(p):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),p.makeArray(e,this))}).prototype=p.fn,C=p(f);var k=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};function S(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}p.extend({dir:function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&p(e).is(n))break;r.push(e)}return r},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}}),p.fn.extend({has:function(e){var t=p(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(p.contains(this,t[e]))return!0})},closest:function(e,t){for(var n,r=0,i=this.length,o=[],s=x.test(e)||\"string\"!=typeof e?p(e,t||this.context):0;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(s?s.index(n)>-1:1===n.nodeType&&p.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?p.unique(o):o)},index:function(e){return e?\"string\"==typeof e?s.call(p(e),this[0]):s.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(p.unique(p.merge(this.get(),p(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),p.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return p.dir(e,\"parentNode\")},parentsUntil:function(e,t,n){return p.dir(e,\"parentNode\",n)},next:function(e){return S(e,\"nextSibling\")},prev:function(e){return S(e,\"previousSibling\")},nextAll:function(e){return p.dir(e,\"nextSibling\")},prevAll:function(e){return p.dir(e,\"previousSibling\")},nextUntil:function(e,t,n){return p.dir(e,\"nextSibling\",n)},prevUntil:function(e,t,n){return p.dir(e,\"previousSibling\",n)},siblings:function(e){return p.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return p.sibling(e.firstChild)},contents:function(e){return e.contentDocument||p.merge([],e.childNodes)}},function(e,t){p.fn[e]=function(n,r){var i=p.map(this,t,n);return\"Until\"!==e.slice(-5)&&(r=n),r&&\"string\"==typeof r&&(i=p.filter(r,i)),this.length>1&&(E[e]||p.unique(i),k.test(e)&&i.reverse()),this.pushStack(i)}});var D,j=/\\S+/g,A={};function L(){f.removeEventListener(\"DOMContentLoaded\",L,!1),e.removeEventListener(\"load\",L,!1),p.ready()}p.Callbacks=function(e){e=\"string\"==typeof e?A[e]||function(e){var t=A[e]={};return p.each(e.match(j)||[],function(e,n){t[n]=!0}),t}(e):p.extend({},e);var t,n,r,i,o,s,a=[],u=!e.once&&[],l=function(f){for(t=e.memory&&f,n=!0,s=i||0,i=0,o=a.length,r=!0;a&&s<o;s++)if(!1===a[s].apply(f[0],f[1])&&e.stopOnFalse){t=!1;break}r=!1,a&&(u?u.length&&l(u.shift()):t?a=[]:c.disable())},c={add:function(){if(a){var n=a.length;!function t(n){p.each(n,function(n,r){var i=p.type(r);\"function\"===i?e.unique&&c.has(r)||a.push(r):r&&r.length&&\"string\"!==i&&t(r)})}(arguments),r?o=a.length:t&&(i=n,l(t))}return this},remove:function(){return a&&p.each(arguments,function(e,t){for(var n;(n=p.inArray(t,a,n))>-1;)a.splice(n,1),r&&(n<=o&&o--,n<=s&&s--)}),this},has:function(e){return e?p.inArray(e,a)>-1:!(!a||!a.length)},empty:function(){return a=[],o=0,this},disable:function(){return a=u=t=void 0,this},disabled:function(){return!a},lock:function(){return u=void 0,t||c.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!a||n&&!u||(t=[e,(t=t||[]).slice?t.slice():t],r?u.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!n}};return c},p.extend({Deferred:function(e){var t=[[\"resolve\",\"done\",p.Callbacks(\"once memory\"),\"resolved\"],[\"reject\",\"fail\",p.Callbacks(\"once memory\"),\"rejected\"],[\"notify\",\"progress\",p.Callbacks(\"memory\")]],n=\"pending\",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return p.Deferred(function(n){p.each(t,function(t,o){var s=p.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&p.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[o[0]+\"With\"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?p.extend(e,r):r}},i={};return r.pipe=r.then,p.each(t,function(e,o){var s=o[2],a=o[3];r[o[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+\"With\"](this===i?r:this,arguments),this},i[o[0]+\"With\"]=s.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t,n,i,o=0,s=r.call(arguments),a=s.length,u=1!==a||e&&p.isFunction(e.promise)?a:0,l=1===u?e:p.Deferred(),c=function(e,n,i){return function(o){n[e]=this,i[e]=arguments.length>1?r.call(arguments):o,i===t?l.notifyWith(n,i):--u||l.resolveWith(n,i)}};if(a>1)for(t=new Array(a),n=new Array(a),i=new Array(a);o<a;o++)s[o]&&p.isFunction(s[o].promise)?s[o].promise().done(c(o,i,s)).fail(l.reject).progress(c(o,n,t)):--u;return u||l.resolveWith(i,s),l.promise()}}),p.fn.ready=function(e){return p.ready.promise().done(e),this},p.extend({isReady:!1,readyWait:1,holdReady:function(e){e?p.readyWait++:p.ready(!0)},ready:function(e){(!0===e?--p.readyWait:p.isReady)||(p.isReady=!0,!0!==e&&--p.readyWait>0||(D.resolveWith(f,[p]),p.fn.triggerHandler&&(p(f).triggerHandler(\"ready\"),p(f).off(\"ready\"))))}}),p.ready.promise=function(t){return D||(D=p.Deferred(),\"complete\"===f.readyState?setTimeout(p.ready):(f.addEventListener(\"DOMContentLoaded\",L,!1),e.addEventListener(\"load\",L,!1))),D.promise(t)},p.ready.promise();var q=p.access=function(e,t,n,r,i,o,s){var a=0,u=e.length,l=null==n;if(\"object\"===p.type(n))for(a in i=!0,n)p.access(e,t,a,n[a],!0,o,s);else if(void 0!==r&&(i=!0,p.isFunction(r)||(s=!0),l&&(s?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(p(e),n)})),t))for(;a<u;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)));return i?e:l?t.call(e):u?t(e[0],n):o};function H(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=p.expando+H.uid++}p.acceptData=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType},H.uid=1,H.accepts=p.acceptData,H.prototype={key:function(e){if(!H.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=H.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,p.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if(\"string\"==typeof t)o[t]=n;else if(p.isEmptyObject(o))p.extend(this.cache[i],t);else for(r in t)o[r]=t[r];return o},get:function(e,t){var n=this.cache[this.key(e)];return void 0===t?n:n[t]},access:function(e,t,n){var r;return void 0===t||t&&\"string\"==typeof t&&void 0===n?void 0!==(r=this.get(e,t))?r:this.get(e,p.camelCase(t)):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),s=this.cache[o];if(void 0===t)this.cache[o]={};else{p.isArray(t)?r=t.concat(t.map(p.camelCase)):(i=p.camelCase(t),r=t in s?[t,i]:(r=i)in s?[r]:r.match(j)||[]),n=r.length;for(;n--;)delete s[r[n]]}},hasData:function(e){return!p.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}};var O=new H,F=new H,P=/^(?:\\{[\\w\\W]*\\}|\\[[\\w\\W]*\\])$/,R=/([A-Z])/g;function M(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r=\"data-\"+t.replace(R,\"-$1\").toLowerCase(),\"string\"==typeof(n=e.getAttribute(r))){try{n=\"true\"===n||\"false\"!==n&&(\"null\"===n?null:+n+\"\"===n?+n:P.test(n)?p.parseJSON(n):n)}catch(e){}F.set(e,t,n)}else n=void 0;return n}p.extend({hasData:function(e){return F.hasData(e)||O.hasData(e)},data:function(e,t,n){return F.access(e,t,n)},removeData:function(e,t){F.remove(e,t)},_data:function(e,t,n){return O.access(e,t,n)},_removeData:function(e,t){O.remove(e,t)}}),p.fn.extend({data:function(e,t){var n,r,i,o=this[0],s=o&&o.attributes;if(void 0===e){if(this.length&&(i=F.get(o),1===o.nodeType&&!O.get(o,\"hasDataAttrs\"))){for(n=s.length;n--;)s[n]&&0===(r=s[n].name).indexOf(\"data-\")&&(r=p.camelCase(r.slice(5)),M(o,r,i[r]));O.set(o,\"hasDataAttrs\",!0)}return i}return\"object\"==typeof e?this.each(function(){F.set(this,e)}):q(this,function(t){var n,r=p.camelCase(e);if(o&&void 0===t)return void 0!==(n=F.get(o,e))?n:void 0!==(n=F.get(o,r))?n:void 0!==(n=M(o,r,void 0))?n:void 0;this.each(function(){var n=F.get(this,r);F.set(this,r,t),-1!==e.indexOf(\"-\")&&void 0!==n&&F.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){F.remove(this,e)})}}),p.extend({queue:function(e,t,n){var r;if(e)return t=(t||\"fx\")+\"queue\",r=O.get(e,t),n&&(!r||p.isArray(n)?r=O.access(e,t,p.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||\"fx\";var n=p.queue(e,t),r=n.length,i=n.shift(),o=p._queueHooks(e,t);\"inprogress\"===i&&(i=n.shift(),r--),i&&(\"fx\"===t&&n.unshift(\"inprogress\"),delete o.stop,i.call(e,function(){p.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+\"queueHooks\";return O.get(e,n)||O.access(e,n,{empty:p.Callbacks(\"once memory\").add(function(){O.remove(e,[t+\"queue\",n])})})}}),p.fn.extend({queue:function(e,t){var n=2;return\"string\"!=typeof e&&(t=e,e=\"fx\",n--),arguments.length<n?p.queue(this[0],e):void 0===t?this:this.each(function(){var n=p.queue(this,e,t);p._queueHooks(this,e),\"fx\"===e&&\"inprogress\"!==n[0]&&p.dequeue(this,e)})},dequeue:function(e){return this.each(function(){p.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||\"fx\",[])},promise:function(e,t){var n,r=1,i=p.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])};for(\"string\"!=typeof e&&(t=e,e=void 0),e=e||\"fx\";s--;)(n=O.get(o[s],e+\"queueHooks\"))&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var W,$,I=/[+-]?(?:\\d*\\.|)\\d+(?:[eE][+-]?\\d+|)/.source,B=[\"Top\",\"Right\",\"Bottom\",\"Left\"],_=function(e,t){return e=t||e,\"none\"===p.css(e,\"display\")||!p.contains(e.ownerDocument,e)},z=/^(?:checkbox|radio)$/i;W=f.createDocumentFragment().appendChild(f.createElement(\"div\")),($=f.createElement(\"input\")).setAttribute(\"type\",\"radio\"),$.setAttribute(\"checked\",\"checked\"),$.setAttribute(\"name\",\"t\"),W.appendChild($),c.checkClone=W.cloneNode(!0).cloneNode(!0).lastChild.checked,W.innerHTML=\"<textarea>x</textarea>\",c.noCloneChecked=!!W.cloneNode(!0).lastChild.defaultValue;c.focusinBubbles=\"onfocusin\"in e;var X=/^key/,U=/^(?:mouse|pointer|contextmenu)|click/,V=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\\.(.+)|)$/;function G(){return!0}function Q(){return!1}function J(){try{return f.activeElement}catch(e){}}p.event={global:{},add:function(e,t,n,r,i){var o,s,a,u,l,c,f,d,h,g,m,v=O.get(e);if(v)for(n.handler&&(n=(o=n).handler,i=o.selector),n.guid||(n.guid=p.guid++),(u=v.events)||(u=v.events={}),(s=v.handle)||(s=v.handle=function(t){return void 0!==p&&p.event.triggered!==t.type?p.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||\"\").match(j)||[\"\"]).length;l--;)h=m=(a=Y.exec(t[l])||[])[1],g=(a[2]||\"\").split(\".\").sort(),h&&(f=p.event.special[h]||{},h=(i?f.delegateType:f.bindType)||h,f=p.event.special[h]||{},c=p.extend({type:h,origType:m,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&p.expr.match.needsContext.test(i),namespace:g.join(\".\")},o),(d=u[h])||((d=u[h]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,g,s)||e.addEventListener&&e.addEventListener(h,s,!1)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?d.splice(d.delegateCount++,0,c):d.push(c),p.event.global[h]=!0)},remove:function(e,t,n,r,i){var o,s,a,u,l,c,f,d,h,g,m,v=O.hasData(e)&&O.get(e);if(v&&(u=v.events)){for(l=(t=(t||\"\").match(j)||[\"\"]).length;l--;)if(h=m=(a=Y.exec(t[l])||[])[1],g=(a[2]||\"\").split(\".\").sort(),h){for(f=p.event.special[h]||{},d=u[h=(r?f.delegateType:f.bindType)||h]||[],a=a[2]&&new RegExp(\"(^|\\\\.)\"+g.join(\"\\\\.(?:.*\\\\.|)\")+\"(\\\\.|$)\"),s=o=d.length;o--;)c=d[o],!i&&m!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&(\"**\"!==r||!c.selector)||(d.splice(o,1),c.selector&&d.delegateCount--,f.remove&&f.remove.call(e,c));s&&!d.length&&(f.teardown&&!1!==f.teardown.call(e,g,v.handle)||p.removeEvent(e,h,v.handle),delete u[h])}else for(h in u)p.event.remove(e,h+t[l],n,r,!0);p.isEmptyObject(u)&&(delete v.handle,O.remove(e,\"events\"))}},trigger:function(t,n,r,i){var o,s,a,u,c,d,h,g=[r||f],m=l.call(t,\"type\")?t.type:t,v=l.call(t,\"namespace\")?t.namespace.split(\".\"):[];if(s=a=r=r||f,3!==r.nodeType&&8!==r.nodeType&&!V.test(m+p.event.triggered)&&(m.indexOf(\".\")>=0&&(m=(v=m.split(\".\")).shift(),v.sort()),c=m.indexOf(\":\")<0&&\"on\"+m,(t=t[p.expando]?t:new p.Event(m,\"object\"==typeof t&&t)).isTrigger=i?2:3,t.namespace=v.join(\".\"),t.namespace_re=t.namespace?new RegExp(\"(^|\\\\.)\"+v.join(\"\\\\.(?:.*\\\\.|)\")+\"(\\\\.|$)\"):null,t.result=void 0,t.target||(t.target=r),n=null==n?[t]:p.makeArray(n,[t]),h=p.event.special[m]||{},i||!h.trigger||!1!==h.trigger.apply(r,n))){if(!i&&!h.noBubble&&!p.isWindow(r)){for(u=h.delegateType||m,V.test(u+m)||(s=s.parentNode);s;s=s.parentNode)g.push(s),a=s;a===(r.ownerDocument||f)&&g.push(a.defaultView||a.parentWindow||e)}for(o=0;(s=g[o++])&&!t.isPropagationStopped();)t.type=o>1?u:h.bindType||m,(d=(O.get(s,\"events\")||{})[t.type]&&O.get(s,\"handle\"))&&d.apply(s,n),(d=c&&s[c])&&d.apply&&p.acceptData(s)&&(t.result=d.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,i||t.isDefaultPrevented()||h._default&&!1!==h._default.apply(g.pop(),n)||!p.acceptData(r)||c&&p.isFunction(r[m])&&!p.isWindow(r)&&((a=r[c])&&(r[c]=null),p.event.triggered=m,r[m](),p.event.triggered=void 0,a&&(r[c]=a)),t.result}},dispatch:function(e){e=p.event.fix(e);var t,n,i,o,s,a,u=r.call(arguments),l=(O.get(this,\"events\")||{})[e.type]||[],c=p.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,e)){for(a=p.event.handlers.call(this,e,l),t=0;(o=a[t++])&&!e.isPropagationStopped();)for(e.currentTarget=o.elem,n=0;(s=o.handlers[n++])&&!e.isImmediatePropagationStopped();)e.namespace_re&&!e.namespace_re.test(s.namespace)||(e.handleObj=s,e.data=s.data,void 0!==(i=((p.event.special[s.origType]||{}).handle||s.handler).apply(o.elem,u))&&!1===(e.result=i)&&(e.preventDefault(),e.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,s=[],a=t.delegateCount,u=e.target;if(a&&u.nodeType&&(!e.button||\"click\"!==e.type))for(;u!==this;u=u.parentNode||this)if(!0!==u.disabled||\"click\"!==e.type){for(r=[],n=0;n<a;n++)void 0===r[i=(o=t[n]).selector+\" \"]&&(r[i]=o.needsContext?p(i,this).index(u)>=0:p.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&s.push({elem:u,handlers:r})}return a<t.length&&s.push({elem:this,handlers:t.slice(a)}),s},props:\"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which\".split(\" \"),fixHooks:{},keyHooks:{props:\"char charCode key keyCode\".split(\" \"),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:\"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement\".split(\" \"),filter:function(e,t){var n,r,i,o=t.button;return null==e.pageX&&null!=t.clientX&&(r=(n=e.target.ownerDocument||f).documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||void 0===o||(e.which=1&o?1:2&o?3:4&o?2:0),e}},fix:function(e){if(e[p.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];for(s||(this.fixHooks[i]=s=U.test(i)?this.mouseHooks:X.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new p.Event(o),t=r.length;t--;)e[n=r[t]]=o[n];return e.target||(e.target=f),3===e.target.nodeType&&(e.target=e.target.parentNode),s.filter?s.filter(e,o):e},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==J()&&this.focus)return this.focus(),!1},delegateType:\"focusin\"},blur:{trigger:function(){if(this===J()&&this.blur)return this.blur(),!1},delegateType:\"focusout\"},click:{trigger:function(){if(\"checkbox\"===this.type&&this.click&&p.nodeName(this,\"input\"))return this.click(),!1},_default:function(e){return p.nodeName(e.target,\"a\")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=p.extend(new p.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?p.event.trigger(i,null,t):p.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},p.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},p.Event=function(e,t){if(!(this instanceof p.Event))return new p.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?G:Q):this.type=e,t&&p.extend(this,t),this.timeStamp=e&&e.timeStamp||p.now(),this[p.expando]=!0},p.Event.prototype={isDefaultPrevented:Q,isPropagationStopped:Q,isImmediatePropagationStopped:Q,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=G,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=G,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=G,e&&e.stopImmediatePropagation&&e.stopImmediatePropagation(),this.stopPropagation()}},p.each({mouseenter:\"mouseover\",mouseleave:\"mouseout\",pointerenter:\"pointerover\",pointerleave:\"pointerout\"},function(e,t){p.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=e.relatedTarget,i=e.handleObj;return r&&(r===this||p.contains(this,r))||(e.type=i.origType,n=i.handler.apply(this,arguments),e.type=t),n}}}),c.focusinBubbles||p.each({focus:\"focusin\",blur:\"focusout\"},function(e,t){var n=function(e){p.event.simulate(t,e.target,p.event.fix(e),!0)};p.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=O.access(r,t);i||r.addEventListener(e,n,!0),O.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=O.access(r,t)-1;i?O.access(r,t,i):(r.removeEventListener(e,n,!0),O.remove(r,t))}}}),p.fn.extend({on:function(e,t,n,r,i){var o,s;if(\"object\"==typeof e){for(s in\"string\"!=typeof t&&(n=n||t,t=void 0),e)this.on(s,t,n,e[s],i);return this}if(null==n&&null==r?(r=t,n=t=void 0):null==r&&(\"string\"==typeof t?(r=n,n=void 0):(r=n,n=t,t=void 0)),!1===r)r=Q;else if(!r)return this;return 1===i&&(o=r,(r=function(e){return p().off(e),o.apply(this,arguments)}).guid=o.guid||(o.guid=p.guid++)),this.each(function(){p.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,p(e.delegateTarget).off(r.namespace?r.origType+\".\"+r.namespace:r.origType,r.selector,r.handler),this;if(\"object\"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&\"function\"!=typeof t||(n=t,t=void 0),!1===n&&(n=Q),this.each(function(){p.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){p.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return p.event.trigger(e,t,n,!0)}});var K=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\\w:]+)[^>]*)\\/>/gi,Z=/<([\\w:]+)/,ee=/<|&#?\\w+;/,te=/<(?:script|style|link)/i,ne=/checked\\s*(?:[^=]|=\\s*.checked.)/i,re=/^$|\\/(?:java|ecma)script/i,ie=/^true\\/(.*)/,oe=/^\\s*<!(?:\\[CDATA\\[|--)|(?:\\]\\]|--)>\\s*$/g,se={option:[1,\"<select multiple='multiple'>\",\"</select>\"],thead:[1,\"<table>\",\"</table>\"],col:[2,\"<table><colgroup>\",\"</colgroup></table>\"],tr:[2,\"<table><tbody>\",\"</tbody></table>\"],td:[3,\"<table><tbody><tr>\",\"</tr></tbody></table>\"],_default:[0,\"\",\"\"]};function ae(e,t){return p.nodeName(e,\"table\")&&p.nodeName(11!==t.nodeType?t:t.firstChild,\"tr\")?e.getElementsByTagName(\"tbody\")[0]||e.appendChild(e.ownerDocument.createElement(\"tbody\")):e}function ue(e){return e.type=(null!==e.getAttribute(\"type\"))+\"/\"+e.type,e}function le(e){var t=ie.exec(e.type);return t?e.type=t[1]:e.removeAttribute(\"type\"),e}function ce(e,t){for(var n=0,r=e.length;n<r;n++)O.set(e[n],\"globalEval\",!t||O.get(t[n],\"globalEval\"))}function fe(e,t){var n,r,i,o,s,a,u,l;if(1===t.nodeType){if(O.hasData(e)&&(o=O.access(e),s=O.set(t,o),l=o.events))for(i in delete s.handle,s.events={},l)for(n=0,r=l[i].length;n<r;n++)p.event.add(t,i,l[i][n]);F.hasData(e)&&(a=F.access(e),u=p.extend({},a),F.set(t,u))}}function pe(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||\"*\"):e.querySelectorAll?e.querySelectorAll(t||\"*\"):[];return void 0===t||t&&p.nodeName(e,t)?p.merge([e],n):n}se.optgroup=se.option,se.tbody=se.tfoot=se.colgroup=se.caption=se.thead,se.th=se.td,p.extend({clone:function(e,t,n){var r,i,o,s,a,u,l,f=e.cloneNode(!0),d=p.contains(e.ownerDocument,e);if(!(c.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||p.isXMLDoc(e)))for(s=pe(f),r=0,i=(o=pe(e)).length;r<i;r++)a=o[r],u=s[r],void 0,\"input\"===(l=u.nodeName.toLowerCase())&&z.test(a.type)?u.checked=a.checked:\"input\"!==l&&\"textarea\"!==l||(u.defaultValue=a.defaultValue);if(t)if(n)for(o=o||pe(e),s=s||pe(f),r=0,i=o.length;r<i;r++)fe(o[r],s[r]);else fe(e,f);return(s=pe(f,\"script\")).length>0&&ce(s,!d&&pe(e,\"script\")),f},buildFragment:function(e,t,n,r){for(var i,o,s,a,u,l,c=t.createDocumentFragment(),f=[],d=0,h=e.length;d<h;d++)if((i=e[d])||0===i)if(\"object\"===p.type(i))p.merge(f,i.nodeType?[i]:i);else if(ee.test(i)){for(o=o||c.appendChild(t.createElement(\"div\")),s=(Z.exec(i)||[\"\",\"\"])[1].toLowerCase(),a=se[s]||se._default,o.innerHTML=a[1]+i.replace(K,\"<$1></$2>\")+a[2],l=a[0];l--;)o=o.lastChild;p.merge(f,o.childNodes),(o=c.firstChild).textContent=\"\"}else f.push(t.createTextNode(i));for(c.textContent=\"\",d=0;i=f[d++];)if((!r||-1===p.inArray(i,r))&&(u=p.contains(i.ownerDocument,i),o=pe(c.appendChild(i),\"script\"),u&&ce(o),n))for(l=0;i=o[l++];)re.test(i.type||\"\")&&n.push(i);return c},cleanData:function(e){for(var t,n,r,i,o=p.event.special,s=0;void 0!==(n=e[s]);s++){if(p.acceptData(n)&&(i=n[O.expando])&&(t=O.cache[i])){if(t.events)for(r in t.events)o[r]?p.event.remove(n,r):p.removeEvent(n,r,t.handle);O.cache[i]&&delete O.cache[i]}delete F.cache[n[F.expando]]}}}),p.fn.extend({text:function(e){return q(this,function(e){return void 0===e?p.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||ae(this,e).appendChild(e)})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=ae(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){for(var n,r=e?p.filter(e,this):this,i=0;null!=(n=r[i]);i++)t||1!==n.nodeType||p.cleanData(pe(n)),n.parentNode&&(t&&p.contains(n.ownerDocument,n)&&ce(pe(n,\"script\")),n.parentNode.removeChild(n));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(p.cleanData(pe(e,!1)),e.textContent=\"\");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return p.clone(this,e,t)})},html:function(e){return q(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if(\"string\"==typeof e&&!te.test(e)&&!se[(Z.exec(e)||[\"\",\"\"])[1].toLowerCase()]){e=e.replace(K,\"<$1></$2>\");try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(p.cleanData(pe(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=arguments[0];return this.domManip(arguments,function(t){e=this.parentNode,p.cleanData(pe(this)),e&&e.replaceChild(t,this)}),e&&(e.length||e.nodeType)?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t){e=i.apply([],e);var n,r,o,s,a,u,l=0,f=this.length,d=this,h=f-1,g=e[0],m=p.isFunction(g);if(m||f>1&&\"string\"==typeof g&&!c.checkClone&&ne.test(g))return this.each(function(n){var r=d.eq(n);m&&(e[0]=g.call(this,n,r.html())),r.domManip(e,t)});if(f&&(r=(n=p.buildFragment(e,this[0].ownerDocument,!1,this)).firstChild,1===n.childNodes.length&&(n=r),r)){for(s=(o=p.map(pe(n,\"script\"),ue)).length;l<f;l++)a=n,l!==h&&(a=p.clone(a,!0,!0),s&&p.merge(o,pe(a,\"script\"))),t.call(this[l],a,l);if(s)for(u=o[o.length-1].ownerDocument,p.map(o,le),l=0;l<s;l++)a=o[l],re.test(a.type||\"\")&&!O.access(a,\"globalEval\")&&p.contains(u,a)&&(a.src?p._evalUrl&&p._evalUrl(a.src):p.globalEval(a.textContent.replace(oe,\"\")))}return this}}),p.each({appendTo:\"append\",prependTo:\"prepend\",insertBefore:\"before\",insertAfter:\"after\",replaceAll:\"replaceWith\"},function(e,t){p.fn[e]=function(e){for(var n,r=[],i=p(e),s=i.length-1,a=0;a<=s;a++)n=a===s?this:this.clone(!0),p(i[a])[t](n),o.apply(r,n.get());return this.pushStack(r)}});var de,he={};function ge(t,n){var r,i=p(n.createElement(t)).appendTo(n.body),o=e.getDefaultComputedStyle&&(r=e.getDefaultComputedStyle(i[0]))?r.display:p.css(i[0],\"display\");return i.detach(),o}function me(e){var t=f,n=he[e];return n||(\"none\"!==(n=ge(e,t))&&n||((t=(de=(de||p(\"<iframe frameborder='0' width='0' height='0'/>\")).appendTo(t.documentElement))[0].contentDocument).write(),t.close(),n=ge(e,t),de.detach()),he[e]=n),n}var ve=/^margin/,ye=new RegExp(\"^(\"+I+\")(?!px)[a-z%]+$\",\"i\"),xe=function(t){return t.ownerDocument.defaultView.opener?t.ownerDocument.defaultView.getComputedStyle(t,null):e.getComputedStyle(t,null)};function be(e,t,n){var r,i,o,s,a=e.style;return(n=n||xe(e))&&(s=n.getPropertyValue(t)||n[t]),n&&(\"\"!==s||p.contains(e.ownerDocument,e)||(s=p.style(e,t)),ye.test(s)&&ve.test(t)&&(r=a.width,i=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=s,s=n.width,a.width=r,a.minWidth=i,a.maxWidth=o)),void 0!==s?s+\"\":s}function we(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){var t,n,r=f.documentElement,i=f.createElement(\"div\"),o=f.createElement(\"div\");function s(){o.style.cssText=\"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute\",o.innerHTML=\"\",r.appendChild(i);var s=e.getComputedStyle(o,null);t=\"1%\"!==s.top,n=\"4px\"===s.width,r.removeChild(i)}o.style&&(o.style.backgroundClip=\"content-box\",o.cloneNode(!0).style.backgroundClip=\"\",c.clearCloneStyle=\"content-box\"===o.style.backgroundClip,i.style.cssText=\"border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute\",i.appendChild(o),e.getComputedStyle&&p.extend(c,{pixelPosition:function(){return s(),t},boxSizingReliable:function(){return null==n&&s(),n},reliableMarginRight:function(){var t,n=o.appendChild(f.createElement(\"div\"));return n.style.cssText=o.style.cssText=\"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0\",n.style.marginRight=n.style.width=\"0\",o.style.width=\"1px\",r.appendChild(i),t=!parseFloat(e.getComputedStyle(n,null).marginRight),r.removeChild(i),o.removeChild(n),t}}))}(),p.swap=function(e,t,n,r){var i,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=s[o];return i};var Te=/^(none|table(?!-c[ea]).+)/,Ce=new RegExp(\"^(\"+I+\")(.*)$\",\"i\"),Ne=new RegExp(\"^([+-])=(\"+I+\")\",\"i\"),ke={position:\"absolute\",visibility:\"hidden\",display:\"block\"},Ee={letterSpacing:\"0\",fontWeight:\"400\"},Se=[\"Webkit\",\"O\",\"Moz\",\"ms\"];function De(e,t){if(t in e)return t;for(var n=t[0].toUpperCase()+t.slice(1),r=t,i=Se.length;i--;)if((t=Se[i]+n)in e)return t;return r}function je(e,t,n){var r=Ce.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||\"px\"):t}function Ae(e,t,n,r,i){for(var o=n===(r?\"border\":\"content\")?4:\"width\"===t?1:0,s=0;o<4;o+=2)\"margin\"===n&&(s+=p.css(e,n+B[o],!0,i)),r?(\"content\"===n&&(s-=p.css(e,\"padding\"+B[o],!0,i)),\"margin\"!==n&&(s-=p.css(e,\"border\"+B[o]+\"Width\",!0,i))):(s+=p.css(e,\"padding\"+B[o],!0,i),\"padding\"!==n&&(s+=p.css(e,\"border\"+B[o]+\"Width\",!0,i)));return s}function Le(e,t,n){var r=!0,i=\"width\"===t?e.offsetWidth:e.offsetHeight,o=xe(e),s=\"border-box\"===p.css(e,\"boxSizing\",!1,o);if(i<=0||null==i){if(((i=be(e,t,o))<0||null==i)&&(i=e.style[t]),ye.test(i))return i;r=s&&(c.boxSizingReliable()||i===e.style[t]),i=parseFloat(i)||0}return i+Ae(e,t,n||(s?\"border\":\"content\"),r,o)+\"px\"}function qe(e,t){for(var n,r,i,o=[],s=0,a=e.length;s<a;s++)(r=e[s]).style&&(o[s]=O.get(r,\"olddisplay\"),n=r.style.display,t?(o[s]||\"none\"!==n||(r.style.display=\"\"),\"\"===r.style.display&&_(r)&&(o[s]=O.access(r,\"olddisplay\",me(r.nodeName)))):(i=_(r),\"none\"===n&&i||O.set(r,\"olddisplay\",i?n:p.css(r,\"display\"))));for(s=0;s<a;s++)(r=e[s]).style&&(t&&\"none\"!==r.style.display&&\"\"!==r.style.display||(r.style.display=t?o[s]||\"\":\"none\"));return e}function He(e,t,n,r,i){return new He.prototype.init(e,t,n,r,i)}p.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=be(e,\"opacity\");return\"\"===n?\"1\":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:\"cssFloat\"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=p.camelCase(t),u=e.style;if(t=p.cssProps[a]||(p.cssProps[a]=De(u,a)),s=p.cssHooks[t]||p.cssHooks[a],void 0===n)return s&&\"get\"in s&&void 0!==(i=s.get(e,!1,r))?i:u[t];\"string\"===(o=typeof n)&&(i=Ne.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(p.css(e,t)),o=\"number\"),null!=n&&n==n&&(\"number\"!==o||p.cssNumber[a]||(n+=\"px\"),c.clearCloneStyle||\"\"!==n||0!==t.indexOf(\"background\")||(u[t]=\"inherit\"),s&&\"set\"in s&&void 0===(n=s.set(e,n,r))||(u[t]=n))}},css:function(e,t,n,r){var i,o,s,a=p.camelCase(t);return t=p.cssProps[a]||(p.cssProps[a]=De(e.style,a)),(s=p.cssHooks[t]||p.cssHooks[a])&&\"get\"in s&&(i=s.get(e,!0,n)),void 0===i&&(i=be(e,t,r)),\"normal\"===i&&t in Ee&&(i=Ee[t]),\"\"===n||n?(o=parseFloat(i),!0===n||p.isNumeric(o)?o||0:i):i}}),p.each([\"height\",\"width\"],function(e,t){p.cssHooks[t]={get:function(e,n,r){if(n)return Te.test(p.css(e,\"display\"))&&0===e.offsetWidth?p.swap(e,ke,function(){return Le(e,t,r)}):Le(e,t,r)},set:function(e,n,r){var i=r&&xe(e);return je(0,n,r?Ae(e,t,r,\"border-box\"===p.css(e,\"boxSizing\",!1,i),i):0)}}}),p.cssHooks.marginRight=we(c.reliableMarginRight,function(e,t){if(t)return p.swap(e,{display:\"inline-block\"},be,[e,\"marginRight\"])}),p.each({margin:\"\",padding:\"\",border:\"Width\"},function(e,t){p.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o=\"string\"==typeof n?n.split(\" \"):[n];r<4;r++)i[e+B[r]+t]=o[r]||o[r-2]||o[0];return i}},ve.test(e)||(p.cssHooks[e+t].set=je)}),p.fn.extend({css:function(e,t){return q(this,function(e,t,n){var r,i,o={},s=0;if(p.isArray(t)){for(r=xe(e),i=t.length;s<i;s++)o[t[s]]=p.css(e,t[s],!1,r);return o}return void 0!==n?p.style(e,t,n):p.css(e,t)},e,t,arguments.length>1)},show:function(){return qe(this,!0)},hide:function(){return qe(this)},toggle:function(e){return\"boolean\"==typeof e?e?this.show():this.hide():this.each(function(){_(this)?p(this).show():p(this).hide()})}}),p.Tween=He,He.prototype={constructor:He,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||\"swing\",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(p.cssNumber[n]?\"\":\"px\")},cur:function(){var e=He.propHooks[this.prop];return e&&e.get?e.get(this):He.propHooks._default.get(this)},run:function(e){var t,n=He.propHooks[this.prop];return this.options.duration?this.pos=t=p.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):He.propHooks._default.set(this),this}},He.prototype.init.prototype=He.prototype,He.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=p.css(e.elem,e.prop,\"\"))&&\"auto\"!==t?t:0:e.elem[e.prop]},set:function(e){p.fx.step[e.prop]?p.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[p.cssProps[e.prop]]||p.cssHooks[e.prop])?p.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},He.propHooks.scrollTop=He.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},p.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},p.fx=He.prototype.init,p.fx.step={};var Oe,Fe,Pe=/^(?:toggle|show|hide)$/,Re=new RegExp(\"^(?:([+-])=|)(\"+I+\")([a-z%]*)$\",\"i\"),Me=/queueHooks$/,We=[function(e,t,n){var r,i,o,s,a,u,l,c=this,f={},d=e.style,h=e.nodeType&&_(e),g=O.get(e,\"fxshow\");n.queue||(null==(a=p._queueHooks(e,\"fx\")).unqueued&&(a.unqueued=0,u=a.empty.fire,a.empty.fire=function(){a.unqueued||u()}),a.unqueued++,c.always(function(){c.always(function(){a.unqueued--,p.queue(e,\"fx\").length||a.empty.fire()})}));1===e.nodeType&&(\"height\"in t||\"width\"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],l=p.css(e,\"display\"),\"inline\"===(\"none\"===l?O.get(e,\"olddisplay\")||me(e.nodeName):l)&&\"none\"===p.css(e,\"float\")&&(d.display=\"inline-block\"));n.overflow&&(d.overflow=\"hidden\",c.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Pe.exec(i)){if(delete t[r],o=o||\"toggle\"===i,i===(h?\"hide\":\"show\")){if(\"show\"!==i||!g||void 0===g[r])continue;h=!0}f[r]=g&&g[r]||p.style(e,r)}else l=void 0;if(p.isEmptyObject(f))\"inline\"===(\"none\"===l?me(e.nodeName):l)&&(d.display=l);else for(r in g?\"hidden\"in g&&(h=g.hidden):g=O.access(e,\"fxshow\",{}),o&&(g.hidden=!h),h?p(e).show():c.done(function(){p(e).hide()}),c.done(function(){var t;for(t in O.remove(e,\"fxshow\"),f)p.style(e,t,f[t])}),f)s=_e(h?g[r]:0,r,c),r in g||(g[r]=s.start,h&&(s.end=s.start,s.start=\"width\"===r||\"height\"===r?1:0))}],$e={\"*\":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Re.exec(t),o=i&&i[3]||(p.cssNumber[e]?\"\":\"px\"),s=(p.cssNumber[e]||\"px\"!==o&&+r)&&Re.exec(p.css(n.elem,e)),a=1,u=20;if(s&&s[3]!==o){o=o||s[3],i=i||[],s=+r||1;do{s/=a=a||\".5\",p.style(n.elem,e,s+o)}while(a!==(a=n.cur()/r)&&1!==a&&--u)}return i&&(s=n.start=+s||+r||0,n.unit=o,n.end=i[1]?s+(i[1]+1)*i[2]:+i[2]),n}]};function Ie(){return setTimeout(function(){Oe=void 0}),Oe=p.now()}function Be(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i[\"margin\"+(n=B[r])]=i[\"padding\"+n]=e;return t&&(i.opacity=i.width=e),i}function _e(e,t,n){for(var r,i=($e[t]||[]).concat($e[\"*\"]),o=0,s=i.length;o<s;o++)if(r=i[o].call(n,t,e))return r}function ze(e,t,n){var r,i,o=0,s=We.length,a=p.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=Oe||Ie(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,s=l.tweens.length;o<s;o++)l.tweens[o].run(r);return a.notifyWith(e,[l,r,n]),r<1&&s?n:(a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:p.extend({},t),opts:p.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Oe||Ie(),duration:n.duration,tweens:[],createTween:function(t,n){var r=p.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?a.resolveWith(e,[l,t]):a.rejectWith(e,[l,t]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,s;for(n in e)if(i=t[r=p.camelCase(n)],o=e[n],p.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(s=p.cssHooks[r])&&\"expand\"in s)for(n in o=s.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);o<s;o++)if(r=We[o].call(l,e,c,l.opts))return r;return p.map(c,_e,l),p.isFunction(l.opts.start)&&l.opts.start.call(e,l),p.fx.timer(p.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}p.Animation=p.extend(ze,{tweener:function(e,t){p.isFunction(e)?(t=e,e=[\"*\"]):e=e.split(\" \");for(var n,r=0,i=e.length;r<i;r++)n=e[r],$e[n]=$e[n]||[],$e[n].unshift(t)},prefilter:function(e,t){t?We.unshift(e):We.push(e)}}),p.speed=function(e,t,n){var r=e&&\"object\"==typeof e?p.extend({},e):{complete:n||!n&&t||p.isFunction(e)&&e,duration:e,easing:n&&t||t&&!p.isFunction(t)&&t};return r.duration=p.fx.off?0:\"number\"==typeof r.duration?r.duration:r.duration in p.fx.speeds?p.fx.speeds[r.duration]:p.fx.speeds._default,null!=r.queue&&!0!==r.queue||(r.queue=\"fx\"),r.old=r.complete,r.complete=function(){p.isFunction(r.old)&&r.old.call(this),r.queue&&p.dequeue(this,r.queue)},r},p.fn.extend({fadeTo:function(e,t,n,r){return this.filter(_).css(\"opacity\",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=p.isEmptyObject(e),o=p.speed(t,n,r),s=function(){var t=ze(this,p.extend({},e),o);(i||O.get(this,\"finish\"))&&t.stop(!0)};return s.finish=s,i||!1===o.queue?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return\"string\"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||\"fx\",[]),this.each(function(){var t=!0,i=null!=e&&e+\"queueHooks\",o=p.timers,s=O.get(this);if(i)s[i]&&s[i].stop&&r(s[i]);else for(i in s)s[i]&&s[i].stop&&Me.test(i)&&r(s[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||p.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||\"fx\"),this.each(function(){var t,n=O.get(this),r=n[e+\"queue\"],i=n[e+\"queueHooks\"],o=p.timers,s=r?r.length:0;for(n.finish=!0,p.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<s;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),p.each([\"toggle\",\"show\",\"hide\"],function(e,t){var n=p.fn[t];p.fn[t]=function(e,r,i){return null==e||\"boolean\"==typeof e?n.apply(this,arguments):this.animate(Be(t,!0),e,r,i)}}),p.each({slideDown:Be(\"show\"),slideUp:Be(\"hide\"),slideToggle:Be(\"toggle\"),fadeIn:{opacity:\"show\"},fadeOut:{opacity:\"hide\"},fadeToggle:{opacity:\"toggle\"}},function(e,t){p.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),p.timers=[],p.fx.tick=function(){var e,t=0,n=p.timers;for(Oe=p.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||p.fx.stop(),Oe=void 0},p.fx.timer=function(e){p.timers.push(e),e()?p.fx.start():p.timers.pop()},p.fx.interval=13,p.fx.start=function(){Fe||(Fe=setInterval(p.fx.tick,p.fx.interval))},p.fx.stop=function(){clearInterval(Fe),Fe=null},p.fx.speeds={slow:600,fast:200,_default:400},p.fn.delay=function(e,t){return e=p.fx&&p.fx.speeds[e]||e,t=t||\"fx\",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},function(){var e=f.createElement(\"input\"),t=f.createElement(\"select\"),n=t.appendChild(f.createElement(\"option\"));e.type=\"checkbox\",c.checkOn=\"\"!==e.value,c.optSelected=n.selected,t.disabled=!0,c.optDisabled=!n.disabled,(e=f.createElement(\"input\")).value=\"t\",e.type=\"radio\",c.radioValue=\"t\"===e.value}();var Xe,Ue=p.expr.attrHandle;p.fn.extend({attr:function(e,t){return q(this,p.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){p.removeAttr(this,e)})}}),p.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(e&&3!==o&&8!==o&&2!==o)return void 0===e.getAttribute?p.prop(e,t,n):(1===o&&p.isXMLDoc(e)||(t=t.toLowerCase(),r=p.attrHooks[t]||(p.expr.match.bool.test(t)?Xe:void 0)),void 0===n?r&&\"get\"in r&&null!==(i=r.get(e,t))?i:null==(i=p.find.attr(e,t))?void 0:i:null!==n?r&&\"set\"in r&&void 0!==(i=r.set(e,n,t))?i:(e.setAttribute(t,n+\"\"),n):void p.removeAttr(e,t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(j);if(o&&1===e.nodeType)for(;n=o[i++];)r=p.propFix[n]||n,p.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!c.radioValue&&\"radio\"===t&&p.nodeName(e,\"input\")){var n=e.value;return e.setAttribute(\"type\",t),n&&(e.value=n),t}}}}}),Xe={set:function(e,t,n){return!1===t?p.removeAttr(e,n):e.setAttribute(n,n),n}},p.each(p.expr.match.bool.source.match(/\\w+/g),function(e,t){var n=Ue[t]||p.find.attr;Ue[t]=function(e,t,r){var i,o;return r||(o=Ue[t],Ue[t]=i,i=null!=n(e,t,r)?t.toLowerCase():null,Ue[t]=o),i}});var Ve=/^(?:input|select|textarea|button)$/i;p.fn.extend({prop:function(e,t){return q(this,p.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[p.propFix[e]||e]})}}),p.extend({propFix:{for:\"htmlFor\",class:\"className\"},prop:function(e,t,n){var r,i,o=e.nodeType;if(e&&3!==o&&8!==o&&2!==o)return(1!==o||!p.isXMLDoc(e))&&(t=p.propFix[t]||t,i=p.propHooks[t]),void 0!==n?i&&\"set\"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&\"get\"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute(\"tabindex\")||Ve.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),c.optSelected||(p.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),p.each([\"tabIndex\",\"readOnly\",\"maxLength\",\"cellSpacing\",\"cellPadding\",\"rowSpan\",\"colSpan\",\"useMap\",\"frameBorder\",\"contentEditable\"],function(){p.propFix[this.toLowerCase()]=this});var Ye=/[\\t\\r\\n\\f]/g;p.fn.extend({addClass:function(e){var t,n,r,i,o,s,a=\"string\"==typeof e&&e,u=0,l=this.length;if(p.isFunction(e))return this.each(function(t){p(this).addClass(e.call(this,t,this.className))});if(a)for(t=(e||\"\").match(j)||[];u<l;u++)if(r=1===(n=this[u]).nodeType&&(n.className?(\" \"+n.className+\" \").replace(Ye,\" \"):\" \")){for(o=0;i=t[o++];)r.indexOf(\" \"+i+\" \")<0&&(r+=i+\" \");s=p.trim(r),n.className!==s&&(n.className=s)}return this},removeClass:function(e){var t,n,r,i,o,s,a=0===arguments.length||\"string\"==typeof e&&e,u=0,l=this.length;if(p.isFunction(e))return this.each(function(t){p(this).removeClass(e.call(this,t,this.className))});if(a)for(t=(e||\"\").match(j)||[];u<l;u++)if(r=1===(n=this[u]).nodeType&&(n.className?(\" \"+n.className+\" \").replace(Ye,\" \"):\"\")){for(o=0;i=t[o++];)for(;r.indexOf(\" \"+i+\" \")>=0;)r=r.replace(\" \"+i+\" \",\" \");s=e?p.trim(r):\"\",n.className!==s&&(n.className=s)}return this},toggleClass:function(e,t){var n=typeof e;return\"boolean\"==typeof t&&\"string\"===n?t?this.addClass(e):this.removeClass(e):p.isFunction(e)?this.each(function(n){p(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if(\"string\"===n)for(var t,r=0,i=p(this),o=e.match(j)||[];t=o[r++];)i.hasClass(t)?i.removeClass(t):i.addClass(t);else\"undefined\"!==n&&\"boolean\"!==n||(this.className&&O.set(this,\"__className__\",this.className),this.className=this.className||!1===e?\"\":O.get(this,\"__className__\")||\"\")})},hasClass:function(e){for(var t=\" \"+e+\" \",n=0,r=this.length;n<r;n++)if(1===this[n].nodeType&&(\" \"+this[n].className+\" \").replace(Ye,\" \").indexOf(t)>=0)return!0;return!1}});var Ge=/\\r/g;p.fn.extend({val:function(e){var t,n,r,i=this[0];return arguments.length?(r=p.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,p(this).val()):e)?i=\"\":\"number\"==typeof i?i+=\"\":p.isArray(i)&&(i=p.map(i,function(e){return null==e?\"\":e+\"\"})),(t=p.valHooks[this.type]||p.valHooks[this.nodeName.toLowerCase()])&&\"set\"in t&&void 0!==t.set(this,i,\"value\")||(this.value=i))})):i?(t=p.valHooks[i.type]||p.valHooks[i.nodeName.toLowerCase()])&&\"get\"in t&&void 0!==(n=t.get(i,\"value\"))?n:\"string\"==typeof(n=i.value)?n.replace(Ge,\"\"):null==n?\"\":n:void 0}}),p.extend({valHooks:{option:{get:function(e){var t=p.find.attr(e,\"value\");return null!=t?t:p.trim(p.text(e))}},select:{get:function(e){for(var t,n,r=e.options,i=e.selectedIndex,o=\"select-one\"===e.type||i<0,s=o?null:[],a=o?i+1:r.length,u=i<0?a:o?i:0;u<a;u++)if(((n=r[u]).selected||u===i)&&(c.optDisabled?!n.disabled:null===n.getAttribute(\"disabled\"))&&(!n.parentNode.disabled||!p.nodeName(n.parentNode,\"optgroup\"))){if(t=p(n).val(),o)return t;s.push(t)}return s},set:function(e,t){for(var n,r,i=e.options,o=p.makeArray(t),s=i.length;s--;)((r=i[s]).selected=p.inArray(r.value,o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),p.each([\"radio\",\"checkbox\"],function(){p.valHooks[this]={set:function(e,t){if(p.isArray(t))return e.checked=p.inArray(p(e).val(),t)>=0}},c.checkOn||(p.valHooks[this].get=function(e){return null===e.getAttribute(\"value\")?\"on\":e.value})}),p.each(\"blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu\".split(\" \"),function(e,t){p.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),p.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,\"**\"):this.off(t,e||\"**\",n)}});var Qe=p.now(),Je=/\\?/;p.parseJSON=function(e){return JSON.parse(e+\"\")},p.parseXML=function(e){var t;if(!e||\"string\"!=typeof e)return null;try{t=(new DOMParser).parseFromString(e,\"text/xml\")}catch(e){t=void 0}return t&&!t.getElementsByTagName(\"parsererror\").length||p.error(\"Invalid XML: \"+e),t};var Ke=/#.*$/,Ze=/([?&])_=[^&]*/,et=/^(.*?):[ \\t]*([^\\r\\n]*)$/gm,tt=/^(?:GET|HEAD)$/,nt=/^\\/\\//,rt=/^([\\w.+-]+:)(?:\\/\\/(?:[^\\/?#]*@|)([^\\/?#:]*)(?::(\\d+)|)|)/,it={},ot={},st=\"*/\".concat(\"*\"),at=e.location.href,ut=rt.exec(at.toLowerCase())||[];function lt(e){return function(t,n){\"string\"!=typeof t&&(n=t,t=\"*\");var r,i=0,o=t.toLowerCase().match(j)||[];if(p.isFunction(n))for(;r=o[i++];)\"+\"===r[0]?(r=r.slice(1)||\"*\",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function ct(e,t,n,r){var i={},o=e===ot;function s(a){var u;return i[a]=!0,p.each(e[a]||[],function(e,a){var l=a(t,n,r);return\"string\"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),s(l),!1)}),u}return s(t.dataTypes[0])||!i[\"*\"]&&s(\"*\")}function ft(e,t){var n,r,i=p.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&p.extend(!0,e,r),e}p.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:at,type:\"GET\",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ut[1]),global:!0,processData:!0,async:!0,contentType:\"application/x-www-form-urlencoded; charset=UTF-8\",accepts:{\"*\":st,text:\"text/plain\",html:\"text/html\",xml:\"application/xml, text/xml\",json:\"application/json, text/javascript\"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:\"responseXML\",text:\"responseText\",json:\"responseJSON\"},converters:{\"* text\":String,\"text html\":!0,\"text json\":p.parseJSON,\"text xml\":p.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?ft(ft(e,p.ajaxSettings),t):ft(p.ajaxSettings,e)},ajaxPrefilter:lt(it),ajaxTransport:lt(ot),ajax:function(e,t){\"object\"==typeof e&&(t=e,e=void 0),t=t||{};var n,r,i,o,s,a,u,l,c=p.ajaxSetup({},t),f=c.context||c,d=c.context&&(f.nodeType||f.jquery)?p(f):p.event,h=p.Deferred(),g=p.Callbacks(\"once memory\"),m=c.statusCode||{},v={},y={},x=0,b=\"canceled\",w={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!o)for(o={};t=et.exec(i);)o[t[1].toLowerCase()]=t[2];t=o[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?i:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=y[n]=y[n]||e,v[e]=t),this},overrideMimeType:function(e){return x||(c.mimeType=e),this},statusCode:function(e){var t;if(e)if(x<2)for(t in e)m[t]=[m[t],e[t]];else w.always(e[w.status]);return this},abort:function(e){var t=e||b;return n&&n.abort(t),T(0,t),this}};if(h.promise(w).complete=g.add,w.success=w.done,w.error=w.fail,c.url=((e||c.url||at)+\"\").replace(Ke,\"\").replace(nt,ut[1]+\"//\"),c.type=t.method||t.type||c.method||c.type,c.dataTypes=p.trim(c.dataType||\"*\").toLowerCase().match(j)||[\"\"],null==c.crossDomain&&(a=rt.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===ut[1]&&a[2]===ut[2]&&(a[3]||(\"http:\"===a[1]?\"80\":\"443\"))===(ut[3]||(\"http:\"===ut[1]?\"80\":\"443\")))),c.data&&c.processData&&\"string\"!=typeof c.data&&(c.data=p.param(c.data,c.traditional)),ct(it,c,t,w),2===x)return w;for(l in(u=p.event&&c.global)&&0==p.active++&&p.event.trigger(\"ajaxStart\"),c.type=c.type.toUpperCase(),c.hasContent=!tt.test(c.type),r=c.url,c.hasContent||(c.data&&(r=c.url+=(Je.test(r)?\"&\":\"?\")+c.data,delete c.data),!1===c.cache&&(c.url=Ze.test(r)?r.replace(Ze,\"$1_=\"+Qe++):r+(Je.test(r)?\"&\":\"?\")+\"_=\"+Qe++)),c.ifModified&&(p.lastModified[r]&&w.setRequestHeader(\"If-Modified-Since\",p.lastModified[r]),p.etag[r]&&w.setRequestHeader(\"If-None-Match\",p.etag[r])),(c.data&&c.hasContent&&!1!==c.contentType||t.contentType)&&w.setRequestHeader(\"Content-Type\",c.contentType),w.setRequestHeader(\"Accept\",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+(\"*\"!==c.dataTypes[0]?\", \"+st+\"; q=0.01\":\"\"):c.accepts[\"*\"]),c.headers)w.setRequestHeader(l,c.headers[l]);if(c.beforeSend&&(!1===c.beforeSend.call(f,w,c)||2===x))return w.abort();for(l in b=\"abort\",{success:1,error:1,complete:1})w[l](c[l]);if(n=ct(ot,c,t,w)){w.readyState=1,u&&d.trigger(\"ajaxSend\",[w,c]),c.async&&c.timeout>0&&(s=setTimeout(function(){w.abort(\"timeout\")},c.timeout));try{x=1,n.send(v,T)}catch(e){if(!(x<2))throw e;T(-1,e)}}else T(-1,\"No Transport\");function T(e,t,o,a){var l,v,y,b,T,C=t;2!==x&&(x=2,s&&clearTimeout(s),n=void 0,i=a||\"\",w.readyState=e>0?4:0,l=e>=200&&e<300||304===e,o&&(b=function(e,t,n){for(var r,i,o,s,a=e.contents,u=e.dataTypes;\"*\"===u[0];)u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader(\"Content-Type\"));if(r)for(i in a)if(a[i]&&a[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+\" \"+u[0]]){o=i;break}s||(s=i)}o=o||s}if(o)return o!==u[0]&&u.unshift(o),n[o]}(c,w,o)),b=function(e,t,n,r){var i,o,s,a,u,l={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s];for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if(\"*\"===o)o=u;else if(\"*\"!==u&&u!==o){if(!(s=l[u+\" \"+o]||l[\"* \"+o]))for(i in l)if((a=i.split(\" \"))[1]===o&&(s=l[u+\" \"+a[0]]||l[\"* \"+a[0]])){!0===s?s=l[i]:!0!==l[i]&&(o=a[0],c.unshift(a[1]));break}if(!0!==s)if(s&&e.throws)t=s(t);else try{t=s(t)}catch(e){return{state:\"parsererror\",error:s?e:\"No conversion from \"+u+\" to \"+o}}}return{state:\"success\",data:t}}(c,b,w,l),l?(c.ifModified&&((T=w.getResponseHeader(\"Last-Modified\"))&&(p.lastModified[r]=T),(T=w.getResponseHeader(\"etag\"))&&(p.etag[r]=T)),204===e||\"HEAD\"===c.type?C=\"nocontent\":304===e?C=\"notmodified\":(C=b.state,v=b.data,l=!(y=b.error))):(y=C,!e&&C||(C=\"error\",e<0&&(e=0))),w.status=e,w.statusText=(t||C)+\"\",l?h.resolveWith(f,[v,C,w]):h.rejectWith(f,[w,C,y]),w.statusCode(m),m=void 0,u&&d.trigger(l?\"ajaxSuccess\":\"ajaxError\",[w,c,l?v:y]),g.fireWith(f,[w,C]),u&&(d.trigger(\"ajaxComplete\",[w,c]),--p.active||p.event.trigger(\"ajaxStop\")))}return w},getJSON:function(e,t,n){return p.get(e,t,n,\"json\")},getScript:function(e,t){return p.get(e,void 0,t,\"script\")}}),p.each([\"get\",\"post\"],function(e,t){p[t]=function(e,n,r,i){return p.isFunction(n)&&(i=i||r,r=n,n=void 0),p.ajax({url:e,type:t,dataType:i,data:n,success:r})}}),p._evalUrl=function(e){return p.ajax({url:e,type:\"GET\",dataType:\"script\",async:!1,global:!1,throws:!0})},p.fn.extend({wrapAll:function(e){var t;return p.isFunction(e)?this.each(function(t){p(this).wrapAll(e.call(this,t))}):(this[0]&&(t=p(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return p.isFunction(e)?this.each(function(t){p(this).wrapInner(e.call(this,t))}):this.each(function(){var t=p(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=p.isFunction(e);return this.each(function(n){p(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){p.nodeName(this,\"body\")||p(this).replaceWith(this.childNodes)}).end()}}),p.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0},p.expr.filters.visible=function(e){return!p.expr.filters.hidden(e)};var pt=/%20/g,dt=/\\[\\]$/,ht=/\\r?\\n/g,gt=/^(?:submit|button|image|reset|file)$/i,mt=/^(?:input|select|textarea|keygen)/i;function vt(e,t,n,r){var i;if(p.isArray(t))p.each(t,function(t,i){n||dt.test(e)?r(e,i):vt(e+\"[\"+(\"object\"==typeof i?t:\"\")+\"]\",i,n,r)});else if(n||\"object\"!==p.type(t))r(e,t);else for(i in t)vt(e+\"[\"+i+\"]\",t[i],n,r)}p.param=function(e,t){var n,r=[],i=function(e,t){t=p.isFunction(t)?t():null==t?\"\":t,r[r.length]=encodeURIComponent(e)+\"=\"+encodeURIComponent(t)};if(void 0===t&&(t=p.ajaxSettings&&p.ajaxSettings.traditional),p.isArray(e)||e.jquery&&!p.isPlainObject(e))p.each(e,function(){i(this.name,this.value)});else for(n in e)vt(n,e[n],t,i);return r.join(\"&\").replace(pt,\"+\")},p.fn.extend({serialize:function(){return p.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=p.prop(this,\"elements\");return e?p.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!p(this).is(\":disabled\")&&mt.test(this.nodeName)&&!gt.test(e)&&(this.checked||!z.test(e))}).map(function(e,t){var n=p(this).val();return null==n?null:p.isArray(n)?p.map(n,function(e){return{name:t.name,value:e.replace(ht,\"\\r\\n\")}}):{name:t.name,value:n.replace(ht,\"\\r\\n\")}}).get()}}),p.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var yt=0,xt={},bt={0:200,1223:204},wt=p.ajaxSettings.xhr();e.attachEvent&&e.attachEvent(\"onunload\",function(){for(var e in xt)xt[e]()}),c.cors=!!wt&&\"withCredentials\"in wt,c.ajax=wt=!!wt,p.ajaxTransport(function(e){var t;if(c.cors||wt&&!e.crossDomain)return{send:function(n,r){var i,o=e.xhr(),s=++yt;if(o.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)o[i]=e.xhrFields[i];for(i in e.mimeType&&o.overrideMimeType&&o.overrideMimeType(e.mimeType),e.crossDomain||n[\"X-Requested-With\"]||(n[\"X-Requested-With\"]=\"XMLHttpRequest\"),n)o.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(delete xt[s],t=o.onload=o.onerror=null,\"abort\"===e?o.abort():\"error\"===e?r(o.status,o.statusText):r(bt[o.status]||o.status,o.statusText,\"string\"==typeof o.responseText?{text:o.responseText}:void 0,o.getAllResponseHeaders()))}},o.onload=t(),o.onerror=t(\"error\"),t=xt[s]=t(\"abort\");try{o.send(e.hasContent&&e.data||null)}catch(e){if(t)throw e}},abort:function(){t&&t()}}}),p.ajaxSetup({accepts:{script:\"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript\"},contents:{script:/(?:java|ecma)script/},converters:{\"text script\":function(e){return p.globalEval(e),e}}}),p.ajaxPrefilter(\"script\",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type=\"GET\")}),p.ajaxTransport(\"script\",function(e){var t,n;if(e.crossDomain)return{send:function(r,i){t=p(\"<script>\").prop({async:!0,charset:e.scriptCharset,src:e.url}).on(\"load error\",n=function(e){t.remove(),n=null,e&&i(\"error\"===e.type?404:200,e.type)}),f.head.appendChild(t[0])},abort:function(){n&&n()}}});var Tt=[],Ct=/(=)\\?(?=&|$)|\\?\\?/;p.ajaxSetup({jsonp:\"callback\",jsonpCallback:function(){var e=Tt.pop()||p.expando+\"_\"+Qe++;return this[e]=!0,e}}),p.ajaxPrefilter(\"json jsonp\",function(t,n,r){var i,o,s,a=!1!==t.jsonp&&(Ct.test(t.url)?\"url\":\"string\"==typeof t.data&&!(t.contentType||\"\").indexOf(\"application/x-www-form-urlencoded\")&&Ct.test(t.data)&&\"data\");if(a||\"jsonp\"===t.dataTypes[0])return i=t.jsonpCallback=p.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(Ct,\"$1\"+i):!1!==t.jsonp&&(t.url+=(Je.test(t.url)?\"&\":\"?\")+t.jsonp+\"=\"+i),t.converters[\"script json\"]=function(){return s||p.error(i+\" was not called\"),s[0]},t.dataTypes[0]=\"json\",o=e[i],e[i]=function(){s=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Tt.push(i)),s&&p.isFunction(o)&&o(s[0]),s=o=void 0}),\"script\"}),p.parseHTML=function(e,t,n){if(!e||\"string\"!=typeof e)return null;\"boolean\"==typeof t&&(n=t,t=!1),t=t||f;var r=b.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=p.buildFragment([e],t,i),i&&i.length&&p(i).remove(),p.merge([],r.childNodes))};var Nt=p.fn.load;p.fn.load=function(e,t,n){if(\"string\"!=typeof e&&Nt)return Nt.apply(this,arguments);var r,i,o,s=this,a=e.indexOf(\" \");return a>=0&&(r=p.trim(e.slice(a)),e=e.slice(0,a)),p.isFunction(t)?(n=t,t=void 0):t&&\"object\"==typeof t&&(i=\"POST\"),s.length>0&&p.ajax({url:e,type:i,dataType:\"html\",data:t}).done(function(e){o=arguments,s.html(r?p(\"<div>\").append(p.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){s.each(n,o||[e.responseText,t,e])}),this},p.each([\"ajaxStart\",\"ajaxStop\",\"ajaxComplete\",\"ajaxError\",\"ajaxSuccess\",\"ajaxSend\"],function(e,t){p.fn[t]=function(e){return this.on(t,e)}}),p.expr.filters.animated=function(e){return p.grep(p.timers,function(t){return e===t.elem}).length};var kt=e.document.documentElement;function Et(e){return p.isWindow(e)?e:9===e.nodeType&&e.defaultView}p.offset={setOffset:function(e,t,n){var r,i,o,s,a,u,l=p.css(e,\"position\"),c=p(e),f={};\"static\"===l&&(e.style.position=\"relative\"),a=c.offset(),o=p.css(e,\"top\"),u=p.css(e,\"left\"),(\"absolute\"===l||\"fixed\"===l)&&(o+u).indexOf(\"auto\")>-1?(s=(r=c.position()).top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(u)||0),p.isFunction(t)&&(t=t.call(e,n,a)),null!=t.top&&(f.top=t.top-a.top+s),null!=t.left&&(f.left=t.left-a.left+i),\"using\"in t?t.using.call(e,f):c.css(f)}},p.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){p.offset.setOffset(this,e,t)});var t,n,r=this[0],i={top:0,left:0},o=r&&r.ownerDocument;return o?(t=o.documentElement,p.contains(t,r)?(void 0!==r.getBoundingClientRect&&(i=r.getBoundingClientRect()),n=Et(o),{top:i.top+n.pageYOffset-t.clientTop,left:i.left+n.pageXOffset-t.clientLeft}):i):void 0},position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return\"fixed\"===p.css(n,\"position\")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),p.nodeName(e[0],\"html\")||(r=e.offset()),r.top+=p.css(e[0],\"borderTopWidth\",!0),r.left+=p.css(e[0],\"borderLeftWidth\",!0)),{top:t.top-r.top-p.css(n,\"marginTop\",!0),left:t.left-r.left-p.css(n,\"marginLeft\",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||kt;e&&!p.nodeName(e,\"html\")&&\"static\"===p.css(e,\"position\");)e=e.offsetParent;return e||kt})}}),p.each({scrollLeft:\"pageXOffset\",scrollTop:\"pageYOffset\"},function(t,n){var r=\"pageYOffset\"===n;p.fn[t]=function(i){return q(this,function(t,i,o){var s=Et(t);if(void 0===o)return s?s[n]:t[i];s?s.scrollTo(r?e.pageXOffset:o,r?o:e.pageYOffset):t[i]=o},t,i,arguments.length,null)}}),p.each([\"top\",\"left\"],function(e,t){p.cssHooks[t]=we(c.pixelPosition,function(e,n){if(n)return n=be(e,t),ye.test(n)?p(e).position()[t]+\"px\":n})}),p.each({Height:\"height\",Width:\"width\"},function(e,t){p.each({padding:\"inner\"+e,content:t,\"\":\"outer\"+e},function(n,r){p.fn[r]=function(r,i){var o=arguments.length&&(n||\"boolean\"!=typeof r),s=n||(!0===r||!0===i?\"margin\":\"border\");return q(this,function(t,n,r){var i;return p.isWindow(t)?t.document.documentElement[\"client\"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body[\"scroll\"+e],i[\"scroll\"+e],t.body[\"offset\"+e],i[\"offset\"+e],i[\"client\"+e])):void 0===r?p.css(t,n,s):p.style(t,n,r,s)},t,o?r:void 0,o,null)}})}),p.fn.size=function(){return this.length},p.fn.andSelf=p.fn.addBack,\"function\"==typeof define&&define.amd&&define(\"jquery\",[],function(){return p});var St=e.jQuery,Dt=e.$;return p.noConflict=function(t){return e.$===p&&(e.$=Dt),t&&e.jQuery===p&&(e.jQuery=St),p},void 0===t&&(e.jQuery=e.$=p),p});");

  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_js_JQuery = registerClass(exports,'io_cloudoffice_platform_cockpit_js_JQuery',io_cloudoffice_platform_cockpit_js_JQuery);


function io_cloudoffice_platform_cockpit_js_JSUIUtils() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_js_JSUIUtils;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_$$fn$$init_1'] = null;
  m = c._$$fn$$init_1 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$init_1'] = v; return CLS['fld_$$fn$$init_1']; };
  CLS['fld_$$fn$$confirmByUser_2'] = null;
  m = c._$$fn$$confirmByUser_2 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$confirmByUser_2'] = v; return CLS['fld_$$fn$$confirmByUser_2']; };
  CLS['fld_$$fn$$alert_3'] = null;
  m = c._$$fn$$alert_3 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$alert_3'] = v; return CLS['fld_$$fn$$alert_3']; };
  CLS['fld_$$fn$$console_4'] = null;
  m = c._$$fn$$console_4 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$console_4'] = v; return CLS['fld_$$fn$$console_4']; };
  CLS['fld_$$fn$$encodeURI_5'] = null;
  m = c._$$fn$$encodeURI_5 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$encodeURI_5'] = v; return CLS['fld_$$fn$$encodeURI_5']; };
  CLS['fld_$$fn$$screenWidth_6'] = null;
  m = c._$$fn$$screenWidth_6 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$screenWidth_6'] = v; return CLS['fld_$$fn$$screenWidth_6']; };
  CLS['fld_$$fn$$screenHeight_7'] = null;
  m = c._$$fn$$screenHeight_7 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$screenHeight_7'] = v; return CLS['fld_$$fn$$screenHeight_7']; };
  CLS['fld_$$fn$$getHeight_8'] = null;
  m = c._$$fn$$getHeight_8 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getHeight_8'] = v; return CLS['fld_$$fn$$getHeight_8']; };
  CLS['fld_$$fn$$getParentColumn_9'] = null;
  m = c._$$fn$$getParentColumn_9 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getParentColumn_9'] = v; return CLS['fld_$$fn$$getParentColumn_9']; };
  CLS['fld_$$fn$$smallDeviceFullSize_10'] = null;
  m = c._$$fn$$smallDeviceFullSize_10 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$smallDeviceFullSize_10'] = v; return CLS['fld_$$fn$$smallDeviceFullSize_10']; };
  CLS['fld_$$fn$$getAuthToken_11'] = null;
  m = c._$$fn$$getAuthToken_11 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getAuthToken_11'] = v; return CLS['fld_$$fn$$getAuthToken_11']; };
  CLS['fld_$$fn$$clearTagInputField_12'] = null;
  m = c._$$fn$$clearTagInputField_12 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$clearTagInputField_12'] = v; return CLS['fld_$$fn$$clearTagInputField_12']; };
  CLS['fld_$$fn$$getTagInput_13'] = null;
  m = c._$$fn$$getTagInput_13 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getTagInput_13'] = v; return CLS['fld_$$fn$$getTagInput_13']; };
  CLS['fld_$$fn$$getTagItemNumber_14'] = null;
  m = c._$$fn$$getTagItemNumber_14 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getTagItemNumber_14'] = v; return CLS['fld_$$fn$$getTagItemNumber_14']; };
  CLS['fld_$$fn$$getServerURL_15'] = null;
  m = c._$$fn$$getServerURL_15 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getServerURL_15'] = v; return CLS['fld_$$fn$$getServerURL_15']; };
  CLS['fld_$$fn$$getServerDefaultUserName_16'] = null;
  m = c._$$fn$$getServerDefaultUserName_16 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getServerDefaultUserName_16'] = v; return CLS['fld_$$fn$$getServerDefaultUserName_16']; };
  CLS['fld_$$fn$$getServerDefaultUserPassword_17'] = null;
  m = c._$$fn$$getServerDefaultUserPassword_17 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getServerDefaultUserPassword_17'] = v; return CLS['fld_$$fn$$getServerDefaultUserPassword_17']; };
  CLS['fld_$$fn$$showDropDownBlock_18'] = null;
  m = c._$$fn$$showDropDownBlock_18 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$showDropDownBlock_18'] = v; return CLS['fld_$$fn$$showDropDownBlock_18']; };
  CLS['fld_$$fn$$hideDropDownBlock_19'] = null;
  m = c._$$fn$$hideDropDownBlock_19 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$hideDropDownBlock_19'] = v; return CLS['fld_$$fn$$hideDropDownBlock_19']; };
  CLS['fld_$$fn$$getSelectedBlockDisplayById_20'] = null;
  m = c._$$fn$$getSelectedBlockDisplayById_20 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getSelectedBlockDisplayById_20'] = v; return CLS['fld_$$fn$$getSelectedBlockDisplayById_20']; };
  CLS['fld_$$fn$$loaderBar_21'] = null;
  m = c._$$fn$$loaderBar_21 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$loaderBar_21'] = v; return CLS['fld_$$fn$$loaderBar_21']; };
  CLS['fld_$$fn$$showFileLoader_22'] = null;
  m = c._$$fn$$showFileLoader_22 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$showFileLoader_22'] = v; return CLS['fld_$$fn$$showFileLoader_22']; };
  CLS['fld_$$fn$$HideFileLoader_23'] = null;
  m = c._$$fn$$HideFileLoader_23 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$HideFileLoader_23'] = v; return CLS['fld_$$fn$$HideFileLoader_23']; };
  CLS['fld_$$fn$$getServerBaseUrl_24'] = null;
  m = c._$$fn$$getServerBaseUrl_24 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getServerBaseUrl_24'] = v; return CLS['fld_$$fn$$getServerBaseUrl_24']; };
  CLS['fld_$$fn$$addBaseUrl_25'] = null;
  m = c._$$fn$$addBaseUrl_25 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$addBaseUrl_25'] = v; return CLS['fld_$$fn$$addBaseUrl_25']; };
  CLS['fld_$$fn$$getDefaultDomain_26'] = null;
  m = c._$$fn$$getDefaultDomain_26 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getDefaultDomain_26'] = v; return CLS['fld_$$fn$$getDefaultDomain_26']; };
  CLS['fld_$$fn$$getWsUrl_27'] = null;
  m = c._$$fn$$getWsUrl_27 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getWsUrl_27'] = v; return CLS['fld_$$fn$$getWsUrl_27']; };
  CLS['fld_$$fn$$stringDecodeWithImageReplace_28'] = null;
  m = c._$$fn$$stringDecodeWithImageReplace_28 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$stringDecodeWithImageReplace_28'] = v; return CLS['fld_$$fn$$stringDecodeWithImageReplace_28']; };
  CLS['fld_$$fn$$stringDecodeCrosBrowser_29'] = null;
  m = c._$$fn$$stringDecodeCrosBrowser_29 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$stringDecodeCrosBrowser_29'] = v; return CLS['fld_$$fn$$stringDecodeCrosBrowser_29']; };
  CLS['fld_$$fn$$stringEncodeCrosBrowser_30'] = null;
  m = c._$$fn$$stringEncodeCrosBrowser_30 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$stringEncodeCrosBrowser_30'] = v; return CLS['fld_$$fn$$stringEncodeCrosBrowser_30']; };
  CLS['fld_$$fn$$stringEncode_31'] = null;
  m = c._$$fn$$stringEncode_31 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$stringEncode_31'] = v; return CLS['fld_$$fn$$stringEncode_31']; };
  CLS['fld_$$fn$$stringDecode_32'] = null;
  m = c._$$fn$$stringDecode_32 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$stringDecode_32'] = v; return CLS['fld_$$fn$$stringDecode_32']; };
  CLS['fld_$$fn$$webContentLoadToIframe_33'] = null;
  m = c._$$fn$$webContentLoadToIframe_33 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$webContentLoadToIframe_33'] = v; return CLS['fld_$$fn$$webContentLoadToIframe_33']; };
  CLS['fld_$$fn$$setHostnameToIframe_34'] = null;
  m = c._$$fn$$setHostnameToIframe_34 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$setHostnameToIframe_34'] = v; return CLS['fld_$$fn$$setHostnameToIframe_34']; };
  CLS['fld_$$fn$$showPageTemplateOnIframe_35'] = null;
  m = c._$$fn$$showPageTemplateOnIframe_35 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$showPageTemplateOnIframe_35'] = v; return CLS['fld_$$fn$$showPageTemplateOnIframe_35']; };
  CLS['fld_$$fn$$showMailPageTemplateOnIframe_36'] = null;
  m = c._$$fn$$showMailPageTemplateOnIframe_36 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$showMailPageTemplateOnIframe_36'] = v; return CLS['fld_$$fn$$showMailPageTemplateOnIframe_36']; };
  CLS['fld_$$fn$$replaceFixedPosition_37'] = null;
  m = c._$$fn$$replaceFixedPosition_37 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$replaceFixedPosition_37'] = v; return CLS['fld_$$fn$$replaceFixedPosition_37']; };
  CLS['fld_$$fn$$logout_38'] = null;
  m = c._$$fn$$logout_38 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$logout_38'] = v; return CLS['fld_$$fn$$logout_38']; };
  CLS['fld_$$fn$$setCampTempHostnameToIframe_39'] = null;
  m = c._$$fn$$setCampTempHostnameToIframe_39 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$setCampTempHostnameToIframe_39'] = v; return CLS['fld_$$fn$$setCampTempHostnameToIframe_39']; };
  CLS['fld_$$fn$$setMailTempViewToIframe_40'] = null;
  m = c._$$fn$$setMailTempViewToIframe_40 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$setMailTempViewToIframe_40'] = v; return CLS['fld_$$fn$$setMailTempViewToIframe_40']; };
  CLS['fld_$$fn$$setSiteTempViewToIframe_41'] = null;
  m = c._$$fn$$setSiteTempViewToIframe_41 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$setSiteTempViewToIframe_41'] = v; return CLS['fld_$$fn$$setSiteTempViewToIframe_41']; };
  CLS['fld_$$fn$$isBrowserIE_42'] = null;
  m = c._$$fn$$isBrowserIE_42 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$isBrowserIE_42'] = v; return CLS['fld_$$fn$$isBrowserIE_42']; };
  CLS['fld_$$fn$$saveTinyMCE_43'] = null;
  m = c._$$fn$$saveTinyMCE_43 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$saveTinyMCE_43'] = v; return CLS['fld_$$fn$$saveTinyMCE_43']; };
  CLS['fld_$$fn$$getValueById_44'] = null;
  m = c._$$fn$$getValueById_44 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getValueById_44'] = v; return CLS['fld_$$fn$$getValueById_44']; };
  CLS['fld_$$fn$$showPopupLoader_45'] = null;
  m = c._$$fn$$showPopupLoader_45 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$showPopupLoader_45'] = v; return CLS['fld_$$fn$$showPopupLoader_45']; };
  CLS['fld_$$fn$$hidePopupLoader_46'] = null;
  m = c._$$fn$$hidePopupLoader_46 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$hidePopupLoader_46'] = v; return CLS['fld_$$fn$$hidePopupLoader_46']; };
  CLS['fld_$$fn$$showEastTopTabLoader_47'] = null;
  m = c._$$fn$$showEastTopTabLoader_47 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$showEastTopTabLoader_47'] = v; return CLS['fld_$$fn$$showEastTopTabLoader_47']; };
  CLS['fld_$$fn$$hideEastTopTabLoader_48'] = null;
  m = c._$$fn$$hideEastTopTabLoader_48 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$hideEastTopTabLoader_48'] = v; return CLS['fld_$$fn$$hideEastTopTabLoader_48']; };
  CLS['fld_$$fn$$showBlankTabLoader_49'] = null;
  m = c._$$fn$$showBlankTabLoader_49 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$showBlankTabLoader_49'] = v; return CLS['fld_$$fn$$showBlankTabLoader_49']; };
  CLS['fld_$$fn$$hideBlankTabLoader_50'] = null;
  m = c._$$fn$$hideBlankTabLoader_50 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$hideBlankTabLoader_50'] = v; return CLS['fld_$$fn$$hideBlankTabLoader_50']; };
  CLS['fld_$$fn$$showPageEditViewLoader_51'] = null;
  m = c._$$fn$$showPageEditViewLoader_51 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$showPageEditViewLoader_51'] = v; return CLS['fld_$$fn$$showPageEditViewLoader_51']; };
  CLS['fld_$$fn$$hidePageEditViewLoader_52'] = null;
  m = c._$$fn$$hidePageEditViewLoader_52 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$hidePageEditViewLoader_52'] = v; return CLS['fld_$$fn$$hidePageEditViewLoader_52']; };
  CLS['fld_$$fn$$showPageViewLoader_53'] = null;
  m = c._$$fn$$showPageViewLoader_53 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$showPageViewLoader_53'] = v; return CLS['fld_$$fn$$showPageViewLoader_53']; };
  CLS['fld_$$fn$$hidePageViewLoader_54'] = null;
  m = c._$$fn$$hidePageViewLoader_54 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$hidePageViewLoader_54'] = v; return CLS['fld_$$fn$$hidePageViewLoader_54']; };
  CLS['fld_$$fn$$showRelatedItemLoaderView_55'] = null;
  m = c._$$fn$$showRelatedItemLoaderView_55 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$showRelatedItemLoaderView_55'] = v; return CLS['fld_$$fn$$showRelatedItemLoaderView_55']; };
  CLS['fld_$$fn$$hideRelatedItemLoaderView_56'] = null;
  m = c._$$fn$$hideRelatedItemLoaderView_56 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$hideRelatedItemLoaderView_56'] = v; return CLS['fld_$$fn$$hideRelatedItemLoaderView_56']; };
  CLS['fld_$$fn$$showRelatedItemLoader_57'] = null;
  m = c._$$fn$$showRelatedItemLoader_57 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$showRelatedItemLoader_57'] = v; return CLS['fld_$$fn$$showRelatedItemLoader_57']; };
  CLS['fld_$$fn$$hideRelatedItemLoader_58'] = null;
  m = c._$$fn$$hideRelatedItemLoader_58 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$hideRelatedItemLoader_58'] = v; return CLS['fld_$$fn$$hideRelatedItemLoader_58']; };
  CLS['fld_$$fn$$showContentEditLoader_59'] = null;
  m = c._$$fn$$showContentEditLoader_59 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$showContentEditLoader_59'] = v; return CLS['fld_$$fn$$showContentEditLoader_59']; };
  CLS['fld_$$fn$$hideContentEditLoader_60'] = null;
  m = c._$$fn$$hideContentEditLoader_60 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$hideContentEditLoader_60'] = v; return CLS['fld_$$fn$$hideContentEditLoader_60']; };
  CLS['fld_$$fn$$contentXMLParseAndFormFieldMake_61'] = null;
  m = c._$$fn$$contentXMLParseAndFormFieldMake_61 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$contentXMLParseAndFormFieldMake_61'] = v; return CLS['fld_$$fn$$contentXMLParseAndFormFieldMake_61']; };
  CLS['fld_$$fn$$updateContentXML_62'] = null;
  m = c._$$fn$$updateContentXML_62 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$updateContentXML_62'] = v; return CLS['fld_$$fn$$updateContentXML_62']; };
  CLS['fld_$$fn$$getCustomPropVal_63'] = null;
  m = c._$$fn$$getCustomPropVal_63 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getCustomPropVal_63'] = v; return CLS['fld_$$fn$$getCustomPropVal_63']; };
  CLS['fld_$$fn$$setCustomPropVal_64'] = null;
  m = c._$$fn$$setCustomPropVal_64 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$setCustomPropVal_64'] = v; return CLS['fld_$$fn$$setCustomPropVal_64']; };
  CLS['fld_$$fn$$getxmlString0_65'] = null;
  m = c._$$fn$$getxmlString0_65 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getxmlString0_65'] = v; return CLS['fld_$$fn$$getxmlString0_65']; };
  CLS['fld_$$fn$$getxmlString1_66'] = null;
  m = c._$$fn$$getxmlString1_66 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getxmlString1_66'] = v; return CLS['fld_$$fn$$getxmlString1_66']; };
  CLS['fld_$$fn$$getxmlString2_67'] = null;
  m = c._$$fn$$getxmlString2_67 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getxmlString2_67'] = v; return CLS['fld_$$fn$$getxmlString2_67']; };
  CLS['fld_$$fn$$processStructureXml_68'] = null;
  m = c._$$fn$$processStructureXml_68 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$processStructureXml_68'] = v; return CLS['fld_$$fn$$processStructureXml_68']; };
  CLS['fld_$$fn$$processPageLinkList_69'] = null;
  m = c._$$fn$$processPageLinkList_69 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$processPageLinkList_69'] = v; return CLS['fld_$$fn$$processPageLinkList_69']; };
  CLS['fld_$$fn$$insertImage_70'] = null;
  m = c._$$fn$$insertImage_70 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$insertImage_70'] = v; return CLS['fld_$$fn$$insertImage_70']; };
  CLS['fld_$$fn$$setContentToIframe_71'] = null;
  m = c._$$fn$$setContentToIframe_71 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$setContentToIframe_71'] = v; return CLS['fld_$$fn$$setContentToIframe_71']; };
  CLS['fld_$$fn$$setContentToRelatedIframe_72'] = null;
  m = c._$$fn$$setContentToRelatedIframe_72 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$setContentToRelatedIframe_72'] = v; return CLS['fld_$$fn$$setContentToRelatedIframe_72']; };
  CLS['fld_$$fn$$setContentToDiv_73'] = null;
  m = c._$$fn$$setContentToDiv_73 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$setContentToDiv_73'] = v; return CLS['fld_$$fn$$setContentToDiv_73']; };
  CLS['fld_$$fn$$showCalendarLoader_74'] = null;
  m = c._$$fn$$showCalendarLoader_74 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$showCalendarLoader_74'] = v; return CLS['fld_$$fn$$showCalendarLoader_74']; };
  CLS['fld_$$fn$$showSlotEditPopup_75'] = null;
  m = c._$$fn$$showSlotEditPopup_75 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$showSlotEditPopup_75'] = v; return CLS['fld_$$fn$$showSlotEditPopup_75']; };
  CLS['fld_$$fn$$hideSlotEditPopup_76'] = null;
  m = c._$$fn$$hideSlotEditPopup_76 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$hideSlotEditPopup_76'] = v; return CLS['fld_$$fn$$hideSlotEditPopup_76']; };
  CLS['fld_$$fn$$getPopupPositionTop_77'] = null;
  m = c._$$fn$$getPopupPositionTop_77 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getPopupPositionTop_77'] = v; return CLS['fld_$$fn$$getPopupPositionTop_77']; };
  CLS['fld_$$fn$$getPopupPositionLeft_78'] = null;
  m = c._$$fn$$getPopupPositionLeft_78 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getPopupPositionLeft_78'] = v; return CLS['fld_$$fn$$getPopupPositionLeft_78']; };
  CLS['fld_$$fn$$hideEditBlock_79'] = null;
  m = c._$$fn$$hideEditBlock_79 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$hideEditBlock_79'] = v; return CLS['fld_$$fn$$hideEditBlock_79']; };
  CLS['fld_$$fn$$showEditBlock_80'] = null;
  m = c._$$fn$$showEditBlock_80 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$showEditBlock_80'] = v; return CLS['fld_$$fn$$showEditBlock_80']; };
  CLS['fld_$$fn$$changeInputWidth_81'] = null;
  m = c._$$fn$$changeInputWidth_81 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$changeInputWidth_81'] = v; return CLS['fld_$$fn$$changeInputWidth_81']; };
  CLS['fld_$$fn$$showActionPerformLoader_82'] = null;
  m = c._$$fn$$showActionPerformLoader_82 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$showActionPerformLoader_82'] = v; return CLS['fld_$$fn$$showActionPerformLoader_82']; };
  CLS['fld_$$fn$$hideActionPerformLoader_83'] = null;
  m = c._$$fn$$hideActionPerformLoader_83 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$hideActionPerformLoader_83'] = v; return CLS['fld_$$fn$$hideActionPerformLoader_83']; };
  CLS['fld_$$fn$$showOverlayById_84'] = null;
  m = c._$$fn$$showOverlayById_84 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$showOverlayById_84'] = v; return CLS['fld_$$fn$$showOverlayById_84']; };
  CLS['fld_$$fn$$hideOverlayById_85'] = null;
  m = c._$$fn$$hideOverlayById_85 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$hideOverlayById_85'] = v; return CLS['fld_$$fn$$hideOverlayById_85']; };
  CLS['fld_$$fn$$showOverlay_86'] = null;
  m = c._$$fn$$showOverlay_86 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$showOverlay_86'] = v; return CLS['fld_$$fn$$showOverlay_86']; };
  CLS['fld_$$fn$$hideOverlay_87'] = null;
  m = c._$$fn$$hideOverlay_87 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$hideOverlay_87'] = v; return CLS['fld_$$fn$$hideOverlay_87']; };
  CLS['fld_$$fn$$showMessageBar_88'] = null;
  m = c._$$fn$$showMessageBar_88 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$showMessageBar_88'] = v; return CLS['fld_$$fn$$showMessageBar_88']; };
  CLS['fld_$$fn$$callCountryListService_89'] = null;
  m = c._$$fn$$callCountryListService_89 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$callCountryListService_89'] = v; return CLS['fld_$$fn$$callCountryListService_89']; };
  CLS['fld_$$fn$$afterLogin_90'] = null;
  m = c._$$fn$$afterLogin_90 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$afterLogin_90'] = v; return CLS['fld_$$fn$$afterLogin_90']; };
  CLS['fld_$$fn$$getNewMessageInfo_91'] = null;
  m = c._$$fn$$getNewMessageInfo_91 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getNewMessageInfo_91'] = v; return CLS['fld_$$fn$$getNewMessageInfo_91']; };
  CLS['fld_$$fn$$constructCalendar_92'] = null;
  m = c._$$fn$$constructCalendar_92 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$constructCalendar_92'] = v; return CLS['fld_$$fn$$constructCalendar_92']; };
  CLS['fld_$$fn$$reloadNavigationHistory_93'] = null;
  m = c._$$fn$$reloadNavigationHistory_93 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$reloadNavigationHistory_93'] = v; return CLS['fld_$$fn$$reloadNavigationHistory_93']; };
  CLS['fld_$$fn$$callFavoriteListService_94'] = null;
  m = c._$$fn$$callFavoriteListService_94 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$callFavoriteListService_94'] = v; return CLS['fld_$$fn$$callFavoriteListService_94']; };
  CLS['fld_$$fn$$reloadCollectionListService_95'] = null;
  m = c._$$fn$$reloadCollectionListService_95 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$reloadCollectionListService_95'] = v; return CLS['fld_$$fn$$reloadCollectionListService_95']; };
  CLS['fld_$$fn$$appContextInit_96'] = null;
  m = c._$$fn$$appContextInit_96 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$appContextInit_96'] = v; return CLS['fld_$$fn$$appContextInit_96']; };
  CLS['fld_$$fn$$getCalenarJson_97'] = null;
  m = c._$$fn$$getCalenarJson_97 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getCalenarJson_97'] = v; return CLS['fld_$$fn$$getCalenarJson_97']; };
  CLS['fld_$$fn$$getApp_98'] = null;
  m = c._$$fn$$getApp_98 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getApp_98'] = v; return CLS['fld_$$fn$$getApp_98']; };
  CLS['fld_$$fn$$doBind_99'] = null;
  m = c._$$fn$$doBind_99 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$doBind_99'] = v; return CLS['fld_$$fn$$doBind_99']; };
  CLS['fld_$$fn$$getTempMessage_100'] = null;
  m = c._$$fn$$getTempMessage_100 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getTempMessage_100'] = v; return CLS['fld_$$fn$$getTempMessage_100']; };
  CLS['fld_$$fn$$getValue_101'] = null;
  m = c._$$fn$$getValue_101 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getValue_101'] = v; return CLS['fld_$$fn$$getValue_101']; };
  CLS['fld_$$fn$$getCompanyName_102'] = null;
  m = c._$$fn$$getCompanyName_102 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getCompanyName_102'] = v; return CLS['fld_$$fn$$getCompanyName_102']; };
  CLS['fld_$$fn$$getCompanyStylePath_103'] = null;
  m = c._$$fn$$getCompanyStylePath_103 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getCompanyStylePath_103'] = v; return CLS['fld_$$fn$$getCompanyStylePath_103']; };
  CLS['fld_$$fn$$getCompanyLogoPath_104'] = null;
  m = c._$$fn$$getCompanyLogoPath_104 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getCompanyLogoPath_104'] = v; return CLS['fld_$$fn$$getCompanyLogoPath_104']; };
  CLS['fld_$$fn$$messageScrollToBottom_105'] = null;
  m = c._$$fn$$messageScrollToBottom_105 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$messageScrollToBottom_105'] = v; return CLS['fld_$$fn$$messageScrollToBottom_105']; };
  CLS['fld_$$fn$$messageScrollBottomMainSearch_106'] = null;
  m = c._$$fn$$messageScrollBottomMainSearch_106 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$messageScrollBottomMainSearch_106'] = v; return CLS['fld_$$fn$$messageScrollBottomMainSearch_106']; };
  CLS['fld_$$fn$$listSearchScrollBottomMainSearch_107'] = null;
  m = c._$$fn$$listSearchScrollBottomMainSearch_107 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$listSearchScrollBottomMainSearch_107'] = v; return CLS['fld_$$fn$$listSearchScrollBottomMainSearch_107']; };
  CLS['fld_$$fn$$messageScrollTopChat_108'] = null;
  m = c._$$fn$$messageScrollTopChat_108 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$messageScrollTopChat_108'] = v; return CLS['fld_$$fn$$messageScrollTopChat_108']; };
  CLS['fld_$$fn$$getDefaultCountryName_109'] = null;
  m = c._$$fn$$getDefaultCountryName_109 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getDefaultCountryName_109'] = v; return CLS['fld_$$fn$$getDefaultCountryName_109']; };
  CLS['fld_$$fn$$getDefaultCountryCode_110'] = null;
  m = c._$$fn$$getDefaultCountryCode_110 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getDefaultCountryCode_110'] = v; return CLS['fld_$$fn$$getDefaultCountryCode_110']; };
  CLS['fld_$$fn$$timer_111'] = null;
  m = c._$$fn$$timer_111 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$timer_111'] = v; return CLS['fld_$$fn$$timer_111']; };
  CLS['fld_$$fn$$stopNavigate_112'] = null;
  m = c._$$fn$$stopNavigate_112 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$stopNavigate_112'] = v; return CLS['fld_$$fn$$stopNavigate_112']; };
  CLS['fld_$$fn$$loadNewChat_113'] = null;
  m = c._$$fn$$loadNewChat_113 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$loadNewChat_113'] = v; return CLS['fld_$$fn$$loadNewChat_113']; };
  CLS['fld_$$fn$$getSoftwareVersion_114'] = null;
  m = c._$$fn$$getSoftwareVersion_114 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getSoftwareVersion_114'] = v; return CLS['fld_$$fn$$getSoftwareVersion_114']; };
  CLS['fld_$$fn$$setCookie_115'] = null;
  m = c._$$fn$$setCookie_115 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$setCookie_115'] = v; return CLS['fld_$$fn$$setCookie_115']; };
  CLS['fld_$$fn$$setCookie_116'] = null;
  m = c._$$fn$$setCookie_116 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$setCookie_116'] = v; return CLS['fld_$$fn$$setCookie_116']; };
  CLS['fld_$$fn$$getCookie_117'] = null;
  m = c._$$fn$$getCookie_117 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getCookie_117'] = v; return CLS['fld_$$fn$$getCookie_117']; };
  CLS['fld_$$fn$$showNewVersionMsg_118'] = null;
  m = c._$$fn$$showNewVersionMsg_118 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$showNewVersionMsg_118'] = v; return CLS['fld_$$fn$$showNewVersionMsg_118']; };
  CLS['fld_$$fn$$hideNewVersionMsg_119'] = null;
  m = c._$$fn$$hideNewVersionMsg_119 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$hideNewVersionMsg_119'] = v; return CLS['fld_$$fn$$hideNewVersionMsg_119']; };
  CLS['fld_$$fn$$hideSelectItemDropDown_120'] = null;
  m = c._$$fn$$hideSelectItemDropDown_120 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$hideSelectItemDropDown_120'] = v; return CLS['fld_$$fn$$hideSelectItemDropDown_120']; };
  CLS['fld_$$fn$$setTimeOut_121'] = null;
  m = c._$$fn$$setTimeOut_121 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$setTimeOut_121'] = v; return CLS['fld_$$fn$$setTimeOut_121']; };
  CLS['fld_$$fn$$setCreateMessageCaret_122'] = null;
  m = c._$$fn$$setCreateMessageCaret_122 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$setCreateMessageCaret_122'] = v; return CLS['fld_$$fn$$setCreateMessageCaret_122']; };
  CLS['fld_$$fn$$isDebugOn_123'] = null;
  m = c._$$fn$$isDebugOn_123 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$isDebugOn_123'] = v; return CLS['fld_$$fn$$isDebugOn_123']; };
  CLS['fld_$$fn$$reloadPopoverListItem_124'] = null;
  m = c._$$fn$$reloadPopoverListItem_124 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$reloadPopoverListItem_124'] = v; return CLS['fld_$$fn$$reloadPopoverListItem_124']; };
  CLS['fld_$$fn$$reloadSupportingTop_125'] = null;
  m = c._$$fn$$reloadSupportingTop_125 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$reloadSupportingTop_125'] = v; return CLS['fld_$$fn$$reloadSupportingTop_125']; };
  CLS['fld_$$fn$$reloadSupportingBottom_126'] = null;
  m = c._$$fn$$reloadSupportingBottom_126 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$reloadSupportingBottom_126'] = v; return CLS['fld_$$fn$$reloadSupportingBottom_126']; };
  CLS['fld_$$fn$$reloadSelectedContext_127'] = null;
  m = c._$$fn$$reloadSelectedContext_127 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$reloadSelectedContext_127'] = v; return CLS['fld_$$fn$$reloadSelectedContext_127']; };
  CLS['fld_$$fn$$setTopConversationActive_128'] = null;
  m = c._$$fn$$setTopConversationActive_128 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$setTopConversationActive_128'] = v; return CLS['fld_$$fn$$setTopConversationActive_128']; };
  CLS['fld_$$fn$$setTopConversationActiveAndSetToSearchBox_129'] = null;
  m = c._$$fn$$setTopConversationActiveAndSetToSearchBox_129 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$setTopConversationActiveAndSetToSearchBox_129'] = v; return CLS['fld_$$fn$$setTopConversationActiveAndSetToSearchBox_129']; };
  CLS['fld_$$fn$$downloadFile_130'] = null;
  m = c._$$fn$$downloadFile_130 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$downloadFile_130'] = v; return CLS['fld_$$fn$$downloadFile_130']; };
  CLS['fld_$$fn$$getDefaultSiteId_131'] = null;
  m = c._$$fn$$getDefaultSiteId_131 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getDefaultSiteId_131'] = v; return CLS['fld_$$fn$$getDefaultSiteId_131']; };
  CLS['fld_$$fn$$showComponentLoader_132'] = null;
  m = c._$$fn$$showComponentLoader_132 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$showComponentLoader_132'] = v; return CLS['fld_$$fn$$showComponentLoader_132']; };
  CLS['fld_$$fn$$hideComponentLoader_133'] = null;
  m = c._$$fn$$hideComponentLoader_133 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$hideComponentLoader_133'] = v; return CLS['fld_$$fn$$hideComponentLoader_133']; };
  CLS['fld_$$fn$$setContentLayoutId_134'] = null;
  m = c._$$fn$$setContentLayoutId_134 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$setContentLayoutId_134'] = v; return CLS['fld_$$fn$$setContentLayoutId_134']; };
  CLS['fld_$$fn$$richTextEditorFull_135'] = null;
  m = c._$$fn$$richTextEditorFull_135 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$richTextEditorFull_135'] = v; return CLS['fld_$$fn$$richTextEditorFull_135']; };
  CLS['fld_$$fn$$getRichTextEditorContent_136'] = null;
  m = c._$$fn$$getRichTextEditorContent_136 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getRichTextEditorContent_136'] = v; return CLS['fld_$$fn$$getRichTextEditorContent_136']; };
  CLS['fld_$$fn$$clearRichTextEditorContent_137'] = null;
  m = c._$$fn$$clearRichTextEditorContent_137 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$clearRichTextEditorContent_137'] = v; return CLS['fld_$$fn$$clearRichTextEditorContent_137']; };
  CLS['fld_$$fn$$maxRichTextEditorToolbar_138'] = null;
  m = c._$$fn$$maxRichTextEditorToolbar_138 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$maxRichTextEditorToolbar_138'] = v; return CLS['fld_$$fn$$maxRichTextEditorToolbar_138']; };
  CLS['fld_$$fn$$minRichTextEditorToolbar_139'] = null;
  m = c._$$fn$$minRichTextEditorToolbar_139 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$minRichTextEditorToolbar_139'] = v; return CLS['fld_$$fn$$minRichTextEditorToolbar_139']; };
  CLS['fld_$$fn$$hide_140'] = null;
  m = c._$$fn$$hide_140 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$hide_140'] = v; return CLS['fld_$$fn$$hide_140']; };
  CLS['fld_$$fn$$showAppLoader_141'] = null;
  m = c._$$fn$$showAppLoader_141 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$showAppLoader_141'] = v; return CLS['fld_$$fn$$showAppLoader_141']; };
  CLS['fld_$$fn$$hideAppLoader_142'] = null;
  m = c._$$fn$$hideAppLoader_142 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$hideAppLoader_142'] = v; return CLS['fld_$$fn$$hideAppLoader_142']; };
  CLS['fld_$$fn$$showExportBlock_143'] = null;
  m = c._$$fn$$showExportBlock_143 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$showExportBlock_143'] = v; return CLS['fld_$$fn$$showExportBlock_143']; };
  CLS['fld_$$fn$$hideExportBlock_144'] = null;
  m = c._$$fn$$hideExportBlock_144 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$hideExportBlock_144'] = v; return CLS['fld_$$fn$$hideExportBlock_144']; };
  CLS['fld_$$fn$$openLeftSection_145'] = null;
  m = c._$$fn$$openLeftSection_145 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$openLeftSection_145'] = v; return CLS['fld_$$fn$$openLeftSection_145']; };
  CLS['fld_$$fn$$openCenterSection_146'] = null;
  m = c._$$fn$$openCenterSection_146 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$openCenterSection_146'] = v; return CLS['fld_$$fn$$openCenterSection_146']; };
  CLS['fld_$$fn$$getTimeZoneFromProperties_147'] = null;
  m = c._$$fn$$getTimeZoneFromProperties_147 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getTimeZoneFromProperties_147'] = v; return CLS['fld_$$fn$$getTimeZoneFromProperties_147']; };
  CLS['fld_$$fn$$consoleTime_148'] = null;
  m = c._$$fn$$consoleTime_148 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$consoleTime_148'] = v; return CLS['fld_$$fn$$consoleTime_148']; };
  CLS['fld_$$fn$$workSpaceDefaultSelection_149'] = null;
  m = c._$$fn$$workSpaceDefaultSelection_149 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$workSpaceDefaultSelection_149'] = v; return CLS['fld_$$fn$$workSpaceDefaultSelection_149']; };
  CLS['fld_$$fn$$uploadProgressStart_150'] = null;
  m = c._$$fn$$uploadProgressStart_150 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$uploadProgressStart_150'] = v; return CLS['fld_$$fn$$uploadProgressStart_150']; };
  CLS['fld_$$fn$$uploadProgressEnd_151'] = null;
  m = c._$$fn$$uploadProgressEnd_151 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$uploadProgressEnd_151'] = v; return CLS['fld_$$fn$$uploadProgressEnd_151']; };
  CLS['fld_$$fn$$showCustomMessegeLoader_152'] = null;
  m = c._$$fn$$showCustomMessegeLoader_152 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$showCustomMessegeLoader_152'] = v; return CLS['fld_$$fn$$showCustomMessegeLoader_152']; };
  CLS['fld_$$fn$$hideCustomMessegeLoader_153'] = null;
  m = c._$$fn$$hideCustomMessegeLoader_153 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$hideCustomMessegeLoader_153'] = v; return CLS['fld_$$fn$$hideCustomMessegeLoader_153']; };
  CLS['fld_$$fn$$getGoogleSyncAuthUrl_154'] = null;
  m = c._$$fn$$getGoogleSyncAuthUrl_154 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getGoogleSyncAuthUrl_154'] = v; return CLS['fld_$$fn$$getGoogleSyncAuthUrl_154']; };
  CLS['fld_$$fn$$getGoogleSyncClientId_155'] = null;
  m = c._$$fn$$getGoogleSyncClientId_155 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getGoogleSyncClientId_155'] = v; return CLS['fld_$$fn$$getGoogleSyncClientId_155']; };
  CLS['fld_$$fn$$getGoogleSyncScope_156'] = null;
  m = c._$$fn$$getGoogleSyncScope_156 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getGoogleSyncScope_156'] = v; return CLS['fld_$$fn$$getGoogleSyncScope_156']; };
  CLS['fld_$$fn$$getGoogleSyncResponseType_157'] = null;
  m = c._$$fn$$getGoogleSyncResponseType_157 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getGoogleSyncResponseType_157'] = v; return CLS['fld_$$fn$$getGoogleSyncResponseType_157']; };
  CLS['fld_$$fn$$setBean_158'] = null;
  m = c._$$fn$$setBean_158 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$setBean_158'] = v; return CLS['fld_$$fn$$setBean_158']; };
  CLS['fld_$$fn$$getBean_159'] = null;
  m = c._$$fn$$getBean_159 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getBean_159'] = v; return CLS['fld_$$fn$$getBean_159']; };
  CLS['fld_$$fn$$isProduction_160'] = null;
  m = c._$$fn$$isProduction_160 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$isProduction_160'] = v; return CLS['fld_$$fn$$isProduction_160']; };
  CLS['fld_$$fn$$setCompany_161'] = null;
  m = c._$$fn$$setCompany_161 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$setCompany_161'] = v; return CLS['fld_$$fn$$setCompany_161']; };
  CLS['fld_$$fn$$setSite_162'] = null;
  m = c._$$fn$$setSite_162 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$setSite_162'] = v; return CLS['fld_$$fn$$setSite_162']; };
  CLS['fld_$$fn$$setLayout_163'] = null;
  m = c._$$fn$$setLayout_163 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$setLayout_163'] = v; return CLS['fld_$$fn$$setLayout_163']; };
  CLS['fld_$$fn$$getLayout_164'] = null;
  m = c._$$fn$$getLayout_164 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getLayout_164'] = v; return CLS['fld_$$fn$$getLayout_164']; };
  CLS['fld_$$fn$$getPath_165'] = null;
  m = c._$$fn$$getPath_165 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getPath_165'] = v; return CLS['fld_$$fn$$getPath_165']; };
  CLS['fld_$$fn$$setPath_166'] = null;
  m = c._$$fn$$setPath_166 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$setPath_166'] = v; return CLS['fld_$$fn$$setPath_166']; };
  CLS['fld_$$fn$$getCompany_167'] = null;
  m = c._$$fn$$getCompany_167 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getCompany_167'] = v; return CLS['fld_$$fn$$getCompany_167']; };
  CLS['fld_$$fn$$getCompanyJSON_168'] = null;
  m = c._$$fn$$getCompanyJSON_168 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getCompanyJSON_168'] = v; return CLS['fld_$$fn$$getCompanyJSON_168']; };
  CLS['fld_$$fn$$getSite_169'] = null;
  m = c._$$fn$$getSite_169 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getSite_169'] = v; return CLS['fld_$$fn$$getSite_169']; };
  CLS['fld_$$fn$$getREPOURL_170'] = null;
  m = c._$$fn$$getREPOURL_170 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getREPOURL_170'] = v; return CLS['fld_$$fn$$getREPOURL_170']; };
  CLS['fld_$$fn$$getHost_171'] = null;
  m = c._$$fn$$getHost_171 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getHost_171'] = v; return CLS['fld_$$fn$$getHost_171']; };
  CLS['fld_$$fn$$getDHost_172'] = null;
  m = c._$$fn$$getDHost_172 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getDHost_172'] = v; return CLS['fld_$$fn$$getDHost_172']; };
  CLS['fld_$$fn$$getServiceURL_173'] = null;
  m = c._$$fn$$getServiceURL_173 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getServiceURL_173'] = v; return CLS['fld_$$fn$$getServiceURL_173']; };
  CLS['fld_$$fn$$redirect_174'] = null;
  m = c._$$fn$$redirect_174 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$redirect_174'] = v; return CLS['fld_$$fn$$redirect_174']; };
  CLS['fld_$$fn$$getPlatformCompany_175'] = null;
  m = c._$$fn$$getPlatformCompany_175 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getPlatformCompany_175'] = v; return CLS['fld_$$fn$$getPlatformCompany_175']; };
  CLS['fld_$$fn$$getPlatformSite_176'] = null;
  m = c._$$fn$$getPlatformSite_176 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getPlatformSite_176'] = v; return CLS['fld_$$fn$$getPlatformSite_176']; };
  CLS['fld_$$fn$$getPlatformBlankLayout_177'] = null;
  m = c._$$fn$$getPlatformBlankLayout_177 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getPlatformBlankLayout_177'] = v; return CLS['fld_$$fn$$getPlatformBlankLayout_177']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.init__V = function() {
  var r = (function() {

}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['init__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.confirmByUser__VLjava_lang_String_2Ljava_lang_Runnable_2 = function() {
  var r = (function(msg,callback) {

  msg = vm.java_lang_Class(false).toJS(msg);
  callback = vm.java_lang_Class(false).toJS(callback);if (confirm(msg)) {
  vm.java_lang_Class(false).toJS(vm.io_cloudoffice_platform_cockpit_js_$JsCallbacks$(false)._VM().java_1lang_1Runnable$run$__Ljava_lang_Object_2Ljava_lang_Runnable_2(callback));
}

}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['confirmByUser__VLjava_lang_String_2Ljava_lang_Runnable_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.alert__VLjava_lang_String_2 = function() {
  var r = (function(msg) {

  msg = vm.java_lang_Class(false).toJS(msg);alert(msg);

}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['alert__VLjava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.console__VLjava_lang_String_2 = function() {
  var r = (function(msg) {

  msg = vm.java_lang_Class(false).toJS(msg);window.console.log(msg);

}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['console__VLjava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.encodeURI__Ljava_lang_String_2Ljava_lang_String_2 = function() {
  var r = (function(uri) {

  uri = vm.java_lang_Class(false).toJS(uri);return encodeURIComponent(uri);

}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['encodeURI__Ljava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.screenWidth__I = function() {
  var r = (function() {
var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth;
return  x;

}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['screenWidth__I'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.screenHeight__I = function() {
  var r = (function() {
var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;
return y;

}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['screenHeight__I'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getHeight__ILjava_lang_String_2 = function() {
  var r = (function(id) {

  id = vm.java_lang_Class(false).toJS(id); var y = $("#"+id).height();
return y;

}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getHeight__ILjava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getParentColumn__Ljava_lang_String_2Ljava_lang_String_2 = function() {
  var r = (function(id) {

  id = vm.java_lang_Class(false).toJS(id); var y = $("#"+id).parent("li").parent("ul").attr("id");
return y;

}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getParentColumn__Ljava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.smallDeviceFullSize__VLjava_lang_String_2 = function() {
  var r = (function(id) {

  id = vm.java_lang_Class(false).toJS(id);$("#"+id).addClass('m-col-lft');
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['smallDeviceFullSize__VLjava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getAuthToken__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2 = function() {
  var r = (function(username,password) {

  username = vm.java_lang_Class(false).toJS(username);
  password = vm.java_lang_Class(false).toJS(password); var tok = username + ':' + password;
              var hash = btoa(tok);
              return "Basic " + hash;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getAuthToken__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.clearTagInputField__Ljava_lang_String_2Ljava_lang_String_2 = function() {
  var r = (function(id) {

  id = vm.java_lang_Class(false).toJS(id);var value='#'+id+' '+'.tag-item-input';
$(value).html('');

}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['clearTagInputField__Ljava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getTagInput__Ljava_lang_String_2Ljava_lang_String_2 = function() {
  var r = (function(id) {

  id = vm.java_lang_Class(false).toJS(id);var value='#'+id+' '+'.tag-item-input';
var selectedTag =$(value).val().trim();
return selectedTag;

}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getTagInput__Ljava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getTagItemNumber__J = function() {
  var r = (function() {
var count =$(".tag-item-container .tag").length;
return count;

}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getTagItemNumber__J'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getServerURL__Ljava_lang_String_2 = function() {
  var r = (function() {
return serverUrl;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getServerURL__Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getServerDefaultUserName__Ljava_lang_String_2 = function() {
  var r = (function() {
return serverDefaultUser;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getServerDefaultUserName__Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getServerDefaultUserPassword__Ljava_lang_String_2 = function() {
  var r = (function() {
return serverDefaultPassword;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getServerDefaultUserPassword__Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.showDropDownBlock__VLjava_lang_String_2 = function() {
  var r = (function(id) {

  id = vm.java_lang_Class(false).toJS(id);$("#"+id).show();

}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['showDropDownBlock__VLjava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.hideDropDownBlock__VLjava_lang_String_2 = function() {
  var r = (function(id) {

  id = vm.java_lang_Class(false).toJS(id);$("#"+id).hide();

}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['hideDropDownBlock__VLjava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getSelectedBlockDisplayById__Ljava_lang_String_2Ljava_lang_String_2 = function() {
  var r = (function(id) {

  id = vm.java_lang_Class(false).toJS(id);var css = $("#"+id).css('display');
return css;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getSelectedBlockDisplayById__Ljava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.loaderBar__V = function() {
  var r = (function() {
$("#progress").show(); $({property: 0}).animate({property: 105}, {
            duration: 4000,
            step: function() {
                var _percent = Math.round(this.property);
                $('#progress').css('width',  _percent+"%");
                if(_percent == 105) {
                    $("#progress").hide();
                }
            },
            complete: function() { 
            }
        });
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['loaderBar__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.showFileLoader__V = function() {
  var r = (function() {
$('.cstm-file-viewer').hide();
 $('.wait').show(); 
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['showFileLoader__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.HideFileLoader__V = function() {
  var r = (function() {
$('.wait').hide();
  $('.cstm-file-viewer').show();
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['HideFileLoader__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getServerBaseUrl__Ljava_lang_String_2 = function() {
  var r = (function() {
return serverBaseUrl;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getServerBaseUrl__Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.addBaseUrl__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2 = function() {
  var r = (function(webContent,host) {

  webContent = vm.java_lang_Class(false).toJS(webContent);
  host = vm.java_lang_Class(false).toJS(host);webContent = doUtfReplace(webContent);String.prototype.replaceAll = function (find, replace) {
var str = this;
return str.replace(new RegExp(find.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g'), replace);
};
webContent = webContent.replaceAll('"/html/', '"'+host+'/html/');
webContent = webContent.replaceAll('"/documents/', '"'+host+'/documents/');
webContent = webContent.replaceAll('"/combo/', '"'+host+'/combo/');
return webContent;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['addBaseUrl__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getDefaultDomain__Ljava_lang_String_2 = function() {
  var r = (function() {
return defaultDomain;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getDefaultDomain__Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getWsUrl__Ljava_lang_String_2 = function() {
  var r = (function() {
return wsUrl;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getWsUrl__Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.stringDecodeWithImageReplace__Ljava_lang_String_2Ljava_lang_String_2 = function() {
  var r = (function(base64EncodedString) {

  base64EncodedString = vm.java_lang_Class(false).toJS(base64EncodedString);var decodedString = atob(base64EncodedString);
decodedString = decodedString.replace(/&nbsp;/g,"");decodedString = decodedString.replace(/&amp;nbsp;/g,"");return decodedString;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['stringDecodeWithImageReplace__Ljava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.stringDecodeCrosBrowser__Ljava_lang_String_2Ljava_lang_String_2 = function() {
  var r = (function(encodedString) {

  encodedString = vm.java_lang_Class(false).toJS(encodedString);var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/rn/g,"n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}
var decodedString = Base64.decode(encodedString);return decodedString;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['stringDecodeCrosBrowser__Ljava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.stringEncodeCrosBrowser__Ljava_lang_String_2Ljava_lang_String_2 = function() {
  var r = (function(decodedString) {

  decodedString = vm.java_lang_Class(false).toJS(decodedString);var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/rn/g,"n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}
var encodedString = Base64.encode(decodedString);return encodedString;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['stringEncodeCrosBrowser__Ljava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.stringEncode__Ljava_lang_String_2Ljava_lang_String_2 = function() {
  var r = (function(decodedString) {

  decodedString = vm.java_lang_Class(false).toJS(decodedString);var encodedString = window.btoa(unescape(encodeURIComponent( decodedString )));return encodedString;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['stringEncode__Ljava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.stringDecode__Ljava_lang_String_2Ljava_lang_String_2 = function() {
  var r = (function(base64EncodedString) {

  base64EncodedString = vm.java_lang_Class(false).toJS(base64EncodedString);var decodedString = decodeURIComponent(escape(window.atob( base64EncodedString )));decodedString = decodedString.replace(/&nbsp;/g," ");decodedString = decodedString.replace(/&amp;nbsp;/g," ");return decodedString;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['stringDecode__Ljava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.webContentLoadToIframe__Ljava_lang_String_2 = function() {
  var r = (function() {
var doc = document.getElementById("icontent").contentDocument; 
var content=document.getElementById("showContent"); 
doc.write(content.innerHTML);
doc.close();$("#showContent").hide();
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['webContentLoadToIframe__Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.setHostnameToIframe__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2 = function() {
  var r = (function(hostname,pageUrl) {

  hostname = vm.java_lang_Class(false).toJS(hostname);
  pageUrl = vm.java_lang_Class(false).toJS(pageUrl);var doc = document.getElementById("frame").contentDocument; 
doc.write("");
doc.close();String.prototype.replaceAll = function (find, replace) {
  var str = this;
  return str.replace(new RegExp(find.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g'), replace);
};
  $.ajax({
    url: pageUrl,
    type: 'GET',
    success: function(res) {
    var data = res.replaceAll('"/documents/', '"'+hostname+'/documents/');
    data = data.replaceAll('"/combo/', '"'+hostname+'/combo/');
    data = data.replaceAll('"/html/css/main.css', '"'+hostname+'/html/css/main.css');
    data = data.replaceAll('"/html/js/barebone.jsp', '"'+hostname+'/html/js/barebone.jsp');
    data = data.replaceAll('"/html/js/liferay/', '"'+hostname+'/html/js/liferay/');
    doc.write(data);
    doc.close();  },    error: function (request, status, error) {
        if(request.status === 0){             alert('Please accept HTTPS certificate for '+hostname);         }    }
});$('#pageViewLoader').css({'display':'none'});
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['setHostnameToIframe__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.showPageTemplateOnIframe__Ljava_lang_String_2Ljava_lang_String_2 = function() {
  var r = (function(pageUrl) {

  pageUrl = vm.java_lang_Class(false).toJS(pageUrl);var doc = document.getElementById("templatepreviewframe").contentDocument; 
  $.ajax({
    url: pageUrl,
    type: 'GET',
    success: function(res) {
    doc.write(res);
    doc.close();  }
});
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['showPageTemplateOnIframe__Ljava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.showMailPageTemplateOnIframe__Ljava_lang_String_2Ljava_lang_String_2 = function() {
  var r = (function(pageUrl) {

  pageUrl = vm.java_lang_Class(false).toJS(pageUrl);var doc = document.getElementById("mailpagepreviewframe").contentDocument; 
  $.ajax({
    url: pageUrl,
    type: 'GET',
    success: function(res) {
    doc.write(res);
    doc.close();  }
});
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['showMailPageTemplateOnIframe__Ljava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.replaceFixedPosition__V = function() {
  var r = (function() {
$('.webContents *').filter(function() {
  var boolValue = $(this).css("position") === 'fixed';
  if (boolValue) {
    $(this).css("position", "relative");
  }
});
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['replaceFixedPosition__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.logout__V = function() {
  var r = (function() {
disconnectMessenger();location.reload();
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['logout__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.setCampTempHostnameToIframe__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2 = function() {
  var r = (function(hostname,pageUrl,id,content) {

  hostname = vm.java_lang_Class(false).toJS(hostname);
  pageUrl = vm.java_lang_Class(false).toJS(pageUrl);
  id = vm.java_lang_Class(false).toJS(id);
  content = vm.java_lang_Class(false).toJS(content);var doc = document.getElementById(id).contentDocument; 
doc.write(content);
    doc.close();
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['setCampTempHostnameToIframe__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.setMailTempViewToIframe__Ljava_lang_String_2Ljava_lang_String_2 = function() {
  var r = (function(content) {

  content = vm.java_lang_Class(false).toJS(content);var doc = document.getElementById("mailpagepreviewframe").contentDocument; 
doc.write('');
doc.write(content);
    doc.close();
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['setMailTempViewToIframe__Ljava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.setSiteTempViewToIframe__Ljava_lang_String_2Ljava_lang_String_2 = function() {
  var r = (function(content) {

  content = vm.java_lang_Class(false).toJS(content);var doc = document.getElementById("sitetemplatepreviewframe").contentDocument; 
doc.write('');doc.write(content);
    doc.close();
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['setSiteTempViewToIframe__Ljava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.isBrowserIE__Z = function() {
  var r = (function() {
var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
    {
        return true;
    }
    return false;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['isBrowserIE__Z'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.saveTinyMCE__V = function() {
  var r = (function() {
tinyMCE.triggerSave();
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['saveTinyMCE__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getValueById__Ljava_lang_String_2Ljava_lang_String_2 = function() {
  var r = (function(id) {

  id = vm.java_lang_Class(false).toJS(id);return $('#'+id).val();
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getValueById__Ljava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.showPopupLoader__V = function() {
  var r = (function() {
$('.popup-loader').css({'display':'block'})
setTimeout(function(){
$('.popup-loader').css({'display':'none'})
},10000);
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['showPopupLoader__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.hidePopupLoader__V = function() {
  var r = (function() {
$('.popup-loader').css({'display':'none'});
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['hidePopupLoader__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.showEastTopTabLoader__V = function() {
  var r = (function() {
$('#east-top-loader').css({'display':'block'})
setTimeout(function(){
$('#east-top-loader').css({'display':'none'})
},10000);
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['showEastTopTabLoader__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.hideEastTopTabLoader__V = function() {
  var r = (function() {
$('#east-top-loader').css({'display':'none'});
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['hideEastTopTabLoader__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.showBlankTabLoader__V = function() {
  var r = (function() {
$('.blank-tab-loader').css({'display':'block'})
setTimeout(function(){
$('.blank-tab-loader').css({'display':'none'})
},10000);
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['showBlankTabLoader__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.hideBlankTabLoader__V = function() {
  var r = (function() {
$('.blank-tab-loader').css({'display':'none'});
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['hideBlankTabLoader__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.showPageEditViewLoader__V = function() {
  var r = (function() {
$('.pageEditLoader').css({'display':'block'})
setTimeout(function(){
$('.pageEditLoader').css({'display':'none'})
},10000);
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['showPageEditViewLoader__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.hidePageEditViewLoader__V = function() {
  var r = (function() {
$('.pageEditLoader').css({'display':'none'});
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['hidePageEditViewLoader__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.showPageViewLoader__V = function() {
  var r = (function() {
$('#pageViewLoader').css({'display':'block'})
setTimeout(function(){
$('#pageViewLoader').css({'display':'none'})
},15000);
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['showPageViewLoader__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.hidePageViewLoader__V = function() {
  var r = (function() {
$('#pageViewLoader').css({'display':'none'});
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['hidePageViewLoader__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.showRelatedItemLoaderView__V = function() {
  var r = (function() {
$('#relatedItemLoaderView').css({'display':'block'})
setTimeout(function(){
$('#relatedItemLoaderView').css({'display':'none'})
},15000);
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['showRelatedItemLoaderView__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.hideRelatedItemLoaderView__V = function() {
  var r = (function() {
$('#relatedItemLoaderView').css({'display':'none'});
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['hideRelatedItemLoaderView__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.showRelatedItemLoader__V = function() {
  var r = (function() {
$('.related-item-loader').css({'display':'block'})
setTimeout(function(){
$('.related-item-loader').css({'display':'none'})
},7000);
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['showRelatedItemLoader__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.hideRelatedItemLoader__V = function() {
  var r = (function() {
$('.related-item-loader').css({'display':'none'});
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['hideRelatedItemLoader__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.showContentEditLoader__V = function() {
  var r = (function() {
$('#content-edit-loader').css({'display':'block'})
setTimeout(function(){
$('#content-edit-loader').css({'display':'none'})
},10000);
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['showContentEditLoader__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.hideContentEditLoader__V = function() {
  var r = (function() {
$('#content-edit-loader').css({'display':'none'});
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['hideContentEditLoader__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.contentXMLParseAndFormFieldMake__VLjava_lang_String_2 = function() {
  var r = (function(text) {

  text = vm.java_lang_Class(false).toJS(text);setTimeout(function(){
processXMLContent(text);
}, 200);
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['contentXMLParseAndFormFieldMake__VLjava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.updateContentXML__VLjava_lang_String_2 = function() {
  var r = (function(contentLayoutId) {

  contentLayoutId = vm.java_lang_Class(false).toJS(contentLayoutId);var allElements = document.getElementsByClassName("contentInputField");  for (var i = 0; allElements.length > i; i++) {    updateXML(allElements[i]);  }function updateXML(element){  var v = $(element).val(); var dataValue = $(element).attr('data-value'); if ($(element).is('textarea')) {  v = tinymce.get($(element).attr('id')).getContent();}if(v === ''){ v = dataValue; }if(typeof v === 'undefined'){     v='';}v=v.trim();  var xpath = $(element).attr('xpath');$($xml).find('[xpath="'+xpath+'"]').text('<![CDATA['+v+']]>');}$($xml).find('[name="customPropContentLayoutId"]').children().last().text('<![CDATA['+contentLayoutId+']]>');
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['updateContentXML__VLjava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getCustomPropVal__Ljava_lang_String_2Ljava_lang_String_2 = function() {
  var r = (function(customPropName) {

  customPropName = vm.java_lang_Class(false).toJS(customPropName);return $($xml).find('[name='+customPropName+']').children().last().text();
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getCustomPropVal__Ljava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.setCustomPropVal__VLjava_lang_String_2Ljava_lang_String_2 = function() {
  var r = (function(customPropName,customPropVal) {

  customPropName = vm.java_lang_Class(false).toJS(customPropName);
  customPropVal = vm.java_lang_Class(false).toJS(customPropVal);$($xml).find('[name='+customPropName+']').children().last().empty();$($xml).find('[name='+customPropName+']').children().last().append($xml.createCDATASection(customPropVal));
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['setCustomPropVal__VLjava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getxmlString0__Ljava_lang_String_2 = function() {
  var r = (function() {
return $($xml).find('root').attr('available-locales');
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getxmlString0__Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getxmlString1__Ljava_lang_String_2 = function() {
  var r = (function() {
return $($xml).find('root').attr('default-locale');
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getxmlString1__Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getxmlString2__Ljava_lang_String_2 = function() {
  var r = (function() {
return getXml();
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getxmlString2__Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.processStructureXml__Ljava_lang_String_2Ljava_lang_String_2 = function() {
  var r = (function(xmlStucture) {

  xmlStucture = vm.java_lang_Class(false).toJS(xmlStucture);$xmlStucture = $.parseXML(xmlStucture);
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['processStructureXml__Ljava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.processPageLinkList__Ljava_lang_String_2Ljava_lang_String_2 = function() {
  var r = (function(pageList) {

  pageList = vm.java_lang_Class(false).toJS(pageList);pageLinkList = pageList;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['processPageLinkList__Ljava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.insertImage__V = function() {
  var r = (function() {
chooseImageByChooser();
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['insertImage__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.setContentToIframe__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2 = function() {
  var r = (function(hostname,pageUrl,content) {

  hostname = vm.java_lang_Class(false).toJS(hostname);
  pageUrl = vm.java_lang_Class(false).toJS(pageUrl);
  content = vm.java_lang_Class(false).toJS(content);$('#pageEditLoader').css({'display':'block'});var doc = document.getElementById("frame").contentDocument; 
doc.write(content);
doc.close();
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['setContentToIframe__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.setContentToRelatedIframe__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2 = function() {
  var r = (function(hostname,pageUrl,content) {

  hostname = vm.java_lang_Class(false).toJS(hostname);
  pageUrl = vm.java_lang_Class(false).toJS(pageUrl);
  content = vm.java_lang_Class(false).toJS(content);$('#pageEditLoader').css({'display':'block'});var doc = document.getElementById("related-frame").contentDocument; 
doc.write(content);
doc.close();
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['setContentToRelatedIframe__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.setContentToDiv__Ljava_lang_String_2Ljava_lang_String_2 = function() {
  var r = (function(content) {

  content = vm.java_lang_Class(false).toJS(content);$("#mailPreview").html("");$("#mailPreview").append(content);
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['setContentToDiv__Ljava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.showCalendarLoader__V = function() {
  var r = (function() {
$('#calendar-loader').show();
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['showCalendarLoader__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.showSlotEditPopup__V = function() {
  var r = (function() {
$('#slot-edit-popup').css({display:'block'});

}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['showSlotEditPopup__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.hideSlotEditPopup__V = function() {
  var r = (function() {
$('#slot-edit-popup').css({display:'none'});

}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['hideSlotEditPopup__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getPopupPositionTop__Ljava_lang_String_2Ljava_lang_String_2 = function() {
  var r = (function(id) {

  id = vm.java_lang_Class(false).toJS(id);var parentOffsetTop = $(".calendar-ui").offset().top;
var slotOffsetTop = $("#"+id).offset().top;
var popupTop = slotOffsetTop - parentOffsetTop;
return popupTop+'';

}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getPopupPositionTop__Ljava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getPopupPositionLeft__Ljava_lang_String_2Ljava_lang_String_2 = function() {
  var r = (function(id) {

  id = vm.java_lang_Class(false).toJS(id);var parentOffsetLeft = $(".calendar-ui").offset().left;
var slotOffsetLeft = $("#"+id).offset().left;
var popupLeft = slotOffsetLeft - parentOffsetLeft;
return popupLeft+'';

}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getPopupPositionLeft__Ljava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.hideEditBlock__V = function() {
  var r = (function() {
$('.dropdown-menu').css({display:'none'});

}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['hideEditBlock__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.showEditBlock__VLjava_lang_String_2 = function() {
  var r = (function(id) {

  id = vm.java_lang_Class(false).toJS(id);$("#"+id+".dropdown-menu").css({display:'block'});

}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['showEditBlock__VLjava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.changeInputWidth__V = function() {
  var r = (function() {
$('#search-box-input').width('100%');var searchboxitemcontainer = $('#item-container').width();
var searchboxinput = $('#search-box-input').width();
var inputWidth = searchboxinput-searchboxitemcontainer-5;
$('#search-box-input').css("width",inputWidth+'px');
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['changeInputWidth__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.showActionPerformLoader__V = function() {
  var r = (function() {
$('.action-loader').css({'display':'block'});
startProgress(70);
setTimeout(function(){
$('.action-loader').css({'display':'none'})
},10000);
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['showActionPerformLoader__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.hideActionPerformLoader__V = function() {
  var r = (function() {
document.getElementById('action-loader').style.display='none';
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['hideActionPerformLoader__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.showOverlayById__VLjava_lang_String_2 = function() {
  var r = (function(id) {

  id = vm.java_lang_Class(false).toJS(id);$("#"+id).show();

}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['showOverlayById__VLjava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.hideOverlayById__VLjava_lang_String_2 = function() {
  var r = (function(id) {

  id = vm.java_lang_Class(false).toJS(id);$("#"+id).hide();

}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['hideOverlayById__VLjava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.showOverlay__V = function() {
  var r = (function() {
$("#commonOverlay").show();

}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['showOverlay__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.hideOverlay__V = function() {
  var r = (function() {
$("#commonOverlay").hide();

}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['hideOverlay__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.showMessageBar__V = function() {
  var r = (function() {
$('.success-msg').css({'display':'none'});
$('.error-msg').css({'display':'none'});
$('#confirmation-message-bar').show().delay(3000).fadeOut();
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['showMessageBar__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.callCountryListService__V = function() {
  var r = (function() {
setTimeout(function(){ko.dataFor(document.body).countryDataProvider().callCountryListService();}, 15000);
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['callCountryListService__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.afterLogin__V = function() {
  var r = (function() {
setTimeout(function(){ko.dataFor(document.body).mainLayoutView().middleContainerView().loggedInUserDetails();}, 10);
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['afterLogin__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getNewMessageInfo__V = function() {
  var r = (function() {
ko.dataFor(document.body).mainLayoutView().messageInfo($('#message-input').text());
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getNewMessageInfo__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.constructCalendar__V = function() {
  var r = (function() {
setTimeout(function(){ko.dataFor(document.body).calendarView().constructDefault();}, 10000);
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['constructCalendar__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.reloadNavigationHistory__V = function() {
  var r = (function() {
setTimeout(function(){ko.dataFor(document.body).navigationView().reloadNavigationHistory();}, 6000);
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['reloadNavigationHistory__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.callFavoriteListService__V = function() {
  var r = (function() {
setTimeout(function(){ko.dataFor(document.body).favoriteView().getFavoriteCollections(ko.dataFor(document.body).favoriteView);}, 3000);
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['callFavoriteListService__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.reloadCollectionListService__V = function() {
  var r = (function() {
setTimeout(function(){ko.dataFor(document.body).collectionView().reloadCollectionByJSMethod();}, 3000);
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['reloadCollectionListService__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.appContextInit__V = function() {
  var r = (function() {
setTimeout(function(){ko.dataFor(document.body).init();}, 1);
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['appContextInit__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getCalenarJson__Ljava_lang_Object_2 = function() {
  var r = (function() {
return JSON.parse(JSON.stringify(calendarJSON));
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getCalenarJson__Ljava_lang_Object_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getApp__Ljava_lang_Object_2 = function() {
  var r = (function() {
return JSON.parse(JSON.stringify(app));
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getApp__Ljava_lang_Object_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.doBind__Ljava_lang_Object_2Ljava_lang_Object_2 = function() {
  var r = (function(viewmodel) {

  viewmodel = vm.java_lang_Class(false).toJS(viewmodel);return ko.applyBindings(viewmodel,{});
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['doBind__Ljava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getTempMessage__Ljava_lang_Object_2 = function() {
  var r = (function() {
return JSON.parse(JSON.stringify(tempMessage));
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getTempMessage__Ljava_lang_Object_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_String_2 = function() {
  var r = (function(varName) {

  varName = vm.java_lang_Class(false).toJS(varName);return JSON.parse(JSON.stringify(tempRecentConversation));
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getValue__Ljava_lang_Object_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getCompanyName__Ljava_lang_String_2 = function() {
  var r = (function() {
return companyName;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getCompanyName__Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getCompanyStylePath__Ljava_lang_String_2 = function() {
  var r = (function() {
return stylePath;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getCompanyStylePath__Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getCompanyLogoPath__Ljava_lang_String_2 = function() {
  var r = (function() {
return logoPath;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getCompanyLogoPath__Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.messageScrollToBottom__VI = function() {
  var r = (function(timeInSec) {

  timeInSec = vm.java_lang_Class(false).toJS(timeInSec);scrollMessegeToBottom(timeInSec);
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['messageScrollToBottom__VI'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.messageScrollBottomMainSearch__V = function() {
  var r = (function() {
setTimeout(function(){var height=$('.scrollDiv02').scrollHeight;$('.scrollDiv02').scrollTop(height+200)},0);
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['messageScrollBottomMainSearch__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.listSearchScrollBottomMainSearch__V = function() {
  var r = (function() {
setTimeout(function(){var height=$('.scrollDiv02').scrollHeight;$('.scrollDiv02').scrollTop(height)},0);
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['listSearchScrollBottomMainSearch__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.messageScrollTopChat__V = function() {
  var r = (function() {
setTimeout(function(){var height=$('.cus-col-lft').scrollHeight;$('.cus-col-lft').scrollTop(0)},0);
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['messageScrollTopChat__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getDefaultCountryName__Ljava_lang_String_2 = function() {
  var r = (function() {
return defaultCountryName;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getDefaultCountryName__Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getDefaultCountryCode__Ljava_lang_String_2 = function() {
  var r = (function() {
return defaultCountryCode;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getDefaultCountryCode__Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.timer__Ljava_lang_Object_2Ljava_lang_Runnable_2I = function() {
  var r = (function(runnable,time) {

  runnable = vm.java_lang_Class(false).toJS(runnable);
  time = vm.java_lang_Class(false).toJS(time);return window.setInterval(function() { vm.java_lang_Class(false).toJS(vm.io_cloudoffice_platform_cockpit_js_$JsCallbacks$(false)._VM().java_1lang_1Runnable$run$__Ljava_lang_Object_2Ljava_lang_Runnable_2(runnable)); }, time);
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['timer__Ljava_lang_Object_2Ljava_lang_Runnable_2I'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.stopNavigate__V = function() {
  var r = (function() {
window.onbeforeunload = function() {};
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['stopNavigate__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.loadNewChat__V = function() {
  var r = (function() {
setTimeout(function(){ko.dataFor(document.body).messageView().loadNewChat();}, 2000);
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['loadNewChat__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getSoftwareVersion__I = function() {
  var r = (function() {
return softwareVersion;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getSoftwareVersion__I'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.setCookie__VLjava_lang_String_2Ljava_lang_String_2 = function() {
  var r = (function(name,value) {

  name = vm.java_lang_Class(false).toJS(name);
  value = vm.java_lang_Class(false).toJS(value); var d = new Date();
    d.setTime(d.getTime() + (365*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = name + "=" + value + "; " + expires;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['setCookie__VLjava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.setCookie__VLjava_lang_String_2I = function() {
  var r = (function(name,value) {

  name = vm.java_lang_Class(false).toJS(name);
  value = vm.java_lang_Class(false).toJS(value); var d = new Date();
    d.setTime(d.getTime() + (365*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = name + "=" + value + "; " + expires;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['setCookie__VLjava_lang_String_2I'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getCookie__Ljava_lang_String_2Ljava_lang_String_2 = function() {
  var r = (function(cname) {

  cname = vm.java_lang_Class(false).toJS(cname);     var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getCookie__Ljava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.showNewVersionMsg__V = function() {
  var r = (function() {
$('#newversionmsg').show();
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['showNewVersionMsg__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.hideNewVersionMsg__V = function() {
  var r = (function() {
$('#newversionmsg').hide();
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['hideNewVersionMsg__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.hideSelectItemDropDown__V = function() {
  var r = (function() {
$('.dropDownList').hide();
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['hideSelectItemDropDown__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.setTimeOut__VI = function() {
  var r = (function(milli) {

  milli = vm.java_lang_Class(false).toJS(milli);setTimeout(function(){ location.reload(true); }, milli);

}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['setTimeOut__VI'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.setCreateMessageCaret__V = function() {
  var r = (function() {
 var el = document.getElementById("message-input");
  
    el.focus();
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['setCreateMessageCaret__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.isDebugOn__Z = function() {
  var r = (function() {
return debugOn;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['isDebugOn__Z'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.reloadPopoverListItem__V = function() {
  var r = (function() {
setTimeout(function(){ko.dataFor(document.body).mainLayoutView().actionMenu().selectedActionMenuItem().popover().popoverContent().reloadItemList();}, 10000);
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['reloadPopoverListItem__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.reloadSupportingTop__V = function() {
  var r = (function() {
setTimeout(function(){ko.dataFor(document.body).dynamicItemTopContainer().reloadSupportingTop();}, 1000);
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['reloadSupportingTop__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.reloadSupportingBottom__V = function() {
  var r = (function() {
setTimeout(function(){ko.dataFor(document.body).dynamicItemBottomContainer().reloadSupportingBottom();}, 2000);
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['reloadSupportingBottom__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.reloadSelectedContext__V = function() {
  var r = (function() {
setTimeout(function(){ko.dataFor(document.body).mainLayoutView().middleContainerView().reloadContextAfterRelateItemJSMethod();}, 3000);
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['reloadSelectedContext__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.setTopConversationActive__V = function() {
  var r = (function() {
setTimeout(function(){ko.dataFor(document.body).chatCollectionListView().setTopConversationActive();}, 2000);
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['setTopConversationActive__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.setTopConversationActiveAndSetToSearchBox__V = function() {
  var r = (function() {
setTimeout(function(){ko.dataFor(document.body).chatCollectionListView().setTopConversationActiveAndSetToSearchBox();}, 2000);
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['setTopConversationActiveAndSetToSearchBox__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.downloadFile__VLjava_lang_String_2 = function() {
  var r = (function(url) {

  url = vm.java_lang_Class(false).toJS(url);window.open(url, '_blank');
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['downloadFile__VLjava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getDefaultSiteId__Ljava_lang_String_2 = function() {
  var r = (function() {
return defaultSiteId;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getDefaultSiteId__Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.showComponentLoader__V = function() {
  var r = (function() {
$('.componentLoader').css({'display':'block'})
setTimeout(function(){
$('.componentLoader').css({'display':'none'})
},10000);
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['showComponentLoader__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.hideComponentLoader__V = function() {
  var r = (function() {
$('.componentLoader').css({'display':'none'});
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['hideComponentLoader__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.setContentLayoutId__VLjava_lang_String_2 = function() {
  var r = (function(contentLayoutId) {

  contentLayoutId = vm.java_lang_Class(false).toJS(contentLayoutId);$contentLayoutId = contentLayoutId;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['setContentLayoutId__VLjava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.richTextEditorFull__VLjava_lang_String_2 = function() {
  var r = (function(id) {

  id = vm.java_lang_Class(false).toJS(id);setTimeout(function(){
     richTextEditorFull(id);},1);
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['richTextEditorFull__VLjava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getRichTextEditorContent__Ljava_lang_String_2Ljava_lang_String_2 = function() {
  var r = (function(id) {

  id = vm.java_lang_Class(false).toJS(id);return tinymce.get(id).getContent();
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getRichTextEditorContent__Ljava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.clearRichTextEditorContent__Ljava_lang_String_2Ljava_lang_String_2 = function() {
  var r = (function(id) {

  id = vm.java_lang_Class(false).toJS(id);return tinymce.get(id).setContent('');
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['clearRichTextEditorContent__Ljava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.maxRichTextEditorToolbar__V = function() {
  var r = (function() {
$("div.mce-toolbar.mce-last").show();$("div.mce-toolbar.mce-first").hide();
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['maxRichTextEditorToolbar__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.minRichTextEditorToolbar__V = function() {
  var r = (function() {
$("div.mce-toolbar.mce-last").hide();$("div.mce-toolbar.mce-first").show();
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['minRichTextEditorToolbar__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.hide__VLjava_lang_String_2 = function() {
  var r = (function(id) {

  id = vm.java_lang_Class(false).toJS(id);$("#"+id).hide();

}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['hide__VLjava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.showAppLoader__V = function() {
  var r = (function() {
$('.appLoader').css({'display':'block'})
setTimeout(function(){
$('.appLoader').css({'display':'none'})
},10000);
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['showAppLoader__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.hideAppLoader__V = function() {
  var r = (function() {
$('.appLoader').css({'display':'none'});
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['hideAppLoader__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.showExportBlock__V = function() {
  var r = (function() {
$('.action-menu').css({'display':'none'});if($('#selectAll').css('display') == 'block'){$('#exportId').css('margin-left','265px');}else{$('#exportId').css('margin-left','105px');}$('#exportId').css({'display':'block'});
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['showExportBlock__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.hideExportBlock__V = function() {
  var r = (function() {
$('#exportId').css({'display':'none'});
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['hideExportBlock__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.openLeftSection__V = function() {
  var r = (function() {
openLeftSection();

}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['openLeftSection__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.openCenterSection__V = function() {
  var r = (function() {
openCenterSection();

}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['openCenterSection__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getTimeZoneFromProperties__Ljava_lang_String_2 = function() {
  var r = (function() {
return timeZone;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getTimeZoneFromProperties__Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.consoleTime__VLjava_lang_String_2 = function() {
  var r = (function(msg) {

  msg = vm.java_lang_Class(false).toJS(msg);console.log(msg +':'+new Date());

}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['consoleTime__VLjava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.workSpaceDefaultSelection__V = function() {
  var r = (function() {
setTimeout(function(){ko.dataFor(document.body).workspaceView().workSpaceDefaultSelection();}, 3000);
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['workSpaceDefaultSelection__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.uploadProgressStart__V = function() {
  var r = (function() {
uploadProgress();

}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['uploadProgressStart__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.uploadProgressEnd__V = function() {
  var r = (function() {
uploadProgressDone();

}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['uploadProgressEnd__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.showCustomMessegeLoader__V = function() {
  var r = (function() {
showCustomMessegeLoader();
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['showCustomMessegeLoader__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.hideCustomMessegeLoader__V = function() {
  var r = (function() {
hideCustomMessageLoader();
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['hideCustomMessegeLoader__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getGoogleSyncAuthUrl__Ljava_lang_String_2 = function() {
  var r = (function() {
return googleSyncAuthUrl;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getGoogleSyncAuthUrl__Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getGoogleSyncClientId__Ljava_lang_String_2 = function() {
  var r = (function() {
return googleSyncClientId;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getGoogleSyncClientId__Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getGoogleSyncScope__Ljava_lang_String_2 = function() {
  var r = (function() {
return googleSyncScope;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getGoogleSyncScope__Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getGoogleSyncResponseType__Ljava_lang_String_2 = function() {
  var r = (function() {
return googleSyncResponseType;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getGoogleSyncResponseType__Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.setBean__VLjava_lang_String_2Ljava_lang_String_2 = function() {
  var r = (function(id,bean) {

  id = vm.java_lang_Class(false).toJS(id);
  bean = vm.java_lang_Class(false).toJS(bean);if (!window.localStorage) return;
window.localStorage.setItem(id,JSON.stringify(bean));
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['setBean__VLjava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getBean__Ljava_lang_String_2Ljava_lang_String_2 = function() {
  var r = (function(id) {

  id = vm.java_lang_Class(false).toJS(id);if (!window.localStorage) return;

 return JSON.parse(window.localStorage.getItem(id));
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getBean__Ljava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.isProduction__Z = function() {
  var r = (function() {
return isProduction;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['isProduction__Z'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.setCompany__VLjava_lang_String_2 = function() {
  var r = (function(id) {

  id = vm.java_lang_Class(false).toJS(id);company=id;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['setCompany__VLjava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.setSite__VLjava_lang_String_2 = function() {
  var r = (function(id) {

  id = vm.java_lang_Class(false).toJS(id);site=id;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['setSite__VLjava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.setLayout__VLjava_lang_String_2 = function() {
  var r = (function(id) {

  id = vm.java_lang_Class(false).toJS(id);layout=id;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['setLayout__VLjava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getLayout__Ljava_lang_String_2 = function() {
  var r = (function() {
return layout;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getLayout__Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getPath__Ljava_lang_String_2 = function() {
  var r = (function() {
return path;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getPath__Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.setPath__Ljava_lang_String_2Ljava_lang_String_2 = function() {
  var r = (function(pathValue) {

  pathValue = vm.java_lang_Class(false).toJS(pathValue);path=pathValue;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['setPath__Ljava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getCompany__Ljava_lang_String_2 = function() {
  var r = (function() {
return company;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getCompany__Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getCompanyJSON__Ljava_lang_String_2 = function() {
  var r = (function() {
return companyJSON;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getCompanyJSON__Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getSite__Ljava_lang_String_2 = function() {
  var r = (function() {
return site;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getSite__Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getREPOURL__Ljava_lang_String_2 = function() {
  var r = (function() {
return repoURL;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getREPOURL__Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getHost__Ljava_lang_String_2 = function() {
  var r = (function() {
return window.location.host;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getHost__Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getDHost__Ljava_lang_String_2 = function() {
  var r = (function() {
return host;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getDHost__Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getServiceURL__Ljava_lang_String_2 = function() {
  var r = (function() {
return window.location.search.split("=")[1];
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getServiceURL__Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.redirect__Ljava_lang_String_2Ljava_lang_String_2 = function() {
  var r = (function(location) {

  location = vm.java_lang_Class(false).toJS(location);window.location.href=location;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['redirect__Ljava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getPlatformCompany__Ljava_lang_String_2 = function() {
  var r = (function() {
return platformCompany;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getPlatformCompany__Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getPlatformSite__Ljava_lang_String_2 = function() {
  var r = (function() {
return platformSite;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getPlatformSite__Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getPlatformBlankLayout__Ljava_lang_String_2 = function() {
  var r = (function() {
return blanklayout;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getPlatformBlankLayout__Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_js_JSUIUtilsfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_js_JSUIUtils', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_js_JSUIUtilsfillInstOf });
    io_cloudoffice_platform_cockpit_js_JSUIUtilsfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/js/JSUIUtils';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 49;
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
vm.io_cloudoffice_platform_cockpit_js_JSUIUtils = registerClass(exports,'io_cloudoffice_platform_cockpit_js_JSUIUtils',io_cloudoffice_platform_cockpit_js_JSUIUtils);


function io_cloudoffice_platform_cockpit_js_LocalStorage() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_js_LocalStorage;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_$$fn$$setBean_1'] = null;
  m = c._$$fn$$setBean_1 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$setBean_1'] = v; return CLS['fld_$$fn$$setBean_1']; };
  CLS['fld_$$fn$$remove_2'] = null;
  m = c._$$fn$$remove_2 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$remove_2'] = v; return CLS['fld_$$fn$$remove_2']; };
  CLS['fld_$$fn$$getBean_3'] = null;
  m = c._$$fn$$getBean_3 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getBean_3'] = v; return CLS['fld_$$fn$$getBean_3']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setBean__VLjava_lang_String_2Ljava_lang_String_2 = function() {
  var r = (function(id,bean) {

  id = vm.java_lang_Class(false).toJS(id);
  bean = vm.java_lang_Class(false).toJS(bean);if (!window.localStorage) return;
window.localStorage.setItem(id,JSON.stringify(bean));
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['setBean__VLjava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.remove__VLjava_lang_String_2 = function() {
  var r = (function(id) {

  id = vm.java_lang_Class(false).toJS(id);if (!window.localStorage) return;
window.localStorage.removeItem(id);
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['remove__VLjava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getBean__Ljava_lang_String_2Ljava_lang_String_2 = function() {
  var r = (function(id) {

  id = vm.java_lang_Class(false).toJS(id);if (!window.localStorage) return;
if(null!==window.localStorage.getItem(id)){
 return JSON.parse(window.localStorage.getItem(id))}else{return null;};
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getBean__Ljava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_js_LocalStoragefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_js_LocalStorage', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_js_LocalStoragefillInstOf });
    io_cloudoffice_platform_cockpit_js_LocalStoragefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/js/LocalStorage';
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
vm.io_cloudoffice_platform_cockpit_js_LocalStorage = registerClass(exports,'io_cloudoffice_platform_cockpit_js_LocalStorage',io_cloudoffice_platform_cockpit_js_LocalStorage);


function io_cloudoffice_platform_cockpit_js_MomentJS() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_js_MomentJS;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_$$fn$$locale_1'] = null;
  m = c._$$fn$$locale_1 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$locale_1'] = v; return CLS['fld_$$fn$$locale_1']; };
  CLS['fld_$$fn$$getCurrentUnixTime_2'] = null;
  m = c._$$fn$$getCurrentUnixTime_2 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getCurrentUnixTime_2'] = v; return CLS['fld_$$fn$$getCurrentUnixTime_2']; };
  CLS['fld_$$fn$$canExecute_3'] = null;
  m = c._$$fn$$canExecute_3 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$canExecute_3'] = v; return CLS['fld_$$fn$$canExecute_3']; };
  CLS['fld_$$fn$$getWeeksInYear_4'] = null;
  m = c._$$fn$$getWeeksInYear_4 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getWeeksInYear_4'] = v; return CLS['fld_$$fn$$getWeeksInYear_4']; };
  CLS['fld_$$fn$$getYear_5'] = null;
  m = c._$$fn$$getYear_5 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getYear_5'] = v; return CLS['fld_$$fn$$getYear_5']; };
  CLS['fld_$$fn$$registerComponent_6'] = null;
  m = c._$$fn$$registerComponent_6 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$registerComponent_6'] = v; return CLS['fld_$$fn$$registerComponent_6']; };
  CLS['fld_$$fn$$getMonth_7'] = null;
  m = c._$$fn$$getMonth_7 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getMonth_7'] = v; return CLS['fld_$$fn$$getMonth_7']; };
  CLS['fld_$$fn$$getMonth_8'] = null;
  m = c._$$fn$$getMonth_8 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getMonth_8'] = v; return CLS['fld_$$fn$$getMonth_8']; };
  CLS['fld_$$fn$$getDayOfMonth_9'] = null;
  m = c._$$fn$$getDayOfMonth_9 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getDayOfMonth_9'] = v; return CLS['fld_$$fn$$getDayOfMonth_9']; };
  CLS['fld_$$fn$$getDayOfMonth_10'] = null;
  m = c._$$fn$$getDayOfMonth_10 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getDayOfMonth_10'] = v; return CLS['fld_$$fn$$getDayOfMonth_10']; };
  CLS['fld_$$fn$$getDayOfMonth_11'] = null;
  m = c._$$fn$$getDayOfMonth_11 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getDayOfMonth_11'] = v; return CLS['fld_$$fn$$getDayOfMonth_11']; };
  CLS['fld_$$fn$$getDayOfWeek_12'] = null;
  m = c._$$fn$$getDayOfWeek_12 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getDayOfWeek_12'] = v; return CLS['fld_$$fn$$getDayOfWeek_12']; };
  CLS['fld_$$fn$$getDayOfWeek_13'] = null;
  m = c._$$fn$$getDayOfWeek_13 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getDayOfWeek_13'] = v; return CLS['fld_$$fn$$getDayOfWeek_13']; };
  CLS['fld_$$fn$$getDayOfweek_14'] = null;
  m = c._$$fn$$getDayOfweek_14 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getDayOfweek_14'] = v; return CLS['fld_$$fn$$getDayOfweek_14']; };
  CLS['fld_$$fn$$getWeek_15'] = null;
  m = c._$$fn$$getWeek_15 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getWeek_15'] = v; return CLS['fld_$$fn$$getWeek_15']; };
  CLS['fld_$$fn$$getWeek_16'] = null;
  m = c._$$fn$$getWeek_16 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getWeek_16'] = v; return CLS['fld_$$fn$$getWeek_16']; };
  CLS['fld_$$fn$$getWeek_17'] = null;
  m = c._$$fn$$getWeek_17 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getWeek_17'] = v; return CLS['fld_$$fn$$getWeek_17']; };
  CLS['fld_$$fn$$changeCss_18'] = null;
  m = c._$$fn$$changeCss_18 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$changeCss_18'] = v; return CLS['fld_$$fn$$changeCss_18']; };
  CLS['fld_$$fn$$getTime_19'] = null;
  m = c._$$fn$$getTime_19 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getTime_19'] = v; return CLS['fld_$$fn$$getTime_19']; };
  CLS['fld_$$fn$$getCurrent_20'] = null;
  m = c._$$fn$$getCurrent_20 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getCurrent_20'] = v; return CLS['fld_$$fn$$getCurrent_20']; };
  CLS['fld_$$fn$$getTomorrow_21'] = null;
  m = c._$$fn$$getTomorrow_21 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getTomorrow_21'] = v; return CLS['fld_$$fn$$getTomorrow_21']; };
  CLS['fld_$$fn$$getFormatedTime_22'] = null;
  m = c._$$fn$$getFormatedTime_22 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getFormatedTime_22'] = v; return CLS['fld_$$fn$$getFormatedTime_22']; };
  CLS['fld_$$fn$$isFutureDate_23'] = null;
  m = c._$$fn$$isFutureDate_23 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$isFutureDate_23'] = v; return CLS['fld_$$fn$$isFutureDate_23']; };
  CLS['fld_$$fn$$formatDate_24'] = null;
  m = c._$$fn$$formatDate_24 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$formatDate_24'] = v; return CLS['fld_$$fn$$formatDate_24']; };
  CLS['fld_$$fn$$getFutureDate_25'] = null;
  m = c._$$fn$$getFutureDate_25 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getFutureDate_25'] = v; return CLS['fld_$$fn$$getFutureDate_25']; };
  CLS['fld_$$fn$$isToday_26'] = null;
  m = c._$$fn$$isToday_26 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$isToday_26'] = v; return CLS['fld_$$fn$$isToday_26']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.locale__V = function() {
  var r = (function() {
moment.locale('nl', {
    months : "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
    monthsShort : "jan._feb._mrt_apr._mei_jun_jul._aug_sep._okt._nov._dec.".split("_"),
    weekdays : "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
    weekdaysShort : "	zo._ma._di._wo._do._vr._za.".split("_"),
    weekdaysMin : "zo_ma_di_wo_do_vr_za".split("_"),
    longDateFormat : {
        LT : "HH:mm",
        LTS : "HH:mm:ss",
        L : "DD/MM/YYYY",
        LL : "D MMMM YYYY",
        LLL : "D MMMM YYYY LT",
        LLLL : "dddd D MMMM YYYY LT"
    },
    calendar : {
        sameDay: "[vandaag] LT",
        nextDay: '[morgen] LT',
        nextWeek: 'dddd [naar] LT',
        lastDay: '[gisteren op] LT',
        lastWeek: 'dddd [laatste] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : "in %s",
        past : "er %s",
        s : "seconden",
        m : "een minuut",
        mm : "%d notulen",
        h : "één uur",
        hh : "%d uur",
        d : "op zekere dag",
        dd : "%d dagen",
        M : "één maand",
        MM : "%d maand",
        y : "een jaar",
        yy : "%d jaar"
    },
    ordinalParse : /\d{1,2}(er|ème)/,
    ordinal : function (number) {
        return number + (number === 1 ? 'er' : 'ème');
    },
    meridiemParse: /AM|PM/,
    isPM: function (input) {
        return input.charAt(0) === 'M';
    },
    // in case the meridiem units are not separated around 12, then implement
    // this function (look at locale/id.js for an example)
    // meridiemHour : function (hour, meridiem) {
    //     return /* 0-23 hour, given meridiem token and hour 1-12 */
    // },
    meridiem : function (hours, minutes, isLower) {
        return hours < 12 ? 'AM' : 'PM';
    }
});
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['locale__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getCurrentUnixTime__J = function() {
  var r = (function() {
return moment().valueOf();
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getCurrentUnixTime__J'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.canExecute__ZJI = function() {
  var r = (function(oldtime,duration) {

  oldtime = vm.java_lang_Class(false).toJS(oldtime);
  duration = vm.java_lang_Class(false).toJS(duration);return moment(oldtime).add(duration,'seconds').valueOf()<=moment().valueOf();
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['canExecute__ZJI'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getWeeksInYear__II = function() {
  var r = (function(yearId) {

  yearId = vm.java_lang_Class(false).toJS(yearId);var weeknumber=moment().set('year', yearId).weeksInYear();
return weeknumber;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getWeeksInYear__II'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getYear__I = function() {
  var r = (function() {
var curyear=moment();
return curyear.year();
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getYear__I'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.registerComponent__V = function() {
  var r = (function() {

}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['registerComponent__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getMonth__I = function() {
  var r = (function() {
return moment().month();

}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getMonth__I'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getMonth__IIII = function() {
  var r = (function(yearId,weekId,dayofweek) {

  yearId = vm.java_lang_Class(false).toJS(yearId);
  weekId = vm.java_lang_Class(false).toJS(weekId);
  dayofweek = vm.java_lang_Class(false).toJS(dayofweek);var curMonth=moment().year(yearId).week(weekId).day(dayofweek);
var curMonth1=moment(curMonth).month();
return curMonth1;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getMonth__IIII'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getDayOfMonth__I = function() {
  var r = (function() {
var currentDay=moment().date();
return currentDay;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getDayOfMonth__I'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getDayOfMonth__ILjava_lang_String_2 = function() {
  var r = (function(date) {

  date = vm.java_lang_Class(false).toJS(date);var date = new Date(moment(date,'DD-MM-YYYY'));
var value=moment(date).date();
return value;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getDayOfMonth__ILjava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getDayOfMonth__IIIII = function() {
  var r = (function(yearId,monthId,weekId,dayofweek) {

  yearId = vm.java_lang_Class(false).toJS(yearId);
  monthId = vm.java_lang_Class(false).toJS(monthId);
  weekId = vm.java_lang_Class(false).toJS(weekId);
  dayofweek = vm.java_lang_Class(false).toJS(dayofweek);var curday=moment().year(yearId).month(monthId).week(weekId).day(dayofweek);
return curday.date();
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getDayOfMonth__IIIII'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getDayOfWeek__I = function() {
  var r = (function() {
var currentDay=moment().isoWeekday();
return currentDay;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getDayOfWeek__I'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getDayOfWeek__ILjava_lang_String_2 = function() {
  var r = (function(date) {

  date = vm.java_lang_Class(false).toJS(date);var date = new Date(moment(date,'DD-MM-YYYY'));
var value=moment(date).isoWeekday();
return value;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getDayOfWeek__ILjava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getDayOfweek__IIII = function() {
  var r = (function(yearId,monthId,dateId) {

  yearId = vm.java_lang_Class(false).toJS(yearId);
  monthId = vm.java_lang_Class(false).toJS(monthId);
  dateId = vm.java_lang_Class(false).toJS(dateId);var date = moment().year(yearId).month(monthId).date(dateId);
var value=moment(date).isoWeekday();
return value;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getDayOfweek__IIII'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getWeek__ILjava_lang_String_2 = function() {
  var r = (function(date) {

  date = vm.java_lang_Class(false).toJS(date);var date = new Date(moment(date,'DD-MM-YYYY'));
return moment(date).isoWeek();

}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getWeek__ILjava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getWeek__I = function() {
  var r = (function() {
return moment().isoWeek();
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getWeek__I'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getWeek__IIII = function() {
  var r = (function(yearId,monthId,dateId) {

  yearId = vm.java_lang_Class(false).toJS(yearId);
  monthId = vm.java_lang_Class(false).toJS(monthId);
  dateId = vm.java_lang_Class(false).toJS(dateId);var curWeek=moment().year(yearId).month(monthId).date(dateId);
return curWeek.isoWeek();
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getWeek__IIII'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.changeCss__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2 = function() {
  var r = (function(id,css) {

  id = vm.java_lang_Class(false).toJS(id);
  css = vm.java_lang_Class(false).toJS(css);$('#110').removeClass('slot-30m-top').addClass('free-time');
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['changeCss__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getTime__Ljava_lang_String_2ILjava_lang_String_2 = function() {
  var r = (function(hourId,minuteId) {

  hourId = vm.java_lang_Class(false).toJS(hourId);
  minuteId = vm.java_lang_Class(false).toJS(minuteId);var time=moment('"'+hourId+minuteId+'"', 'hmm').format('HH:mm');
return time;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getTime__Ljava_lang_String_2ILjava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getCurrent__Ljava_lang_String_2Ljava_lang_String_2 = function() {
  var r = (function(format) {

  format = vm.java_lang_Class(false).toJS(format);var currentDate = moment().format(format);
return currentDate;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getCurrent__Ljava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getTomorrow__Ljava_lang_String_2Ljava_lang_String_2 = function() {
  var r = (function(format) {

  format = vm.java_lang_Class(false).toJS(format);var today = moment();
var tomorrow = today.add(1, 'days');
return tomorrow.format(format);
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getTomorrow__Ljava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getFormatedTime__Ljava_lang_String_2JLjava_lang_String_2 = function() {
  var r = (function(time,format) {

  time = vm.java_lang_Class(false).toJS(time);
  format = vm.java_lang_Class(false).toJS(format);var currentDate = moment(time).format(format);
return currentDate;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getFormatedTime__Ljava_lang_String_2JLjava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.isFutureDate__ZLjava_lang_String_2Ljava_lang_String_2 = function() {
  var r = (function(date,format) {

  date = vm.java_lang_Class(false).toJS(date);
  format = vm.java_lang_Class(false).toJS(format);var SpecialTo = moment(date, format);
if (moment().diff(SpecialTo, 'days') <=0) {
    return true;
} else {
    return false;
} return false;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['isFutureDate__ZLjava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.formatDate__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2 = function() {
  var r = (function(date,currentFormat,desiredFormat) {

  date = vm.java_lang_Class(false).toJS(date);
  currentFormat = vm.java_lang_Class(false).toJS(currentFormat);
  desiredFormat = vm.java_lang_Class(false).toJS(desiredFormat);var currentDate = moment(date, currentFormat).format(desiredFormat);
return currentDate;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['formatDate__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getFutureDate__Ljava_lang_String_2ILjava_lang_String_2Ljava_lang_String_2 = function() {
  var r = (function(increment,type,format) {

  increment = vm.java_lang_Class(false).toJS(increment);
  type = vm.java_lang_Class(false).toJS(type);
  format = vm.java_lang_Class(false).toJS(format);var currentDate = moment().add(increment, type) .format(format);
return currentDate;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getFutureDate__Ljava_lang_String_2ILjava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.isToday__ZLjava_lang_String_2 = function() {
  var r = (function(timeInMS) {

  timeInMS = vm.java_lang_Class(false).toJS(timeInMS);var isSameDay = moment(Number(timeInMS)).isSame(moment(), 'day');
return isSameDay;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['isToday__ZLjava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_js_MomentJSfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_js_MomentJS', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_js_MomentJSfillInstOf });
    io_cloudoffice_platform_cockpit_js_MomentJSfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/js/MomentJS';
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
vm.io_cloudoffice_platform_cockpit_js_MomentJS = registerClass(exports,'io_cloudoffice_platform_cockpit_js_MomentJS',io_cloudoffice_platform_cockpit_js_MomentJS);


function io_cloudoffice_platform_cockpit_js_StompWS() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_js_StompWS;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_$$fn$$init_1'] = null;
  m = c._$$fn$$init_1 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$init_1'] = v; return CLS['fld_$$fn$$init_1']; };
  CLS['fld_$$fn$$connect_2'] = null;
  m = c._$$fn$$connect_2 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$connect_2'] = v; return CLS['fld_$$fn$$connect_2']; };
  CLS['fld_$$fn$$connected_3'] = null;
  m = c._$$fn$$connected_3 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$connected_3'] = v; return CLS['fld_$$fn$$connected_3']; };
  CLS['fld_$$fn$$disconnect_4'] = null;
  m = c._$$fn$$disconnect_4 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$disconnect_4'] = v; return CLS['fld_$$fn$$disconnect_4']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.init__V = function() {
  var r = (function() {
client={}
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['init__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.connect__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2 = function() {
  var r = (function(url,dest,username,pass) {

  url = vm.java_lang_Class(false).toJS(url);
  dest = vm.java_lang_Class(false).toJS(dest);
  username = vm.java_lang_Class(false).toJS(username);
  pass = vm.java_lang_Class(false).toJS(pass); WS.connect(url,dest,username,pass);
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['connect__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.connected__Z = function() {
  var r = (function() {
 return WS.status();
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['connected__Z'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.disconnect__Z = function() {
  var r = (function() {
 return WS.disconnect();
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['disconnect__Z'] = m;

    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_js_StompWSfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_js_StompWS', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_js_StompWSfillInstOf });
    io_cloudoffice_platform_cockpit_js_StompWSfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/js/StompWS';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
// resource from io/cloudoffice/platform/cockpit/js/stomp.js

(0 || eval)("// Generated by CoffeeScript 1.7.1\n"
 + "\n"
 + "/*\n"
 + "   Stomp Over WebSocket http://www.jmesnil.net/stomp-websocket/doc/ | Apache License V2.0\n"
 + "\n"
 + "   Copyright (C) 2010-2013 [Jeff Mesnil](http://jmesnil.net/)\n"
 + "   Copyright (C) 2012 [FuseSource, Inc.](http://fusesource.com)\n"
 + " */\n"
 + "\n"
 + "(function() {\n"
 + "  var Byte, Client, Frame, Stomp,\n"
 + "    __hasProp = {}.hasOwnProperty,\n"
 + "    __slice = [].slice;\n"
 + "\n"
 + "  Byte = {\n"
 + "    LF: '\\x0A',\n"
 + "    NULL: '\\x00'\n"
 + "  };\n"
 + "\n"
 + "  Frame = (function() {\n"
 + "    var unmarshallSingle;\n"
 + "\n"
 + "    function Frame(command, headers, body) {\n"
 + "      this.command = command;\n"
 + "      this.headers = headers != null ? headers : {};\n"
 + "      this.body = body != null ? body : '';\n"
 + "    }\n"
 + "\n"
 + "    Frame.prototype.toString = function() {\n"
 + "      var lines, name, skipContentLength, value, _ref;\n"
 + "      lines = [this.command];\n"
 + "      skipContentLength = this.headers['content-length'] === false ? true : false;\n"
 + "      if (skipContentLength) {\n"
 + "        delete this.headers['content-length'];\n"
 + "      }\n"
 + "      _ref = this.headers;\n"
 + "      for (name in _ref) {\n"
 + "        if (!__hasProp.call(_ref, name)) continue;\n"
 + "        value = _ref[name];\n"
 + "        lines.push(\"\" + name + \":\" + value);\n"
 + "      }\n"
 + "      if (this.body && !skipContentLength) {\n"
 + "        lines.push(\"content-length:\" + (Frame.sizeOfUTF8(this.body)));\n"
 + "      }\n"
 + "      lines.push(Byte.LF + this.body);\n"
 + "      return lines.join(Byte.LF);\n"
 + "    };\n"
 + "\n"
 + "    Frame.sizeOfUTF8 = function(s) {\n"
 + "      if (s) {\n"
 + "        return encodeURI(s).match(/%..|./g).length;\n"
 + "      } else {\n"
 + "        return 0;\n"
 + "      }\n"
 + "    };\n"
 + "\n"
 + "    unmarshallSingle = function(data) {\n"
 + "      var body, chr, command, divider, headerLines, headers, i, idx, len, line, start, trim, _i, _j, _len, _ref, _ref1;\n"
 + "      divider = data.search(RegExp(\"\" + Byte.LF + Byte.LF));\n"
 + "      headerLines = data.substring(0, divider).split(Byte.LF);\n"
 + "      command = headerLines.shift();\n"
 + "      headers = {};\n"
 + "      trim = function(str) {\n"
 + "        return str.replace(/^\\s+|\\s+$/g, '');\n"
 + "      };\n"
 + "      _ref = headerLines.reverse();\n"
 + "      for (_i = 0, _len = _ref.length; _i < _len; _i++) {\n"
 + "        line = _ref[_i];\n"
 + "        idx = line.indexOf(':');\n"
 + "        headers[trim(line.substring(0, idx))] = trim(line.substring(idx + 1));\n"
 + "      }\n"
 + "      body = '';\n"
 + "      start = divider + 2;\n"
 + "      if (headers['content-length']) {\n"
 + "        len = parseInt(headers['content-length']);\n"
 + "        body = ('' + data).substring(start, start + len);\n"
 + "      } else {\n"
 + "        chr = null;\n"
 + "        for (i = _j = start, _ref1 = data.length; start <= _ref1 ? _j < _ref1 : _j > _ref1; i = start <= _ref1 ? ++_j : --_j) {\n"
 + "          chr = data.charAt(i);\n"
 + "          if (chr === Byte.NULL) {\n"
 + "            break;\n"
 + "          }\n"
 + "          body += chr;\n"
 + "        }\n"
 + "      }\n"
 + "      return new Frame(command, headers, body);\n"
 + "    };\n"
 + "\n"
 + "    Frame.unmarshall = function(datas) {\n"
 + "      var data;\n"
 + "      return (function() {\n"
 + "        var _i, _len, _ref, _results;\n"
 + "        _ref = datas.split(RegExp(\"\" + Byte.NULL + Byte.LF + \"*\"));\n"
 + "        _results = [];\n"
 + "        for (_i = 0, _len = _ref.length; _i < _len; _i++) {\n"
 + "          data = _ref[_i];\n"
 + "          if ((data != null ? data.length : void 0) > 0) {\n"
 + "            _results.push(unmarshallSingle(data));\n"
 + "          }\n"
 + "        }\n"
 + "        return _results;\n"
 + "      })();\n"
 + "    };\n"
 + "\n"
 + "    Frame.marshall = function(command, headers, body) {\n"
 + "      var frame;\n"
 + "      frame = new Frame(command, headers, body);\n"
 + "      return frame.toString() + Byte.NULL;\n"
 + "    };\n"
 + "\n"
 + "    return Frame;\n"
 + "\n"
 + "  })();\n"
 + "\n"
 + "  Client = (function() {\n"
 + "    var now;\n"
 + "\n"
 + "    function Client(ws) {\n"
 + "      this.ws = ws;\n"
 + "      this.ws.binaryType = \"arraybuffer\";\n"
 + "      this.counter = 0;\n"
 + "      this.connected = false;\n"
 + "      this.heartbeat = {\n"
 + "        outgoing: 10000,\n"
 + "        incoming: 10000\n"
 + "      };\n"
 + "      this.maxWebSocketFrameSize = 16 * 1024;\n"
 + "      this.subscriptions = {};\n"
 + "    }\n"
 + "\n"
 + "    Client.prototype.debug = function(message) {\n"
 + "      var _ref;\n"
 + "      return typeof window !== \"undefined\" && window !== null ? (_ref = window.console) != null ? _ref.log(message) : void 0 : void 0;\n"
 + "    };\n"
 + "\n"
 + "    now = function() {\n"
 + "      if (Date.now) {\n"
 + "        return Date.now();\n"
 + "      } else {\n"
 + "        return new Date().valueOf;\n"
 + "      }\n"
 + "    };\n"
 + "\n"
 + "    Client.prototype._transmit = function(command, headers, body) {\n"
 + "      var out;\n"
 + "      out = Frame.marshall(command, headers, body);\n"
 + "      if (typeof this.debug === \"function\") {\n"
 + "        this.debug(\">>> \" + out);\n"
 + "      }\n"
 + "      while (true) {\n"
 + "        if (out.length > this.maxWebSocketFrameSize) {\n"
 + "          this.ws.send(out.substring(0, this.maxWebSocketFrameSize));\n"
 + "          out = out.substring(this.maxWebSocketFrameSize);\n"
 + "          if (typeof this.debug === \"function\") {\n"
 + "            this.debug(\"remaining = \" + out.length);\n"
 + "          }\n"
 + "        } else {\n"
 + "          return this.ws.send(out);\n"
 + "        }\n"
 + "      }\n"
 + "    };\n"
 + "\n"
 + "    Client.prototype._setupHeartbeat = function(headers) {\n"
 + "      var serverIncoming, serverOutgoing, ttl, v, _ref, _ref1;\n"
 + "      if ((_ref = headers.version) !== Stomp.VERSIONS.V1_1 && _ref !== Stomp.VERSIONS.V1_2) {\n"
 + "        return;\n"
 + "      }\n"
 + "      _ref1 = (function() {\n"
 + "        var _i, _len, _ref1, _results;\n"
 + "        _ref1 = headers['heart-beat'].split(\",\");\n"
 + "        _results = [];\n"
 + "        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n"
 + "          v = _ref1[_i];\n"
 + "          _results.push(parseInt(v));\n"
 + "        }\n"
 + "        return _results;\n"
 + "      })(), serverOutgoing = _ref1[0], serverIncoming = _ref1[1];\n"
 + "      if (!(this.heartbeat.outgoing === 0 || serverIncoming === 0)) {\n"
 + "        ttl = Math.max(this.heartbeat.outgoing, serverIncoming);\n"
 + "        if (typeof this.debug === \"function\") {\n"
 + "          this.debug(\"send PING every \" + ttl + \"ms\");\n"
 + "        }\n"
 + "        this.pinger = Stomp.setInterval(ttl, (function(_this) {\n"
 + "          return function() {\n"
 + "            _this.ws.send(Byte.LF);\n"
 + "            return typeof _this.debug === \"function\" ? _this.debug(\">>> PING\") : void 0;\n"
 + "          };\n"
 + "        })(this));\n"
 + "      }\n"
 + "      if (!(this.heartbeat.incoming === 0 || serverOutgoing === 0)) {\n"
 + "        ttl = Math.max(this.heartbeat.incoming, serverOutgoing);\n"
 + "        if (typeof this.debug === \"function\") {\n"
 + "          this.debug(\"check PONG every \" + ttl + \"ms\");\n"
 + "        }\n"
 + "        return this.ponger = Stomp.setInterval(ttl, (function(_this) {\n"
 + "          return function() {\n"
 + "            var delta;\n"
 + "            delta = now() - _this.serverActivity;\n"
 + "            if (delta > ttl * 2) {\n"
 + "              if (typeof _this.debug === \"function\") {\n"
 + "                _this.debug(\"did not receive server activity for the last \" + delta + \"ms\");\n"
 + "              }\n"
 + "              return _this.ws.close();\n"
 + "            }\n"
 + "          };\n"
 + "        })(this));\n"
 + "      }\n"
 + "    };\n"
 + "\n"
 + "    Client.prototype._parseConnect = function() {\n"
 + "      var args, connectCallback, errorCallback, headers;\n"
 + "      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];\n"
 + "      headers = {};\n"
 + "      switch (args.length) {\n"
 + "        case 2:\n"
 + "          headers = args[0], connectCallback = args[1];\n"
 + "          break;\n"
 + "        case 3:\n"
 + "          if (args[1] instanceof Function) {\n"
 + "            headers = args[0], connectCallback = args[1], errorCallback = args[2];\n"
 + "          } else {\n"
 + "            headers.login = args[0], headers.passcode = args[1], connectCallback = args[2];\n"
 + "          }\n"
 + "          break;\n"
 + "        case 4:\n"
 + "          headers.login = args[0], headers.passcode = args[1], connectCallback = args[2], errorCallback = args[3];\n"
 + "          break;\n"
 + "        default:\n"
 + "          headers.login = args[0], headers.passcode = args[1], connectCallback = args[2], errorCallback = args[3], headers.host = args[4];\n"
 + "      }\n"
 + "      return [headers, connectCallback, errorCallback];\n"
 + "    };\n"
 + "\n"
 + "    Client.prototype.connect = function() {\n"
 + "      var args, errorCallback, headers, out;\n"
 + "      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];\n"
 + "      out = this._parseConnect.apply(this, args);\n"
 + "      headers = out[0], this.connectCallback = out[1], errorCallback = out[2];\n"
 + "      if (typeof this.debug === \"function\") {\n"
 + "        this.debug(\"Opening Web Socket...\");\n"
 + "      }\n"
 + "      this.ws.onmessage = (function(_this) {\n"
 + "        return function(evt) {\n"
 + "          var arr, c, client, data, frame, messageID, onreceive, subscription, _i, _len, _ref, _results;\n"
 + "          data = typeof ArrayBuffer !== 'undefined' && evt.data instanceof ArrayBuffer ? (arr = new Uint8Array(evt.data), typeof _this.debug === \"function\" ? _this.debug(\"--- got data length: \" + arr.length) : void 0, ((function() {\n"
 + "            var _i, _len, _results;\n"
 + "            _results = [];\n"
 + "            for (_i = 0, _len = arr.length; _i < _len; _i++) {\n"
 + "              c = arr[_i];\n"
 + "              _results.push(String.fromCharCode(c));\n"
 + "            }\n"
 + "            return _results;\n"
 + "          })()).join('')) : evt.data;\n"
 + "          _this.serverActivity = now();\n"
 + "          if (data === Byte.LF) {\n"
 + "            if (typeof _this.debug === \"function\") {\n"
 + "              _this.debug(\"<<< PONG\");\n"
 + "            }\n"
 + "            return;\n"
 + "          }\n"
 + "          if (typeof _this.debug === \"function\") {\n"
 + "            _this.debug(\"<<< \" + data);\n"
 + "          }\n"
 + "          _ref = Frame.unmarshall(data);\n"
 + "          _results = [];\n"
 + "          for (_i = 0, _len = _ref.length; _i < _len; _i++) {\n"
 + "            frame = _ref[_i];\n"
 + "            switch (frame.command) {\n"
 + "              case \"CONNECTED\":\n"
 + "                if (typeof _this.debug === \"function\") {\n"
 + "                  _this.debug(\"connected to server \" + frame.headers.server);\n"
 + "                }\n"
 + "                _this.connected = true;\n"
 + "                _this._setupHeartbeat(frame.headers);\n"
 + "                _results.push(typeof _this.connectCallback === \"function\" ? _this.connectCallback(frame) : void 0);\n"
 + "                break;\n"
 + "              case \"MESSAGE\":\n"
 + "                subscription = frame.headers.subscription;\n"
 + "                onreceive = _this.subscriptions[subscription] || _this.onreceive;\n"
 + "                if (onreceive) {\n"
 + "                  client = _this;\n"
 + "                  messageID = frame.headers[\"message-id\"];\n"
 + "                  frame.ack = function(headers) {\n"
 + "                    if (headers == null) {\n"
 + "                      headers = {};\n"
 + "                    }\n"
 + "                    return client.ack(messageID, subscription, headers);\n"
 + "                  };\n"
 + "                  frame.nack = function(headers) {\n"
 + "                    if (headers == null) {\n"
 + "                      headers = {};\n"
 + "                    }\n"
 + "                    return client.nack(messageID, subscription, headers);\n"
 + "                  };\n"
 + "                  _results.push(onreceive(frame));\n"
 + "                } else {\n"
 + "                  _results.push(typeof _this.debug === \"function\" ? _this.debug(\"Unhandled received MESSAGE: \" + frame) : void 0);\n"
 + "                }\n"
 + "                break;\n"
 + "              case \"RECEIPT\":\n"
 + "                _results.push(typeof _this.onreceipt === \"function\" ? _this.onreceipt(frame) : void 0);\n"
 + "                break;\n"
 + "              case \"ERROR\":\n"
 + "                _results.push(typeof errorCallback === \"function\" ? errorCallback(frame) : void 0);\n"
 + "                break;\n"
 + "              default:\n"
 + "                _results.push(typeof _this.debug === \"function\" ? _this.debug(\"Unhandled frame: \" + frame) : void 0);\n"
 + "            }\n"
 + "          }\n"
 + "          return _results;\n"
 + "        };\n"
 + "      })(this);\n"
 + "      this.ws.onclose = (function(_this) {\n"
 + "        return function() {\n"
 + "          var msg;\n"
 + "          msg = \"Whoops! Lost connection to \" + _this.ws.url;\n"
 + "          if (typeof _this.debug === \"function\") {\n"
 + "            _this.debug(msg);\n"
 + "          }\n"
 + "          _this._cleanUp();\n"
 + "          return typeof errorCallback === \"function\" ? errorCallback(msg) : void 0;\n"
 + "        };\n"
 + "      })(this);\n"
 + "      return this.ws.onopen = (function(_this) {\n"
 + "        return function() {\n"
 + "          if (typeof _this.debug === \"function\") {\n"
 + "            _this.debug('Web Socket Opened...');\n"
 + "          }\n"
 + "          headers[\"accept-version\"] = Stomp.VERSIONS.supportedVersions();\n"
 + "          headers[\"heart-beat\"] = [_this.heartbeat.outgoing, _this.heartbeat.incoming].join(',');\n"
 + "          return _this._transmit(\"CONNECT\", headers);\n"
 + "        };\n"
 + "      })(this);\n"
 + "    };\n"
 + "\n"
 + "    Client.prototype.disconnect = function(disconnectCallback, headers) {\n"
 + "      if (headers == null) {\n"
 + "        headers = {};\n"
 + "      }\n"
 + "      this._transmit(\"DISCONNECT\", headers);\n"
 + "      this.ws.onclose = null;\n"
 + "      this.ws.close();\n"
 + "      this._cleanUp();\n"
 + "      return typeof disconnectCallback === \"function\" ? disconnectCallback() : void 0;\n"
 + "    };\n"
 + "\n"
 + "    Client.prototype._cleanUp = function() {\n"
 + "      this.connected = false;\n"
 + "      if (this.pinger) {\n"
 + "        Stomp.clearInterval(this.pinger);\n"
 + "      }\n"
 + "      if (this.ponger) {\n"
 + "        return Stomp.clearInterval(this.ponger);\n"
 + "      }\n"
 + "    };\n"
 + "\n"
 + "    Client.prototype.send = function(destination, headers, body) {\n"
 + "      if (headers == null) {\n"
 + "        headers = {};\n"
 + "      }\n"
 + "      if (body == null) {\n"
 + "        body = '';\n"
 + "      }\n"
 + "      headers.destination = destination;\n"
 + "      return this._transmit(\"SEND\", headers, body);\n"
 + "    };\n"
 + "\n"
 + "    Client.prototype.subscribe = function(destination, callback, headers) {\n"
 + "      var client;\n"
 + "      if (headers == null) {\n"
 + "        headers = {};\n"
 + "      }\n"
 + "      if (!headers.id) {\n"
 + "        headers.id = \"sub-\" + this.counter++;\n"
 + "      }\n"
 + "      headers.destination = destination;\n"
 + "      this.subscriptions[headers.id] = callback;\n"
 + "      this._transmit(\"SUBSCRIBE\", headers);\n"
 + "      client = this;\n"
 + "      return {\n"
 + "        id: headers.id,\n"
 + "        unsubscribe: function() {\n"
 + "          return client.unsubscribe(headers.id);\n"
 + "        }\n"
 + "      };\n"
 + "    };\n"
 + "\n"
 + "    Client.prototype.unsubscribe = function(id) {\n"
 + "      delete this.subscriptions[id];\n"
 + "      return this._transmit(\"UNSUBSCRIBE\", {\n"
 + "        id: id\n"
 + "      });\n"
 + "    };\n"
 + "\n"
 + "    Client.prototype.begin = function(transaction) {\n"
 + "      var client, txid;\n"
 + "      txid = transaction || \"tx-\" + this.counter++;\n"
 + "      this._transmit(\"BEGIN\", {\n"
 + "        transaction: txid\n"
 + "      });\n"
 + "      client = this;\n"
 + "      return {\n"
 + "        id: txid,\n"
 + "        commit: function() {\n"
 + "          return client.commit(txid);\n"
 + "        },\n"
 + "        abort: function() {\n"
 + "          return client.abort(txid);\n"
 + "        }\n"
 + "      };\n"
 + "    };\n"
 + "\n"
 + "    Client.prototype.commit = function(transaction) {\n"
 + "      return this._transmit(\"COMMIT\", {\n"
 + "        transaction: transaction\n"
 + "      });\n"
 + "    };\n"
 + "\n"
 + "    Client.prototype.abort = function(transaction) {\n"
 + "      return this._transmit(\"ABORT\", {\n"
 + "        transaction: transaction\n"
 + "      });\n"
 + "    };\n"
 + "\n"
 + "    Client.prototype.ack = function(messageID, subscription, headers) {\n"
 + "      if (headers == null) {\n"
 + "        headers = {};\n"
 + "      }\n"
 + "      headers[\"message-id\"] = messageID;\n"
 + "      headers.subscription = subscription;\n"
 + "      return this._transmit(\"ACK\", headers);\n"
 + "    };\n"
 + "\n"
 + "    Client.prototype.nack = function(messageID, subscription, headers) {\n"
 + "      if (headers == null) {\n"
 + "        headers = {};\n"
 + "      }\n"
 + "      headers[\"message-id\"] = messageID;\n"
 + "      headers.subscription = subscription;\n"
 + "      return this._transmit(\"NACK\", headers);\n"
 + "    };\n"
 + "\n"
 + "    return Client;\n"
 + "\n"
 + "  })();\n"
 + "\n"
 + "  Stomp = {\n"
 + "    VERSIONS: {\n"
 + "      V1_0: '1.0',\n"
 + "      V1_1: '1.1',\n"
 + "      V1_2: '1.2',\n"
 + "      supportedVersions: function() {\n"
 + "        return '1.1,1.0';\n"
 + "      }\n"
 + "    },\n"
 + "    client: function(url, protocols) {\n"
 + "      var klass, ws;\n"
 + "      if (protocols == null) {\n"
 + "        protocols = ['v10.stomp', 'v11.stomp'];\n"
 + "      }\n"
 + "      klass = Stomp.WebSocketClass || WebSocket;\n"
 + "      ws = new klass(url, protocols);\n"
 + "      return new Client(ws);\n"
 + "    },\n"
 + "    over: function(ws) {\n"
 + "      return new Client(ws);\n"
 + "    },\n"
 + "    Frame: Frame\n"
 + "  };\n"
 + "\n"
 + "  if (typeof exports !== \"undefined\" && exports !== null) {\n"
 + "    exports.Stomp = Stomp;\n"
 + "  }\n"
 + "\n"
 + "  if (typeof window !== \"undefined\" && window !== null) {\n"
 + "    Stomp.setInterval = function(interval, f) {\n"
 + "      return window.setInterval(f, interval);\n"
 + "    };\n"
 + "    Stomp.clearInterval = function(id) {\n"
 + "      return window.clearInterval(id);\n"
 + "    };\n"
 + "    window.Stomp = Stomp;\n"
 + "  } else if (!exports) {\n"
 + "    self.Stomp = Stomp;\n"
 + "  }\n"
 + "\n"
 + "}).call(this);\n"
 + "");

  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_js_StompWS = registerClass(exports,'io_cloudoffice_platform_cockpit_js_StompWS',io_cloudoffice_platform_cockpit_js_StompWS);


function io_cloudoffice_platform_cockpit_js_Timer() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_js_Timer;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._jsTimer = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_js_Timer_jsTimer'] = v; return this['fld_io_cloudoffice_platform_cockpit_js_Timer_jsTimer']; };
  CLS['fld_$$fn$$schedule_1'] = null;
  m = c._$$fn$$schedule_1 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$schedule_1'] = v; return CLS['fld_$$fn$$schedule_1']; };
  CLS['fld_$$fn$$close_2'] = null;
  m = c._$$fn$$close_2 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$close_2'] = v; return CLS['fld_$$fn$$close_2']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
lcA0['fld_io_cloudoffice_platform_cockpit_js_Timer_jsTimer'] = null;
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.cancel__V = function() {
  var  lcA0 = this;
c.close__VLjava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_js_Timer_jsTimer']);
lcA0['fld_io_cloudoffice_platform_cockpit_js_Timer_jsTimer'] = null;
return;

};
c['cancel__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.run__V = function() {
  var  lcA0 = this;
return;

};
c['run__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.schedule__Ljava_lang_Object_2Ljava_lang_Runnable_2I = function() {
  var r = (function(r,millis) {

  r = vm.java_lang_Class(false).toJS(r);
  millis = vm.java_lang_Class(false).toJS(millis);return window.setInterval(function() { vm.java_lang_Class(false).toJS(vm.io_cloudoffice_platform_cockpit_js_$JsCallbacks$(false)._VM().java_1lang_1Runnable$run$__Ljava_lang_Object_2Ljava_lang_Runnable_2(r)); }, millis);
}).apply(this, arguments);
  return r === undefined ? null : r;

}

    m.access = 10;
    m.cls = CLS;
    m = c.schedule__VI = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_js_Timer_jsTimer']) === null) { gt = 11; break IF; }
invoker.cancel__V(lcA0);
    }
    X_11: for (;;) { IF: if (gt <= 11) {

var stA0 = lcA0;var stA1 = c.schedule__Ljava_lang_Object_2Ljava_lang_Runnable_2I(lcA0, lcI1);
stA0['fld_io_cloudoffice_platform_cockpit_js_Timer_jsTimer'] = stA1;
return;

    }
}}
};
c['schedule__VI'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.close__VLjava_lang_Object_2 = function() {
  var r = (function(timer) {

  timer = vm.java_lang_Class(false).toJS(timer);window.clearTimeout(timer);
}).apply(this, arguments);
  return r === undefined ? null : r;

}

    m.access = 10;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_js_TimerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_js_Timer', { value : true });
      vm.java_lang_Runnable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_js_TimerfillInstOf });
    io_cloudoffice_platform_cockpit_js_TimerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/js/Timer';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Runnable(false).constructor.$class
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_js_Timer_jsTimer'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_js_Timer = registerClass(exports,'io_cloudoffice_platform_cockpit_js_Timer',io_cloudoffice_platform_cockpit_js_Timer);


function io_cloudoffice_platform_cockpit_js_VIEW() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_js_VIEW;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_components'] = null;
  m = c._components = function (v) {  if (arguments.length == 1) CLS['fld_components'] = v; return CLS['fld_components']; };
c['_components'] = m;

  CLS['fld_$$fn$$registerComponent_1'] = null;
  m = c._$$fn$$registerComponent_1 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$registerComponent_1'] = v; return CLS['fld_$$fn$$registerComponent_1']; };
  CLS['fld_$$fn$$registerKeyEvents_2'] = null;
  m = c._$$fn$$registerKeyEvents_2 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$registerKeyEvents_2'] = v; return CLS['fld_$$fn$$registerKeyEvents_2']; };
  CLS['fld_$$fn$$fetch_3'] = null;
  m = c._$$fn$$fetch_3 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$fetch_3'] = v; return CLS['fld_$$fn$$fetch_3']; };
  CLS['fld_$$fn$$fetchView_4'] = null;
  m = c._$$fn$$fetchView_4 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$fetchView_4'] = v; return CLS['fld_$$fn$$fetchView_4']; };
  CLS['fld_$$fn$$addComponentData_5'] = null;
  m = c._$$fn$$addComponentData_5 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$addComponentData_5'] = v; return CLS['fld_$$fn$$addComponentData_5']; };
  CLS['fld_$$fn$$windowReload_6'] = null;
  m = c._$$fn$$windowReload_6 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$windowReload_6'] = v; return CLS['fld_$$fn$$windowReload_6']; };
  CLS['fld_$$fn$$storeEndPoint_7'] = null;
  m = c._$$fn$$storeEndPoint_7 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$storeEndPoint_7'] = v; return CLS['fld_$$fn$$storeEndPoint_7']; };
  CLS['fld_$$fn$$bind_8'] = null;
  m = c._$$fn$$bind_8 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$bind_8'] = v; return CLS['fld_$$fn$$bind_8']; };
  CLS['fld_$$fn$$getComponentData_9'] = null;
  m = c._$$fn$$getComponentData_9 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getComponentData_9'] = v; return CLS['fld_$$fn$$getComponentData_9']; };
  CLS['fld_$$fn$$clear_10'] = null;
  m = c._$$fn$$clear_10 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$clear_10'] = v; return CLS['fld_$$fn$$clear_10']; };
  CLS['fld_$$fn$$call_11'] = null;
  m = c._$$fn$$call_11 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$call_11'] = v; return CLS['fld_$$fn$$call_11']; };
  CLS['fld_$$fn$$invokeJSFunction_12'] = null;
  m = c._$$fn$$invokeJSFunction_12 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$invokeJSFunction_12'] = v; return CLS['fld_$$fn$$invokeJSFunction_12']; };
  CLS['fld_$$fn$$callWithouParameter_13'] = null;
  m = c._$$fn$$callWithouParameter_13 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$callWithouParameter_13'] = v; return CLS['fld_$$fn$$callWithouParameter_13']; };
  CLS['fld_$$fn$$globalComponentsValue_14'] = null;
  m = c._$$fn$$globalComponentsValue_14 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$globalComponentsValue_14'] = v; return CLS['fld_$$fn$$globalComponentsValue_14']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.registerComponent__V = function() {
  var r = (function() {

}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['registerComponent__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.registerKeyEvents__V = function() {
  var r = (function() {
ko.bindingHandlers['keyPress'] = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
        var allBindings = allBindingsAccessor();
        $(element).keypress(function (event) {
            allBindings['keyPress'].call(viewModel,null, event);
            return false;
        });
    }
};
}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['registerKeyEvents__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.fetch__VLjava_lang_String_2Ljava_lang_String_2 = function() {
  var r = (function(name,baseUrl) {

  name = vm.java_lang_Class(false).toJS(name);
  baseUrl = vm.java_lang_Class(false).toJS(baseUrl);a(name,baseUrl);
}).apply(this, arguments);
  return r === undefined ? null : r;

}

    m.access = 8;
    m.cls = CLS;
    m = c.fetchView__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2 = function() {
  var r = (function(componentName,viewName,model,baseUrl) {

  componentName = vm.java_lang_Class(false).toJS(componentName);
  viewName = vm.java_lang_Class(false).toJS(viewName);
  model = vm.java_lang_Class(false).toJS(model);
  baseUrl = vm.java_lang_Class(false).toJS(baseUrl);b(componentName,viewName,model,baseUrl);
}).apply(this, arguments);
  return r === undefined ? null : r;

}

    m.access = 8;
    m.cls = CLS;
    m = c.render__V_3Ljava_lang_String_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcA1 = lcA0;
var lcI2 = (lcA1).length;
var lcI3 = 0;
    }
    X_7: for (;;) { IF: if (gt <= 7) {

if ((lcI3) >= (lcI2)) { gt = 70; break IF; }
var lcA4 = (lcA1[lcI3] || Array.at(lcA1, lcI3));
var stI0 = c.hasAlreadyRegistered__ZLjava_lang_String_2(lcA4);
if ((stI0) != 0) { gt = 64; break IF; }
var stA0 = lcA4;var stA1 = c.storeEndPoint__Ljava_lang_String_2();
c.fetch__VLjava_lang_String_2Ljava_lang_String_2(stA0, stA1);
var stA0 = c._components();var stA1 = lcA4;var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,lcA4);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"-component");
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
    }
    X_64: for (;;) { IF: if (gt <= 64) {
lcI3++;
{ gt = 0; continue X_7; }
    }
    X_70: for (;;) { IF: if (gt <= 70) {
return;

    }
}}}}
};
c['render__V_3Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.renderView__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2 = function(lcA0, lcA1, lcA2) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = c.hasAlreadyRegistered__ZLjava_lang_String_2(lcA1);
if ((stI0) != 0) { gt = 45; break IF; }
var stA0 = lcA0;var stA1 = lcA1;var stA2 = lcA2;var stA3 = c.storeEndPoint__Ljava_lang_String_2();
c.fetchView__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2(stA0, stA1, stA2, stA3);
var stA0 = c._components();var stA1 = lcA1;var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,lcA1);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"-component");
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
    }
    X_45: for (;;) { IF: if (gt <= 45) {
return;

    }
}}
};
c['renderView__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.hasAlreadyRegistered__ZLjava_lang_String_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = null;var stA1 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(c._components(),lcA0);
if ((stA0) === (stA1)) { gt = 17; break IF; }
var stI0 = 1;{ gt = 18; break IF; }
    }
    X_17: for (;;) { IF: if (gt <= 17) {

var stI0 = 0;    }
    X_18: for (;;) { IF: if (gt <= 18) {
return stI0;

    }
}}}
};
c['hasAlreadyRegistered__ZLjava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.addComponentData__VLjava_lang_String_2Ljava_lang_Object_2 = function() {
  var r = (function(id,data) {

  id = vm.java_lang_Class(false).toJS(id);
  data = vm.java_lang_Class(false).toJS(data);componentsValue[id]=data;

}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['addComponentData__VLjava_lang_String_2Ljava_lang_Object_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.windowReload__V = function() {
  var r = (function() {
window.location.reload();

}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['windowReload__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.storeEndPoint__Ljava_lang_String_2 = function() {
  var r = (function() {
return repoGETURL;

}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['storeEndPoint__Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.bind__VLjava_lang_String_2Ljava_lang_Object_2 = function() {
  var r = (function(id,data) {

  id = vm.java_lang_Class(false).toJS(id);
  data = vm.java_lang_Class(false).toJS(data);componentsValue[id]=data;

}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['bind__VLjava_lang_String_2Ljava_lang_Object_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getComponentData__Ljava_lang_Object_2Ljava_lang_String_2 = function() {
  var r = (function(id) {

  id = vm.java_lang_Class(false).toJS(id);return componentsValue[id];

}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['getComponentData__Ljava_lang_Object_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.clear__Ljava_lang_Object_2 = function() {
  var r = (function() {
return componentsValue={};

}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['clear__Ljava_lang_Object_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.call__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2 = function() {
  var r = (function(id,fh,data) {

  id = vm.java_lang_Class(false).toJS(id);
  fh = vm.java_lang_Class(false).toJS(fh);
  data = vm.java_lang_Class(false).toJS(data);var view = componentsValue[id];view[fh](data);

}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['call__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.invokeJSFunction__VLjava_lang_String_2 = function() {
  var r = (function(functionName) {

  functionName = vm.java_lang_Class(false).toJS(functionName);eval(functionName);

}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['invokeJSFunction__VLjava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.callWithouParameter__VLjava_lang_String_2Ljava_lang_String_2 = function() {
  var r = (function(id,fh) {

  id = vm.java_lang_Class(false).toJS(id);
  fh = vm.java_lang_Class(false).toJS(fh); var view = componentsValue[id];view[fh]();

}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['callWithouParameter__VLjava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.globalComponentsValue__V = function() {
  var r = (function() {
componentsValue={};

}).apply(this, arguments);
  return r === undefined ? null : r;

}

c['globalComponentsValue__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new vm.java_util_HashMap;
(refs_java_util_HashMap || (refs_java_util_HashMap = vm.java_util_HashMap(false))).constructor['cons__V'].call(stA0);
c._components(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_js_VIEWfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_js_VIEW', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_js_VIEWfillInstOf });
    io_cloudoffice_platform_cockpit_js_VIEWfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/js/VIEW';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_java_lang_Object;
    var refs_java_lang_StringBuilder;
    var refs_java_util_HashMap;
// resource from io/cloudoffice/platform/cockpit/js/kocomponentloader.js

(0 || eval)("$.ajaxSetup({\r\n"
 + "    headers: {\r\n"
 + "        'Accept': \"*/*; charset=utf-8\"\r\n"
 + "    }\r\n"
 + "});\r\n"
 + "$.ajaxPrefilter(function (options) {\r\n"
 + "        options.cache = true;\r\n"
 + "});\r\n"
 + "var templateFromUrlLoader = {\r\n"
 + "    loadTemplate: function (name, templateConfig, callback) {\r\n"
 + "\r\n"
 + "        if (templateConfig.fromUrl) {\r\n"
 + "            // Uses jQuery's ajax facility to load the markup from a file\r\n"
 + "            var fullUrl = templateConfig.fromUrl;\r\n"
 + "            $.get(fullUrl, function (markupString) {\r\n"
 + "                // We need an array of DOM nodes, not a string.\r\n"
 + "                // We can use the default loader to convert to the\r\n"
 + "                // required format.\r\n"
 + "                ko.components.defaultLoader.loadTemplate(name, markupString, callback);\r\n"
 + "            });\r\n"
 + "        } else {\r\n"
 + "            // Unrecognized config format. Let another loader handle it.\r\n"
 + "            callback(null);\r\n"
 + "        }\r\n"
 + "    }\r\n"
 + "};\r\n"
 + "// Register it\r\n"
 + "ko.components.loaders.unshift(templateFromUrlLoader);\r\n"
 + "\r\n"
 + "var viewModelCustomLoader = {\r\n"
 + "    loadViewModel: function (name, viewModelConfig, callback) {\r\n"
 + "        if (viewModelConfig.viaLoader) {\r\n"
 + "            var fullUrl = viewModelConfig.viaLoader;\r\n"
 + "            $.getScript(fullUrl + \".js\", function (data, textStatus, jqxhr) {\r\n"
 + "                ko.components.defaultLoader.loadViewModel(name, viewmodel, callback);\r\n"
 + "            });\r\n"
 + "\r\n"
 + "\r\n"
 + "        } else {\r\n"
 + "            // Unrecognized config format. Let another loader handle it.\r\n"
 + "            callback(null);\r\n"
 + "        }\r\n"
 + "    }\r\n"
 + "};\r\n"
 + "\r\n"
 + "\r\n"
 + "\r\n"
 + "ko.bindingHandlers.enterkey = {\r\n"
 + "    init: function (element, valueAccessor) {\r\n"
 + "        $(element).keypress(function (event) {\r\n"
 + "\r\n"
 + "            var keyCode = (event.which ? event.which : event.keyCode);\r\n"
 + "            if (keyCode === 13) {\r\n"
 + "                var enterPressed = ko.utils.unwrapObservable(valueAccessor()) || {};\r\n"
 + "                enterPressed = true;\r\n"
 + "                if (ko.isObservable(valueAccessor())) {\r\n"
 + "                    valueAccessor()(enterPressed);\r\n"
 + "                }\r\n"
 + "            }\r\n"
 + "\r\n"
 + "        });\r\n"
 + "    }\r\n"
 + "};\r\n"
 + "\r\n"
 + "// Register it\r\n"
 + "ko.components.loaders.unshift(viewModelCustomLoader);\r\n"
 + "\r\n"
 + "\r\n"
 + "ko.bindingHandlers.reverseforeach = {\r\n"
 + "    init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {\r\n"
 + "        var newBindingContext = bindingContext.extend({\r\n"
 + "            iterator: valueAccessor()\r\n"
 + "        });\r\n"
 + "        var reversedbyfieldname = allBindingsAccessor.get('reversedbyfieldname') || '';\r\n"
 + "        if ((typeof reversedbyfieldname !== \"undefined\" && null !== reversedbyfieldname && \"\" !== reversedbyfieldname)) {\r\n"
 + "            var listitems = ko.unwrap(valueAccessor());\r\n"
 + "            listitems.sort(function (a, b) {\r\n"
 + "                a = ko.unwrap(a[reversedbyfieldname]);\r\n"
 + "                b = ko.unwrap(b[reversedbyfieldname]);\r\n"
 + "                return (a === b ? 0 : a < b ? -1 : 1);\r\n"
 + "            });\r\n"
 + "        }\r\n"
 + "        return ko.bindingHandlers.foreach.init(element, valueAccessor, allBindingsAccessor, viewModel, newBindingContext);\r\n"
 + "    },\r\n"
 + "    update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {\r\n"
 + "        var newBindingContext = bindingContext.extend({\r\n"
 + "            iterator: valueAccessor()\r\n"
 + "        });\r\n"
 + "        var reversedbyfieldname = allBindingsAccessor.get('reversedbyfieldname') || '';\r\n"
 + "        if ((typeof reversedbyfieldname !== \"undefined\" && null !== reversedbyfieldname && \"\" !== reversedbyfieldname)) {\r\n"
 + "            var listitems = ko.unwrap(valueAccessor());\r\n"
 + "            listitems.sort(function (a, b) {\r\n"
 + "                a = ko.unwrap(a[reversedbyfieldname]);\r\n"
 + "                b = ko.unwrap(b[reversedbyfieldname]);\r\n"
 + "                return (a === b ? 0 : a < b ? -1 : 1);\r\n"
 + "            });\r\n"
 + "        }\r\n"
 + "        return ko.bindingHandlers.foreach.update(element, valueAccessor, allBindingsAccessor, viewModel, newBindingContext);\r\n"
 + "    }\r\n"
 + "};\r\n"
 + "\r\n"
 + "\r\n"
 + "ko.bindingHandlers.fadedIf = {\r\n"
 + "    init: function (element, valueAccessor, allBindingsAccessor, data, bindingContext) {\r\n"
 + "        // Initially set the element to be instantly visible/hidden depending on the value\r\n"
 + "        var value = valueAccessor();\r\n"
 + "        //If the value is a normal function make it a computed so that it updates properly\r\n"
 + "        if (!ko.isObservable(value)) {\r\n"
 + "            value = ko.computed({read: valueAccessor});\r\n"
 + "        }\r\n"
 + "        //attach our observable property to the accessor so that it can be used in the update function\r\n"
 + "        valueAccessor.domShown = ko.observable(ko.unwrap(value));\r\n"
 + "\r\n"
 + "        //Wrap any contents of the element in a new div, and then bind that div using the \"if\" binding.\r\n"
 + "        //This way the element and its event hooks for fading in/out never leaves the dom, but all content does.\r\n"
 + "        //it also prevents applying multiple bindings to the same element.\r\n"
 + "        var contentWrapper = $(element).children().wrapAll(document.createElement(\"div\")).parent()[0];\r\n"
 + "        ko.applyBindingAccessorsToNode(contentWrapper, {'if': function () {\r\n"
 + "                return valueAccessor.domShown;\r\n"
 + "            }}, bindingContext);\r\n"
 + "    },\r\n"
 + "    update: function (element, valueAccessor) {\r\n"
 + "        // Whenever the value subsequently changes, slowly fade the element in or out\r\n"
 + "        var value = valueAccessor();\r\n"
 + "\r\n"
 + "        if (ko.unwrap(value)) {\r\n"
 + "            valueAccessor.domShown(true); //restore the element to the DOM\r\n"
 + "            $(element).fadeIn(800);\r\n"
 + "        } else {\r\n"
 + "            $(element).fadeOut({\r\n"
 + "                complete: function () {\r\n"
 + "                    valueAccessor.domShown(false); //remove the element from the DOM\r\n"
 + "                }\r\n"
 + "            });\r\n"
 + "        }\r\n"
 + "    }\r\n"
 + "};\r\n"
 + "\r\n"
 + "\r\n"
 + "//https://stackoverflow.com/questions/14321012/prevent-event-bubbling-when-using-the-checked-binding-in-knockoutjs\r\n"
 + "ko.bindingHandlers.stopBubble = {\r\n"
 + "    init: function (element) {\r\n"
 + "        ko.utils.registerEventHandler(element, \"click\", function (event) {\r\n"
 + "            event.cancelBubble = true;\r\n"
 + "            if (event.stopPropagation) {\r\n"
 + "                event.stopPropagation();\r\n"
 + "            }\r\n"
 + "        });\r\n"
 + "    }\r\n"
 + "};\r\n"
 + "\r\n"
 + "\r\n"
 + "\r\n"
 + "//http://jsfiddle.net/rniemeyer/JksKx/9/\r\n"
 + "ko.bindingHandlers.htmlValue = {\r\n"
 + "    init: function (element, valueAccessor, allBindingsAccessor) {\r\n"
 + "        ko.utils.registerEventHandler(element, \"keyup\", function () {\r\n"
 + "            var modelValue = valueAccessor();\r\n"
 + "            var elementValue = element.innerHTML;\r\n"
 + "            if (ko.isWriteableObservable(modelValue)) {\r\n"
 + "                modelValue(elementValue);\r\n"
 + "\r\n"
 + "            } else { //handle non-observable one-way binding\r\n"
 + "                var allBindings = allBindingsAccessor();\r\n"
 + "                if (allBindings['_ko_property_writers'] && allBindings['_ko_property_writers'].htmlValue)\r\n"
 + "                    allBindings['_ko_property_writers'].htmlValue(elementValue);\r\n"
 + "            }\r\n"
 + "        });\r\n"
 + "    },\r\n"
 + "    update: function (element, valueAccessor) {\r\n"
 + "        var value = ko.utils.unwrapObservable(valueAccessor()) || \"\";\r\n"
 + "        if (element.innerHTML !== value) {\r\n"
 + "            element.innerHTML = value;\r\n"
 + "        }\r\n"
 + "    }\r\n"
 + "};\r\n"
 + "function a(name, baseUrl) {\r\n"
 + "    ko.components.register(name + \"-component\", {\r\n"
 + "        viewModel: {viaLoader: baseUrl + \"cloudoffice/cockpit/\" + name + \"/model/\" + name},\r\n"
 + "        template: {fromUrl: baseUrl + \"cloudoffice/cockpit/\" + name + \"/view/\" + name + \".html\", maxCacheAge: 0}\r\n"
 + "    });\r\n"
 + "}\r\n"
 + "function b(componentName, viewName, model, baseUrl) {\r\n"
 + "    ko.components.register(viewName + \"-component\", {\r\n"
 + "        viewModel: {viaLoader: baseUrl + \"cloudoffice/cockpit/\" + componentName + \"/model/\" + model},\r\n"
 + "        template: {fromUrl: baseUrl + \"cloudoffice/cockpit/\" + componentName + \"/view/\" + viewName + \".html\", maxCacheAge: 0}\r\n"
 + "    });\r\n"
 + "}");

  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_js_VIEW = registerClass(exports,'io_cloudoffice_platform_cockpit_js_VIEW',io_cloudoffice_platform_cockpit_js_VIEW);

vm.java_util_HashMap = function() {
  var instance = arguments.length == 0 || arguments[0] === true;
  delete vm.java_util_HashMap;
  return link('java/util/HashMap', function(f) { vm.java_util_HashMap = f;})(instance);
}
vm.java_lang_StringBuilder = function() {
  var instance = arguments.length == 0 || arguments[0] === true;
  delete vm.java_lang_StringBuilder;
  return link('java/lang/StringBuilder', function(f) { vm.java_lang_StringBuilder = f;})(instance);
}
  invoker.presenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2 = function(target) {
    return target['presenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2']();
  };
  invoker.run__V = function(target) {
    return target['run__V']();
  };
  invoker.close__V = function(target) {
    return target['close__V']();
  };
  invoker.addSuppressed__VLjava_lang_Throwable_2 = function(target, p1) {
    return target['addSuppressed__VLjava_lang_Throwable_2'](p1);
  };
  invoker.toJava__Ljava_lang_Object_2Ljava_lang_Object_2 = function(target, p1) {
    return target['toJava__Ljava_lang_Object_2Ljava_lang_Object_2'](p1);
  };
  invoker.cancel__V = function(target) {
    return target['cancel__V']();
  };
  invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2 = function(target, p1) {
    return target['append__Ljava_lang_StringBuilder_2Ljava_lang_String_2'](p1);
  };
  invoker.toString__Ljava_lang_String_2 = function(target) {
    return target['toString__Ljava_lang_String_2']();
  };
  invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(target, p1, p2) {
    return target['put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2'](p1,p2);
  };
  invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2 = function(target, p1) {
    return target['get__Ljava_lang_Object_2Ljava_lang_Object_2'](p1);
  };
  exports['registerResource']('META-INF/MANIFEST.MF', 'TWFuaWZlc3QtVmVyc2lvbjogMS4wDQpCbmQtTGFzdE1vZGlmaWVkOiAxNTk3Nzc1MDk5NDQyDQpCdWlsZC1KZGs6IDEuOC4wXzEzMQ0KQnVpbHQtQnk6IGV1c2lhDQpCdW5kbGUtTWFuaWZlc3RWZXJzaW9uOiAyDQpCdW5kbGUtTmFtZTogRW5naW5lIENvbXBvbmVudHMgTmF0aXZlDQpCdW5kbGUtU3ltYm9saWNOYW1lOiBpby5jbG91ZG9mZmljZS5wbGF0Zm9ybS5jb2NrcGl0LmpzDQpCdW5kbGUtVmVyc2lvbjogMS4xLjANCkNyZWF0ZWQtQnk6IEFwYWNoZSBNYXZlbiBCdW5kbGUgUGx1Z2luDQpFeHBvcnQtUGFja2FnZTogaW8uY2xvdWRvZmZpY2UucGxhdGZvcm0uY29ja3BpdC5qczt2ZXJzaW9uPSIxLjEuMCINCkltcG9ydC1QYWNrYWdlOiBvcmcubmV0YmVhbnMuaHRtbC5ib290LnNwaTt2ZXJzaW9uPSJbMS42LDIpIg0KVG9vbDogQm5kLTIuMS4wLjIwMTMwNDI2LTEyMjIxMw0K');
  exports['registerResource']('io/cloudoffice/platform/cockpit/js/moment.js', 'Ly8hIG1vbWVudC5qcw0KLy8hIHZlcnNpb24gOiAyLjExLjENCi8vISBhdXRob3JzIDogVGltIFdvb2QsIElza3JlbiBDaGVybmV2LCBNb21lbnQuanMgY29udHJpYnV0b3JzDQovLyEgbGljZW5zZSA6IE1JVA0KLy8hIG1vbWVudGpzLmNvbQ0KIWZ1bmN0aW9uKHQsZSl7Im9iamVjdCI9PXR5cGVvZiBleHBvcnRzJiYidW5kZWZpbmVkIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6ImZ1bmN0aW9uIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoZSk6dC5tb21lbnQ9ZSgpfSh0aGlzLGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO3ZhciB0O2Z1bmN0aW9uIGUoKXtyZXR1cm4gdC5hcHBseShudWxsLGFyZ3VtZW50cyl9ZnVuY3Rpb24gbih0KXtyZXR1cm4iW29iamVjdCBBcnJheV0iPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHQpfWZ1bmN0aW9uIGkodCl7cmV0dXJuIHQgaW5zdGFuY2VvZiBEYXRlfHwiW29iamVjdCBEYXRlXSI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCl9ZnVuY3Rpb24gcyh0LGUpe3ZhciBuLGk9W107Zm9yKG49MDtuPHQubGVuZ3RoOysrbilpLnB1c2goZSh0W25dLG4pKTtyZXR1cm4gaX1mdW5jdGlvbiByKHQsZSl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LGUpfWZ1bmN0aW9uIGEodCxlKXtmb3IodmFyIG4gaW4gZSlyKGUsbikmJih0W25dPWVbbl0pO3JldHVybiByKGUsInRvU3RyaW5nIikmJih0LnRvU3RyaW5nPWUudG9TdHJpbmcpLHIoZSwidmFsdWVPZiIpJiYodC52YWx1ZU9mPWUudmFsdWVPZiksdH1mdW5jdGlvbiBvKHQsZSxuLGkpe3JldHVybiBuZSh0LGUsbixpLCEwKS51dGMoKX1mdW5jdGlvbiB1KHQpe3JldHVybiBudWxsPT10Ll9wZiYmKHQuX3BmPXtlbXB0eTohMSx1bnVzZWRUb2tlbnM6W10sdW51c2VkSW5wdXQ6W10sb3ZlcmZsb3c6LTIsY2hhcnNMZWZ0T3ZlcjowLG51bGxJbnB1dDohMSxpbnZhbGlkTW9udGg6bnVsbCxpbnZhbGlkRm9ybWF0OiExLHVzZXJJbnZhbGlkYXRlZDohMSxpc286ITF9KSx0Ll9wZn1mdW5jdGlvbiBkKHQpe2lmKG51bGw9PXQuX2lzVmFsaWQpe3ZhciBlPXUodCk7dC5faXNWYWxpZD0hKGlzTmFOKHQuX2QuZ2V0VGltZSgpKXx8IShlLm92ZXJmbG93PDApfHxlLmVtcHR5fHxlLmludmFsaWRNb250aHx8ZS5pbnZhbGlkV2Vla2RheXx8ZS5udWxsSW5wdXR8fGUuaW52YWxpZEZvcm1hdHx8ZS51c2VySW52YWxpZGF0ZWQpLHQuX3N0cmljdCYmKHQuX2lzVmFsaWQ9dC5faXNWYWxpZCYmMD09PWUuY2hhcnNMZWZ0T3ZlciYmMD09PWUudW51c2VkVG9rZW5zLmxlbmd0aCYmdm9pZCAwPT09ZS5iaWdIb3VyKX1yZXR1cm4gdC5faXNWYWxpZH1mdW5jdGlvbiBsKHQpe3ZhciBlPW8oTmFOKTtyZXR1cm4gbnVsbCE9dD9hKHUoZSksdCk6dShlKS51c2VySW52YWxpZGF0ZWQ9ITAsZX1mdW5jdGlvbiBoKHQpe3JldHVybiB2b2lkIDA9PT10fXZhciBjPWUubW9tZW50UHJvcGVydGllcz1bXTtmdW5jdGlvbiBmKHQsZSl7dmFyIG4saSxzO2lmKGgoZS5faXNBTW9tZW50T2JqZWN0KXx8KHQuX2lzQU1vbWVudE9iamVjdD1lLl9pc0FNb21lbnRPYmplY3QpLGgoZS5faSl8fCh0Ll9pPWUuX2kpLGgoZS5fZil8fCh0Ll9mPWUuX2YpLGgoZS5fbCl8fCh0Ll9sPWUuX2wpLGgoZS5fc3RyaWN0KXx8KHQuX3N0cmljdD1lLl9zdHJpY3QpLGgoZS5fdHptKXx8KHQuX3R6bT1lLl90em0pLGgoZS5faXNVVEMpfHwodC5faXNVVEM9ZS5faXNVVEMpLGgoZS5fb2Zmc2V0KXx8KHQuX29mZnNldD1lLl9vZmZzZXQpLGgoZS5fcGYpfHwodC5fcGY9dShlKSksaChlLl9sb2NhbGUpfHwodC5fbG9jYWxlPWUuX2xvY2FsZSksYy5sZW5ndGg+MClmb3IobiBpbiBjKWgocz1lW2k9Y1tuXV0pfHwodFtpXT1zKTtyZXR1cm4gdH12YXIgbT0hMTtmdW5jdGlvbiBfKHQpe2YodGhpcyx0KSx0aGlzLl9kPW5ldyBEYXRlKG51bGwhPXQuX2Q/dC5fZC5nZXRUaW1lKCk6TmFOKSwhMT09PW0mJihtPSEwLGUudXBkYXRlT2Zmc2V0KHRoaXMpLG09ITEpfWZ1bmN0aW9uIHkodCl7cmV0dXJuIHQgaW5zdGFuY2VvZiBffHxudWxsIT10JiZudWxsIT10Ll9pc0FNb21lbnRPYmplY3R9ZnVuY3Rpb24gZyh0KXtyZXR1cm4gdDwwP01hdGguY2VpbCh0KTpNYXRoLmZsb29yKHQpfWZ1bmN0aW9uIHAodCl7dmFyIGU9K3Qsbj0wO3JldHVybiAwIT09ZSYmaXNGaW5pdGUoZSkmJihuPWcoZSkpLG59ZnVuY3Rpb24gdih0LGUsbil7dmFyIGkscz1NYXRoLm1pbih0Lmxlbmd0aCxlLmxlbmd0aCkscj1NYXRoLmFicyh0Lmxlbmd0aC1lLmxlbmd0aCksYT0wO2ZvcihpPTA7aTxzO2krKykobiYmdFtpXSE9PWVbaV18fCFuJiZwKHRbaV0pIT09cChlW2ldKSkmJmErKztyZXR1cm4gYStyfWZ1bmN0aW9uIEQoKXt9dmFyIE0sWT17fTtmdW5jdGlvbiBTKHQpe3JldHVybiB0P3QudG9Mb3dlckNhc2UoKS5yZXBsYWNlKCJfIiwiLSIpOnR9ZnVuY3Rpb24gdyh0KXt2YXIgZT1udWxsO2lmKCFZW3RdJiYidW5kZWZpbmVkIiE9dHlwZW9mIG1vZHVsZSYmbW9kdWxlJiZtb2R1bGUuZXhwb3J0cyl0cnl7ZT1NLl9hYmJyLHJlcXVpcmUoIi4vbG9jYWxlLyIrdCksayhlKX1jYXRjaCh0KXt9cmV0dXJuIFlbdF19ZnVuY3Rpb24gayh0LGUpe3ZhciBuO3JldHVybiB0JiYobj1oKGUpP2IodCk6VCh0LGUpKSYmKE09biksTS5fYWJicn1mdW5jdGlvbiBUKHQsZSl7cmV0dXJuIG51bGwhPT1lPyhlLmFiYnI9dCxZW3RdPVlbdF18fG5ldyBELFlbdF0uc2V0KGUpLGsodCksWVt0XSk6KGRlbGV0ZSBZW3RdLG51bGwpfWZ1bmN0aW9uIGIodCl7dmFyIGU7aWYodCYmdC5fbG9jYWxlJiZ0Ll9sb2NhbGUuX2FiYnImJih0PXQuX2xvY2FsZS5fYWJiciksIXQpcmV0dXJuIE07aWYoIW4odCkpe2lmKGU9dyh0KSlyZXR1cm4gZTt0PVt0XX1yZXR1cm4gZnVuY3Rpb24odCl7Zm9yKHZhciBlLG4saSxzLHI9MDtyPHQubGVuZ3RoOyl7Zm9yKGU9KHM9Uyh0W3JdKS5zcGxpdCgiLSIpKS5sZW5ndGgsbj0obj1TKHRbcisxXSkpP24uc3BsaXQoIi0iKTpudWxsO2U+MDspe2lmKGk9dyhzLnNsaWNlKDAsZSkuam9pbigiLSIpKSlyZXR1cm4gaTtpZihuJiZuLmxlbmd0aD49ZSYmdihzLG4sITApPj1lLTEpYnJlYWs7ZS0tfXIrK31yZXR1cm4gbnVsbH0odCl9dmFyIE89e307ZnVuY3Rpb24gVyh0LGUpe3ZhciBuPXQudG9Mb3dlckNhc2UoKTtPW25dPU9bbisicyJdPU9bZV09dH1mdW5jdGlvbiB4KHQpe3JldHVybiJzdHJpbmciPT10eXBlb2YgdD9PW3RdfHxPW3QudG9Mb3dlckNhc2UoKV06dm9pZCAwfWZ1bmN0aW9uIFUodCl7dmFyIGUsbixpPXt9O2ZvcihuIGluIHQpcih0LG4pJiYoZT14KG4pKSYmKGlbZV09dFtuXSk7cmV0dXJuIGl9ZnVuY3Rpb24gRyh0KXtyZXR1cm4gdCBpbnN0YW5jZW9mIEZ1bmN0aW9ufHwiW29iamVjdCBGdW5jdGlvbl0iPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHQpfWZ1bmN0aW9uIFAodCxuKXtyZXR1cm4gZnVuY3Rpb24oaSl7cmV0dXJuIG51bGwhPWk/KEYodGhpcyx0LGkpLGUudXBkYXRlT2Zmc2V0KHRoaXMsbiksdGhpcyk6Qyh0aGlzLHQpfX1mdW5jdGlvbiBDKHQsZSl7cmV0dXJuIHQuaXNWYWxpZCgpP3QuX2RbImdldCIrKHQuX2lzVVRDPyJVVEMiOiIiKStlXSgpOk5hTn1mdW5jdGlvbiBGKHQsZSxuKXt0LmlzVmFsaWQoKSYmdC5fZFsic2V0IisodC5faXNVVEM/IlVUQyI6IiIpK2VdKG4pfWZ1bmN0aW9uIEgodCxlKXt2YXIgbjtpZigib2JqZWN0Ij09dHlwZW9mIHQpZm9yKG4gaW4gdCl0aGlzLnNldChuLHRbbl0pO2Vsc2UgaWYoRyh0aGlzW3Q9eCh0KV0pKXJldHVybiB0aGlzW3RdKGUpO3JldHVybiB0aGlzfWZ1bmN0aW9uIFYodCxlLG4pe3ZhciBpPSIiK01hdGguYWJzKHQpLHM9ZS1pLmxlbmd0aDtyZXR1cm4odD49MD9uPyIrIjoiIjoiLSIpK01hdGgucG93KDEwLE1hdGgubWF4KDAscykpLnRvU3RyaW5nKCkuc3Vic3RyKDEpK2l9dmFyIEw9LyhcW1teXFtdKlxdKXwoXFwpPyhbSGhdbW0oc3MpP3xNb3xNTT9NP00/fERvfERERG98REQ/RD9EP3xkZGQ/ZD98ZG8/fHdbb3x3XT98V1tvfFddP3xRbz98WVlZWVlZfFlZWVlZfFlZWVl8WVl8Z2coZ2dnPyk/fEdHKEdHRz8pP3xlfEV8YXxBfGhoP3xISD98bW0/fHNzP3xTezEsOX18eHxYfHp6P3xaWj98LikvZyxJPS8oXFtbXlxbXSpcXSl8KFxcKT8oTFRTfExUfExMP0w/TD98bHsxLDR9KS9nLEE9e30sUj17fTtmdW5jdGlvbiBOKHQsZSxuLGkpe3ZhciBzPWk7InN0cmluZyI9PXR5cGVvZiBpJiYocz1mdW5jdGlvbigpe3JldHVybiB0aGlzW2ldKCl9KSx0JiYoUlt0XT1zKSxlJiYoUltlWzBdXT1mdW5jdGlvbigpe3JldHVybiBWKHMuYXBwbHkodGhpcyxhcmd1bWVudHMpLGVbMV0sZVsyXSl9KSxuJiYoUltuXT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmxvY2FsZURhdGEoKS5vcmRpbmFsKHMuYXBwbHkodGhpcyxhcmd1bWVudHMpLHQpfSl9ZnVuY3Rpb24gRSh0LGUpe3JldHVybiB0LmlzVmFsaWQoKT8oZT16KGUsdC5sb2NhbGVEYXRhKCkpLEFbZV09QVtlXXx8ZnVuY3Rpb24odCl7dmFyIGUsbixpLHM9dC5tYXRjaChMKTtmb3IoZT0wLG49cy5sZW5ndGg7ZTxuO2UrKylSW3NbZV1dP3NbZV09UltzW2VdXTpzW2VdPShpPXNbZV0pLm1hdGNoKC9cW1tcc1xTXS8pP2kucmVwbGFjZSgvXlxbfFxdJC9nLCIiKTppLnJlcGxhY2UoL1xcL2csIiIpO3JldHVybiBmdW5jdGlvbihpKXt2YXIgcj0iIjtmb3IoZT0wO2U8bjtlKyspcis9c1tlXWluc3RhbmNlb2YgRnVuY3Rpb24/c1tlXS5jYWxsKGksdCk6c1tlXTtyZXR1cm4gcn19KGUpLEFbZV0odCkpOnQubG9jYWxlRGF0YSgpLmludmFsaWREYXRlKCl9ZnVuY3Rpb24geih0LGUpe3ZhciBuPTU7ZnVuY3Rpb24gaSh0KXtyZXR1cm4gZS5sb25nRGF0ZUZvcm1hdCh0KXx8dH1mb3IoSS5sYXN0SW5kZXg9MDtuPj0wJiZJLnRlc3QodCk7KXQ9dC5yZXBsYWNlKEksaSksSS5sYXN0SW5kZXg9MCxuLT0xO3JldHVybiB0fXZhciBaPS9cZC8saj0vXGRcZC8sJD0vXGR7M30vLHE9L1xkezR9LyxKPS9bKy1dP1xkezZ9LyxCPS9cZFxkPy8sUT0vXGRcZFxkXGQ/LyxYPS9cZFxkXGRcZFxkXGQ/LyxLPS9cZHsxLDN9Lyx0dD0vXGR7MSw0fS8sZXQ9L1srLV0/XGR7MSw2fS8sbnQ9L1xkKy8saXQ9L1srLV0/XGQrLyxzdD0vWnxbKy1dXGRcZDo/XGRcZC9naSxydD0vWnxbKy1dXGRcZCg/Ojo/XGRcZCk/L2dpLGF0PS9bMC05XSpbJ2Etelx1MDBBMC1cdTA1RkZcdTA3MDAtXHVEN0ZGXHVGOTAwLVx1RkRDRlx1RkRGMC1cdUZGRUZdK3xbXHUwNjAwLVx1MDZGRlwvXSsoXHMqP1tcdTA2MDAtXHUwNkZGXSspezEsMn0vaSxvdD17fTtmdW5jdGlvbiB1dCh0LGUsbil7b3RbdF09RyhlKT9lOmZ1bmN0aW9uKHQsaSl7cmV0dXJuIHQmJm4/bjplfX1mdW5jdGlvbiBkdCh0LGUpe3JldHVybiByKG90LHQpP290W3RdKGUuX3N0cmljdCxlLl9sb2NhbGUpOm5ldyBSZWdFeHAobHQodC5yZXBsYWNlKCJcXCIsIiIpLnJlcGxhY2UoL1xcKFxbKXxcXChcXSl8XFsoW15cXVxbXSopXF18XFwoLikvZyxmdW5jdGlvbih0LGUsbixpLHMpe3JldHVybiBlfHxufHxpfHxzfSkpKX1mdW5jdGlvbiBsdCh0KXtyZXR1cm4gdC5yZXBsYWNlKC9bLVwvXFxeJCorPy4oKXxbXF17fV0vZywiXFwkJiIpfXZhciBodD17fTtmdW5jdGlvbiBjdCh0LGUpe3ZhciBuLGk9ZTtmb3IoInN0cmluZyI9PXR5cGVvZiB0JiYodD1bdF0pLCJudW1iZXIiPT10eXBlb2YgZSYmKGk9ZnVuY3Rpb24odCxuKXtuW2VdPXAodCl9KSxuPTA7bjx0Lmxlbmd0aDtuKyspaHRbdFtuXV09aX1mdW5jdGlvbiBmdCh0LGUpe2N0KHQsZnVuY3Rpb24odCxuLGkscyl7aS5fdz1pLl93fHx7fSxlKHQsaS5fdyxpLHMpfSl9ZnVuY3Rpb24gbXQodCxlLG4pe251bGwhPWUmJnIoaHQsdCkmJmh0W3RdKGUsbi5fYSxuLHQpfXZhciBfdD0wLHl0PTEsZ3Q9MixwdD0zLHZ0PTQsRHQ9NSxNdD02LFl0PTcsU3Q9ODtmdW5jdGlvbiB3dCh0LGUpe3JldHVybiBuZXcgRGF0ZShEYXRlLlVUQyh0LGUrMSwwKSkuZ2V0VVRDRGF0ZSgpfU4oIk0iLFsiTU0iLDJdLCJNbyIsZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tb250aCgpKzF9KSxOKCJNTU0iLDAsMCxmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkubW9udGhzU2hvcnQodGhpcyx0KX0pLE4oIk1NTU0iLDAsMCxmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkubW9udGhzKHRoaXMsdCl9KSxXKCJtb250aCIsIk0iKSx1dCgiTSIsQiksdXQoIk1NIixCLGopLHV0KCJNTU0iLGZ1bmN0aW9uKHQsZSl7cmV0dXJuIGUubW9udGhzU2hvcnRSZWdleCh0KX0pLHV0KCJNTU1NIixmdW5jdGlvbih0LGUpe3JldHVybiBlLm1vbnRoc1JlZ2V4KHQpfSksY3QoWyJNIiwiTU0iXSxmdW5jdGlvbih0LGUpe2VbeXRdPXAodCktMX0pLGN0KFsiTU1NIiwiTU1NTSJdLGZ1bmN0aW9uKHQsZSxuLGkpe3ZhciBzPW4uX2xvY2FsZS5tb250aHNQYXJzZSh0LGksbi5fc3RyaWN0KTtudWxsIT1zP2VbeXRdPXM6dShuKS5pbnZhbGlkTW9udGg9dH0pO3ZhciBrdD0vRFtvRF0/KFxbW15cW1xdXSpcXXxccyspK01NTU0/LyxUdD0iSmFudWFyeV9GZWJydWFyeV9NYXJjaF9BcHJpbF9NYXlfSnVuZV9KdWx5X0F1Z3VzdF9TZXB0ZW1iZXJfT2N0b2Jlcl9Ob3ZlbWJlcl9EZWNlbWJlciIuc3BsaXQoIl8iKTt2YXIgYnQ9Ikphbl9GZWJfTWFyX0Fwcl9NYXlfSnVuX0p1bF9BdWdfU2VwX09jdF9Ob3ZfRGVjIi5zcGxpdCgiXyIpO2Z1bmN0aW9uIE90KHQsZSl7dmFyIG47cmV0dXJuIHQuaXNWYWxpZCgpPyJzdHJpbmciPT10eXBlb2YgZSYmIm51bWJlciIhPXR5cGVvZihlPXQubG9jYWxlRGF0YSgpLm1vbnRoc1BhcnNlKGUpKT90OihuPU1hdGgubWluKHQuZGF0ZSgpLHd0KHQueWVhcigpLGUpKSx0Ll9kWyJzZXQiKyh0Ll9pc1VUQz8iVVRDIjoiIikrIk1vbnRoIl0oZSxuKSx0KTp0fWZ1bmN0aW9uIFd0KHQpe3JldHVybiBudWxsIT10PyhPdCh0aGlzLHQpLGUudXBkYXRlT2Zmc2V0KHRoaXMsITApLHRoaXMpOkModGhpcywiTW9udGgiKX12YXIgeHQ9YXQ7dmFyIFV0PWF0O2Z1bmN0aW9uIEd0KCl7ZnVuY3Rpb24gdCh0LGUpe3JldHVybiBlLmxlbmd0aC10Lmxlbmd0aH12YXIgZSxuLGk9W10scz1bXSxyPVtdO2ZvcihlPTA7ZTwxMjtlKyspbj1vKFsyZTMsZV0pLGkucHVzaCh0aGlzLm1vbnRoc1Nob3J0KG4sIiIpKSxzLnB1c2godGhpcy5tb250aHMobiwiIikpLHIucHVzaCh0aGlzLm1vbnRocyhuLCIiKSksci5wdXNoKHRoaXMubW9udGhzU2hvcnQobiwiIikpO2ZvcihpLnNvcnQodCkscy5zb3J0KHQpLHIuc29ydCh0KSxlPTA7ZTwxMjtlKyspaVtlXT1sdChpW2VdKSxzW2VdPWx0KHNbZV0pLHJbZV09bHQocltlXSk7dGhpcy5fbW9udGhzUmVnZXg9bmV3IFJlZ0V4cCgiXigiK3Iuam9pbigifCIpKyIpIiwiaSIpLHRoaXMuX21vbnRoc1Nob3J0UmVnZXg9dGhpcy5fbW9udGhzUmVnZXgsdGhpcy5fbW9udGhzU3RyaWN0UmVnZXg9bmV3IFJlZ0V4cCgiXigiK3Muam9pbigifCIpKyIpJCIsImkiKSx0aGlzLl9tb250aHNTaG9ydFN0cmljdFJlZ2V4PW5ldyBSZWdFeHAoIl4oIitpLmpvaW4oInwiKSsiKSQiLCJpIil9ZnVuY3Rpb24gUHQodCl7dmFyIGUsbj10Ll9hO3JldHVybiBuJiYtMj09PXUodCkub3ZlcmZsb3cmJihlPW5beXRdPDB8fG5beXRdPjExP3l0Om5bZ3RdPDF8fG5bZ3RdPnd0KG5bX3RdLG5beXRdKT9ndDpuW3B0XTwwfHxuW3B0XT4yNHx8MjQ9PT1uW3B0XSYmKDAhPT1uW3Z0XXx8MCE9PW5bRHRdfHwwIT09bltNdF0pP3B0Om5bdnRdPDB8fG5bdnRdPjU5P3Z0Om5bRHRdPDB8fG5bRHRdPjU5P0R0Om5bTXRdPDB8fG5bTXRdPjk5OT9NdDotMSx1KHQpLl9vdmVyZmxvd0RheU9mWWVhciYmKGU8X3R8fGU+Z3QpJiYoZT1ndCksdSh0KS5fb3ZlcmZsb3dXZWVrcyYmLTE9PT1lJiYoZT1ZdCksdSh0KS5fb3ZlcmZsb3dXZWVrZGF5JiYtMT09PWUmJihlPVN0KSx1KHQpLm92ZXJmbG93PWUpLHR9ZnVuY3Rpb24gQ3QodCl7ITE9PT1lLnN1cHByZXNzRGVwcmVjYXRpb25XYXJuaW5ncyYmInVuZGVmaW5lZCIhPXR5cGVvZiBjb25zb2xlJiZjb25zb2xlLndhcm4mJmNvbnNvbGUud2FybigiRGVwcmVjYXRpb24gd2FybmluZzogIit0KX1mdW5jdGlvbiBGdCh0LGUpe3ZhciBuPSEwO3JldHVybiBhKGZ1bmN0aW9uKCl7cmV0dXJuIG4mJihDdCh0KyJcbkFyZ3VtZW50czogIitBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpLmpvaW4oIiwgIikrIlxuIisobmV3IEVycm9yKS5zdGFjayksbj0hMSksZS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LGUpfXZhciBIdD17fTtlLnN1cHByZXNzRGVwcmVjYXRpb25XYXJuaW5ncz0hMTt2YXIgVnQ9L15ccyooKD86WystXVxkezZ9fFxkezR9KS0oPzpcZFxkLVxkXGR8V1xkXGQtXGR8V1xkXGR8XGRcZFxkfFxkXGQpKSg/OihUfCApKFxkXGQoPzo6XGRcZCg/OjpcZFxkKD86Wy4sXVxkKyk/KT8pPykoW1wrXC1dXGRcZCg/Ojo/XGRcZCk/fFxzKlopPyk/LyxMdD0vXlxzKigoPzpbKy1dXGR7Nn18XGR7NH0pKD86XGRcZFxkXGR8V1xkXGRcZHxXXGRcZHxcZFxkXGR8XGRcZCkpKD86KFR8ICkoXGRcZCg/OlxkXGQoPzpcZFxkKD86Wy4sXVxkKyk/KT8pPykoW1wrXC1dXGRcZCg/Ojo/XGRcZCk/fFxzKlopPyk/LyxJdD0vWnxbKy1dXGRcZCg/Ojo/XGRcZCk/LyxBdD1bWyJZWVlZWVktTU0tREQiLC9bKy1dXGR7Nn0tXGRcZC1cZFxkL10sWyJZWVlZLU1NLUREIiwvXGR7NH0tXGRcZC1cZFxkL10sWyJHR0dHLVtXXVdXLUUiLC9cZHs0fS1XXGRcZC1cZC9dLFsiR0dHRy1bV11XVyIsL1xkezR9LVdcZFxkLywhMV0sWyJZWVlZLURERCIsL1xkezR9LVxkezN9L10sWyJZWVlZLU1NIiwvXGR7NH0tXGRcZC8sITFdLFsiWVlZWVlZTU1ERCIsL1srLV1cZHsxMH0vXSxbIllZWVlNTUREIiwvXGR7OH0vXSxbIkdHR0dbV11XV0UiLC9cZHs0fVdcZHszfS9dLFsiR0dHR1tXXVdXIiwvXGR7NH1XXGR7Mn0vLCExXSxbIllZWVlEREQiLC9cZHs3fS9dXSxSdD1bWyJISDptbTpzcy5TU1NTIiwvXGRcZDpcZFxkOlxkXGRcLlxkKy9dLFsiSEg6bW06c3MsU1NTUyIsL1xkXGQ6XGRcZDpcZFxkLFxkKy9dLFsiSEg6bW06c3MiLC9cZFxkOlxkXGQ6XGRcZC9dLFsiSEg6bW0iLC9cZFxkOlxkXGQvXSxbIkhIbW1zcy5TU1NTIiwvXGRcZFxkXGRcZFxkXC5cZCsvXSxbIkhIbW1zcyxTU1NTIiwvXGRcZFxkXGRcZFxkLFxkKy9dLFsiSEhtbXNzIiwvXGRcZFxkXGRcZFxkL10sWyJISG1tIiwvXGRcZFxkXGQvXSxbIkhIIiwvXGRcZC9dXSxOdD0vXlwvP0RhdGVcKChcLT9cZCspL2k7ZnVuY3Rpb24gRXQodCl7dmFyIGUsbixpLHMscixhLG89dC5faSxkPVZ0LmV4ZWMobyl8fEx0LmV4ZWMobyk7aWYoZCl7Zm9yKHUodCkuaXNvPSEwLGU9MCxuPUF0Lmxlbmd0aDtlPG47ZSsrKWlmKEF0W2VdWzFdLmV4ZWMoZFsxXSkpe3M9QXRbZV1bMF0saT0hMSE9PUF0W2VdWzJdO2JyZWFrfWlmKG51bGw9PXMpcmV0dXJuIHZvaWQodC5faXNWYWxpZD0hMSk7aWYoZFszXSl7Zm9yKGU9MCxuPVJ0Lmxlbmd0aDtlPG47ZSsrKWlmKFJ0W2VdWzFdLmV4ZWMoZFszXSkpe3I9KGRbMl18fCIgIikrUnRbZV1bMF07YnJlYWt9aWYobnVsbD09cilyZXR1cm4gdm9pZCh0Ll9pc1ZhbGlkPSExKX1pZighaSYmbnVsbCE9cilyZXR1cm4gdm9pZCh0Ll9pc1ZhbGlkPSExKTtpZihkWzRdKXtpZighSXQuZXhlYyhkWzRdKSlyZXR1cm4gdm9pZCh0Ll9pc1ZhbGlkPSExKTthPSJaIn10Ll9mPXMrKHJ8fCIiKSsoYXx8IiIpLHRlKHQpfWVsc2UgdC5faXNWYWxpZD0hMX1mdW5jdGlvbiB6dCh0KXt2YXIgZT1uZXcgRGF0ZShEYXRlLlVUQy5hcHBseShudWxsLGFyZ3VtZW50cykpO3JldHVybiB0PDEwMCYmdD49MCYmaXNGaW5pdGUoZS5nZXRVVENGdWxsWWVhcigpKSYmZS5zZXRVVENGdWxsWWVhcih0KSxlfWZ1bmN0aW9uIFp0KHQpe3JldHVybiBqdCh0KT8zNjY6MzY1fWZ1bmN0aW9uIGp0KHQpe3JldHVybiB0JTQ9PTAmJnQlMTAwIT0wfHx0JTQwMD09MH1lLmNyZWF0ZUZyb21JbnB1dEZhbGxiYWNrPUZ0KCJtb21lbnQgY29uc3RydWN0aW9uIGZhbGxzIGJhY2sgdG8ganMgRGF0ZS4gVGhpcyBpcyBkaXNjb3VyYWdlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHVwY29taW5nIG1ham9yIHJlbGVhc2UuIFBsZWFzZSByZWZlciB0byBodHRwczovL2dpdGh1Yi5jb20vbW9tZW50L21vbWVudC9pc3N1ZXMvMTQwNyBmb3IgbW9yZSBpbmZvLiIsZnVuY3Rpb24odCl7dC5fZD1uZXcgRGF0ZSh0Ll9pKyh0Ll91c2VVVEM/IiBVVEMiOiIiKSl9KSxOKCJZIiwwLDAsZnVuY3Rpb24oKXt2YXIgdD10aGlzLnllYXIoKTtyZXR1cm4gdDw9OTk5OT8iIit0OiIrIit0fSksTigwLFsiWVkiLDJdLDAsZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy55ZWFyKCklMTAwfSksTigwLFsiWVlZWSIsNF0sMCwieWVhciIpLE4oMCxbIllZWVlZIiw1XSwwLCJ5ZWFyIiksTigwLFsiWVlZWVlZIiw2LCEwXSwwLCJ5ZWFyIiksVygieWVhciIsInkiKSx1dCgiWSIsaXQpLHV0KCJZWSIsQixqKSx1dCgiWVlZWSIsdHQscSksdXQoIllZWVlZIixldCxKKSx1dCgiWVlZWVlZIixldCxKKSxjdChbIllZWVlZIiwiWVlZWVlZIl0sX3QpLGN0KCJZWVlZIixmdW5jdGlvbih0LG4pe25bX3RdPTI9PT10Lmxlbmd0aD9lLnBhcnNlVHdvRGlnaXRZZWFyKHQpOnAodCl9KSxjdCgiWVkiLGZ1bmN0aW9uKHQsbil7bltfdF09ZS5wYXJzZVR3b0RpZ2l0WWVhcih0KX0pLGN0KCJZIixmdW5jdGlvbih0LGUpe2VbX3RdPXBhcnNlSW50KHQsMTApfSksZS5wYXJzZVR3b0RpZ2l0WWVhcj1mdW5jdGlvbih0KXtyZXR1cm4gcCh0KSsocCh0KT42OD8xOTAwOjJlMyl9O3ZhciAkdD1QKCJGdWxsWWVhciIsITEpO2Z1bmN0aW9uIHF0KHQsZSxuKXt2YXIgaT03K2UtbjtyZXR1cm4tKCg3K3p0KHQsMCxpKS5nZXRVVENEYXkoKS1lKSU3KStpLTF9ZnVuY3Rpb24gSnQodCxlLG4saSxzKXt2YXIgcixhLG89MSs3KihlLTEpKyg3K24taSklNytxdCh0LGkscyk7cmV0dXJuIG88PTA/YT1adChyPXQtMSkrbzpvPlp0KHQpPyhyPXQrMSxhPW8tWnQodCkpOihyPXQsYT1vKSx7eWVhcjpyLGRheU9mWWVhcjphfX1mdW5jdGlvbiBCdCh0LGUsbil7dmFyIGkscyxyPXF0KHQueWVhcigpLGUsbiksYT1NYXRoLmZsb29yKCh0LmRheU9mWWVhcigpLXItMSkvNykrMTtyZXR1cm4gYTwxP2k9YStRdChzPXQueWVhcigpLTEsZSxuKTphPlF0KHQueWVhcigpLGUsbik/KGk9YS1RdCh0LnllYXIoKSxlLG4pLHM9dC55ZWFyKCkrMSk6KHM9dC55ZWFyKCksaT1hKSx7d2VlazppLHllYXI6c319ZnVuY3Rpb24gUXQodCxlLG4pe3ZhciBpPXF0KHQsZSxuKSxzPXF0KHQrMSxlLG4pO3JldHVybihadCh0KS1pK3MpLzd9ZnVuY3Rpb24gWHQodCxlLG4pe3JldHVybiBudWxsIT10P3Q6bnVsbCE9ZT9lOm59ZnVuY3Rpb24gS3QodCl7dmFyIG4saSxzLHIsYT1bXTtpZighdC5fZCl7Zm9yKHM9ZnVuY3Rpb24odCl7dmFyIG49bmV3IERhdGUoZS5ub3coKSk7cmV0dXJuIHQuX3VzZVVUQz9bbi5nZXRVVENGdWxsWWVhcigpLG4uZ2V0VVRDTW9udGgoKSxuLmdldFVUQ0RhdGUoKV06W24uZ2V0RnVsbFllYXIoKSxuLmdldE1vbnRoKCksbi5nZXREYXRlKCldfSh0KSx0Ll93JiZudWxsPT10Ll9hW2d0XSYmbnVsbD09dC5fYVt5dF0mJmZ1bmN0aW9uKHQpe3ZhciBlLG4saSxzLHIsYSxvLGQ7bnVsbCE9KGU9dC5fdykuR0d8fG51bGwhPWUuV3x8bnVsbCE9ZS5FPyhyPTEsYT00LG49WHQoZS5HRyx0Ll9hW190XSxCdChpZSgpLDEsNCkueWVhciksaT1YdChlLlcsMSksKChzPVh0KGUuRSwxKSk8MXx8cz43KSYmKGQ9ITApKToocj10Ll9sb2NhbGUuX3dlZWsuZG93LGE9dC5fbG9jYWxlLl93ZWVrLmRveSxuPVh0KGUuZ2csdC5fYVtfdF0sQnQoaWUoKSxyLGEpLnllYXIpLGk9WHQoZS53LDEpLG51bGwhPWUuZD8oKHM9ZS5kKTwwfHxzPjYpJiYoZD0hMCk6bnVsbCE9ZS5lPyhzPWUuZStyLChlLmU8MHx8ZS5lPjYpJiYoZD0hMCkpOnM9cik7aTwxfHxpPlF0KG4scixhKT91KHQpLl9vdmVyZmxvd1dlZWtzPSEwOm51bGwhPWQ/dSh0KS5fb3ZlcmZsb3dXZWVrZGF5PSEwOihvPUp0KG4saSxzLHIsYSksdC5fYVtfdF09by55ZWFyLHQuX2RheU9mWWVhcj1vLmRheU9mWWVhcil9KHQpLHQuX2RheU9mWWVhciYmKHI9WHQodC5fYVtfdF0sc1tfdF0pLHQuX2RheU9mWWVhcj5adChyKSYmKHUodCkuX292ZXJmbG93RGF5T2ZZZWFyPSEwKSxpPXp0KHIsMCx0Ll9kYXlPZlllYXIpLHQuX2FbeXRdPWkuZ2V0VVRDTW9udGgoKSx0Ll9hW2d0XT1pLmdldFVUQ0RhdGUoKSksbj0wO248MyYmbnVsbD09dC5fYVtuXTsrK24pdC5fYVtuXT1hW25dPXNbbl07Zm9yKDtuPDc7bisrKXQuX2Fbbl09YVtuXT1udWxsPT10Ll9hW25dPzI9PT1uPzE6MDp0Ll9hW25dOzI0PT09dC5fYVtwdF0mJjA9PT10Ll9hW3Z0XSYmMD09PXQuX2FbRHRdJiYwPT09dC5fYVtNdF0mJih0Ll9uZXh0RGF5PSEwLHQuX2FbcHRdPTApLHQuX2Q9KHQuX3VzZVVUQz96dDpmdW5jdGlvbih0LGUsbixpLHMscixhKXt2YXIgbz1uZXcgRGF0ZSh0LGUsbixpLHMscixhKTtyZXR1cm4gdDwxMDAmJnQ+PTAmJmlzRmluaXRlKG8uZ2V0RnVsbFllYXIoKSkmJm8uc2V0RnVsbFllYXIodCksb30pLmFwcGx5KG51bGwsYSksbnVsbCE9dC5fdHptJiZ0Ll9kLnNldFVUQ01pbnV0ZXModC5fZC5nZXRVVENNaW51dGVzKCktdC5fdHptKSx0Ll9uZXh0RGF5JiYodC5fYVtwdF09MjQpfX1mdW5jdGlvbiB0ZSh0KXtpZih0Ll9mIT09ZS5JU09fODYwMSl7dC5fYT1bXSx1KHQpLmVtcHR5PSEwO3ZhciBuLGkscyxyLGEsbz0iIit0Ll9pLGQ9by5sZW5ndGgsbD0wO2ZvcihzPXoodC5fZix0Ll9sb2NhbGUpLm1hdGNoKEwpfHxbXSxuPTA7bjxzLmxlbmd0aDtuKyspcj1zW25dLChpPShvLm1hdGNoKGR0KHIsdCkpfHxbXSlbMF0pJiYoKGE9by5zdWJzdHIoMCxvLmluZGV4T2YoaSkpKS5sZW5ndGg+MCYmdSh0KS51bnVzZWRJbnB1dC5wdXNoKGEpLG89by5zbGljZShvLmluZGV4T2YoaSkraS5sZW5ndGgpLGwrPWkubGVuZ3RoKSxSW3JdPyhpP3UodCkuZW1wdHk9ITE6dSh0KS51bnVzZWRUb2tlbnMucHVzaChyKSxtdChyLGksdCkpOnQuX3N0cmljdCYmIWkmJnUodCkudW51c2VkVG9rZW5zLnB1c2gocik7dSh0KS5jaGFyc0xlZnRPdmVyPWQtbCxvLmxlbmd0aD4wJiZ1KHQpLnVudXNlZElucHV0LnB1c2gobyksITA9PT11KHQpLmJpZ0hvdXImJnQuX2FbcHRdPD0xMiYmdC5fYVtwdF0+MCYmKHUodCkuYmlnSG91cj12b2lkIDApLHQuX2FbcHRdPWZ1bmN0aW9uKHQsZSxuKXt2YXIgaTtpZihudWxsPT1uKXJldHVybiBlO3JldHVybiBudWxsIT10Lm1lcmlkaWVtSG91cj90Lm1lcmlkaWVtSG91cihlLG4pOm51bGwhPXQuaXNQTT8oKGk9dC5pc1BNKG4pKSYmZTwxMiYmKGUrPTEyKSxpfHwxMiE9PWV8fChlPTApLGUpOmV9KHQuX2xvY2FsZSx0Ll9hW3B0XSx0Ll9tZXJpZGllbSksS3QodCksUHQodCl9ZWxzZSBFdCh0KX1mdW5jdGlvbiBlZSh0KXt2YXIgcj10Ll9pLG89dC5fZjtyZXR1cm4gdC5fbG9jYWxlPXQuX2xvY2FsZXx8Yih0Ll9sKSxudWxsPT09cnx8dm9pZCAwPT09byYmIiI9PT1yP2woe251bGxJbnB1dDohMH0pOigic3RyaW5nIj09dHlwZW9mIHImJih0Ll9pPXI9dC5fbG9jYWxlLnByZXBhcnNlKHIpKSx5KHIpP25ldyBfKFB0KHIpKToobihvKT9mdW5jdGlvbih0KXt2YXIgZSxuLGkscyxyO2lmKDA9PT10Ll9mLmxlbmd0aClyZXR1cm4gdSh0KS5pbnZhbGlkRm9ybWF0PSEwLHZvaWQodC5fZD1uZXcgRGF0ZShOYU4pKTtmb3Iocz0wO3M8dC5fZi5sZW5ndGg7cysrKXI9MCxlPWYoe30sdCksbnVsbCE9dC5fdXNlVVRDJiYoZS5fdXNlVVRDPXQuX3VzZVVUQyksZS5fZj10Ll9mW3NdLHRlKGUpLGQoZSkmJihyKz11KGUpLmNoYXJzTGVmdE92ZXIscis9MTAqdShlKS51bnVzZWRUb2tlbnMubGVuZ3RoLHUoZSkuc2NvcmU9ciwobnVsbD09aXx8cjxpKSYmKGk9cixuPWUpKTthKHQsbnx8ZSl9KHQpOm8/dGUodCk6aShyKT90Ll9kPXI6ZnVuY3Rpb24odCl7dmFyIHI9dC5faTt2b2lkIDA9PT1yP3QuX2Q9bmV3IERhdGUoZS5ub3coKSk6aShyKT90Ll9kPW5ldyBEYXRlKCtyKToic3RyaW5nIj09dHlwZW9mIHI/ZnVuY3Rpb24odCl7dmFyIG49TnQuZXhlYyh0Ll9pKTtudWxsPT09bj8oRXQodCksITE9PT10Ll9pc1ZhbGlkJiYoZGVsZXRlIHQuX2lzVmFsaWQsZS5jcmVhdGVGcm9tSW5wdXRGYWxsYmFjayh0KSkpOnQuX2Q9bmV3IERhdGUoK25bMV0pfSh0KTpuKHIpPyh0Ll9hPXMoci5zbGljZSgwKSxmdW5jdGlvbih0KXtyZXR1cm4gcGFyc2VJbnQodCwxMCl9KSxLdCh0KSk6Im9iamVjdCI9PXR5cGVvZiByP2Z1bmN0aW9uKHQpe2lmKCF0Ll9kKXt2YXIgZT1VKHQuX2kpO3QuX2E9cyhbZS55ZWFyLGUubW9udGgsZS5kYXl8fGUuZGF0ZSxlLmhvdXIsZS5taW51dGUsZS5zZWNvbmQsZS5taWxsaXNlY29uZF0sZnVuY3Rpb24odCl7cmV0dXJuIHQmJnBhcnNlSW50KHQsMTApfSksS3QodCl9fSh0KToibnVtYmVyIj09dHlwZW9mIHI/dC5fZD1uZXcgRGF0ZShyKTplLmNyZWF0ZUZyb21JbnB1dEZhbGxiYWNrKHQpfSh0KSxkKHQpfHwodC5fZD1udWxsKSx0KSl9ZnVuY3Rpb24gbmUodCxlLG4saSxzKXt2YXIgcixhPXt9O3JldHVybiJib29sZWFuIj09dHlwZW9mIG4mJihpPW4sbj12b2lkIDApLGEuX2lzQU1vbWVudE9iamVjdD0hMCxhLl91c2VVVEM9YS5faXNVVEM9cyxhLl9sPW4sYS5faT10LGEuX2Y9ZSxhLl9zdHJpY3Q9aSwocj1uZXcgXyhQdChlZShhKSkpKS5fbmV4dERheSYmKHIuYWRkKDEsImQiKSxyLl9uZXh0RGF5PXZvaWQgMCkscn1mdW5jdGlvbiBpZSh0LGUsbixpKXtyZXR1cm4gbmUodCxlLG4saSwhMSl9ZS5JU09fODYwMT1mdW5jdGlvbigpe307dmFyIHNlPUZ0KCJtb21lbnQoKS5taW4gaXMgZGVwcmVjYXRlZCwgdXNlIG1vbWVudC5taW4gaW5zdGVhZC4gaHR0cHM6Ly9naXRodWIuY29tL21vbWVudC9tb21lbnQvaXNzdWVzLzE1NDgiLGZ1bmN0aW9uKCl7dmFyIHQ9aWUuYXBwbHkobnVsbCxhcmd1bWVudHMpO3JldHVybiB0aGlzLmlzVmFsaWQoKSYmdC5pc1ZhbGlkKCk/dDx0aGlzP3RoaXM6dDpsKCl9KSxyZT1GdCgibW9tZW50KCkubWF4IGlzIGRlcHJlY2F0ZWQsIHVzZSBtb21lbnQubWF4IGluc3RlYWQuIGh0dHBzOi8vZ2l0aHViLmNvbS9tb21lbnQvbW9tZW50L2lzc3Vlcy8xNTQ4IixmdW5jdGlvbigpe3ZhciB0PWllLmFwcGx5KG51bGwsYXJndW1lbnRzKTtyZXR1cm4gdGhpcy5pc1ZhbGlkKCkmJnQuaXNWYWxpZCgpP3Q+dGhpcz90aGlzOnQ6bCgpfSk7ZnVuY3Rpb24gYWUodCxlKXt2YXIgaSxzO2lmKDE9PT1lLmxlbmd0aCYmbihlWzBdKSYmKGU9ZVswXSksIWUubGVuZ3RoKXJldHVybiBpZSgpO2ZvcihpPWVbMF0scz0xO3M8ZS5sZW5ndGg7KytzKWVbc10uaXNWYWxpZCgpJiYhZVtzXVt0XShpKXx8KGk9ZVtzXSk7cmV0dXJuIGl9ZnVuY3Rpb24gb2UodCl7dmFyIGU9VSh0KSxuPWUueWVhcnx8MCxpPWUucXVhcnRlcnx8MCxzPWUubW9udGh8fDAscj1lLndlZWt8fDAsYT1lLmRheXx8MCxvPWUuaG91cnx8MCx1PWUubWludXRlfHwwLGQ9ZS5zZWNvbmR8fDAsbD1lLm1pbGxpc2Vjb25kfHwwO3RoaXMuX21pbGxpc2Vjb25kcz0rbCsxZTMqZCs2ZTQqdSszNmU1Km8sdGhpcy5fZGF5cz0rYSs3KnIsdGhpcy5fbW9udGhzPStzKzMqaSsxMipuLHRoaXMuX2RhdGE9e30sdGhpcy5fbG9jYWxlPWIoKSx0aGlzLl9idWJibGUoKX1mdW5jdGlvbiB1ZSh0KXtyZXR1cm4gdCBpbnN0YW5jZW9mIG9lfWZ1bmN0aW9uIGRlKHQsZSl7Tih0LDAsMCxmdW5jdGlvbigpe3ZhciB0PXRoaXMudXRjT2Zmc2V0KCksbj0iKyI7cmV0dXJuIHQ8MCYmKHQ9LXQsbj0iLSIpLG4rVih+fih0LzYwKSwyKStlK1Yofn50JTYwLDIpfSl9ZGUoIloiLCI6IiksZGUoIlpaIiwiIiksdXQoIloiLHJ0KSx1dCgiWloiLHJ0KSxjdChbIloiLCJaWiJdLGZ1bmN0aW9uKHQsZSxuKXtuLl91c2VVVEM9ITAsbi5fdHptPWhlKHJ0LHQpfSk7dmFyIGxlPS8oW1wrXC1dfFxkXGQpL2dpO2Z1bmN0aW9uIGhlKHQsZSl7dmFyIG49KGV8fCIiKS5tYXRjaCh0KXx8W10saT0oKG5bbi5sZW5ndGgtMV18fFtdKSsiIikubWF0Y2gobGUpfHxbIi0iLDAsMF0scz02MCppWzFdK3AoaVsyXSk7cmV0dXJuIisiPT09aVswXT9zOi1zfWZ1bmN0aW9uIGNlKHQsbil7dmFyIHMscjtyZXR1cm4gbi5faXNVVEM/KHM9bi5jbG9uZSgpLHI9KHkodCl8fGkodCk/K3Q6K2llKHQpKS0rcyxzLl9kLnNldFRpbWUoK3MuX2QrciksZS51cGRhdGVPZmZzZXQocywhMSkscyk6aWUodCkubG9jYWwoKX1mdW5jdGlvbiBmZSh0KXtyZXR1cm4gMTUqLU1hdGgucm91bmQodC5fZC5nZXRUaW1lem9uZU9mZnNldCgpLzE1KX1mdW5jdGlvbiBtZSgpe3JldHVybiEhdGhpcy5pc1ZhbGlkKCkmJih0aGlzLl9pc1VUQyYmMD09PXRoaXMuX29mZnNldCl9ZS51cGRhdGVPZmZzZXQ9ZnVuY3Rpb24oKXt9O3ZhciBfZT0vKFwtKT8oPzooXGQqKVsuIF0pPyhcZCspXDooXGQrKSg/Olw6KFxkKylcLj8oXGR7M30pPyk/Lyx5ZT0vXigtKT9QKD86KD86KFswLTksLl0qKVkpPyg/OihbMC05LC5dKilNKT8oPzooWzAtOSwuXSopRCk/KD86VCg/OihbMC05LC5dKilIKT8oPzooWzAtOSwuXSopTSk/KD86KFswLTksLl0qKVMpPyk/fChbMC05LC5dKilXKSQvO2Z1bmN0aW9uIGdlKHQsZSl7dmFyIG4saSxzLGE9dCxvPW51bGw7cmV0dXJuIHVlKHQpP2E9e21zOnQuX21pbGxpc2Vjb25kcyxkOnQuX2RheXMsTTp0Ll9tb250aHN9OiJudW1iZXIiPT10eXBlb2YgdD8oYT17fSxlP2FbZV09dDphLm1pbGxpc2Vjb25kcz10KToobz1fZS5leGVjKHQpKT8obj0iLSI9PT1vWzFdPy0xOjEsYT17eTowLGQ6cChvW2d0XSkqbixoOnAob1twdF0pKm4sbTpwKG9bdnRdKSpuLHM6cChvW0R0XSkqbixtczpwKG9bTXRdKSpufSk6KG89eWUuZXhlYyh0KSk/KG49Ii0iPT09b1sxXT8tMToxLGE9e3k6cGUob1syXSxuKSxNOnBlKG9bM10sbiksZDpwZShvWzRdLG4pLGg6cGUob1s1XSxuKSxtOnBlKG9bNl0sbiksczpwZShvWzddLG4pLHc6cGUob1s4XSxuKX0pOm51bGw9PWE/YT17fToib2JqZWN0Ij09dHlwZW9mIGEmJigiZnJvbSJpbiBhfHwidG8iaW4gYSkmJihzPWZ1bmN0aW9uKHQsZSl7dmFyIG47aWYoIXQuaXNWYWxpZCgpfHwhZS5pc1ZhbGlkKCkpcmV0dXJue21pbGxpc2Vjb25kczowLG1vbnRoczowfTtlPWNlKGUsdCksdC5pc0JlZm9yZShlKT9uPXZlKHQsZSk6KChuPXZlKGUsdCkpLm1pbGxpc2Vjb25kcz0tbi5taWxsaXNlY29uZHMsbi5tb250aHM9LW4ubW9udGhzKTtyZXR1cm4gbn0oaWUoYS5mcm9tKSxpZShhLnRvKSksKGE9e30pLm1zPXMubWlsbGlzZWNvbmRzLGEuTT1zLm1vbnRocyksaT1uZXcgb2UoYSksdWUodCkmJnIodCwiX2xvY2FsZSIpJiYoaS5fbG9jYWxlPXQuX2xvY2FsZSksaX1mdW5jdGlvbiBwZSh0LGUpe3ZhciBuPXQmJnBhcnNlRmxvYXQodC5yZXBsYWNlKCIsIiwiLiIpKTtyZXR1cm4oaXNOYU4obik/MDpuKSplfWZ1bmN0aW9uIHZlKHQsZSl7dmFyIG49e21pbGxpc2Vjb25kczowLG1vbnRoczowfTtyZXR1cm4gbi5tb250aHM9ZS5tb250aCgpLXQubW9udGgoKSsxMiooZS55ZWFyKCktdC55ZWFyKCkpLHQuY2xvbmUoKS5hZGQobi5tb250aHMsIk0iKS5pc0FmdGVyKGUpJiYtLW4ubW9udGhzLG4ubWlsbGlzZWNvbmRzPStlLSt0LmNsb25lKCkuYWRkKG4ubW9udGhzLCJNIiksbn1mdW5jdGlvbiBEZSh0LGUpe3JldHVybiBmdW5jdGlvbihuLGkpe3ZhciBzO3JldHVybiBudWxsPT09aXx8aXNOYU4oK2kpfHwoIWZ1bmN0aW9uKHQsZSl7SHRbdF18fChDdChlKSxIdFt0XT0hMCl9KGUsIm1vbWVudCgpLiIrZSsiKHBlcmlvZCwgbnVtYmVyKSBpcyBkZXByZWNhdGVkLiBQbGVhc2UgdXNlIG1vbWVudCgpLiIrZSsiKG51bWJlciwgcGVyaW9kKS4iKSxzPW4sbj1pLGk9cyksTWUodGhpcyxnZShuPSJzdHJpbmciPT10eXBlb2Ygbj8rbjpuLGkpLHQpLHRoaXN9fWZ1bmN0aW9uIE1lKHQsbixpLHMpe3ZhciByPW4uX21pbGxpc2Vjb25kcyxhPW4uX2RheXMsbz1uLl9tb250aHM7dC5pc1ZhbGlkKCkmJihzPW51bGw9PXN8fHMsciYmdC5fZC5zZXRUaW1lKCt0Ll9kK3IqaSksYSYmRih0LCJEYXRlIixDKHQsIkRhdGUiKSthKmkpLG8mJk90KHQsQyh0LCJNb250aCIpK28qaSkscyYmZS51cGRhdGVPZmZzZXQodCxhfHxvKSl9Z2UuZm49b2UucHJvdG90eXBlO3ZhciBZZT1EZSgxLCJhZGQiKSxTZT1EZSgtMSwic3VidHJhY3QiKTtmdW5jdGlvbiB3ZSh0KXt2YXIgZTtyZXR1cm4gdm9pZCAwPT09dD90aGlzLl9sb2NhbGUuX2FiYnI6KG51bGwhPShlPWIodCkpJiYodGhpcy5fbG9jYWxlPWUpLHRoaXMpfWUuZGVmYXVsdEZvcm1hdD0iWVlZWS1NTS1ERFRISDptbTpzc1oiO3ZhciBrZT1GdCgibW9tZW50KCkubGFuZygpIGlzIGRlcHJlY2F0ZWQuIEluc3RlYWQsIHVzZSBtb21lbnQoKS5sb2NhbGVEYXRhKCkgdG8gZ2V0IHRoZSBsYW5ndWFnZSBjb25maWd1cmF0aW9uLiBVc2UgbW9tZW50KCkubG9jYWxlKCkgdG8gY2hhbmdlIGxhbmd1YWdlcy4iLGZ1bmN0aW9uKHQpe3JldHVybiB2b2lkIDA9PT10P3RoaXMubG9jYWxlRGF0YSgpOnRoaXMubG9jYWxlKHQpfSk7ZnVuY3Rpb24gVGUoKXtyZXR1cm4gdGhpcy5fbG9jYWxlfWZ1bmN0aW9uIGJlKHQsZSl7TigwLFt0LHQubGVuZ3RoXSwwLGUpfWZ1bmN0aW9uIE9lKHQsZSxuLGkscyl7dmFyIHI7cmV0dXJuIG51bGw9PXQ/QnQodGhpcyxpLHMpLnllYXI6KGU+KHI9UXQodCxpLHMpKSYmKGU9ciksZnVuY3Rpb24odCxlLG4saSxzKXt2YXIgcj1KdCh0LGUsbixpLHMpLGE9enQoci55ZWFyLDAsci5kYXlPZlllYXIpO3JldHVybiB0aGlzLnllYXIoYS5nZXRVVENGdWxsWWVhcigpKSx0aGlzLm1vbnRoKGEuZ2V0VVRDTW9udGgoKSksdGhpcy5kYXRlKGEuZ2V0VVRDRGF0ZSgpKSx0aGlzfS5jYWxsKHRoaXMsdCxlLG4saSxzKSl9TigwLFsiZ2ciLDJdLDAsZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy53ZWVrWWVhcigpJTEwMH0pLE4oMCxbIkdHIiwyXSwwLGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaXNvV2Vla1llYXIoKSUxMDB9KSxiZSgiZ2dnZyIsIndlZWtZZWFyIiksYmUoImdnZ2dnIiwid2Vla1llYXIiKSxiZSgiR0dHRyIsImlzb1dlZWtZZWFyIiksYmUoIkdHR0dHIiwiaXNvV2Vla1llYXIiKSxXKCJ3ZWVrWWVhciIsImdnIiksVygiaXNvV2Vla1llYXIiLCJHRyIpLHV0KCJHIixpdCksdXQoImciLGl0KSx1dCgiR0ciLEIsaiksdXQoImdnIixCLGopLHV0KCJHR0dHIix0dCxxKSx1dCgiZ2dnZyIsdHQscSksdXQoIkdHR0dHIixldCxKKSx1dCgiZ2dnZ2ciLGV0LEopLGZ0KFsiZ2dnZyIsImdnZ2dnIiwiR0dHRyIsIkdHR0dHIl0sZnVuY3Rpb24odCxlLG4saSl7ZVtpLnN1YnN0cigwLDIpXT1wKHQpfSksZnQoWyJnZyIsIkdHIl0sZnVuY3Rpb24odCxuLGkscyl7bltzXT1lLnBhcnNlVHdvRGlnaXRZZWFyKHQpfSksTigiUSIsMCwiUW8iLCJxdWFydGVyIiksVygicXVhcnRlciIsIlEiKSx1dCgiUSIsWiksY3QoIlEiLGZ1bmN0aW9uKHQsZSl7ZVt5dF09MyoocCh0KS0xKX0pLE4oInciLFsid3ciLDJdLCJ3byIsIndlZWsiKSxOKCJXIixbIldXIiwyXSwiV28iLCJpc29XZWVrIiksVygid2VlayIsInciKSxXKCJpc29XZWVrIiwiVyIpLHV0KCJ3IixCKSx1dCgid3ciLEIsaiksdXQoIlciLEIpLHV0KCJXVyIsQixqKSxmdChbInciLCJ3dyIsIlciLCJXVyJdLGZ1bmN0aW9uKHQsZSxuLGkpe2VbaS5zdWJzdHIoMCwxKV09cCh0KX0pO04oIkQiLFsiREQiLDJdLCJEbyIsImRhdGUiKSxXKCJkYXRlIiwiRCIpLHV0KCJEIixCKSx1dCgiREQiLEIsaiksdXQoIkRvIixmdW5jdGlvbih0LGUpe3JldHVybiB0P2UuX29yZGluYWxQYXJzZTplLl9vcmRpbmFsUGFyc2VMZW5pZW50fSksY3QoWyJEIiwiREQiXSxndCksY3QoIkRvIixmdW5jdGlvbih0LGUpe2VbZ3RdPXAodC5tYXRjaChCKVswXSl9KTt2YXIgV2U9UCgiRGF0ZSIsITApO04oImQiLDAsImRvIiwiZGF5IiksTigiZGQiLDAsMCxmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkud2Vla2RheXNNaW4odGhpcyx0KX0pLE4oImRkZCIsMCwwLGZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmxvY2FsZURhdGEoKS53ZWVrZGF5c1Nob3J0KHRoaXMsdCl9KSxOKCJkZGRkIiwwLDAsZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLndlZWtkYXlzKHRoaXMsdCl9KSxOKCJlIiwwLDAsIndlZWtkYXkiKSxOKCJFIiwwLDAsImlzb1dlZWtkYXkiKSxXKCJkYXkiLCJkIiksVygid2Vla2RheSIsImUiKSxXKCJpc29XZWVrZGF5IiwiRSIpLHV0KCJkIixCKSx1dCgiZSIsQiksdXQoIkUiLEIpLHV0KCJkZCIsYXQpLHV0KCJkZGQiLGF0KSx1dCgiZGRkZCIsYXQpLGZ0KFsiZGQiLCJkZGQiLCJkZGRkIl0sZnVuY3Rpb24odCxlLG4saSl7dmFyIHM9bi5fbG9jYWxlLndlZWtkYXlzUGFyc2UodCxpLG4uX3N0cmljdCk7bnVsbCE9cz9lLmQ9czp1KG4pLmludmFsaWRXZWVrZGF5PXR9KSxmdChbImQiLCJlIiwiRSJdLGZ1bmN0aW9uKHQsZSxuLGkpe2VbaV09cCh0KX0pO3ZhciB4ZT0iU3VuZGF5X01vbmRheV9UdWVzZGF5X1dlZG5lc2RheV9UaHVyc2RheV9GcmlkYXlfU2F0dXJkYXkiLnNwbGl0KCJfIik7dmFyIFVlPSJTdW5fTW9uX1R1ZV9XZWRfVGh1X0ZyaV9TYXQiLnNwbGl0KCJfIik7dmFyIEdlPSJTdV9Nb19UdV9XZV9UaF9Gcl9TYSIuc3BsaXQoIl8iKTtmdW5jdGlvbiBQZSgpe3JldHVybiB0aGlzLmhvdXJzKCklMTJ8fDEyfWZ1bmN0aW9uIENlKHQsZSl7Tih0LDAsMCxmdW5jdGlvbigpe3JldHVybiB0aGlzLmxvY2FsZURhdGEoKS5tZXJpZGllbSh0aGlzLmhvdXJzKCksdGhpcy5taW51dGVzKCksZSl9KX1mdW5jdGlvbiBGZSh0LGUpe3JldHVybiBlLl9tZXJpZGllbVBhcnNlfU4oIkRERCIsWyJEREREIiwzXSwiREREbyIsImRheU9mWWVhciIpLFcoImRheU9mWWVhciIsIkRERCIpLHV0KCJEREQiLEspLHV0KCJEREREIiwkKSxjdChbIkRERCIsIkREREQiXSxmdW5jdGlvbih0LGUsbil7bi5fZGF5T2ZZZWFyPXAodCl9KSxOKCJIIixbIkhIIiwyXSwwLCJob3VyIiksTigiaCIsWyJoaCIsMl0sMCxQZSksTigiaG1tIiwwLDAsZnVuY3Rpb24oKXtyZXR1cm4iIitQZS5hcHBseSh0aGlzKStWKHRoaXMubWludXRlcygpLDIpfSksTigiaG1tc3MiLDAsMCxmdW5jdGlvbigpe3JldHVybiIiK1BlLmFwcGx5KHRoaXMpK1YodGhpcy5taW51dGVzKCksMikrVih0aGlzLnNlY29uZHMoKSwyKX0pLE4oIkhtbSIsMCwwLGZ1bmN0aW9uKCl7cmV0dXJuIiIrdGhpcy5ob3VycygpK1YodGhpcy5taW51dGVzKCksMil9KSxOKCJIbW1zcyIsMCwwLGZ1bmN0aW9uKCl7cmV0dXJuIiIrdGhpcy5ob3VycygpK1YodGhpcy5taW51dGVzKCksMikrVih0aGlzLnNlY29uZHMoKSwyKX0pLENlKCJhIiwhMCksQ2UoIkEiLCExKSxXKCJob3VyIiwiaCIpLHV0KCJhIixGZSksdXQoIkEiLEZlKSx1dCgiSCIsQiksdXQoImgiLEIpLHV0KCJISCIsQixqKSx1dCgiaGgiLEIsaiksdXQoImhtbSIsUSksdXQoImhtbXNzIixYKSx1dCgiSG1tIixRKSx1dCgiSG1tc3MiLFgpLGN0KFsiSCIsIkhIIl0scHQpLGN0KFsiYSIsIkEiXSxmdW5jdGlvbih0LGUsbil7bi5faXNQbT1uLl9sb2NhbGUuaXNQTSh0KSxuLl9tZXJpZGllbT10fSksY3QoWyJoIiwiaGgiXSxmdW5jdGlvbih0LGUsbil7ZVtwdF09cCh0KSx1KG4pLmJpZ0hvdXI9ITB9KSxjdCgiaG1tIixmdW5jdGlvbih0LGUsbil7dmFyIGk9dC5sZW5ndGgtMjtlW3B0XT1wKHQuc3Vic3RyKDAsaSkpLGVbdnRdPXAodC5zdWJzdHIoaSkpLHUobikuYmlnSG91cj0hMH0pLGN0KCJobW1zcyIsZnVuY3Rpb24odCxlLG4pe3ZhciBpPXQubGVuZ3RoLTQscz10Lmxlbmd0aC0yO2VbcHRdPXAodC5zdWJzdHIoMCxpKSksZVt2dF09cCh0LnN1YnN0cihpLDIpKSxlW0R0XT1wKHQuc3Vic3RyKHMpKSx1KG4pLmJpZ0hvdXI9ITB9KSxjdCgiSG1tIixmdW5jdGlvbih0LGUsbil7dmFyIGk9dC5sZW5ndGgtMjtlW3B0XT1wKHQuc3Vic3RyKDAsaSkpLGVbdnRdPXAodC5zdWJzdHIoaSkpfSksY3QoIkhtbXNzIixmdW5jdGlvbih0LGUsbil7dmFyIGk9dC5sZW5ndGgtNCxzPXQubGVuZ3RoLTI7ZVtwdF09cCh0LnN1YnN0cigwLGkpKSxlW3Z0XT1wKHQuc3Vic3RyKGksMikpLGVbRHRdPXAodC5zdWJzdHIocykpfSk7dmFyIEhlPVAoIkhvdXJzIiwhMCk7TigibSIsWyJtbSIsMl0sMCwibWludXRlIiksVygibWludXRlIiwibSIpLHV0KCJtIixCKSx1dCgibW0iLEIsaiksY3QoWyJtIiwibW0iXSx2dCk7dmFyIFZlPVAoIk1pbnV0ZXMiLCExKTtOKCJzIixbInNzIiwyXSwwLCJzZWNvbmQiKSxXKCJzZWNvbmQiLCJzIiksdXQoInMiLEIpLHV0KCJzcyIsQixqKSxjdChbInMiLCJzcyJdLER0KTt2YXIgTGUsSWU9UCgiU2Vjb25kcyIsITEpO2ZvcihOKCJTIiwwLDAsZnVuY3Rpb24oKXtyZXR1cm5+fih0aGlzLm1pbGxpc2Vjb25kKCkvMTAwKX0pLE4oMCxbIlNTIiwyXSwwLGZ1bmN0aW9uKCl7cmV0dXJufn4odGhpcy5taWxsaXNlY29uZCgpLzEwKX0pLE4oMCxbIlNTUyIsM10sMCwibWlsbGlzZWNvbmQiKSxOKDAsWyJTU1NTIiw0XSwwLGZ1bmN0aW9uKCl7cmV0dXJuIDEwKnRoaXMubWlsbGlzZWNvbmQoKX0pLE4oMCxbIlNTU1NTIiw1XSwwLGZ1bmN0aW9uKCl7cmV0dXJuIDEwMCp0aGlzLm1pbGxpc2Vjb25kKCl9KSxOKDAsWyJTU1NTU1MiLDZdLDAsZnVuY3Rpb24oKXtyZXR1cm4gMWUzKnRoaXMubWlsbGlzZWNvbmQoKX0pLE4oMCxbIlNTU1NTU1MiLDddLDAsZnVuY3Rpb24oKXtyZXR1cm4gMWU0KnRoaXMubWlsbGlzZWNvbmQoKX0pLE4oMCxbIlNTU1NTU1NTIiw4XSwwLGZ1bmN0aW9uKCl7cmV0dXJuIDFlNSp0aGlzLm1pbGxpc2Vjb25kKCl9KSxOKDAsWyJTU1NTU1NTU1MiLDldLDAsZnVuY3Rpb24oKXtyZXR1cm4gMWU2KnRoaXMubWlsbGlzZWNvbmQoKX0pLFcoIm1pbGxpc2Vjb25kIiwibXMiKSx1dCgiUyIsSyxaKSx1dCgiU1MiLEssaiksdXQoIlNTUyIsSywkKSxMZT0iU1NTUyI7TGUubGVuZ3RoPD05O0xlKz0iUyIpdXQoTGUsbnQpO2Z1bmN0aW9uIEFlKHQsZSl7ZVtNdF09cCgxZTMqKCIwLiIrdCkpfWZvcihMZT0iUyI7TGUubGVuZ3RoPD05O0xlKz0iUyIpY3QoTGUsQWUpO3ZhciBSZT1QKCJNaWxsaXNlY29uZHMiLCExKTtOKCJ6IiwwLDAsInpvbmVBYmJyIiksTigienoiLDAsMCwiem9uZU5hbWUiKTt2YXIgTmU9Xy5wcm90b3R5cGU7TmUuYWRkPVllLE5lLmNhbGVuZGFyPWZ1bmN0aW9uKHQsZSl7dmFyIG49dHx8aWUoKSxpPWNlKG4sdGhpcykuc3RhcnRPZigiZGF5Iikscz10aGlzLmRpZmYoaSwiZGF5cyIsITApLHI9czwtNj8ic2FtZUVsc2UiOnM8LTE/Imxhc3RXZWVrIjpzPDA/Imxhc3REYXkiOnM8MT8ic2FtZURheSI6czwyPyJuZXh0RGF5IjpzPDc/Im5leHRXZWVrIjoic2FtZUVsc2UiLGE9ZSYmKEcoZVtyXSk/ZVtyXSgpOmVbcl0pO3JldHVybiB0aGlzLmZvcm1hdChhfHx0aGlzLmxvY2FsZURhdGEoKS5jYWxlbmRhcihyLHRoaXMsaWUobikpKX0sTmUuY2xvbmU9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IF8odGhpcyl9LE5lLmRpZmY9ZnVuY3Rpb24odCxlLG4pe3ZhciBpLHMscixhO3JldHVybiB0aGlzLmlzVmFsaWQoKSYmKGk9Y2UodCx0aGlzKSkuaXNWYWxpZCgpPyhzPTZlNCooaS51dGNPZmZzZXQoKS10aGlzLnV0Y09mZnNldCgpKSwieWVhciI9PT0oZT14KGUpKXx8Im1vbnRoIj09PWV8fCJxdWFydGVyIj09PWU/KG89dGhpcyx1PWksaD0xMioodS55ZWFyKCktby55ZWFyKCkpKyh1Lm1vbnRoKCktby5tb250aCgpKSxjPW8uY2xvbmUoKS5hZGQoaCwibW9udGhzIiksdS1jPDA/KGQ9by5jbG9uZSgpLmFkZChoLTEsIm1vbnRocyIpLGw9KHUtYykvKGMtZCkpOihkPW8uY2xvbmUoKS5hZGQoaCsxLCJtb250aHMiKSxsPSh1LWMpLyhkLWMpKSxhPS0oaCtsKSwicXVhcnRlciI9PT1lP2EvPTM6InllYXIiPT09ZSYmKGEvPTEyKSk6KHI9dGhpcy1pLGE9InNlY29uZCI9PT1lP3IvMWUzOiJtaW51dGUiPT09ZT9yLzZlNDoiaG91ciI9PT1lP3IvMzZlNToiZGF5Ij09PWU/KHItcykvODY0ZTU6IndlZWsiPT09ZT8oci1zKS82MDQ4ZTU6ciksbj9hOmcoYSkpOk5hTjt2YXIgbyx1LGQsbCxoLGN9LE5lLmVuZE9mPWZ1bmN0aW9uKHQpe3JldHVybiB2b2lkIDA9PT0odD14KHQpKXx8Im1pbGxpc2Vjb25kIj09PXQ/dGhpczp0aGlzLnN0YXJ0T2YodCkuYWRkKDEsImlzb1dlZWsiPT09dD8id2VlayI6dCkuc3VidHJhY3QoMSwibXMiKX0sTmUuZm9ybWF0PWZ1bmN0aW9uKHQpe3ZhciBuPUUodGhpcyx0fHxlLmRlZmF1bHRGb3JtYXQpO3JldHVybiB0aGlzLmxvY2FsZURhdGEoKS5wb3N0Zm9ybWF0KG4pfSxOZS5mcm9tPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuaXNWYWxpZCgpJiYoeSh0KSYmdC5pc1ZhbGlkKCl8fGllKHQpLmlzVmFsaWQoKSk/Z2Uoe3RvOnRoaXMsZnJvbTp0fSkubG9jYWxlKHRoaXMubG9jYWxlKCkpLmh1bWFuaXplKCFlKTp0aGlzLmxvY2FsZURhdGEoKS5pbnZhbGlkRGF0ZSgpfSxOZS5mcm9tTm93PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmZyb20oaWUoKSx0KX0sTmUudG89ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5pc1ZhbGlkKCkmJih5KHQpJiZ0LmlzVmFsaWQoKXx8aWUodCkuaXNWYWxpZCgpKT9nZSh7ZnJvbTp0aGlzLHRvOnR9KS5sb2NhbGUodGhpcy5sb2NhbGUoKSkuaHVtYW5pemUoIWUpOnRoaXMubG9jYWxlRGF0YSgpLmludmFsaWREYXRlKCl9LE5lLnRvTm93PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnRvKGllKCksdCl9LE5lLmdldD1ILE5lLmludmFsaWRBdD1mdW5jdGlvbigpe3JldHVybiB1KHRoaXMpLm92ZXJmbG93fSxOZS5pc0FmdGVyPWZ1bmN0aW9uKHQsZSl7dmFyIG49eSh0KT90OmllKHQpO3JldHVybiEoIXRoaXMuaXNWYWxpZCgpfHwhbi5pc1ZhbGlkKCkpJiYoIm1pbGxpc2Vjb25kIj09PShlPXgoaChlKT8ibWlsbGlzZWNvbmQiOmUpKT8rdGhpcz4rbjorbjwrdGhpcy5jbG9uZSgpLnN0YXJ0T2YoZSkpfSxOZS5pc0JlZm9yZT1mdW5jdGlvbih0LGUpe3ZhciBuPXkodCk/dDppZSh0KTtyZXR1cm4hKCF0aGlzLmlzVmFsaWQoKXx8IW4uaXNWYWxpZCgpKSYmKCJtaWxsaXNlY29uZCI9PT0oZT14KGgoZSk/Im1pbGxpc2Vjb25kIjplKSk/K3RoaXM8K246K3RoaXMuY2xvbmUoKS5lbmRPZihlKTwrbil9LE5lLmlzQmV0d2Vlbj1mdW5jdGlvbih0LGUsbil7cmV0dXJuIHRoaXMuaXNBZnRlcih0LG4pJiZ0aGlzLmlzQmVmb3JlKGUsbil9LE5lLmlzU2FtZT1mdW5jdGlvbih0LGUpe3ZhciBuLGk9eSh0KT90OmllKHQpO3JldHVybiEoIXRoaXMuaXNWYWxpZCgpfHwhaS5pc1ZhbGlkKCkpJiYoIm1pbGxpc2Vjb25kIj09PShlPXgoZXx8Im1pbGxpc2Vjb25kIikpPyt0aGlzPT0raToobj0raSwrdGhpcy5jbG9uZSgpLnN0YXJ0T2YoZSk8PW4mJm48PSt0aGlzLmNsb25lKCkuZW5kT2YoZSkpKX0sTmUuaXNTYW1lT3JBZnRlcj1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmlzU2FtZSh0LGUpfHx0aGlzLmlzQWZ0ZXIodCxlKX0sTmUuaXNTYW1lT3JCZWZvcmU9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5pc1NhbWUodCxlKXx8dGhpcy5pc0JlZm9yZSh0LGUpfSxOZS5pc1ZhbGlkPWZ1bmN0aW9uKCl7cmV0dXJuIGQodGhpcyl9LE5lLmxhbmc9a2UsTmUubG9jYWxlPXdlLE5lLmxvY2FsZURhdGE9VGUsTmUubWF4PXJlLE5lLm1pbj1zZSxOZS5wYXJzaW5nRmxhZ3M9ZnVuY3Rpb24oKXtyZXR1cm4gYSh7fSx1KHRoaXMpKX0sTmUuc2V0PUgsTmUuc3RhcnRPZj1mdW5jdGlvbih0KXtzd2l0Y2godD14KHQpKXtjYXNlInllYXIiOnRoaXMubW9udGgoMCk7Y2FzZSJxdWFydGVyIjpjYXNlIm1vbnRoIjp0aGlzLmRhdGUoMSk7Y2FzZSJ3ZWVrIjpjYXNlImlzb1dlZWsiOmNhc2UiZGF5Ijp0aGlzLmhvdXJzKDApO2Nhc2UiaG91ciI6dGhpcy5taW51dGVzKDApO2Nhc2UibWludXRlIjp0aGlzLnNlY29uZHMoMCk7Y2FzZSJzZWNvbmQiOnRoaXMubWlsbGlzZWNvbmRzKDApfXJldHVybiJ3ZWVrIj09PXQmJnRoaXMud2Vla2RheSgwKSwiaXNvV2VlayI9PT10JiZ0aGlzLmlzb1dlZWtkYXkoMSksInF1YXJ0ZXIiPT09dCYmdGhpcy5tb250aCgzKk1hdGguZmxvb3IodGhpcy5tb250aCgpLzMpKSx0aGlzfSxOZS5zdWJ0cmFjdD1TZSxOZS50b0FycmF5PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcztyZXR1cm5bdC55ZWFyKCksdC5tb250aCgpLHQuZGF0ZSgpLHQuaG91cigpLHQubWludXRlKCksdC5zZWNvbmQoKSx0Lm1pbGxpc2Vjb25kKCldfSxOZS50b09iamVjdD1mdW5jdGlvbigpe3ZhciB0PXRoaXM7cmV0dXJue3llYXJzOnQueWVhcigpLG1vbnRoczp0Lm1vbnRoKCksZGF0ZTp0LmRhdGUoKSxob3Vyczp0LmhvdXJzKCksbWludXRlczp0Lm1pbnV0ZXMoKSxzZWNvbmRzOnQuc2Vjb25kcygpLG1pbGxpc2Vjb25kczp0Lm1pbGxpc2Vjb25kcygpfX0sTmUudG9EYXRlPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX29mZnNldD9uZXcgRGF0ZSgrdGhpcyk6dGhpcy5fZH0sTmUudG9JU09TdHJpbmc9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLmNsb25lKCkudXRjKCk7cmV0dXJuIDA8dC55ZWFyKCkmJnQueWVhcigpPD05OTk5P0coRGF0ZS5wcm90b3R5cGUudG9JU09TdHJpbmcpP3RoaXMudG9EYXRlKCkudG9JU09TdHJpbmcoKTpFKHQsIllZWVktTU0tRERbVF1ISDptbTpzcy5TU1NbWl0iKTpFKHQsIllZWVlZWS1NTS1ERFtUXUhIOm1tOnNzLlNTU1taXSIpfSxOZS50b0pTT049ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pc1ZhbGlkKCk/dGhpcy50b0lTT1N0cmluZygpOiJudWxsIn0sTmUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jbG9uZSgpLmxvY2FsZSgiZW4iKS5mb3JtYXQoImRkZCBNTU0gREQgWVlZWSBISDptbTpzcyBbR01UXVpaIil9LE5lLnVuaXg9ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5mbG9vcigrdGhpcy8xZTMpfSxOZS52YWx1ZU9mPWZ1bmN0aW9uKCl7cmV0dXJuK3RoaXMuX2QtNmU0Kih0aGlzLl9vZmZzZXR8fDApfSxOZS5jcmVhdGlvbkRhdGE9ZnVuY3Rpb24oKXtyZXR1cm57aW5wdXQ6dGhpcy5faSxmb3JtYXQ6dGhpcy5fZixsb2NhbGU6dGhpcy5fbG9jYWxlLGlzVVRDOnRoaXMuX2lzVVRDLHN0cmljdDp0aGlzLl9zdHJpY3R9fSxOZS55ZWFyPSR0LE5lLmlzTGVhcFllYXI9ZnVuY3Rpb24oKXtyZXR1cm4ganQodGhpcy55ZWFyKCkpfSxOZS53ZWVrWWVhcj1mdW5jdGlvbih0KXtyZXR1cm4gT2UuY2FsbCh0aGlzLHQsdGhpcy53ZWVrKCksdGhpcy53ZWVrZGF5KCksdGhpcy5sb2NhbGVEYXRhKCkuX3dlZWsuZG93LHRoaXMubG9jYWxlRGF0YSgpLl93ZWVrLmRveSl9LE5lLmlzb1dlZWtZZWFyPWZ1bmN0aW9uKHQpe3JldHVybiBPZS5jYWxsKHRoaXMsdCx0aGlzLmlzb1dlZWsoKSx0aGlzLmlzb1dlZWtkYXkoKSwxLDQpfSxOZS5xdWFydGVyPU5lLnF1YXJ0ZXJzPWZ1bmN0aW9uKHQpe3JldHVybiBudWxsPT10P01hdGguY2VpbCgodGhpcy5tb250aCgpKzEpLzMpOnRoaXMubW9udGgoMyoodC0xKSt0aGlzLm1vbnRoKCklMyl9LE5lLm1vbnRoPVd0LE5lLmRheXNJbk1vbnRoPWZ1bmN0aW9uKCl7cmV0dXJuIHd0KHRoaXMueWVhcigpLHRoaXMubW9udGgoKSl9LE5lLndlZWs9TmUud2Vla3M9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5sb2NhbGVEYXRhKCkud2Vlayh0aGlzKTtyZXR1cm4gbnVsbD09dD9lOnRoaXMuYWRkKDcqKHQtZSksImQiKX0sTmUuaXNvV2Vlaz1OZS5pc29XZWVrcz1mdW5jdGlvbih0KXt2YXIgZT1CdCh0aGlzLDEsNCkud2VlaztyZXR1cm4gbnVsbD09dD9lOnRoaXMuYWRkKDcqKHQtZSksImQiKX0sTmUud2Vla3NJblllYXI9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLmxvY2FsZURhdGEoKS5fd2VlaztyZXR1cm4gUXQodGhpcy55ZWFyKCksdC5kb3csdC5kb3kpfSxOZS5pc29XZWVrc0luWWVhcj1mdW5jdGlvbigpe3JldHVybiBRdCh0aGlzLnllYXIoKSwxLDQpfSxOZS5kYXRlPVdlLE5lLmRheT1OZS5kYXlzPWZ1bmN0aW9uKHQpe2lmKCF0aGlzLmlzVmFsaWQoKSlyZXR1cm4gbnVsbCE9dD90aGlzOk5hTjt2YXIgZT10aGlzLl9pc1VUQz90aGlzLl9kLmdldFVUQ0RheSgpOnRoaXMuX2QuZ2V0RGF5KCk7cmV0dXJuIG51bGwhPXQ/KHQ9ZnVuY3Rpb24odCxlKXtyZXR1cm4ic3RyaW5nIiE9dHlwZW9mIHQ/dDppc05hTih0KT8ibnVtYmVyIj09dHlwZW9mKHQ9ZS53ZWVrZGF5c1BhcnNlKHQpKT90Om51bGw6cGFyc2VJbnQodCwxMCl9KHQsdGhpcy5sb2NhbGVEYXRhKCkpLHRoaXMuYWRkKHQtZSwiZCIpKTplfSxOZS53ZWVrZGF5PWZ1bmN0aW9uKHQpe2lmKCF0aGlzLmlzVmFsaWQoKSlyZXR1cm4gbnVsbCE9dD90aGlzOk5hTjt2YXIgZT0odGhpcy5kYXkoKSs3LXRoaXMubG9jYWxlRGF0YSgpLl93ZWVrLmRvdyklNztyZXR1cm4gbnVsbD09dD9lOnRoaXMuYWRkKHQtZSwiZCIpfSxOZS5pc29XZWVrZGF5PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmlzVmFsaWQoKT9udWxsPT10P3RoaXMuZGF5KCl8fDc6dGhpcy5kYXkodGhpcy5kYXkoKSU3P3Q6dC03KTpudWxsIT10P3RoaXM6TmFOfSxOZS5kYXlPZlllYXI9ZnVuY3Rpb24odCl7dmFyIGU9TWF0aC5yb3VuZCgodGhpcy5jbG9uZSgpLnN0YXJ0T2YoImRheSIpLXRoaXMuY2xvbmUoKS5zdGFydE9mKCJ5ZWFyIikpLzg2NGU1KSsxO3JldHVybiBudWxsPT10P2U6dGhpcy5hZGQodC1lLCJkIil9LE5lLmhvdXI9TmUuaG91cnM9SGUsTmUubWludXRlPU5lLm1pbnV0ZXM9VmUsTmUuc2Vjb25kPU5lLnNlY29uZHM9SWUsTmUubWlsbGlzZWNvbmQ9TmUubWlsbGlzZWNvbmRzPVJlLE5lLnV0Y09mZnNldD1mdW5jdGlvbih0LG4pe3ZhciBpLHM9dGhpcy5fb2Zmc2V0fHwwO3JldHVybiB0aGlzLmlzVmFsaWQoKT9udWxsIT10Pygic3RyaW5nIj09dHlwZW9mIHQ/dD1oZShydCx0KTpNYXRoLmFicyh0KTwxNiYmKHQqPTYwKSwhdGhpcy5faXNVVEMmJm4mJihpPWZlKHRoaXMpKSx0aGlzLl9vZmZzZXQ9dCx0aGlzLl9pc1VUQz0hMCxudWxsIT1pJiZ0aGlzLmFkZChpLCJtIikscyE9PXQmJighbnx8dGhpcy5fY2hhbmdlSW5Qcm9ncmVzcz9NZSh0aGlzLGdlKHQtcywibSIpLDEsITEpOnRoaXMuX2NoYW5nZUluUHJvZ3Jlc3N8fCh0aGlzLl9jaGFuZ2VJblByb2dyZXNzPSEwLGUudXBkYXRlT2Zmc2V0KHRoaXMsITApLHRoaXMuX2NoYW5nZUluUHJvZ3Jlc3M9bnVsbCkpLHRoaXMpOnRoaXMuX2lzVVRDP3M6ZmUodGhpcyk6bnVsbCE9dD90aGlzOk5hTn0sTmUudXRjPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnV0Y09mZnNldCgwLHQpfSxOZS5sb2NhbD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5faXNVVEMmJih0aGlzLnV0Y09mZnNldCgwLHQpLHRoaXMuX2lzVVRDPSExLHQmJnRoaXMuc3VidHJhY3QoZmUodGhpcyksIm0iKSksdGhpc30sTmUucGFyc2Vab25lPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3R6bT90aGlzLnV0Y09mZnNldCh0aGlzLl90em0pOiJzdHJpbmciPT10eXBlb2YgdGhpcy5faSYmdGhpcy51dGNPZmZzZXQoaGUoc3QsdGhpcy5faSkpLHRoaXN9LE5lLmhhc0FsaWduZWRIb3VyT2Zmc2V0PWZ1bmN0aW9uKHQpe3JldHVybiEhdGhpcy5pc1ZhbGlkKCkmJih0PXQ/aWUodCkudXRjT2Zmc2V0KCk6MCwodGhpcy51dGNPZmZzZXQoKS10KSU2MD09MCl9LE5lLmlzRFNUPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudXRjT2Zmc2V0KCk+dGhpcy5jbG9uZSgpLm1vbnRoKDApLnV0Y09mZnNldCgpfHx0aGlzLnV0Y09mZnNldCgpPnRoaXMuY2xvbmUoKS5tb250aCg1KS51dGNPZmZzZXQoKX0sTmUuaXNEU1RTaGlmdGVkPWZ1bmN0aW9uKCl7aWYoIWgodGhpcy5faXNEU1RTaGlmdGVkKSlyZXR1cm4gdGhpcy5faXNEU1RTaGlmdGVkO3ZhciB0PXt9O2lmKGYodCx0aGlzKSwodD1lZSh0KSkuX2Epe3ZhciBlPXQuX2lzVVRDP28odC5fYSk6aWUodC5fYSk7dGhpcy5faXNEU1RTaGlmdGVkPXRoaXMuaXNWYWxpZCgpJiZ2KHQuX2EsZS50b0FycmF5KCkpPjB9ZWxzZSB0aGlzLl9pc0RTVFNoaWZ0ZWQ9ITE7cmV0dXJuIHRoaXMuX2lzRFNUU2hpZnRlZH0sTmUuaXNMb2NhbD1mdW5jdGlvbigpe3JldHVybiEhdGhpcy5pc1ZhbGlkKCkmJiF0aGlzLl9pc1VUQ30sTmUuaXNVdGNPZmZzZXQ9ZnVuY3Rpb24oKXtyZXR1cm4hIXRoaXMuaXNWYWxpZCgpJiZ0aGlzLl9pc1VUQ30sTmUuaXNVdGM9bWUsTmUuaXNVVEM9bWUsTmUuem9uZUFiYnI9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5faXNVVEM/IlVUQyI6IiJ9LE5lLnpvbmVOYW1lPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2lzVVRDPyJDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSI6IiJ9LE5lLmRhdGVzPUZ0KCJkYXRlcyBhY2Nlc3NvciBpcyBkZXByZWNhdGVkLiBVc2UgZGF0ZSBpbnN0ZWFkLiIsV2UpLE5lLm1vbnRocz1GdCgibW9udGhzIGFjY2Vzc29yIGlzIGRlcHJlY2F0ZWQuIFVzZSBtb250aCBpbnN0ZWFkIixXdCksTmUueWVhcnM9RnQoInllYXJzIGFjY2Vzc29yIGlzIGRlcHJlY2F0ZWQuIFVzZSB5ZWFyIGluc3RlYWQiLCR0KSxOZS56b25lPUZ0KCJtb21lbnQoKS56b25lIGlzIGRlcHJlY2F0ZWQsIHVzZSBtb21lbnQoKS51dGNPZmZzZXQgaW5zdGVhZC4gaHR0cHM6Ly9naXRodWIuY29tL21vbWVudC9tb21lbnQvaXNzdWVzLzE3NzkiLGZ1bmN0aW9uKHQsZSl7cmV0dXJuIG51bGwhPXQ/KCJzdHJpbmciIT10eXBlb2YgdCYmKHQ9LXQpLHRoaXMudXRjT2Zmc2V0KHQsZSksdGhpcyk6LXRoaXMudXRjT2Zmc2V0KCl9KTt2YXIgRWU9TmU7ZnVuY3Rpb24gemUodCl7cmV0dXJuIHR9dmFyIFplPUQucHJvdG90eXBlO2Z1bmN0aW9uIGplKHQsZSxuLGkpe3ZhciBzPWIoKSxyPW8oKS5zZXQoaSxlKTtyZXR1cm4gc1tuXShyLHQpfWZ1bmN0aW9uICRlKHQsZSxuLGkscyl7aWYoIm51bWJlciI9PXR5cGVvZiB0JiYoZT10LHQ9dm9pZCAwKSx0PXR8fCIiLG51bGwhPWUpcmV0dXJuIGplKHQsZSxuLHMpO3ZhciByLGE9W107Zm9yKHI9MDtyPGk7cisrKWFbcl09amUodCxyLG4scyk7cmV0dXJuIGF9WmUuX2NhbGVuZGFyPXtzYW1lRGF5OiJbVG9kYXkgYXRdIExUIixuZXh0RGF5OiJbVG9tb3Jyb3cgYXRdIExUIixuZXh0V2VlazoiZGRkZCBbYXRdIExUIixsYXN0RGF5OiJbWWVzdGVyZGF5IGF0XSBMVCIsbGFzdFdlZWs6IltMYXN0XSBkZGRkIFthdF0gTFQiLHNhbWVFbHNlOiJMIn0sWmUuY2FsZW5kYXI9ZnVuY3Rpb24odCxlLG4pe3ZhciBpPXRoaXMuX2NhbGVuZGFyW3RdO3JldHVybiBHKGkpP2kuY2FsbChlLG4pOml9LFplLl9sb25nRGF0ZUZvcm1hdD17TFRTOiJoOm1tOnNzIEEiLExUOiJoOm1tIEEiLEw6Ik1NL0REL1lZWVkiLExMOiJNTU1NIEQsIFlZWVkiLExMTDoiTU1NTSBELCBZWVlZIGg6bW0gQSIsTExMTDoiZGRkZCwgTU1NTSBELCBZWVlZIGg6bW0gQSJ9LFplLmxvbmdEYXRlRm9ybWF0PWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuX2xvbmdEYXRlRm9ybWF0W3RdLG49dGhpcy5fbG9uZ0RhdGVGb3JtYXRbdC50b1VwcGVyQ2FzZSgpXTtyZXR1cm4gZXx8IW4/ZToodGhpcy5fbG9uZ0RhdGVGb3JtYXRbdF09bi5yZXBsYWNlKC9NTU1NfE1NfEREfGRkZGQvZyxmdW5jdGlvbih0KXtyZXR1cm4gdC5zbGljZSgxKX0pLHRoaXMuX2xvbmdEYXRlRm9ybWF0W3RdKX0sWmUuX2ludmFsaWREYXRlPSJJbnZhbGlkIGRhdGUiLFplLmludmFsaWREYXRlPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2ludmFsaWREYXRlfSxaZS5fb3JkaW5hbD0iJWQiLFplLm9yZGluYWw9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX29yZGluYWwucmVwbGFjZSgiJWQiLHQpfSxaZS5fb3JkaW5hbFBhcnNlPS9cZHsxLDJ9LyxaZS5wcmVwYXJzZT16ZSxaZS5wb3N0Zm9ybWF0PXplLFplLl9yZWxhdGl2ZVRpbWU9e2Z1dHVyZToiaW4gJXMiLHBhc3Q6IiVzIGFnbyIsczoiYSBmZXcgc2Vjb25kcyIsbToiYSBtaW51dGUiLG1tOiIlZCBtaW51dGVzIixoOiJhbiBob3VyIixoaDoiJWQgaG91cnMiLGQ6ImEgZGF5IixkZDoiJWQgZGF5cyIsTToiYSBtb250aCIsTU06IiVkIG1vbnRocyIseToiYSB5ZWFyIix5eToiJWQgeWVhcnMifSxaZS5yZWxhdGl2ZVRpbWU9ZnVuY3Rpb24odCxlLG4saSl7dmFyIHM9dGhpcy5fcmVsYXRpdmVUaW1lW25dO3JldHVybiBHKHMpP3ModCxlLG4saSk6cy5yZXBsYWNlKC8lZC9pLHQpfSxaZS5wYXN0RnV0dXJlPWZ1bmN0aW9uKHQsZSl7dmFyIG49dGhpcy5fcmVsYXRpdmVUaW1lW3Q+MD8iZnV0dXJlIjoicGFzdCJdO3JldHVybiBHKG4pP24oZSk6bi5yZXBsYWNlKC8lcy9pLGUpfSxaZS5zZXQ9ZnVuY3Rpb24odCl7dmFyIGUsbjtmb3IobiBpbiB0KUcoZT10W25dKT90aGlzW25dPWU6dGhpc1siXyIrbl09ZTt0aGlzLl9vcmRpbmFsUGFyc2VMZW5pZW50PW5ldyBSZWdFeHAodGhpcy5fb3JkaW5hbFBhcnNlLnNvdXJjZSsifCIrL1xkezEsMn0vLnNvdXJjZSl9LFplLm1vbnRocz1mdW5jdGlvbih0LGUpe3JldHVybiBuKHRoaXMuX21vbnRocyk/dGhpcy5fbW9udGhzW3QubW9udGgoKV06dGhpcy5fbW9udGhzW2t0LnRlc3QoZSk/ImZvcm1hdCI6InN0YW5kYWxvbmUiXVt0Lm1vbnRoKCldfSxaZS5fbW9udGhzPVR0LFplLm1vbnRoc1Nob3J0PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIG4odGhpcy5fbW9udGhzU2hvcnQpP3RoaXMuX21vbnRoc1Nob3J0W3QubW9udGgoKV06dGhpcy5fbW9udGhzU2hvcnRba3QudGVzdChlKT8iZm9ybWF0Ijoic3RhbmRhbG9uZSJdW3QubW9udGgoKV19LFplLl9tb250aHNTaG9ydD1idCxaZS5tb250aHNQYXJzZT1mdW5jdGlvbih0LGUsbil7dmFyIGkscyxyO2Zvcih0aGlzLl9tb250aHNQYXJzZXx8KHRoaXMuX21vbnRoc1BhcnNlPVtdLHRoaXMuX2xvbmdNb250aHNQYXJzZT1bXSx0aGlzLl9zaG9ydE1vbnRoc1BhcnNlPVtdKSxpPTA7aTwxMjtpKyspe2lmKHM9byhbMmUzLGldKSxuJiYhdGhpcy5fbG9uZ01vbnRoc1BhcnNlW2ldJiYodGhpcy5fbG9uZ01vbnRoc1BhcnNlW2ldPW5ldyBSZWdFeHAoIl4iK3RoaXMubW9udGhzKHMsIiIpLnJlcGxhY2UoIi4iLCIiKSsiJCIsImkiKSx0aGlzLl9zaG9ydE1vbnRoc1BhcnNlW2ldPW5ldyBSZWdFeHAoIl4iK3RoaXMubW9udGhzU2hvcnQocywiIikucmVwbGFjZSgiLiIsIiIpKyIkIiwiaSIpKSxufHx0aGlzLl9tb250aHNQYXJzZVtpXXx8KHI9Il4iK3RoaXMubW9udGhzKHMsIiIpKyJ8XiIrdGhpcy5tb250aHNTaG9ydChzLCIiKSx0aGlzLl9tb250aHNQYXJzZVtpXT1uZXcgUmVnRXhwKHIucmVwbGFjZSgiLiIsIiIpLCJpIikpLG4mJiJNTU1NIj09PWUmJnRoaXMuX2xvbmdNb250aHNQYXJzZVtpXS50ZXN0KHQpKXJldHVybiBpO2lmKG4mJiJNTU0iPT09ZSYmdGhpcy5fc2hvcnRNb250aHNQYXJzZVtpXS50ZXN0KHQpKXJldHVybiBpO2lmKCFuJiZ0aGlzLl9tb250aHNQYXJzZVtpXS50ZXN0KHQpKXJldHVybiBpfX0sWmUuX21vbnRoc1JlZ2V4PVV0LFplLm1vbnRoc1JlZ2V4PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl9tb250aHNQYXJzZUV4YWN0PyhyKHRoaXMsIl9tb250aHNSZWdleCIpfHxHdC5jYWxsKHRoaXMpLHQ/dGhpcy5fbW9udGhzU3RyaWN0UmVnZXg6dGhpcy5fbW9udGhzUmVnZXgpOnRoaXMuX21vbnRoc1N0cmljdFJlZ2V4JiZ0P3RoaXMuX21vbnRoc1N0cmljdFJlZ2V4OnRoaXMuX21vbnRoc1JlZ2V4fSxaZS5fbW9udGhzU2hvcnRSZWdleD14dCxaZS5tb250aHNTaG9ydFJlZ2V4PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl9tb250aHNQYXJzZUV4YWN0PyhyKHRoaXMsIl9tb250aHNSZWdleCIpfHxHdC5jYWxsKHRoaXMpLHQ/dGhpcy5fbW9udGhzU2hvcnRTdHJpY3RSZWdleDp0aGlzLl9tb250aHNTaG9ydFJlZ2V4KTp0aGlzLl9tb250aHNTaG9ydFN0cmljdFJlZ2V4JiZ0P3RoaXMuX21vbnRoc1Nob3J0U3RyaWN0UmVnZXg6dGhpcy5fbW9udGhzU2hvcnRSZWdleH0sWmUud2Vlaz1mdW5jdGlvbih0KXtyZXR1cm4gQnQodCx0aGlzLl93ZWVrLmRvdyx0aGlzLl93ZWVrLmRveSkud2Vla30sWmUuX3dlZWs9e2RvdzowLGRveTo2fSxaZS5maXJzdERheU9mWWVhcj1mdW5jdGlvbigpe3JldHVybiB0aGlzLl93ZWVrLmRveX0sWmUuZmlyc3REYXlPZldlZWs9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fd2Vlay5kb3d9LFplLndlZWtkYXlzPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIG4odGhpcy5fd2Vla2RheXMpP3RoaXMuX3dlZWtkYXlzW3QuZGF5KCldOnRoaXMuX3dlZWtkYXlzW3RoaXMuX3dlZWtkYXlzLmlzRm9ybWF0LnRlc3QoZSk/ImZvcm1hdCI6InN0YW5kYWxvbmUiXVt0LmRheSgpXX0sWmUuX3dlZWtkYXlzPXhlLFplLndlZWtkYXlzTWluPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl93ZWVrZGF5c01pblt0LmRheSgpXX0sWmUuX3dlZWtkYXlzTWluPUdlLFplLndlZWtkYXlzU2hvcnQ9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX3dlZWtkYXlzU2hvcnRbdC5kYXkoKV19LFplLl93ZWVrZGF5c1Nob3J0PVVlLFplLndlZWtkYXlzUGFyc2U9ZnVuY3Rpb24odCxlLG4pe3ZhciBpLHMscjtmb3IodGhpcy5fd2Vla2RheXNQYXJzZXx8KHRoaXMuX3dlZWtkYXlzUGFyc2U9W10sdGhpcy5fbWluV2Vla2RheXNQYXJzZT1bXSx0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2U9W10sdGhpcy5fZnVsbFdlZWtkYXlzUGFyc2U9W10pLGk9MDtpPDc7aSsrKXtpZihzPWllKFsyZTMsMV0pLmRheShpKSxuJiYhdGhpcy5fZnVsbFdlZWtkYXlzUGFyc2VbaV0mJih0aGlzLl9mdWxsV2Vla2RheXNQYXJzZVtpXT1uZXcgUmVnRXhwKCJeIit0aGlzLndlZWtkYXlzKHMsIiIpLnJlcGxhY2UoIi4iLCIuPyIpKyIkIiwiaSIpLHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZVtpXT1uZXcgUmVnRXhwKCJeIit0aGlzLndlZWtkYXlzU2hvcnQocywiIikucmVwbGFjZSgiLiIsIi4/IikrIiQiLCJpIiksdGhpcy5fbWluV2Vla2RheXNQYXJzZVtpXT1uZXcgUmVnRXhwKCJeIit0aGlzLndlZWtkYXlzTWluKHMsIiIpLnJlcGxhY2UoIi4iLCIuPyIpKyIkIiwiaSIpKSx0aGlzLl93ZWVrZGF5c1BhcnNlW2ldfHwocj0iXiIrdGhpcy53ZWVrZGF5cyhzLCIiKSsifF4iK3RoaXMud2Vla2RheXNTaG9ydChzLCIiKSsifF4iK3RoaXMud2Vla2RheXNNaW4ocywiIiksdGhpcy5fd2Vla2RheXNQYXJzZVtpXT1uZXcgUmVnRXhwKHIucmVwbGFjZSgiLiIsIiIpLCJpIikpLG4mJiJkZGRkIj09PWUmJnRoaXMuX2Z1bGxXZWVrZGF5c1BhcnNlW2ldLnRlc3QodCkpcmV0dXJuIGk7aWYobiYmImRkZCI9PT1lJiZ0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2VbaV0udGVzdCh0KSlyZXR1cm4gaTtpZihuJiYiZGQiPT09ZSYmdGhpcy5fbWluV2Vla2RheXNQYXJzZVtpXS50ZXN0KHQpKXJldHVybiBpO2lmKCFuJiZ0aGlzLl93ZWVrZGF5c1BhcnNlW2ldLnRlc3QodCkpcmV0dXJuIGl9fSxaZS5pc1BNPWZ1bmN0aW9uKHQpe3JldHVybiJwIj09PSh0KyIiKS50b0xvd2VyQ2FzZSgpLmNoYXJBdCgwKX0sWmUuX21lcmlkaWVtUGFyc2U9L1thcF1cLj9tP1wuPy9pLFplLm1lcmlkaWVtPWZ1bmN0aW9uKHQsZSxuKXtyZXR1cm4gdD4xMT9uPyJwbSI6IlBNIjpuPyJhbSI6IkFNIn0saygibmwiLHtvcmRpbmFsUGFyc2U6L1xkezEsMn0odGh8c3R8bmR8cmQpLyxvcmRpbmFsOmZ1bmN0aW9uKHQpe3ZhciBlPXQlMTA7cmV0dXJuIHQrKDE9PT1wKHQlMTAwLzEwKT8idGgiOjE9PT1lPyJzdCI6Mj09PWU/Im5kIjozPT09ZT8icmQiOiJ0aCIpfX0pLGUubGFuZz1GdCgibW9tZW50LmxhbmcgaXMgZGVwcmVjYXRlZC4gVXNlIG1vbWVudC5sb2NhbGUgaW5zdGVhZC4iLGspLGUubGFuZ0RhdGE9RnQoIm1vbWVudC5sYW5nRGF0YSBpcyBkZXByZWNhdGVkLiBVc2UgbW9tZW50LmxvY2FsZURhdGEgaW5zdGVhZC4iLGIpO3ZhciBxZT1NYXRoLmFicztmdW5jdGlvbiBKZSh0LGUsbixpKXt2YXIgcz1nZShlLG4pO3JldHVybiB0Ll9taWxsaXNlY29uZHMrPWkqcy5fbWlsbGlzZWNvbmRzLHQuX2RheXMrPWkqcy5fZGF5cyx0Ll9tb250aHMrPWkqcy5fbW9udGhzLHQuX2J1YmJsZSgpfWZ1bmN0aW9uIEJlKHQpe3JldHVybiB0PDA/TWF0aC5mbG9vcih0KTpNYXRoLmNlaWwodCl9ZnVuY3Rpb24gUWUodCl7cmV0dXJuIDQ4MDAqdC8xNDYwOTd9ZnVuY3Rpb24gWGUodCl7cmV0dXJuIDE0NjA5Nyp0LzQ4MDB9ZnVuY3Rpb24gS2UodCl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuYXModCl9fXZhciB0bj1LZSgibXMiKSxlbj1LZSgicyIpLG5uPUtlKCJtIiksc249S2UoImgiKSxybj1LZSgiZCIpLGFuPUtlKCJ3Iiksb249S2UoIk0iKSx1bj1LZSgieSIpO2Z1bmN0aW9uIGRuKHQpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiB0aGlzLl9kYXRhW3RdfX12YXIgbG49ZG4oIm1pbGxpc2Vjb25kcyIpLGhuPWRuKCJzZWNvbmRzIiksY249ZG4oIm1pbnV0ZXMiKSxmbj1kbigiaG91cnMiKSxtbj1kbigiZGF5cyIpLF9uPWRuKCJtb250aHMiKSx5bj1kbigieWVhcnMiKTt2YXIgZ249TWF0aC5yb3VuZCxwbj17czo0NSxtOjQ1LGg6MjIsZDoyNixNOjExfTt2YXIgdm49TWF0aC5hYnM7ZnVuY3Rpb24gRG4oKXt2YXIgdCxlLG49dm4odGhpcy5fbWlsbGlzZWNvbmRzKS8xZTMsaT12bih0aGlzLl9kYXlzKSxzPXZuKHRoaXMuX21vbnRocyk7ZT1nKCh0PWcobi82MCkpLzYwKSxuJT02MCx0JT02MDt2YXIgcj1nKHMvMTIpLGE9cyU9MTIsbz1pLHU9ZSxkPXQsbD1uLGg9dGhpcy5hc1NlY29uZHMoKTtyZXR1cm4gaD8oaDwwPyItIjoiIikrIlAiKyhyP3IrIlkiOiIiKSsoYT9hKyJNIjoiIikrKG8/bysiRCI6IiIpKyh1fHxkfHxsPyJUIjoiIikrKHU/dSsiSCI6IiIpKyhkP2QrIk0iOiIiKSsobD9sKyJTIjoiIik6IlAwRCJ9dmFyIE1uPW9lLnByb3RvdHlwZTtyZXR1cm4gTW4uYWJzPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5fZGF0YTtyZXR1cm4gdGhpcy5fbWlsbGlzZWNvbmRzPXFlKHRoaXMuX21pbGxpc2Vjb25kcyksdGhpcy5fZGF5cz1xZSh0aGlzLl9kYXlzKSx0aGlzLl9tb250aHM9cWUodGhpcy5fbW9udGhzKSx0Lm1pbGxpc2Vjb25kcz1xZSh0Lm1pbGxpc2Vjb25kcyksdC5zZWNvbmRzPXFlKHQuc2Vjb25kcyksdC5taW51dGVzPXFlKHQubWludXRlcyksdC5ob3Vycz1xZSh0LmhvdXJzKSx0Lm1vbnRocz1xZSh0Lm1vbnRocyksdC55ZWFycz1xZSh0LnllYXJzKSx0aGlzfSxNbi5hZGQ9ZnVuY3Rpb24odCxlKXtyZXR1cm4gSmUodGhpcyx0LGUsMSl9LE1uLnN1YnRyYWN0PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIEplKHRoaXMsdCxlLC0xKX0sTW4uYXM9ZnVuY3Rpb24odCl7dmFyIGUsbixpPXRoaXMuX21pbGxpc2Vjb25kcztpZigibW9udGgiPT09KHQ9eCh0KSl8fCJ5ZWFyIj09PXQpcmV0dXJuIGU9dGhpcy5fZGF5cytpLzg2NGU1LG49dGhpcy5fbW9udGhzK1FlKGUpLCJtb250aCI9PT10P246bi8xMjtzd2l0Y2goZT10aGlzLl9kYXlzK01hdGgucm91bmQoWGUodGhpcy5fbW9udGhzKSksdCl7Y2FzZSJ3ZWVrIjpyZXR1cm4gZS83K2kvNjA0OGU1O2Nhc2UiZGF5IjpyZXR1cm4gZStpLzg2NGU1O2Nhc2UiaG91ciI6cmV0dXJuIDI0KmUraS8zNmU1O2Nhc2UibWludXRlIjpyZXR1cm4gMTQ0MCplK2kvNmU0O2Nhc2Uic2Vjb25kIjpyZXR1cm4gODY0MDAqZStpLzFlMztjYXNlIm1pbGxpc2Vjb25kIjpyZXR1cm4gTWF0aC5mbG9vcig4NjRlNSplKStpO2RlZmF1bHQ6dGhyb3cgbmV3IEVycm9yKCJVbmtub3duIHVuaXQgIit0KX19LE1uLmFzTWlsbGlzZWNvbmRzPXRuLE1uLmFzU2Vjb25kcz1lbixNbi5hc01pbnV0ZXM9bm4sTW4uYXNIb3Vycz1zbixNbi5hc0RheXM9cm4sTW4uYXNXZWVrcz1hbixNbi5hc01vbnRocz1vbixNbi5hc1llYXJzPXVuLE1uLnZhbHVlT2Y9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fbWlsbGlzZWNvbmRzKzg2NGU1KnRoaXMuX2RheXMrdGhpcy5fbW9udGhzJTEyKjI1OTJlNiszMTUzNmU2KnAodGhpcy5fbW9udGhzLzEyKX0sTW4uX2J1YmJsZT1mdW5jdGlvbigpe3ZhciB0LGUsbixpLHMscj10aGlzLl9taWxsaXNlY29uZHMsYT10aGlzLl9kYXlzLG89dGhpcy5fbW9udGhzLHU9dGhpcy5fZGF0YTtyZXR1cm4gcj49MCYmYT49MCYmbz49MHx8cjw9MCYmYTw9MCYmbzw9MHx8KHIrPTg2NGU1KkJlKFhlKG8pK2EpLGE9MCxvPTApLHUubWlsbGlzZWNvbmRzPXIlMWUzLHQ9ZyhyLzFlMyksdS5zZWNvbmRzPXQlNjAsZT1nKHQvNjApLHUubWludXRlcz1lJTYwLG49ZyhlLzYwKSx1LmhvdXJzPW4lMjQsbys9cz1nKFFlKGErPWcobi8yNCkpKSxhLT1CZShYZShzKSksaT1nKG8vMTIpLG8lPTEyLHUuZGF5cz1hLHUubW9udGhzPW8sdS55ZWFycz1pLHRoaXN9LE1uLmdldD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpc1sodD14KHQpKSsicyJdKCl9LE1uLm1pbGxpc2Vjb25kcz1sbixNbi5zZWNvbmRzPWhuLE1uLm1pbnV0ZXM9Y24sTW4uaG91cnM9Zm4sTW4uZGF5cz1tbixNbi53ZWVrcz1mdW5jdGlvbigpe3JldHVybiBnKHRoaXMuZGF5cygpLzcpfSxNbi5tb250aHM9X24sTW4ueWVhcnM9eW4sTW4uaHVtYW5pemU9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5sb2NhbGVEYXRhKCksbj1mdW5jdGlvbih0LGUsbil7dmFyIGk9Z2UodCkuYWJzKCkscz1nbihpLmFzKCJzIikpLHI9Z24oaS5hcygibSIpKSxhPWduKGkuYXMoImgiKSksbz1nbihpLmFzKCJkIikpLHU9Z24oaS5hcygiTSIpKSxkPWduKGkuYXMoInkiKSksbD1zPHBuLnMmJlsicyIsc118fHI8PTEmJlsibSJdfHxyPHBuLm0mJlsibW0iLHJdfHxhPD0xJiZbImgiXXx8YTxwbi5oJiZbImhoIixhXXx8bzw9MSYmWyJkIl18fG88cG4uZCYmWyJkZCIsb118fHU8PTEmJlsiTSJdfHx1PHBuLk0mJlsiTU0iLHVdfHxkPD0xJiZbInkiXXx8WyJ5eSIsZF07cmV0dXJuIGxbMl09ZSxsWzNdPSt0PjAsbFs0XT1uLGZ1bmN0aW9uKHQsZSxuLGkscyl7cmV0dXJuIHMucmVsYXRpdmVUaW1lKGV8fDEsISFuLHQsaSl9LmFwcGx5KG51bGwsbCl9KHRoaXMsIXQsZSk7cmV0dXJuIHQmJihuPWUucGFzdEZ1dHVyZSgrdGhpcyxuKSksZS5wb3N0Zm9ybWF0KG4pfSxNbi50b0lTT1N0cmluZz1EbixNbi50b1N0cmluZz1EbixNbi50b0pTT049RG4sTW4ubG9jYWxlPXdlLE1uLmxvY2FsZURhdGE9VGUsTW4udG9Jc29TdHJpbmc9RnQoInRvSXNvU3RyaW5nKCkgaXMgZGVwcmVjYXRlZC4gUGxlYXNlIHVzZSB0b0lTT1N0cmluZygpIGluc3RlYWQgKG5vdGljZSB0aGUgY2FwaXRhbHMpIixEbiksTW4ubGFuZz1rZSxOKCJYIiwwLDAsInVuaXgiKSxOKCJ4IiwwLDAsInZhbHVlT2YiKSx1dCgieCIsaXQpLHV0KCJYIiwvWystXT9cZCsoXC5cZHsxLDN9KT8vKSxjdCgiWCIsZnVuY3Rpb24odCxlLG4pe24uX2Q9bmV3IERhdGUoMWUzKnBhcnNlRmxvYXQodCwxMCkpfSksY3QoIngiLGZ1bmN0aW9uKHQsZSxuKXtuLl9kPW5ldyBEYXRlKHAodCkpfSksZS52ZXJzaW9uPSIyLjExLjEiLHQ9aWUsZS5mbj1FZSxlLm1pbj1mdW5jdGlvbigpe3JldHVybiBhZSgiaXNCZWZvcmUiLFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLDApKX0sZS5tYXg9ZnVuY3Rpb24oKXtyZXR1cm4gYWUoImlzQWZ0ZXIiLFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLDApKX0sZS5ub3c9ZnVuY3Rpb24oKXtyZXR1cm4gRGF0ZS5ub3c/RGF0ZS5ub3coKTorbmV3IERhdGV9LGUudXRjPW8sZS51bml4PWZ1bmN0aW9uKHQpe3JldHVybiBpZSgxZTMqdCl9LGUubW9udGhzPWZ1bmN0aW9uKHQsZSl7cmV0dXJuICRlKHQsZSwibW9udGhzIiwxMiwibW9udGgiKX0sZS5pc0RhdGU9aSxlLmxvY2FsZT1rLGUuaW52YWxpZD1sLGUuZHVyYXRpb249Z2UsZS5pc01vbWVudD15LGUud2Vla2RheXM9ZnVuY3Rpb24odCxlKXtyZXR1cm4gJGUodCxlLCJ3ZWVrZGF5cyIsNywiZGF5Iil9LGUucGFyc2Vab25lPWZ1bmN0aW9uKCl7cmV0dXJuIGllLmFwcGx5KG51bGwsYXJndW1lbnRzKS5wYXJzZVpvbmUoKX0sZS5sb2NhbGVEYXRhPWIsZS5pc0R1cmF0aW9uPXVlLGUubW9udGhzU2hvcnQ9ZnVuY3Rpb24odCxlKXtyZXR1cm4gJGUodCxlLCJtb250aHNTaG9ydCIsMTIsIm1vbnRoIil9LGUud2Vla2RheXNNaW49ZnVuY3Rpb24odCxlKXtyZXR1cm4gJGUodCxlLCJ3ZWVrZGF5c01pbiIsNywiZGF5Iil9LGUuZGVmaW5lTG9jYWxlPVQsZS53ZWVrZGF5c1Nob3J0PWZ1bmN0aW9uKHQsZSl7cmV0dXJuICRlKHQsZSwid2Vla2RheXNTaG9ydCIsNywiZGF5Iil9LGUubm9ybWFsaXplVW5pdHM9eCxlLnJlbGF0aXZlVGltZVRocmVzaG9sZD1mdW5jdGlvbih0LGUpe3JldHVybiB2b2lkIDAhPT1wblt0XSYmKHZvaWQgMD09PWU/cG5bdF06KHBuW3RdPWUsITApKX0sZS5wcm90b3R5cGU9RWUsZX0pOw==');
});