/**
 * Local favorite storage
 */
exports.definition = {
	config: {

		adapter: {
			type: "properties",
			collection_name: "favorites"
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
		});

		return Collection;
	}
};