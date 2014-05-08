var PracticesShowRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('practice', params.id);
  }
});

export default PracticesShowRoute;
