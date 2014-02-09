var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Globals.checkForUpdates = function() {
    var events = Alloy.Collections.instance("events");
    events.fetch();
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
                    }
                } else {
                    newEvent = Alloy.createModel("events");
                    newEvent.set(event.toJSON());
                    newEvent.save();
                    events.add(newEvent);
                }
            }
            Alloy.Globals.updateEventTable();
        }
    });
};

Alloy.createController("index");