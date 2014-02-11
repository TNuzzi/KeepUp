function Controller() {
    function syncWithServer() {
        Alloy.Globals.updateEventTable();
    }
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
    $.__views.__alloyId36 = Ti.UI.createButton({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        height: "44dp",
        width: "100%",
        image: "/images/759-refresh-2.png",
        id: "__alloyId36"
    });
    syncWithServer ? $.__views.__alloyId36.addEventListener("click", syncWithServer) : __defers["$.__views.__alloyId36!click!syncWithServer"] = true;
    $.__views.win2.rightNavButton = $.__views.__alloyId36;
    $.__views.__alloyId37 = Ti.UI.createView({
        layout: "horizontal",
        color: "ffffff",
        backgroundColor: "f1e4b7",
        width: "100%",
        height: "44dp",
        id: "__alloyId37"
    });
    $.__views.win2.add($.__views.__alloyId37);
    $.__views.__alloyId38 = Ti.UI.createView({
        layout: "horizontal",
        color: "ffffff",
        left: 0,
        height: Ti.UI.FILL,
        width: "49.5%",
        id: "__alloyId38"
    });
    $.__views.__alloyId37.add($.__views.__alloyId38);
    showMine ? $.__views.__alloyId38.addEventListener("click", showMine) : __defers["$.__views.__alloyId38!click!showMine"] = true;
    $.__views.__alloyId39 = Ti.UI.createLabel({
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
        id: "__alloyId39"
    });
    $.__views.__alloyId38.add($.__views.__alloyId39);
    $.__views.__alloyId40 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        borderRadius: "4dp",
        borderWidth: "1dp",
        borderColor: "dadada",
        width: "2dp",
        height: "100%",
        top: "0dp",
        id: "__alloyId40"
    });
    $.__views.__alloyId37.add($.__views.__alloyId40);
    $.__views.__alloyId41 = Ti.UI.createView({
        layout: "horizontal",
        color: "ffffff",
        left: 0,
        height: Ti.UI.FILL,
        width: "49.5%",
        id: "__alloyId41"
    });
    $.__views.__alloyId37.add($.__views.__alloyId41);
    showLocations ? $.__views.__alloyId41.addEventListener("click", showLocations) : __defers["$.__views.__alloyId41!click!showLocations"] = true;
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
        text: "MOST RECENT",
        id: "location"
    });
    $.__views.__alloyId41.add($.__views.location);
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
    var events = Alloy.Collections.instance("events");
    events.fetch();
    var favorites = Alloy.Collections.instance("favorites");
    favorites.fetch();
    Alloy.Globals.updateEventTable = function() {
        events.fetch();
        var data = [];
        for (var i = 0; events.length > i; i++) {
            var event = events.at(i);
            data.push(Alloy.createController("eventRow", {
                model: event
            }).getView());
        }
        $.eventTable.setData(data);
        $.eventTable.scrollToTop();
    };
    Alloy.Globals.updateEventTable();
    var picker = Alloy.createWidget("wriststrap.picker", "widget", {
        data: [ [ , {
            title: "New York",
            id: "New York"
        }, {
            title: "Chicago",
            id: "Chicago"
        }, {
            title: "Los Angeles",
            id: "Los Angeles"
        }, {
            title: "Most Recent",
            id: "All"
        } ] ],
        onDone: function(selectedValues) {
            "All" === selectedValues[0] ? $.location.setText("MOST RECENT") : "Chicago" === selectedValues[0] ? $.location.setText("CHICAGO") : "Los Angeles" === selectedValues[0] ? $.location.setText("LOS ANGELES") : "New York" === selectedValues[0] && $.location.setText("NEW YORK");
            if ("All" === selectedValues[0]) Alloy.Globals.updateEventTable(); else {
                data = [];
                var newLocations = events.filterLocation(selectedValues[0]);
                for (var i = 0; newLocations.length > i; i++) {
                    var event = newLocations.at(i);
                    data.push(Alloy.createController("eventRow", {
                        model: event
                    }).getView());
                }
                $.eventTable.setData(data);
                $.eventTable.scrollToTop();
            }
        }
    });
    $.win1.add(picker.getView());
    $.win1.open();
    __defers["$.__views.__alloyId36!click!syncWithServer"] && $.__views.__alloyId36.addEventListener("click", syncWithServer);
    __defers["$.__views.__alloyId38!click!showMine"] && $.__views.__alloyId38.addEventListener("click", showMine);
    __defers["$.__views.__alloyId41!click!showLocations"] && $.__views.__alloyId41.addEventListener("click", showLocations);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;