function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "wriststrap.picker/" + s : s.substring(0, index) + "/wriststrap.picker/" + s.substring(index + 1);
    return path;
}

function Controller() {
    function showPicker() {
        $.widget.animate(Ti.UI.createAnimation({
            bottom: 0,
            duration: 300
        }));
    }
    function done() {
        $.widget.animate(Ti.UI.createAnimation({
            bottom: "-265dp",
            duration: 300
        }));
        onDone(selectedValues());
    }
    function selectedValues() {
        var columns, row, data = [];
        columns = $.picker.getColumns();
        for (var i = 0; columns.length > i; i++) {
            row = $.picker.getSelectedRow(i);
            data.push(row.id ? row.id : row.title);
        }
        return data;
    }
    new (require("alloy/widget"))("wriststrap.picker");
    this.__widgetId = "wriststrap.picker";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.widget = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        height: "255dp",
        bottom: "-265",
        id: "widget"
    });
    $.__views.widget && $.addTopLevelView($.__views.widget);
    $.__views.__alloyId0 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        height: "40dp",
        backgroundImage: "background-opacity-25.png",
        id: "__alloyId0"
    });
    $.__views.widget.add($.__views.__alloyId0);
    $.__views.doneButtonView = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        left: "75.75%",
        width: "24%",
        height: Ti.UI.SIZE,
        top: "5dp",
        id: "doneButtonView"
    });
    $.__views.__alloyId0.add($.__views.doneButtonView);
    $.__views.__alloyId1 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        width: "70dp",
        height: "30dp",
        borderRadius: "4dp",
        borderWidth: "1dp",
        backgroundColor: "5bc0de",
        borderColor: "46b8da",
        left: "5dp",
        id: "__alloyId1"
    });
    $.__views.doneButtonView.add($.__views.__alloyId1);
    $.__views.doneButton = Ti.UI.createButton({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "12dp"
        },
        height: "30dp",
        width: "100%",
        color: "ffffff",
        backgroundImage: "btn-info.png",
        title: "Done",
        id: "doneButton"
    });
    $.__views.__alloyId1.add($.__views.doneButton);
    done ? $.__views.doneButton.addEventListener("click", done) : __defers["$.__views.doneButton!click!done"] = true;
    $.__views.picker = Ti.UI.createPicker({
        bottom: "0dp",
        id: "picker",
        selectionIndicator: "true",
        useSpinner: "true"
    });
    $.__views.widget.add($.__views.picker);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var data = args.data || [];
    var onDone = args.onDone;
    var rowData, column, columns = [];
    for (var i = 0; data.length > i; i++) {
        rowData = data[i];
        column = Ti.UI.createPickerColumn();
        for (var j = 0; rowData.length > j; j++) column.addRow(Ti.UI.createPickerRow(rowData[j]));
        columns.push(column);
    }
    $.picker.add(columns);
    $.widget.showPicker = showPicker;
    __defers["$.__views.doneButton!click!done"] && $.__views.doneButton.addEventListener("click", done);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;