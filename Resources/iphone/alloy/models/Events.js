exports.definition = {
    config: {
        adapter: {
            type: "properties",
            collection_name: "events"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {
            filterLocation: function(location) {
                var filteredList = _.filter(this.models, function(model) {
                    return model.get("area") === location;
                });
                console.log(filteredList.length);
                return Alloy.createCollection("events").add(filteredList);
            },
            comparator: function(activity) {
                var date = new Date(activity.get("start_date"));
                return date.getTime();
            }
        });
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("events", exports.definition, []);

collection = Alloy.C("events", exports.definition, model);

exports.Model = model;

exports.Collection = collection;