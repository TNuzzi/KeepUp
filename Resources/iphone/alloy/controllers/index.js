function Controller() {
    function showMine() {
        alert("showMine");
    }
    function showLocations() {
        alert("showLocations");
    }
    function getDirections() {
        if (false == Titanium.Geolocation.locationServicesEnabled) Titanium.UI.createAlertDialog({
            title: "Step Up Womens Network",
            message: "You need to be online to view this page."
        }).show(); else {
            Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
            Titanium.Geolocation.distanceFilter = 10;
            Titanium.Geolocation.getCurrentPosition(function(e) {
                if (e.error) return;
                var longitude = e.coords.longitude;
                var latitude = e.coords.latitude;
                var url = "maps://maps.google.com/maps?f=d&source=s_d&saddr=" + latitude + "," + longitude + "&daddr=1520+broadway+new+york&hl=en&geocode=&mra=ls&amp;sll=" + latitude + "," + longitude + "&sspn=0.318051,1.056747&ie=UTF8&z=7";
                Ti.Platform.openURL(url);
                Ti.API.info(url);
            });
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
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
    $.__views.__alloyId1 = Ti.UI.createButton({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        height: "44dp",
        width: "100%",
        image: "glyphish/icons/06-magnify.png",
        id: "__alloyId1"
    });
    $.__views.win2.leftNavButton = $.__views.__alloyId1;
    $.__views.__alloyId3 = Ti.UI.createButton({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        height: "44dp",
        width: "100%",
        image: "drawer-icon.png",
        id: "__alloyId3"
    });
    $.__views.win2.rightNavButton = $.__views.__alloyId3;
    $.__views.__alloyId4 = Ti.UI.createView({
        layout: "horizontal",
        color: "ffffff",
        backgroundColor: "f1e4b7",
        width: "100%",
        height: "44dp",
        id: "__alloyId4"
    });
    $.__views.win2.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createView({
        layout: "horizontal",
        color: "ffffff",
        left: 0,
        height: Ti.UI.SIZE,
        width: "49.5%",
        id: "__alloyId5"
    });
    $.__views.__alloyId4.add($.__views.__alloyId5);
    showMine ? $.__views.__alloyId5.addEventListener("click", showMine) : __defers["$.__views.__alloyId5!click!showMine"] = true;
    $.__views.__alloyId6 = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Bold",
            fontSize: "14dp"
        },
        color: "808080",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        width: "100%",
        text: "MINE",
        id: "__alloyId6"
    });
    $.__views.__alloyId5.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "12dp"
        },
        color: "468847",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        width: "100%",
        text: "2 updates",
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
        height: "100%",
        top: "0dp",
        id: "__alloyId8"
    });
    $.__views.__alloyId4.add($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createView({
        layout: "horizontal",
        color: "ffffff",
        left: 0,
        height: Ti.UI.SIZE,
        width: "49.5%",
        id: "__alloyId9"
    });
    $.__views.__alloyId4.add($.__views.__alloyId9);
    showLocations ? $.__views.__alloyId9.addEventListener("click", showLocations) : __defers["$.__views.__alloyId9!click!showLocations"] = true;
    $.__views.__alloyId10 = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Bold",
            fontSize: "14dp"
        },
        color: "808080",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        width: "100%",
        text: "ALL",
        id: "__alloyId10"
    });
    $.__views.__alloyId9.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "12dp"
        },
        color: "468847",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        width: "100%",
        text: "2 updates",
        id: "__alloyId11"
    });
    $.__views.__alloyId9.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createScrollView({
        layout: "vertical",
        color: "ffffff",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        id: "__alloyId12"
    });
    $.__views.win2.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        borderRadius: "4dp",
        borderWidth: "1dp",
        borderColor: "transparent",
        width: "95%",
        height: Ti.UI.SIZE,
        top: "10dp",
        backgroundColor: "FFFFFF",
        id: "__alloyId13"
    });
    $.__views.__alloyId12.add($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createView({
        layout: "horizontal",
        color: "ffffff",
        bottom: "10dp",
        left: "3%",
        width: "94%",
        height: Ti.UI.SIZE,
        top: "10dp",
        id: "__alloyId14"
    });
    $.__views.__alloyId13.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        width: "24%",
        height: Ti.UI.SIZE,
        id: "__alloyId15"
    });
    $.__views.__alloyId14.add($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createImageView({
        image: "/images/739-question.png",
        id: "__alloyId16"
    });
    $.__views.__alloyId15.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        color: "333333",
        text: "what",
        id: "__alloyId17"
    });
    $.__views.__alloyId15.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        borderRadius: "4dp",
        borderWidth: "1dp",
        borderColor: "dadada",
        width: "2dp",
        height: "50dp",
        top: "0dp",
        id: "__alloyId18"
    });
    $.__views.__alloyId14.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        width: "74.3333333%",
        height: Ti.UI.SIZE,
        id: "__alloyId19"
    });
    $.__views.__alloyId14.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        color: "333333",
        text: "adfs",
        id: "__alloyId20"
    });
    $.__views.__alloyId19.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        width: "24%",
        height: Ti.UI.SIZE,
        id: "__alloyId21"
    });
    $.__views.__alloyId14.add($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createImageView({
        image: "/images/728-clock.png",
        id: "__alloyId22"
    });
    $.__views.__alloyId21.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        color: "333333",
        text: "when",
        id: "__alloyId23"
    });
    $.__views.__alloyId21.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        borderRadius: "4dp",
        borderWidth: "1dp",
        borderColor: "dadada",
        width: "2dp",
        height: "50dp",
        top: "0dp",
        id: "__alloyId24"
    });
    $.__views.__alloyId14.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        width: "74.3333333%",
        height: Ti.UI.SIZE,
        id: "__alloyId25"
    });
    $.__views.__alloyId14.add($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        color: "333333",
        text: "adfs",
        id: "__alloyId26"
    });
    $.__views.__alloyId25.add($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        width: "24%",
        height: Ti.UI.SIZE,
        id: "__alloyId27"
    });
    $.__views.__alloyId14.add($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createImageView({
        image: "/images/789-map-location.png",
        id: "__alloyId28"
    });
    $.__views.__alloyId27.add($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        color: "333333",
        text: "where",
        id: "__alloyId29"
    });
    $.__views.__alloyId27.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        borderRadius: "4dp",
        borderWidth: "1dp",
        borderColor: "dadada",
        width: "2dp",
        height: "50dp",
        top: "0dp",
        id: "__alloyId30"
    });
    $.__views.__alloyId14.add($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        width: "74.3333333%",
        height: Ti.UI.SIZE,
        id: "__alloyId31"
    });
    $.__views.__alloyId14.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        color: "333333",
        text: "adfs",
        id: "__alloyId32"
    });
    $.__views.__alloyId31.add($.__views.__alloyId32);
    $.__views.__alloyId33 = Ti.UI.createView({
        layout: "horizontal",
        color: "ffffff",
        backgroundColor: "f1e4b7",
        width: "100%",
        height: "44dp",
        id: "__alloyId33"
    });
    $.__views.__alloyId13.add($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createView({
        layout: "horizontal",
        color: "ffffff",
        left: 0,
        height: Ti.UI.SIZE,
        width: "49.5%",
        id: "__alloyId34"
    });
    $.__views.__alloyId33.add($.__views.__alloyId34);
    getDirections ? $.__views.__alloyId34.addEventListener("click", getDirections) : __defers["$.__views.__alloyId34!click!getDirections"] = true;
    $.__views.__alloyId35 = Ti.UI.createImageView({
        image: "/images/852-map.png",
        width: "20dp",
        height: "20dp",
        left: "15dp",
        id: "__alloyId35"
    });
    $.__views.__alloyId34.add($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Bold",
            fontSize: "14dp"
        },
        color: "808080",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        width: "60%",
        left: "10dp",
        text: "DIRECTIONS",
        id: "__alloyId36"
    });
    $.__views.__alloyId34.add($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        borderRadius: "4dp",
        borderWidth: "1dp",
        borderColor: "dadada",
        width: "2dp",
        height: "100%",
        top: "0dp",
        id: "__alloyId37"
    });
    $.__views.__alloyId33.add($.__views.__alloyId37);
    $.__views.__alloyId38 = Ti.UI.createView({
        layout: "horizontal",
        color: "ffffff",
        left: 0,
        height: Ti.UI.SIZE,
        width: "49.5%",
        id: "__alloyId38"
    });
    $.__views.__alloyId33.add($.__views.__alloyId38);
    showLocations ? $.__views.__alloyId38.addEventListener("click", showLocations) : __defers["$.__views.__alloyId38!click!showLocations"] = true;
    $.__views.__alloyId39 = Ti.UI.createImageView({
        image: "/images/748-heart.png",
        width: "20dp",
        height: "20dp",
        left: "40dp",
        id: "__alloyId39"
    });
    $.__views.__alloyId38.add($.__views.__alloyId39);
    $.__views.__alloyId40 = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Bold",
            fontSize: "14dp"
        },
        color: "808080",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: "30%",
        left: "10dp",
        text: "SAVE",
        id: "__alloyId40"
    });
    $.__views.__alloyId38.add($.__views.__alloyId40);
    $.__views.win1 = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.win2,
        id: "win1"
    });
    $.__views.win1 && $.addTopLevelView($.__views.win1);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.win1.open();
    __defers["$.__views.__alloyId5!click!showMine"] && $.__views.__alloyId5.addEventListener("click", showMine);
    __defers["$.__views.__alloyId9!click!showLocations"] && $.__views.__alloyId9.addEventListener("click", showLocations);
    __defers["$.__views.__alloyId34!click!getDirections"] && $.__views.__alloyId34.addEventListener("click", getDirections);
    __defers["$.__views.__alloyId38!click!showLocations"] && $.__views.__alloyId38.addEventListener("click", showLocations);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;