Alloy.Globals.checkForUpdates();

var events = Alloy.Collections.instance("events");
events.fetch();

var favorites = Alloy.Collections.instance("favorites");
favorites.fetch();

Alloy.Globals.updateEventTable = function() {
    events.fetch();

    var data = [];
    for (var i = 0; i < events.length; i++) {
        var event = events.at(i);
        data.push(Alloy.createController("eventRow", {
            model: event
        }).getView());
    }
    $.eventTable.setData(data);
    $.eventTable.scrollToTop();
};

Alloy.Globals.updateEventTable();

function syncWithServer() {
    console.log("refresh");
    Alloy.Globals.updateEventTable();
}

function showMine() {
    data = [];
    favorites.fetch();

    for (var i = 0; i < favorites.length; i++) {
        var favorite = favorites.at(i);
        data.push(Alloy.createController("eventRow", {
            model: favorite
        }).getView());
    }

    if (data.length !== 0)
        $.eventTable.setData(data);
    else
        alert("You have no favorites saved");

    $.eventTable.scrollToTop();
}

function showLocations() {
    picker.getView().showPicker();
}

var picker = Alloy.createWidget("wriststrap.picker", "widget", {
    data: [
        [, {
            title: 'New York',
            id: 'New York'
        }, {
            title: 'Chicago',
            id: 'Chicago'
        }, {
            title: 'Los Angeles',
            id: 'Los Angeles'
        }, {
            title: 'Most Recent',
            id: 'All'
        }]
    ],
    onDone: function(selectedValues) {
        if (selectedValues[0] === "All") {
            $.location.setText('MOST RECENT');
        } else if (selectedValues[0] === "Chicago") {
            $.location.setText('CHICAGO');
        } else if (selectedValues[0] === "Los Angeles") {
            $.location.setText('LOS ANGELES');
        } else if (selectedValues[0] === "New York") {
            $.location.setText('NEW YORK');
        }

        if (selectedValues[0] === "All") {
            Alloy.Globals.updateEventTable();
        } else {
            data = [];
            var newLocations = events.filterLocation(selectedValues[0]);
            console.log(newLocations.length);
            for (var i = 0; i < newLocations.length; i++) {
                var event = newLocations.at(i);
                data.push(Alloy.createController("eventRow", {
                    model: event
                }).getView());
            }

            $.eventTable.setData(data);
            $.eventTable.scrollToTop();
        }
    }
});

$.win1.add(picker.getView());

$.win1.open();