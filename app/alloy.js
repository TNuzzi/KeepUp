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
    
    var numEventsUpdated = 0;

    var eventsRest = Alloy.createCollection("eventsRest");
    eventsRest.fetch({
        success: function() {
            var event, localEvent, newEvent;
            for (var i = eventsRest.length - 1; i >= 0; i--) {
                event = eventsRest.at(i);
                localEvent = events.get(event.get("id"));
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

// test for iOS 4+
function isiOS4Plus(){
	if (Titanium.Platform.name == 'iPhone OS'){
		var version = Titanium.Platform.version.split(".");
		var major = parseInt(version[0]);
		// can only test this support on a 3.2+ device
		if (major >= 4){
			return true;
		}
	}
	return false;
}
 
if (isiOS4Plus()){
 
	var service;
	
	// Ti.App.iOS.addEventListener('notification',function(e){
	// You can use this event to pick up the info of the noticiation. 
	// Also to collect the 'userInfo' property data if any was set
	//		Ti.API.info("local notification received: "+JSON.stringify(e));
	//	});
	// fired when an app resumes from suspension
	Ti.App.addEventListener('resume',function(e){
		Ti.API.info("app is resuming from the background");
	});
	Ti.App.addEventListener('resumed',function(e){
		Ti.API.info("app has resumed from the background");
		// this will unregister the service if the user just opened the app
		// is: not via the notification 'OK' button..
		if(service!=null){
			service.stop();
			service.unregister();
		}
                Titanium.UI.iPhone.appBadge = null;
	});
	Ti.App.addEventListener('pause',function(e){
		Ti.API.info("app was paused from the foreground");
		
		service = Ti.App.iOS.registerBackgroundService({url:'/lib/bg.js'});
		Ti.API.info("registered background service = "+service);
		
	});
}