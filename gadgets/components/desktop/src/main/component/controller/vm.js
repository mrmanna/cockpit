(function VM(global) {var fillInVMSkeleton = function(vm) {
  var invoker = {};
  function registerClass(vm, name, fn) {
    if (!vm[name]) vm[name] = fn;
    return vm[name];
  }
  return vm;
  };
  var extensions = [];
  function replaceAll(s, target, replacement) {
    var pos = 0;
    for (;;) {
      var indx = s.indexOf(target, pos);
      if (indx === -1) {
        return s;
      }
      pos = indx + replacement.length;
      s = s.substring(0, indx) + replacement + s.substring(indx + target.length);
    }
  }
  function mangleClass(name) {
    name = replaceAll(name, '_', '_1');
    name = replaceAll(name, '.', '_');
    return name;
  };
  var pending = [];
  var pendingClasses = [];
  function wrapJavaMethod(wrapper, m, method) {
    wrapper[m] = function() {
      return method.apply(null, arguments);
    };
    var underscores = m.indexOf('__');
    if (underscores >= 0) {
      var shortName = m.substring(0, underscores);
      if (!wrapper[shortName]) {
        wrapper[shortName] = wrapper[m];
      }
    }
  }
  function wrapAllMethods(wrapper, realClass) {
    for (var m in realClass) {
      var method = realClass[m];
      if (method && (method['access'] & 8) === 8) {
        wrapJavaMethod(wrapper, m, method);
      }
    }
  }
  function wrapJava(vm, clazz, callback, realClass) {
    var wrapper = {
    };
    if (realClass) {
      wrapAllMethods(wrapper, realClass)
    }
    if (!wrapper['invoke']) {
      wrapper['invoke'] = function() {
         return invokeMethod(vm, clazz, arguments);
      }
    }
    if (typeof callback === 'function') {
      callback(wrapper);
    }
    return wrapper;
  }
  function extensionLoaded(ev) {
    var at = pending.indexOf(ev.target);
    pending.splice(at, 1);
    if (pending.length === 0) {
      for (var i = 0; i < pendingClasses.length; i += 4) {
        var vm = pendingClasses[i];
        var clazz = pendingClasses[i + 1];
        var args = pendingClasses[i + 2];
        var callback = pendingClasses[i + 3];
        invokeMethod(vm, clazz, args);
        wrapJava(vm, clazz, callback);
      }
      pendingClasses = [];
    }
  }
  function invokeMethod(vm, n, args) {
    var clazz = vm.loadClass(n);
    if (args) {
      var seek = args[0];
      var prefix = seek.indexOf('__') == -1 ? seek + '__' : seek;
      args = Array.prototype.slice.call(args, 1);
      var found = '';
      for (var m in clazz) {
        if (m.indexOf(prefix) === 0) {
          var method = clazz[m];
          if ((method['access'] & 8) === 8) {
            return method.apply(null, args);
          }
        }
        found += m.toString() + '\n'
      }
      throw 'Cannot find ' + seek + ' in ' + n + ' found:\n' + found;
    }
  }
  function extensionError(ev) {
    console.log('error loading ' + ev.target.src);
    extensionLoaded(ev);
  }
  function loadExtension(url, registerScript) {
      if (url.substring(url.length - 4) == '.jar')
        url = url.substring(0, url.length - 4) + '.js';
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = url;
      script.onload = extensionLoaded;
      script.onerror = extensionError;
      if (registerScript) document['currentScript'] = script;
      document.getElementsByTagName('head')[0].appendChild(script);
      pending.push(script);
  }
  global.bck2brwsr = function() {
    var args = Array.prototype.slice.apply(arguments);
    var resources = {};
    function registerResource(n, a64) {
      var frm = atob || window.atob;
      var str = frm(a64);
      var arr = [];
      for (var i = 0; i < str.length; i++) {
        var ch = str.charCodeAt(i) & 0xff;
        if (ch > 127) ch -= 256;
        arr.push(ch);
      }
      if (!resources[n]) resources[n] = [arr];
      else resources[n].push(arr);
    }
    var vm = fillInVMSkeleton({ 'registerResource' : registerResource });
    function initVM() {
      var clsArray = vm['java_lang_reflect_Array'];
      if (clsArray) clsArray(false);
    }
    for (var i = 0; i < extensions.length; ++i) {
      extensions[i](vm);
    }
    vm['registerResource'] = null;
    var knownExtensions = extensions.length;
    var loader = {};
    var classPath;
    var loadBytes = function(name, skip) {
      skip = typeof skip == 'number' ? skip : 0;
      var arr = resources[name];
      if (arr) {
        var arrSize = arr.length;
        if (skip < arrSize) return arr[skip];
        skip -= arrSize;
      } else {
        var arrSize = 0;
      };
      for (var i = 0; i < args.length; i++) {
        var at = args[i];
        if(!at) continue;
        var ret;
        if (typeof at === 'string' && at.substring(at.length - 3) === '.js') {
          loadExtension(at, document && !document['currentScript']);
          args[i] = null;
        } else if (typeof at === 'function') ret = at(name, skip);
        else {
          if (classPath === undefined) {
             classPath = null;
             try {
               classPath = vm.loadClass('org.apidesign.vm4brwsr.ClassPath');
             } catch (err) {
             }
           }
          if (!classPath) {
            if (name !== 'org/apidesign/vm4brwsr/ClassPath.class') {
              throw 'Core Java library not registered. Cannot load from ' + at;
            }
            ret = null;
          } else {
            ret = classPath['loadBytes___3BLjava_lang_String_2Ljava_lang_Object_2II'](name, args, i, skip);
          }
        }
        if (ret) return ret;
      }
      while (knownExtensions < extensions.length) {
        vm['registerResource'] = registerResource;
        extensions[knownExtensions++](vm);
        vm['registerResource'] = null;
        initVM();
      }
      var arr = resources[name];
      return (arr && arr.length > arrSize) ? arr[arrSize] : null;
    }
    var reload = function(name, arr, keep) {
      if (!arr) throw 'Cannot find ' + name;
      var err = null;
      try {
        var lazy = loadClass('org.apidesign.vm4brwsr.VMLazy');
      } catch (e) {
        err = e;
      }
      if (!lazy) {
         throw 'No bck2brwsr VM module to compile ' + name + ':\n' + err;
      }
      if (!keep) {
        var attr = mangleClass(name);
        delete vm[attr];
      }
      return lazy['load__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_String_2_3Ljava_lang_Object_2_3B']
        (vm, name, args, arr);
    };
    var loadClass = function(name) {
      var attr = mangleClass(name);
      var fn = vm[attr];
      if (fn) {
         return fn(false);
      };
      try {
        var arr = loadBytes(replaceAll(name, '.', '/') + '.class');
        var newClazz = reload(name, arr, true);
        return newClazz;
      } catch (err) {
        fn = vm[attr];
        if (fn) return fn(false);
        throw err;
      }
    }
    if (vm['loadClass']) {
      throw 'Cannot initialize the bck2brwsr VM twice!';
    }
    vm['loadClass'] = loadClass;
    vm['_reload'] = reload;
    vm['loadBytes'] = loadBytes;
    initVM();
    loader.loadClass = function(name, callback) {
      if (pending.length === 0) {
        try {
          var c = loadClass(name, callback);
          var w = wrapJava(vm, name, callback, c);
          return w;
        } catch (err) {
          if (pending.length === 0) throw err;
        }
      }
      pendingClasses.push(vm);
      pendingClasses.push(name);
      pendingClasses.push(null);
      pendingClasses.push(callback);
      return {
        'invoke' : function() {
          if (pending.length === 0) {
            invokeMethod(vm, name, arguments);
            return;
          }
          pendingClasses.push(vm);
          pendingClasses.push(name);
          pendingClasses.push(arguments);
          pendingClasses.push(null);
        }
      };
    }
    return loader;
  };
  global.bck2brwsr.register = function(config, extension) {
    if (!config || config['magic'] !== 'kafčo') {
      console.log('Will not register: ' + extension);
      return false;
    }
    if (typeof document == 'undefined') {
      var cs = null;
    } else {
      var cs = document['currentScript'];
      if (!cs) {
        var all = document.getElementsByTagName('script');
        var last = all.length;
        while (--last >= 0 && !all[last].src) {
        }
        cs = all[last];
      }
    }
    var csUrl = cs ? cs['src'] : null;
    var prefix = csUrl ? csUrl['replace'](/\/[^\/]*$/,'/') : '';
    extensions.push(extension);
    var cp = config[componentClassPath];
    if (cp) for (var i = 0; i < cp.length; i++) {
      loadExtension(prefix + cp[i]);
    }
    return null;
  };
}(this));