Ti.API.info("hello from a background service!");

var alertCount = 0;
var notification = null;
var initialUpdateCheck = true;
var localEvent, localEvents;

function notify(resp) {
	// This creates the notification alert on a 'paused' app
	notification = Ti.App.iOS.scheduleLocalNotification({
		alertBody : "Step Up Event is Updated",
		alertAction : "View",
		userInfo : {
			"hello" : "world"
		},
		badge : alertCount,
		date : new Date(new Date().getTime() + 10)
	});
}

function checkForUpdates() {

	// silently ignore this if there's no network connection
	if (Titanium.Network.online == false) {
		return;
	}

	var t = new Date().getTime();
	Ti.API.info('checking for updates in bg.. ' + t);

	var xhr = Titanium.Network.createHTTPClient();
	xhr.timeout = 1000000;
	xhr.onerror = function(e) {
		Ti.API.info('IN ERROR ' + e.error);
	};
	xhr.onload = function() {
		var event, localEvent, newEvent;
		
		var response = this.responseText;
		// Ti.API.info("the reply was: " + response);

		if (initialUpdateCheck) {
			Ti.API.info("initial check for updates in bg");
			initialUpdateCheck = false;
			localEvents = response;
			Ti.API.info("localEvents is: " + localEvents);
		} else {
			for (var i = response.length - 1; i >= 0; i--) {
				event = response[i];
				localEvent = localEvents[i];
				if (localEvent !== undefined) {
					if (localEvent.checksum !== event.checksum) {
						Ti.API.info("update detected");
						
						// increase badge count
						alertCount++;
						
						// open the notification
						notify(response);
					}
				} else {
					// don't do anything if there aren't updates
					Ti.API.info("no updates detected");
				}
			}

		}


	};

	xhr.open('GET', 'http://stepupapi.herokuapp.com/api/events');
	xhr.send();


}

Ti.App.iOS.addEventListener('notification', function() {
	Ti.API.info('background event received = ' + notification);
	Ti.App.currentService.stop();
	Ti.App.currentService.unregister();
});

// Kick off a timer to trigger a function called 'checkForUpdates' every 30 minutes (= 1800000 ms)
var timer = setInterval(checkForUpdates, 1800000);
