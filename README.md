Keep Up with ![SUWN](http://www.briseeley.com/wp-content/uploads/2013/09/SUWNLogo-copy-300x171.jpg)
=======

Keep Up is a mobile app that regularly checks the Step Up Women's Network (SUWN) for calendar events and syncs them with the app. If events are changed or added, the app alerts SUWN attendees. App users can also favorite events and find events by location.

#Event Api

The events API can be access at `http://stepupapi.herokuapp.com/api/events`.  It is a straight for JSON array.  Each element in the array represent an event on the calendar.

Example JSON

    [{
        "id": 119,
        "guid": "34a566b2-c17e-8594-e405-ef1fa4be02b8",
        "title": "Mentor for a day at Step Up's After School Programs at Gertz-Ressler High School!",
        "description": "Help 9th-11th grade Step Up teens become confident, college-bound and career-ready",
        "date": "2014-05-03",
        "location": "Gertz-Ressler High School, 2023 S Union Ave, Los Angeles, CA 90007",
        "start_date": "2014-03-05T13:45:00.000Z",
        "end_date": "2014-03-05T15:30:00.000Z",
        "long_description": " Mentor for a day at Step Up's After School Programs\n ...",
        "created_at": "2014-02-09T14:45:02.376Z",
        "updated_at": "2014-02-09T14:45:02.376Z",
        "checksum": "ce913569d8291950c336c5ea9be724be",
        "area": "Los Angeles",
        "category": "Teen Programs",
        "url": "http://www.suwn.org/eventDetails.aspx?d=34a566b2-c17e-8594-e405-ef1fa4be02b8"
    } ...]

The source for backend api can be found at [https://github.com/joshstewart/hackuponacause-rails](https://github.com/joshstewart/hackuponacause-rails)
