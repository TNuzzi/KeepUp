exports.definition = {
    config: {
        adapter: {
            type: "properties",
            collection_name: "favorites"
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

model = Alloy.M("favorites", exports.definition, []);

collection = Alloy.C("favorites", exports.definition, model);

exports.Model = model;

exports.Collection = collection;