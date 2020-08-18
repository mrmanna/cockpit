/* 
 * This JS must return a viewModel object which will be used as ViewModel for the registered component
 */


viewmodel = function(params) {
    CSSLOADER.loadremote("cloudoffice/cockpit/layout/layoutdesigner");
    CSSLOADER.loadremote(company + "/" + site + "/layout" + path + "/" + layout + "/view/style/layout");
    return componentsValue[params.name()];
};

LayoutManager = {
    reload: function(element) {
        var path = element.childNodes[3].innerHTML;
        if (!window.location.pathname.startsWith(path)) {
            window.location.pathname = path;
        }
    },
    togglecollection: function(rowId, width) {
        var columnIds = [];
        var rowIdWithClass = "#" + rowId + " .dcolumn";
        $(rowIdWithClass).each(function() {
            columnIds.push($(this).attr('id'));
        });
        var remaining = 100 - parseInt(width);
        var commaSeperatedWidthArray = [width + "", remaining + ""];
        for (var i = 0; i < columnIds.length; i++) {
            var colId = "#" + columnIds[i];
            var colWidth = commaSeperatedWidthArray[i] + "%";
            $(colId).innerWidth(colWidth);
        }
    },
    toggleListDetailView: function(colId, width) {
        var instanceIds = [];
        var colIdWithClass = "#" + colId + " .dcomp";
        $(colIdWithClass).each(function() {
            instanceIds.push($(this).children().attr('id'));
        });
        var remaining = 100 - parseInt(width);
        var commaSeperatedWidthArray = [remaining + "", width + ""];
        for (var i = 0; i < instanceIds.length; i++) {
            var instanceId = "#" + instanceIds[i];
            var instanceWidth = commaSeperatedWidthArray[i] + "%";
            $(instanceId).innerWidth(instanceWidth);
        }
        if (remaining === 0) {
            $("#" + instanceIds[0]).css("display", "none");
        } else {
            $("#" + instanceIds[0]).css("display", "block");
        }
    },
    showConfig: function(id) {
        var content = '<div id="' + id + '-conf"><!-- ko if: cPanel --><div class="conf-panel">' + '<i class="fa fa-cog" aria-hidden="true"></i>' + '</div><!-- /ko --></div>';
        document.getElementById(id).innerHTML = document.getElementById(id).innerHTML + content;
    },
    removeConfig: function(id) {
        var element = document.getElementById(id);
        element.parentNode.removeChild(element);
    },
    styleReload: function(layout) {
        var remotepath = company + "/" + site + "/layout" + path + "/" + layout + "/view/style/layout";
        CSSLOADER.loadremote(remotepath);
        console.log(">>> Style successfully reloaded @ " + remotepath);
    },
    componentStyleReload: function(component, instance) {

        var remotepath = company + "/" + site + "/" + component + "" + path + "/" + instance + "/view/style/" + component;
        CSSLOADER.loadremote(remotepath);
        console.log(">>> Style successfully reloaded @ " + remotepath);
    }
};