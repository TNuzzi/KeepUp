// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};

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
                // console.log(JSON.stringify(localEvent.toJSON()));
                if (localEvent !== undefined) {
                    if (localEvent.get("checksum") !== event.get("checksum")) {
                        console.log("Update detected");
                        localEvent.destroy();
                        newEvent = Alloy.createModel("events");
                        newEvent.set(event.toJSON());
                        newEvent.set({
                            "hasBeenUpdated": true
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
        }
    });
};