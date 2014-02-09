function notify() {
    notification = Ti.App.iOS.scheduleLocalNotification({
        alertBody: "Step Up Event is Updated",
        alertAction: "View",
        userInfo: {
            hello: "world"
        },
        badge: alertCount,
        date: new Date(new Date().getTime() + 10)
    });
}

function checkForUpdates() {
    if (false == Titanium.Network.online) return;
    var t = new Date().getTime();
    Ti.API.info("checking for updates in bg.. " + t);
    var xhr = Titanium.Network.createHTTPClient();
    xhr.timeout = 1e6;
    xhr.onerror = function(e) {
        Ti.API.info("IN ERROR " + e.error);
    };
    xhr.onload = function() {
        var event, localEvent;
        var response = this.responseText;
        if (initialUpdateCheck) {
            Ti.API.info("initial check for updates in bg");
            initialUpdateCheck = false;
            localEvents = response;
            Ti.API.info("localEvents is: " + localEvents);
        } else for (var i = response.length - 1; i >= 0; i--) {
            event = response[i];
            localEvent = localEvents[i];
            if (void 0 !== localEvent) {
                if (localEvent.checksum !== event.checksum) {
                    Ti.API.info("update detected");
                    alertCount++;
                    notify(response);
                }
            } else Ti.API.info("no updates detected");
        }
    };
    xhr.open("GET", "http://stepupapi.herokuapp.com/api/events");
    xhr.send();
}

Ti.API.info("hello from a background service!");

var alertCount = 0;

var notification = null;

var initialUpdateCheck = true;

var localEvent, localEvents;

Ti.App.iOS.addEventListener("notification", function() {
    Ti.API.info("background event received = " + notification);
    Ti.App.currentService.stop();
    Ti.App.currentService.unregister();
});

var timer = setInterval(checkForUpdates, 18e5);