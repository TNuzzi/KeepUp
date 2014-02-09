exports.definition = {
    config: {
        URL: "http://stepupapi.herokuapp.com/api/events",
        debug: false,
        adapter: {
            type: "restapi",
            collection_name: "eventsRest"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("eventsRest", exports.definition, []);

collection = Alloy.C("eventsRest", exports.definition, model);

exports.Model = model;

exports.Collection = collection;