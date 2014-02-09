function Controller() {
    function showMine() {
        data = [];
        favorites.fetch();
        for (var i = 0; favorites.length > i; i++) {
            var favorite = favorites.at(i);
            data.push(Alloy.createController("eventRow", {
                model: favorite
            }).getView());
        }
        0 !== data.length ? $.eventTable.setData(data) : alert("You have no favorites saved");
        $.eventTable.scrollToTop();
    }
    function showLocations() {
        picker.getView().showPicker();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__alloyId32 = Alloy.createCollection("favorites");
    $.__alloyId34 = Alloy.createCollection("events");
    $.__views.win2 = Ti.UI.createWindow({
        layout: "vertical",
        backgroundColor: "d3d6db",
        barColor: "fa9a03",
        autoAdjustScrollViewInsets: true,
        color: "FFF",
        height: Ti.UI.FILL,
        includeOpaqueBars: false,
        navTintColor: "fff",
        statusBarStyle: Ti.UI.iPhone.StatusBar.LIGHT_CONTENT,
        width: Ti.UI.FILL,
        id: "win2",
        title: "Step Up Events"
    });
    $.__views.__alloyId35 = Ti.UI.createView({
        layout: "horizontal",
        color: "ffffff",
        backgroundColor: "f1e4b7",
        width: "100%",
        height: "44dp",
        id: "__alloyId35"
    });
    $.__views.win2.add($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createView({
        layout: "horizontal",
        color: "ffffff",
        left: 0,
        height: Ti.UI.FILL,
        width: "49.5%",
        id: "__alloyId36"
    });
    $.__views.__alloyId35.add($.__views.__alloyId36);
    showMine ? $.__views.__alloyId36.addEventListener("click", showMine) : __defers["$.__views.__alloyId36!click!showMine"] = true;
    $.__views.__alloyId37 = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Bold",
            fontSize: "14dp"
        },
        color: "808080",
        touchEnabled: false,
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        width: "100%",
        top: "15dp",
        text: "FAVORITES",
        id: "__alloyId37"
    });
    $.__views.__alloyId36.add($.__views.__alloyId37);
    $.__views.__alloyId38 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        borderRadius: "4dp",
        borderWidth: "1dp",
        borderColor: "dadada",
        width: "2dp",
        height: "100%",
        top: "0dp",
        id: "__alloyId38"
    });
    $.__views.__alloyId35.add($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createView({
        layout: "horizontal",
        color: "ffffff",
        left: 0,
        height: Ti.UI.FILL,
        width: "49.5%",
        id: "__alloyId39"
    });
    $.__views.__alloyId35.add($.__views.__alloyId39);
    showLocations ? $.__views.__alloyId39.addEventListener("click", showLocations) : __defers["$.__views.__alloyId39!click!showLocations"] = true;
    $.__views.location = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Bold",
            fontSize: "14dp"
        },
        color: "808080",
        touchEnabled: false,
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        width: "100%",
        top: "15dp",
        text: "ALL",
        id: "location"
    });
    $.__views.__alloyId39.add($.__views.location);
    $.__views.eventTable = Ti.UI.createTableView({
        backgroundColor: "transparent",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        separatorStyle: Titanium.UI.iPhone.TableViewSeparatorStyle.NONE,
        id: "eventTable"
    });
    $.__views.win2.add($.__views.eventTable);
    $.__views.win1 = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.win2,
        id: "win1"
    });
    $.__views.win1 && $.addTopLevelView($.__views.win1);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.Globals.checkForUpdates();
    var favorites = Alloy.Collections.instance("favorites");
    favorites.fetch();
    Alloy.Globals.updateEventTable = function() {
        var events = Alloy.Collections.instance("events");
        events.fetch();
        var data = [];
        for (var i = 0; events.length > i; i++) {
            var event = events.at(i);
            data.push(Alloy.createController("eventRow", {
                model: event
            }).getView());
        }
        $.eventTable.setData(data);
    };
    Alloy.Globals.updateEventTable();
    var picker = Alloy.createWidget("wriststrap.picker", "widget", {
        data: [ [ {
            title: "All",
            id: "all"
        }, {
            title: "Chicago",
            id: "chicago"
        }, {
            title: "Los Angeles",
            id: "la"
        }, {
            title: "New York",
            id: "newyork"
        } ] ],
        onDone: function(selectedValues) {
            "all" === selectedValues[0] ? $.location.setText("ALL") : "chicago" === selectedValues[0] ? $.location.setText("CHICAGO") : "la" === selectedValues[0] ? $.location.setText("LOS ANGELES") : "newyork" === selectedValues[0] && $.location.setText("NEW YORK");
            data = [];
            for (var i = 0; events.length > i; i++) {
                var event = events.at(i);
                data.push(Alloy.createController("eventRow", {
                    model: event
                }).getView());
            }
            $.eventTable.setData(data);
        }
    });
    $.win1.add(picker.getView());
    $.win1.open();
    __defers["$.__views.__alloyId36!click!showMine"] && $.__views.__alloyId36.addEventListener("click", showMine);
    __defers["$.__views.__alloyId39!click!showLocations"] && $.__views.__alloyId39.addEventListener("click", showLocations);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;