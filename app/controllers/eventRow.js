var moment = require('alloy/moment');
var args = arguments[0] || {};
console.log(JSON.stringify(args));
var title = args.title;
var location = args.location;

// No offset
var date = moment(args.date);
var category = args.category;


$.title.setText(title);
$.date.setText(moment().format("MMMM Do YYYY"));
$.time.setText(moment().format("h:mm a"));
$.location.setText(location);

if(category === 'Teen Programs')
{
    $.resetClass($.headerView, "w-fill h-size eventRowHeaderColor-teen");
    $.header.setText('Teen Event');
}
else if(category === 'Networking') {
    $.resetClass($.headerView, "w-fill h-size eventRowHeaderColor-social-network");
    $.header.setText('Social Networking');
}
else if(category === 'Professional Development') {
    $.resetClass($.headerView, "w-fill h-size eventRowHeaderColor-processional-mentorship");
    $.header.setText('Processional Mentorship');
}

function saveEvent(e) {
    // console.log(JSON.stringify(e.source.children[0]));
    $.resetClass(e.source.children[0], "glyphish-heart-selected h-20 w-20 l-40 touch-disabled");
    // Update favorites
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