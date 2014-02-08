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
        layout: "vertical",
        color: "ffffff",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        backgroundColor: "#e39b23",
        id: "__alloyId14"
    });
    $.__views.__alloyId13.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-UltraLight",
            fontSize: "18dp"
        },
        color: "FFFFFF",
        width: "100%",
        height: "20dp",
        left: "5dp",
        text: "Teen Event",
        id: "__alloyId15"
    });
    $.__views.__alloyId14.add($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createView({
        layout: "horizontal",
        color: "ffffff",
        bottom: "10dp",
        left: "3%",
        width: "94%",
        height: Ti.UI.SIZE,
        top: "10dp",
        id: "__alloyId16"
    });
    $.__views.__alloyId13.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        width: "24%",
        height: Ti.UI.SIZE,
        id: "__alloyId17"
    });
    $.__views.__alloyId16.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createImageView({
        image: "/images/739-question.png",
        id: "__alloyId18"
    });
    $.__views.__alloyId17.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        color: "333333",
        text: "what",
        id: "__alloyId19"
    });
    $.__views.__alloyId17.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        borderRadius: "4dp",
        borderWidth: "1dp",
        borderColor: "dadada",
        width: "2dp",
        height: "50dp",
        top: "0dp",
        id: "__alloyId20"
    });
    $.__views.__alloyId16.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        width: "74.3333333%",
        height: Ti.UI.SIZE,
        id: "__alloyId21"
    });
    $.__views.__alloyId16.add($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        color: "428bca",
        left: "10dp",
        text: "Mentor for a day at Step Up's After School Programs at West Adams High School",
        id: "__alloyId22"
    });
    $.__views.__alloyId21.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        width: "24%",
        height: Ti.UI.SIZE,
        id: "__alloyId23"
    });
    $.__views.__alloyId16.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createImageView({
        image: "/images/728-clock.png",
        id: "__alloyId24"
    });
    $.__views.__alloyId23.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        color: "333333",
        text: "when",
        id: "__alloyId25"
    });
    $.__views.__alloyId23.add($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        borderRadius: "4dp",
        borderWidth: "1dp",
        borderColor: "dadada",
        width: "2dp",
        height: "50dp",
        top: "0dp",
        id: "__alloyId26"
    });
    $.__views.__alloyId16.add($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        width: "74.3333333%",
        height: Ti.UI.SIZE,
        id: "__alloyId27"
    });
    $.__views.__alloyId16.add($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createView({
        layout: "horizontal",
        color: "ffffff",
        width: "99.666666%",
        height: Ti.UI.SIZE,
        id: "__alloyId28"
    });
    $.__views.__alloyId27.add($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue",
            fontSize: "14dp"
        },
        color: "333333",
        width: "25%",
        left: "10dp",
        text: "Date",
        id: "__alloyId29"
    });
    $.__views.__alloyId28.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        color: "333333",
        width: "70%",
        text: "January 13, 2014",
        id: "__alloyId30"
    });
    $.__views.__alloyId28.add($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue",
            fontSize: "14dp"
        },
        color: "333333",
        width: "25%",
        left: "10dp",
        text: "Time",
        id: "__alloyId31"
    });
    $.__views.__alloyId28.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        color: "333333",
        width: "70%",
        text: "3:45pm - 5:30pm",
        id: "__alloyId32"
    });
    $.__views.__alloyId28.add($.__views.__alloyId32);
    $.__views.__alloyId33 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        width: "24%",
        height: Ti.UI.SIZE,
        id: "__alloyId33"
    });
    $.__views.__alloyId16.add($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createImageView({
        image: "/images/789-map-location.png",
        id: "__alloyId34"
    });
    $.__views.__alloyId33.add($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        color: "333333",
        text: "where",
        id: "__alloyId35"
    });
    $.__views.__alloyId33.add($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        borderRadius: "4dp",
        borderWidth: "1dp",
        borderColor: "dadada",
        width: "2dp",
        height: "50dp",
        top: "0dp",
        id: "__alloyId36"
    });
    $.__views.__alloyId16.add($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        width: "74.3333333%",
        height: Ti.UI.SIZE,
        id: "__alloyId37"
    });
    $.__views.__alloyId16.add($.__views.__alloyId37);
    $.__views.__alloyId38 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        width: "100%",
        height: Ti.UI.SIZE,
        left: "10dp",
        id: "__alloyId38"
    });
    $.__views.__alloyId37.add($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        color: "468847",
        left: 0,
        text: "795 Folsom Ave, Suite 600\nSan Francisco, CA 94107",
        id: "__alloyId39"
    });
    $.__views.__alloyId38.add($.__views.__alloyId39);
    $.__views.__alloyId40 = Ti.UI.createView({
        layout: "horizontal",
        color: "ffffff",
        backgroundColor: "f1e4b7",
        width: "100%",
        height: "44dp",
        id: "__alloyId40"
    });
    $.__views.__alloyId13.add($.__views.__alloyId40);
    $.__views.__alloyId41 = Ti.UI.createView({
        layout: "horizontal",
        color: "ffffff",
        left: 0,
        height: Ti.UI.SIZE,
        width: "49.5%",
        id: "__alloyId41"
    });
    $.__views.__alloyId40.add($.__views.__alloyId41);
    getDirections ? $.__views.__alloyId41.addEventListener("click", getDirections) : __defers["$.__views.__alloyId41!click!getDirections"] = true;
    $.__views.__alloyId42 = Ti.UI.createImageView({
        image: "/images/852-map.png",
        width: "20dp",
        height: "20dp",
        left: "15dp",
        id: "__alloyId42"
    });
    $.__views.__alloyId41.add($.__views.__alloyId42);
    $.__views.__alloyId43 = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Bold",
            fontSize: "14dp"
        },
        color: "808080",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        width: "60%",
        left: "10dp",
        text: "DIRECTIONS",
        id: "__alloyId43"
    });
    $.__views.__alloyId41.add($.__views.__alloyId43);
    $.__views.__alloyId44 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        borderRadius: "4dp",
        borderWidth: "1dp",
        borderColor: "dadada",
        width: "2dp",
        height: "100%",
        top: "0dp",
        id: "__alloyId44"
    });
    $.__views.__alloyId40.add($.__views.__alloyId44);
    $.__views.__alloyId45 = Ti.UI.createView({
        layout: "horizontal",
        color: "ffffff",
        left: 0,
        height: Ti.UI.SIZE,
        width: "49.5%",
        id: "__alloyId45"
    });
    $.__views.__alloyId40.add($.__views.__alloyId45);
    showLocations ? $.__views.__alloyId45.addEventListener("click", showLocations) : __defers["$.__views.__alloyId45!click!showLocations"] = true;
    $.__views.__alloyId46 = Ti.UI.createImageView({
        image: "/images/748-heart.png",
        width: "20dp",
        height: "20dp",
        left: "40dp",
        id: "__alloyId46"
    });
    $.__views.__alloyId45.add($.__views.__alloyId46);
    $.__views.__alloyId47 = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Bold",
            fontSize: "14dp"
        },
        color: "808080",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: "30%",
        left: "10dp",
        text: "SAVE",
        id: "__alloyId47"
    });
    $.__views.__alloyId45.add($.__views.__alloyId47);
    $.__views.__alloyId48 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        borderRadius: "4dp",
        borderWidth: "1dp",
        borderColor: "transparent",
        width: "95%",
        height: Ti.UI.SIZE,
        top: "10dp",
        backgroundColor: "FFFFFF",
        id: "__alloyId48"
    });
    $.__views.__alloyId12.add($.__views.__alloyId48);
    $.__views.__alloyId49 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        backgroundColor: "#b74700",
        id: "__alloyId49"
    });
    $.__views.__alloyId48.add($.__views.__alloyId49);
    $.__views.__alloyId50 = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-UltraLight",
            fontSize: "18dp"
        },
        color: "FFFFFF",
        width: "100%",
        height: "20dp",
        left: "5dp",
        text: "Social Networking",
        id: "__alloyId50"
    });
    $.__views.__alloyId49.add($.__views.__alloyId50);
    $.__views.__alloyId51 = Ti.UI.createView({
        layout: "horizontal",
        color: "ffffff",
        bottom: "10dp",
        left: "3%",
        width: "94%",
        height: Ti.UI.SIZE,
        top: "10dp",
        id: "__alloyId51"
    });
    $.__views.__alloyId48.add($.__views.__alloyId51);
    $.__views.__alloyId52 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        width: "24%",
        height: Ti.UI.SIZE,
        id: "__alloyId52"
    });
    $.__views.__alloyId51.add($.__views.__alloyId52);
    $.__views.__alloyId53 = Ti.UI.createImageView({
        image: "/images/739-question.png",
        id: "__alloyId53"
    });
    $.__views.__alloyId52.add($.__views.__alloyId53);
    $.__views.__alloyId54 = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        color: "333333",
        text: "what",
        id: "__alloyId54"
    });
    $.__views.__alloyId52.add($.__views.__alloyId54);
    $.__views.__alloyId55 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        borderRadius: "4dp",
        borderWidth: "1dp",
        borderColor: "dadada",
        width: "2dp",
        height: "50dp",
        top: "0dp",
        id: "__alloyId55"
    });
    $.__views.__alloyId51.add($.__views.__alloyId55);
    $.__views.__alloyId56 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        width: "74.3333333%",
        height: Ti.UI.SIZE,
        id: "__alloyId56"
    });
    $.__views.__alloyId51.add($.__views.__alloyId56);
    $.__views.__alloyId57 = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        color: "428bca",
        left: "10dp",
        text: "Mentor for a day at Step Up's After School Programs at West Adams High School",
        id: "__alloyId57"
    });
    $.__views.__alloyId56.add($.__views.__alloyId57);
    $.__views.__alloyId58 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        width: "24%",
        height: Ti.UI.SIZE,
        id: "__alloyId58"
    });
    $.__views.__alloyId51.add($.__views.__alloyId58);
    $.__views.__alloyId59 = Ti.UI.createImageView({
        image: "/images/728-clock.png",
        id: "__alloyId59"
    });
    $.__views.__alloyId58.add($.__views.__alloyId59);
    $.__views.__alloyId60 = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        color: "333333",
        text: "when",
        id: "__alloyId60"
    });
    $.__views.__alloyId58.add($.__views.__alloyId60);
    $.__views.__alloyId61 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        borderRadius: "4dp",
        borderWidth: "1dp",
        borderColor: "dadada",
        width: "2dp",
        height: "50dp",
        top: "0dp",
        id: "__alloyId61"
    });
    $.__views.__alloyId51.add($.__views.__alloyId61);
    $.__views.__alloyId62 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        width: "74.3333333%",
        height: Ti.UI.SIZE,
        id: "__alloyId62"
    });
    $.__views.__alloyId51.add($.__views.__alloyId62);
    $.__views.__alloyId63 = Ti.UI.createView({
        layout: "horizontal",
        color: "ffffff",
        width: "99.666666%",
        height: Ti.UI.SIZE,
        id: "__alloyId63"
    });
    $.__views.__alloyId62.add($.__views.__alloyId63);
    $.__views.__alloyId64 = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue",
            fontSize: "14dp"
        },
        color: "333333",
        width: "25%",
        left: "10dp",
        text: "Date",
        id: "__alloyId64"
    });
    $.__views.__alloyId63.add($.__views.__alloyId64);
    $.__views.__alloyId65 = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        color: "333333",
        width: "70%",
        text: "January 13, 2014",
        id: "__alloyId65"
    });
    $.__views.__alloyId63.add($.__views.__alloyId65);
    $.__views.__alloyId66 = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue",
            fontSize: "14dp"
        },
        color: "333333",
        width: "25%",
        left: "10dp",
        text: "Time",
        id: "__alloyId66"
    });
    $.__views.__alloyId63.add($.__views.__alloyId66);
    $.__views.__alloyId67 = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        color: "333333",
        width: "70%",
        text: "3:45pm - 5:30pm",
        id: "__alloyId67"
    });
    $.__views.__alloyId63.add($.__views.__alloyId67);
    $.__views.__alloyId68 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        width: "24%",
        height: Ti.UI.SIZE,
        id: "__alloyId68"
    });
    $.__views.__alloyId51.add($.__views.__alloyId68);
    $.__views.__alloyId69 = Ti.UI.createImageView({
        image: "/images/789-map-location.png",
        id: "__alloyId69"
    });
    $.__views.__alloyId68.add($.__views.__alloyId69);
    $.__views.__alloyId70 = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        color: "333333",
        text: "where",
        id: "__alloyId70"
    });
    $.__views.__alloyId68.add($.__views.__alloyId70);
    $.__views.__alloyId71 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        borderRadius: "4dp",
        borderWidth: "1dp",
        borderColor: "dadada",
        width: "2dp",
        height: "50dp",
        top: "0dp",
        id: "__alloyId71"
    });
    $.__views.__alloyId51.add($.__views.__alloyId71);
    $.__views.__alloyId72 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        width: "74.3333333%",
        height: Ti.UI.SIZE,
        id: "__alloyId72"
    });
    $.__views.__alloyId51.add($.__views.__alloyId72);
    $.__views.__alloyId73 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        width: "100%",
        height: Ti.UI.SIZE,
        left: "10dp",
        id: "__alloyId73"
    });
    $.__views.__alloyId72.add($.__views.__alloyId73);
    $.__views.__alloyId74 = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        color: "468847",
        left: 0,
        text: "795 Folsom Ave, Suite 600\nSan Francisco, CA 94107",
        id: "__alloyId74"
    });
    $.__views.__alloyId73.add($.__views.__alloyId74);
    $.__views.__alloyId75 = Ti.UI.createView({
        layout: "horizontal",
        color: "ffffff",
        backgroundColor: "f1e4b7",
        width: "100%",
        height: "44dp",
        id: "__alloyId75"
    });
    $.__views.__alloyId48.add($.__views.__alloyId75);
    $.__views.__alloyId76 = Ti.UI.createView({
        layout: "horizontal",
        color: "ffffff",
        left: 0,
        height: Ti.UI.SIZE,
        width: "49.5%",
        id: "__alloyId76"
    });
    $.__views.__alloyId75.add($.__views.__alloyId76);
    getDirections ? $.__views.__alloyId76.addEventListener("click", getDirections) : __defers["$.__views.__alloyId76!click!getDirections"] = true;
    $.__views.__alloyId77 = Ti.UI.createImageView({
        image: "/images/852-map.png",
        width: "20dp",
        height: "20dp",
        left: "15dp",
        id: "__alloyId77"
    });
    $.__views.__alloyId76.add($.__views.__alloyId77);
    $.__views.__alloyId78 = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Bold",
            fontSize: "14dp"
        },
        color: "808080",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        width: "60%",
        left: "10dp",
        text: "DIRECTIONS",
        id: "__alloyId78"
    });
    $.__views.__alloyId76.add($.__views.__alloyId78);
    $.__views.__alloyId79 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        borderRadius: "4dp",
        borderWidth: "1dp",
        borderColor: "dadada",
        width: "2dp",
        height: "100%",
        top: "0dp",
        id: "__alloyId79"
    });
    $.__views.__alloyId75.add($.__views.__alloyId79);
    $.__views.__alloyId80 = Ti.UI.createView({
        layout: "horizontal",
        color: "ffffff",
        left: 0,
        height: Ti.UI.SIZE,
        width: "49.5%",
        id: "__alloyId80"
    });
    $.__views.__alloyId75.add($.__views.__alloyId80);
    showLocations ? $.__views.__alloyId80.addEventListener("click", showLocations) : __defers["$.__views.__alloyId80!click!showLocations"] = true;
    $.__views.__alloyId81 = Ti.UI.createImageView({
        image: "/images/748-heart.png",
        width: "20dp",
        height: "20dp",
        left: "40dp",
        id: "__alloyId81"
    });
    $.__views.__alloyId80.add($.__views.__alloyId81);
    $.__views.__alloyId82 = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Bold",
            fontSize: "14dp"
        },
        color: "808080",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: "30%",
        left: "10dp",
        text: "SAVE",
        id: "__alloyId82"
    });
    $.__views.__alloyId80.add($.__views.__alloyId82);
    $.__views.__alloyId83 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        borderRadius: "4dp",
        borderWidth: "1dp",
        borderColor: "transparent",
        width: "95%",
        height: Ti.UI.SIZE,
        top: "10dp",
        backgroundColor: "FFFFFF",
        id: "__alloyId83"
    });
    $.__views.__alloyId12.add($.__views.__alloyId83);
    $.__views.__alloyId84 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        backgroundColor: "#798191",
        id: "__alloyId84"
    });
    $.__views.__alloyId83.add($.__views.__alloyId84);
    $.__views.__alloyId85 = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-UltraLight",
            fontSize: "18dp"
        },
        color: "FFFFFF",
        width: "100%",
        height: "20dp",
        left: "5dp",
        text: "Processional Mentorship",
        id: "__alloyId85"
    });
    $.__views.__alloyId84.add($.__views.__alloyId85);
    $.__views.__alloyId86 = Ti.UI.createView({
        layout: "horizontal",
        color: "ffffff",
        bottom: "10dp",
        left: "3%",
        width: "94%",
        height: Ti.UI.SIZE,
        top: "10dp",
        id: "__alloyId86"
    });
    $.__views.__alloyId83.add($.__views.__alloyId86);
    $.__views.__alloyId87 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        width: "24%",
        height: Ti.UI.SIZE,
        id: "__alloyId87"
    });
    $.__views.__alloyId86.add($.__views.__alloyId87);
    $.__views.__alloyId88 = Ti.UI.createImageView({
        image: "/images/739-question.png",
        id: "__alloyId88"
    });
    $.__views.__alloyId87.add($.__views.__alloyId88);
    $.__views.__alloyId89 = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        color: "333333",
        text: "what",
        id: "__alloyId89"
    });
    $.__views.__alloyId87.add($.__views.__alloyId89);
    $.__views.__alloyId90 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        borderRadius: "4dp",
        borderWidth: "1dp",
        borderColor: "dadada",
        width: "2dp",
        height: "50dp",
        top: "0dp",
        id: "__alloyId90"
    });
    $.__views.__alloyId86.add($.__views.__alloyId90);
    $.__views.__alloyId91 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        width: "74.3333333%",
        height: Ti.UI.SIZE,
        id: "__alloyId91"
    });
    $.__views.__alloyId86.add($.__views.__alloyId91);
    $.__views.__alloyId92 = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        color: "428bca",
        left: "10dp",
        text: "Mentor for a day at Step Up's After School Programs at West Adams High School",
        id: "__alloyId92"
    });
    $.__views.__alloyId91.add($.__views.__alloyId92);
    $.__views.__alloyId93 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        width: "24%",
        height: Ti.UI.SIZE,
        id: "__alloyId93"
    });
    $.__views.__alloyId86.add($.__views.__alloyId93);
    $.__views.__alloyId94 = Ti.UI.createImageView({
        image: "/images/728-clock.png",
        id: "__alloyId94"
    });
    $.__views.__alloyId93.add($.__views.__alloyId94);
    $.__views.__alloyId95 = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        color: "333333",
        text: "when",
        id: "__alloyId95"
    });
    $.__views.__alloyId93.add($.__views.__alloyId95);
    $.__views.__alloyId96 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        borderRadius: "4dp",
        borderWidth: "1dp",
        borderColor: "dadada",
        width: "2dp",
        height: "50dp",
        top: "0dp",
        id: "__alloyId96"
    });
    $.__views.__alloyId86.add($.__views.__alloyId96);
    $.__views.__alloyId97 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        width: "74.3333333%",
        height: Ti.UI.SIZE,
        id: "__alloyId97"
    });
    $.__views.__alloyId86.add($.__views.__alloyId97);
    $.__views.__alloyId98 = Ti.UI.createView({
        layout: "horizontal",
        color: "ffffff",
        width: "99.666666%",
        height: Ti.UI.SIZE,
        id: "__alloyId98"
    });
    $.__views.__alloyId97.add($.__views.__alloyId98);
    $.__views.__alloyId99 = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue",
            fontSize: "14dp"
        },
        color: "333333",
        width: "25%",
        left: "10dp",
        text: "Date",
        id: "__alloyId99"
    });
    $.__views.__alloyId98.add($.__views.__alloyId99);
    $.__views.__alloyId100 = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        color: "333333",
        width: "70%",
        text: "January 13, 2014",
        id: "__alloyId100"
    });
    $.__views.__alloyId98.add($.__views.__alloyId100);
    $.__views.__alloyId101 = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue",
            fontSize: "14dp"
        },
        color: "333333",
        width: "25%",
        left: "10dp",
        text: "Time",
        id: "__alloyId101"
    });
    $.__views.__alloyId98.add($.__views.__alloyId101);
    $.__views.__alloyId102 = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        color: "333333",
        width: "70%",
        text: "3:45pm - 5:30pm",
        id: "__alloyId102"
    });
    $.__views.__alloyId98.add($.__views.__alloyId102);
    $.__views.__alloyId103 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        width: "24%",
        height: Ti.UI.SIZE,
        id: "__alloyId103"
    });
    $.__views.__alloyId86.add($.__views.__alloyId103);
    $.__views.__alloyId104 = Ti.UI.createImageView({
        image: "/images/789-map-location.png",
        id: "__alloyId104"
    });
    $.__views.__alloyId103.add($.__views.__alloyId104);
    $.__views.__alloyId105 = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        color: "333333",
        text: "where",
        id: "__alloyId105"
    });
    $.__views.__alloyId103.add($.__views.__alloyId105);
    $.__views.__alloyId106 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        borderRadius: "4dp",
        borderWidth: "1dp",
        borderColor: "dadada",
        width: "2dp",
        height: "50dp",
        top: "0dp",
        id: "__alloyId106"
    });
    $.__views.__alloyId86.add($.__views.__alloyId106);
    $.__views.__alloyId107 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        width: "74.3333333%",
        height: Ti.UI.SIZE,
        id: "__alloyId107"
    });
    $.__views.__alloyId86.add($.__views.__alloyId107);
    $.__views.__alloyId108 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        width: "100%",
        height: Ti.UI.SIZE,
        left: "10dp",
        id: "__alloyId108"
    });
    $.__views.__alloyId107.add($.__views.__alloyId108);
    $.__views.__alloyId109 = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        color: "468847",
        left: 0,
        text: "795 Folsom Ave, Suite 600\nSan Francisco, CA 94107",
        id: "__alloyId109"
    });
    $.__views.__alloyId108.add($.__views.__alloyId109);
    $.__views.__alloyId110 = Ti.UI.createView({
        layout: "horizontal",
        color: "ffffff",
        backgroundColor: "f1e4b7",
        width: "100%",
        height: "44dp",
        id: "__alloyId110"
    });
    $.__views.__alloyId83.add($.__views.__alloyId110);
    $.__views.__alloyId111 = Ti.UI.createView({
        layout: "horizontal",
        color: "ffffff",
        left: 0,
        height: Ti.UI.SIZE,
        width: "49.5%",
        id: "__alloyId111"
    });
    $.__views.__alloyId110.add($.__views.__alloyId111);
    getDirections ? $.__views.__alloyId111.addEventListener("click", getDirections) : __defers["$.__views.__alloyId111!click!getDirections"] = true;
    $.__views.__alloyId112 = Ti.UI.createImageView({
        image: "/images/852-map.png",
        width: "20dp",
        height: "20dp",
        left: "15dp",
        id: "__alloyId112"
    });
    $.__views.__alloyId111.add($.__views.__alloyId112);
    $.__views.__alloyId113 = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Bold",
            fontSize: "14dp"
        },
        color: "808080",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        width: "60%",
        left: "10dp",
        text: "DIRECTIONS",
        id: "__alloyId113"
    });
    $.__views.__alloyId111.add($.__views.__alloyId113);
    $.__views.__alloyId114 = Ti.UI.createView({
        layout: "vertical",
        color: "ffffff",
        borderRadius: "4dp",
        borderWidth: "1dp",
        borderColor: "dadada",
        width: "2dp",
        height: "100%",
        top: "0dp",
        id: "__alloyId114"
    });
    $.__views.__alloyId110.add($.__views.__alloyId114);
    $.__views.__alloyId115 = Ti.UI.createView({
        layout: "horizontal",
        color: "ffffff",
        left: 0,
        height: Ti.UI.SIZE,
        width: "49.5%",
        id: "__alloyId115"
    });
    $.__views.__alloyId110.add($.__views.__alloyId115);
    showLocations ? $.__views.__alloyId115.addEventListener("click", showLocations) : __defers["$.__views.__alloyId115!click!showLocations"] = true;
    $.__views.__alloyId116 = Ti.UI.createImageView({
        image: "/images/748-heart.png",
        width: "20dp",
        height: "20dp",
        left: "40dp",
        id: "__alloyId116"
    });
    $.__views.__alloyId115.add($.__views.__alloyId116);
    $.__views.__alloyId117 = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Bold",
            fontSize: "14dp"
        },
        color: "808080",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: "30%",
        left: "10dp",
        text: "SAVE",
        id: "__alloyId117"
    });
    $.__views.__alloyId115.add($.__views.__alloyId117);
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
    __defers["$.__views.__alloyId41!click!getDirections"] && $.__views.__alloyId41.addEventListener("click", getDirections);
    __defers["$.__views.__alloyId45!click!showLocations"] && $.__views.__alloyId45.addEventListener("click", showLocations);
    __defers["$.__views.__alloyId76!click!getDirections"] && $.__views.__alloyId76.addEventListener("click", getDirections);
    __defers["$.__views.__alloyId80!click!showLocations"] && $.__views.__alloyId80.addEventListener("click", showLocations);
    __defers["$.__views.__alloyId111!click!getDirections"] && $.__views.__alloyId111.addEventListener("click", getDirections);
    __defers["$.__views.__alloyId115!click!showLocations"] && $.__views.__alloyId115.addEventListener("click", showLocations);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;