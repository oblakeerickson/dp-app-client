var PracticesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('practice');
  }
});

export default PracticesRoute;
