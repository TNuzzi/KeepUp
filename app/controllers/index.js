var picker = Alloy.createWidget("wriststrap.picker", "widget", {
    data: [[{
            title: 'All',
            id: 'testId'
        },{
            title: 'Chicago',
            id: 'test1Id'
        },{
            title: 'Los Angeles',
            id: 'test2Id'
        },{
            title: 'New York',
            id: 'test3Id'
        }]],
    onDone: function (selectedValues) {
        alert(selectedValues);
    }
});

var test = [{
    "title": "Pathways to Professions Workshop",
    "description": "Mentor 11th graders as they explore career possibilities-- help a girl \"see what she can be!\"",
    "date": "1391860800",
    "location": "Pfizer World Headquarters 235 East 42nd Street New York, NY 10017",
    "updated_at": "1391774400",
    "category": "Teen Programs"
}, {
    "title": "Pathways to Professions Workshop",
    "description": "Mentor 11th graders as they explore career possibilities-- help a girl \"see what she can be!\"",
    "date": "1391860800",
    "location": "Pfizer World Headquarters 235 East 42nd Street New York, NY 10017",
    "updated_at": "1391774400",
    "category": "Teen Programs"
}, {
    "title": "Mentor for a day at Step Up's After School Programs at Johnson College Prep!",
    "description": "Help Step Up teens become confident, college-bound and career-ready while connecting with other dynamic, professional women and activating your inner philanthropist.",
    "date": "1392048000",
    "location": "Johnson College Prep 6350 S Stewart Ave. Room TBD Chicago, IL 60621",
    "updated_at": "1391774400",
    "category": "Networking"
}, {
    "title": "Mentor for a day at Step Up's After School Programs at Johnson College Prep!",
    "description": "Help Step Up teens become confident, college-bound and career-ready while connecting with other dynamic, professional women and activating your inner philanthropist.",
    "date": "1392048000",
    "location": "Johnson College Prep 6350 S Stewart Ave. Room TBD Chicago, IL 60621",
    "updated_at": "1391774400",
    "category": "Professional Development"
}];

var data = [];
for (var i = 0; i < test.length; i++) {
    var event = test[i];
    data.push(Alloy.createController("eventRow", event).getView());
};


$.eventTable.setData(data);

var favorites = Alloy.Collections.instance("favorites");
favorites.fetch();

function showMine() {
    alert("showMine");
}

function showLocations() {
    picker.getView().showPicker();
}
$.win1.add(picker.getView());
$.win1.open();