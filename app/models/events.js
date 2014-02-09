/**
 * Model for local cache of events.  Stored in properties files
 */
exports.definition = {
    config: {

        adapter: {
            type: "properties",
            collection_name: "events"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {
            // extended functions and properties go here
        });

        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {
            // extended functions and properties go here

            filterLocation: function(location) {
                var filteredList = _.filter(this.models, function(model) {
                    console.log(model.get("area"));
                    console.log(location);
                    return model.get("area") === location;
                });
                console.log(filteredList.length);
                return Alloy.createCollection("events").add(filteredList);

            },
            comparator: function(activity) {

                var date = new Date(activity.get('start_date'));
                return date.getTime();

            }
        });

        return Collection;
    }
};