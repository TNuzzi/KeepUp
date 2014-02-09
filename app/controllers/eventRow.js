var moment = require('alloy/moment');
var args = arguments[0] || {};
var model = args.model;
var title = model.get("title");
var location = model.get("location");

// No offset
var start_date = moment(model.get("start_date"));
var end_date = moment(model.get("end_date"));
var category = model.get("category");

var favorites = Alloy.Collections.instance("favorites");
favorites.fetch();

$.title.setText(title);
$.date.setText(start_date.format("MMMM Do YYYY"));
$.time.setText(start_date.format("h:mm a") + ' - ' + end_date.format("h:mm a"));
$.location.setText(location);

if (category === 'Teen Programs') {
    $.resetClass($.headerView, "w-fill h-size eventRowHeaderColor-teen");
    $.header.setText('Teen Event');
} else if (category === 'Networking') {
    $.resetClass($.headerView, "w-fill h-size eventRowHeaderColor-social-network");
    $.header.setText('Social Networking');
} else if (category === 'Professional Development') {
    $.resetClass($.headerView, "w-fill h-size eventRowHeaderColor-processional-mentorship");
    $.header.setText('Processional Mentorship');
}

function saveEvent(e) {
    var favorite = favorites.get(model.id);

    if (favorite !== undefined) {
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

if (favorites.get(model.id) === undefined) {
    $.resetClass($.save, "glyphish-heart-1 h-20 w-20 l-40 touch-disabled");
} else {
    $.resetClass($.save, "glyphish-heart-selected h-20 w-20 l-40 touch-disabled");
}

function getDirections() {
    if (Titanium.Geolocation.locationServicesEnabled === false) {
        Titanium.UI.createAlertDialog({
            title: 'Step Up Womens Network',
            message: 'You need to be online to view this page.'
        }).show();
    } else {
        Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
        Titanium.Geolocation.distanceFilter = 10;
        Titanium.Geolocation.getCurrentPosition(function(e) {

            if (e.error) {
                return;
            }
            var longitude = e.coords.longitude;
            var latitude = e.coords.latitude;

            var url = "maps://maps.google.com/maps?f=d&source=s_d&saddr=" + latitude + "," + longitude + "&daddr=" + encodeURIComponent(location) + "&hl=en&geocode=&mra=ls&amp;sll=" + latitude + "," + longitude + "&sspn=0.318051,1.056747&ie=UTF8&z=7";
            Ti.Platform.openURL(url);
            Ti.API.info(url);

        });

    }
}