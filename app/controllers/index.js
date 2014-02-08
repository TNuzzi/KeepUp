function showMine() {
    alert("showMine");
}

function showLocations() {
    alert("showLocations");
}

function getDirections() {
    if (Titanium.Geolocation.locationServicesEnabled == false) {
        Titanium.UI.createAlertDialog({
            title : 'Step Up Womens Network',
            message : 'You need to be online to view this page.'
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

            var url = "maps://maps.google.com/maps?f=d&source=s_d&saddr=" + latitude + "," + longitude + "&daddr=1520+broadway+new+york&hl=en&geocode=&mra=ls&amp;sll=" + latitude + "," + longitude + "&sspn=0.318051,1.056747&ie=UTF8&z=7";
            Ti.Platform.openURL(url);
            Ti.API.info(url);

        });

    }
}
$.win1.open();
