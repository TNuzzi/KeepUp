function Controller() {
    function saveEvent(e) {
        var favorite = favorites.get(model.id);
        if (void 0 !== favorite) {
            $.resetClass(e.source.children[0], "glyphish-heart-1 h-20 w-20 l-40 touch-disabled");
            favorites.remove(favorite);
            favorite.destroy();
        } else {
            $.resetClass(e.source.children[0], "glyphish-heart-selected h-20 w-20 l-40 touch-disabled");
            favorite = Alloy.createModel("favorites");
            favorite.set(model.toJSON());
            favorite.save();
            favorites.add(favorite);
        }
    }
    function getDirections() {
        if (false === Titanium.Geolocation.locationServicesEnabled) Titanium.UI.createAlertDialog({
            title: "Step Up Womens Network",
            message: "You need to be online to view this page."
        }).show(); else {
            Ti.Geolocation.purpose = "Receive User Location";
            Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
            Titanium.Geolocation.distanceFilter = 10;
            Titanium.Geolocation.getCurrentPosition(function(e) {
                if (e.error) return;
                var longitude = e.coords.longitude;
                var latitude = e.coords.latitude;
                var url = "maps://maps.google.com/maps?f=d&source=s_d&saddr=" + latitude + "," + longitude + "&daddr=" + encodeURIComponent(location) + "&hl=en&geocode=&mra=ls&amp;sll=" + latitude + "," + longitude + "&sspn=0.318051,1.056747&ie=UTF8&z=7";
                Ti.Platform.openURL(url);
                Ti.API.info(url);
            });
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "eventRow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.eventRow = Ti.UI.createTableViewRow({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp",
            fontWeight: "bold",
            fontStyle: "normal"
        },
        selectionStyle: Titanium.UI.iPhone.TableViewCellSelectionStyle.NONE,
        id: "eventRow"
    });
    $.__views.eventRow && $.addTopLevelView($.__views.eventRow);
    $.__views.__alloyId2 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        borderRadius: "4dp",
        borderWidth: "1dp",
        borderColor: "transparent",
        width: "95%",
        height: Ti.UI.SIZE,
        top: "10dp",
        backgroundColor: "FFFFFF",
        id: "__alloyId2"
    });
    $.__views.eventRow.add($.__views.__alloyId2);
    $.__views.headerView = Ti.UI.createView({
        layout: "horizontal",
        color: "ffffff",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        id: "headerView",
        backgroundColor: "#e39b23"
    });
    $.__views.__alloyId2.add($.__views.headerView);
    $.__views.__alloyId3 = Ti.UI.createView({
        layout: "horizontal",
        color: "ffffff",
        bottom: "0dp",
        left: "3%",
        width: "94%",
        height: "25dp",
        id: "__alloyId3"
    });
    $.__views.headerView.add($.__views.__alloyId3);
    $.__views.header = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-UltraLight",
            fontSize: "18dp"
        },
        color: "FFFFFF",
        layout: "vertical",
        width: "74.3333333%",
        height: Ti.UI.SIZE,
        text: "Teen Event",
        id: "header"
    });
    $.__views.__alloyId3.add($.__views.header);
    $.__views.updated = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        color: "FFFFFF",
        visible: false,
        borderRadius: "4dp",
        borderWidth: "1dp",
        borderColor: "transparent",
        left: "20dp",
        backgroundColor: "468847",
        text: "updated",
        id: "updated"
    });
    $.__views.__alloyId3.add($.__views.updated);
    $.__views.__alloyId4 = Ti.UI.createView({
        layout: "horizontal",
        color: "ffffff",
        bottom: "10dp",
        left: "3%",
        width: "94%",
        height: Ti.UI.SIZE,
        top: "0dp",
        id: "__alloyId4"
    });
    $.__views.__alloyId2.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        width: "24%",
        height: Ti.UI.SIZE,
        id: "__alloyId5"
    });
    $.__views.__alloyId4.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createImageView({
        image: "/images/739-question.png",
        id: "__alloyId6"
    });
    $.__views.__alloyId5.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-UltraLight",
            fontSize: "14dp"
        },
        color: "333333",
        text: "what",
        id: "__alloyId7"
    });
    $.__views.__alloyId5.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        borderRadius: "4dp",
        borderWidth: "1dp",
        borderColor: "dadada",
        width: "2dp",
        height: "50dp",
        top: "0dp",
        id: "__alloyId8"
    });
    $.__views.__alloyId4.add($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        width: "74.3333333%",
        height: Ti.UI.SIZE,
        id: "__alloyId9"
    });
    $.__views.__alloyId4.add($.__views.__alloyId9);
    $.__views.title = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        color: "428bca",
        left: "10dp",
        id: "title"
    });
    $.__views.__alloyId9.add($.__views.title);
    $.__views.__alloyId10 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        width: "24%",
        height: Ti.UI.SIZE,
        id: "__alloyId10"
    });
    $.__views.__alloyId4.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createImageView({
        image: "/images/728-clock.png",
        id: "__alloyId11"
    });
    $.__views.__alloyId10.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-UltraLight",
            fontSize: "14dp"
        },
        color: "333333",
        text: "when",
        id: "__alloyId12"
    });
    $.__views.__alloyId10.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        borderRadius: "4dp",
        borderWidth: "1dp",
        borderColor: "dadada",
        width: "2dp",
        height: "50dp",
        top: "0dp",
        id: "__alloyId13"
    });
    $.__views.__alloyId4.add($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        width: "74.3333333%",
        height: Ti.UI.SIZE,
        id: "__alloyId14"
    });
    $.__views.__alloyId4.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createView({
        layout: "horizontal",
        color: "ffffff",
        width: "99.666666%",
        height: Ti.UI.SIZE,
        id: "__alloyId15"
    });
    $.__views.__alloyId14.add($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue",
            fontSize: "14dp"
        },
        color: "333333",
        width: "25%",
        left: "10dp",
        text: "Date",
        id: "__alloyId16"
    });
    $.__views.__alloyId15.add($.__views.__alloyId16);
    $.__views.date = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        color: "333333",
        width: "70%",
        id: "date"
    });
    $.__views.__alloyId15.add($.__views.date);
    $.__views.__alloyId17 = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue",
            fontSize: "14dp"
        },
        color: "333333",
        width: "25%",
        left: "10dp",
        text: "Time",
        id: "__alloyId17"
    });
    $.__views.__alloyId15.add($.__views.__alloyId17);
    $.__views.time = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        color: "333333",
        width: "70%",
        id: "time"
    });
    $.__views.__alloyId15.add($.__views.time);
    $.__views.__alloyId18 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        width: "24%",
        height: Ti.UI.SIZE,
        id: "__alloyId18"
    });
    $.__views.__alloyId4.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createImageView({
        image: "/images/789-map-location.png",
        id: "__alloyId19"
    });
    $.__views.__alloyId18.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-UltraLight",
            fontSize: "14dp"
        },
        color: "333333",
        text: "where",
        id: "__alloyId20"
    });
    $.__views.__alloyId18.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        borderRadius: "4dp",
        borderWidth: "1dp",
        borderColor: "dadada",
        width: "2dp",
        height: "50dp",
        top: "0dp",
        id: "__alloyId21"
    });
    $.__views.__alloyId4.add($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        width: "74.3333333%",
        height: Ti.UI.SIZE,
        id: "__alloyId22"
    });
    $.__views.__alloyId4.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        width: "100%",
        height: Ti.UI.SIZE,
        left: "10dp",
        id: "__alloyId23"
    });
    $.__views.__alloyId22.add($.__views.__alloyId23);
    $.__views.location = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        color: "468847",
        left: 0,
        id: "location"
    });
    $.__views.__alloyId23.add($.__views.location);
    $.__views.__alloyId24 = Ti.UI.createView({
        layout: "horizontal",
        color: "ffffff",
        backgroundColor: "f1e4b7",
        width: "100%",
        height: "44dp",
        id: "__alloyId24"
    });
    $.__views.__alloyId2.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createView({
        layout: "horizontal",
        color: "ffffff",
        left: 0,
        height: Ti.UI.SIZE,
        width: "49.5%",
        id: "__alloyId25"
    });
    $.__views.__alloyId24.add($.__views.__alloyId25);
    getDirections ? $.__views.__alloyId25.addEventListener("click", getDirections) : __defers["$.__views.__alloyId25!click!getDirections"] = true;
    $.__views.__alloyId26 = Ti.UI.createImageView({
        image: "/images/852-map.png",
        touchEnabled: false,
        width: "20dp",
        height: "20dp",
        left: "15dp",
        id: "__alloyId26"
    });
    $.__views.__alloyId25.add($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-UltraLight",
            fontSize: "16dp"
        },
        color: "808080",
        touchEnabled: false,
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        width: "60%",
        left: "10dp",
        text: "DIRECTIONS",
        id: "__alloyId27"
    });
    $.__views.__alloyId25.add($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        borderRadius: "4dp",
        borderWidth: "1dp",
        borderColor: "dadada",
        width: "2dp",
        height: "100%",
        top: "0dp",
        id: "__alloyId28"
    });
    $.__views.__alloyId24.add($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createView({
        layout: "horizontal",
        color: "ffffff",
        left: 0,
        height: Ti.UI.SIZE,
        width: "49.5%",
        id: "__alloyId29"
    });
    $.__views.__alloyId24.add($.__views.__alloyId29);
    saveEvent ? $.__views.__alloyId29.addEventListener("click", saveEvent) : __defers["$.__views.__alloyId29!click!saveEvent"] = true;
    $.__views.save = Ti.UI.createImageView({
        image: "/images/748-heart.png",
        touchEnabled: false,
        width: "20dp",
        height: "20dp",
        left: "40dp",
        id: "save"
    });
    $.__views.__alloyId29.add($.__views.save);
    $.__views.__alloyId30 = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-UltraLight",
            fontSize: "16dp"
        },
        color: "808080",
        touchEnabled: false,
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: "30%",
        left: "10dp",
        text: "SAVE",
        id: "__alloyId30"
    });
    $.__views.__alloyId29.add($.__views.__alloyId30);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var moment = require("alloy/moment");
    var args = arguments[0] || {};
    var model = args.model;
    var title = model.get("title");
    var location = model.get("location");
    var start_date = moment(model.get("start_date"));
    var end_date = moment(model.get("end_date"));
    var category = model.get("category");
    var favorites = Alloy.Collections.instance("favorites");
    favorites.fetch();
    $.title.setText(title);
    $.date.setText(start_date.format("MMMM Do YYYY"));
    $.time.setText(start_date.format("h:mm a") + " - " + end_date.format("h:mm a"));
    $.location.setText(location);
    model.get("hasBeenUpdated") && $.updated.show();
    if ("Teen Programs" === category) {
        $.resetClass($.headerView, "w-fill h-size eventRowHeaderColor-teen");
        $.header.setText("Teen Event");
    } else if ("Networking" === category) {
        $.resetClass($.headerView, "w-fill h-size eventRowHeaderColor-social-network");
        $.header.setText("Social Networking");
    } else if ("Professional Development" === category) {
        $.resetClass($.headerView, "w-fill h-size eventRowHeaderColor-processional-mentorship");
        $.header.setText("Processional Mentorship");
    }
    void 0 === favorites.get(model.id) ? $.resetClass($.save, "glyphish-heart-1 h-20 w-20 l-40 touch-disabled") : $.resetClass($.save, "glyphish-heart-selected h-20 w-20 l-40 touch-disabled");
    __defers["$.__views.__alloyId25!click!getDirections"] && $.__views.__alloyId25.addEventListener("click", getDirections);
    __defers["$.__views.__alloyId29!click!saveEvent"] && $.__views.__alloyId29.addEventListener("click", saveEvent);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;