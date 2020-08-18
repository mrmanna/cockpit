$.ajaxSetup({
    headers: {
        'Accept': "*/*; charset=utf-8"
    }
});
$.ajaxPrefilter(function (options) {
        options.cache = true;
});
var templateFromUrlLoader = {
    loadTemplate: function (name, templateConfig, callback) {

        if (templateConfig.fromUrl) {
            // Uses jQuery's ajax facility to load the markup from a file
            var fullUrl = templateConfig.fromUrl;
            $.get(fullUrl, function (markupString) {
                // We need an array of DOM nodes, not a string.
                // We can use the default loader to convert to the
                // required format.
                ko.components.defaultLoader.loadTemplate(name, markupString, callback);
            });
        } else {
            // Unrecognized config format. Let another loader handle it.
            callback(null);
        }
    }
};
// Register it
ko.components.loaders.unshift(templateFromUrlLoader);

var viewModelCustomLoader = {
    loadViewModel: function (name, viewModelConfig, callback) {
        if (viewModelConfig.viaLoader) {
            var fullUrl = viewModelConfig.viaLoader;
            $.getScript(fullUrl + ".js", function (data, textStatus, jqxhr) {
                ko.components.defaultLoader.loadViewModel(name, viewmodel, callback);
            });


        } else {
            // Unrecognized config format. Let another loader handle it.
            callback(null);
        }
    }
};



ko.bindingHandlers.enterkey = {
    init: function (element, valueAccessor) {
        $(element).keypress(function (event) {

            var keyCode = (event.which ? event.which : event.keyCode);
            if (keyCode === 13) {
                var enterPressed = ko.utils.unwrapObservable(valueAccessor()) || {};
                enterPressed = true;
                if (ko.isObservable(valueAccessor())) {
                    valueAccessor()(enterPressed);
                }
            }

        });
    }
};

// Register it
ko.components.loaders.unshift(viewModelCustomLoader);


ko.bindingHandlers.reverseforeach = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        var newBindingContext = bindingContext.extend({
            iterator: valueAccessor()
        });
        var reversedbyfieldname = allBindingsAccessor.get('reversedbyfieldname') || '';
        if ((typeof reversedbyfieldname !== "undefined" && null !== reversedbyfieldname && "" !== reversedbyfieldname)) {
            var listitems = ko.unwrap(valueAccessor());
            listitems.sort(function (a, b) {
                a = ko.unwrap(a[reversedbyfieldname]);
                b = ko.unwrap(b[reversedbyfieldname]);
                return (a === b ? 0 : a < b ? -1 : 1);
            });
        }
        return ko.bindingHandlers.foreach.init(element, valueAccessor, allBindingsAccessor, viewModel, newBindingContext);
    },
    update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        var newBindingContext = bindingContext.extend({
            iterator: valueAccessor()
        });
        var reversedbyfieldname = allBindingsAccessor.get('reversedbyfieldname') || '';
        if ((typeof reversedbyfieldname !== "undefined" && null !== reversedbyfieldname && "" !== reversedbyfieldname)) {
            var listitems = ko.unwrap(valueAccessor());
            listitems.sort(function (a, b) {
                a = ko.unwrap(a[reversedbyfieldname]);
                b = ko.unwrap(b[reversedbyfieldname]);
                return (a === b ? 0 : a < b ? -1 : 1);
            });
        }
        return ko.bindingHandlers.foreach.update(element, valueAccessor, allBindingsAccessor, viewModel, newBindingContext);
    }
};


ko.bindingHandlers.fadedIf = {
    init: function (element, valueAccessor, allBindingsAccessor, data, bindingContext) {
        // Initially set the element to be instantly visible/hidden depending on the value
        var value = valueAccessor();
        //If the value is a normal function make it a computed so that it updates properly
        if (!ko.isObservable(value)) {
            value = ko.computed({read: valueAccessor});
        }
        //attach our observable property to the accessor so that it can be used in the update function
        valueAccessor.domShown = ko.observable(ko.unwrap(value));

        //Wrap any contents of the element in a new div, and then bind that div using the "if" binding.
        //This way the element and its event hooks for fading in/out never leaves the dom, but all content does.
        //it also prevents applying multiple bindings to the same element.
        var contentWrapper = $(element).children().wrapAll(document.createElement("div")).parent()[0];
        ko.applyBindingAccessorsToNode(contentWrapper, {'if': function () {
                return valueAccessor.domShown;
            }}, bindingContext);
    },
    update: function (element, valueAccessor) {
        // Whenever the value subsequently changes, slowly fade the element in or out
        var value = valueAccessor();

        if (ko.unwrap(value)) {
            valueAccessor.domShown(true); //restore the element to the DOM
            $(element).fadeIn(800);
        } else {
            $(element).fadeOut({
                complete: function () {
                    valueAccessor.domShown(false); //remove the element from the DOM
                }
            });
        }
    }
};


//https://stackoverflow.com/questions/14321012/prevent-event-bubbling-when-using-the-checked-binding-in-knockoutjs
ko.bindingHandlers.stopBubble = {
    init: function (element) {
        ko.utils.registerEventHandler(element, "click", function (event) {
            event.cancelBubble = true;
            if (event.stopPropagation) {
                event.stopPropagation();
            }
        });
    }
};



//http://jsfiddle.net/rniemeyer/JksKx/9/
ko.bindingHandlers.htmlValue = {
    init: function (element, valueAccessor, allBindingsAccessor) {
        ko.utils.registerEventHandler(element, "keyup", function () {
            var modelValue = valueAccessor();
            var elementValue = element.innerHTML;
            if (ko.isWriteableObservable(modelValue)) {
                modelValue(elementValue);

            } else { //handle non-observable one-way binding
                var allBindings = allBindingsAccessor();
                if (allBindings['_ko_property_writers'] && allBindings['_ko_property_writers'].htmlValue)
                    allBindings['_ko_property_writers'].htmlValue(elementValue);
            }
        });
    },
    update: function (element, valueAccessor) {
        var value = ko.utils.unwrapObservable(valueAccessor()) || "";
        if (element.innerHTML !== value) {
            element.innerHTML = value;
        }
    }
};
function a(name, baseUrl) {
    ko.components.register(name + "-component", {
        viewModel: {viaLoader: baseUrl + "cloudoffice/cockpit/" + name + "/model/" + name},
        template: {fromUrl: baseUrl + "cloudoffice/cockpit/" + name + "/view/" + name + ".html", maxCacheAge: 0}
    });
}
function b(componentName, viewName, model, baseUrl) {
    ko.components.register(viewName + "-component", {
        viewModel: {viaLoader: baseUrl + "cloudoffice/cockpit/" + componentName + "/model/" + model},
        template: {fromUrl: baseUrl + "cloudoffice/cockpit/" + componentName + "/view/" + viewName + ".html", maxCacheAge: 0}
    });
}