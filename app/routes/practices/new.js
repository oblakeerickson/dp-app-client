var PracticesNewRoute = Ember.Route.extend({
  model: function() {
    return this.store.createRecord('practice');
  }
});

export default PracticesNewRoute;
