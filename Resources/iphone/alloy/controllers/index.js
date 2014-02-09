function Controller() {
    function showMine() {
        alert("showMine");
    }
    function showLocations() {
        alert("showLocations");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    Alloy.Collections.instance("favorites");
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
    $.__views.__alloyId32 = Ti.UI.createButton({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        height: "44dp",
        width: "100%",
        image: "glyphish/icons/06-magnify.png",
        id: "__alloyId32"
    });
    $.__views.win2.leftNavButton = $.__views.__alloyId32;
    $.__views.__alloyId34 = Ti.UI.createButton({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        height: "44dp",
        width: "100%",
        image: "drawer-icon.png",
        id: "__alloyId34"
    });
    $.__views.win2.rightNavButton = $.__views.__alloyId34;
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
        height: Ti.UI.SIZE,
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
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        width: "100%",
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
        height: Ti.UI.SIZE,
        width: "49.5%",
        id: "__alloyId39"
    });
    $.__views.__alloyId35.add($.__views.__alloyId39);
    showLocations ? $.__views.__alloyId39.addEventListener("click", showLocations) : __defers["$.__views.__alloyId39!click!showLocations"] = true;
    $.__views.__alloyId40 = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Bold",
            fontSize: "14dp"
        },
        color: "808080",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        width: "100%",
        text: "ALL",
        id: "__alloyId40"
    });
    $.__views.__alloyId39.add($.__views.__alloyId40);
    $.__views.eventTable = Ti.UI.createTableView({
        backgroundColor: "transparent",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
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
    var test = [ {
        title: "Pathways to Professions Workshop",
        description: 'Mentor 11th graders as they explore career possibilities-- help a girl "see what she can be!"',
        date: "1391860800",
        location: "Pfizer World Headquarters 235 East 42nd Street New York, NY 10017",
        updated_at: "1391774400",
        category: "Teen Programs"
    }, {
        title: "Pathways to Professions Workshop",
        description: 'Mentor 11th graders as they explore career possibilities-- help a girl "see what she can be!"',
        date: "1391860800",
        location: "Pfizer World Headquarters 235 East 42nd Street New York, NY 10017",
        updated_at: "1391774400",
        category: "Teen Programs"
    }, {
        title: "Mentor for a day at Step Up's After School Programs at Johnson College Prep!",
        description: "Help Step Up teens become confident, college-bound and career-ready while connecting with other dynamic, professional women and activating your inner philanthropist.",
        date: "1392048000",
        location: "Johnson College Prep 6350 S Stewart Ave. Room TBD Chicago, IL 60621",
        updated_at: "1391774400",
        category: "Networking"
    }, {
        title: "Mentor for a day at Step Up's After School Programs at Johnson College Prep!",
        description: "Help Step Up teens become confident, college-bound and career-ready while connecting with other dynamic, professional women and activating your inner philanthropist.",
        date: "1392048000",
        location: "Johnson College Prep 6350 S Stewart Ave. Room TBD Chicago, IL 60621",
        updated_at: "1391774400",
        category: "Professional Development"
    } ];
    var data = [];
    for (var i = 0; test.length > i; i++) {
        var event = test[i];
        data.push(Alloy.createController("eventRow", event).getView());
    }
    $.eventTable.setData(data);
    var favorites = Alloy.Collections.instance("favorites");
    favorites.fetch();
    $.win1.open();
    __defers["$.__views.__alloyId36!click!showMine"] && $.__views.__alloyId36.addEventListener("click", showMine);
    __defers["$.__views.__alloyId39!click!showLocations"] && $.__views.__alloyId39.addEventListener("click", showLocations);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;