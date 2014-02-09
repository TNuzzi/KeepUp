/**
 * Remote events servered from heroku
 */
exports.definition = {
	config: {
		URL: 'http://stepupapi.herokuapp.com/api/events',
		debug: false,
		adapter: {
			type: "restapi",
			collection_name: "eventsRest"
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