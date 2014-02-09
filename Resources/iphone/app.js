function isiOS4Plus() {
    var version = Titanium.Platform.version.split(".");
    var major = parseInt(version[0]);
    if (major >= 4) return true;
    return false;
}

var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Globals.checkForUpdates = function() {
    var events = Alloy.Collections.instance("events");
    events.fetch();
    var numEventsUpdated = 0;
    var eventsRest = Alloy.createCollection("eventsRest");
    eventsRest.fetch({
        success: function() {
            var event, localEvent, newEvent;
            for (var i = eventsRest.length - 1; i >= 0; i--) {
                event = eventsRest.at(i);
                localEvent = events.get(event.get("id"));
                if (void 0 !== localEvent) {
                    if (localEvent.get("checksum") !== event.get("checksum")) {
                        console.log("Update detected");
                        localEvent.destroy();
                        newEvent = Alloy.createModel("events");
                        newEvent.set(event.toJSON());
                        newEvent.set({
                            hasBeenUpdated: true
                        });
                        newEvent.save();
                        events.add(newEvent);
                        numEventsUpdated++;
                    }
                } else {
                    newEvent = Alloy.createModel("events");
                    newEvent.set(event.toJSON());
                    newEvent.save();
                    events.add(newEvent);
                }
            }
            Alloy.Globals.updateEventTable();
            return numEventsUpdated;
        }
    });
};

if (isiOS4Plus()) {
    var service;
    Ti.App.addEventListener("resume", function() {
        Ti.API.info("app is resuming from the background");
    });
    Ti.App.addEventListener("resumed", function() {
        Ti.API.info("app has resumed from the background");
        if (null != service) {
            service.stop();
            service.unregister();
        }
        Titanium.UI.iPhone.appBadge = null;
    });
    Ti.App.addEventListener("pause", function() {
        Ti.API.info("app was paused from the foreground");
        service = Ti.App.iOS.registerBackgroundService({
            url: "/lib/bg.js"
        });
        Ti.API.info("registered background service = " + service);
    });
}

Alloy.createController("index");